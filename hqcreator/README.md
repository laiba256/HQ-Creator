# HQ Creator

A Next.js blog built for hqcreator.com — business/ops tools for solo creators.

## What's already built in

- **SEO foundation:** auto-generated sitemap.xml and robots.txt, canonical URLs, Open Graph tags
- **AEO/schema:** JSON-LD Article + Organization structured data on every page
- **Answer-first post template:** every post has a "Short answer" box up top for
  skimmers and AI answer engines, defined in the post's frontmatter (`directAnswer`)
- **Design:** a ledger/invoice-inspired look (ink-stamp category tags, tabular post
  list) instead of a generic template look — fits the "back office for creators" niche

## Adding a new blog post

1. Create a new file in `content/posts/your-post-slug.md`
2. Copy this frontmatter block at the top and fill it in:

```markdown
---
title: "Your Post Title"
description: "One or two sentences for search results and previews."
date: "2026-08-25"
category: "Getting Paid"
author: "HQ Creator"
directAnswer: "The direct 1-2 sentence answer to the post's main question — this shows in the highlighted box at the top of the post."
---

Your post content in normal Markdown starts here.

## Use headings phrased as questions where it makes sense

This helps both search engines and AI answer engines extract the right
section for a given query.
```

3. The file name (minus `.md`) becomes the URL: `content/posts/my-post.md` → `hqcreator.com/blog/my-post`
4. Push to GitHub — Vercel rebuilds and publishes automatically

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deployment (Vercel + Namecheap)

1. Push this folder to a new GitHub repository
2. Go to vercel.com → New Project → Import your GitHub repo → Deploy
   (no config changes needed, Vercel auto-detects Next.js)
3. In Vercel: Project Settings → Domains → add `hqcreator.com` and `www.hqcreator.com`
4. Vercel will show you DNS records to add. In Namecheap: Domain List → Manage →
   Advanced DNS → add the A record and CNAME record Vercel gave you
5. Wait for DNS to propagate (usually under an hour), then your domain goes live
6. Submit `hqcreator.com/sitemap.xml` to Google Search Console once live

## Before your real launch

- [ ] Update author name in `content/posts/*.md` and `components/JsonLd.tsx` defaults
- [ ] Add a real favicon (`app/favicon.ico`)
- [ ] Add an Open Graph image (`public/og-image.png`, then reference it in `app/layout.tsx` metadata)
- [ ] Replace the sample post with your first real post
- [ ] Update the About section copy in `app/page.tsx` with your real bio
