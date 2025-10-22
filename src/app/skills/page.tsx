"use client"
import React, { useState, useEffect, useRef, useMemo } from "react";
import Heading from "@/features/about/components/Heading";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Lightbulb } from "lucide-react";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Image from "next/image";

const SkillPage = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tooltip, setTooltip] = useState<{ content: string; x: number; y: number } | null>(null);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.5); // pixels per frame
  const lastTimeRef = useRef(0);

  const logos = useMemo(() => [
    { src: "/ts.png", alt: "TypeScript", width: 68, height: 48, description: "TypeScript: Adds static typing to JavaScript, catching errors at compile time for scalable applications" },
    { src: "/react.png", alt: "React", width: 68, height: 48, description: "React: Component-based UI library with excellent performance and developer experience" },
    { src: "/nextjs.jpeg", alt: "Next.js", width: 68, height: 48, description: "Next.js: Full-stack React framework with SSR, routing, and optimization out of the box" },
    { src: "/tailwindcss.png", alt: "Tailwind CSS", width: 88, height: 48, description: "Tailwind CSS: Utility-first CSS framework for rapid UI development without custom CSS" },
    { src: "/docker.png", alt: "Docker", width: 68, height: 48, description: "Docker: Containerization platform ensuring consistent environments across development and production" },
    { src: "/postgress.png", alt: "PostgreSQL", width: 68, height: 48, description: "PostgreSQL: Robust relational database with excellent performance and ACID compliance" },
    { src: "/Git-Logo.png", alt: "Git", width: 158, height: 48, description: "Git: Industry-standard version control for tracking changes and collaboration" },
    { src: "/Anthropic.png", alt: "Claude Code", width: 68, height: 48, description: "Claude Code: AI-powered development tool that accelerates coding and problem-solving" },
    { src: "/figma.png", alt: "Figma", width: 68, height: 48, description: "Figma: Design tool for creating prototypes and collaborating with design teams" },
    { src: "/payload.png", alt: "Payload CMS", width: 68, height: 48, description: "Payload CMS: Modern headless solution providing flexible content management without frontend constraints" },
  ], []);

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!isPaused && containerRef.current) {
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = currentTime;
        }
        
        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;
        
        setTranslateX(prev => {
          const newTranslateX = prev - speedRef.current * (deltaTime / 16.67); // normalize to 60fps
          
          // Calculate the width of one complete set (logos + gaps)
          const logoWidth = logos.reduce((sum, logo) => sum + logo.width, 0);
          const gaps = (logos.length - 1) * 48; // 12 * 4 = 48px total gap (gap-12 = 3rem = 48px)
          const totalWidth = logoWidth + gaps;
          
          // Reset position when one complete set has passed
          if (Math.abs(newTranslateX) >= totalWidth) {
            return 0;
          }
          
          return newTranslateX;
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, logos]);

  const handleContainerMouseEnter = () => {
    setIsPaused(true);
  };

  const handleContainerMouseLeave = () => {
    setIsPaused(false);
    setTooltip(null);
    lastTimeRef.current = 0; // reset timing
  };

  const handleLogoMouseEnter = (event: React.MouseEvent, description: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      content: description,
      x: rect.left + rect.width / 2,
      y: rect.top - 60
    });
  };

  const handleLogoMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-10 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-6" />
        Problem Solver
      </Badge>
      
      <div className="flex flex-col gap-8">
        <Heading>Problem Solver</Heading>
        
        <FramerWrapper y={0} x={200} className="block">
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-2xl text-primary max-sm:text-base max-md:text-xl">
              Software architecture • AI integration • Custom platforms 
            </p>
          </div>
        </FramerWrapper>

        {/* Problem-Solving Domains */}
        <FramerWrapper y={100} delay={0.2} className="block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-8 w-full">
            
            {/* Software Architecture */}
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle className="text-lg">Software Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary leading-relaxed max-sm:text-sm">
                  Legacy codebases choking your development velocity? I specialize in refactoring enterprise applications with modern architectural patterns.
                </p>
              </CardContent>
            </Card>

            {/* AI Integration */}
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle className="text-lg">AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary leading-relaxed max-sm:text-sm">
                  Looking to leverage AI in your applications? I integrate modern AI tools with RAG models and other SDKs to enhance user experiences and automate workflows.
                </p>
              </CardContent>
            </Card>

            {/* Custom Platform Solutions */}
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle className="text-lg">Custom Platform Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary leading-relaxed max-sm:text-sm">
                  Need something that doesn&apos;t exist in the market? I build bespoke platforms tailored to your exact requirements.
                </p>
              </CardContent>
            </Card>

          </div>
        </FramerWrapper>

        {/* Tech Stack Icons */}
        <FramerWrapper y={100} delay={0.4} className="block">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-primary max-sm:text-xl mt-6">Technologies I Use</h2>
            <p className="text-primary max-w-3xl mb-6 max-sm:text-sm">
              I work with cutting-edge technologies to ensure high performance, scalability, and seamless integration. 
            </p>
            
            <div className="mt-6‚ py-10">
              <div 
                ref={containerRef}
                className="overflow-hidden relative"
                onMouseEnter={handleContainerMouseEnter}
                onMouseLeave={handleContainerMouseLeave}
              >
                <div 
                  className="flex gap-12 will-change-transform"
                  style={{ 
                    transform: `translateX(${translateX}px)`,
                    transition: isPaused ? 'filter 0.4s ease-out, opacity 0.3s ease-out' : 'none',
                    filter: isPaused ? 'brightness(1.1)' : 'none',
                    opacity: isPaused ? 0.9 : 1
                  }}
                >
                  {/* Render multiple sets for seamless loop */}
                  {[...Array(3)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
                      {logos.map((logo, logoIndex) => (
                        <Image
                          key={`${setIndex}-${logoIndex}`}
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height}
                          className="flex-shrink-0 hover:opacity-100 transition-opacity cursor-pointer"
                          onMouseEnter={(e) => handleLogoMouseEnter(e, logo.description)}
                          onMouseLeave={handleLogoMouseLeave}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </FramerWrapper>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm max-w-xs text-center shadow-lg">
            {tooltip.content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillPage;