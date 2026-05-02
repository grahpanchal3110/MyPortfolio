// const projects = [
//   {
//     icon: "💬",
//     title: "Real-Time Chat App",
//     desc: "Scalable chat app supporting 100+ concurrent users with WebSocket messaging, user auth, and chat rooms. Integrated Redis with Docker for optimized caching.",
//     tags: ["React", "Node.js", "Socket.IO", "Redis", "Docker"],
//     color: "var(--cyan)",
//   },
//   {
//     icon: "💼",
//     title: "Hirred - Job Board",
//     desc: "Full-stack platform for employers and candidates. Features role-based auth, dashboards, job search/filtering, and application tracking.",
//     tags: ["Next.js", "MongoDB", "Tailwind CSS"],
//     color: "var(--indigo)",
//   },
//   {
//     icon: "📝",
//     title: "Zira - Project Manager",
//     desc: "Jira-inspired app with workspaces, projects, and sprint boards including drag-and-drop kanban. Team collaboration and task priority management.",
//     tags: ["TypeScript", "Prisma", "Next.js"],
//     color: "var(--pink)",
//   },
//   {
//     icon: "🗣️",
//     title: "Discuss - Forum",
//     desc: "GitHub OAuth-authenticated discussion platform. Users can create topics and engage via nested threaded comments using SSR for speed.",
//     tags: ["Next.js", "Prisma", "MongoDB"],
//     color: "var(--amber)",
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="page-wrapper page-enter">
//       <h2 className="section-title">Featured Projects</h2>

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
//         {projects.map((p) => (
//           <ProjectCard key={p.title} project={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ProjectCard({ project }) {
//   return (
//     <div
//       className="project-card"
//       style={{
//         background: "var(--surface)",
//         border: "1px solid rgba(255,255,255,0.06)",
//         borderRadius: 14,
//         padding: 28,
//         position: "relative",
//         overflow: "hidden",
//         transition: "transform 0.35s ease, box-shadow 0.35s ease",
//         cursor: "default",
//       }}
//       onMouseEnter={e => {
//         e.currentTarget.style.transform = "translateY(-10px)";
//         e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
//         e.currentTarget.querySelector(".top-bar").style.width = "100%";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.transform = "";
//         e.currentTarget.style.boxShadow = "";
//         e.currentTarget.querySelector(".top-bar").style.width = "0";
//       }}
//     >
//       {/* Animated top border */}
//       <div className="top-bar" style={{
//         position: "absolute", top: 0, left: 0,
//         width: 0, height: 3,
//         background: `linear-gradient(90deg, var(--cyan), ${project.color})`,
//         transition: "width 0.4s ease",
//       }} />

//       <div style={{ fontSize: "2.4rem", marginBottom: 14 }}>{project.icon}</div>
//       <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.25rem", color: "#fff", marginBottom: 10 }}>
//         {project.title}
//       </h3>
//       <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.7 }}>
//         {project.desc}
//       </p>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//         {project.tags.map(tag => (
//           <span key={tag} style={{
//             fontSize: "0.75rem", padding: "4px 10px",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: 4, color: "var(--amber)",
//           }}>
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }



import { IoChatbubblesOutline } from "react-icons/io5";
import { BsBriefcase, BsKanban, BsChatSquareText } from "react-icons/bs";

const projects = [
  {
    Icon: IoChatbubblesOutline,
    title: "Real-Time Chat App",
    desc: "Scalable chat app supporting 100+ concurrent users with WebSocket messaging, user auth, and chat rooms. Integrated Redis with Docker for optimized caching.",
    tags: ["React", "Node.js", "Socket.IO", "Redis", "Docker"],
    color: "var(--cyan)",
  },
  {
    Icon: BsBriefcase,
    title: "Hirred - Job Board",
    desc: "Full-stack platform for employers and candidates. Features role-based auth, dashboards, job search/filtering, and application tracking.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    color: "var(--indigo)",
  },
  {
    Icon: BsKanban,
    title: "Zira - Project Manager",
    desc: "Jira-inspired app with workspaces, projects, and sprint boards including drag-and-drop kanban. Team collaboration and task priority management.",
    tags: ["TypeScript", "Prisma", "Next.js"],
    color: "var(--pink)",
  },
  {
    Icon: BsChatSquareText,
    title: "Discuss - Forum",
    desc: "GitHub OAuth-authenticated discussion platform. Users can create topics and engage via nested threaded comments using SSR for speed.",
    tags: ["Next.js", "Prisma", "MongoDB"],
    color: "var(--amber)",
  },
];

export default function Projects() {
  return (
    <div className="page-wrapper page-enter">
      <h2 className="section-title">Featured Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { Icon } = project;
  return (
    <div
      className="project-card"
      style={{
        background: "var(--surface)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 14,
        padding: 28,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
        e.currentTarget.querySelector(".top-bar").style.width = "100%";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.querySelector(".top-bar").style.width = "0";
      }}
    >
      {/* Animated top border */}
      <div
        className="top-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 3,
          background: `linear-gradient(90deg, var(--cyan), ${project.color})`,
          transition: "width 0.4s ease",
        }}
      />

      {/* React Icon in a styled circle */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          marginBottom: 18,
          background: `${project.color}18`,
          border: `1px solid ${project.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={26} color={project.color} />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "1.25rem",
          color: "#fff",
          marginBottom: 10,
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          marginBottom: 20,
          lineHeight: 1.7,
        }}
      >
        {project.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.75rem",
              padding: "4px 10px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4,
              color: "var(--amber)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
