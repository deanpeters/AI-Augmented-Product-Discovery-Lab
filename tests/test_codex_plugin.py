"""Distribution regressions: stale skills and private extras must fail."""
import importlib.util
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
spec = importlib.util.spec_from_file_location('build_codex_plugin', ROOT / 'scripts/build-codex-plugin.py')
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)


class CodexPluginTests(unittest.TestCase):
    def test_archive_matches_canonical_skills_and_is_deterministic(self):
        files = builder.package_files(ROOT)
        outputs = builder.archive_paths(ROOT)
        for output in outputs:
            builder.check_archive(output, files)
        self.assertEqual(len({output.read_bytes() for output in outputs}), 1)
        self.assertEqual(builder.archive_bytes(files), builder.archive_bytes(files))
        self.assertEqual(sum(name.endswith('/SKILL.md') for name in files), 10)

    def test_stale_skill_and_unexpected_private_file_are_rejected(self):
        files = builder.package_files(ROOT)
        skill = 'skills/dlab-step03-persona/SKILL.md'
        with tempfile.TemporaryDirectory() as temporary:
            archive = Path(temporary) / 'codex.plugin'
            stale = dict(files)
            stale[skill] += b'\nOutdated instructions.\n'
            archive.write_bytes(builder.archive_bytes(stale))
            with self.assertRaisesRegex(ValueError, 'Stale plugin asset'):
                builder.check_archive(archive, files)
            archive.write_bytes(builder.archive_bytes(files))
            with zipfile.ZipFile(archive, 'a') as package:
                package.writestr('private/rehearsal.txt', 'Do not distribute')
            with self.assertRaisesRegex(ValueError, 'unexpected'):
                builder.check_archive(archive, files)


if __name__ == '__main__':
    unittest.main()
