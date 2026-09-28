# AI Audit: Playwright Test Runs for Builds 7 and 8

## AI Tool
- GitHub Copilot
- Date: 2026-09-28

## Prompt
Read the workflow in `slide/`, pull the latest changes from GitHub, create a separate branch for each build, set `BUILD_VERSION` in the root `.env`, run the complete Playwright suite for Builds 7 and 8, and create `tests/test-runs/TR-Build-<number>.md` in the existing report format. Record the actual result for every test case, link a related GitHub issue only when the observed failure matches it, and retain the prompt and output for AI audit. Flag questionable test cases for team review. Build 9's unavailable interface must be reported as Blocked, not as a product bug.

## Output

### Build 7
- Branch: `test/build-7`
- Playwright result: 27 passed, 28 failed, 0 blocked, 0 not run (55 total).
- Test Run: `tests/test-runs/TR-Build-7.md`
- `TC-INPUT-011` expected an 11-character answer although the Answer field has `maxlength="10"`. Flagged for team review rather than treated as a product defect.
- GitHub issue creation for newly observed calculation failures could not complete because the GitHub integration requires GitKraken sign-in. Existing issue links were kept only when the report's symptom matched.

### Build 8
- Branch: `test/build-8`
- Playwright result: 32 passed, 23 failed, 0 blocked, 0 not run (55 total).
- Test Run: `tests/test-runs/TR-Build-8.md`
- Failure notes record observed expected/actual values. Existing bug links were retained only for the matching divide-by-zero failure; other failures need correctly scoped issues.
- Creating GitHub issues and pull requests is pending GitHub integration sign-in.

## Validation
- Both Test Run files list all 55 test case IDs.
- Build 7 summary matches the Playwright output: 27 Pass / 28 Fail.
- Build 8 summary matches the Playwright output: 32 Pass / 23 Fail.
- Relative test-case and bug links in the reports were checked for existence.