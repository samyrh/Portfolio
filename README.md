
<p align="center">
  <a href="https://samirhalim.vercel.app" target="_blank">
    <img src="public/assets/gif.gif" alt="3D Developer Portfolio Banner" width="100%" />
  </a>
</p>



<h1 align="center">3D Developer Portfolio</h1>
<p align="center">
  Immersive, animated, and responsive developer portfolio built with modern WebGL tooling.
</p>

<p align="center">
  <a href="https://samirhalim.vercel.app" target="_blank"><b>🌐 Live Demo</b></a> ·
  <a href="#quick-start"><b>⚡ Quick Start</b></a> ·
  <a href="#features"><b>🔋 Features</b></a> ·
  <a href="#tech-stack"><b>⚙️ Tech Stack</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-%23000000?style=for-the-badge&logo=threedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/R3F-React%20Three%20Fiber-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer%20Motion-Animation-111?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/EmailJS-Contact-FF5A5F?style=for-the-badge" />
</p>

---

## 📑 Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Preview](#preview)
5. [Quick Start](#quick-start)
6. [Configuration](#configuration)
7. [Project Structure](#project-structure)
8. [Performance Tips](#performance-tips)
9. [Roadmap](#roadmap)
10. [Links](#links)
11. [Acknowledgements](#acknowledgements)

---

## 🤖 Introduction
A modern **3D developer portfolio** demonstrating real-time 3D scenes, smooth micro-interactions, and performant animations. Built with **React + Three.js** via **React Three Fiber** and styled with **Tailwind CSS**. Sections include: 3D Hero, Work, Skills, Projects, Testimonials, and a 3D Earth Contact form powered by **EmailJS**.

> Looking to showcase Java/Spring/Kafka work? Add case studies with metrics (e.g., _“Reduced processing latency by 35% with Kafka Streams”_).

---

## ⚙️ Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion  
- **3D & Graphics:** Three.js, React Three Fiber, Drei  
- **Utilities:** EmailJS, ESLint, Prettier  
- **Deployment:** Vercel (recommended)

---

## 🔋 Features
- **Immersive 3D Hero:** Customizable 3D desktop model
- **Interactive Sections:** Framer Motion animations throughout
- **3D Skills Cloud:** Animated skills via R3F/Drei
- **Projects & Testimonials:** Animated, filterable cards
- **3D Earth Contact:** Email form integrated with EmailJS
- **Particles/Stars Background:** Procedurally generated with Three.js
- **Responsive Design:** Mobile-first, production-ready

---

## 🖼️ Preview
<p align="center">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop" alt="Preview 1" width="49%" />
  <img src="https://images.unsplash.com/photo-1551281044-8e148f1fd3d0?q=80&w=1400&auto=format&fit=crop" alt="Preview 2" width="49%" />
</p>

> Replace with your own GIF/screenshots or recordings.

---

## 🤸 Quick Start
Ensure you have **Node.js ≥ 18** and **Git**.

```bash
# 1) Clone
git clone https://github.com/samyrh/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio

# 2) Install
npm install

# 3) Configure environment (see next section)
cp .env.example .env

# 4) Run dev
npm run dev
# Visit http://localhost:5173
````

**Common Scripts**

```bash
npm run dev       # local dev
npm run build     # production build
npm run preview   # preview build
npm run lint      # eslint
```

---

## 🔐 Configuration

Create a `.env` at the project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

* Get credentials from **EmailJS**.
* Vite exposes variables prefixed with `VITE_`.

---

## 🗂 Project Structure

```txt
src/
  assets/                # models, textures, images
  components/
    Canvas/              # 3D canvas scenes (R3F)
    ui/                  # buttons, badges, cards
  constants/             # nav, services, projects, tech
  hooks/                 # custom hooks (e.g., useWindowSize)
  lib/                   # emailjs, utils
  styles/                # tailwind helpers, globals
  App.jsx
  main.jsx
public/
  favicon.svg
```

---

## 🚀 Performance Tips

* **Lazy load** heavy 3D components with `React.lazy`/dynamic import.
* **Use Draco/GLTF compression** for 3D assets.
* **Memoize** materials/geometries; reuse where possible.
* Prefer **shallow object uniforms** and **instanced meshes** for particle fields.
* Tailwind: purge unused classes in production (Vite+Tailwind does this by default).

---

## 🗺️ Roadmap

* [ ] Theme toggle (light/dark) synchronized with OS
* [ ] Blog section (MDX)
* [ ] CMS integration (Contentful/Sanity) for projects
* [ ] Lottie animations for micro-interactions
* [ ] Unit tests for components (Vitest/RTL)

---

## 🔗 Links

* **Live**: [https://samirhalim.vercel.app](https://samirhalim.vercel.app)
* **Portfolio Repo**: [https://github.com/samyrh/Portfolio](https://github.com/samyrh/Portfolio)
* **Author**: [LinkedIn](https://www.linkedin.com/in/sami-rhalim-b444792ba/) · [GitHub](https://github.com/samyrh) · [Instagram](https://www.instagram.com/__samyrh?igsh=MW9kNnpjNDNkaGZmcA%3D%3D&utm_source=qr)

---

## 🙏 Acknowledgements

* Inspired by **JavaScript Mastery**’s 3D portfolio concepts.
* Three.js, React Three Fiber, and Drei communities for awesome tooling.

---

### License

This project is open-sourced under the **MIT License**. You are free to use, modify, and distribute.

```

