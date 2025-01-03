"use client"
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react';
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function TotalRecall() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };
  return (
   

    <div
      className={cn('px-4 py-2 rounded-md  mt-2', {
        '': isDarkMode,
        '': !isDarkMode,
      })}
      onClick={handleToggleDarkMode}
    >
<HackerBtn label={ isDarkMode ? 'What did you do?!': 'Destroy Page?'}>
  
</HackerBtn>
    </div>


  )
}

export default TotalRecall
