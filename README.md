# FitZone

A responsive static website for a fitness/gym brand called **FitZone**, built with HTML, CSS, and vanilla JavaScript.

## Pages

| Page | File | Description |
|---|---|---|
| Home | [index.html](index.html) | Landing page with hero section, logos, and a BMI calculator |
| Program | [our program.html](our%20program.html) | Overview of training programs offered |
| Choose Us | [choose us.html](choose%20us.html) | Reasons to choose FitZone |
| Pricing | [membership.html](membership.html) | Membership plans and pricing |
| Register | [register now.html](register%20now.html) | Registration/sign-up page |

## Features

- Responsive navigation with a mobile toggle menu
- Header background change and "scroll up" button on scroll
- Scroll reveal animations ([js/scrollreveal.min.js](js/scrollreveal.min.js))
- BMI calculator (height/weight input with feedback message)
- Email subscription form with validation feedback
- Icons via [Remix Icon](https://remixicon.com/) (loaded from CDN)

## Project Structure

```
├── index.html
├── our program.html
├── choose us.html
├── membership.html
├── register now.html
├── css/
│   ├── styles.css
│   ├── media queries.css
│   └── register now.css
├── js/
│   ├── main.js
│   └── scrollreveal.min.js
└── img/
    └── ...images, logos, and icons
```

## Getting Started

No build step is required. Open [index.html](index.html) directly in a browser, or serve the folder with a local static server for the best experience (e.g. the VS Code "Live Server" extension).

## Tech Stack

- HTML5
- CSS3 (with a dedicated media-queries stylesheet for responsiveness)
- Vanilla JavaScript
- [Remix Icon](https://remixicon.com/) and [ScrollReveal](https://scrollrevealjs.org/) libraries
