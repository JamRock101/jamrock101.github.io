# Giorgio Rusconi — Portfolio Website

A polished, responsive, one-page portfolio built from the **European CV** and the **45-page long-form portfolio** supplied in October 2026.

**Stack:** HTML + CSS + vanilla JavaScript. No React, database, API keys, paid service, or build process. Open `index.html` locally or host all files on GitHub Pages, Cloudflare Pages, Netlify, etc.

## What's included

- **00 About Me:** introduction, engineering humor, water sports, and contact links
- **01 Education:** UF bachelor's, *graduate school — Coming Soon*, high school, technical skills, certifications, academic distinctions, languages
- **02 Professional experience:** UF peer instruction and teaching; Ford; NextEra (2024, 2025); ScubaCaribe
- **03 Research:** WISE Lab, Florida Institute for National Security, Makerspace Peer Mentor Handbook, Machine Intelligence Lab
- **04 Life, leadership, involvement:** technical leadership, university mentorship, competitive swimming/sailing/scuba, high-school service
- **05 Projects:** six large cards with editable image and link spaces, in-depth project dialogs, project filters, and eight other builds
- **06 Bucket List:** clearly marked *editable ideas*, not sourced personal commitments
- Contact section and footer

## 1. Preview the website

Double-click `index.html` in your file explorer. The entire portfolio works locally, including the project filters, detailed project dialogs, responsive menu, and light/dark toggle.

If you want to test it as a local server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## 2. Customize your photos, descriptions and links

### Featured project image slots

The six cards already show deliberately **empty image placeholders**. Images and links aren't invented. Add your photos here:

| Project | Suggested image filename |
|---|---|
| Socket Face-Tracker | `assets/projects/socket-face-tracker.jpg` |
| Tiva TM4C123GH6PM Bop-It | `assets/projects/tiva-bop-it.jpg` |
| Two-Player Pong — DE10 FPGA | `assets/projects/de10-pong.jpg` |
| 4×2 SRAM Design — EEE 4310 | `assets/projects/sram-4x2.jpg` |
| Gator Quant Hacks — FPGA Track | `assets/projects/gator-quant-hacks.jpg` |
| Pocket Guitar Hero (**Coming Soon**) | `assets/projects/pocket-guitar-hero.jpg` |

Open **`data.js`**, find the item by its `id` and change:

```js
image: "assets/projects/socket-face-tracker.jpg",
github: "https://github.com/JamRock101/your-repository",
demo: "https://example.com/your-video-or-gallery",
```

Leave the fields as `""` if not ready. The website will show clear photo/link slots, *not* a broken picture or fake button. Suggested image size: 1200×800 px or 1600×1000 px; `.jpg`, `.png` and `.webp` all work.

### Other content

- Change job descriptions, research, skills, clubs and awards in `data.js`.
- Change the hero/about-me text, graduate-school card, and contact information in `index.html`.
- Add a portrait/photo to the hero manually if desired (the circuit-themed illustration is intentionally text/CSS-based).
- Replace the six **bucket-list ideas** in `data.js` with your **actual** goals.
- Change colors and typography in `styles.css` under `:root`.
- Pocket Guitar Hero intentionally says **Coming Soon**. Update its `status`, overview and details when completed.
- Graduate school intentionally has **no institution listed** until decided/confirmed.

### Privacy before publishing

The public website includes your university email, LinkedIn and GitHub, but **does not publish the phone number** found in your CV. That is intentional to reduce unwanted phone spam. Only add your phone number if you want it on the public internet. The original PDFs are **not included** among the website's publicly hosted files.

Check that any research, internship and employer details are safe to publish; the current descriptions were drawn from the documents you supplied.

## 3. Host for free: GitHub Pages (recommended)

Your GitHub handle in the supplied CV is **JamRock101**.

1. Go to https://github.com/new while signed in as `JamRock101`.
2. Name the repository **`jamrock101.github.io`** (your user site). Make it **Public** if using GitHub Free.
3. Upload **all of the contents** of this folder to the *root* of the repository: `index.html`, `data.js`, `script.js`, `styles.css`, `assets/`, `.nojekyll`, etc. Do not upload the ZIP alone.
4. Commit the files to the **`main`** branch.
5. Go to **Settings → Pages → Build and deployment → Deploy from a branch**, select **`main`** and **`/(root)`**, then Save.
6. After publishing, the expected address will be **https://jamrock101.github.io/** (not live until you've created and deployed it).
7. To update the site, commit changes to the same repository. GitHub republishes the static site.

If you already have a user site, give this repository another name such as `portfolio`. It will be available at **`https://jamrock101.github.io/portfolio/`** instead. All assets in this website use relative paths, so both patterns work.

Official instructions: https://docs.github.com/en/pages/quickstart and https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

### Alternative: Cloudflare Pages (free plan)

You can also use Cloudflare Pages to deploy this folder as a static site. Either connect a GitHub repository or use a Direct Upload from the Cloudflare dashboard. Static HTML/CSS/JS doesn't need a build command. See https://developers.cloudflare.com/pages/get-started/.

## File layout

```text
giorgio-portfolio/
├── index.html             # Page markup + introductory copy
├── styles.css             # Responsive layout, graphics, colors, themes
├── data.js                # Editable content, project images/links/bucket list
├── script.js              # Project filters/modals + mobile navigation + theme
├── .nojekyll              # Prevent unwanted Jekyll transformation on Pages
├── README.md              # You are here
└── assets/
    ├── favicon.svg
    └── projects/
        └── README.txt     # Suggested image names
```

## What the source documents support

- Details originate from `Public_EuropeanCV_format.pdf` and `Portfolio (1).pdf` (both supplied with the request).
- Descriptions were edited for readability on the web and condensed from longer project write-ups; dates and roles reflect the CV where sources differed.
- The **graduate degree** and **Pocket Guitar Hero** were explicitly marked *Coming Soon* at your request, regardless of forward-looking language in the original CV.
- Bucket-list ideas and playful one-liners are editorial suggestions, not asserted facts from the source PDFs.
