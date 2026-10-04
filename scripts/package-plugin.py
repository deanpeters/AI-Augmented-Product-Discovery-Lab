#!/usr/bin/env python3
"""Package the dlab Claude plugin as an uploadable archive.

Claude's plugin upload (Customize) accepts a .zip or .plugin file whose root contains
.claude-plugin/plugin.json. This builds dist/dlab-<version>.plugin and a .zip copy.
"""
import json, re, shutil, zipfile
from urllib.parse import quote
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
manifest = json.loads((ROOT / ".claude-plugin/plugin.json").read_text())
version = manifest["version"]
name = manifest["name"]
dist = ROOT / "dist"
dist.mkdir(exist_ok=True)
out = dist / f"{name}-{version}.plugin"

files = [(ROOT / ".claude-plugin/plugin.json", ".claude-plugin/plugin.json"),
         (ROOT / "LICENSE", "LICENSE"),
         (ROOT / "docs/CHAIN.md", "docs/CHAIN.md"),
         (ROOT / "docs/SKILL-SPEC.md", "docs/SKILL-SPEC.md"),
         (ROOT / "docs/PROVENANCE.md", "docs/PROVENANCE.md")]
for folder in ("skills", "reference", "assets/productside/canvases"):
    for p in sorted((ROOT / folder).rglob("*")):
        if p.is_file() and p.name != ".DS_Store" and "__pycache__" not in p.parts:
            files.append((p, str(p.relative_to(ROOT))))

# The install guide becomes the archive-root README; repository-relative links
# must point to GitHub rather than to missing dist/docs folders in that archive.
def repository_link(match):
    target = match.group(1)
    if target.startswith(("https://", "http://", "#")):
        return match.group(0)
    resolved = (ROOT / "docs" / target).resolve().relative_to(ROOT)
    return "](" + manifest["repository"] + "/blob/main/" + quote(resolved.as_posix()) + ")"

readme = re.sub(r"\]\(([^)]+)\)", repository_link, (ROOT / "docs/PLUGIN.md").read_text())
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    z.writestr("README.md", readme)
    for src, arc in files:
        z.write(src, arc)
shutil.copy(out, out.with_suffix(".zip"))
print(f"wrote {out} ({out.stat().st_size // 1024} KB, {len(files) + 1} files) and {out.with_suffix('.zip').name}")
