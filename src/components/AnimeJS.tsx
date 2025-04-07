"use client"

import { animate, createScope, createSpring, createDraggable, Scope as AnimeScope } from 'animeJS';
import { useEffect, useRef, useState } from 'react';
import react from '../../../public/react.png'
import Image from 'next/image';
import './animeJS.css'



function AnimateReact() {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<AnimeScope | null>(null);
    const [rotations, setRotations] = useState(0);

    useEffect(() => {
        if (!root.current) return;

        const scopeInstance = createScope({ root: root.current });
        scope.current = scopeInstance;

        scopeInstance.add((scope: AnimeScope) => {
            // Create Bounce animation
            animate('.react', {
                scale: [
                    { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    { to: 1, ease: createSpring({ stiffness: 300 })}
                ],
                loop: true,
                loopDelay: 250,
            });

            // Make the logo draggable
            createDraggable('.react', {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 200 })
            });

            // Add rotation method
            scope.add('rotateLogo', (i: number) => {
                animate('.react', {
                    rotate: i * 360,
                    ease: 'out(4)',
                    duration: 1500,
                });
            });
        });

        return () => {
            if (scope.current) {
                scope.current.revert();
            }
        };
    }, []);

    const handleClick = () => {
        const i = rotations + 1;
        setRotations(i);
        if (scope.current?.methods.rotateLogo) {
            scope.current.methods.rotateLogo(i);
        }
    };


    return (
        <div ref={root}>
            <div className='large centered row'>
                <Image
                src='/react.png'
                width={200}
                height={200}
                alt='animatedReactLogo' 
                className='react'/>
            </div>
            <div className='medium row'>
<fieldset className='controls'>
                <div onClick={handleClick}>rotations: {rotations}</div>
</fieldset>
            </div>
        </div>
    )
}

export default AnimateReact;