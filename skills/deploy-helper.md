# Skill: deploy-helper

Walks the user through deploying a portfolio to GitHub Pages or Vercel.

## Trigger phrases
- "deploy my portfolio"
- "ship this to GitHub Pages"
- "put this on Vercel"

## Inputs
- Built site (single HTML file OR framework project with build output)
- GitHub username
- Preferred platform (GitHub Pages, Vercel, Netlify, Cloudflare Pages)
- Optional: custom domain

## Process

### GitHub Pages (static or framework)
1. Confirm `.gitignore` excludes `node_modules`, `dist`, `.env`
2. `git init -b main` if not a repo
3. `gh repo create {name} --public --source=. --push`
4. For framework builds, add `.github/workflows/deploy-pages.yml` (Node 20, build, upload-pages-artifact, deploy-pages)
5. **Settings → Pages → Source: GitHub Actions**
6. Wait for first run; share URL: `https://{user}.github.io/{repo}/`

### Vercel
1. `npm i -g vercel`
2. `vercel` from project root
3. Accept defaults (auto-detect framework)
4. For custom domain: `vercel domains add {domain}` then update DNS

### Pre-flight checklist (run before announcing the URL)
- [ ] Lighthouse ≥90 on Performance, Accessibility, Best Practices, SEO
- [ ] `<title>` and `<meta name="description">` populated
- [ ] Open Graph image set (1200×630)
- [ ] Favicon present
- [ ] Mobile viewport tested
- [ ] No console errors
- [ ] Links open correctly (target=_blank with rel=noopener for external)

## Acceptance criteria
- A live URL the user can share immediately
- HTTPS enabled (default on both platforms)
- Pre-flight checklist all green
- User knows how to redeploy (push to main OR `vercel --prod`)
