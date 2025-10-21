"use client";

import { useEffect, useState } from "react";

const GlobalLetterRain = () => {
  const [showRain, setShowRain] = useState(false);

  useEffect(() => {
    // Listen for the glitch event - only start rain when triggered
    const handleGlitchActivated = () => {
      localStorage.setItem('system-breached', 'true');
      setShowRain(true);
    };

    // Listen for cleanup event
    const handleCleanup = () => {
      localStorage.removeItem('system-breached');
      setShowRain(false);
    };

    window.addEventListener('glitch-activated', handleGlitchActivated);
    window.addEventListener('cleanup-breach', handleCleanup);

    return () => {
      window.removeEventListener('glitch-activated', handleGlitchActivated);
      window.removeEventListener('cleanup-breach', handleCleanup);
    };
  }, []);

  if (!showRain) return null;

  const glitchLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}?<>".split("");

  return (
    <div className="global-letter-rain">
      {Array.from({ length: 120 }, (_, i) => (
        <span 
          key={i}
          className="global-falling-letter"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            fontSize: `${14 + Math.random() * 6}px`,
          }}
        >
          {glitchLetters[Math.floor(Math.random() * glitchLetters.length)]}
        </span>
      ))}
    </div>
  );
};

export default GlobalLetterRain;