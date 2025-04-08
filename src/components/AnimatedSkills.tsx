"use client"

import { animate, createScope, type Scope as AnimeScope, createSpring } from "animeJS"
import { useEffect, useRef, useState, forwardRef, useCallback } from "react"
import Image from "next/image"
import type { MyComponentProps } from "./SkillsFooter"

interface AnimationConfig {
  scale: number
  duration?: number
  delay?: number
}

export interface AnimatedSkillsRef {
  rotate: () => void
}

const AnimatedSkills = forwardRef<AnimatedSkillsRef, MyComponentProps & { animationConfig?: AnimationConfig }>(
    (props, ref) => {
      const { items, animationConfig = { scale: 1.25, duration: 200, delay: 250 } } = props
      const root = useRef<HTMLDivElement>(null)
      const scope = useRef<AnimeScope | null>(null)
      const [currentRotation, setCurrentRotation] = useState(0)
  
      const handleRotate = useCallback(() => {
        if (scope.current?.methods.rotateLogo) {
          const nextRotation = currentRotation + 360;
          setCurrentRotation(nextRotation);
          scope.current.methods.rotateLogo(nextRotation);
        }
      }, [scope, currentRotation]);

    // Expose the rotate method through ref
    useEffect(() => {
      if (!ref) return
      if (typeof ref === "object") {
        ref.current = {
          rotate: handleRotate,
        }
      }
    }, [ref, handleRotate])

    useEffect(() => {
      if (!root.current) return

      const scopeInstance = createScope({ root: root.current })
      scope.current = scopeInstance

      scopeInstance.add((scope: AnimeScope) => {
        animate(".skill-item", {
          scale: [
            { to: animationConfig.scale, ease: "inOut(3)", duration: animationConfig.duration || 200 },
            { to: 1, ease: createSpring({ stiffness: 300 }) },
          ],
          loop: true,
          delay: (el, i) => i * 100,
        })

        // Add rotation method to scope
        scope.add("rotateLogo", (degrees: number) => {
          animate(".skill-item", {
            rotate: degrees,
            ease: "out(4)",
            duration: 1500,
          })
        })
      })

      return () => {
        if (scope.current) {
          scope.current.revert()
        }
      }
    }, [animationConfig])

    return (
      <>
        <div ref={root} className="w-full flex justify-between gap-4">
          {items &&
            items.map((val, indx) => (
              <div className="p-8 flex items-center justify-center" key={indx} onClick={handleRotate}>
                <a href={val.link} target="_blank" rel="noopener noreferrer" className="skill-item block">
                  <Image
                    src={val.img || "/placeholder.svg"}
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
    )
  },
)

AnimatedSkills.displayName = "AnimatedSkills"

export default AnimatedSkills