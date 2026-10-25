# Memories photos

Place all post-wedding memory photos in `photos/` (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`).
Every deployment runs `scripts/build_memories_manifest.py`, scans this folder, and regenerates `manifest.json` automatically. No per-photo JSON edits are needed.

New files must be committed/pushed to the GitHub repository to be included in the next deployment. The site is static; it cannot read files that exist only on your computer.
