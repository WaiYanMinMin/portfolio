// Modern animated gradient mesh background with geometric shapes
import { useEffect, useState, useRef } from "react";

export const StarBackground = () => {
  const [shapes, setShapes] = useState([]);
  const [gridLines, setGridLines] = useState([]);
  const [wavePoints, setWavePoints] = useState([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    generateShapes();
    generateGridLines();
    generateWavePoints();

    const handleResize = () => {
      generateShapes();
      generateGridLines();
      generateWavePoints();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Generate floating geometric shapes
  const generateShapes = () => {
    const numberOfShapes = 8;
    const newShapes = [];

    for (let i = 0; i < numberOfShapes; i++) {
      const shapeType = Math.random() > 0.5 ? "circle" : "square";
      newShapes.push({
        id: i,
        type: shapeType,
        size: Math.random() * 120 + 80,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    setShapes(newShapes);
  };

  // Generate animated grid lines
  const generateGridLines = () => {
    const cols = Math.floor(window.innerWidth / 100);
    const rows = Math.floor(window.innerHeight / 100);
    const newLines = [];

    // Vertical lines
    for (let i = 0; i <= cols; i++) {
      newLines.push({
        id: `v-${i}`,
        type: "vertical",
        x: (i / cols) * 100,
        delay: (i % 3) * 0.2,
      });
    }

    // Horizontal lines
    for (let i = 0; i <= rows; i++) {
      newLines.push({
        id: `h-${i}`,
        type: "horizontal",
        y: (i / rows) * 100,
        delay: (i % 3) * 0.2,
      });
    }

    setGridLines(newLines);
  };

  // Generate wave points for animated wave effect
  const generateWavePoints = () => {
    const numberOfWaves = 3;
    const newWaves = [];

    for (let i = 0; i < numberOfWaves; i++) {
      newWaves.push({
        id: i,
        y: 20 + i * 30,
        amplitude: 30 + Math.random() * 20,
        frequency: 0.02 + Math.random() * 0.01,
        speed: 0.5 + Math.random() * 0.3,
        delay: i * 0.5,
      });
    }

    setWavePoints(newWaves);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(96, 165, 250, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.2) 0%, transparent 70%)
            `,
            animation: "gradient-shift 15s ease infinite",
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10">
        {gridLines.map((line) => (
          <line
            key={line.id}
            x1={line.type === "vertical" ? `${line.x}%` : "0%"}
            y1={line.type === "vertical" ? "0%" : `${line.y}%`}
            x2={line.type === "vertical" ? `${line.x}%` : "100%"}
            y2={line.type === "vertical" ? "100%" : `${line.y}%`}
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            style={{
              animation: `grid-pulse 3s ease-in-out ${line.delay}s infinite`,
            }}
          />
        ))}
      </svg>

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <div
          key={`shape-${shape.id}`}
          className="absolute"
          style={{
            width: shape.size + "px",
            height: shape.size + "px",
            left: shape.x + "%",
            top: shape.y + "%",
            opacity: shape.opacity,
            transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
            background: `linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.1))`,
            borderRadius: shape.type === "circle" ? "50%" : "8px",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            animation: `float-shape ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          }}
        />
      ))}

      {/* Animated wave lines */}
      <WaveAnimation waves={wavePoints} />

      {/* Animated connecting lines (data flow effect) */}
      <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-10">
        {Array.from({ length: 5 }).map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          return (
            <line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              strokeDasharray="5,5"
              style={{
                animation: `line-dash ${4 + i}s linear ${i * 0.5}s infinite`,
              }}
            />
          );
        })}
      </svg>

    </div>
  );
};

// Separate component for animated waves
const WaveAnimation = ({ waves }) => {
  const svgRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.02;
      if (svgRef.current) {
        const paths = svgRef.current.querySelectorAll(".wave-path");
        paths.forEach((path, index) => {
          const wave = waves[index];
          if (wave) {
            const points = Array.from({ length: 200 }, (_, i) => {
              const x = (i / 200) * 100;
              const y =
                wave.y +
                Math.sin(i * wave.frequency + timeRef.current * wave.speed) *
                  wave.amplitude;
              return `${x},${y}`;
            }).join(" ");
            path.setAttribute("points", points);
          }
        });
      }
      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [waves]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {waves.map((wave) => (
        <polyline
          key={`wave-${wave.id}`}
          className="wave-path"
          fill="none"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="0.3"
        />
      ))}
    </svg>
  );
};

