// const contacts = [
//   {
//     icon: "📧",
//     label: "Email",
//     value: "grahpanchal3110@gmail.com",
//     href: "mailto:grahpanchal3110@gmail.com",
//   },
//   {
//     icon: "📱",
//     label: "Phone",
//     value: "+91 9537182599",
//     href: "tel:+919537182599",
//   },
//   {
//     icon: "📍",
//     label: "Location",
//     value: "Ahmedabad, Gujarat, India",
//     href: "https://maps.app.goo.gl/n7zBSiXrYnh7HN5N6",
//   },
//   {
//     icon: "💼",
//     label: "LinkedIn",
//     value: "linkedin.com/in/grahpanchal",
//     href: "https://www.linkedin.com/in/grah-panchal-919356230?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
//   },
//   {
//     icon: "🐙",
//     label: "GitHub",
//     value: "github.com/grahpanchal",
//     href: "https://github.com/grahpanchal3110",
//   },
// ];

// export default function Contact() {
//   return (
//     <div className="page-wrapper page-enter">
//       <h2 className="section-title">Get In Touch</h2>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

//         {/* Contact Cards */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//           <p style={{ color: "var(--text-muted)", marginBottom: 10, lineHeight: 1.8 }}>
//             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
//           </p>

//           {contacts.map((c) => (
//             <ContactCard key={c.label} contact={c} />
//           ))}
//         </div>

//         {/* Visual */}
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: 320 }}>
//           {[0, 1, 2].map(i => (
//             <div key={i} style={{
//               position: "absolute", width: 140, height: 140, borderRadius: "50%",
//               border: "2px solid var(--pink)", opacity: 0,
//               animation: `rippleEffect 3s linear infinite`,
//               animationDelay: `${i}s`,
//             }} />
//           ))}
//           <div style={{
//             width: 140, height: 140,
//             background: "linear-gradient(135deg, var(--indigo), var(--pink))",
//             borderRadius: "50%",
//             display: "flex", justifyContent: "center", alignItems: "center",
//             fontFamily: "var(--font-head)", fontSize: "3.2rem", fontWeight: 800,
//             color: "#fff", zIndex: 10,
//             boxShadow: "0 0 60px rgba(236,72,153,0.3)",
//           }}>
//             GP
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// function ContactCard({ contact }) {
//   const inner = (
//     <div
//       className="contact-card"
//       style={{
//         display: "flex", alignItems: "center", gap: 18,
//         background: "var(--surface)", padding: "16px 20px", borderRadius: 12,
//         border: "1px solid rgba(255,255,255,0.06)",
//         transition: "all 0.3s ease",
//         textDecoration: "none", color: "inherit",
//       }}
//       onMouseEnter={e => {
//         e.currentTarget.style.transform = "translateX(10px)";
//         e.currentTarget.style.borderColor = "var(--pink)";
//         e.currentTarget.style.background = "rgba(236,72,153,0.06)";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.transform = "";
//         e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
//         e.currentTarget.style.background = "var(--surface)";
//       }}
//     >
//       <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{contact.icon}</div>
//       <div>
//         <h5 style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>
//           {contact.label}
//         </h5>
//         <p style={{ color: "#fff", fontSize: "1rem" }}>{contact.value}</p>
//       </div>
//     </div>
//   );

//   return contact.href ? (
//     <a href={contact.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
//       {inner}
//     </a>
//   ) : inner;
// }

// // import React, { useState } from "react";

// // const contacts = [
// //   {
// //     icon: "📧",
// //     label: "Email",
// //     value: "grahpanchal3110@gmail.com",
// //     href: "mailto:grahpanchal3110@gmail.com",
// //   },
// //   {
// //     icon: "📱",
// //     label: "Phone",
// //     value: "+91 9537182599",
// //     href: "tel:+919537182599",
// //   },
// //   {
// //     icon: "📍",
// //     label: "Location",
// //     value: "Ahmedabad, Gujarat, India",
// //     href: "https://maps.app.goo.gl/n7zBSiXrYnh7HN5N6",
// //   },
// //   {
// //     icon: "💼",
// //     label: "LinkedIn",
// //     value: "linkedin.com/in/grahpanchal",
// //     href: "https://www.linkedin.com/in/grah-panchal-919356230",
// //   },
// //   {
// //     icon: "🐙",
// //     label: "GitHub",
// //     value: "github.com/grahpanchal",
// //     href: "https://github.com/grahpanchal3110",
// //   },
// // ];

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });
// //   const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setStatus("loading");

// //     try {
// //       // NOTE: Resend requires a backend to keep your API key secure.
// //       // Aapko yaha apne Node.js/Next.js backend ka endpoint daalna hoga.
// //       // Example: const response = await fetch('http://localhost:5000/send-email', { ... })

// //       console.log("Form Data to send:", formData);

// //       // Simulate API call
// //       await new Promise((resolve) => setTimeout(resolve, 1500));

// //       setStatus("success");
// //       setFormData({ name: "", email: "", message: "" });

