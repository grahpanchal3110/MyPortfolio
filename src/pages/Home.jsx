// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <>
//       <div
//         className="page-enter"
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "0 5%",
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 50,
//             alignItems: "center",
//           }}
//         >
//           {/* Left: Text */}
//           <div>
//             <div
//               style={{
//                 display: "inline-block",
//                 padding: "6px 14px",
//                 borderRadius: 20,
//                 background: "rgba(6,182,212,0.1)",
//                 border: "1px solid var(--cyan)",
//                 color: "var(--cyan)",
//                 fontSize: "0.8rem",
//                 marginBottom: 20,
//                 animation: "pulse-border 2s infinite",
//               }}
//             >
//               🟢 Available for Work
//             </div>

//             <h1
//               style={{
//                 fontFamily: "var(--font-head)",
//                 fontSize: "5rem",
//                 lineHeight: 1.1,
//                 marginBottom: 10,
//                 background:
//                   "linear-gradient(90deg, #fff 0%, #71717a 50%, #fff 100%)",
//                 backgroundSize: "200% auto",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//                 animation: "shimmer 4s linear infinite",
//               }}
//             >
//               GRAH
//               <br />
//               PANCHAL
//             </h1>

//             <h2
//               style={{
//                 fontSize: "1.5rem",
//                 color: "var(--text-muted)",
//                 marginBottom: 24,
//               }}
//             >
//               Full-Stack Developer
//             </h2>

//             <p
//               style={{
//                 color: "var(--text-muted)",
//                 maxWidth: 420,
//                 marginBottom: 36,
//                 lineHeight: 1.8,
//               }}
//             >
//               Crafting scalable web applications with Next.js, Node.js, and
//               MongoDB. Transforming complex requirements into seamless digital
//               experiences.
//             </p>

//             <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//               <Link
//                 to="/projects"
//                 style={{
//                   padding: "12px 32px",
//                   borderRadius: 8,
//                   textDecoration: "none",
//                   fontWeight: 600,
//                   background: "var(--indigo)",
//                   color: "#fff",
//                   boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-3px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 24px rgba(79,70,229,0.6)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 15px rgba(79,70,229,0.4)";
//                 }}
//               >
//                 View Projects →
//               </Link>
//               <Link
//                 to="/contact"
//                 style={{
//                   padding: "12px 32px",
//                   borderRadius: 8,
//                   textDecoration: "none",
//                   fontWeight: 500,
//                   border: "1px solid var(--text-muted)",
//                   color: "var(--text-main)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "var(--pink)";
//                   e.currentTarget.style.color = "var(--pink)";
//                   e.currentTarget.style.transform = "translateY(-3px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "var(--text-muted)";
//                   e.currentTarget.style.color = "var(--text-main)";
//                   e.currentTarget.style.transform = "";
//                 }}
//               >
//                 Contact Me
//               </Link>
//             </div>

//             {/* Quick nav chips */}
//             <div
//               style={{
//                 display: "flex",
//                 gap: 10,
//                 marginTop: 48,
//                 flexWrap: "wrap",
//               }}
//             >
//               {[
//                 { label: "Skills", to: "/skills" },
//                 { label: "Experience", to: "/experience" },
//                 { label: "Education", to: "/education" },
//               ].map(({ label, to }) => (
//                 <Link
//                   key={to}
//                   to={to}
//                   style={{
//                     padding: "6px 14px",
//                     borderRadius: 20,
//                     fontSize: "0.8rem",
//                     background: "var(--surface)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                     color: "var(--text-muted)",
//                     textDecoration: "none",
//                     transition: "all 0.2s",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = "var(--cyan)";
//                     e.currentTarget.style.color = "var(--cyan)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor =
//                       "rgba(255,255,255,0.08)";
//                     e.currentTarget.style.color = "var(--text-muted)";
//                   }}
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: 3D Floating Card */}
//           <div
//             style={{
//               position: "relative",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: 420,
//               perspective: 1000,
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 width: 300,
//                 height: 300,
//                 borderRadius: "50%",
//                 background:
//                   "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(0,0,0,0) 70%)",
//                 filter: "blur(40px)",
//                 animation: "pulse-orb 4s alternate infinite",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 width: 360,
//                 height: 360,
//                 borderRadius: "50%",
//                 border: "2px dashed rgba(255,255,255,0.08)",
//                 borderTopColor: "var(--cyan)",
//                 borderBottomColor: "var(--pink)",
//                 animation: "spin 18s linear infinite",
//               }}
//             />
//             <div
//               style={{
//                 position: "relative",
//                 width: 280,
//                 background: "var(--surface)",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 borderRadius: 20,
//                 padding: 30,
//                 textAlign: "center",
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
//                 animation: "float 6s ease-in-out infinite",
//               }}
//             >
//               <div
//                 style={{
//                   fontFamily: "var(--font-head)",
//                   fontSize: "3rem",
//                   fontWeight: 800,
//                   color: "#fff",
//                   marginBottom: 4,
//                 }}
//               >
//                 GP
//               </div>
//               <div
//                 style={{
//                   color: "var(--cyan)",
//                   fontSize: "0.85rem",
//                   marginBottom: 22,
//                 }}
//               >
//                 &lt;/ Full-Stack Engineer &gt;
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 10,
//                   textAlign: "left",
//                 }}
//               >
//                 {[
//                   "🚀 100+ Concurrent Users Handled",
//                   "⚙️ Automated Report Workflows",
//                   "🛠️ Next.js & Node.js Specialist",
//                 ].map((stat) => (
//                   <div
//                     key={stat}
//                     style={{
//                       background: "rgba(0,0,0,0.35)",
//                       padding: "10px 12px",
//                       borderRadius: 8,
//                       fontSize: "0.8rem",
//                       borderLeft: "3px solid var(--amber)",
//                     }}
//                   >
//                     {stat}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Skills />
//       <Experience />
//       <Projects />
//       <Education />
//       <Contact />
//     </>
//   );
// }

