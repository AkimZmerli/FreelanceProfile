import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: num * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -5 }}
      className="w-full h-full"
    >
      <Card className="group relative w-full h-full min-h-[320px] flex flex-col overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md hover:from-white/8 hover:to-white/4 transition-all duration-500">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
        
        <CardHeader className="relative z-10 pb-4">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {value.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex-1 flex flex-col space-y-4 px-6">
          <p className="text-base leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
            {value.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {value.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 pt-4 pb-6 px-6">
          <Link
            href={value.link}
            target={value.link.startsWith('/') ? '_self' : '_blank'}
            rel={value.link.startsWith('/') ? undefined : "noopener noreferrer"}
            className="group/link w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm"
            aria-label={`Visit ${value.title} project`}
          >
            <Sparkles className="h-4 w-4 transition-all duration-300 group-hover/link:rotate-12" />
            <span className="font-semibold">Explore Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCards;
