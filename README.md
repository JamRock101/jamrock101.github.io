# Giorgio Rusconi — Personal Portfolio Website (Version 2)

A **seven-page**, completely static website in deep navy, light blue, and gold. No framework, no dependency install, no database, and no subscription. All links are relative, so the same folder works on GitHub Pages at a username URL or repository subdirectory.

## 1. Where to edit the site (the important part)

| What you want to change | File to edit | Exact place |
|---|---|---|
| Short biography and contact text | `index.html` | Hero (`id="about"`) and bottom contact area (`id="contact"`) |
| Your email address | `index.html` | Search for `grusconi@ufl.edu`, replace both occurrences; it is intentionally **plain text**, never a `mailto:` link |
| Your personal photographs | `data.js` | `aboutPhotos` at the top. Put actual images in `assets/about/` |
| Education and graduate-school message | `education.html` | Cards in the `education-grid`; graduate-school card has `COMING SOON` |
| Skills, certifications, awards and languages | `data.js` | `skills`, `certifications`, `awards`, `languages` |
| Internships and employment | `data.js` | `experience` |
| Research roles and details | `data.js` | `research` |
| Leadership, clubs, sports and earlier service | `data.js` | `leadership`, `university`, `sports`, `service` |
| **Project descriptions, dates, order, photos and GitHub links** | **`data.js`** | **`projects` array**; the newest is determined by `sortKey` |
| **Bucket-list goals and completion checkmarks** | **`data.js`** | **`bucket` array**; change `completed: false` to `completed: true` |
| Navy / blue / gold colors and layout | `styles.css` | The **first two color sections** (`:root` and `:root[data-theme="light"]`) |
| Project timeline HTML layout, image placeholders and link buttons | `script.js` | `if (byId('projectTimeline'))` |
| Bucket row appearance/HTML | `script.js` | `if (byId('bucketList'))` |
| Main navigation links | Seven HTML pages | Each file has a `<nav id="mainNav">` with seven page links |
| Hosting instructions and editable files overview | `README.md` | This guide |

In general: **edit content in `data.js`, page-specific sections in their `.html` file, appearance in `styles.css`, and behavior in `script.js`.**

## 2. The seven pages

```text
index.html           00  About Me + contact + personal photo spaces
education.html       01  Education + Graduate Coming Soon + skills / languages / awards
experience.html      02  Professional Experience
research.html        03  Research Experience
involvement.html     04  Life, Leadership, Sports, Hobbies & Earlier Service
projects.html        05  14 projects, newest first, full description + image + GitHub slots
bucket-list.html     06  40 vertical bucket-list rows, each with a checkmark status
```

To change the *content* of education cards, for example, edit `education.html`. But to update an internship, edit `data.js` because that page's entries are generated automatically.

## 3. Add actual pictures of yourself

Put your photos in:

```text
assets/about/portrait.jpg
assets/about/swimming.jpg
assets/about/sailing.jpg
```

Then change `aboutPhotos` near the top of **`data.js`**:

```js
aboutPhotos: [
  { label: "YOUR PORTRAIT", hint: "assets/about/portrait.jpg", image: "assets/about/portrait.jpg" },
  { label: "ON THE WATER", hint: "assets/about/swimming.jpg", image: "assets/about/swimming.jpg" },
  { label: "OUTSIDE THE LAB", hint: "assets/about/sailing.jpg", image: "assets/about/sailing.jpg" }
],
```

The first image is large, the second and third are smaller. A blank `image: ""` displays a clearly labeled placeholder, not a broken photo. Use your own permitted images; don't assume these filenames exist until you add them.

## 4. Add project pictures, GitHub and demo links

All projects, including **Binary Digital Dice**, **iPoduino 2.0**, and **AutoMower**, are now fully featured chronology entries with photos/graphics beside the full write-up.

1. Put photos in `assets/projects/` (for example `dice-breadboard.jpg`, `dice-circuit.jpg`).
2. Open `data.js` and find the project by `id` or title.
3. Change that project's `images`, `github`, and (optional) `demo` fields:

```js
{
  id: "digital-dice",
  title: "Binary Digital Dice",
  year: "Fall 2024",
  sortKey: "2024-10-10",
  // ... leave the original overview, bullets and tags in place ...
  images: [
    "assets/projects/dice-breadboard.jpg",
    "assets/projects/dice-circuit.jpg"
  ],
  github: "https://github.com/JamRock101/your-repository-name",
  demo: "https://example.com/your-demo",
  illustration: false
}
```

The snippet shows the *fields to change*, not a complete replacement for the project's object. No actual repository URL or demo has been fabricated: while the values are empty, the website intentionally shows `GitHub link slot` and `Demo / gallery slot` as **non-clickable placeholders**. If you don't want a demo, leave it empty.

**Promoted projects with included concept art:**

- `assets/projects/binary-digital-dice-concept.svg`
- `assets/projects/ipoduino-concept.svg`
- `assets/projects/automower-concept.svg`

These three SVGs are **clearly labeled conceptual illustrations**, not pictures of your actual original builds. Replace `images[0]` with a real photo and set `illustration: false` when you have it. Other featured projects currently have photo slots so you can add the exact screenshots/photos you want.

### Chronology and text

The `projects` array in `data.js` is sorted automatically **newest to oldest** using each project's `sortKey`. For example, `sortKey: "2026-09-20"` places an entry above `"2026-03-20"`; `year` is the human-friendly date shown on the website. Adjust both when you add an entry. To add a project, copy an existing project object and supply a **unique** `id`, title, dates, `overview`, `bullets`, `tags`, `images`, `github` and `demo`.

Projects with `featured: true` show two image panels. Other projects show one; change `featured` to promote them visually. The **Pocket Guitar Hero** entry remains `status: "coming-soon"`; change this field and its text when the build is finished.

## 5. Turn the bucket list into YOUR actual list

The website includes **40 vertical rows**, consisting of six suggested goals and 34 clearly labeled blank slots. They are **examples to customize**, not statements that all 40 are your personal goals. Every entry supports a title, description, category and publicly visible completion checkbox.

Find the `bucket` array near the bottom of **`data.js`**:

```js
bucket: [
  {
    title: "Sail around a new island",
    caption: "Where I want to go and why.",
    kind: "Travel",
    completed: false
  },
  {
    title: "Run my first marathon",
    caption: "One goal off the list.",
    kind: "Sports",
    completed: true
  }
]
```

**Only change `completed` to `true` for something you have actually completed.** The website automatically renders the checked box and updates the overall count. These are **read-only public progress indicators**: visitors cannot alter the status for everyone by clicking. Add as many entries as you want (50, 100, 200...). For blank slots, delete or change `placeholder: true` when you replace one with a real goal.

## 6. Change the blue-and-gold colors

At the top of `styles.css`:

```css
:root {
  --bg: #071426;       /* dark navy backdrop */
  --panel: #0e233c;    /* card navy */
  --accent: #83ccff;   /* light blue */
  --accent-2: #edc46f; /* gold */
}
```

For the light mode, use the next block called `:root[data-theme="light"]`. The button in the navigation toggles themes and remembers the visitor's preference while switching pages.

## 7. Preview locally

You can usually open `index.html` directly in a web browser. For the most reliable preview, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`. All seven pages are linked from the top navigation.

## 8. Host for free with GitHub Pages

1. Sign into the GitHub account `JamRock101` and create a **public** repository called `jamrock101.github.io` if that name isn't already in use.
2. Extract the ZIP; upload **the contents** of the `giorgio-portfolio/` folder, not the ZIP and not an extra containing folder. The root of your repository must contain `index.html` and all six other HTML pages.
3. Commit the files to `main`.
4. Under **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)`, and Save.
5. After publishing, the expected website address is `https://jamrock101.github.io/`.

For a project repository instead of the username repository, a URL like `https://jamrock101.github.io/portfolio/` works with these relative asset paths. The site is static, so no paid service or server is needed.

GitHub documentation: https://docs.github.com/en/pages/quickstart

## Complete folder layout

```text
giorgio-portfolio/
├── index.html
├── education.html
├── experience.html
├── research.html
├── involvement.html
├── projects.html
├── bucket-list.html
├── data.js                     # EVERY project + bucket-list item + photo path
├── script.js                   # Rendering, navigation, color toggle
├── styles.css                  # Main theme + responsive design
├── README.md                   # This editing / hosting guide
├── .nojekyll
└── assets/
    ├── favicon.svg
    ├── about/
    │   └── README.txt          # Put your portrait/personal photos here
    └── projects/
        ├── README.txt
        ├── binary-digital-dice-concept.svg
        ├── ipoduino-concept.svg
        └── automower-concept.svg
```

### Privacy and source notes

The public pages display the university email as plain text, GitHub and LinkedIn. No telephone number is shown. Research and work copy is based on the provided CV and long-form portfolio. Photos of you and actual completed hardware were not provided as standalone assets, so no real-world photographs were invented. Neither source PDF is included in the public website folder; keep private or confidential materials out of GitHub.
