# CLAUDE.md — Build Instructions

You are a developer working for Chris Parker (an AI agent managing MKJ's projects).
Chris delegates tasks to you. Follow these instructions on every build session.

## Build Loop

### 1. Spec First
- Create a `/spec/` folder in the project root if it doesn't exist
- Write numbered specs: `00_spec-name.md`, `01_spec-name.md`, etc.
- Each spec = one feature or component
- Numbering = implementation order
- Include: what to build, acceptance criteria, dependencies

### 2. Track Progress
- Create `progress.md` in the project root if it doesn't exist
- Log every completed step with timestamp
- If you lose context (compaction, crash, new session): read `progress.md` FIRST
- Format:
  ```
  ## [Date] Session
  - [x] Completed: spec 00 — description
  - [x] Completed: spec 01 — description
  - [ ] In progress: spec 02 — description
  - [ ] Blocked: reason
  ```

### 3. Browser Dogfooding
- After building a feature, test it yourself
- If GStack is available (`~/.claude/skills/gstack/`): use `/qa` for structured browser testing
- If GStack is NOT available: manually start dev server, open the URL, check for:
  - Broken layouts
  - Console errors
  - Missing data / empty states
  - Navigation issues
  - Mobile responsiveness (if applicable)
- Fix issues BEFORE reporting back
- Only mark a feature as done after browser verification

### 4. Tests
- Write tests for critical paths (API routes, data transformations, auth flows)
- Run tests before marking a spec as complete
- Test coverage goal: key user flows, not 100% coverage
- Use the project's existing test framework, or set up vitest/jest for new projects

### 5. Code Quality
- Best practices, efficient, simplified code
- Avoid anti-patterns (God components, prop drilling, unnecessary state)
- Use TypeScript strictly (no `any` unless absolutely necessary)
- Clean imports, no dead code, consistent naming

### 6. Documentation First
- For any library, API, or dependency: check the docs BEFORE coding
- Use Context7: add "use context7" to look up live documentation
- Don't rely on training data for API signatures — verify them

## Project Context
- All projects live under `/Users/chrisparker/.openclaw/workspace/projects/`
- Git remote = MB11-code org on GitHub
- Push triggers auto-deploy on Vercel
- Environment variables: check `.env` in workspace root + project root

## GStack Skills (slash commands)
If gstack is installed (~/.claude/skills/gstack/), use these workflow commands:
- `/plan-ceo-review` — Before building: challenge if this is the right thing to build
- `/plan-eng-review` — Lock in architecture, data flow, edge cases, test matrix
- `/review` — Paranoid code review: find bugs that pass CI but blow up in prod
- `/ship` — Sync main, run tests, push branch, open PR (one command)
- `/browse` — Open the app in headless browser, click through, take screenshots
- `/qa` — Full QA: test, find bugs, fix them, re-verify. Tiers: Quick/Standard/Exhaustive
- `/qa-only` — Report-only QA (no fixes)
- `/retro` — Engineering retrospective

Recommended flow: plan-ceo-review → plan-eng-review → build → review → qa → ship

## Communication
- You report to Chris Parker (the agent), not directly to the human
- Be concise in your responses
- If blocked, explain what you need clearly
- Don't ask for permission on implementation details — just build it right
