"use client"

import { animate, createScope, Scope as AnimeScope, createSpring } from 'animeJS';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { MyComponentProps } from './SkillsFooter';

interface AnimationConfig {
    scale: number;
    duration?: number;
    delay?: number;
}

const AnimatedSkills: React.FC<MyComponentProps & { animationConfig?: AnimationConfig }> = ({ 
    items, 
    animationConfig = {
        scale: 1.25,
        duration: 200,
        delay: 250
    }
}) => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<AnimeScope | null>(null);

    useEffect(() => {
        if (!root.current) return;

        const scopeInstance = createScope({ root: root.current });
        scope.current = scopeInstance;

        scopeInstance.add(() => {
            animate('.skill-item', {
                scale: [
                    { to: animationConfig.scale, ease: 'inOut(3)', duration: animationConfig.duration || 200 },
                    { to: 1, ease: createSpring({ stiffness: 300 })}
                ],
                loop: true,
                delay: (el, i) => i * 100
            });
        });

        return () => {
            if (scope.current) {
                scope.current.revert();
            }
        };
    }, [animationConfig]);

    return (
        <>       <div ref={root} className="w-full flex justify-between gap-4">
            {items && items.map((val, indx) => (
                <div 
                    className="p-8 flex items-center justify-center" 
                    key={indx}
                >
                    <a 
                        href={val.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="skill-item block "
                    >
                        <Image 
                            src={val.img} 
                            alt={val.alt} 
                            className="rounded-full object-contain"
                            width={120}
                            height={120}
                        />
                    </a>
                </div>
            ))}
        </div>
        </>
 
    );
};

export default AnimatedSkills;