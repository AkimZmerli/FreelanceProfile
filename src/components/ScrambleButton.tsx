"use client"
import { cn } from '@/lib/utils'
import React, { useState, useEffect, useRef } from 'react';

interface ScrambleButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const ScrambleButton: React.FC<ScrambleButtonProps> = ({ 
    text,
    onClick,
    className,
    disabled = false
}) => {
    const [isScrambling, setIsScrambling] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const charset = "abcdefghijklmnopqrstuvwxyz";
    const originalText = useRef(text);

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
            await new Promise((resolve) => setTimeout(resolve, 20));
            prefix += text.charAt(index);
            buttonRef.current.textContent = prefix + randomChars(text.length - prefix.length);
        }

        setIsScrambling(false);
    };

    const handleMouseEnter = () => {
        if (!disabled) {
            scrambleText();
        }
    };

    const handleMouseLeave = () => {
        if (buttonRef.current) {
            buttonRef.current.textContent = originalText.current;
        }
    };

    return (
        <button
            ref={buttonRef}
            className={cn(
                "text-lg px-4 py-4 bg-pink-500 active:bg-cyan-500 text-primary-foreground rounded-md hover:bg-pink-600 text-white shadow-lg hover:shadow-pink-500/50 transition-colors",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={disabled || isScrambling}
        >
            {text}
        </button>
    );
};

export default ScrambleButton;