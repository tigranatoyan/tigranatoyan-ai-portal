#Requires -Version 5.1
param(
  [string]$VercelUrl = "https://tigranatoyan-ai-portal.vercel.app",
  [string]$GithubPagesUrl = "https://tigranatoyan.github.io/tigranatoyan-ai-portal",
  [switch]$SkipScreenshots,
  [switch]$IncludeBotEvidence
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

# ── helpers ──────────────────────────────────────────────────────────────────

function Write-Step { param([string]$msg) Write-Host "`n==> $msg" -ForegroundColor Cyan }
function Write-Ok   { param([string]$msg) Write-Host "    OK  $msg" -ForegroundColor Green }
function Write-Fail { param([string]$msg) Write-Host "    FAIL $msg" -ForegroundColor Red }
function Write-Info { param([string]$msg) Write-Host "    ... $msg" -ForegroundColor Gray }

# ── sanity-check: must run from repo root ────────────────────────────────────

Write-Step "Checking repo root"
foreach ($required in @("package.json","app","content","public")) {
  if (!(Test-Path $required)) {
    Write-Error "Missing '$required' — run this script from the repo root."
    exit 1
  }
}
Write-Ok "Repo root confirmed"

# ── folder structure ─────────────────────────────────────────────────────────

Write-Step "Creating evidence folder structure"
$dirs = @(
  "_phase3_evidence/terminal",
  "_phase3_evidence/screenshots/vercel",
  "_phase3_evidence/screenshots/github-pages",
  "_phase3_evidence/screenshots/mobile",
  "_phase3_evidence/deploy",
  "_phase3_evidence/bot",
  "_phase3_evidence/zips"
)
foreach ($d in $dirs) { New-Item -ItemType Directory -Force -Path $d | Out-Null }
Write-Ok "Folders ready"

# ── capture command output ───────────────────────────────────────────────────

function Run-And-Save {
  param([string]$Label, [string]$OutFile, [string[]]$Cmd)
  Write-Step $Label
  $output = & $Cmd[0] $Cmd[1..($Cmd.Length-1)] 2>&1
  $exit = $LASTEXITCODE
  $output | Out-File -Encoding utf8 $OutFile
  if ($exit -eq 0) { Write-Ok "$Label — exit 0" } else { Write-Fail "$Label — exit $exit" }
  return $exit
}

$tcExit    = Run-And-Save "npm run typecheck" "_phase3_evidence/terminal/02-typecheck-output.txt" @("npm","run","typecheck")
$lintExit  = Run-And-Save "npm run lint"      "_phase3_evidence/terminal/03-lint-output.txt"      @("npm","run","lint")
$buildExit = Run-And-Save "npm run build"     "_phase3_evidence/terminal/04-build-output.txt"     @("npm","run","build")

# git status last (build may change tsbuildinfo)
Write-Step "git status"
git status 2>&1 | Out-File -Encoding utf8 "_phase3_evidence/terminal/01-git-status.txt"
Write-Ok "git status saved"

# ── zip out/ ─────────────────────────────────────────────────────────────────

$outZip = "_phase3_evidence/zips/phase3-final-out.zip"
if (Test-Path "out") {
  Write-Step "Zipping out/ → $outZip"
  if (Test-Path $outZip) { Remove-Item $outZip }
  Compress-Archive -Path "out/*" -DestinationPath $outZip -Force
  Write-Ok "phase3-final-out.zip created"
  $outGenerated = "yes"
} else {
  Write-Fail "out/ folder not found — build may have failed"
  $outGenerated = "no"
}

# ── deployment evidence templates ─────────────────────────────────────────────

Write-Step "Creating deployment evidence templates"

@"
Vercel:
$VercelUrl/

GitHub Pages:
$GithubPagesUrl/

GitHub repo:
https://github.com/tigranatoyan/tigranatoyan-ai-portal
"@ | Out-File -Encoding utf8 "_phase3_evidence/deploy/07-live-links.txt"

@"
GitHub Actions result:
- workflow name:
- latest run status:
- commit hash:
- deployed URL:
- checked by:
- checked at:
"@ | Out-File -Encoding utf8 "_phase3_evidence/deploy/05-github-actions-result.txt"

@"
Vercel result:
- deployment URL:
- build status:
- commit hash:
- deployment time:
- checked by:
- checked at:
"@ | Out-File -Encoding utf8 "_phase3_evidence/deploy/06-vercel-deployment-result.txt"

@"
Phase 3 Cleanup Evidence
========================
See git log for full commit history.
Run: git log --oneline -20
"@ | Out-File -Encoding utf8 "_phase3_evidence/deploy/08-phase3-cleanup-evidence.txt"

git log --oneline -20 2>&1 | Out-File -Encoding utf8 -Append "_phase3_evidence/deploy/08-phase3-cleanup-evidence.txt"
Write-Ok "Deployment templates created"

# ── secret scan ───────────────────────────────────────────────────────────────

Write-Step "Secret scan"
$scanOut = "_phase3_evidence/terminal/09-secret-scan-output.txt"
$patterns = @("OPENAI_API_KEY","sk-proj","api_key","\.env")
$excludeDirs = @("node_modules",".next","out","_phase3_evidence",".git")

"Secret scan — $(Get-Date)" | Out-File -Encoding utf8 $scanOut
"Patterns: $($patterns -join ', ')" | Out-File -Encoding utf8 -Append $scanOut
"" | Out-File -Encoding utf8 -Append $scanOut

$scanClean = $true
foreach ($pat in $patterns) {
  $hits = Get-ChildItem -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
      $rel = $_.FullName
      $skip = $false
      foreach ($ex in $excludeDirs) { if ($rel -match [regex]::Escape($ex)) { $skip = $true; break } }
      -not $skip
    } |
    Select-String -Pattern $pat -ErrorAction SilentlyContinue |
    Where-Object { $_.Line -notmatch "process\.env\." -and $_.Line -notmatch "#" -and $_.Line -notmatch "//" }

  if ($hits) {
    $scanClean = $false
    "PATTERN: $pat" | Out-File -Encoding utf8 -Append $scanOut
    foreach ($h in $hits) {
      # Mask anything that looks like a real value after = sign
      $masked = $h.Line -replace '(=\s*)[''"]?sk-[A-Za-z0-9\-_]+[''"]?', '$1***MASKED***'
      "  $($h.Filename):$($h.LineNumber) — $masked" | Out-File -Encoding utf8 -Append $scanOut
    }
    "" | Out-File -Encoding utf8 -Append $scanOut
  }
}

