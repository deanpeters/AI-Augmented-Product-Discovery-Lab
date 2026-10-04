"""Check the shipped OST diagrams' hierarchy and plain-text parity.

This verifies the example/template, not a model's discovery judgment.
"""
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'skills/dlab-step04-opportunity-solution-tree'


def diagram_graph(text):
    diagram = re.search(r'```mermaid\n(.*?)\n```', text, re.S).group(1)
    nodes = set(re.findall(r'\b([YOSE]\d+)\[', diagram))
    edges = set(re.findall(r'\b([YOSE]\d+)\s*-->\s*([YOSE]\d+)', diagram))
    return nodes, edges


def plain_graph(text):
    tree = re.search(r'```text\n(Y0:.*?)\n```', text, re.S).group(1)
    nodes, edges, stack = set(), set(), {}
    for line in tree.splitlines():
        match = re.fullmatch(r'( *)(?:\+-- )?([YOSE]\d+): (.+)', line)
        if not match:
            raise ValueError('Unexpected plain-tree line')
        indent, node, _ = match.groups()
        depth = 0 if node == 'Y0' else len(indent) // 2 + 1
        if node in nodes:
            raise ValueError('Duplicate plain-tree ID')
        nodes.add(node)
        if depth:
            edges.add((stack[depth-1], node))
        stack[depth] = node
    return nodes, edges


class OstTreeTests(unittest.TestCase):
    def assert_tree(self, nodes, edges):
        self.assertEqual({n for n in nodes if n.startswith('Y')}, {'Y0'})
        self.assertTrue(all(a in nodes and b in nodes for a, b in edges))
        allowed = {('Y', 'O'), ('O', 'S'), ('S', 'E')}
        self.assertTrue(all((a[0], b[0]) in allowed for a, b in edges))
        for node in nodes - {'Y0'}:
            self.assertEqual(sum(b == node for _, b in edges), 1,
                             f'{node} needs exactly one primary parent')
        opportunities = {n for n in nodes if n.startswith('O')}
        self.assertGreaterEqual(len(opportunities), 3)
        for opportunity in opportunities:
            self.assertGreaterEqual(sum(a == opportunity for a, _ in edges), 2)
        for solution in (n for n in nodes if n.startswith('S')):
            self.assertGreaterEqual(sum(a == solution for a, _ in edges), 1,
                                    f'{solution} has no assumption test')
        reachable = {'Y0'}
        for _ in nodes:
            reachable.update(b for a, b in edges if a in reachable)
        self.assertEqual(reachable, nodes)

    def test_template_and_worked_tree_have_real_branches_and_matching_fallbacks(self):
        for name in ('template.md', 'examples/worked-example.md'):
            with self.subTest(asset=name):
                text = (ASSETS / name).read_text()
                nodes, edges = diagram_graph(text)
                self.assert_tree(nodes, edges)
                self.assertEqual(plain_graph(text), (nodes, edges))

    def test_flattened_or_orphaned_example_branches_fail(self):
        nodes, edges = diagram_graph((ASSETS / 'examples/worked-example.md').read_text())
        for invalid in (edges - {('S1', 'E1')},
                        edges - {('O1', 'S1')} | {('Y0', 'S1')}):
            with self.assertRaises(AssertionError):
                self.assert_tree(nodes, invalid)
