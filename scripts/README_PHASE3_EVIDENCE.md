# Phase 3 Evidence Scripts

## Quick start

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\collect-phase3-evidence.ps1
```

## Options

| Flag | Default | Description |
|------|---------|-------------|
| `-VercelUrl` | `https://tigranatoyan-ai-portal.vercel.app` | Override Vercel URL |
| `-GithubPagesUrl` | `https://tigranatoyan.github.io/tigranatoyan-ai-portal` | Override GitHub Pages URL |
| `-SkipScreenshots` | off | Skip Playwright screenshot capture |
| `-IncludeBotEvidence` | auto-detect | Force bot evidence generation |

## Output

All evidence lands in `_phase3_evidence/` (gitignored):

```
_phase3_evidence/
  terminal/         ← typecheck, lint, build, secret scan output
  screenshots/      ← Playwright PNGs (vercel, github-pages, mobile)
  deploy/           ← live links + manual deployment templates
  bot/              ← AI bot safety evidence
  zips/             ← final packaged ZIPs
  PHASE3_EVIDENCE_INDEX.md
```

## ZIPs produced

| ZIP | Contents |
|-----|----------|
| `phase3-final-out.zip` | Static site output (`out/`) |
| `phase3-live-qa-screenshots.zip` | All Playwright screenshots |
| `phase3-build-deploy-evidence.zip` | terminal + deploy logs + index |
| `phase3-ai-bot-safety-evidence.zip` | Bot API key safety proof |

## Manual steps still required after running

1. Fill in `_phase3_evidence/deploy/05-github-actions-result.txt`
2. Fill in `_phase3_evidence/deploy/06-vercel-deployment-result.txt`
3. Screenshot the live bot in action → add to `_phase3_evidence/bot/`
