"use client"
import Heading from "@/features/about/components/Heading";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Lightbulb } from "lucide-react";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Image from "next/image";

const SkillPage = () => {
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
              Software architecture • Custom platforms • AI integration
            </p>
          </div>
        </FramerWrapper>

        {/* Problem-Solving Domains */}
        <FramerWrapper y={100} delay={0.2} className="block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 w-full">
            
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

            {/* AI Integration */}
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle className="text-lg">AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary leading-relaxed max-sm:text-sm">
                  Looking to leverage AI in your applications? I integrate modern AI tools and APIs to enhance user experiences and automate workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </FramerWrapper>

        {/* Tech Stack Icons */}
        <FramerWrapper y={100} delay={0.4} className="block">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-primary max-sm:text-xl">Technologies I Use</h2>
            <p className="text-primary max-w-3xl max-sm:text-sm">
              I work with cutting-edge technologies to ensure high performance, scalability, and seamless integration. 
            </p>
            
            <div className="mt-2 py-8">
              <div className="overflow-hidden relative">
                <div className="flex gap-12 animate-scroll">
                  {/* First set */}
                  <Image src="/ts.png" alt="TypeScript" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/react.png" alt="React" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/nextjs.jpeg" alt="Next.js" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/tailwindcss.png" alt="Tailwind CSS" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/docker.png" alt="Docker" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/postgress.png" alt="PostgreSQL" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/Git-Logo.png" alt="Git" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/Anthropic.png" alt="Claude Code" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/figma.png" alt="Figma" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/payload.png" alt="Payload CMS" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  
                  {/* Duplicate set for seamless loop */}
                  <Image src="/ts.png" alt="TypeScript" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/react.png" alt="React" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/nextjs.jpeg" alt="Next.js" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/tailwindcss.png" alt="Tailwind CSS" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/docker.png" alt="Docker" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/postgress.png" alt="PostgreSQL" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/Git-Logo.png" alt="Git" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/Anthropic.png" alt="Claude Code" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/figma.png" alt="Figma" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/payload.png" alt="Payload CMS" width={48} height={48} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .animate-scroll {
                animation: scroll 20s linear infinite;
              }
              
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default SkillPage;