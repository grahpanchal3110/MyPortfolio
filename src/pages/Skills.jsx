// import { useEffect, useRef } from "react";

// const skillBars = [
//   { label: "JavaScript / TypeScript", pct: "90%" },
//   { label: "ReactJS / Next.js",       pct: "85%" },
//   { label: "Node.js / Express.js",    pct: "80%" },
//   { label: "MongoDB / Databases",     pct: "85%" },
// ];

// const chips = [
//   "Redux", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Git & GitHub",
//   "Mongoose", "Redis", "Prisma", "Docker", "Socket.IO",
//   "WebSocket", "REST API", "Vercel", "Data Structures", "OOP",
// ];

// export default function Skills() {
//   const barsRef = useRef(null);

//   // Animate bars on mount
//   useEffect(() => {
//     const t = setTimeout(() => {
//       barsRef.current?.querySelectorAll(".skill-bar-fill").forEach((bar) => {
//         bar.style.width = bar.getAttribute("data-width");
//       });
//     }, 200);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <div className="page-wrapper page-enter">
//       <h2 className="section-title">Core Skills</h2>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

//         {/* Skill Bars */}
//         <div ref={barsRef}>
//           {skillBars.map(({ label, pct }) => (
//             <div key={label} style={{ marginBottom: 28 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontWeight: 500 }}>
//                 <span>{label}</span>
//                 <span style={{ color: "var(--cyan)" }}>{pct}</span>
//               </div>
//               <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
//                 <div
//                   className="skill-bar-fill"
//                   data-width={pct}
//                   style={{
//                     height: "100%", width: 0,
//                     background: "linear-gradient(90deg, var(--indigo), var(--cyan))",
//                     borderRadius: 4, transition: "width 1.4s cubic-bezier(0.1,0.5,0.2,1)",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Chip Cloud */}
//         <div>
//           <p style={{ marginBottom: 20, color: "var(--text-muted)", fontSize: "0.9rem" }}>
//             Technologies & Tools Arsenal
//           </p>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
//             {chips.map((chip) => (
//               <div
//                 key={chip}
//                 className="chip"
//                 style={{
//                   padding: "8px 18px",
//                   background: "var(--surface)",
//                   border: "1px solid rgba(255,255,255,0.07)",
//                   borderRadius: 20,
//                   fontSize: "0.9rem",
//                   cursor: "default",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-5px)";
//                   e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//                   e.currentTarget.style.borderColor = "var(--pink)";
//                   e.currentTarget.style.boxShadow = "0 5px 15px rgba(236,72,153,0.3)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "";
//                   e.currentTarget.style.background = "var(--surface)";
//                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
//                   e.currentTarget.style.boxShadow = "";
//                 }}
//               >
//                 {chip}
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiVercel,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { MdOutlineStorage } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const skillBars = [
  {
    label: "JavaScript / TypeScript",
    pct: "90%",
    Icons: [SiJavascript, SiTypescript],
    color: "#f7df1e",
  },
  {
    label: "ReactJS / Next.js",
    pct: "85%",
    Icons: [SiReact, SiNextdotjs],
    color: "#61dafb",
  },
  {
    label: "Node.js / Express.js",
    pct: "80%",
    Icons: [SiNodedotjs, SiExpress],
    color: "#68a063",
  },
  {
    label: "MongoDB / Databases",
    pct: "85%",
    Icons: [SiMongodb],
    color: "#47a248",
  },
];

const chips = [
  { label: "Redux", Icon: SiRedux, color: "#764abc" },
  { label: "HTML/CSS", Icon: FaCode, color: "#e34c26" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { label: "Bootstrap", Icon: SiBootstrap, color: "#7952b3" },
  { label: "Git", Icon: SiGit, color: "#f05032" },
  { label: "GitHub", Icon: SiGithub, color: "#94a3b8" },
  { label: "Mongoose", Icon: MdOutlineStorage, color: "#880000" },
  { label: "Redis", Icon: SiRedis, color: "#dc382d" },
  { label: "Prisma", Icon: SiPrisma, color: "#5a67d8" },
  { label: "Docker", Icon: SiDocker, color: "#2496ed" },
  { label: "Socket.IO", Icon: TbBrandSocketIo, color: "#06b6d4" },
  { label: "REST API", Icon: VscJson, color: "#06b6d4" },
  { label: "Vercel", Icon: SiVercel, color: "#f8fafc" },
  { label: "Data Structures", Icon: FaCode, color: "#a855f7" },
  { label: "OOP", Icon: FaCode, color: "#f59e0b" },
];

export default function Skills() {
  const barsRef = useRef(null);
  const { isMobile, isTablet } = useBreakpoint();
  const isSmall = isMobile || isTablet;

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
          gap: isSmall ? 36 : 60,
        }}
      >
        {/* Skill Bars */}
        <div ref={barsRef}>
          {skillBars.map(({ label, pct, Icons, color }) => (
            <div key={label} style={{ marginBottom: 26 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {Icons.map((Icon, i) => (
                    <Icon key={i} size={16} color={color} />
                  ))}
                  <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>
                    {label}
                  </span>
                </div>
                <span
                  style={{
                    color: "var(--cyan)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}
                >
                  {pct}
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 8,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  className="skill-bar-fill"
                  data-width={pct}
                  style={{
                    height: "100%",
                    width: 0,
                    background:
                      "linear-gradient(90deg, var(--indigo), var(--cyan))",
                    borderRadius: 4,
                    transition: "width 1.4s cubic-bezier(0.1,0.5,0.2,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chip Cloud */}
        <div>
          <p
            style={{
              marginBottom: 18,
              color: "var(--text-muted)",
              fontSize: "0.9rem",
            }}
          >
            Technologies & Tools Arsenal
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? 8 : 10,
            }}
          >
            {chips.map(({ label, Icon, color }) => (
              <div
                key={label}
                className="chip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: isMobile ? "7px 12px" : "8px 14px",
                  background: "var(--surface)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  fontSize: isMobile ? "0.8rem" : "0.85rem",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = `${color}15`;
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = `0 5px 15px ${color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.background = "var(--surface)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Icon size={14} color={color} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
