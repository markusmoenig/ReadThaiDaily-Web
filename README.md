# Read Thai Daily website

A custom Docusaurus 3 site for readthaidaily.com. The landing page uses the app’s original illustrations, real Mac screenshots, a clickable Thai-word demo, a chapter guide and App Store information. Content lives in Markdown and React; it does not depend on a hosted CMS.

## Run locally

Requires Node.js 20 or newer. Node.js 24 is used in CI and specified in `.nvmrc` (run `nvm use` if you use nvm).

```sh
npm ci
npm start
```

The preview is available at http://localhost:3000. To make and preview the static output:

```sh
npm run build
npm run serve
```

Publish `build/` to any static host. Domain configuration points to https://readthaidaily.com, with no site deployment or DNS changes performed by this project.

## Custom domain

The production URL is `https://readthaidaily.com`, served from `/`. Docusaurus uses this URL for canonical links and the sitemap. `static/CNAME` contains `readthaidaily.com` and is copied into the build for GitHub Pages custom-domain hosting, following the [Docusaurus deployment guide](https://docusaurus.io/docs/deployment).

When connecting hosting, select `readthaidaily.com` as the custom domain and enable HTTPS. DNS records must point to the selected hosting provider; the repository does not change DNS. For GitHub Pages, also configure the custom domain in the repository’s Pages settings using the [GitHub custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Redirect `www.readthaidaily.com` to the primary domain through the host.

## Continuous integration

`.github/workflows/build.yml` builds the website on every push and pull request, and can also be run manually from GitHub Actions. It uses Node.js 24, installs the locked dependencies with `npm ci`, and runs the production build with internal link checks. Successful builds on `main` upload the `build/` artifact and deploy it to GitHub Pages at https://readthaidaily.com. Pull requests and other branches only validate the build. GitHub Pages must use **GitHub Actions** as its source; the custom domain is set in repository Pages settings.

## Content and assets

- `src/pages/index.jsx`: custom landing page, interactive word demo and screenshot gallery.
- `src/css/custom.css`: responsive light and dark styling, with cream, terracotta and forest-green accents.
- `docs/`: getting started, lessons, script, chapters/pricing, download, FAQ, about and privacy.
- `static/img/`: optimized copies of original Read Thai Daily artwork and app icon.
- `static/screenshots/`: real dark Mac window captures, taken 8 October 2026. SVG viewport crops remove the OS/AI title strip from the image itself, in the gallery, enlarged viewer and guide pages. App content is unchanged.
- `static/asset-provenance.json`: source paths and capture details.
- Fonts are hosted locally through Fontsource (package licenses are retained in node_modules).

## App Store launch

The website is written for the finished App Store app. Download links use the registered App Store Connect app ID, 6819503963, through `site-links.js`. The listing becomes publicly available when the app is released. No store submission, site deployment or DNS changes have been performed here.

The homepage, chapter guide and FAQ state that a new chapter is added every month and included in both subscription plans.

## Localization

The homepage, navigation, interactive word demo and all eight guide pages support English, German, French and Spanish. English is served at `/`, with translations at `/de/`, `/fr/` and `/es/`. The navbar language switcher preserves the corresponding page. Trailing slashes keep locale roots and GitHub Pages directory routes consistent. `npm run build` builds all four locales; CI deploys the complete output together.

Homepage copy uses Docusaurus `translate()` with English defaults in `src/pages/index.jsx` and translated messages in `i18n/{locale}/code.json`. Guide translations live in `i18n/{locale}/docusaurus-plugin-content-docs/current/`; navbar and footer copy live in the matching `docusaurus-theme-classic` folders. See the [Docusaurus localization guide](https://docusaurus.io/docs/i18n/tutorial).

Keep all translations in step when changing English content. Preview one locale with `npm start -- --locale de`; use `npm run build` and `npm run serve` to verify language switching across the complete static site.

## Appearance and screenshots

The site follows the visitor’s system appearance until they choose a theme with the navbar switch. `AppScreenshot` uses Docusaurus `ThemedImage` to show the light captures in `static/screenshots/light/` or the dark captures in `static/screenshots/`. The homepage gallery, enlarged dialog and guide screenshots all use the same component. The screenshots show the English app UI; the surrounding explanations are translated.

## Before publication

Confirm the App Store listing is live and review prices, chapter availability and the privacy description against the release build. There are no analytics or external font requests configured. A production build checks internal links.
