#!/usr/bin/env bash
# Refresh every attendee-facing derivative before validating the canonical kit.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
python3 "$root/scripts/export-prompts.py"
python3 "$root/scripts/build-codex-plugin.py"
python3 "$root/scripts/package-plugin.py"
bash "$root/scripts/test-library.sh"
