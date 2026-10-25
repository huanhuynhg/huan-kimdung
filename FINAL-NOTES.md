# Wedding V2.17 Final

## Updates in this version
- Memories pagination displays up to 16 photos per page; dots appear only when there is more than one page.
- The original “Khoảnh khắc của chúng mình” gallery remains unpaginated and separate from Memories.
- After 00:00 Asia/Ho_Chi_Minh on the day after the configured Thành Hôn date, the site retains “Về chúng mình”, “Khoảnh khắc của chúng mình”, “Memories”, and “Lời chúc”. Ceremony details, RSVP, and contact sections are hidden in this post-ceremony state.
- Local QA controls and test-mode code are not present in app.js, index.html, or styles.css.

## Important setup before production
- The packaged `assets/memories/photos/` folder and `assets/memories/manifest.json` do not contain user-added photos. Copy the approved photo files into the folder and regenerate the manifest with `python scripts/build_memories_manifest.py` before deployment.
- Guestbook display is retained after the ceremony, but the current `wedding.config.json` has `guestbook.enabled: false` and an empty `guestbook.apiUrl`. To load existing wishes and accept new wishes in production, deploy/configure the separate Google Apps Script backend, set `guestbook.apiUrl`, and enable the appropriate guestbook settings. Until then, the section explains that the API needs configuration; no data is fabricated.
- GitHub Pages deployment has not been run. Confirm repository root structure, `main` branch workflow settings, and test on a browser before publishing.
- V1 remains untouched; this package has not been deployed.
