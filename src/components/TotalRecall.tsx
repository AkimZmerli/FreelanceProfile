"use client"
import { cn } from '@/lib/utils'
import React, { useState, useEffect } from 'react';
import HackerBtn from './animation/HackerBtn'

function TotalRecall() {
  const [isChaosModeActive, setIsChaosModeActive] = useState(false);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scrambleText = async (element: Element) => {
    const originalText = element.textContent || '';
    if (!originalText.trim()) return;

    let prefix = "";
    for (let index = 0; index < originalText.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      prefix += originalText.charAt(index);
      element.textContent = prefix + randomChars(originalText.length - prefix.length);
    }
  };

  const startScrambling = () => {
    if (!isChaosModeActive) {
      setIsChaosModeActive(true);
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
      textElements.forEach((element) => {
        const text = element.textContent || '';
        if (text.trim()) {
          element.setAttribute('data-original', text);
          scrambleText(element);
        }
      });

      // Reset after all animations are done
      setTimeout(() => {
        setIsChaosModeActive(false);
      }, 300);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const textElements = document.querySelectorAll('[data-original]');
      textElements.forEach((element) => {
        element.textContent = element.getAttribute('data-original');
        element.removeAttribute('data-original');
      });
    };
  }, []);

  return (
    <div
      className="px-4 py-2 rounded-md mt-2"
      onClick={startScrambling}
    >
      <HackerBtn 
        label={isChaosModeActive ? 'What Did You Do?!?' : 'Destroy Page?'} 
        isActive={isChaosModeActive}
      />
    </div>
  )
}

export default TotalRecall