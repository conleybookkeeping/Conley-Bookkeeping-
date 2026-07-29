# Conley Bookkeeping LLC — Website

A single-page website for Conley Bookkeeping LLC, built as one self-contained
`index.html` file (HTML, CSS, and JavaScript inline — no build step, no
dependencies to install). The brand logo fonts load from Google Fonts; the logo
image is embedded directly in the file, so the site works fully offline once the
fonts are cached.

## Structure

The site is a lightweight single-page app. Navigation swaps between five
"pages" (`<div class="page">` sections) via a small vanilla-JS `showPage()`
function — no framework, no router.

| Section  | ID          | Contents                                             |
|----------|-------------|------------------------------------------------------|
| Home     | `#home`     | Hero, pain points, services preview, why-us, CTA     |
| Services | `#services` | Service offerings and details                        |
| About    | `#about`    | Ethan Conley bio and background                       |
| FAQ      | `#faq`      | Accordion of common questions                        |
| Contact  | `#contact`  | Phone, email, location, hours, and call-to-action    |

Interactive behavior (all vanilla JS at the bottom of the file):
- Page switching + mobile nav toggle
- FAQ accordion
- Scroll-reveal animations (respects `prefers-reduced-motion`)

## Running it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Because it is a single static file, it can be hosted anywhere that serves
static content — GitHub Pages, Netlify, Cloudflare Pages, Vercel, or any web
host. Upload `index.html` as the site root.

## Editing content

A few values are intended to be reviewed/updated before launch:
- **Business hours** (Contact section) — currently "By Appointment · Mon–Fri".
- **Portrait photo** (About section) — currently a placeholder graphic labeled
  "Ethan Conley · Founder"; drop in a real headshot when available.
- **Privacy Policy / Terms of Service** footer links point to `#` — wire them up
  when those pages exist.

Contact details in use: phone `937-760-8949`, email
`admin@conleybookkeepingllc.com`, based in Dayton, Ohio.
