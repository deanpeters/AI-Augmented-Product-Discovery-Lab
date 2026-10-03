"""Guard the user-selected chain and the assets needed by skill and prompt users."""
import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
from library_assets import parse_frontmatter, portable_skill, resource_paths

EXPECTED = [
    'Market Intel', 'Segment', 'Persona', 'Opportunity Solution Tree',
    'Value Prop vs. Differentiation 2x2', 'Positioning Statement',
    'Solution Hypothesis', 'Storyboard', 'Minimum Viable Narrative', 'Prototyping',
]


class LibraryContractTests(unittest.TestCase):
    def test_exact_chain_and_full_case_order(self):
        catalog = json.loads((ROOT / 'docs/catalog.json').read_text())
        self.assertEqual([item['title'] for item in catalog], EXPECTED)
        case = json.loads((ROOT / 'evals/cases/01-full-chain.json').read_text())
        self.assertEqual([stage['skill'] for stage in case['stages']],
                         [item['name'] for item in catalog])

    def test_tool_free_packets_embed_actual_assets(self):
        for item in json.loads((ROOT / 'docs/catalog.json').read_text()):
            skill = ROOT / 'skills' / item['name'] / 'SKILL.md'
            metadata, _ = parse_frontmatter(skill)
            self.assertEqual(metadata['metadata']['phase'], str(item['step']))
            packet = portable_skill(skill)
            for heading in ('# Artifact template', '# Worked example', '# Weak example'):
                self.assertIn(heading, packet)
            for resource in resource_paths(skill):
                # Links are translated to internal anchors; actual resource text is retained.
                first_line = resource.read_text().splitlines()[0]
                self.assertIn(first_line, packet)
            self.assertNotIn('(template.md)', packet)
            self.assertNotIn('(examples/worked-example.md)', packet)
            prompt = (ROOT / item['prompt']).read_text()
            self.assertEqual(prompt.count('````'), 2)
            self.assertIn(packet, prompt)

    def test_asset_edit_invalidates_prompt_parity(self):
        with tempfile.TemporaryDirectory() as tmp:
            copy = Path(tmp) / 'lab'
            shutil.copytree(ROOT, copy, ignore=shutil.ignore_patterns('.git', 'runs', '__pycache__'))
            example = copy / 'skills/dlab-step03-persona/examples/worked-example.md'
            example.write_text(example.read_text()+'\nChanged research limitation.\n')
            result = subprocess.run([sys.executable, str(copy / 'scripts/export-prompts.py'), '--check'],
                                    capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('prompts/03-persona.md', result.stderr)

    def test_missing_template_rejects_library(self):
        with tempfile.TemporaryDirectory() as tmp:
            copy = Path(tmp) / 'lab'
            shutil.copytree(ROOT, copy, ignore=shutil.ignore_patterns('.git', 'runs', '__pycache__'))
            (copy / 'skills/dlab-step03-persona/template.md').unlink()
            result = subprocess.run([sys.executable, str(copy / 'scripts/validate-library.py')],
                                    capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('missing bundled asset', result.stderr)


if __name__ == '__main__':
    unittest.main()
