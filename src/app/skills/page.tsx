"use client"
import Heading from "@/features/about/components/Heading";
import { Badge } from "@/shared/components/ui/badge";
import { Lightbulb } from "lucide-react";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";

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
            <div className="p-4 bg-secondary/20 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Currently:</span> Frontend Engineer at r3leaf GmbH
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-sm:text-base">
              Every problem has a solution - I find the optimal path forward
            </p>
          </div>
        </FramerWrapper>

        {/* Problem-Solving Domains */}
        <FramerWrapper y={100} delay={0.2} className="block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Software Architecture */}
            <div className="space-y-4 p-6 border rounded-lg bg-secondary/10">
              <h3 className="text-xl font-semibold text-primary">Software Architecture</h3>
              <p className="text-muted-foreground leading-relaxed max-sm:text-sm">
                Legacy codebases choking your development velocity? I specialize in refactoring enterprise applications with modern architectural patterns.
              </p>
              <p className="text-primary font-medium max-sm:text-sm">
                Recently refactored an entire enterprise frontend using vertical slice architecture, dramatically improving maintainability and developer experience.
              </p>
            </div>

            {/* Custom Platform Solutions */}
            <div className="space-y-4 p-6 border rounded-lg bg-secondary/10">
              <h3 className="text-xl font-semibold text-primary">Custom Platform Solutions</h3>
              <p className="text-muted-foreground leading-relaxed max-sm:text-sm">
                Need something that doesn't exist in the market? I build bespoke platforms tailored to your exact requirements.
              </p>
              <p className="text-primary font-medium max-sm:text-sm">
                Created custom 3D flipbook components, cinematic portfolio experiences, and interactive web applications that stand out from the crowd.
              </p>
            </div>

            {/* AI Integration */}
            <div className="space-y-4 p-6 border rounded-lg bg-secondary/10">
              <h3 className="text-xl font-semibold text-primary">AI Integration</h3>
              <p className="text-muted-foreground leading-relaxed max-sm:text-sm">
                Looking to leverage AI in your applications? I integrate modern AI tools and APIs to enhance user experiences and automate workflows.
              </p>
              <p className="text-primary font-medium max-sm:text-sm">
                Implemented RAG capabilities, conversational chatbots, and AI-powered development workflows using cutting-edge tools like Claude Code.
              </p>
            </div>
          </div>
        </FramerWrapper>

        {/* Tech Stack Icons */}
        <FramerWrapper y={100} delay={0.4} className="block">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-primary max-sm:text-xl">Technologies I Use</h2>
            <p className="text-muted-foreground max-w-3xl max-sm:text-sm">
              I choose tools that solve real problems, not just trendy ones. Each technology in my stack serves a specific purpose in delivering quality solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/ts.png" alt="TypeScript" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">TypeScript</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/react.png" alt="React" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">React</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/nextjs.jpeg" alt="Next.js" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">Next.js</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/tailwindcss.png" alt="Tailwind" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">Tailwind</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/docker.png" alt="Docker" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">Docker</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/postgresql.png" alt="PostgreSQL" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">PostgreSQL</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/Git-Logo.png" alt="GitHub" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">GitHub</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 p-3 border rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <img src="/Anthropic.png" alt="Claude Code" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-muted-foreground">Claude Code</span>
              </div>
            </div>
          </div>
        </FramerWrapper>

        {/* Solution Methodology */}
        <FramerWrapper y={100} delay={0.6} className="block">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary max-sm:text-xl">My Approach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="text-center p-4 border rounded-lg bg-secondary/10">
                <div className="text-lg font-semibold text-primary max-sm:text-base">1. Analyze</div>
                <p className="text-sm text-muted-foreground max-sm:text-xs">Understand the root problem and requirements</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-secondary/10">
                <div className="text-lg font-semibold text-primary max-sm:text-base">2. Design</div>
                <p className="text-sm text-muted-foreground max-sm:text-xs">Plan the optimal solution architecture</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-secondary/10">
                <div className="text-lg font-semibold text-primary max-sm:text-base">3. Implement</div>
                <p className="text-sm text-muted-foreground max-sm:text-xs">Build with precision and best practices</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-secondary/10">
                <div className="text-lg font-semibold text-primary max-sm:text-base">4. Test & Feedback</div>
                <p className="text-sm text-muted-foreground max-sm:text-xs">Gather insights and iterate quickly</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-secondary/10">
                <div className="text-lg font-semibold text-primary max-sm:text-base">5. Optimize</div>
                <p className="text-sm text-muted-foreground max-sm:text-xs">Refine and improve continuously</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-primary font-medium max-sm:text-base">
                I don't just write code, I solve the underlying problem
              </p>
              <p className="text-sm text-muted-foreground mt-2 max-sm:text-xs">
                Continuous feedback loops ensure the solution evolves with your needs
              </p>
            </div>
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default SkillPage;