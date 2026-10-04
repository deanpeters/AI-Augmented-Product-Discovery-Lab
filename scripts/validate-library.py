#!/usr/bin/env python3
"""Check portable metadata, chain integrity, local links and accidental secrets."""
import json
import re
import subprocess
import sys
from pathlib import Path
from library_assets import parse_frontmatter, resource_paths

ROOT = Path(__file__).resolve().parents[1]
errors = []
catalog = json.loads((ROOT / 'docs/catalog.json').read_text())
if [item['step'] for item in catalog] != list(range(1, 11)):
    errors.append('Catalog must contain the 10 ordered discovery motions.')
names = [item['name'] for item in catalog]
if len(set(names)) != len(names):
    errors.append('Duplicate skill names.')
actual = {p.parent.name for p in (ROOT / 'skills').glob('*/SKILL.md')}
if actual != set(names):
    errors.append('Catalog and skill folders disagree.')
for item in catalog:
    path = ROOT / 'skills' / item['name'] / 'SKILL.md'
    if not path.exists():
        errors.append(f'Missing {path}')
        continue
    try:
        fields, body = parse_frontmatter(path)
        if set(fields) != {'name', 'description', 'metadata'}:
            errors.append(f'{item["name"]}: unsupported metadata')
        if fields['name'] != item['name'] or not re.fullmatch(r'[a-z0-9-]{1,64}', fields['name']):
            errors.append(f'{item["name"]}: invalid name')
        if not isinstance(fields['description'], str) or len(fields['description']) > 240:
            errors.append(f'{item["name"]}: invalid description')
        required = {'author', 'version', 'intent', 'type', 'theme', 'phase', 'status',
                    'audience', 'best-for', 'evidence-required', 'produces', 'depends-on',
                    'combine-with', 'source-basis', 'template', 'worked-example', 'weak-example'}
        metadata = fields['metadata']
        if not required.issubset(metadata) or not all(isinstance(v, str) and v.strip() for v in metadata.values()):
            errors.append(f'{item["name"]}: incomplete rich metadata')
        if metadata.get('phase') != str(item['step']):
            errors.append(f'{item["name"]}: phase disagrees with catalog')
        for resource in resource_paths(path):
            if not resource.is_file():
                errors.append(f'{item["name"]}: missing bundled asset {resource.name}')
        for key in ('template', 'worked-example', 'weak-example'):
            if not (path.parent / metadata.get(key, 'MISSING')).is_file():
                errors.append(f'{item["name"]}: broken metadata resource {key}')
    except (ValueError, KeyError):
        errors.append(f'{item["name"]}: invalid frontmatter')
        continue
    for related in (item['prompt'], item['fallback']):
        if not (ROOT / related).is_file():
            errors.append(f'Missing {related}')
# Exclude Git internals and ignored local work; inspect distributable text only.
files = [p for p in ROOT.rglob('*') if p.is_file() and '.git' not in p.parts
         and p.suffix in {'.md', '.py', '.json', '.yml', '.sh'}
         and not any(x in p.relative_to(ROOT).parts for x in ('runs', 'rehearsal', '__pycache__'))
         and p.relative_to(ROOT).parts[0] not in ('sources', 'private', '.venv')]
secret_patterns = [r'gh[pousr]_[A-Za-z0-9]{30,}', r'AKIA[A-Z0-9]{16}',
                   r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',
                   r'sk-(?:proj-)?[A-Za-z0-9_-]{40,}']
for path in files:
    text = path.read_text()
    for pattern in secret_patterns:
        if re.search(pattern, text):
            errors.append(f'Possible credential in {path.relative_to(ROOT)} (value suppressed)')
    if path.suffix == '.md':
        for target in re.findall(r'\]\(([^)]+)\)', text):
            target = target.split('#', 1)[0]
            if not target or re.match(r'^[a-z]+:', target):
                continue
            if not (path.parent / target).exists():
                errors.append(f'{path.relative_to(ROOT)}: broken link {target}')
result = subprocess.run([sys.executable, str(ROOT / 'scripts/export-prompts.py'), '--check'], check=False)
if result.returncode:
    errors.append('Prompt parity check failed.')
if errors:
    raise SystemExit('\n'.join(errors))
print('PASS: 10 skills with rich metadata and bundled assets, catalog, prompt parity, local links, and basic credential patterns.')
print('Mechanical checks only; model behavior, rights clearance, and live rehearsal are separate.')
