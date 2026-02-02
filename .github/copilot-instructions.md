<!--
This file guides AI coding agents (Copilot, assistants) when working in this repository.
Because the repository currently has no discoverable files, this is a template with
precise instructions and placeholders. Replace placeholders with repo-specific
paths/commands after scanning the project.
-->

# Copilot / AI Agent Instructions (Repository Template)

Purpose
- Help an AI agent become productive quickly by pointing to the project's
  architecture, build/test commands, conventions, and integration points.

What to do first
- Identify language/runtime: look for `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, or `requirements.txt` at repo root.
- Locate main entrypoints: common candidates are `src/`, `app/`, `server/`, `cmd/`, `main.py`, `index.js`.
- Open the top-level README and `.github/workflows/` to discover CI/test flows.

Big-picture cues (fill these in for this repo)
- Primary components: replace with your project-specific items, e.g. `api/`, `worker/`, `frontend/`.
- Service boundaries: list which folders map to independent services or packages.
- Data flows: note key inputs/outputs (HTTP APIs, message queues, DB tables, file storage).

Build / Test / Run (examples — replace with exact commands)
- Build: `npm run build` or `python -m build` or `go build ./...` or `cargo build`
- Test: `npm test`, `pytest`, `go test ./...`, or `cargo test`
- Run locally: document dev server commands (e.g. `npm run dev`, `python -m flask run`).
- Container: if `Dockerfile` exists, show `docker build -t <name> .` and `docker run` usage.

Conventions & patterns (look for these in the codebase)
- Error handling: indicate if the project prefers exceptions, Result types, or error codes.
- Async model: note whether the project uses async/await, threads, or processes.
- Config: point to `config/`, `env` variables, or `settings.py` used for runtime configuration.
- Tests: tests live under `tests/` or `__tests__/` and use `pytest`/`jest`/`go test` — reference exact test runner if present.

Integration & external dependencies
- Environment variables: list required env vars (DB URLs, API keys) and where they are loaded.
- External services: note any references to AWS/GCP/Azure, Redis, Kafka, Postgres in config or Dockerfiles.
- Secrets management: indicate if the repo uses Vault, `.env`, or GitHub Secrets in workflows.

Editing / PR guidance for AI agents
- If existing `.github/copilot-instructions.md` exists, merge: preserve any repository-specific examples.
- Keep changes minimal and focused: update only files requested by the user or explicitly linked issues.
- Add tests for behavior changes and run the project's test command before proposing a PR.

Examples from the repository (replace these placeholders)
- Main server: `src/server/` or `app/main.py`
- Frontend: `web/` or `client/` (build with `npm run build`)

When information is missing
- If key files are not present, ask the user to point to the main entrypoint and CI file(s).
- Prefer clarifying questions over assumptions when the architecture cannot be inferred.

Finally
- After making changes, run the repository's test suite and CI linting steps if present.
- Ask the repo owner for any undocumented build steps or non-standard tooling.

-- End of template --
