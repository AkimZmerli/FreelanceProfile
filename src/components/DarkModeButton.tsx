"use client"

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

const DarkModeButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState('dark'); // Set dark as default

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Use dark as default
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-100" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeButton;



// import { cn } from '@/lib/utils'
// import { Download } from 'lucide-react'
// import Link from 'next/link'
// import React, { useState } from 'react';
// import { buttonVariants } from './ui/button'
// import HackerBtn from './animation/HackerBtn'

// function DarkModeButton() {

//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleToggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle('dark');
//   };
//   return (
   

//     <button
//       className={cn('px-4 py-2 rounded-md  mt-2', {
//         'bg-gray-800 text-white': isDarkMode,
//         'bg-white text-gray-800': !isDarkMode,
//       })}
//       onClick={handleToggleDarkMode}
//     >
// <HackerBtn label={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
  
// </HackerBtn>
//     </button>


//   )
// }

// export default DarkModeButton