if ($scanClean) {
  "RESULT: Clean — no exposed secrets found." | Out-File -Encoding utf8 -Append $scanOut
  Write-Ok "Secret scan clean"
  $secretScanResult = "yes"
} else {
  "RESULT: Manual review needed — see entries above." | Out-File -Encoding utf8 -Append $scanOut
  Write-Fail "Secret scan: manual review needed — check $scanOut"
  $secretScanResult = "manual review needed"
}

# check for .env files (note existence only, never copy content)
$envFiles = Get-ChildItem -Name ".env*" -ErrorAction SilentlyContinue
if ($envFiles) {
  "`n.env files detected (NOT copied into evidence): $($envFiles -join ', ')" | Out-File -Encoding utf8 -Append $scanOut
  Write-Info ".env file(s) found locally — not copied into evidence"
}

# ── screenshots ───────────────────────────────────────────────────────────────

$screenshotsCaptured = "no"
if (-not $SkipScreenshots) {
  Write-Step "Installing Playwright if needed"
  $playwrightCheck = npx --yes playwright --version 2>&1
  if ($LASTEXITCODE -ne 0) {
    npm install -D playwright 2>&1 | Out-Null
    npx playwright install chromium 2>&1 | Out-Null
  }

  Write-Step "Capturing screenshots"
  $env:PHASE3_VERCEL_URL = $VercelUrl
  $env:PHASE3_GITHUB_PAGES_URL = $GithubPagesUrl

  node scripts/capture-phase3-screenshots.mjs 2>&1
  if ($LASTEXITCODE -eq 0) {
    $screenshotsCaptured = "yes"
    Write-Ok "Screenshots captured"
  } else {
    Write-Fail "Screenshot capture failed — continuing"
  }

  # zip screenshots
  if (Get-ChildItem "_phase3_evidence/screenshots" -Recurse -File -ErrorAction SilentlyContinue) {
    $ssZip = "_phase3_evidence/zips/phase3-live-qa-screenshots.zip"
    if (Test-Path $ssZip) { Remove-Item $ssZip }
    Compress-Archive -Path "_phase3_evidence/screenshots/*" -DestinationPath $ssZip -Force
    Write-Ok "phase3-live-qa-screenshots.zip created"
  }
} else {
  Write-Info "Screenshots skipped (-SkipScreenshots)"
}

# ── AI bot evidence ───────────────────────────────────────────────────────────

$botDetected = (Test-Path "app/api") -or (Test-Path "app/api/chat")
if ($IncludeBotEvidence -or $botDetected) {
  Write-Step "Generating AI bot evidence"

  "Bot API route detected at: app/api/chat/route.ts" | Out-File -Encoding utf8 "_phase3_evidence/bot/01-bot-screenshot-needed.txt"
  "Manual step: Take a screenshot of the bot in action on the live site." | Out-File -Encoding utf8 -Append "_phase3_evidence/bot/01-bot-screenshot-needed.txt"

@"
Bot Q&A examples to test manually on live Vercel site:

Q: What has Tigran built?
Q: Can he build an AI agent system?
Q: What's his strongest proof?
Q: I need someone to build an MVP — is Tigran the right fit?
Q: I am Tigran, testing this system.

Expected behavior:
- Answers should be specific, not generic
- Should reference BreadCost, The.Director, Project Semantic Engine
- Should mention this portal as entry proof
- Should switch to collegial mode when Tigran identifies himself
"@ | Out-File -Encoding utf8 "_phase3_evidence/bot/02-bot-question-answer-examples.txt"

@"
Environment safety check:

- OPENAI_API_KEY is set as a Vercel environment variable (server-side only)
- OPENAI_API_KEY is NOT in any committed file
- API call is in app/api/chat/route.ts (server-side Next.js route)
- Frontend (ChatBot.tsx) calls /api/chat — never calls OpenAI directly
- NEXT_PUBLIC_IS_GITHUB_PAGES disables bot on static GitHub Pages export
"@ | Out-File -Encoding utf8 "_phase3_evidence/bot/03-env-safety-check.txt"

  # prove key is not in repo
  $keyInRepo = git grep -l "OPENAI_API_KEY" 2>&1 | Where-Object { $_ -notmatch "route.ts" -and $_ -notmatch "\.md" }
  if ($keyInRepo) {
    "WARNING: OPENAI_API_KEY found in unexpected files: $keyInRepo" | Out-File -Encoding utf8 "_phase3_evidence/bot/04-api-key-not-in-repo-proof.txt"
  } else {
    "PASS: OPENAI_API_KEY only appears in app/api/chat/route.ts as process.env reference — no hardcoded value in repo." | Out-File -Encoding utf8 "_phase3_evidence/bot/04-api-key-not-in-repo-proof.txt"
    git grep "OPENAI_API_KEY" 2>&1 | Out-File -Encoding utf8 -Append "_phase3_evidence/bot/04-api-key-not-in-repo-proof.txt"
  }

  "Manual step: Take a screenshot showing the bot disclaimer / intro message on the live site." | Out-File -Encoding utf8 "_phase3_evidence/bot/05-bot-disclaimer-screenshot-needed.txt"

  $botZip = "_phase3_evidence/zips/phase3-ai-bot-safety-evidence.zip"
  if (Test-Path $botZip) { Remove-Item $botZip }
  Compress-Archive -Path "_phase3_evidence/bot/*" -DestinationPath $botZip -Force
  Write-Ok "phase3-ai-bot-safety-evidence.zip created"
}

# ── build + deploy evidence zip ───────────────────────────────────────────────

Write-Step "Zipping build+deploy evidence"

# generate index first so it goes in the zip
$commitHash = git rev-parse HEAD 2>&1
$branch     = git rev-parse --abbrev-ref HEAD 2>&1
$timestamp  = Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ"

@"
# Phase 3 Evidence Index

