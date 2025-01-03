"use client"
import { useState, useEffect, ReactNode } from 'react';
import { Download, Link } from 'lucide-react';
import { Button } from '../ui/button';

interface HackerBtnProps {
  label: string;
  children?: ReactNode;
  className?: string;
}

const HackerBtn = ({ label, children, className }: HackerBtnProps) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

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
    <Button size={'lg'} className='text-base px-4 py-6'       onMouseEnter={startScrambling}
    >   
      {/* <Download className="mx-1" /> */}
  
        {displayText}
    </Button>
  );
};

export default HackerBtn;


