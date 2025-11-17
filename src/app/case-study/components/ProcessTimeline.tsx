"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { 
  Search, 
  GitBranch, 
  Code2, 
  CheckCircle, 
  Repeat, 
  Rocket,
  Brain,
  Target,
  Zap
} from "lucide-react";
import { useState } from "react";

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Search,
      title: "Identify Coupling Issues",
      duration: "Day 1-2",
      description: "Analyzed 200+ files to identify architectural problems",
      tasks: [
        "Mapped component dependencies",
        "Identified circular references",
        "Documented pain points",
        "Prioritized refactoring candidates"
      ],
      metrics: {
        filesAnalyzed: 200,
        issuesFound: 47,
        criticalPaths: 12
      },
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: GitBranch,
      title: "Plan Vertical Slice",
      duration: "Day 3-4",
      description: "Designed new architecture and migration strategy",
      tasks: [
        "Define feature boundaries",
        "Create module structure",
        "Plan migration phases",
        "Design shared abstractions"
      ],
      metrics: {
        featuresIdentified: 8,
        modulesPlanned: 12,
        sharedComponents: 29
      },
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Code2,
      title: "Extract Components",
      duration: "Day 5-8",
      description: "Systematically refactored with AI assistance",
      tasks: [
        "Extract feature modules",
        "Create custom hooks",
        "Separate business logic",
        "Implement type safety"
      ],
      metrics: {
        componentsExtracted: 145,
        hooksCreated: 23,
        typesDefinitions: 18
      },
      color: "from-cyan-500/20 to-green-500/20"
    },
    {
      icon: CheckCircle,
      title: "Validate Functionality",
      duration: "Day 9-10",
      description: "Ensured no regressions in functionality",
      tasks: [
        "Run automated tests",
        "Manual QA testing",
        "Performance profiling",
        "Fix breaking changes"
      ],
      metrics: {
        testsRun: 156,
        bugFixed: 23,
        performanceGain: "70%"
      },
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Repeat,
      title: "Update Import Paths",
      duration: "Day 11-12",
      description: "Standardized imports and module resolution",
      tasks: [
        "Update import statements",
        "Configure path aliases",
        "Remove circular dependencies",
        "Optimize bundle imports"
      ],
      metrics: {
        importsUpdated: 489,
        circularDepsRemoved: 31,
        bundleSizeReduction: "238KB"
      },
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Rocket,
      title: "Final Integration",
      duration: "Day 13-14",
      description: "Merged changes and deployed to production",
      tasks: [
        "Final testing suite",
        "Performance benchmarks",
        "Documentation update",
        "Production deployment"
      ],
      metrics: {
        finalTests: 200,
        loadTimeImprovement: "44%",
        devVelocity: "+50%"
      },
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const aiTools = [
    {
      icon: Brain,
      tool: "Claude Code",
      role: "Architectural Analysis",
      impact: "Identified patterns and suggested refactoring strategies"
    },
    {
      icon: Target,
      tool: "Pattern Detection",
      role: "Coupling Analysis",
      impact: "Automatically found 47 coupling issues across codebase"
    },
    {
      icon: Zap,
      tool: "Code Generation",
      role: "Component Extraction",
      impact: "Generated boilerplate for 145 components"
    }
  ];

  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Badge className="gap-2">
          <Repeat className="h-4 w-4" />
          Development Process
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Two-Week Transformation Timeline
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Step-by-step journey from identifying problems to production deployment
        </p>
      </motion.div>

      {/* Interactive Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-green-500/20 hidden lg:block" />

        {/* Timeline Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActivePhase(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    activePhase === index
                      ? "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50"
                      : "bg-white/10 border-white/20 hover:border-white/40"
                  }`}
                >
                  <phase.icon className="h-4 w-4 text-white m-auto" />
                </motion.button>
              </div>

              {/* Phase Card */}
              <div className="lg:ml-20">
                <Card 
                  className={`group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 transition-all duration-300 cursor-pointer ${
                    activePhase === index ? "ring-2 ring-cyan-500/50" : ""
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Left side - Main Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <phase.icon className="h-6 w-6 text-cyan-400" />
                          <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                          <Badge className="ml-auto">{phase.duration}</Badge>
                        </div>
                        
                        <p className="text-white/70">{phase.description}</p>
                        
                        {/* Tasks List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <motion.div
                              key={taskIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: activePhase === index ? 1 : 0.7, x: 0 }}
                              transition={{ delay: taskIndex * 0.05 }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-xs text-white/60">{task}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Right side - Metrics */}
                      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
                        {Object.entries(phase.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-white/5 rounded-lg min-w-[80px]">
                            <div className="text-lg font-bold text-cyan-400">{value}</div>
                            <div className="text-xs text-white/50">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Assistance Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Card className="relative overflow-hidden border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
          
          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Development</h3>
              <p className="text-white/70">How Claude Code accelerated the refactoring process</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <tool.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{tool.tool}</h4>
                    <p className="text-sm text-purple-300">{tool.role}</p>
                  </div>
                  <p className="text-xs text-white/60">{tool.impact}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Duration", value: "14 days", icon: "📅" },
          { label: "Files Changed", value: "208", icon: "📁" },
          { label: "Performance Gain", value: "70%", icon: "⚡" },
          { label: "Team Velocity", value: "+50%", icon: "🚀" }
        ].map((stat) => (
          <Card key={stat.label} className="text-center p-6 bg-gradient-to-br from-white/5 to-white/2 border-white/10">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcessTimeline;