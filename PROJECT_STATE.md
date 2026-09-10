# HEVAL STAGE — PROJECT STATE

## Identity
- Project: HEVAL STAGE
- Purpose: The World of Adam & Asr — an expandable digital universe.
- Repository: `hossammax005/heval-stage`
- Branch: `main`
- Deployment target: GitHub Pages
- Current application state is recorded by the latest commit on `main`.

## Current Architecture
- Static web application: HTML + CSS + vanilla JavaScript.
- Entry page: `index.html`.
- Presentation: `style.css`.
- Runtime/client behavior: `script.js`.
- Placeholder pages: `adam.html`, `asr.html` (currently empty).
- `script.js` contains the animated star-field canvas, Web Audio effects, World Hub navigation, Gift Gate UI, and a POST call to the external Gift authentication backend.
- Gift Gate backend URL is referenced client-side in `script.js`; no secret key is stored in the repository.

## Current Step
**STEP 1 — World Hub + Gift frontend hardening.**

Completed approved scope:
1. `دخول العالم 🌌` now opens a real World Hub inside `index.html` without introducing a framework or separate application.
2. World Hub exposes the current Adam and Asr placeholder sectors plus the existing Gift Gate.
3. Gift response rendering no longer injects backend-controlled `message` or `galleryUrl` through `innerHTML`.
4. Gallery URLs are parsed and restricted to HTTP/HTTPS before becoming links; external links use `noopener noreferrer`.
5. Existing star field, Web Audio, Gift backend integration, visual identity, and placeholder pages were preserved.

## Decisions
- Preserve the existing project structure unless a change is explicitly approved.
- GitHub is the canonical source of the current project state.
- AI/Agent memory is not a source of truth.
- Future workflow: Architect/Gatekeeper reviews and plans; an Executor AI (Gemini/Claude/Codex/etc.) performs approved implementation; GitHub records the resulting source.
- Prefer the smallest safe change that achieves the approved goal.
- Do not rewrite or over-engineer the project without an explicit architectural reason.
- HEVAL STAGE remains one expandable digital world, not a collection of unrelated sites.

## Security / Safety Rules
- Never commit API keys, passwords, tokens, private credentials, or other secrets.
- Do not place secrets in client-side JavaScript for a static public site.
- Treat external Gift authentication/backend behavior as a separate security boundary.
- Do not weaken or bypass server-side protection in future Gift work merely to simplify the frontend.
- Treat all external backend response fields as untrusted data.
- Use DOM APIs/textContent for backend-controlled text and validate URLs before rendering links.
- Preserve user privacy and avoid exposing private gallery content through public/static files.

## Current UI / Features
- Dark space-themed landing screen.
- Brand text: `𝖍ø§§ā𝖒`.
- `HEVAL STAGE - DIGITAL UNIVERSE` subtitle.
- `دخول العالم 🌌` opens the World Hub in-place.
- World Hub shows ADAM, ASR, and GIFT GATE entry points.
- `🎁 GIFT GATE` opens a modal for a secret key.
- Gift authentication is sent to the external `/auth` endpoint.
- Gift success/error/loading states are rendered without HTML injection from backend data.
- Global sound toggle and generated tones are implemented.
- Animated star background is implemented.

## Tests / Verification
- Application files were inspected directly from GitHub before editing.
- Writes were made against the exact current blob SHAs; one stale-SHA conflict was rejected by GitHub and retried against the freshly fetched file state.
- No automated test suite is currently present in the repository.
- Manual verification is still required on the deployed GitHub Pages site for layout, navigation, and live Gift backend behavior.

## Known Risks / Gaps
- `adam.html` and `asr.html` are placeholders.
- No automated CI/test layer yet.
- GitHub Pages deployment status should be treated as a deployment concern separate from source correctness.
- The Gift backend itself remains outside this repository and must be reviewed separately for authorization, rate limiting, CORS, and private gallery protection.
- World Hub is intentionally lightweight; cinematic transitions and deeper sector experiences remain future work.

## Next Step
**Gate Review after deployment verification.**

Verify the live GitHub Pages build, especially:
- landing → World Hub navigation
- back navigation
- Adam/Asr placeholder links
- Gift Gate open/close and authentication behavior
- Gift success/error rendering
- no regression in star field and sound

Only after this verification should the next feature be approved.

## DO NOT CHANGE
- Do not change the existing visual identity or brand text without explicit approval.
- Do not remove or alter the existing Gift backend contract without explicit approval.
- Do not introduce frameworks, databases, build systems, or other infrastructure solely for architectural fashion.
- Do not start a major rewrite.
- Do not add secrets to the repository.
- Do not treat empty `adam.html` / `asr.html` as permission to redesign the whole site.
- Do not implement future ideas simply because they appear in historical conversation context; confirm them against the current project state and approved plan first.

## Handoff Rule
An incoming AI/Agent must read this file and `ARCHITECTURE.md` before making project changes. It must inspect the current repository state before editing and must report what it changed, what it intentionally did not change, and what verification remains.
