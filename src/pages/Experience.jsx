const experiences = [
  {
    title: "Software Engineer",
    company: "Bhavantu Software",
    location: "Ahmedabad, India",
    period: "01/2024 – Present",
    desc: "Designed and developed full-stack web applications for clients, delivering production-ready software. Built and maintained a Next.js-based generator platform automating document/report workflows. Collaborated with teams to architect scalable solutions and write clean, maintainable code.",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API", "Express.js"],
  },
];

export default function Experience() {
  return (
    <div className="page-wrapper page-enter">
      <h2 className="section-title">Experience</h2>

      {/* Timeline */}
      <div style={{ position: "relative", maxWidth: 820, paddingLeft: 36, marginLeft: 10 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: 2, height: "100%",
          background: "linear-gradient(to bottom, var(--pink), var(--indigo), transparent)",
        }} />

        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} />
        ))}
      </div>

      {/* Currently open to new roles */}
      <div style={{
        marginTop: 40, maxWidth: 820, padding: "20px 24px",
        background: "rgba(79,70,229,0.08)",
        border: "1px solid rgba(79,70,229,0.25)", borderRadius: 12,
        display: "flex", alignItems: "center", gap: 14,
      }}>
        <div style={{
          width: 10, height: 10, borderRadius: "50%",
          background: "var(--cyan)",
          boxShadow: "0 0 10px var(--cyan)",
          flexShrink: 0,
        }} />
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
          Currently working at <strong style={{ color: "#fff" }}>Bhavantu Software</strong> and open to exciting new opportunities.
        </p>
      </div>
    </div>
  );
}

function TimelineItem({ exp }) {
  return (
    <div
      style={{
        position: "relative", marginBottom: 32,
        background: "var(--surface)", padding: 28,
        borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.35s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateX(10px)";
        e.currentTarget.style.boxShadow = "-4px 10px 24px rgba(79,70,229,0.2)";
        e.currentTarget.style.borderColor = "rgba(79,70,229,0.4)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {/* Dot */}
      <div style={{
        position: "absolute", top: 30, left: -42,
        width: 14, height: 14, borderRadius: "50%",
        background: "var(--bg-color)", border: "3px solid var(--pink)",
      }} />

      <h3 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: 4 }}>{exp.title}</h3>
      <p style={{ color: "var(--cyan)", fontSize: "0.9rem", marginBottom: 4, fontFamily: "var(--font-head)" }}>
        {exp.company}
      </p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: 16 }}>
        📍 {exp.location} &nbsp;|&nbsp; 📅 {exp.period}
      </p>
      <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 18 }}>{exp.desc}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {exp.tags.map(tag => (
          <span key={tag} style={{
            fontSize: "0.75rem", padding: "4px 12px",
            background: "rgba(79,70,229,0.18)", borderRadius: 4, color: "#a5b4fc",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
