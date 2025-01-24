import React, { useEffect, useState } from 'react';

const AnimatedSmokeBackground = () => {
  const [smokeParticles, setSmokeParticles] = useState([]);

  useEffect(() => {
    const generateSmoke = () => {
      const newSmoke = Array.from({ length: 15 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 50 + 50,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 2 + 1,
        angle: Math.random() * 360,
        angularSpeed: Math.random() * 2 - 1,
        color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.3)`
      }));
      setSmokeParticles(newSmoke);
    };

    generateSmoke();
    const interval = setInterval(generateSmoke, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        {smokeParticles.map((smoke, index) => (
          <g key={index} transform={`translate(${smoke.x}%, ${smoke.y}%)`}>
            <path
              d="M0 0c0 0 2-5 4-5s4 5 4 5 2-5 4-5 4 5 4 5"
              fill={smoke.color}
              transform={`rotate(${smoke.angle} 0 0) scale(${smoke.size/100})`}
              opacity={smoke.opacity}
              className="animate-[smokeFloat_${smoke.speed}s_ease-in-out_infinite]"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedSmokeBackground;