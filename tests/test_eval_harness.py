"""Regression checks: broken chains and untraceable reviews must fail, without model calls."""
import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('eval_runner', ROOT / 'scripts/run-evals.py')
runner = importlib.util.module_from_spec(spec)
spec.loader.exec_module(runner)


class EvalHarnessTests(unittest.TestCase):
    def test_dropped_handoff_does_not_forward_whole_artifact(self):
        with self.assertRaises(ValueError):
            runner.extract_handoff('A convincing artifact, but no transport handoff.')
        with self.assertRaises(ValueError):
            runner.extract_handoff('<handoff>Target: manager\nEvidence: none</handoff>')

    def test_only_handoff_crosses_stage_boundary(self):
        fields = '\n'.join(label+' UNKNOWN' for label in runner.LABELS)
        text = 'SECRET FULL ARTIFACT\n<handoff>'+fields+'</handoff>\nGate: wait'
        self.assertEqual(runner.extract_handoff(text), fields)
        self.assertNotIn('SECRET', runner.extract_handoff(text))

    def test_parenthetical_field_annotation_preserves_real_handoff(self):
        fields = '\n'.join(label+' UNKNOWN' for label in runner.LABELS)
        fields = fields.replace('What we believe:', 'What we believe (hypothesis):')
        self.assertEqual(runner.extract_handoff('<handoff>'+fields+'</handoff>'), fields)
        missing = fields.replace('What we believe (hypothesis): UNKNOWN', '')
        with self.assertRaises(ValueError):
            runner.extract_handoff('<handoff>'+missing+'</handoff>')

    def test_resume_counts_complete_turns_not_inferred_approvals(self):
        case = {'stages': [{'turns': [], 'gate_reply': 'Approve'}, {'turns': []}]}
        run = {'case': case, 'responses': [{'id': 'stage-01-turn-01'}]}
        self.assertEqual(runner.completed_stage_count(run), 0)
        run['responses'].append({'id': 'stage-01-turn-02'})
        self.assertEqual(runner.completed_stage_count(run), 1)

    def test_forged_quote_or_unmatched_transcript_cannot_pass(self):
        run = {'case': {'criteria': [{'id': 'honesty'}]},
               'responses': [{'id': 'r1', 'text': 'No experiment has run.'}]}
        review = {'transcript_sha256': runner.evidence_hash(run),
                  'criteria': [{'id': 'honesty', 'verdict': 'pass', 'reason': 'No invented results',
                                'evidence': [{'response_id': 'r1', 'quote': 'No experiment has run.'}]}]}
        self.assertEqual(runner.review_errors(run, review), [])
        review['criteria'][0]['evidence'][0]['quote'] = 'Customers validated demand.'
        self.assertTrue(runner.review_errors(run, review))
        review['transcript_sha256'] = 'unmatched'
        self.assertIn('Review does not match this transcript', runner.review_errors(run, review))

    def test_omitted_or_unreviewed_criterion_cannot_pass(self):
        run = {'case': {'criteria': [{'id': 'gate'}, {'id': 'source'}]}, 'responses': []}
        review = {'transcript_sha256': runner.evidence_hash(run), 'criteria': []}
        self.assertTrue(runner.review_errors(run, review))

    def test_broken_case_stage_reference_is_rejected(self):
        from unittest.mock import patch
        with tempfile.TemporaryDirectory() as tmp:
            cases = Path(tmp)
            case = runner.load_case('02-guided-reuse')
            case['stages'][0]['skill'] = 'missing-stage'
            (cases / (case['id']+'.json')).write_text(json.dumps(case))
            with patch.object(runner, 'CASES', cases):
                with self.assertRaisesRegex(AssertionError, 'broken stage reference'):
                    runner.validate_cases()

    def test_saved_run_without_review_or_with_stale_source_is_not_a_pass(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = Path(tmp)
            case = runner.load_case('02-guided-reuse')
            source = 'skills/'+case['stages'][0]['skill']+'/SKILL.md'
            run = {'case': case, 'case_sha256': runner.digest(json.dumps(case, sort_keys=True)),
                   'sources': {source: runner.digest((ROOT / source).read_text())},
                   'status': 'completed', 'responses': [], 'human_verdict': 'not recorded'}
            (folder / 'run.json').write_text(json.dumps(run))
            command = [sys.executable, str(ROOT / 'scripts/run-evals.py'), 'check', str(folder)]
            result = subprocess.run(command, capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('UNREVIEWED', result.stderr)
            run['sources'][source] = 'old-version'
            (folder / 'run.json').write_text(json.dumps(run))
            result = subprocess.run(command, capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('STALE RUN', result.stderr)

    def test_subject_packet_sources_match_catalog(self):
        case = runner.load_case('02-guided-reuse')
        packet = json.loads(runner.packet(case, 'prompt'))
        self.assertIn('Copy everything inside', packet['skill_sources'][case['stages'][0]['skill']])

    def test_stale_prompt_and_missing_link_fail_mechanical_check(self):
        import shutil
        with tempfile.TemporaryDirectory() as tmp:
            copy = Path(tmp) / 'lab'
            shutil.copytree(ROOT, copy, ignore=shutil.ignore_patterns('.git', 'runs', '__pycache__'))
            prompt = copy / 'prompts/03-persona.md'
            prompt.write_text(prompt.read_text()+'\nPrompt drift\n')
            result = subprocess.run([sys.executable, str(copy / 'scripts/export-prompts.py'), '--check'], capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            subprocess.run([sys.executable, str(copy / 'scripts/export-prompts.py')], check=True, capture_output=True)
            readme = copy / 'README.md'
            readme.write_text(readme.read_text()+'\n[Lost handoff](missing-handoff.md)\n')
            result = subprocess.run([sys.executable, str(copy / 'scripts/validate-library.py')], capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('broken link', result.stderr)


if __name__ == '__main__':
    unittest.main()
