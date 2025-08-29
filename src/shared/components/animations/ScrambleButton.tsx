"use client"
import { cn } from '@/shared/lib/utils'
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/shared/components/ui/button';

interface ScrambleButtonProps {
    text: string;
    toggledText?: string; // Add optional toggled text
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
}

const ScrambleButton: React.FC<ScrambleButtonProps> = ({ 
    text,
    toggledText = text, // Default to main text if no toggled text provided
    onClick,
    className,
    disabled = false,
    isActive = false
}) =>  {
    const [isScrambling, setIsScrambling] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const charset = "abcdefghijklmnopqrstuvwxyz";
    const originalText = useRef(text);
    const [currentText, setCurrentText] = useState(text);

    const randomChars = (length: number) => {
        return Array.from(
            { length },
            () => charset[Math.floor(Math.random() * charset.length)]
        ).join("");
    };

    const scrambleText = async () => {
        if (!buttonRef.current || isScrambling) return;
        
        setIsScrambling(true);
        const text = originalText.current;
        let prefix = "";

        for (let index = 0; index < text.length; index++) {
            if (!buttonRef.current) break;
            await new Promise((resolve) => setTimeout(resolve, 40));
            prefix += text.charAt(index);
            buttonRef.current.textContent = prefix + randomChars(text.length - prefix.length);
        }

        setIsScrambling(false);
    };

    const handleClick = () => {
        if (!disabled && onClick) {
            setCurrentText(currentText === text ? toggledText : text);
            onClick();
        }
    };

    const handleMouseEnter = () => {
        if (!disabled) {
            scrambleText();
        }
    };


    return (
        <button
        ref={buttonRef}
        className={`text-base px-4 py-4 rounded-md shadow-lg ${
            isActive 
              ? 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:shadow-cyan-300/50' 
              : 'bg-pink-500 hover:bg-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/50'
          } transition-all duration-300`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        disabled={disabled || isScrambling}
    >
        {currentText}
    </button>
    );
};

export default ScrambleButton;