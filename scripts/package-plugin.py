#!/usr/bin/env python3
"""Build or check the Claude .plugin and identical .zip distribution."""
import argparse
import io
import json
import re
import zipfile
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent


def package_files(root):
    manifest = json.loads((root / ".claude-plugin/plugin.json").read_text())
    marketplace = json.loads((root / ".claude-plugin/marketplace.json").read_text())
    entry, = marketplace["plugins"]
    if (entry["name"], entry["version"]) != (manifest["name"], manifest["version"]):
        raise ValueError("Claude marketplace identity/version does not match its plugin")
    paths = [".claude-plugin/plugin.json", "LICENSE", "docs/CHAIN.md",
             "docs/SKILL-SPEC.md", "docs/PROVENANCE.md"]
    for folder in ("skills", "reference", "assets/productside/canvases"):
        for path in sorted((root / folder).rglob("*")):
            if path.is_file() and path.name != ".DS_Store" and "__pycache__" not in path.parts:
                if path.is_symlink() or not path.resolve().is_relative_to(root.resolve()):
                    raise ValueError(f"Package asset escapes checkout: {path}")
                paths.append(path.relative_to(root).as_posix())

    # The guide becomes the root README; repository links must still work there.
    def repository_link(match):
        target = match.group(1)
        if target.startswith(("https://", "http://", "#")):
            return match.group(0)
        resolved = (root / "docs" / target).resolve().relative_to(root)
        return "](" + manifest["repository"] + "/blob/main/" + quote(resolved.as_posix()) + ")"

    readme = re.sub(r"\]\(([^)]+)\)", repository_link,
                    (root / "docs/PLUGIN.md").read_text())
    files = {name: (root / name).read_bytes() for name in paths}
    files["README.md"] = readme.encode()
    return files


def archive_paths(root):
    manifest = json.loads((root / ".claude-plugin/plugin.json").read_text())
    name, version = manifest["name"], manifest["version"]
    if not re.fullmatch(r"[a-z0-9-]+", name) or not re.fullmatch(r"\d+\.\d+\.\d+", version):
        raise ValueError("Distribution names require a kebab-case name and x.y.z version")
    stem = root / "dist" / f"{name}-claude-{version}"
    return Path(str(stem) + ".plugin"), Path(str(stem) + ".zip")


def archive_bytes(files):
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as archive:
        for name, data in sorted(files.items()):
            info = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, data)
    return buffer.getvalue()


def check_archive(path, files):
    with zipfile.ZipFile(path) as archive:
        names = archive.namelist()
        if len(names) != len(set(names)) or set(names) != set(files):
            raise ValueError("Claude plugin contains missing, unexpected or duplicate files")
        if archive.testzip() is not None:
            raise ValueError("Claude ZIP integrity check failed")
        for name, data in files.items():
            if archive.read(name) != data:
                raise ValueError(f"Stale Claude plugin asset: {name}; run bash scripts/refresh-library.sh")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Reject missing/stale bundles without writing")
    args = parser.parse_args()
    try:
        files = package_files(ROOT)
        outputs = archive_paths(ROOT)
        if not args.check:
            data = archive_bytes(files)
            for output in outputs:
                output.parent.mkdir(exist_ok=True)
                output.write_bytes(data)
        for output in outputs:
            check_archive(output, files)
        if outputs[0].read_bytes() != outputs[1].read_bytes():
            raise ValueError("Claude .plugin and .zip copies differ; rebuild both")
    except (OSError, ValueError, KeyError, zipfile.BadZipFile) as error:
        raise SystemExit(str(error)) from error
    print(f"PASS: Claude .plugin/.zip copies match canonical assets; {len(files)} files.")


if __name__ == "__main__":
    main()
