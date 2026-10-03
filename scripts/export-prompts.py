#!/usr/bin/env python3
"""Export self-contained prompts, including each canonical skill's actual assets."""
import argparse
import json
from pathlib import Path
from library_assets import portable_skill

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if prompts or embedded assets are stale')
    args = parser.parse_args()
    catalog = json.loads((ROOT / 'docs/catalog.json').read_text())
    failures = []
    for item in catalog:
        source = ROOT / 'skills' / item['name'] / 'SKILL.md'
        target = ROOT / item['prompt']
        expected = (
            f"<!-- Generated from skills/{item['name']}/SKILL.md and its bundled assets. Edit canonical sources, then run scripts/export-prompts.py. -->\n\n"
            'Copy everything inside the block into your AI chat. Add your context below it.\n'
            'Instructions, template and examples are included. No repository access or skill installation is needed.\n\n'
            '````text\n' + portable_skill(source) + '\n\nBegin this motion now using the context I provide.\n````\n'
        )
        if args.check:
            if not target.exists() or target.read_text() != expected:
                failures.append(str(target.relative_to(ROOT)))
        else:
            target.write_text(expected)
    if failures:
        raise SystemExit('Missing or stale prompts: ' + ', '.join(failures))
    print(f'{len(catalog)} prompt equivalents match their skills and assets.' if args.check
          else f'Exported {len(catalog)} self-contained prompt equivalents.')


if __name__ == '__main__':
    main()
