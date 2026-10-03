#!/usr/bin/env python3
"""Export self-contained prompt equivalents from the canonical skill bodies."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def skill_body(path):
    text = path.read_text()
    if not text.startswith('---\n'):
        raise ValueError(f'Missing frontmatter: {path}')
    return text.split('\n---\n', 1)[1].strip()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if prompts are missing or stale')
    args = parser.parse_args()
    failures = []
    for item in json.loads((ROOT / 'docs/catalog.json').read_text()):
        source = ROOT / 'skills' / item['name'] / 'SKILL.md'
        target = ROOT / item['prompt']
        expected = (
            f"<!-- Generated from skills/{item['name']}/SKILL.md. Edit the skill, then run scripts/export-prompts.py. -->\n\n"
            'Copy everything inside the block into your AI chat. Add your context below it.\n'
            'No skill installation or access to this repository is needed.\n\n'
            '```text\n' + skill_body(source) + '\n\nBegin this motion now using the context I provide.\n```\n'
        )
        if args.check:
            if not target.exists() or target.read_text() != expected:
                failures.append(str(target.relative_to(ROOT)))
        else:
            target.write_text(expected)
    if failures:
        raise SystemExit('Missing or stale prompts: ' + ', '.join(failures))
    print('11 prompt equivalents match their skills.' if args.check else 'Exported 11 prompt equivalents.')


if __name__ == '__main__':
    main()
