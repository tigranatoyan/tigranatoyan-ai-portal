# Smoke Test Notes

## Static structure validation

- Required files checked: 36
- Missing required files: 0
- Result: all required files exist.

## Local runtime smoke test

Runtime commands were not executed in this artifact environment because dependencies are not installed here and network access for npm package resolution may be unavailable. Run these locally in a network-enabled environment:

```bash
npm install
npm run dev
# open http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Expected route checks

- `/` -> `app/page.tsx` exists: yes
- `/portfolio` -> `app/portfolio/page.tsx` exists: yes
- `/case-studies` -> `app/case-studies/page.tsx` exists: yes
- `/services` -> `app/services/page.tsx` exists: yes
- `/cv` -> `app/cv/page.tsx` exists: yes
- `/contact` -> `app/contact/page.tsx` exists: yes
