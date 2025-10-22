"use client";

import { useEffect, useState } from "react";

const GlobalLetterRain = () => {
  const [isClient, setIsClient] = useState(false);
  const [isIntense, setIsIntense] = useState(false);
  const normalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  const intenseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()".split("");

  useEffect(() => {
    setIsClient(true);
    
    // Listen for the glitch-activated event to intensify
    const handleGlitchActivated = () => {
      setIsIntense(true);
      // Reset after 10 seconds
      setTimeout(() => setIsIntense(false), 10000);
    };

    window.addEventListener('glitch-activated', handleGlitchActivated);
    return () => window.removeEventListener('glitch-activated', handleGlitchActivated);
  }, []);

  if (!isClient) {
    return null;
  }

  const letterCount = isIntense ? 200 : 50;
  const animationSpeed = isIntense ? 2 : 8;
  const maxSpeed = isIntense ? 6 : 12;
  const letters = isIntense ? intenseLetters : normalLetters;

  return (
    <div className="global-letter-rain">
      {Array.from({ length: letterCount }, (_, i) => (
        <span 
          key={i}
          className={`global-falling-letter ${isIntense ? 'intense-rain text-pink-500' : ''}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * (isIntense ? 5 : 20)}s`,
            animationDuration: `${animationSpeed + Math.random() * maxSpeed}s`,
            fontSize: `${12 + Math.random() * (isIntense ? 8 : 4)}px`,
            opacity: isIntense ? 0.9 : 1.0,
          }}
        >
          {letters[Math.floor(Math.random() * letters.length)]}
        </span>
      ))}
    </div>
  );
};

export default GlobalLetterRain;