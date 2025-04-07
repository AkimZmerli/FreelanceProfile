"use client"
import { useState, useEffect, ReactNode } from 'react';
import { Button } from '../ui/button';

interface HackerBtnProps {
  label: string;
  children?: ReactNode;
  className?: string;
  isActive?: boolean;
}

const HackerBtn = ({ label, children, className, isActive = false }: HackerBtnProps) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz"

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button 
      size={'lg'} 
      className={`text-base px-4 py-6 ${
        isActive 
          ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-300/50' 
          : 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-purple-500/50'
      } transition-all duration-300`}
      onMouseEnter={startScrambling}
    >   
      {displayText}
    </Button>
  );
};

export default HackerBtn;