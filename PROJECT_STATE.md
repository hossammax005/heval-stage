# HEVAL STAGE — PROJECT STATE

## Identity
- Project: HEVAL STAGE
- Purpose: The World of Adam & Asr — an expandable digital universe.
- Repository: `hossammax005/heval-stage`
- Branch: `main`
- Deployment target: GitHub Pages
- Current source-of-truth commit at documentation baseline: `114babaec8fb5c9c6d7d54150042b4ad56648c4f`

## Current Architecture
- Static web application: HTML + CSS + vanilla JavaScript.
- Entry page: `index.html`.
- Presentation: `style.css`.
- Runtime/client behavior: `script.js`.
- Placeholder pages: `adam.html`, `asr.html` (currently empty).
- README is minimal.
- `script.js` currently contains the animated star-field canvas, Web Audio effects, Gift Gate UI, and a POST call to the external Gift authentication backend.
- Gift Gate backend URL is currently referenced client-side in `script.js`; no secret key is stored in the repository.

## Current Step
**STEP 0 — Project handoff foundation.**

This step establishes GitHub as the project source of truth so another AI/Agent can continue from the documented state without relying on chat memory.

No feature development is being performed in this step.

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
- Validate external data before rendering it into the DOM, especially links and messages returned by the Gift backend.
- Preserve user privacy and avoid exposing private gallery content through public/static files.

## Current UI / Features Observed
- Dark space-themed landing screen.
- Brand text: `𝖍ø§§ā𝖒`.
- `HEVAL STAGE - DIGITAL UNIVERSE` subtitle.
- `دخول العالم 🌌` button exists but its navigation behavior is not currently implemented in `script.js`.
- `🎁 GIFT GATE` opens a modal for a secret key.
- Gift authentication is sent to the external `/auth` endpoint.
- Global sound toggle and generated tones are implemented.
- Animated star background is implemented.

## Tests / Verification
- Repository structure and current source files were inspected directly from GitHub before this state file was created.
- No automated test suite is currently present in the repository.
- Documentation baseline does not change application behavior.
- Existing deployed behavior should be manually checked after future application changes.

## Known Risks / Gaps
- `adam.html` and `asr.html` are placeholders.
- The main `دخول العالم 🌌` action has no current navigation implementation.
- Gift Gate frontend trusts response fields from the external backend and builds HTML from them; this should be reviewed before expanding the Gift module.
- There is no automated CI/test layer yet.
- GitHub Pages deployment status should be treated as a deployment concern separate from source correctness.

## Next Step
**Gate Review before any feature implementation.**

After this documentation baseline, inspect the project against the desired HEVAL STAGE architecture and decide the next approved implementation step. Do not assume a rewrite is required.

## DO NOT CHANGE
- Do not change the existing visual identity or brand text without explicit approval.
- Do not remove or alter existing Gift Gate behavior as part of documentation/handoff work.
- Do not introduce frameworks, databases, build systems, or other infrastructure solely for architectural fashion.
- Do not start a major rewrite.
- Do not add secrets to the repository.
- Do not treat empty `adam.html` / `asr.html` as permission to redesign the whole site.
- Do not implement future ideas simply because they appear in historical conversation context; confirm them against the current project state and approved plan first.

## Handoff Rule
An incoming AI/Agent must read this file and `ARCHITECTURE.md` before making project changes. It must inspect the current repository state before editing and must report what it changed and what it intentionally did not change.