// //       // Reset success message after 3 seconds
// //       setTimeout(() => setStatus("idle"), 3000);
// //     } catch (error) {
// //       console.error(error);
// //       setStatus("error");
// //     }
// //   };

// //   return (
// //     <div
// //       className="page-wrapper page-enter"
// //       id="contact"
// //       style={{ padding: "100px 5%" }}
// //     >
// //       <h2 className="section-title">Get In Touch</h2>

// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// //           gap: 60,
// //           alignItems: "start",
// //         }}
// //       >
// //         {/* Left Column: Contact Cards */}
// //         <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// //           <p
// //             style={{
// //               color: "var(--text-muted)",
// //               marginBottom: 10,
// //               lineHeight: 1.8,
// //             }}
// //           >
// //             I'm always open to discussing new projects, creative ideas, or
// //             opportunities to be part of your vision. Feel free to reach out!
// //           </p>

// //           {contacts.map((c) => (
// //             <ContactCard key={c.label} contact={c} />
// //           ))}
// //         </div>

// //         {/* Right Column: Contact Form */}
// //         <div
// //           style={{
// //             background: "var(--surface)",
// //             padding: "35px",
// //             borderRadius: "16px",
// //             border: "1px solid rgba(255,255,255,0.06)",
// //             boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontFamily: "var(--font-head)",
// //               fontSize: "1.8rem",
// //               color: "#fff",
// //               marginBottom: "25px",
// //             }}
// //           >
// //             Send Me a Message
// //           </h3>

// //           <form
// //             onSubmit={handleSubmit}
// //             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
// //           >
// //             <div style={{ position: "relative" }}>
// //               <span
// //                 style={{
// //                   position: "absolute",
// //                   left: "15px",
// //                   top: "14px",
// //                   fontSize: "1.2rem",
// //                   opacity: 0.5,
// //                 }}
// //               >
// //                 👤
// //               </span>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 required
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 style={inputStyle}
// //               />
// //             </div>

// //             <div style={{ position: "relative" }}>
// //               <span
// //                 style={{
// //                   position: "absolute",
// //                   left: "15px",
// //                   top: "14px",
// //                   fontSize: "1.2rem",
// //                   opacity: 0.5,
// //                 }}
// //               >
// //                 ✉️
// //               </span>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 required
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 style={inputStyle}
// //               />
// //             </div>

// //             <div style={{ position: "relative" }}>
// //               <span
// //                 style={{
// //                   position: "absolute",
// //                   left: "15px",
// //                   top: "14px",
// //                   fontSize: "1.2rem",
// //                   opacity: 0.5,
// //                 }}
// //               >
// //                 💬
// //               </span>
// //               <textarea
// //                 name="message"
// //                 placeholder="Your Message"
// //                 rows="5"
// //                 required
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 style={{ ...inputStyle, resize: "none", paddingTop: "14px" }}
// //               ></textarea>
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={status === "loading"}
// //               style={{
// //                 background:
// //                   "linear-gradient(90deg, var(--indigo), var(--pink))",
// //                 color: "#fff",
// //                 padding: "16px",
// //                 border: "none",
// //                 borderRadius: "8px",
// //                 fontSize: "1.1rem",
// //                 fontFamily: "var(--font-head)",
// //                 fontWeight: "600",
// //                 cursor: status === "loading" ? "not-allowed" : "pointer",
// //                 transition: "all 0.3s ease",
// //                 opacity: status === "loading" ? 0.7 : 1,
// //                 boxShadow: "0 10px 20px rgba(236,72,153,0.3)",
// //               }}
// //             >
// //               {status === "loading"
// //                 ? "Sending..."
// //                 : status === "success"
// //                   ? "Message Sent! ✓"
// //                   : "Send Message ✉"}
// //             </button>

// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 fontSize: "0.85rem",
// //                 color: "var(--text-muted)",
// //                 marginTop: "5px",
// //               }}
// //             >
// //               Mail powered by <b>Resend</b>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Input styles logic extracted for cleaner code
// // const inputStyle = {
// //   width: "100%",
// //   padding: "14px 14px 14px 45px",
// //   background: "rgba(0, 0, 0, 0.2)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   borderRadius: "8px",
// //   color: "#fff",
// //   fontSize: "1rem",
// //   fontFamily: "var(--font-body)",
// //   outline: "none",
// //   transition: "border 0.3s ease",
// // };

