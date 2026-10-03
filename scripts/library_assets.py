"""Portable skill metadata and resource bundling shared by export, validation and evals."""
import json
from pathlib import Path

RESOURCES = ('template.md', 'examples/worked-example.md', 'examples/weak-example.md')


def parse_frontmatter(path):
    text = Path(path).read_text()
    if not text.startswith('---\n') or '\n---\n' not in text:
        raise ValueError(f'Missing frontmatter: {path}')
    front, body = text[4:].split('\n---\n', 1)
    metadata, fields = {}, {}
    in_metadata = False
    for line in front.splitlines():
        if line == 'metadata:':
            in_metadata = True
            continue
        if line.startswith('  ') and in_metadata:
            key, value = line[2:].split(': ', 1)
            metadata[key] = json.loads(value)
        else:
            in_metadata = False
            key, value = line.split(': ', 1)
            fields[key] = value if key == 'name' else json.loads(value)
    fields['metadata'] = metadata
    return fields, body.strip()


def resource_paths(skill):
    return [Path(skill).parent / name for name in RESOURCES]


def portable_skill(skill):
    """Embed actual supporting assets so pasted prompts and tool-free evals need no file access."""
    skill = Path(skill)
    _, body = parse_frontmatter(skill)
    replacements = {
        '(template.md)': '(#artifact-template)',
        '(examples/worked-example.md)': '(#worked-example)',
        '(examples/weak-example.md)': '(#weak-example)',
        '(worked-example.md)': '(#worked-example)',
    }
    sections = [body]
    for heading, path in zip(('Artifact template', 'Worked example', 'Weak example'), resource_paths(skill)):
        sections.append('# '+heading+'\n\n'+path.read_text().strip())
    text = '\n\n'.join(sections)
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text
