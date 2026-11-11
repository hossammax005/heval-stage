# Sentinel Security Journal

Critical security learnings and architectural patterns for HEVAL STAGE.

## 2026-11-11 - Static Frontend API Request Defenses
**Vulnerability:** External backend endpoint (`/auth`) can be overwhelmed by duplicate requests, unbound input payloads, or hanging connections from the static frontend.
**Learning:** For serverless backend endpoints queried by static GitHub Pages clients, defense in depth starts on the client by enforcing input length boundaries, disabling repeated submissions in flight, and applying timeouts to fetch requests.
**Prevention:** Always validate and bound user input size before dispatching network requests, enforce request timeouts using AbortSignal, and disable submit triggers during async operations.
