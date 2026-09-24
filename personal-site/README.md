# Personal Site

My personal website — who I am, what I'm building, and how to reach me.
Built by hand with plain HTML/CSS/JS, no frameworks, no build step.

## Why plain?

One page, one audience. A static site needs nothing but a browser, stays
working for years with zero maintenance, and I can explain every line of it.
That's the same reason my C projects are single-file learning projects.

## Theme

Dark by default (feels like my nvim setup). Light mode via the toggle —
choice is saved in `localStorage`.

## Run locally

```sh
python -m http.server 8000
# open http://localhost:8000
```

## Deploy

Hosted on GitHub Pages — just push to `main` and it goes live.

## Layout

```
Personal-Site/
├── index.html      # the whole page
├── css/style.css   # themes (CSS custom properties) + layout
└── js/main.js      # theme toggle + footer year
```
