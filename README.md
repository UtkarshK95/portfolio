<div align="center">

# 🚀 Utkarsh Katiyar — Portfolio

A fast, accessible, and visually polished personal portfolio built with **React + Vite** and **Tailwind CSS**. Features a fully functional contact form with real-time email delivery, smooth animations, and a responsive layout that works beautifully on all devices.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-personal--portfolio--uk.vercel.app-blue?style=for-the-badge&logo=vercel)](https://personal-portfolio-uk.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✨ Features

- **Responsive Design** — Mobile-first layout that adapts seamlessly to any screen size
- **Contact Form** — Real-time email delivery via EmailJS with toast notifications
- **Project Showcase** — Carousel-style display of projects using React Slick
- **Skills & Timeline** — Visual representation of skills and work experience
- **Smooth Notifications** — User feedback via React Toastify
- **Fast Builds** — Powered by Vite for lightning-fast dev and build times

---

## 🛠️ Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | React 19 + Vite                   |
| Styling      | Tailwind CSS v4                   |
| Routing      | React Router v7                   |
| Email        | EmailJS (`@emailjs/browser`)      |
| UI Libraries | React Icons, React Slick          |
| Notifications| React Toastify                    |
| Deployment   | Vercel                            |

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and SVGs
│   ├── components/
│   │   ├── layout/          # Navbar, Dropdown, Footer, ScrollToTop
│   │   ├── pages/           # Home, About, Projects, Contact
│   │   └── ui/              # Skills, Timeline, Testimonials
│   ├── utils/
│   │   └── data.json        # Single source of truth for all content
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/UtkarshK95/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory and add your [EmailJS](https://www.emailjs.com/) credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> You can find these values in your [EmailJS dashboard](https://dashboard.emailjs.com/).

### Development

```bash
npm run dev
```

App runs at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own fork:

1. Push your repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Add your `.env` variables in the Vercel project settings
4. Deploy!

---

## ☕ Support the Project

- **GitHub:** [https://github.com/UtkarshK95/portfolio](https://github.com/UtkarshK95/portfolio)
- **Buy Me a Coffee:** [https://buymeacoffee.com/utkarshk95](https://buymeacoffee.com/utkarshk95)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/UtkarshK95">Utkarsh Katiyar</a>
</div>
