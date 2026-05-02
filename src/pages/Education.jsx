// // const educations = [
// //   {
// //     degree: "Bachelor of Technology (IT)",
// //     inst: "GTU, Ahmedabad, India",
// //     year: "2020 – 2024",
// //     score: "8.26 CGPA",
// //     icon: "🎓",
// //   },
// //   {
// //     degree: "12th Board — Science",
// //     inst: "Gujarat Board, Patan",
// //     year: "2020",
// //     score: "91.64 PR",
// //     icon: "📚",
// //   },
// //   {
// //     degree: "10th Board",
// //     inst: "Gujarat Board, Patan",
// //     year: "2018",
// //     score: "97.37 PR",
// //     icon: "🏫",
// //   },
// // ];

// // const languages = [
// //   { name: "English",  flag: "🇬🇧", level: "Professional", color: "var(--cyan)",   delay: "0s" },
// //   { name: "Hindi",    flag: "🇮🇳", level: "Native",       color: "var(--pink)",   delay: "1s" },
// //   { name: "Gujarati", flag: "🟠", level: "Native",       color: "var(--amber)", delay: "2s" },
// // ];

// // export default function Education() {
// //   return (
// //     <div className="page-wrapper page-enter">
// //       <h2 className="section-title">Education & Languages</h2>

// //       <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 40 }}>

// //         {/* Education Cards */}
// //         <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
// //           {educations.map((edu) => (
// //             <div
// //               key={edu.degree}
// //               style={{
// //                 background: "var(--surface)",
// //                 border: "1px solid rgba(255,255,255,0.06)",
// //                 borderLeft: "4px solid var(--indigo)",
// //                 borderRadius: "0 12px 12px 0",
// //                 padding: "22px 24px",
// //                 display: "flex",
// //                 gap: 18,
// //                 alignItems: "flex-start",
// //                 transition: "all 0.3s",
// //               }}
// //               onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-hover)"; e.currentTarget.style.transform = "translateX(6px)"; }}
// //               onMouseLeave={e => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.transform = ""; }}
// //             >
// //               <div style={{ fontSize: "2rem", flexShrink: 0 }}>{edu.icon}</div>
// //               <div>
// //                 <h3 style={{ fontSize: "1.15rem", color: "#fff", marginBottom: 4 }}>{edu.degree}</h3>
// //                 <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 8 }}>
// //                   {edu.inst} &nbsp;|&nbsp; {edu.year}
// //                 </p>
// //                 <span style={{
// //                   display: "inline-block", padding: "3px 12px",
// //                   background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)",
// //                   borderRadius: 20, color: "var(--cyan)", fontSize: "0.8rem", fontWeight: 600,
// //                 }}>
// //                   {edu.score}
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Languages */}
// //         <div style={{
// //           background: "var(--surface)",
// //           border: "1px solid rgba(255,255,255,0.06)",
// //           borderRadius: 14, padding: 28,
// //         }}>
// //           <h3 style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 24, textTransform: "uppercase", letterSpacing: 1 }}>
// //             Languages
// //           </h3>
// //           <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //             {languages.map((lang) => (
// //               <div
// //                 key={lang.name}
// //                 style={{
// //                   display: "flex", alignItems: "center", justifyContent: "space-between",
// //                   padding: "14px 18px",
// //                   background: "rgba(255,255,255,0.03)",
// //                   border: `1px solid ${lang.color}33`,
// //                   borderRadius: 10,
// //                   animation: `float 4s ease-in-out infinite`,
// //                   animationDelay: lang.delay,
// //                 }}
// //               >
// //                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
// //                   <span style={{ fontSize: "1.4rem" }}>{lang.flag}</span>
// //                   <span style={{ fontWeight: 500, color: "#fff" }}>{lang.name}</span>
// //                 </div>
// //                 <span style={{ fontSize: "0.75rem", color: lang.color, fontWeight: 600 }}>
// //                   {lang.level}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// import { PiGraduationCap } from "react-icons/pi";
// import { HiOutlineBookOpen, HiOutlineAcademicCap } from "react-icons/hi2";
// import { IoLanguageOutline } from "react-icons/io5";

