import { useEffect, useRef } from "react";

const skillBars = [
  { label: "JavaScript / TypeScript", pct: "90%" },
  { label: "ReactJS / Next.js",       pct: "85%" },
  { label: "Node.js / Express.js",    pct: "80%" },
  { label: "MongoDB / Databases",     pct: "85%" },
];

const chips = [
  "Redux", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Git & GitHub",
  "Mongoose", "Redis", "Prisma", "Docker", "Socket.IO",
  "WebSocket", "REST API", "Vercel", "Data Structures", "OOP",
];

export default function Skills() {
  const barsRef = useRef(null);

  // Animate bars on mount
  useEffect(() => {
    const t = setTimeout(() => {
      barsRef.current?.querySelectorAll(".skill-bar-fill").forEach((bar) => {
        bar.style.width = bar.getAttribute("data-width");
      });
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-wrapper page-enter">
      <h2 className="section-title">Core Skills</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

        {/* Skill Bars */}
        <div ref={barsRef}>
          {skillBars.map(({ label, pct }) => (
            <div key={label} style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontWeight: 500 }}>
                <span>{label}</span>
                <span style={{ color: "var(--cyan)" }}>{pct}</span>
              </div>
              <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                <div
                  className="skill-bar-fill"
                  data-width={pct}
                  style={{
                    height: "100%", width: 0,
                    background: "linear-gradient(90deg, var(--indigo), var(--cyan))",
                    borderRadius: 4, transition: "width 1.4s cubic-bezier(0.1,0.5,0.2,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chip Cloud */}
        <div>
          <p style={{ marginBottom: 20, color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Technologies & Tools Arsenal
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {chips.map((chip) => (
              <div
                key={chip}
                className="chip"
                style={{
                  padding: "8px 18px",
                  background: "var(--surface)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  fontSize: "0.9rem",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "var(--pink)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(236,72,153,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.background = "var(--surface)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
