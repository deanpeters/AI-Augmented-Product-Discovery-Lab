"""Recompute the illustrative economics from the shipped example's inputs."""
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXAMPLE = ROOT / 'skills/dlab-step05-value-prop-differentiation/examples/worked-example.md'


class CustomerValueTests(unittest.TestCase):
    def test_customer_and_provider_scenarios_use_separate_costs_and_realization(self):
        text = EXAMPLE.read_text()
        inputs = {}
        for line in text.splitlines():
            cells = [cell.strip() for cell in line.split('|')[1:-1]]
            if cells and re.fullmatch(r'H\d+', cells[0]):
                inputs[cells[0]] = [float(c) for c in cells[2:5]]
        self.assertEqual(set(inputs), {f'H{i}' for i in range(1, 12)})
        rows = {}
        for line in text.splitlines():
            cells = [cell.strip() for cell in line.split('|')[1:-1]]
            if len(cells) == 6 and cells[0] in ('Low', 'Base', 'High'):
                rows[cells[0]] = [float(c.replace('$', '').replace(',', ''))
                                 for c in cells[1:]]
        self.assertEqual(set(rows), {'Low', 'Base', 'High'})
        for index, scenario in enumerate(('Low', 'Base', 'High')):
            h = {key: values[index] for key, values in inputs.items()}
            realized = h['H1'] * h['H2'] * h['H3']
            customer_recurring = realized - h['H4'] - h['H5'] - h['H7']
            provider_recurring = h['H5'] - h['H8'] - h['H9'] - h['H10']
            self.assertEqual(rows[scenario], [realized,
                customer_recurring - h['H6'], customer_recurring,
                provider_recurring, provider_recurring - h['H11']])
        self.assertLess(rows['Low'][1], 0, 'Example must expose a losing customer scenario')
        self.assertGreater(rows['Base'][1], 0)
        base = {key: values[1] for key, values in inputs.items()}
        break_even = (base['H4'] + base['H5'] + base['H6'] + base['H7']) / (base['H2'] * base['H3'])
        self.assertAlmostEqual(break_even, 6.4)
        self.assertIn('6.4 avoided hours', text)
