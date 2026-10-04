"""Guard the user-selected chain and the assets needed by skill and prompt users."""
import json
import re
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

    def test_demo_companion_has_twenty_matching_context_dump_launches(self):
        catalog = json.loads((ROOT / 'docs/catalog.json').read_text())
        text = (ROOT / 'examples/kickoff-prompts.md').read_text()
        headings = re.findall(r'^## (\d{2})\. (.+)$', text, re.M)
        self.assertEqual(headings, [(f"{item['step']:02d}", item['title'])
                                    for item in catalog])
        blocks = re.findall(r'```text\n(.*?)\n```', text, re.S)
        self.assertEqual(len(blocks), 2 * len(catalog))
        for index, item in enumerate(catalog):
            prompt, skill = blocks[index*2:index*2+2]
            prompt_command, prompt_context = prompt.split('\n', 1)
            skill_command, skill_context = skill.split('\n', 1)
            self.assertTrue(prompt_command.startswith('For '))
            self.assertIn('run this attached prompt in context dump mode', prompt_command)
            self.assertTrue(skill_command.startswith('/'+item['name']+
                                                     ' Run in context dump mode for '))
            self.assertEqual(prompt_context, skill_context,
                             'Prompt and skill launches must carry the same task/context.')
            self.assertIn('](../'+item['prompt']+')', text)

    def test_current_demo_case_matches_launch_context_and_chain(self):
        catalog = json.loads((ROOT / 'docs/catalog.json').read_text())
        case = json.loads((ROOT / 'evals/cases/16-predictive-maintenance-demo.json').read_text())
        self.assertEqual([stage['skill'] for stage in case['stages']],
                         [item['name'] for item in catalog])
        text = (ROOT / 'examples/kickoff-prompts.md').read_text()
        blocks = re.findall(r'```text\n(.*?)\n```', text, re.S)
        for index, stage in enumerate(case['stages']):
            command, body = blocks[index*2+1].split('\n', 1)
            audience = command.split('Run in context dump mode for ', 1)[1]
            self.assertTrue(stage['invocation'].startswith('Mode: Context dump.'))
            self.assertIn(audience, stage['invocation'])
            self.assertIn(body, stage['invocation'],
                          'A changed demo launch requires refreshing its rehearsal fixture.')
            self.assertTrue(stage['gate_reply'].startswith(
                'Scripted evaluation participant choice:'))

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

    def test_ignored_research_links_do_not_hide_broken_library_links(self):
        with tempfile.TemporaryDirectory() as tmp:
            copy = Path(tmp) / 'lab'
            shutil.copytree(ROOT, copy, ignore=shutil.ignore_patterns(
                '.git', 'runs', '__pycache__', 'sources', 'private', '.venv'))
            research = copy / 'sources/raw-page.md'
            research.parent.mkdir()
            research.write_text('[Website navigation](/unavailable-navigation)')
            command = [sys.executable, str(copy / 'scripts/validate-library.py')]
            valid = subprocess.run(command, capture_output=True, text=True)
            self.assertEqual(valid.returncode, 0, valid.stdout + valid.stderr)
            public_doc = copy / 'docs/broken-reference.md'
            public_doc.write_text('[Missing lab asset](missing-lab-asset.md)')
            invalid = subprocess.run(command, capture_output=True, text=True)
            self.assertNotEqual(invalid.returncode, 0)
            self.assertIn('missing-lab-asset.md', invalid.stdout + invalid.stderr)

    def test_segment_example_counts_and_annual_values_match_its_inputs(self):
        from decimal import Decimal
        text = (ROOT / 'skills/dlab-step02-segment/examples/worked-example.md').read_text()
        scenarios = text.split('## Scenario inputs and results', 1)[1]
        counts, values = scenarios.split('Optional annualized price scenarios', 1)

        def row(section, label):
            line = next(line for line in section.splitlines()
                        if line.startswith('| '+label+' |'))
            return [cell.strip() for cell in line.split('|')[2:5]]

        def numbers(section, label):
            return [Decimal(cell.replace(',', '').replace('$', '').replace('%', ''))
                    for cell in row(section, label)]

        population = numbers(counts, 'Relevant population')
        intersection = numbers(counts, 'Industry-qualified intersection')
        fit = numbers(counts, 'Service/need fit within intersection')
        reach = numbers(counts, 'Qualified reachable sites')
        win = numbers(counts, 'Win rate')
        acquisition = numbers(counts, 'Acquisition capacity')
        onboarding = numbers(counts, 'Onboarding capacity')
        price = numbers(counts, 'Annual price per site')
        sam = [base * share / 100 for base, share in zip(intersection, fit)]
        som = [min(sam[i], reach[i] * win[i] / 100, acquisition[i], onboarding[i])
               for i in range(3)]
        self.assertEqual(numbers(counts, 'TAM'), population)
        self.assertEqual(numbers(counts, 'SAM'), sam)
        self.assertEqual(numbers(counts, 'SOM, first 12 months'), som)
        for label, units in [('TAM', population), ('SAM', sam),
                             ('SOM endpoint annualized value', som)]:
            self.assertEqual(numbers(values, label), [n * p for n, p in zip(units, price)])
        for total, available, obtainable in zip(population, sam, som):
            self.assertLessEqual(obtainable, available)
            self.assertLessEqual(available, total)

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
