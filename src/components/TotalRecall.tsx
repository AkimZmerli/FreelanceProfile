"use client"
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function TotalRecall() {
  // Check if we're on the client side and get the initial theme
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Update the theme when component mounts and when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={cn('px-4 py-2 rounded-md mt-2')}
      onClick={toggleTheme}
    >
      <HackerBtn label={theme === 'dark' ? 'What did you do?!' : 'Destroy Page?'} />
    </div>
  )
}

export default TotalRecall
