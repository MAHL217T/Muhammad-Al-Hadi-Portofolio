# MAH.dev — Personal Portfolio

## About

MAH.dev adalah portfolio personal dari Muhammad Al Hadi, lulusan S1 Teknik Elektro dengan konsentrasi Komputer dari UIN Sultan Syarif Kasim Riau. Website ini menampilkan profil profesional, keahlian teknis, proyek yang dibangun, pengalaman, pendidikan, dan cara kerja dalam membangun sistem.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- SVG icons and placeholders

## Folder Structure

```text
/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── icons/
│   │   └── favicon.svg
│   ├── images/
│   │   ├── profile-placeholder.svg
│   │   ├── PraktikumTE.png
│   │   └── presensi-preview.png
│   └── js/
│       ├── data.js
│       └── script.js
└── favicon.svg
```

## Local Development

1. Clone repository.
2. Open `index.html` directly in a browser, or serve the project locally using any static web server.
3. For local preview using Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages Deployment

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` → `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save and wait for deployment.

If using a username-based GitHub Pages repository (for example `username.github.io`), make sure the repository is named accordingly and the site is published from the main branch.

## Notes

- The portfolio was designed to be easy to maintain.
- Project, education, and skill data are stored in `assets/js/data.js` so future updates are easy.
- Image placeholders are intentionally lightweight and suitable for GitHub Pages.
- Replace the placeholder files with real profile and project images when available.
