---
name: deploy-helper
description: Deploy a portfolio site to GitHub Pages, Vercel, Netlify, or Cloudflare Pages with pre-flight checks. Use when shipping a portfolio, setting up GitHub Actions for Pages, running Lighthouse audit, configuring custom domains, or running the pre-launch checklist.
---

# deploy-helper

Walk a user through deploying a portfolio and verifying it's launch-ready.

## When to use
- User has a working site locally and wants it live
- User asks about GitHub Pages, Vercel, Netlify, or Cloudflare Pages
- User wants to verify their site against a pre-launch checklist
- User wants to add a custom domain

## Inputs
- Built site (single HTML file OR framework project with build output)
- GitHub username
- Preferred platform (default: GitHub Pages for static, Vercel for frameworks)
- Optional: custom domain

## Process

### GitHub Pages (static or framework)
1. Confirm `.gitignore` excludes `node_modules`, `dist`, `.env`, `.vercel`.
2. `git init -b main` if not already a repo.
3. `gh repo create {name} --public --source=. --push`.
4. For framework builds, add `.github/workflows/deploy-pages.yml` (Node 20, build, upload-pages-artifact, deploy-pages).
5. **Settings → Pages → Source: GitHub Actions** (or via API: `gh api -X POST repos/{owner}/{repo}/pages -f "build_type=workflow"`).
6. Wait for first run. Share URL: `https://{user}.github.io/{repo}/`.

### Vercel
1. `npm i -g vercel`
2. `vercel` from project root. Accept defaults (auto-detects framework).
3. `vercel --prod --yes` for production deploy.
4. Custom domain: `vercel domains add {domain}` and update DNS per instructions.

### Cloudflare Pages / Netlify
- Connect GitHub repo through their UI. Build command and output dir match `vercel.json` or framework defaults.

## Pre-flight checklist (run before sharing the URL)
Run through `./pre-flight-checklist.md`. All items must be green before announcing the URL.

## Output format
- Live URL
- Platform chosen and why
- Pre-flight checklist results (each item: pass/fail with note)
- Redeploy instructions (push to main, or `vercel --prod`)

## Bundled resources
- `./pre-flight-checklist.md` — full launch checklist (a11y, SEO, social, performance, mobile)

## Acceptance criteria
- A live URL the user can share immediately
- HTTPS enabled (default on all four platforms)
- All pre-flight checklist items green
- User knows the redeploy command for their platform
