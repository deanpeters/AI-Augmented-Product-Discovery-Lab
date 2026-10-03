#!/usr/bin/env bash
# Fetch a web page to markdown with Scrapling (pip install scrapling). Falls back to the stealth fetcher.
# Usage: scripts/fetch-page.sh <url> <out.md>
set -euo pipefail
url="$1"; out="$2"
if scrapling extract get "$url" "$out" >/dev/null 2>&1 && [ "$(wc -c < "$out")" -gt 3000 ]; then
  echo "fetched with get: $out"
else
  scrapling extract stealthy-fetch "$url" "$out" >/dev/null 2>&1
  echo "fetched with stealthy-fetch: $out"
fi
