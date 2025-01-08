"use client"
import { cn } from '@/lib/utils'
import React, { useState, useEffect, useRef } from 'react';
import HackerBtn from './animation/HackerBtn'

function TotalRecall() {
  const [isChaosModeActive, setIsChaosModeActive] = useState(false);
  const chaosIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const applyChaosToDom = () => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    textElements.forEach((element) => {
      const originalText = element.textContent || '';
      if (originalText.trim()) {
        element.setAttribute('data-original', originalText);
        element.textContent = randomChars(originalText.length);
      }
    });
  };

  const restoreOriginalText = () => {
    if (chaosIntervalRef.current) {
      clearInterval(chaosIntervalRef.current);
      chaosIntervalRef.current = null;
    }
    const textElements = document.querySelectorAll('[data-original]');
    textElements.forEach((element) => {
      element.textContent = element.getAttribute('data-original');
      element.removeAttribute('data-original');
    });
    setIsChaosModeActive(false);
  };

  const toggleChaosMode = () => {
    if (!isChaosModeActive) {
      applyChaosToDom();
      chaosIntervalRef.current = setInterval(applyChaosToDom, 100);
      setIsChaosModeActive(true);
    } else {
      restoreOriginalText();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (chaosIntervalRef.current) {
        clearInterval(chaosIntervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn('px-4 py-2 rounded-md mt-2')}
      onClick={toggleChaosMode}
    >
      <HackerBtn 
        label={isChaosModeActive ? 'What Did You Do?!?' : 'Destroy Page?'} 
        isActive={isChaosModeActive}
      />
    </div>
  )
}

export default TotalRecall