// const educations = [
//   {
//     Icon: PiGraduationCap,
//     degree: "Bachelor of Technology (IT)",
//     inst: "GTU, Ahmedabad, India",
//     year: "2020 – 2024",
//     score: "8.26 CGPA",
//     color: "var(--indigo)",
//   },
//   {
//     Icon: HiOutlineBookOpen,
//     degree: "12th Board — Science",
//     inst: "Gujarat Board, Patan",
//     year: "2020",
//     score: "91.64 PR",
//     color: "var(--cyan)",
//   },
//   {
//     Icon: HiOutlineAcademicCap,
//     degree: "10th Board",
//     inst: "Gujarat Board, Patan",
//     year: "2018",
//     score: "97.37 PR",
//     color: "var(--pink)",
//   },
// ];

// const languages = [
//   {
//     flag: "🇬🇧",
//     name: "English",
//     level: "Good",
//     color: "var(--cyan)",
//     delay: "0s",
//   },
//   {
//     flag: "🇮🇳",
//     name: "Hindi",
//     level: "Native",
//     color: "var(--pink)",
//     delay: "1s",
//   },
//   {
//     flag: "🟠",
//     name: "Gujarati",
//     level: "Native",
//     color: "var(--amber)",
//     delay: "2s",
//   },
// ];

// export default function Education() {
//   return (
//     <div className="page-wrapper page-enter">
//       <h2 className="section-title">Education & Languages</h2>

//       <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 40 }}>
//         {/* Education Cards */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
//           {educations.map((edu) => {
//             const { Icon, color } = edu;
//             return (
//               <div
//                 key={edu.degree}
//                 style={{
//                   background: "var(--surface)",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   borderLeft: `4px solid ${color}`,
//                   borderRadius: "0 12px 12px 0",
//                   padding: "22px 24px",
//                   display: "flex",
//                   gap: 18,
//                   alignItems: "flex-start",
//                   transition: "all 0.3s",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "var(--surface-hover)";
//                   e.currentTarget.style.transform = "translateX(6px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "var(--surface)";
//                   e.currentTarget.style.transform = "";
//                 }}
//               >
//                 {/* Icon box */}
//                 <div
//                   style={{
//                     width: 48,
//                     height: 48,
//                     borderRadius: 12,
//                     flexShrink: 0,
//                     background: `${color}15`,
//                     border: `1px solid ${color}35`,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Icon size={24} color={color} />
//                 </div>

//                 <div>
//                   <h3
//                     style={{
//                       fontSize: "1.15rem",
//                       color: "#fff",
//                       marginBottom: 4,
//                     }}
//                   >
//                     {edu.degree}
//                   </h3>
//                   <p
//                     style={{
//                       color: "var(--text-muted)",
//                       fontSize: "0.85rem",
//                       marginBottom: 10,
//                     }}
//                   >
//                     {edu.inst} &nbsp;|&nbsp; {edu.year}
//                   </p>
//                   <span
//                     style={{
//                       display: "inline-block",
//                       padding: "3px 12px",
//                       background: `${color}18`,
//                       border: `1px solid ${color}40`,
//                       borderRadius: 20,
//                       color: color,
//                       fontSize: "0.8rem",
//                       fontWeight: 600,
//                     }}
//                   >
//                     {edu.score}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Languages */}
//         <div
//           style={{
//             background: "var(--surface)",
//             border: "1px solid rgba(255,255,255,0.06)",
//             borderRadius: 14,
//             padding: 28,
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 10,
//               marginBottom: 24,
//             }}
//           >
//             <IoLanguageOutline size={18} color="var(--text-muted)" />
//             <h3
//               style={{
//                 color: "var(--text-muted)",
//                 fontSize: "0.9rem",
//                 textTransform: "uppercase",
//                 letterSpacing: 1,
//               }}
//             >
//               Languages
//             </h3>
//           </div>

