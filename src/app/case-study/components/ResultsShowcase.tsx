"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  Code2,
  TestTube,
  Zap,
  Trophy,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { useAnimatedCounters } from "../hooks/useAnimatedCounters";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ResultsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const performanceMetrics = [
    {
      category: "Load Time",
      icon: Clock,
      metrics: [
        { metric: "First Contentful Paint", before: "2.3s", after: "1.2s", change: "-1.1s", improvement: 48 },
        { metric: "Time to Interactive", before: "3.8s", after: "2.1s", change: "-1.7s", improvement: 45 },
        { metric: "Largest Contentful Paint", before: "4.2s", after: "2.5s", change: "-1.7s", improvement: 40 },
        { metric: "Total Blocking Time", before: "890ms", after: "320ms", change: "-570ms", improvement: 64 }
      ]
    }
  ];

  const codeQualityMetrics = [
    { label: "Component Reusability", value: 87, unit: "%", change: "+52%", icon: Code2 },
    { label: "Test Coverage", value: 85, unit: "%", change: "+85%", icon: TestTube },
    { label: "Type Safety", value: 94, unit: "%", change: "+31%", icon: Zap },
    { label: "Code Duplication", value: 3, unit: "%", change: "-89%", icon: TrendingUp }
  ];

  const developerMetrics = [
    {
      metric: "Feature Development",
      before: "3-5 days",
      after: "1-2 days",
      improvement: "60% faster",
      icon: "⚡"
    },
    {
      metric: "Bug Resolution",
      before: "4-6 hours",
      after: "30-60 min",
      improvement: "85% faster",
      icon: "🐛"
    },
    {
      metric: "Code Reviews",
      before: "2-3 hours",
      after: "45 min",
      improvement: "70% faster",
      icon: "👀"
    },
    {
      metric: "Onboarding Time",
      before: "2 weeks",
      after: "3 days",
      improvement: "75% faster",
      icon: "🚀"
    }
  ];


  const animatedMetrics = useAnimatedCounters([
    { value: 87, duration: 2000, delay: 0, suffix: "%" },
    { value: 85, duration: 2000, delay: 200, suffix: "%" },
    { value: 94, duration: 2000, delay: 400, suffix: "%" },
    { value: 3, duration: 2000, delay: 600, suffix: "%" }
  ], isInView);

  return (
    <div ref={ref} className="w-full space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Badge className="gap-2">
          <Trophy className="h-4 w-4" />
          Results & Impact
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Measurable Outcomes
        </h2>
        <p className="text-lg text-white/85 max-w-3xl mx-auto">
          Quantifiable improvements in performance, code quality, and developer experience
        </p>
      </motion.div>

      {/* Impact Metrics */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2">
          <CardHeader>
            <CardTitle className="text-xl text-white">Impact Metrics</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Lines of Code", before: "2000+", after: "185", improvement: "91%" },
                { label: "Complexity", before: "High", after: "Low", improvement: "Simplified" },
                { label: "Test Coverage", before: "0%", after: "87%", improvement: "+87%" },
                { label: "Bundle Size", before: "727 KB", after: "489 KB", improvement: "-33%" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-lg"
                >
                  <div className="text-xs text-white/60 mb-2">{metric.label}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-red-400 font-mono text-sm">{metric.before}</span>
                    <span className="text-white/40">→</span>
                    <span className="text-green-400 font-mono text-sm">{metric.after}</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    {metric.improvement}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 gap-6">
        {performanceMetrics.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
          >
            <Card className="h-full relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-cyan-400" />
                  {category.category} Optimization
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  {category.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white/90">
                          {'route' in metric ? metric.route : metric.metric}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-white/50">{metric.before}</span>
                          <span className="text-white/30">→</span>
                          <span className="text-xs text-white/70">{metric.after}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-1 text-sm font-semibold ${
                          metric.improvement > 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.improvement > 0 ? (
                            <ArrowDown className="h-3 w-3" />
                          ) : (
                            <ArrowUp className="h-3 w-3" />
                          )}
                          {Math.abs(metric.improvement)}%
                        </div>
                        <div className="text-xs text-white/50">{metric.change}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>


      {/* Developer Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-400" />
              Developer Experience Enhancement
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {developerMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <h4 className="text-sm font-semibold text-white/90 mb-2">{metric.metric}</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-white/50">Before:</span>
                      <span className="text-red-400">{metric.before}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50">After:</span>
                      <span className="text-green-400">{metric.after}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Badge className="w-full justify-center bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      {metric.improvement}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>


      {/* Key Achievement Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6 }}
      >
        <Card className="relative overflow-hidden border-green-500/20 bg-gradient-to-br from-green-500/10 to-cyan-500/10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-cyan-500/20" />
          
          <CardContent className="p-8 relative z-10 text-center">
            <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Mission Accomplished</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Successfully transformed a prototype codebase into a{" "}
              <span className="text-green-400 font-semibold">production-ready architecture</span> that supports{" "}
              <span className="text-cyan-400 font-semibold">rapid feature development</span> while maintaining{" "}
              <span className="text-purple-400 font-semibold">code quality and performance standards</span>.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResultsShowcase;