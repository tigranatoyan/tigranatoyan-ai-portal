# Phase 6 Outstanding Issues — Manual Sharing Campaign

Project: **Tigran Atoyan AI Demo Portal**  
Phase: **6 — Manual Sharing Campaign / Outreach Execution**  
Recommended repo path: `docs/PHASE_6_OUTSTANDING_ISSUES.md`  
Primary portal: https://tigranatoyan-ai-portal.vercel.app/  
Repository: https://github.com/tigranatoyan/tigranatoyan-ai-portal  
Indexing status: `noindex/nofollow` must remain preserved.

---

## 1. Current Phase 6 Status

Phase 6 is **partially complete**.

The campaign infrastructure is staged:

- Outreach/application tracker created.
- 20 targeted job applications staged.
- 50 direct messages staged.
- Follow-up cadence prepared.
- LinkedIn/GitHub profile update copy prepared.
- Controlled LinkedIn post decision made: **do not post yet**.

However, live outreach should **not begin broadly** until the blockers below are resolved.

---

## 2. Critical Blockers

### P6-BLOCKER-01 — CV header does not include the portal URL

**Status:** Open  
**Priority:** Critical  
**Owner:** Tigran  
**Blocks:** Job applications, recruiter outreach, CV-based referrals

The downloadable CV must include the proof portal URL in the header/contact area.

Required URL:

```text
Portfolio: https://tigranatoyan-ai-portal.vercel.app/
```

Required files:

```text
public/cv/Tigran_Atoyan.pdf
public/cv/Tigran_Atoyan.docx
```

Acceptance criteria:

- [ ] PDF CV includes the portal URL in the header/contact area.
- [ ] DOCX CV includes the portal URL in the header/contact area.
- [ ] CV page still loads after replacing the files.
- [ ] PDF download works.
- [ ] DOCX download works.
- [ ] No private/internal proof is added to the CV.
- [ ] Commit and push updated CV files.

Suggested commit message:

```bash
git add public/cv/Tigran_Atoyan.pdf public/cv/Tigran_Atoyan.docx
git commit -m "Update CV header with AI portal URL"
git push
```

Evidence to collect:

```text
CV Header Evidence:
- PDF opened? yes/no
- DOCX opened? yes/no
- Portal URL present in PDF? yes/no
- Portal URL present in DOCX? yes/no
- Updated files deployed? yes/no
- Verdict:
```

---

### P6-BLOCKER-02 — Social/OG preview not visually confirmed

**Status:** Open  
**Priority:** High  
**Owner:** Tigran  
**Blocks:** Broad LinkedIn launch post

The source route exists, but the social preview must be visually checked before posting publicly.

Check URL:

```text
https://tigranatoyan-ai-portal.vercel.app/og/og-image.png
```

Also test the portal URL in LinkedIn post composer preview without publishing.

Acceptance criteria:

- [ ] `/og/og-image.png` opens visually.
- [ ] Image is not broken.
- [ ] LinkedIn preview displays a clean title/image/description.
- [ ] No accidental private proof appears.
- [ ] Broad LinkedIn post remains blocked until confirmed.

Evidence to collect:

```text
OG/Social Preview Evidence:
- OG image route opened? yes/no
- Image visually correct? yes/no
- LinkedIn composer preview checked? yes/no
- Title correct? yes/no
- Description correct? yes/no
- Image correct? yes/no
- Private proof exposed? yes/no
- Verdict:
```

---

## 3. Profile Update Issues

### P6-ISSUE-03 — LinkedIn profile update still manual

**Status:** Open  
**Priority:** High  
**Owner:** Tigran  
**Blocks:** Stronger recruiter/hiring-manager conversion

Required LinkedIn updates:

- [ ] Update headline.
- [ ] Update About section.
- [ ] Add AI Demo Portal to Featured section.
- [ ] Add Project Semantic Engine GitHub link to Featured section if public-safe.
- [ ] Add CV/proof asset only after CV header is fixed.
- [ ] Keep employment and client positioning separate.

Recommended headline:

```text
AI Systems Builder | AI Solutions Architect | Agentic Workflows, Delivery Leadership & Business Automation
```

Featured section order:

```text
1. AI Demo Portal
2. Project Semantic Engine GitHub
3. CV PDF after header update
4. Optional walkthrough video later
```

Evidence to collect:

```text
LinkedIn Profile Update Evidence:
- Headline updated? yes/no
- About section updated? yes/no
- Featured portal link added? yes/no
- Project Semantic Engine featured? yes/no
- CV/proof asset featured? yes/no
- Screenshot/evidence available? yes/no
- Verdict:
```

---

### P6-ISSUE-04 — GitHub profile update still manual

**Status:** Open  
**Priority:** Medium-High  
**Owner:** Tigran  
**Blocks:** Technical evaluator trust

Required GitHub updates:

- [ ] Update GitHub bio line.
- [ ] Add profile website URL.
- [ ] Update profile README if available.
- [ ] Pin relevant public-safe repos.
- [ ] Add portal link to `tigranatoyan-ai-portal` repo About URL.

Suggested GitHub bio:

```text
AI Systems & Operations Builder | Agentic workflows, business software, dashboards, and AI-assisted delivery systems.
```

Suggested pinned repos:

```text
tigranatoyan-ai-portal
project-semantic-engine
BreadCost if public-safe
The.Director if public-safe/sanitized
SystemForge if public-safe
AI Weekly Report demo if available
```

Evidence to collect:

```text
GitHub Profile Update Evidence:
- GitHub bio updated? yes/no
- Website URL updated? yes/no
- Profile README updated? yes/no/not applicable
- Repo pins updated? yes/no
- Portal repo About URL updated? yes/no
- Public/private proof warning respected? yes/no
- Verdict:
```

---

## 4. Manual Portal Verification Issues

### P6-ISSUE-05 — Final incognito/mobile visual pass needed

**Status:** Open  
**Priority:** Medium  
**Owner:** Tigran  
**Blocks:** Confident broad sharing

A browser-level check was completed at page/text level, but Tigran should still perform final incognito/mobile visual confirmation.

Check pages:

```text
/
 /portfolio
 /case-studies
 /services
 /cv
 /contact
 /og/og-image.png
```

Acceptance criteria:

- [ ] Home loads.
- [ ] Portfolio loads.
- [ ] Case Studies loads.
- [ ] Services loads.
- [ ] CV page loads.
- [ ] Contact page loads.
- [ ] Proof visuals load.
- [ ] No obvious broken images.
- [ ] Contact links work.
- [ ] CV downloads work.
- [ ] Mobile layout is acceptable.
- [ ] `noindex/nofollow` remains preserved.

Evidence to collect:

```text
Manual Live Preview Evidence:
- Home checked? yes/no
- Portfolio checked? yes/no
- Case Studies checked? yes/no
- Services checked? yes/no
- CV checked? yes/no
- Contact checked? yes/no
- /og/og-image.png checked? yes/no
- CV PDF download checked? yes/no
- CV DOCX download checked? yes/no
- Contact links checked? yes/no
- Broken images found? yes/no
- Mobile/incognito checked? yes/no
- Issues found:
- Verdict:
```

---

## 5. Outreach Execution Issues

### P6-ISSUE-06 — 20 job applications staged but not sent

**Status:** Open  
**Priority:** High  
**Owner:** Tigran  
**Blocks:** Hiring funnel entry

The 20 applications are staged in the tracker, but should wait until CV header is updated.

Execution rule:

```text
Do not send applications until both CV files include the portal URL.
```

After CV update:

- [ ] Review the 20 staged roles.
- [ ] Replace any stale/closed roles.
- [ ] Confirm each role still scores 24+ out of 35.
- [ ] Prioritize 28+ roles first.
- [ ] Submit applications.
- [ ] Record application date.
- [ ] Record CV version used.
- [ ] Record portal link included yes/no.
- [ ] Add follow-up date 5-7 days later where applicable.

Evidence to collect:

```text
First 20 Job Applications Evidence:
- Applications target count: 20
- Applications completed:
- Role families covered:
- Portal link included where appropriate? yes/no
- Tracker updated? yes/no
- Issues found:
- Verdict:
```

---

### P6-ISSUE-07 — 50 direct messages staged but not sent

**Status:** Open  
**Priority:** High  
**Owner:** Tigran  
**Blocks:** Direct market feedback

The 50 DMs are staged by segment, but exact recipient names and manual sending are still required.

Segment targets:

```text
Recruiters: 12
Hiring managers: 10
Founders: 8
Agencies: 6
AI/devtools people: 6
Armenian SMEs / regional businesses: 4
International remote clients: 4
```

Execution rules:

- [ ] Use recruiter/hiring-manager templates for employment outreach.
- [ ] Use founder/client templates for freelance/client outreach.
- [ ] Do not mix employment and client offers in the same first message.
- [ ] Lead with The.Director/SystemForge for AI platform roles.
- [ ] Lead with BreadCost/AI Weekly Business Report for business automation clients.
- [ ] Track every sent message.
- [ ] Add follow-up date 5-7 days later.
- [ ] Do not expose private SDIC or raw proof.

Evidence to collect:

```text
First 50 Direct Messages Evidence:
- Messages target count: 50
- Messages sent:
- Segments covered:
- Portal link included where appropriate? yes/no
- Tracker updated? yes/no
- Issues found:
- Verdict:
```

---

## 6. Follow-Up Issues

### P6-ISSUE-08 — Follow-up dates staged, execution still pending

**Status:** Open  
**Priority:** Medium  
**Owner:** Tigran  
**Blocks:** Reply-rate improvement

A follow-up reminder is scheduled for:

```text
2026-05-11 09:00 Asia/Yerevan
```

Follow-up rule:

```text
Follow up after 5-7 days if there is no response.
```

Recruiter/hiring manager follow-up:

```text
Hi [Name], quick follow-up on my note.

The shortest way to assess fit is the proof portal:
https://tigranatoyan-ai-portal.vercel.app/

For AI platform/agentic workflow roles, start with The.Director and SystemForge. For business software and operations automation, start with BreadCost and AI Weekly Business Report.

If there is no fit now, no problem. I’d still appreciate knowing which role family would be closest from your perspective.
```

Founder/client follow-up:

```text
Hi [Name], quick follow-up.

The smallest useful conversation would be this: pick one recurring workflow that is annoying, manual, or unclear, and I’ll map what a fixed-scope AI-assisted first version could look like.

Examples:
• weekly business report
• project progress portal
• CRM/Google Sheets automation blueprint
• Business OS starter kit
• MVP blueprint

Proof portal:
https://tigranatoyan-ai-portal.vercel.app/
```

Evidence to collect:

```text
Follow-Up Cadence Evidence:
- Follow-up rule applied? yes/no
- Follow-up dates added? yes/no
- Follow-up messages prepared? yes/no
- Number of follow-ups scheduled:
- Follow-ups sent:
- Verdict:
```

---

## 7. Response/Learning Issues

### P6-ISSUE-09 — Early response review cannot start until outreach is sent

**Status:** Pending  
**Priority:** Medium  
**Owner:** Tigran  
**Blocks:** Next-batch optimization

Current metrics are zero because outreach has not been sent.

Metrics to track:

```text
Applications sent
Direct messages sent
Replies received
Positive replies
Calls booked
Rejections
No response
Most-clicked/mentioned proof asset
Confusing positioning signals
Requested changes to CV/portal
```

Review after first 7 days:

- [ ] What worked?
- [ ] What confused people?
- [ ] Which proof assets got interest?
- [ ] Which role families responded best?
- [ ] What should change in the next batch?
- [ ] Should public indexing still wait?

Evidence to collect:

```text
Response/Learning Review Evidence:
- Applications reviewed? yes/no
- Direct messages reviewed? yes/no
- Replies counted? yes/no
- Best-performing segment identified? yes/no
- Messaging changes recommended? yes/no
- Indexing reconsidered? yes/no
- Verdict:
```

---

## 8. LinkedIn Post Issue

### P6-ISSUE-10 — Controlled LinkedIn post deferred

**Status:** Open  
**Priority:** Medium  
**Owner:** Tigran  
**Blocks:** Public launch announcement

Current decision:

```text
Do not post yet.
```

Reason:

```text
Live portal is usable for manual sharing, but OG/social preview has not been visually confirmed in LinkedIn.
```

Decision rule:

- If OG/social preview and live site are visually confirmed: **soft post acceptable**.
- If not confirmed: **do not post yet**.
- Full launch post should remain deferred until the first private/manual batch produces signal.

Evidence to collect:

```text
LinkedIn Post Decision Evidence:
- OG/social preview confirmed? yes/no
- Live portal visually confirmed? yes/no
- Post selected? none/soft/full
- Draft selected:
- Verdict:
```

---

## 9. Public/Private Proof Guardrails

### P6-ISSUE-11 — Keep private proof protected

**Status:** Always active  
**Priority:** Critical  
**Owner:** Tigran

Rules:

- [ ] Do not expose raw SDIC proof.
- [ ] Do not expose unsanitized customer/client artifacts.
- [ ] Do not expose internal repo paths, tokens, logs, prompts, or private architecture details.
- [ ] Keep public proof to sanitized screenshots, diagrams, and descriptions.
- [ ] Do not claim private proof is public.
- [ ] Keep `noindex/nofollow` until explicit approval.

Safe proof leads:

```text
Employment / AI platform:
- The.Director
- SystemForge / Architektr
- Project Semantic Engine

Client / freelance:
- BreadCost
- AI Weekly Business Report
- Project Progress Reporting Framework
- Business OS starter kit
```

---

## 10. Recommended Execution Order

Use this order. It avoids sending half-polished material into the wild.

```text
1. Update CV PDF/DOCX header with portal URL.
2. Replace CV files in repo.
3. Commit, push, verify deployment.
4. Confirm CV downloads from live site.
5. Manually confirm OG/social preview.
6. Update LinkedIn profile.
7. Update GitHub profile.
8. Send first 5 trusted/warm messages as smoke test.
9. If no issues, send first 20 job applications.
10. Send first 50 direct messages.
11. Follow up after 5-7 days.
12. Review responses and update messaging.
13. Decide whether soft LinkedIn post is safe.
```

---

## 11. Phase 6B Done Definition

Phase 6B can be marked complete when:

| Requirement | Status |
|---|---|
| CV PDF includes portal URL | Pending |
| CV DOCX includes portal URL | Pending |
| Live CV downloads verified | Pending |
| OG/social preview visually confirmed | Pending |
| LinkedIn profile updated | Pending |
| GitHub profile updated | Pending |
| 20 applications sent or replaced/staged with reasons | Pending |
| 50 DMs sent or replaced/staged with reasons | Pending |
| Follow-ups sent after 5-7 days | Pending |
| Early response review completed | Pending |
| LinkedIn post decision revisited | Pending |
| noindex/nofollow preserved | Must remain true |

---

## 12. VS Code Placement

Recommended file path:

```text
docs/PHASE_6_OUTSTANDING_ISSUES.md
```

Suggested commands:

```bash
mkdir -p docs
cp PHASE_6_OUTSTANDING_ISSUES.md docs/PHASE_6_OUTSTANDING_ISSUES.md

git add docs/PHASE_6_OUTSTANDING_ISSUES.md
git commit -m "Add Phase 6 outstanding issues checklist"
git push
```

If creating directly in VS Code:

```bash
code docs/PHASE_6_OUTSTANDING_ISSUES.md
```

Then paste this MD and save.
