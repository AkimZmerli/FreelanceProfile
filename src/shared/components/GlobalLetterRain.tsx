"use client";

import { useEffect, useState } from "react";

const GlobalLetterRain = () => {
  const [isClient, setIsClient] = useState(false);
  const [isIntense, setIsIntense] = useState(false);
  const [showNormalRain, setShowNormalRain] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const normalLetters = "<>0123456789".split("");
  const intenseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()".split("");

  useEffect(() => {
    setIsClient(true);
    
    // Start fade out after 18 seconds (2 seconds fade duration)
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 18000);
    
    // Completely hide normal rain after 20 seconds
    const hideTimer = setTimeout(() => {
      setShowNormalRain(false);
    }, 20000);
    
    // Listen for the glitch-activated event to intensify
    const handleGlitchActivated = () => {
      setIsIntense(true);
      // Reset after 10 seconds
      setTimeout(() => setIsIntense(false), 10000);
    };

    window.addEventListener('glitch-activated', handleGlitchActivated);
    
    return () => {
      window.removeEventListener('glitch-activated', handleGlitchActivated);
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const letterCount = isIntense ? 200 : 50;
  const animationSpeed = isIntense ? 2 : 8;
  const maxSpeed = isIntense ? 6 : 12;
  const letters = isIntense ? intenseLetters : normalLetters;

  return (
    <div 
      className="global-letter-rain"
      style={{
        opacity: isIntense ? 1 : (fadeOut ? 0 : 1),
        transition: isIntense ? 'none' : 'opacity 2s ease-out',
        display: (!showNormalRain && !isIntense) ? 'none' : 'block'
      }}
    >
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