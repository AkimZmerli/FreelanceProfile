import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  value: ProjectData;
  num: number;
}

type TagCategory = 'framework' | 'language' | 'library' | 'tool' | 'concept';

interface TagConfig {
  category: TagCategory;
  className: string;
}

const tagConfigs: Record<string, TagConfig> = {
  'Immersive UX': { category: 'concept', className: 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-500/20 dark:text-purple-100 dark:border-purple-400/30' },
  '3D Gallery': { category: 'concept', className: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-100 dark:border-indigo-400/30' },
  'Video Streaming': { category: 'concept', className: 'bg-red-100 text-red-800 border-red-300 dark:bg-red-500/20 dark:text-red-100 dark:border-red-400/30' },
  'Architecture Performance': { category: 'concept', className: 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-500/20 dark:text-orange-100 dark:border-orange-400/30' },
  'UX Improvements': { category: 'concept', className: 'bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-500/20 dark:text-pink-100 dark:border-pink-400/30' },
  'Code Refactoring': { category: 'concept', className: 'bg-green-100 text-green-800 border-green-300 dark:bg-green-500/20 dark:text-green-100 dark:border-green-400/30' },
  'Framework Agnostic': { category: 'concept', className: 'bg-violet-100 text-violet-800 border-violet-300 dark:bg-violet-500/20 dark:text-violet-100 dark:border-violet-400/30' },
  'No Vendor Lock-in': { category: 'concept', className: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-100 dark:border-emerald-400/30' },
  'Modern Architecture': { category: 'concept', className: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-500/20 dark:text-blue-100 dark:border-blue-400/30' },
};

const getTagStyle = (tag: string): string => {
  return tagConfigs[tag]?.className || 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-500/20 dark:text-gray-100 dark:border-gray-400/30';
};
const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper 
      className="w-full h-full" 
      y={0} 
      scale={0.9} 
      delay={num * 0.15} 
      duration={0.6}
    >
      <Card className="group relative w-full h-full min-h-[280px] sm:min-h-[290px] md:min-h-[300px] lg:min-h-[310px] xl:min-h-[320px] max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] mx-auto flex flex-col overflow-hidden border-0 bg-gradient-to-br from-glass-card to-glass-card-secondary backdrop-blur-md hover:from-glass-card-hover hover:to-glass-card-hover-secondary transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
        {/* Glassmorphism border */}
        <div className="absolute inset-0 rounded-lg border border-glass-border group-hover:border-glass-border-hover transition-colors duration-300" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="relative z-10 pb-3">
          <CardTitle className="text-xl font-semibold text-primary dark:text-white/90 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 leading-tight">
            {value.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex-1 flex flex-col space-y-3 pb-4">
          <p className="text-sm leading-relaxed text-primary/80 dark:text-white/70 group-hover:text-primary dark:group-hover:text-white/80 transition-colors duration-300 font-light">
            {value.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2 mt-auto min-h-[2.5rem] items-start justify-center">
            {value.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className={cn(
                  "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 whitespace-nowrap",
                  getTagStyle(tag)
                )}
                role="badge"
                aria-label={`Technology: ${tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 pt-2 pb-4">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-primary dark:text-white/90 bg-primary/10 dark:bg-white/10 backdrop-blur-sm border border-primary/20 dark:border-white/20 rounded-lg hover:bg-primary/20 dark:hover:bg-white/20 hover:border-primary/30 dark:hover:border-white/30 hover:text-primary dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
            aria-label={`Visit ${value.title} project`}
          >
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" />
            Visit Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
