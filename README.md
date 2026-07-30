# Conley Bookkeeping LLC — Website

A static multi-page website for Conley Bookkeeping LLC — plain HTML/CSS/JS,
no build step, no framework. Each page is a real file with its own URL (not a
single-page app), so every section is directly linkable, bookmarkable, and
indexable by search engines.

## Structure

```
index.html          Home            → /
services/index.html Services        → /services/
about/index.html     About           → /about/
faq/index.html        FAQ             → /faq/
contact/index.html    Contact         → /contact/

style.css            Shared stylesheet (all pages)
script.js            Shared behavior (mobile nav, FAQ accordion,
                      scroll-reveal, contact form submission)
assets/              Logo, hero photo, portrait, favicon
```

Every page shares the same `<head>` pattern, header nav, and footer; only the
page-specific `<title>`/meta description and main content differ. Nav links
and internal CTAs are plain `<a href="...">` — no client-side routing.

Interactive behavior (`script.js`):
- Mobile nav toggle
- FAQ accordion (one open item per category)
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Contact form — submits via [Web3Forms](https://web3forms.com) (no backend
  needed); shows an inline success/error message

The Contact page also embeds a live Calendly inline widget for booking calls.

## Running it locally

Because pages reference shared assets with absolute paths (`/style.css`,
`/assets/...`), you need to serve the folder over HTTP — opening `index.html`
directly via `file://` will not resolve those paths correctly.

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static host works — GitHub Pages, Vercel, Netlify, Cloudflare Pages.
Clean URLs like `/services/` work automatically on all of them via the
standard `folder/index.html` convention (no rewrite rules or `vercel.json`
needed). Upload the whole repository as the site root.

This repo auto-deploys to both GitHub Pages (`.github/workflows/pages.yml`,
on push to `main`) and Vercel (connected via the Vercel GitHub App).

## Editing content

- **Contact form**: the Web3Forms access key is hardcoded in
  `contact/index.html`'s form as a hidden `access_key` input.
- **Calendly link**: `https://calendly.com/admin-conleybookkeepingllc/discovery-call`,
  used for both the "Schedule a Free Call" buttons and the Contact page's
  inline booking widget.
- **Social links**: only LinkedIn is currently linked, in the footer
  (`assets` are shared across pages, but each footer is authored per file —
  update all five if the URL changes).

Contact details in use: phone `937-760-8949`, email
`admin@conleybookkeepingllc.com`, based in Dayton, Ohio.
