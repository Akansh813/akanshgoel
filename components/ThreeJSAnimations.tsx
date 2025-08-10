import { useEffect, useRef } from "react";
import { ClientOnly } from "./ClientOnly";

// Utility to create deterministic random values
const seededRandom = (seed: number) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Geometric DNA Helix for Hero
export function GeometricHelix() {
  return (
    <ClientOnly
      fallback={
        <canvas
          className="absolute inset-0 w-full h-full opacity-40"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <GeometricHelixCanvas />
    </ClientOnly>
  );
}

function GeometricHelixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;

      // Geometric helix with dots
      for (let i = 0; i < 50; i++) {
        const t = i / 50;
        const angle = t * Math.PI * 4 + time * 0.01;
        const radius = 40 + Math.sin(t * 3) * 20;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY - 100 + t * 200;
        const size = 3 + Math.sin(time * 0.02 + i * 0.2) * 2;

        ctx.beginPath();
        ctx.fillStyle = `rgba(37, 99, 235, ${
          0.3 + Math.sin(time * 0.02 + i * 0.1) * 0.3
        })`;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Connecting lines
      ctx.beginPath();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 49; i++) {
        const t1 = i / 50;
        const t2 = (i + 1) / 50;
        const angle1 = t1 * Math.PI * 4 + time * 0.01;
        const angle2 = t2 * Math.PI * 4 + time * 0.01;
        const radius1 = 40 + Math.sin(t1 * 3) * 20;
        const radius2 = 40 + Math.sin(t2 * 3) * 20;
        const x1 = centerX + radius1 * Math.cos(angle1);
        const y1 = centerY - 100 + t1 * 200;
        const x2 = centerX + radius2 * Math.cos(angle2);
        const y2 = centerY - 100 + t2 * 200;

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// Floating Code Particles for Skills
export function FloatingParticles() {
  return (
    <ClientOnly
      fallback={
        <canvas
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <FloatingParticlesCanvas />
    </ClientOnly>
  );
}

function FloatingParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Create deterministic particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      x: (seededRandom(i * 12.34) * 800) % (canvas.offsetWidth || 800),
      y: (seededRandom(i * 45.67) * 600) % (canvas.offsetHeight || 600),
      vx: (seededRandom(i * 78.9) - 0.5) * 0.5,
      vy: (seededRandom(i * 23.45) - 0.5) * 0.5,
      size: seededRandom(i * 56.78) * 3 + 1,
      opacity: seededRandom(i * 89.01) * 0.5 + 0.2,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.y > canvas.offsetHeight) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        ctx.fill();

        // Draw connections
        particles.forEach((other, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - other.x, 2) +
                Math.pow(particle.y - other.y, 2)
            );

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(16, 185, 129, ${
                0.1 * (1 - distance / 100)
              })`;
              ctx.lineWidth = 1;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// Timeline Dots for Experience
export function TimelineDots() {
  return (
    <ClientOnly
      fallback={
        <canvas
          className="absolute inset-0 w-full h-full opacity-25"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <TimelineDotsCanvas />
    </ClientOnly>
  );
}

function TimelineDotsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;

      // Vertical timeline
      ctx.beginPath();
      ctx.strokeStyle = "rgba(107, 114, 128, 0.2)";
      ctx.lineWidth = 2;
      ctx.moveTo(centerX, 50);
      ctx.lineTo(centerX, canvas.offsetHeight - 50);
      ctx.stroke();

      // Timeline dots
      for (let i = 0; i < 5; i++) {
        const y = 100 + i * 100;
        const pulse = Math.sin(time * 0.02 + i * 0.5) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.fillStyle = `rgba(37, 99, 235, ${pulse})`;
        ctx.arc(centerX, y, 6 + pulse * 2, 0, 2 * Math.PI);
        ctx.fill();

        // Ripple effect
        ctx.beginPath();
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.3 * pulse})`;
        ctx.lineWidth = 2;
        ctx.arc(centerX, y, 12 + pulse * 4, 0, 2 * Math.PI);
        ctx.stroke();
      }

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-25"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// Knowledge Graph for Education
export function KnowledgeGraph() {
  return (
    <ClientOnly
      fallback={
        <canvas
          className="absolute inset-0 w-full h-full opacity-25"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <KnowledgeGraphCanvas />
    </ClientOnly>
  );
}

function KnowledgeGraphCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Create deterministic nodes
    const nodes = Array.from({ length: 8 }, (_, i) => ({
      x: (seededRandom(i * 13.37) * 600) % (canvas.offsetWidth || 600),
      y: (seededRandom(i * 42.42) * 400) % (canvas.offsetHeight || 400),
      vx: (seededRandom(i * 71.71) - 0.5) * 0.3,
      vy: (seededRandom(i * 31.31) - 0.5) * 0.3,
      connections: [] as number[],
    }));

    // Create connections deterministically
    nodes.forEach((node, i) => {
      nodes.forEach((_, j) => {
        if (i !== j && seededRandom(i * 100 + j * 10) > 0.7) {
          node.connections.push(j);
        }
      });
    });

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x > canvas.offsetWidth || node.x < 0) node.vx *= -1;
        if (node.y > canvas.offsetHeight || node.y < 0) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));
      });

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const target = nodes[connectionIndex];
          const pulse = Math.sin(time * 0.01 + i) * 0.3 + 0.7;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * pulse})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 0.02 + i * 0.3) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.fillStyle = `rgba(16, 185, 129, ${pulse})`;
        ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI);
        ctx.fill();
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-25"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// Document Flow for Publications
export function DocumentFlow() {
  return (
    <ClientOnly
      fallback={
        <canvas
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <DocumentFlowCanvas />
    </ClientOnly>
  );
}

function DocumentFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Create deterministic documents
    const documents = Array.from({ length: 6 }, (_, i) => ({
      x: (seededRandom(i * 87.65) * 600) % (canvas.offsetWidth || 600),
      y: canvas.offsetHeight + seededRandom(i * 43.21) * 200,
      speed: 0.3 + seededRandom(i * 54.32) * 0.5,
      size: 20 + seededRandom(i * 76.54) * 15,
      opacity: 0.3 + seededRandom(i * 98.76) * 0.4,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      documents.forEach((doc, i) => {
        // Move upward
        doc.y -= doc.speed;

        // Reset when off screen
        if (doc.y < -doc.size) {
          doc.y = canvas.offsetHeight + doc.size;
          doc.x = seededRandom(i * 87.65 + time * 0.1) * canvas.offsetWidth;
        }

        // Draw document shape
        const pulse = Math.sin(time * 0.01 + i * 0.5) * 0.2 + 0.8;

        ctx.save();
        ctx.translate(doc.x, doc.y);
        ctx.rotate(Math.sin(time * 0.005 + i) * 0.1);

        ctx.beginPath();
        ctx.fillStyle = `rgba(37, 99, 235, ${doc.opacity * pulse})`;
        ctx.roundRect(
          -doc.size / 2,
          -doc.size / 2,
          doc.size,
          doc.size * 1.3,
          4
        );
        ctx.fill();

        // Document lines
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * pulse})`;
        ctx.lineWidth = 1;
        for (let j = 0; j < 3; j++) {
          const lineY = -doc.size / 3 + j * 6;
          ctx.beginPath();
          ctx.moveTo(-doc.size / 3, lineY);
          ctx.lineTo(doc.size / 3, lineY);
          ctx.stroke();
        }

        ctx.restore();
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// Network Connections for Contact
export function NetworkConnections() {
  return (
    <ClientOnly
      fallback={
        <canvas
          className="absolute inset-0 w-full h-full opacity-25"
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <NetworkConnectionsCanvas />
    </ClientOnly>
  );
}

function NetworkConnectionsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;

      // Central hub
      ctx.beginPath();
      ctx.fillStyle = `rgba(37, 99, 235, 0.6)`;
      ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
      ctx.fill();

      // Radiating connections
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * 2 * Math.PI + time * 0.01;
        const distance = 80 + Math.sin(time * 0.02 + i) * 20;
        const x = centerX + distance * Math.cos(angle);
        const y = centerY + distance * Math.sin(angle);
        const pulse = Math.sin(time * 0.02 + i * 0.3) * 0.3 + 0.7;

        // Connection line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 * pulse})`;
        ctx.lineWidth = 2;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // End node
        ctx.beginPath();
        ctx.fillStyle = `rgba(16, 185, 129, ${pulse})`;
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();

        // Expanding rings
        ctx.beginPath();
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * pulse})`;
        ctx.lineWidth = 1;
        ctx.arc(x, y, 12 + pulse * 4, 0, 2 * Math.PI);
        ctx.stroke();
      }

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-25"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
