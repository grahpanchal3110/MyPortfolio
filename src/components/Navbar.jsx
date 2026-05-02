// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const navItems = [
//   { label: "Home",       to: "/" },
//   { label: "Skills",     to: "/skills" },
//   { label: "Experience", to: "/experience" },
//   { label: "Projects",   to: "/projects" },
//   { label: "Education",  to: "/education" },
//   { label: "Contact",    to: "/contact" },
// ];

// export default function Navbar() {
//   const location = useLocation();

//   return (
//     <nav style={{
//       position: "fixed",
//       top: 0,
//       width: "100%",
//       padding: "18px 5%",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       background: "rgba(5, 5, 8, 0.85)",
//       backdropFilter: "blur(14px)",
//       borderBottom: "1px solid rgba(255,255,255,0.05)",
//       zIndex: 1000,
//     }}>
//       {/* Logo */}
//       <Link
//         to="/"
//         style={{
//           fontFamily: "var(--font-head)",
//           fontSize: "1.5rem",
//           fontWeight: 800,
//           color: "white",
//           textDecoration: "none",
//           letterSpacing: 1,
//         }}
//       >
//         GRAH.
//       </Link>

//       {/* Nav Links */}
//       <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//         {navItems.map(({ label, to }) => {
//           const isActive = location.pathname === to;
//           return (
//             <NavLink key={to} to={to} label={label} isActive={isActive} />
//           );
//         })}
//       </div>
//     </nav>
//   );
// }

// function NavLink({ to, label, isActive }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link
//       to={to}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         padding: "6px 14px",
//         textDecoration: "none",
//         fontSize: "0.85rem",
//         textTransform: "uppercase",
//         letterSpacing: "1px",
//         color: isActive ? "#fff" : "var(--text-muted)",
//         fontWeight: isActive ? 600 : 400,
//         transition: "color 0.2s ease",
//         borderRadius: 6,
//         background: isActive
//           ? "rgba(79, 70, 229, 0.15)"
//           : hovered
//           ? "rgba(255,255,255,0.04)"
//           : "transparent",
//       }}
//     >
//       {label}
//       {/* Active underline */}
//       <span style={{
//         position: "absolute",
//         bottom: 0,
//         left: "14px",
//         width: isActive || hovered ? "calc(100% - 28px)" : "0",
//         height: "2px",
//         background: isActive ? "var(--indigo)" : "var(--pink)",
//         transition: "width 0.3s ease",
//         display: "block",
//         borderRadius: 2,
//       }} />
//     </Link>
//   );
// }

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBreakpoint } from "../hooks/useBreakpoint";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const { isMobile, isTablet } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const showHamburger = isMobile || isTablet;
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "var(--nav-h)",
          padding: "0 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(5,5,8,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          onClick={close}
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "white",
            textDecoration: "none",
            letterSpacing: 1,
          }}
        >
          GRAH.
        </Link>

        {/* Desktop */}
        {!showHamburger && (
          <div style={{ display: "flex", gap: 4 }}>
            {navItems.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                label={label}
                isActive={location.pathname === to}
              />
            ))}
          </div>
        )}

        {/* Hamburger */}
        {showHamburger && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: menuOpen ? "var(--pink)" : "var(--text-main)",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px,-5px)"
                        : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile drawer backdrop */}
      {showHamburger && menuOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1500,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
          }}
        />
      )}

      {/* Mobile drawer */}
      {showHamburger && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "min(300px, 80vw)",
            height: "100vh",
            background: "rgba(8,8,14,0.99)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            padding: "80px 28px 40px",
            gap: 6,
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <button
            onClick={close}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              fontSize: "1.4rem",
            }}
          >
            ✕
          </button>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            Navigation
          </p>

          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              style={{
                display: "block",
                padding: "13px 16px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: location.pathname === to ? 600 : 400,
                color: location.pathname === to ? "#fff" : "var(--text-muted)",
                background:
                  location.pathname === to
                    ? "rgba(79,70,229,0.15)"
                    : "transparent",
                border:
                  location.pathname === to
                    ? "1px solid rgba(79,70,229,0.3)"
                    : "1px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {label}
            </Link>
          ))}

          <div
            style={{
              marginTop: "auto",
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
              Grah Panchal · Full-Stack Dev
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {["var(--indigo)", "var(--pink)", "var(--cyan)"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
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
        padding: "6px 12px",
        textDecoration: "none",
        fontSize: "0.82rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: isActive ? "#fff" : "var(--text-muted)",
        fontWeight: isActive ? 600 : 400,
        borderRadius: 6,
        background: isActive
          ? "rgba(79,70,229,0.15)"
          : hovered
            ? "rgba(255,255,255,0.04)"
            : "transparent",
        transition: "all 0.2s ease",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: "12px",
          width: isActive || hovered ? "calc(100% - 24px)" : "0",
          height: "2px",
          background: isActive ? "var(--indigo)" : "var(--pink)",
          transition: "width 0.3s ease",
          display: "block",
          borderRadius: 2,
        }}
      />
    </Link>
  );
}
