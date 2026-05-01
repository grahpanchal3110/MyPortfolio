import { useEffect, useRef } from "react";

const COLORS = ["#4f46e5", "#ec4899", "#06b6d4", "#f59e0b"];

class Particle {
  constructor(x, y, dx, dy, size, color, canvas) {
    Object.assign(this, { x, y, dx, dy, size, color, canvas });
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(ctx) {
    if (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx;
    if (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.draw(ctx);
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let rafId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const count = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 4) + size * 2;
        const y = Math.random() * (canvas.height - size * 4) + size * 2;
        const dx = Math.random() - 0.5;
        const dy = Math.random() - 0.5;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push(new Particle(x, y, dx, dy, size, color, canvas));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dist =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2;
          if (dist < (canvas.width / 10) * (canvas.height / 10)) {
            const opacity = (1 - dist / 20000) * 0.1;
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update(ctx));
      connect();
      rafId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", top: 0, left: 0,
      width: "100vw", height: "100vh",
      zIndex: -1, pointerEvents: "none",
    }} />
  );
}
