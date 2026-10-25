# Wedding Invitation V2 — Setup

## Status
This is a runnable **V2 starter implementation**, NOT published to GitHub. The existing V1 website and Apps Script Version 2 were not changed. All names, dates and images in the sample config are placeholders.

## 1. Preview locally
Serve the directory over HTTP (opening `index.html` as `file://` blocks JSON loading):

```sh
cd wedding-v2
python -m http.server 8000
```

Open `http://localhost:8000`.

## 2. Personalize
Edit `wedding.config.json`: names, portraits, hero photos, events, maps, gallery, website URL, forms, music. Images live in `assets/`. The supplied SVGs are placeholders and **must be replaced with real photos before publishing**. Dates and locations are fictional.

- Required events: `vu-quy`, `thanh-hon` (cannot be disabled).
- Optional events: `tiec-nha-gai`, `tiec-nha-trai`, `tiec-cuoi` (disabled by default).
- Every enabled event needs valid `startAt`, `endAt`, `venueName`, `address` and optional `mapUrl`.
- Times are ISO 8601 including timezone offset `+07:00`. End time must be after start time.
- `hero.defaultImage` is the fallback when event-specific hero images are not set. For **failed image requests**, add real local images and verify file names; the CSS default is a placeholder.
- Gallery `memoriesImages` only appear when `lifecycle.memoriesEnabled=true`.
- RSVP: set `rsvp.enabled=true` and use either `displayMode:"embedded"` + `embedUrl` or `displayMode:"external"` + `formUrl`.
- Background music: set `music.enabled=true` and `src`; autoplay is attempted silently, no music control.
- Set `site.url` to the final GitHub Pages URL to make QR sharing correct.

## 3. Guestbook — SAFE testing first
1. Make a **copy** of the existing Google Sheet; preserve column order A=timestamp, B=name, C=message, D=date.
2. Create a **new** Apps Script project and paste `backend/Code.gs`. Replace `TEST_SHEET_ID` with the **copied** Sheet ID. Do NOT edit or redeploy the V1 Version 2 script.
3. Deploy the test script as a Web App, with access needed for anonymous guests. Copy its `/exec` URL into `guestbook.apiUrl` and set `guestbook.enabled=true`.
4. Test loading, sending, multiline wishes, failures, and confirmation across browsers and GitHub Pages. Do not connect the production Sheet until these tests pass.
5. The frontend submits a hidden form to Apps Script and expects a nonce-matched `postMessage` ACK from the Google-hosted iframe. This mechanism **has not been validated against a live Apps Script deployment** and must be tested before claiming successful submission. If iframe sandbox behavior or browser policy prevents ACK, do not enable production submissions until a verified alternative is implemented.
6. This sample backend does not yet provide robust rate limiting, bot prevention or moderation. Public endpoints may be abused. Add protections and validate permissions before production.

Note: Apps Script `doGet` uses JSONP to work across origins. JSONP runs third-party JavaScript and should only point at an endpoint you trust. The callback is validated in the example backend.

## 4. Deploy on a separate GitHub repository
1. Create a new repository (e.g. `weddinginvitation-v2`) in your GitHub account.
2. Upload the **contents** of `wedding-v2/` to its root (including `index.html`).
3. In repository Settings → Pages, choose **Deploy from a branch** and select the default branch `/ (root)`.
4. Set `site.url` to the generated Pages URL, commit the change, and test on desktop/mobile.
5. Keep V1 unchanged; never overwrite its repository or production Apps Script deployment.

## 5. Acceptance criteria
See `docs/QA.md`. Key blockers: verify ACK after save, multiline fidelity, no duplicate posts, 20-per-page pagination, countdown transitions, and independent event visibility.
