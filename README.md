# Antony Alex — Personal Portfolio Website

A personal portfolio website for **Antony Alex**, Creative Designer & Vibe Coder based in Kerala, India.

---

## 🎨 Overview & Design Highlights

- **Aesthetic:** Refined editorial typography (`Space Grotesk`, `Plus Jakarta Sans`, and `JetBrains Mono`), generous whitespace, restrained dark obsidian palette with electric cyan accents, and a clean light theme toggle.
- **Tech Stack:** Semantic HTML5, Vanilla CSS3 (custom properties design system), Vanilla JavaScript (zero external bloated dependencies).
- **Interactive Vibe Lab:** A live interactive playground demonstrating rapid *vibe coding*—visitors can test dynamic design tokens (Editorial, Cyber Obsidian, Warm Terracotta, Electric Citron) in real-time.
- **Project Filter & Modal Inspector:** Filter by *Visual Identity*, *Logo Design*, and *Vibe & Digital*, with full detail modal inspection on click.
- **Mobile Responsive:** Fully adaptive layout with hamburger drawer navigation and smooth touch targets.
- **Accessibility:** Accessible color contrast ratios, ARIA attributes, semantic headings (`<h1>` through `<h3>`), and keyboard-friendly navigation.

---

## 📂 File Architecture

```
portfolio/
├── index.html        # Semantic HTML5 structure and content
├── styles.css        # Bespoke design tokens, dark/light themes, animations
├── main.js           # Interactive filters, modals, vibe studio, copy toast
└── README.md         # Guide for customizations and deployment
```

---

## ✏️ Easy Customization Guide

All placeholders are marked and easy to customize:

### 1. Contact & Social Links
Open [index.html](file:///c:/Users/anton/Desktop/portfolio/index.html) and search for `placeholder`:
- **Email:** Update `antony.alex.placeholder@example.com` in both the hero and contact sections.
- **LinkedIn:** Replace `https://linkedin.com/in/placeholder` with your real profile link.
- **Behance / Dribbble:** Replace `https://behance.net/placeholder` with your portfolio profile.
- **GitHub:** Replace `https://github.com/placeholder` with your GitHub profile.

### 2. Agency Experience Details
In [index.html](file:///c:/Users/anton/Desktop/portfolio/index.html#L318-L345) under `<section id="experience">`:
- Replace `[Year / Dates — Editable]` with your dates of employment.
- Replace `[Marketing Agency Name — Editable Placeholder]` with your agency's name.
- Update or add specific bullet points for notable client projects.

### 3. Adding Real Project Images or Logos
In [index.html](file:///c:/Users/anton/Desktop/portfolio/index.html#L140-L245) under `<section id="work">`:
- Replace the inline vector SVGs in `.preview-canvas` with your own images:
  ```html
  <img src="assets/my-project.png" alt="Project Name" class="project-img">
  ```
- Update project titles, descriptions, and categories.

---

## 🚀 Running Locally

The portfolio runs as a static site. You can preview it with any local server:

```powershell
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 🌐 Deploying Online

You can deploy this site free in minutes using:
1. **GitHub Pages:** Create a repository on GitHub, upload these files, and enable Pages in repository settings.
2. **Vercel / Netlify:** Drag and drop the `portfolio` folder directly into Vercel or Netlify.
