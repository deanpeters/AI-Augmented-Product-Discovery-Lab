#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
python3 "$root/scripts/validate-library.py"
python3 "$root/scripts/run-evals.py" validate
python3 "$root/scripts/build-codex-plugin.py" --check
python3 "$root/scripts/package-plugin.py" --check
python3 -m unittest discover -s "$root/tests" -v
