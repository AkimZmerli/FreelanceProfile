"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Heading from "@/shared/components/ui/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
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
    { src: "/python.png", alt: "Python", width: 68, height: 48, description: "Python: Versatile programming language perfect for automation, data analysis, and backend development" },
    { src: "/django.png", alt: "Django", width: 68, height: 48, description: "Django: High-level Python web framework that encourages rapid development and clean design" },
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
    <div className="h-full w-full relative flex flex-col items-start gap-10 overflow-hidden px-4 py-8 sm:px-6 md:px-8">
      
      <div className="flex flex-col gap-8">
        <Heading>Problem Solver</Heading>
        
        <FramerWrapper y={0} x={200} className="block">
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-2xl text-primary max-sm:text-base max-md:text-xl">
              Software architecture • AI integration • Custom platforms 
            </p>
          </div>
        </FramerWrapper>

      </div>

      {/* Problem-Solving Domains */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto justify-items-center">
            
        {/* Software Architecture */}
        <FramerWrapper className="w-full h-full" y={0} scale={0.9} delay={0 * 0.15} duration={0.6}>
          <Card className="group relative w-full h-48 max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] mx-auto flex flex-col overflow-hidden border-0 bg-gradient-to-br from-glass-card to-glass-card-secondary backdrop-blur-md hover:from-glass-card-hover hover:to-glass-card-hover-secondary transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
              {/* Glassmorphism border */}
              <div className="absolute inset-0 rounded-lg border border-glass-border group-hover:border-glass-border-hover transition-colors duration-300" />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10 pb-3">
                <CardTitle className="text-xl font-semibold text-primary dark:text-white/90 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 leading-tight">
                  Software Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-1">
                <p className="text-sm leading-relaxed text-primary/80 dark:text-white/70 group-hover:text-primary dark:group-hover:text-white/80 transition-colors duration-300 font-light">
                  Legacy codebases choking your development velocity? I specialize in refactoring enterprise applications with modern architectural patterns.
                </p>
              </CardContent>
            </Card>
        </FramerWrapper>

        {/* AI Integration */}
        <FramerWrapper className="w-full h-full" y={0} scale={0.9} delay={1 * 0.15} duration={0.6}>
          <Card className="group relative w-full h-48 max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] mx-auto flex flex-col overflow-hidden border-0 bg-gradient-to-br from-glass-card to-glass-card-secondary backdrop-blur-md hover:from-glass-card-hover hover:to-glass-card-hover-secondary transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
              {/* Glassmorphism border */}
              <div className="absolute inset-0 rounded-lg border border-glass-border group-hover:border-glass-border-hover transition-colors duration-300" />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10 pb-3">
                <CardTitle className="text-xl font-semibold text-primary dark:text-white/90 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 leading-tight">
                  AI Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-1">
                <p className="text-sm leading-relaxed text-primary/80 dark:text-white/70 group-hover:text-primary dark:group-hover:text-white/80 transition-colors duration-300 font-light">
                  Looking to leverage AI in your applications? I integrate modern AI tools with RAG models and other SDKs to enhance user experiences and automate workflows.
                </p>
              </CardContent>
            </Card>
        </FramerWrapper>

        {/* Custom Platform Solutions */}
        <FramerWrapper className="w-full h-full" y={0} scale={0.9} delay={2 * 0.15} duration={0.6}>
          <Card className="group relative w-full h-48 max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] mx-auto flex flex-col overflow-hidden border-0 bg-gradient-to-br from-glass-card to-glass-card-secondary backdrop-blur-md hover:from-glass-card-hover hover:to-glass-card-hover-secondary transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
              {/* Glassmorphism border */}
              <div className="absolute inset-0 rounded-lg border border-glass-border group-hover:border-glass-border-hover transition-colors duration-300" />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10 pb-3">
                <CardTitle className="text-xl font-semibold text-primary dark:text-white/90 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 leading-tight">
                  Custom Platform Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-1">
                <p className="text-sm leading-relaxed text-primary/80 dark:text-white/70 group-hover:text-primary dark:group-hover:text-white/80 transition-colors duration-300 font-light">
                  Need something that doesn&apos;t exist in the market? I build bespoke platforms tailored to your exact requirements.
                </p>
              </CardContent>
            </Card>
        </FramerWrapper>
      </div>

      {/* Tech Stack Icons */}
        <FramerWrapper y={100} delay={0.4} className="block">
          <div className="flex flex-col gap-3">
            <div className="w-full mx-auto px-0">
              <h2 className="text-2xl font-semibold text-primary max-sm:text-xl ">Technologies I Use</h2>
              <p className="text-primary max-w-4xl mb-1 max-sm:text-sm max-sm:mb-4 text-lg">
                I work with cutting-edge technologies to ensure high performance, scalability, and seamless integration. Each tool is carefully selected to solve specific challenges and deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="mt-10">
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