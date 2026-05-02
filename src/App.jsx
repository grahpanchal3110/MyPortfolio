import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./index.css";

import Loader        from "./components/Loader.jsx";
import Cursor        from "./components/Cursor.jsx";
import ParticleCanvas from "./components/ParticleCanvas.jsx";
import Navbar        from "./components/Navbar.jsx";

import Home       from "./pages/Home.jsx";
import Skills     from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Projects   from "./pages/Projects.jsx";
import Education  from "./pages/Education.jsx";
import Contact    from "./pages/Contact.jsx";
import NotFound   from "./pages/NotFound.jsx";

// Noise overlay (subtle grain texture)
function Noise() {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      pointerEvents: "none", zIndex: 900, opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    }} />
  );
}

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <Noise />
      <Loader onDone={() => setLoaderDone(true)} />
      <Cursor />
      <ParticleCanvas />
      <Navbar />

      {/* All page routes */}
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/skills"     element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/education"  element={<Education />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>
    </>
  );
}
