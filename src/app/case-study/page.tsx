"use client"
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Heading from "@/features/about/components/Heading";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Play, GitBranch, FileCode, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudyPage = () => {
  const stats = [
    { label: "Files Changed", value: "208", icon: FileCode },
    { label: "Lines Added", value: "7,700+", icon: TrendingUp },
    { label: "Lines Removed", value: "4,803", icon: GitBranch },
    { label: "Performance Gain", value: "70%", icon: Zap },
  ];

  const architectureFeatures = [
    {
      title: "Vertical Slice Architecture",
      description: "Transformed monolithic structure into feature-based vertical slices",
      impact: "90% faster bug location",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Component Optimization", 
      description: "Eliminated unnecessary re-renders through strategic component design",
      impact: "70% reduction in re-renders",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Developer Experience",
      description: "Improved team velocity with better code organization and tooling",
      impact: "50% faster feature development",
      color: "from-emerald-500/20 to-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-8 overflow-hidden">
      {/* Header */}
      <Badge className="gap-2">
        <GitBranch className="h-5 w-5" />
        Case Study
      </Badge>

      <div className="flex flex-col gap-4">
        <Heading>Frontend Architecture Refactoring</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary/80 max-sm:text-base max-w-3xl">
            How I transformed an enterprise monolithic codebase into a scalable vertical slice architecture, 
            improving performance by 70% and developer velocity by 50%.
          </p>
        </FramerWrapper>
      </div>

      {/* Hero Video Section */}
      <FramerWrapper className="w-full" y={0} scale={0.95} delay={0.2}>
        <Card className="group relative w-full overflow-hidden border-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md">
          <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
          
          {/* Floating Stats */}
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-1 text-white/90">
                  <stat.icon className="h-3 w-3" />
                  <span className="font-semibold">{stat.value}</span>
                </div>
                <div className="text-white/60 text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <CardContent className="relative p-8">
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden group/video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 group-hover/video:shadow-2xl group-hover/video:shadow-cyan-500/20"
                >
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </motion.button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Architecture Transformation Demo</h3>
                <p className="text-sm text-white/80">From monolith to vertical slices • 5:42</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FramerWrapper>

      {/* Interactive Architecture Cards */}
      <FramerWrapper className="w-full" y={0} delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {architectureFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.6 }}
            >
              <Card className="group relative h-full overflow-hidden border-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md hover:from-white/10 hover:to-white/5 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg text-white/90 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">{feature.impact}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </FramerWrapper>

      {/* Technical Specifications Section */}
      <FramerWrapper className="w-full" y={0} delay={0.8}>
        <Card className="w-full border-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md">
          <div className="absolute inset-0 rounded-lg border border-white/10" />
          
          <CardHeader>
            <CardTitle className="text-2xl text-white/90 flex items-center gap-3">
              <FileCode className="h-6 w-6 text-cyan-400" />
              Technical Deep Dive
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Architecture Transformation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-purple-400" />
                Architecture Transformation
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-white/80">Before: Monolithic Structure</h4>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 font-mono text-sm text-white/70">
                    <div>📁 src/</div>
                    <div className="ml-4">📁 components/ (mixed concerns)</div>
                    <div className="ml-4">📁 utils/ (scattered logic)</div>
                    <div className="ml-4">📁 styles/ (global overrides)</div>
                    <div className="ml-4">📄 App.tsx (massive file)</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-white/80">After: Vertical Slice Architecture</h4>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 font-mono text-sm text-white/70">
                    <div>📁 src/features/</div>
                    <div className="ml-4">📁 buildings/ (complete feature)</div>
                    <div className="ml-4">📁 chat/ (isolated module)</div>
                    <div className="ml-4">📁 property/ (self-contained)</div>
                    <div className="ml-4">📁 shared/ (common utilities)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Performance Impact
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: "Bundle Size", before: "2.1MB", after: "1.3MB", improvement: "38%" },
                  { metric: "First Load", before: "3.2s", after: "1.8s", improvement: "44%" },
                  { metric: "Re-renders", before: "847/page", after: "254/page", improvement: "70%" },
                  { metric: "Dev Build", before: "45s", after: "18s", improvement: "60%" }
                ].map((metric) => (
                  <div key={metric.metric} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xs text-white/60 mb-1">{metric.metric}</div>
                    <div className="text-lg font-semibold text-green-400">-{metric.improvement}</div>
                    <div className="text-xs text-white/50">{metric.before} → {metric.after}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                Implementation Strategy
              </h3>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-white/5 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white/90 mb-2">Phase 1: Feature Extraction</h4>
                    <p className="text-white/70 text-sm">
                      Identified cohesive feature boundaries and extracted them into self-contained modules.
                      Each feature includes its own components, hooks, services, and types.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white/90 mb-2">Phase 2: Dependency Optimization</h4>
                    <p className="text-white/70 text-sm">
                      Eliminated circular dependencies and reduced inter-feature coupling through shared abstractions
                      and well-defined interfaces.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white/90 mb-2">Phase 3: Performance Tuning</h4>
                    <p className="text-white/70 text-sm">
                      Implemented lazy loading, code splitting, and optimized rendering patterns.
                      Reduced bundle size through tree shaking and dynamic imports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center pt-6">
              <motion.a
                href="https://www.webdev4life.com/case-study"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-white/90 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <span className="font-medium">View Full Case Study</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </CardContent>
        </Card>
      </FramerWrapper>
    </div>
  );
};

export default CaseStudyPage;