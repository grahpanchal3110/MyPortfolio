import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Re-attach hover listeners whenever DOM changes (route change)
  useEffect(() => {
    const enter = () => {
      if (!ringRef.current) return;
      Object.assign(ringRef.current.style, {
        width: "50px", height: "50px",
        borderColor: "var(--pink)",
        backgroundColor: "rgba(236,72,153,0.1)",
      });
    };
    const leave = () => {
      if (!ringRef.current) return;
      Object.assign(ringRef.current.style, {
        width: "30px", height: "30px",
        borderColor: "rgba(6,182,212,0.5)",
        backgroundColor: "transparent",
      });
    };

    const els = document.querySelectorAll("a, button, .chip, .project-card, .contact-card");
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  });

  return (
    <>
      <div ref={dotRef} style={{
        position: "fixed", width: 6, height: 6,
        background: "var(--cyan)", borderRadius: "50%",
        pointerEvents: "none", zIndex: 10000,
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10px var(--cyan)",
      }} />
      <div ref={ringRef} style={{
        position: "fixed", width: 30, height: 30,
        border: "1px solid rgba(6,182,212,0.5)", borderRadius: "50%",
        pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s, height 0.2s",
      }} />
    </>
  );
}
