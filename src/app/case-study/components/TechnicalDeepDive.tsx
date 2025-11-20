"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { 
  Layers, 
  Database, 
  Component,
  GitMerge,
  Shield,
  Cpu,
  FileText,
  ArrowRight,
  CheckCircle,
  Code2,
  Copy
} from "lucide-react";
import { useState } from "react";
import BeforeCodeExample from "./BeforeCodeExample";
import AfterCodeExample from "./AfterCodeExample";

const TechnicalDeepDive = () => {
  const [activeTab, setActiveTab] = useState("architecture");

  const architectureLayers = [
    {
      layer: "Feature Layer",
      icon: Component,
      description: "Self-contained feature modules with complete vertical slices",
      components: [
        "Feature-specific components",
        "Domain-specific hooks",
        "Local state management",
        "Feature types & interfaces"
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      layer: "Data Layer",
      icon: Database,
      description: "Centralized data fetching and caching strategies",
      components: [
        "Custom hooks for data fetching",
        "SWR for caching & revalidation",
        "Clerk authentication integration",
        "API endpoint abstraction"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      layer: "Shared Layer",
      icon: GitMerge,
      description: "Reusable components and utilities across features",
      components: [
        "UI component library",
        "Common utilities",
        "Shared TypeScript types",
        "Global configuration"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const technicalDecisions = [
    {
      decision: "TypeScript Strict Mode",
      rationale: "Catch errors at compile time, improve IDE support, and ensure type safety",
      impact: "94% type coverage, eliminated runtime type errors",
      icon: Shield
    },
    {
      decision: "SWR for Data Fetching",
      rationale: "Built-in caching, revalidation, and optimistic updates",
      impact: "70% reduction in API calls, instant UI updates",
      icon: Cpu
    },
    {
      decision: "Feature-First Organization",
      rationale: "Collocate related code, enable independent development",
      impact: "50% faster feature development, clear ownership",
      icon: Layers
    },
    {
      decision: "Custom Hook Patterns",
      rationale: "Encapsulate business logic, improve testability",
      impact: "87% component reusability, simplified testing",
      icon: Code2
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
          <Cpu className="h-4 w-4" />
          Technical Deep Dive
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Architecture Implementation Details
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          In-depth look at the technical decisions, patterns, and strategies used in the refactoring
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-2 flex-wrap">
        {["architecture", "decisions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-medium transition-all capitalize ${
              activeTab === tab
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "architecture" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/2">
            <CardHeader>
              <CardTitle className="text-xl text-white">Three-Layer Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {architectureLayers.map((layer, index) => (
                  <motion.div
                    key={layer.layer}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-lg bg-gradient-to-br ${layer.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <layer.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{layer.layer}</h3>
                        <p className="text-white/70 mb-4">{layer.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {layer.components.map((component) => (
                            <div key={component} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span className="text-sm text-white/80">{component}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Before & After: Real Code Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before Example */}
              <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/2">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-white/60" />
                      Before: Monolithic Property Page
                    </div>
                    <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-colors">
                      <Copy className="h-4 w-4 text-white/60" />
                    </button>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30 text-red-400">Auth Logic</Badge>
                    <Badge variant="outline" className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-400">Data Fetching</Badge>
                    <Badge variant="outline" className="text-xs bg-orange-500/10 border-orange-500/30 text-orange-400">Error Handling</Badge>
                    <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-400">Rendering Logic</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <BeforeCodeExample />
                </CardContent>
              </Card>

              {/* After Example */}
              <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/2">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-white/60" />
                      After: Clean Orchestration
                    </div>
                    <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded transition-colors">
                      <Copy className="h-4 w-4 text-white/60" />
                    </button>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="text-xs bg-cyan-500/10 border-cyan-500/30 text-cyan-400">Data Layer</Badge>
                    <Badge variant="outline" className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-400">UI Layer</Badge>
                    <Badge variant="outline" className="text-xs bg-yellow-500/10 border-yellow-500/30 text-yellow-400">Business Logic</Badge>
                    <Badge variant="outline" className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-400">Component</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <AfterCodeExample />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      )}

      {activeTab === "decisions" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalDecisions.map((decision, index) => (
              <motion.div
                key={decision.decision}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-white/10 bg-gradient-to-br from-white/5 to-white/2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/20 rounded-lg">
                        <decision.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {decision.decision}
                        </h3>
                        <p className="text-sm text-white/70 mb-3">
                          {decision.rationale}
                        </p>
                        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                          <span className="text-xs text-green-400 font-medium">Impact: </span>
                          <span className="text-xs text-white/80">{decision.impact}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default TechnicalDeepDive;