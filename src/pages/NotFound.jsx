// import { Link } from "react-router-dom";

// export default function NotFound() {
//   return (
//     <div className="page-enter" style={{
//       minHeight: "100vh", display: "flex", flexDirection: "column",
//       justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 5%",
//     }}>
//       <div style={{
//         fontFamily: "var(--font-head)", fontSize: "8rem", fontWeight: 800,
//         background: "linear-gradient(90deg, var(--indigo), var(--pink))",
//         WebkitBackgroundClip: "text", color: "transparent", lineHeight: 1,
//         marginBottom: 16,
//       }}>
//         404
//       </div>
//       <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: 32 }}>
//         Oops! Ye page nahi mila.
//       </p>
//       <Link to="/" style={{
//         padding: "12px 32px", borderRadius: 8, textDecoration: "none",
//         background: "var(--indigo)", color: "#fff", fontWeight: 600,
//         boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
//       }}>
//         ← Home Par Wapas Jao
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="page-enter"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "8rem",
          fontWeight: 800,
          background: "linear-gradient(90deg, var(--indigo), var(--pink))",
          WebkitBackgroundClip: "text",
          color: "transparent",
          lineHeight: 1,
          marginBottom: 16,
        }}
      >
        404
      </div>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "1.1rem",
          marginBottom: 32,
        }}
      >
        Oops! Not Found.
      </p>
      <Link
        to="/"
        style={{
          padding: "12px 32px",
          borderRadius: 8,
          textDecoration: "none",
          background: "var(--indigo)",
          color: "#fff",
          fontWeight: 600,
          boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
        }}
      >
        ← Home
      </Link>
    </div>
  );
}
