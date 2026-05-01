import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home",       to: "/" },
  { label: "Skills",     to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects",   to: "/projects" },
  { label: "Education",  to: "/education" },
  { label: "Contact",    to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "18px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(5, 5, 8, 0.85)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      zIndex: 1000,
    }}>
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "white",
          textDecoration: "none",
          letterSpacing: 1,
        }}
      >
        GRAH.
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {navItems.map(({ label, to }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink key={to} to={to} label={label} isActive={isActive} />
          );
        })}
      </div>
    </nav>
  );
}

function NavLink({ to, label, isActive }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "6px 14px",
        textDecoration: "none",
        fontSize: "0.85rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: isActive ? "#fff" : "var(--text-muted)",
        fontWeight: isActive ? 600 : 400,
        transition: "color 0.2s ease",
        borderRadius: 6,
        background: isActive
          ? "rgba(79, 70, 229, 0.15)"
          : hovered
          ? "rgba(255,255,255,0.04)"
          : "transparent",
      }}
    >
      {label}
      {/* Active underline */}
      <span style={{
        position: "absolute",
        bottom: 0,
        left: "14px",
        width: isActive || hovered ? "calc(100% - 28px)" : "0",
        height: "2px",
        background: isActive ? "var(--indigo)" : "var(--pink)",
        transition: "width 0.3s ease",
        display: "block",
        borderRadius: 2,
      }} />
    </Link>
  );
}
