#!/usr/bin/env python3
"""Build or verify a deterministic, explicitly allowlisted discovery kit."""
import argparse
import io
import json
import re
import zipfile
from pathlib import Path

from library_assets import RESOURCES, codex_skill_bytes

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'plugins/codex.plugin'
PACKAGE_README = '''# AI-Augmented Product Discovery Lab

Ten discovery skills with matching prompts, templates and worked/weak examples.
Start at the decision you need to make; earlier artifacts are optional.
Choose Guided, Context dump or Best guess and stop for a human decision.
Synthetic examples generate hypotheses, not customer evidence.

The skills live in skills/, prompt equivalents in prompts/, and the motion list
in docs/catalog.json. Optional Productside references retain their attribution.
Original lab materials: CC BY-NC-SA 4.0; Productside assets are excluded from
that license. See LICENSE and docs/PROVENANCE.md.

Installation and demo companion:
https://github.com/deanpeters/AI-Augmented-Product-Discovery-Lab/blob/main/docs/CODEX-PLUGIN.md
https://github.com/deanpeters/AI-Augmented-Product-Discovery-Lab/blob/main/examples/kickoff-prompts.md

This kit has no MCP server, hooks, credentials or autonomous chain runner.
'''


def archive_paths(root):
    manifest = json.loads((root / 'plugin.json').read_text())
    name, version = manifest['name'], manifest['version']
    if not re.fullmatch(r'[a-z0-9-]+', name) or not re.fullmatch(r'\d+\.\d+\.\d+', version):
        raise ValueError('Distribution names require a kebab-case name and x.y.z version')
    stem = root / 'dist' / f'{name}-codex-{version}'
    return (root / 'plugins/codex.plugin',
            Path(str(stem) + '.plugin'), Path(str(stem) + '.zip'))


def package_files(root):
    """Never sweep a checkout: local research, decks and transcripts stay out."""
    catalog = json.loads((root / 'docs/catalog.json').read_text())
    manifest = json.loads((root / 'plugin.json').read_text())
    overlay = json.loads((root / '.codex-plugin/plugin.json').read_text())
    for key in ('name', 'version', 'description', 'license'):
        if overlay[key] != manifest[key]:
            raise ValueError(f'Codex manifest disagrees on {key}')
    if overlay['skills'] != './skills/':
        raise ValueError('Codex skills must point to ./skills/')
    marketplace = json.loads((root / '.agents/plugins/marketplace.json').read_text())
    entry, = marketplace['plugins']
    if entry['name'] != manifest['name'] or entry['source'] != {'source': 'local', 'path': './'}:
        raise ValueError('Marketplace must expose the canonical plugin root')
    paths = ['plugin.json', '.codex-plugin/plugin.json', 'LICENSE',
             'docs/catalog.json', 'docs/CHAIN.md', 'docs/SKILL-SPEC.md', 'docs/SEARCHING-PHILOSOPHY.md',
             'docs/PROVENANCE.md', 'docs/CUSTOMER-VALUE-AND-DIFFERENTIATION.md', 'reference/supplied-canvases.md']
    canvas_names = ['README.md', 'creating-proto-personas.png',
                    'positioning-statement-competitive-matrix.png',
                    'aipm.epic-level-solution-hypothesis.pdf',
                    'aipm.minimum-viable-narrative.pdf',
                    '02.canvas.framing-jtbt-and-problem.pdf',
                    '01.canvas.storyboarding-example.pdf']
    paths.extend('assets/productside/canvases/' + name for name in canvas_names)
    for item in catalog:
        paths.extend(f"skills/{item['name']}/{name}" for name in ('SKILL.md',) + RESOURCES)
        paths.extend((item['prompt'], item['fallback']))
    files = {'README.md': PACKAGE_README.encode()}
    for name in paths:
        path = root / name
        if path.is_symlink() or not path.resolve().is_relative_to(root.resolve()):
            raise ValueError(f'Package asset must stay inside the checkout: {name}')
        files[name] = codex_skill_bytes(path) if name.endswith('/SKILL.md') else path.read_bytes()
    return files


def archive_bytes(files):
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, 'w', compression=zipfile.ZIP_DEFLATED) as archive:
        for name, data in sorted(files.items()):
            info = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, data)
    return buffer.getvalue()


def check_archive(path, files):
    with zipfile.ZipFile(path) as archive:
        names = archive.namelist()
        if len(names) != len(set(names)) or set(names) != set(files):
            raise ValueError('Plugin contains missing, unexpected or duplicate files')
        if archive.testzip() is not None:
            raise ValueError('Plugin ZIP integrity check failed')
        for name, data in files.items():
            if archive.read(name) != data:
                raise ValueError(f'Stale plugin asset: {name}; rebuild the plugin')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Reject a missing or stale bundle')
    args = parser.parse_args()
    try:
        files = package_files(ROOT)
        outputs = archive_paths(ROOT)
        if not args.check:
            data = archive_bytes(files)
            for output in outputs:
                output.parent.mkdir(exist_ok=True)
                output.write_bytes(data)
        for output in outputs:
            check_archive(output, files)
        if len({output.read_bytes() for output in outputs}) != 1:
            raise ValueError('Codex .plugin and .zip copies differ; rebuild the plugin')
    except (OSError, ValueError, KeyError, zipfile.BadZipFile) as error:
        raise SystemExit(str(error)) from error
    print(f'PASS: Codex .plugin/.zip copies match, 10 skills and matching prompts; {len(files)} allowlisted files.')


if __name__ == '__main__':
    main()