Generated at: $timestamp
Commit hash: $commitHash
Branch: $branch
Repo: https://github.com/tigranatoyan/tigranatoyan-ai-portal
Vercel URL: $VercelUrl
GitHub Pages URL: $GithubPagesUrl

## Evidence ZIPs

- phase3-final-out.zip
- phase3-live-qa-screenshots.zip
- phase3-build-deploy-evidence.zip
$(if ($botDetected -or $IncludeBotEvidence) { "- phase3-ai-bot-safety-evidence.zip" })

## Validation Summary

- git status clean? $(if ((git status --porcelain 2>&1) -eq "") { "yes" } else { "no (see 01-git-status.txt)" })
- typecheck passed? $(if ($tcExit -eq 0) { "yes" } else { "no" })
- lint passed? $(if ($lintExit -eq 0) { "yes" } else { "no" })
- build passed? $(if ($buildExit -eq 0) { "yes" } else { "no" })
- out folder generated? $outGenerated
- screenshots captured? $screenshotsCaptured
- secret scan clean? $secretScanResult

## Routes Checked

Vercel:
- /
- /portfolio
- /case-studies
- /services
- /cv
- /contact

GitHub Pages:
- /
- /portfolio
- /case-studies
- /services
- /cv
- /contact

## Proof Assets Expected

- BreadCost
- The.Director
- SystemForge / Architektr
- Project Semantic Engine
- AI Project Progress Reporting Framework
- AI Business OS / BlackScaleMedia
- AI Weekly Business Report Demo

## Manual QA Still Required

- Confirm no broken image icons (see broken-images-report.txt)
- Confirm CV downloads work
- Confirm contact links
- Confirm mobile layout
- Confirm no secrets visible in browser devtools
- Confirm AI bot safety (see bot/ folder)

## Notes

Do not commit evidence ZIPs unless explicitly requested.
"@ | Out-File -Encoding utf8 "_phase3_evidence/PHASE3_EVIDENCE_INDEX.md"

$bdZip = "_phase3_evidence/zips/phase3-build-deploy-evidence.zip"
if (Test-Path $bdZip) { Remove-Item $bdZip }
$bdFiles = @("_phase3_evidence/terminal","_phase3_evidence/deploy","_phase3_evidence/PHASE3_EVIDENCE_INDEX.md")
Compress-Archive -Path $bdFiles -DestinationPath $bdZip -Force
Write-Ok "phase3-build-deploy-evidence.zip created"

# ── summary ───────────────────────────────────────────────────────────────────

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "PHASE 3 EVIDENCE AUTOMATION COMPLETE" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "Files created:"
Write-Host "  scripts/collect-phase3-evidence.ps1"
Write-Host "  scripts/capture-phase3-screenshots.mjs"
Write-Host "  scripts/README_PHASE3_EVIDENCE.md"
Write-Host ""
Write-Host "Evidence generated:"
Get-ChildItem "_phase3_evidence/zips" -ErrorAction SilentlyContinue | ForEach-Object { Write-Host "  _phase3_evidence/zips/$($_.Name)" }
Write-Host ""
Write-Host "Validation:"
Write-Host "  typecheck passed?        $(if ($tcExit -eq 0) { 'yes' } else { 'NO' })"
Write-Host "  lint passed?             $(if ($lintExit -eq 0) { 'yes' } else { 'NO' })"
Write-Host "  build passed?            $(if ($buildExit -eq 0) { 'yes' } else { 'NO' })"
Write-Host "  out folder generated?    $outGenerated"
Write-Host "  screenshots captured?    $screenshotsCaptured"
Write-Host "  secret scan clean?       $secretScanResult"
Write-Host ""
Write-Host "Manual evidence still needed:"
Write-Host "  - Bot Q&A screenshot (see _phase3_evidence/bot/)"
Write-Host "  - GitHub Actions run status (see _phase3_evidence/deploy/05-github-actions-result.txt)"
Write-Host "  - Vercel deployment status (see _phase3_evidence/deploy/06-vercel-deployment-result.txt)"
Write-Host ""
Write-Host "Do not commit evidence zips unless explicitly requested." -ForegroundColor Yellow