import { Link } from "react-router-dom";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
export default function Home() {
  const { isMobile, isTablet } = useBreakpoint();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        className="page-enter"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: `0 5%`,
          paddingTop: isSmall ? "90px" : "80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
            gap: isSmall ? 40 : 50,
            alignItems: "center",
          }}
        >
          {/* ── Left: Text ── */}
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: 20,
                background: "rgba(6,182,212,0.1)",
                border: "1px solid var(--cyan)",
                color: "var(--cyan)",
                fontSize: "0.8rem",
                marginBottom: 20,
                animation: "pulse-border 2s infinite",
              }}
            >
              🟢 Available for Work
            </div>

            <h1
              style={{
                fontFamily: "var(--font-head)",
                fontSize: isMobile ? "3rem" : isTablet ? "4rem" : "5rem",
                lineHeight: 1.05,
                marginBottom: 10,
                background:
                  "linear-gradient(90deg, #fff 0%, #71717a 50%, #fff 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "shimmer 4s linear infinite",
              }}
            >
              GRAH{isMobile ? " " : <br />}PANCHAL
            </h1>

            <h2
              style={{
                fontSize: isMobile ? "1.1rem" : "1.4rem",
                color: "var(--text-muted)",
                marginBottom: 20,
              }}
            >
              Full-Stack Developer
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: 420,
                marginBottom: 30,
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              Crafting scalable web applications with Next.js, Node.js, and
              MongoDB. Transforming complex requirements into seamless digital
              experiences.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                to="/projects"
                style={{
                  padding: isMobile ? "11px 24px" : "12px 32px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 600,
                  background: "var(--indigo)",
                  color: "#fff",
                  boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(79,70,229,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(79,70,229,0.4)";
                }}
              >
                View Projects →
              </Link>
              <Link
                to="/contact"
                style={{
                  padding: isMobile ? "11px 24px" : "12px 32px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 500,
                  border: "1px solid var(--text-muted)",
                  color: "var(--text-main)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--pink)";
                  e.currentTarget.style.color = "var(--pink)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--text-muted)";
                  e.currentTarget.style.color = "var(--text-main)";
                  e.currentTarget.style.transform = "";
                }}
              >
                Contact Me
              </Link>
            </div>

            {/* Quick nav chips */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 36,
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Skills", to: "/skills" },
                { label: "Experience", to: "/experience" },
                { label: "Education", to: "/education" },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: "0.8rem",
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--cyan)";
                    e.currentTarget.style.color = "var(--cyan)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: 3D Card (hidden on mobile) ── */}
          {!isMobile && (
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: isTablet ? 340 : 420,
                perspective: 1000,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: isTablet ? 220 : 300,
                  height: isTablet ? 220 : 300,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(0,0,0,0) 70%)",
                  filter: "blur(40px)",
                  animation: "pulse-orb 4s alternate infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: isTablet ? 280 : 360,
                  height: isTablet ? 280 : 360,
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,255,255,0.08)",
                  borderTopColor: "var(--cyan)",
                  borderBottomColor: "var(--pink)",
                  animation: "spin 18s linear infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: isTablet ? 230 : 280,
                  background: "var(--surface)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 20,
                  padding: isTablet ? 22 : 30,
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: isTablet ? "2rem" : "3rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  GP
                </div>
                <div
                  style={{
                    color: "var(--cyan)",
                    fontSize: "0.8rem",
                    marginBottom: 18,
                  }}
                >
                  &lt;/ Full-Stack Engineer &gt;
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    textAlign: "left",
                  }}
                >
                  {[
                    "🚀 100+ Concurrent Users Handled",
                    "⚙️ Automated Report Workflows",
                    "🛠️ Next.js & Node.js Specialist",
                  ].map((stat) => (
                    <div
                      key={stat}
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        padding: "8px 10px",
                        borderRadius: 8,
                        fontSize: "0.78rem",
                        borderLeft: "3px solid var(--amber)",
                      }}
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile stats strip */}
          {isMobile && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "🚀 100+ Concurrent Users Handled",
                "⚙️ Automated Report Workflows",
                "🛠️ Next.js & Node.js Specialist",
              ].map((stat) => (
                <div
                  key={stat}
                  style={{
                    background: "var(--surface)",
                    padding: "12px 16px",
                    borderRadius: 10,
                    fontSize: "0.85rem",
                    borderLeft: "3px solid var(--amber)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {stat}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
