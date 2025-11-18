"use client"
import { motion } from "framer-motion";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { GitBranch, FileCode, TrendingUp, Package, Play, Code2, Sparkles } from "lucide-react";
import { useAnimatedCounters } from "../hooks/useAnimatedCounters";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveDemo from "./InteractiveDemo";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metricsConfig = [
    { value: 208, duration: 1200, delay: 0, suffix: " files" },
    { value: 7700, duration: 1500, delay: 100, suffix: "+", prefix: "" },
    { value: 4800, duration: 1500, delay: 200, suffix: "+", prefix: "" },
    { value: 238, duration: 1200, delay: 300, suffix: " KB" },
  ];

  const animatedMetrics = useAnimatedCounters(metricsConfig, isInView);

  const metrics = [
    { 
      label: "Files Restructured", 
      value: animatedMetrics[0]?.displayValue || "0 files",
      icon: FileCode,
      description: "Complete vertical slice transformation",
      color: "text-cyan-400"
    },
    { 
      label: "Lines Added", 
      value: animatedMetrics[1]?.displayValue || "0+",
      icon: TrendingUp,
      description: "Clean, maintainable code",
      color: "text-green-400"
    },
    { 
      label: "Lines Removed", 
      value: animatedMetrics[2]?.displayValue || "0+",
      icon: GitBranch,
      description: "Technical debt eliminated",
      color: "text-purple-400"
    },
    { 
      label: "Bundle Reduction", 
      value: animatedMetrics[3]?.displayValue || "0 KB",
      icon: Package,
      description: "Portfolio page optimization",
      color: "text-yellow-400"
    },
  ];

  return (
    <div ref={ref} className="relative w-full">
      {/* Hero Header */}
      <div className="mb-8">
        <Badge className="gap-2 mb-6">
          <GitBranch className="h-4 w-4" />
          Frontend Architecture Case Study
        </Badge>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            From Prototype Debt to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Production-Ready Architecture
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            A comprehensive two-week refactoring initiative that transformed a scattered 
            prototype codebase using <span className="text-cyan-400 font-semibold">vertical slice architecture</span> and 
            <span className="text-purple-400 font-semibold"> AI-assisted development</span> with Claude Code.
          </p>
        </motion.div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md hover:from-white/10 hover:to-white/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <Sparkles className="h-4 w-4 text-white/30" />
                  </motion.div>
                </div>
                
                <div className="space-y-1">
                  <div className={`text-2xl md:text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-white/80">{metric.label}</div>
                  <div className="text-xs text-white/50">{metric.description}</div>
                </div>
                
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${
                      metric.color === 'text-cyan-400' ? 'from-cyan-400 to-cyan-500' :
                      metric.color === 'text-green-400' ? 'from-green-400 to-green-500' :
                      metric.color === 'text-purple-400' ? 'from-purple-400 to-purple-500' :
                      'from-yellow-400 to-yellow-500'
                    }`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(animatedMetrics[index]?.progress || 0) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Technical Debt Impact Text Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-8"
      >
        <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md">
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-white/80">
                When codebases lack consistent structure, technical debt compounds quickly: memory leaks, slow 
                load times, crashes. Developers spend days understanding the system. Simple fixes break unrelated 
                features. New functionality becomes a minefield. 
              </p>
              
              {/* Quote from known developer */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <blockquote className="text-center">
                  <p className="text-white/90 italic text-xl font-light mb-3">
                    Ready to see how one architecture decision 
                changed everything?
                  </p>
  
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <InteractiveDemo />
      </motion.div>
    </div>
  );
};

export default HeroSection;