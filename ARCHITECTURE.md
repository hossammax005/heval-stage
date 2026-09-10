# HEVAL STAGE — ARCHITECTURE

## 1. System Shape

```text
HEVAL STAGE
│
├── index.html      → landing UI + World Hub + Gift Gate markup
├── style.css       → visual layer + World Hub + sector states
├── script.js       → client runtime + navigation + Gift rendering
├── adam.html       → Adam sector foundation
└── asr.html        → Asr sector foundation
```

Deployment is currently a static GitHub Pages site.

## 2. Runtime Flow

```text
Browser
  │
  ├── index.html
  │     ├── Landing
  │     │     ├── HOSSAM-X mark button
  │     │     └── World entry
  │     ├── World Hub
  │     │     ├── Adam sector → adam.html
  │     │     ├── Asr sector  → asr.html
  │     │     └── Gift Gate
  │     └── Gift modal
  │
  ├── adam.html / asr.html
  │     └── sector content foundation
  │           ├── Stories
  │           ├── Games
  │           ├── Achievements
  │           ├── Messages
  │           ├── Memories (future)
  │           └── World Map (future)
  │
  ├── style.css
  └── script.js
       ├── Canvas star field
       ├── Web Audio effects
       ├── Landing ↔ World Hub navigation
       └── Gift Gate
              │
              └── POST secret key → external Gift auth backend
```

The Gift backend is outside this repository and is a separate trust/security boundary.

## 3. Responsibility Boundaries

### Frontend
Responsible for:
- presentation
- interaction
- local visual/audio behavior
- World Hub navigation
- sector-page navigation and foundation UI
- collecting a Gift key and sending it to the backend
- safely displaying the backend response
- validating a returned gallery URL before making it clickable

Not responsible for:
- securely storing Gift secrets
- authorizing private gallery access
- replacing server-side access control

### External Gift Backend
Responsible for:
- validating Gift access keys
- deciding whether access is allowed
- returning the authorized result/gallery destination

Its implementation is not part of this repository.

## 4. Source of Truth

GitHub repository `hossammax005/heval-stage`, branch `main`, is the canonical source.

The project state is documented in:
- `PROJECT_STATE.md` — live state, decisions, risks, current/next step.
- `ARCHITECTURE.md` — stable structural map and boundaries.

These files are intentionally short. They are operational handoff documents, not exhaustive documentation.

## 5. AI / Agent Handoff Contract

Any AI/Agent working on the project must:
1. Read `PROJECT_STATE.md`.
2. Read `ARCHITECTURE.md`.
3. Inspect the current repository before editing.
4. Respect `DO NOT CHANGE` rules.
5. Make only the approved scope of change.
6. Avoid secrets and credentials in source control.
7. Treat external backend data as untrusted.
8. Report changed files, behavior changes, tests/verification, and remaining risks.
9. Update `PROJECT_STATE.md` when a meaningful architectural or project-state decision changes.

## 6. Current Implementation Boundary

The World Hub remains a lightweight section in the existing `index.html`. Adam and Asr now have separate lightweight sector foundation pages, reusing the existing visual layer rather than introducing a framework, router, build system, or second application.

Sector pages intentionally contain navigation/content slots only. Their Stories, Games, Achievements, Messages, Memories, and World Map experiences are future content work and are not implemented by the foundation change.

Gift frontend rendering uses DOM APIs (`textContent`, `createElement`, and `replaceChildren`) rather than injecting backend-controlled values with `innerHTML`. Returned gallery destinations are accepted only when they resolve to HTTP/HTTPS URLs.

## 7. Project Core Principles

- Zero cost whenever technically practical.
- Maximum reach and lightweight delivery.
- Preserve the original HEVAL STAGE identity and emotional/cinematic DNA.
- Build one expandable digital world, not unrelated pages/sites.
- `LET IT HIT ♡` — technology serves meaning and impact.

## 8. Future Direction — Not Implemented Yet

The intended evolution is an expandable digital world with personal areas, content, memories, world mapping, and additional modules, while keeping the core project understandable and maintainable.

Potential future architecture may introduce clearer module boundaries and reusable components, but **no framework migration or large rewrite is approved by this document**.

## 9. Explicit Non-Goals

This baseline does not introduce:
- a frontend framework
- a database
- a backend inside this repository
- multi-tenant infrastructure
- a build pipeline solely for convenience
- a full rewrite
- heavy cinematic infrastructure solely for the sector foundation

Any of these require a separate architectural decision.
