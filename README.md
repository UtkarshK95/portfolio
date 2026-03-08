# Utkarsh Katiyar — Portfolio

A fast, accessible, and visually sharp personal portfolio showcasing projects, skills, work experience, and a fully functional contact form with real-time email delivery.

**Live:** [portfolio-uk.vercel.app](https://portfolio-uk.vercel.app)

---

## Tech Stack

| Layer      | Technology                               |
| ---------- | ---------------------------------------- |
| Framework  | React 19 + Vite                          |
| Styling    | Tailwind CSS v4                          |
| Routing    | React Router v7                          |
| Email      | EmailJS (`@emailjs/browser`)             |
| UI         | React Icons, React Slick, React Toastify |
| Deployment | Vercel                                   |

---

## Project Structure

```text
src/
├── assets/              # Images and SVGs
├── components/
│   ├── layout/          # Navbar, Dropdown, Footer, ScrollToTop
│   ├── pages/           # Home, About, Projects, Contact
│   └── ui/              # Skills, Timeline, Testimonials
├── utils/
│   └── data.json        # Single source of truth for all content
├── App.jsx
├── index.css
└── main.jsx
```

---

## Getting Started

```bash
git clone https://github.com/UtkarshK95/portfolio.git
cd portfolio
npm install
```

Copy the environment file and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then start the dev server:

```bash
npm run dev
```

App runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

---

## License

MIT © 2026 Utkarsh Katiyar