// // function ContactCard({ contact }) {
// //   const inner = (
// //     <div
// //       className="contact-card"
// //       style={{
// //         display: "flex",
// //         alignItems: "center",
// //         gap: 18,
// //         background: "var(--surface)",
// //         padding: "16px 20px",
// //         borderRadius: 12,
// //         border: "1px solid rgba(255,255,255,0.06)",
// //         transition: "all 0.3s ease",
// //         textDecoration: "none",
// //         color: "inherit",
// //       }}
// //       onMouseEnter={(e) => {
// //         e.currentTarget.style.transform = "translateX(10px)";
// //         e.currentTarget.style.borderColor = "var(--pink)";
// //         e.currentTarget.style.background = "rgba(236,72,153,0.06)";
// //       }}
// //       onMouseLeave={(e) => {
// //         e.currentTarget.style.transform = "";
// //         e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
// //         e.currentTarget.style.background = "var(--surface)";
// //       }}
// //     >
// //       <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{contact.icon}</div>
// //       <div>
// //         <h5
// //           style={{
// //             color: "var(--text-muted)",
// //             fontSize: "0.75rem",
// //             textTransform: "uppercase",
// //             letterSpacing: 1,
// //             marginBottom: 2,
// //           }}
// //         >
// //           {contact.label}
// //         </h5>
// //         <p style={{ color: "#fff", fontSize: "1rem" }}>{contact.value}</p>
// //       </div>
// //     </div>
// //   );

// //   return contact.href ? (
// //     <a
// //       href={contact.href}
// //       target="_blank"
// //       rel="noreferrer"
// //       style={{ textDecoration: "none" }}
// //     >
// //       {inner}
// //     </a>
// //   ) : (
// //     inner
// //   );
// // }



import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

// ─── EmailJS Config ─────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ────────────────────────────────────────────────────────────────────────────

const contacts = [
  {
    Icon: MdOutlineEmail,
    label: "Email",
    value: "grahpanchal3110@gmail.com",
    href: "mailto:grahpanchal3110@gmail.com",
    color: "var(--cyan)",
  },
  {
    Icon: MdOutlinePhone,
    label: "Phone",
    value: "+91 9537182599",
    href: "tel:+919537182599",
    color: "var(--indigo)",
  },
  {
    Icon: MdOutlineLocationOn,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    href: "https://maps.app.goo.gl/n7zBSiXrYnh7HN5N6",
    color: "var(--pink)",
  },
  {
    Icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/grahpanchal",
    href: "https://www.linkedin.com/in/grah-panchal-919356230",
    color: "#0077b5",
  },
  {
    Icon: FiGithub,
    label: "GitHub",
    value: "github.com/grahpanchal",
    href: "https://github.com/grahpanchal3110",
    color: "var(--text-muted)",
  },
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "13px 16px",
  color: "#fff",
  fontSize: "0.95rem",
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color 0.25s, background 0.25s",
};

const labelStyle = {
  display: "block",
  color: "var(--text-muted)",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: 8,
};

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="page-wrapper page-enter">
      <h2 className="section-title">Get In Touch</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 50,
          alignItems: "start",
        }}
      >
        {/* ── Left: Info Cards ── */}
        <div>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: 24,
              lineHeight: 1.85,
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {contacts.map((c) => (
              <ContactCard key={c.label} contact={c} />
            ))}
          </div>
        </div>

        {/* ── Right: Contact Form ── */}
        <div
          style={{
            background: "rgba(20,20,30,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "36px 32px",
            backdropFilter: "blur(12px)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "1.4rem",
              color: "#fff",
              marginBottom: 6,
            }}
          >
            Send a Message
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              marginBottom: 28,
            }}
          >
            Reply within 24 hours  🚀
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <div>
                <label style={labelStyle}>Name *</label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--cyan)";
                    e.target.style.background = "rgba(6,182,212,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(255,255,255,0.04)";
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--cyan)";
                    e.target.style.background = "rgba(6,182,212,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(255,255,255,0.04)";
                  }}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--cyan)";
                  e.target.style.background = "rgba(6,182,212,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.04)";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message Here..."
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--cyan)";
                  e.target.style.background = "rgba(6,182,212,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.04)";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: 10,
                border: "none",
                background:
                  status === "success"
                    ? "linear-gradient(90deg, #059669, #10b981)"
                    : status === "error"
                      ? "linear-gradient(90deg, #dc2626, #ef4444)"
                      : "linear-gradient(90deg, var(--indigo), var(--pink))",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
              onMouseEnter={(e) => {
                if (status === "idle")
                  e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              {status === "idle" && (
                <>
                  <FiSend size={18} /> Send Message
                </>
              )}
              {status === "sending" && "⏳ Sending..."}
              {status === "success" && "✅ Message Sent!"}
              {status === "error" && "❌ Failed — Try Again"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ contact }) {
  const { Icon, color } = contact;
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        className="contact-card"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "var(--surface)",
          padding: "14px 18px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.3s ease",
          color: "inherit",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(8px)";
          e.currentTarget.style.borderColor = color;
          e.currentTarget.style.background = `${color}10`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          e.currentTarget.style.background = "var(--surface)";
        }}
      >
        {/* Icon box */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 10,
            flexShrink: 0,
            background: `${color}15`,
            border: `1px solid ${color}35`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} color={color} />
        </div>
        <div>
          <h5
            style={{
              color: "var(--text-muted)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 2,
            }}
          >
            {contact.label}
          </h5>
          <p style={{ color: "#fff", fontSize: "0.95rem" }}>{contact.value}</p>
        </div>
      </div>
    </a>
  );
}
