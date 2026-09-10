# HEVAL STAGE — ARCHITECTURE

## 1. System Shape

```text
HEVAL STAGE
│
├── index.html      → landing UI / Gift Gate markup
├── style.css       → visual layer
├── script.js       → client runtime
├── adam.html       → future Adam area (placeholder)
└── asr.html        → future Asr area (placeholder)
```

Deployment is currently a static GitHub Pages site.

## 2. Runtime Flow

```text
Browser
  │
  ├── index.html
  ├── style.css
  └── script.js
       │
       ├── Canvas star field
       ├── Web Audio effects
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
- collecting a Gift key and sending it to the backend
- displaying the backend response

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
7. Report changed files, behavior changes, tests/verification, and remaining risks.
8. Update `PROJECT_STATE.md` when a meaningful architectural or project-state decision changes.

## 6. Future Direction — Not Implemented Yet

The intended evolution is an expandable digital world with private/personal areas and additional modules, while keeping the core project understandable and maintainable.

Potential future architecture may introduce clearer module boundaries and reusable components, but **no framework migration or large rewrite is approved by this document**.

## 7. Explicit Non-Goals

This baseline does not introduce:
- a frontend framework
- a database
- a backend inside this repository
- multi-tenant infrastructure
- a build pipeline solely for convenience
- a full rewrite

Any of these require a separate architectural decision.
