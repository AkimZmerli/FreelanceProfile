"use client"
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Tech stack data with reasoning
const techStack = [
  {
    name: "TypeScript",
    icon: "/ts.png",
    reasoning: "Type safety prevents bugs before they happen",
    position: 0,
  },
  {
    name: "React",
    icon: "/react.png",
    reasoning: "Component-based architecture for maintainable UIs",
    position: 1,
  },
  {
    name: "Next.js",
    icon: "/nextjs.jpeg",
    reasoning: "Full-stack framework with excellent developer experience",
    position: 2,
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwindcss.png",
    reasoning: "Utility-first CSS for rapid, consistent styling",
    position: 3,
  },
  {
    name: "Docker",
    icon: "/docker.png",
    reasoning: "Consistent environments eliminate deployment surprises",
    position: 4,
  },
  {
    name: "PostgreSQL",
    icon: "/postgresql.png",
    reasoning: "Reliable data foundation for scalable applications",
    position: 5,
  },
  {
    name: "GitHub",
    icon: "/Git-Logo.png",
    reasoning: "Industry standard for version control and collaboration",
    position: 6,
  },
  {
    name: "Claude Code",
    icon: "/Anthropic.png",
    reasoning: "AI-powered development accelerates problem-solving",
    position: 7,
  },
];

const TechStackWheel = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const radius = 160;
  const centerX = 200;
  const centerY = 200;

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 rounded-full border-2 border-primary/30 flex items-center justify-center">
        <span className="text-primary font-semibold text-sm">AZ</span>
      </div>

      {/* Spinning container */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <motion.div
              key={tech.name}
              className="absolute w-12 h-12 cursor-pointer"
              style={{
                left: x - 24,
                top: y - 24,
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              {/* Counter-rotate the icons so they stay upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="rounded-lg object-contain bg-white/10 backdrop-blur-sm p-1 border border-white/20"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tooltip */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg border border-white/20 max-w-xs text-center"
        >
          <div className="font-semibold text-sm mb-1">
            {techStack.find(t => t.name === hoveredTech)?.name}
          </div>
          <div className="text-xs text-gray-300">
            {techStack.find(t => t.name === hoveredTech)?.reasoning}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TechStackWheel;