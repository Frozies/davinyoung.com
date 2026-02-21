# davinyoung.com

Personal portfolio and blog for Davin Young, a Staff Software Engineer, Founder, and US Patent Holder.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Styling:** Tailwind CSS v4
- **Blog:** MDX via `next-mdx-remote/rsc`
- **Syntax Highlighting:** Shiki (`github-dark-default` theme)
- **Fonts:** Manrope + JetBrains Mono (via `next/font`)
- **Deployment:** Static export / Vercel

## Features

- Dark theme with amber/gold accent
- MDX blog with syntax-highlighted code blocks, copy buttons, and interactive checklists
- Table of contents with scroll tracking
- Reading progress bar and live "X min remaining" indicator
- Cmd+K command palette for quick navigation
- Dynamic Open Graph images for social sharing
- Scroll-triggered reveal animations
- RSS feed at `/feed.xml`
- SEO: JSON-LD structured data, Open Graph, Twitter cards, sitemap, robots.txt
- Fully responsive with mobile navigation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Blog

Blog posts live in `src/content/blog/` as `.mdx` files with frontmatter:

```yaml
---
title: "Post Title"
date: "2025-01-01"
excerpt: "Short description"
tags: ["tag1", "tag2"]
---
```

## License

MIT
