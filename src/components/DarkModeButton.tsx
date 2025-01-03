"use client"


import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

const DarkModeButton = () => {
  // Check if we're on the client side and get the initial theme
  const [theme, setTheme] = React.useState(() => {
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
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-200" />
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