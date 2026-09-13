# RIZIQ Multi-Page Site and Floating Footer

## Overview
Turn the current single-page experience into a polished multi-page RIZIQ website. Keep the strongest homepage content, move deeper information into dedicated pages, and introduce a shared floating footer with a modern SaaS-product feel.

## Pages
- **Home** — retain the immersive image-led opening, service overview, RIZIQ introduction, and call to action; replace section anchors with real page links.
- **About** — company positioning, mission, working principles, and the existing impact statistics.
- **Services** — detailed presentation of all six service areas with clear outcomes and engagement steps.
- **Projects** — representative project categories and capability highlights without inventing named clients or unverifiable case-study claims.
- **Blog** — a polished editorial preview with clearly labeled insight topics and a lightweight “coming soon” state rather than fabricated articles.
- **Contact** — an accessible inquiry form and direct email option; form submission will open the visitor’s email app because no backend is requested.

## Shared Experience
- Move the floating navbar into the shared site layout so it stays consistent on every page.
- Add a compact mobile navigation menu.
- Create a shared floating footer: inset from page edges, dark product-style surface, brand statement, grouped page links, contact action, and compact copyright row.
- Keep the existing transparent horizontal logo, Space Grotesk-led typography, color system, and natural photography direction.
- Add unique search and social metadata for every page.

## Technical Details
- Add dedicated TanStack route files for `/about`, `/services`, `/projects`, `/blog`, and `/contact`.
- Build shared `SiteHeader`, `SiteFooter`, and reusable page-intro/content patterns.
- Use router links for all internal navigation and preserve the existing mail link for direct contact.
- Keep visual styling token-based and add only shared semantic tokens needed for the footer and page interiors.
- Verify navigation, mobile menu behavior, layout, and text fit on desktop and mobile.