//           <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//             {languages.map((lang) => (
//               <div
//                 key={lang.name}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "14px 18px",
//                   background: "rgba(255,255,255,0.03)",
//                   border: `1px solid ${lang.color}33`,
//                   borderRadius: 10,
//                   animation: `float 4s ease-in-out infinite`,
//                   animationDelay: lang.delay,
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <span style={{ fontSize: "1.3rem" }}>{lang.flag}</span>
//                   <span style={{ fontWeight: 500, color: "#fff" }}>
//                     {lang.name}
//                   </span>
//                 </div>
//                 <span
//                   style={{
//                     fontSize: "0.72rem",
//                     color: lang.color,
//                     fontWeight: 600,
//                     padding: "2px 10px",
//                     borderRadius: 20,
//                     background: `${lang.color}15`,
//                     border: `1px solid ${lang.color}30`,
//                   }}
//                 >
//                   {lang.level}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useBreakpoint } from "../hooks/useBreakpoint";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineBookOpen, HiOutlineAcademicCap } from "react-icons/hi2";
import { IoLanguageOutline } from "react-icons/io5";

const educations = [
  {
    Icon: PiGraduationCap,
    degree: "Bachelor of Technology (IT)",
    inst: "GTU, Ahmedabad, India",
    year: "2020 – 2024",
    score: "8.26 CGPA",
    color: "var(--indigo)",
  },
  {
    Icon: HiOutlineBookOpen,
    degree: "12th Board — Science",
    inst: "Gujarat Board, Patan",
    year: "2020",
    score: "91.64 PR",
    color: "var(--cyan)",
  },
  {
    Icon: HiOutlineAcademicCap,
    degree: "10th Board",
    inst: "Gujarat Board, Patan",
    year: "2018",
    score: "97.37 PR",
    color: "var(--pink)",
  },
];

const languages = [
  {
    flag: "🇬🇧",
    name: "English",
    level: "Good",
    color: "var(--cyan)",
    delay: "0s",
  },
  {
    flag: "🇮🇳",
    name: "Hindi",
    level: "Native",
    color: "var(--pink)",
    delay: "1s",
  },
  {
    flag: "🟠",
    name: "Gujarati",
    level: "Native",
    color: "var(--amber)",
    delay: "2s",
  },
];

export default function Education() {
  const { isMobile, isTablet } = useBreakpoint();
  const isSmall = isMobile || isTablet;

  return (
    <div className="page-wrapper page-enter">
      <h2 className="section-title">Education & Languages</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "3fr 2fr",
          gap: isSmall ? 28 : 40,
        }}
      >
        {/* Education Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {educations.map((edu) => {
            const { Icon, color } = edu;
            return (
              <div
                key={edu.degree}
                style={{
                  background: "var(--surface)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `4px solid ${color}`,
                  borderRadius: "0 12px 12px 0",
                  padding: isMobile ? "16px 18px" : "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--surface-hover)";
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--surface)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: `${color}15`,
                    border: `1px solid ${color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} color={color} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.82rem",
                      marginBottom: 8,
                    }}
                  >
                    {edu.inst} | {edu.year}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 12px",
                      background: `${color}18`,
                      border: `1px solid ${color}40`,
                      borderRadius: 20,
                      color,
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    {edu.score}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: isMobile ? 20 : 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <IoLanguageOutline size={17} color="var(--text-muted)" />
            <h3
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Languages
            </h3>
          </div>
          <div
            style={{
              display: isSmall ? "grid" : "flex",
              gridTemplateColumns: isSmall ? "repeat(3, 1fr)" : undefined,
              flexDirection: "column",
              gap: 12,
            }}
          >
            {languages.map((lang) => (
              <div
                key={lang.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: isMobile ? "10px 12px" : "13px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${lang.color}33`,
                  borderRadius: 10,
                  animation: `float 4s ease-in-out infinite`,
                  animationDelay: lang.delay,
                  flexDirection: isSmall ? "column" : "row",
                  gap: isSmall ? 6 : 0,
                  textAlign: isSmall ? "center" : "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexDirection: isSmall ? "column" : "row",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{lang.flag}</span>
                  <span
                    style={{
                      fontWeight: 500,
                      color: "#fff",
                      fontSize: "0.9rem",
                    }}
                  >
                    {lang.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: lang.color,
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: 20,
                    background: `${lang.color}15`,
                    border: `1px solid ${lang.color}30`,
                  }}
                >
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
