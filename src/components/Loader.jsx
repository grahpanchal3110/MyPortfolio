// import { useEffect, useState } from "react";

// export default function Loader({ onDone }) {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const t = setTimeout(() => {
//       setVisible(false);
//       setTimeout(onDone, 500);
//     }, 2200);
//     return () => clearTimeout(t);
//   }, [onDone]);

//   return (
//     <div style={{
//       position: "fixed", inset: 0,
//       background: "var(--bg-color)",
//       zIndex: 100000,
//       display: "flex", flexDirection: "column",
//       justifyContent: "center", alignItems: "center",
//       opacity: visible ? 1 : 0,
//       transition: "opacity 0.5s ease",
//       pointerEvents: visible ? "all" : "none",
//     }}>
//       <div style={{
//         fontFamily: "var(--font-head)", fontSize: "4rem", fontWeight: 800,
//         background: "linear-gradient(90deg, var(--indigo), var(--pink), var(--cyan))",
//         WebkitBackgroundClip: "text", color: "transparent",
//         marginBottom: 20, animation: "pulse 1.5s infinite alternate",
//       }}>
//         GP
//       </div>
//       <div style={{ width: 200, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
//         <div style={{
//           height: "100%", width: 0,
//           background: "linear-gradient(90deg, var(--cyan), var(--pink))",
//           animation: "fillProgress 2s ease-in-out forwards",
//         }} />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 500);
    }, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg-color)",
        zIndex: 100000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "4rem",
          fontWeight: 800,
          background:
            "linear-gradient(90deg, var(--indigo), var(--pink), var(--cyan))",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: 20,
          animation: "pulse 1.5s infinite alternate",
        }}
      >
        GP
      </div>
      <div
        style={{
          width: 200,
          height: 4,
          background: "rgba(255,255,255,0.1)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: 0,
            background: "linear-gradient(90deg, var(--cyan), var(--pink))",
            animation: "fillProgress 2s ease-in-out forwards",
          }}
        />
      </div>
    </div>
  );
}
