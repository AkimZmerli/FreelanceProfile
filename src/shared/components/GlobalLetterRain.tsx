"use client";

import { useEffect, useState } from "react";

const GlobalLetterRain = () => {
  const [isClient, setIsClient] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="global-letter-rain">
      {Array.from({ length: 50 }, (_, i) => (
        <span 
          key={i}
          className="global-falling-letter"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            fontSize: `${12 + Math.random() * 4}px`,
          }}
        >
          {letters[Math.floor(Math.random() * letters.length)]}
        </span>
      ))}
    </div>
  );
};

export default GlobalLetterRain;