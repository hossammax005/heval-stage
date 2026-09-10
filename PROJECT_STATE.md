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
- Sector pages: `adam.html`, `asr.html`.
- `script.js` contains the animated star-field canvas, Web Audio effects, World Hub navigation, Gift Gate UI, and a POST call to the external Gift authentication backend.
- Gift Gate backend URL is referenced client-side in `script.js`; no secret key is stored in the repository.

## Current Step
**STEP 2 — Adam & Asr world foundation.**

Approved scope implemented:
1. Landing external module button renamed from `🎁 GIFT GATE` to `𝖍ø§§ā𝖒x̮̲̣̅̐`.
2. `دخول العالم 🌌` remains unchanged.
3. World Hub still exposes ADAM, ASR, and GIFT GATE.
4. `adam.html` and `asr.html` are now real lightweight sector pages instead of empty placeholders.
5. Each sector presents the original four content directions: القصص, الألعاب, الإنجازات, الرسائل.
6. Memories and World Map are introduced as clearly marked future expansion points without implementing their content yet.
7. Existing star field, sound, Gift integration, visual identity, and static architecture were preserved.

## Decisions
- Preserve the existing project structure unless a change is explicitly approved.
- GitHub is the canonical source of the current project state.
- AI/Agent memory is not a source of truth.
- Prefer the smallest safe change that achieves the approved goal.
- Do not rewrite or over-engineer the project without an explicit architectural reason.
- HEVAL STAGE remains one expandable digital world, not a collection of unrelated sites.
- Project core priority: zero cost, maximum reach, and meaningful impact — `LET IT HIT ♡`.
- No image generation/search is part of the normal development workflow unless explicitly requested.

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
- Landing external module button: `𝖍ø§§ā𝖒x̮̲̣̅̐`.
- World Hub shows ADAM, ASR, and GIFT GATE entry points.
- Adam and Asr each open their own sector foundation page.
- Sector pages show Stories, Games, Achievements, Messages, plus future Memories and World Map slots.
- `🎁 GIFT GATE` in World Hub opens the existing modal.
- Gift authentication is sent to the external `/auth` endpoint.
- Gift success/error/loading states are rendered without HTML injection from backend data.
- Global sound toggle and generated tones are implemented.
- Animated star background is implemented.

## Tests / Verification
- Application files and project state were inspected directly from GitHub before editing.
- The approved STEP 2 source changes were committed directly to `main` using current blob SHAs.
- No automated test suite is currently present in the repository.
- Manual verification is required on the deployed GitHub Pages site after this deployment, especially navigation into both sector pages and back to the World Hub.

## Known Risks / Gaps
- Sector content itself is intentionally not implemented yet; the new cards are the foundation/navigation layer.
- Memories and World Map are placeholders for future expansion.
- No automated CI/test layer yet.
- GitHub Pages deployment status should be treated as a deployment concern separate from source correctness.
- The Gift backend itself remains outside this repository and must be reviewed separately for authorization, rate limiting, CORS, and private gallery protection.

## Next Step
**Gate Review for STEP 2 after deployment verification.**

Verify the live GitHub Pages build, especially:
- landing → World Hub
- renamed `𝖍ø§§ā𝖒x̮̲̣̅̐` button and existing Gift behavior through World Hub
- World Hub → Adam sector
- World Hub → Asr sector
- sector cards render correctly
- sector → World Hub/back navigation
- no regression in star field and sound

Only after this verification should content implementation priorities be approved.

## DO NOT CHANGE
- Do not change the existing visual identity or brand text without explicit approval.
- Do not remove or alter the existing Gift backend contract without explicit approval.
- Do not introduce frameworks, databases, build systems, or other infrastructure solely for architectural fashion.
- Do not start a major rewrite.
- Do not add secrets to the repository.
- Do not implement future ideas simply because they appear in historical conversation context; confirm them against the current project state and approved plan first.

## Handoff Rule
An incoming AI/Agent must read this file and `ARCHITECTURE.md` before making project changes. It must inspect the current repository before editing and must report what it changed, what it intentionally did not change, and what verification remains.
