# Grah Panchal Portfolio — Multi-Page React + Router

## Routes / Pages

| Route          | Page        | File                        |
|----------------|-------------|------------------------------|
| `/`            | Home        | `src/pages/Home.jsx`         |
| `/skills`      | Skills      | `src/pages/Skills.jsx`       |
| `/experience`  | Experience  | `src/pages/Experience.jsx`   |
| `/projects`    | Projects    | `src/pages/Projects.jsx`     |
| `/education`   | Education   | `src/pages/Education.jsx`    |
| `/contact`     | Contact     | `src/pages/Contact.jsx`      |
| `*`            | 404         | `src/pages/NotFound.jsx`     |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         ← React Router Link — no page refresh
│   ├── Cursor.jsx
│   ├── ParticleCanvas.jsx
│   └── Loader.jsx
├── pages/
│   ├── Home.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx                ← <Routes> defined here
├── main.jsx               ← <BrowserRouter> wraps everything
└── index.css              ← CSS variables + animations
```

## Setup & Run

```bash
npm install
npm run dev
```

## Key React Router Concepts Used

- `<BrowserRouter>` — main.jsx mein wrap kiya
- `<Routes>` + `<Route>` — App.jsx mein all routes define kiye
- `<Link to="/...">` — Navbar mein, **no page refresh**
- `useLocation()` — current active route detect karne ke liye (active nav highlight)
- `*` route — 404 fallback page
