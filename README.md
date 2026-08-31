# mibbrahim.github.io

Personal resume and portfolio site for Muhammad Ibrahim, Product Manager.

Live: https://mibbrahim.github.io

## Stack

Plain static HTML, CSS and JavaScript. No framework, no build step, no dependencies.
Push to `main` and GitHub Pages serves it.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The whole one page site: hero, about, what I do, experience, work grid, education, contact |
| `project.html` | Project detail page. Reads `?id=<slug>` and renders client side |
| `404.html` | Not found page |
| `assets/site.css` | All styling, shared by both pages |
| `assets/site.js` | Grid rendering, filters, nav, detail page rendering |
| `assets/projects.js` | **Project data. The only file you edit to add a project.** |
| `assets/shots/` | Screenshots and diagrams, one per project |
| `assets/profile.jpg` | Portrait for the About section. Optional, falls back to a monogram |
| `tools/capture-shots.js` | Playwright script that recaptures the live project screenshots |

## Adding a project

Append one object to the array in `assets/projects.js`. Nothing else needs changing:
the grid, the filters and the detail page all read from it.

```js
{
  slug: 'my-project',            // becomes project.html?id=my-project
  title: 'My Project',
  org: 'Company',
  group: 'ai',                   // ai | ops | design | data | personal (drives the filters)
  category: 'AI Product',
  year: '2026',
  status: 'Live',
  tagline: 'One line for the grid box.',
  link: 'https://example.com',   // null if there is no public URL
  shot: 'my-project.jpg',        // file in assets/shots/
  fit: 'cover',                  // 'cover' for desktop shots, 'contain' for phone shots and diagrams
  role: 'Product Manager',
  timeline: '2026',
  focus: 'What it is about',
  stack: ['Thing', 'Other thing'],
  overview: ['Paragraph.', 'Another paragraph.'],
  contributions: ['What I did.', 'And this.']
}
```

## Copy convention

No hyphens, em dashes or en dashes in visible copy. Date ranges read "May 2025 to Present".
Check after editing:

```js
document.body.innerText.match(/[A-Za-z]+-[A-Za-z]+/g)   // should only return URL fragments
```

## Local preview

```
python -m http.server 5930
```

Then open http://localhost:5930
