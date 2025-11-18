"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Lightbulb, Layers, FolderTree, Check, Sparkles } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { useState } from "react";

const SolutionOverview = () => {
  const [activeTab, setActiveTab] = useState<"traditional" | "vertical">("vertical");

  const architectureComparison = {
    traditional: {
      title: "Traditional Layered Architecture",
      description: "Organizes code by technical layer",
      icon: Layers,
      color: "from-red-500/20 to-orange-500/20",
      structure: [
        { name: "components/", items: ["All components mixed together"] },
        { name: "hooks/", items: ["All hooks in one place"] },
        { name: "utils/", items: ["All utilities scattered"] },
        { name: "types/", items: ["Global type definitions"] }
      ],
      problems: [
        "Hunt across 10+ folders for one feature",
        "Circular dependencies common",
        "Hard to identify feature boundaries",
        "Team conflicts over shared files"
      ]
    },
    vertical: {
      title: "Vertical Slice Architecture",
      description: "Organizes code by feature/domain",
      icon: FolderTree,
      color: "from-cyan-500/20 to-blue-500/20",
      structure: [
        { name: "portfolio/", items: ["components/", "hooks/", "types/", "utils/"] },
        { name: "property/", items: ["components/", "hooks/", "types/", "utils/"] },
        { name: "chat/", items: ["components/", "hooks/", "types/", "utils/"] },
        { name: "shared/", items: ["Common utilities only"] }
      ],
      benefits: [
        "Everything for one feature in one place",
        "Clear ownership and boundaries",
        "Easy to test and modify",
        "Teams can work independently"
      ]
    }
  };

 

  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Badge className="gap-2" variant="default">
          <Lightbulb className="h-4 w-4" />
          The Solution
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Vertical Slice Architecture
        </h2>
        <p className="text-lg text-white/85 max-w-3xl mx-auto">
          A fundamental shift from organizing code by technical layer to organizing by feature, 
          creating self-contained modules with clear boundaries
        </p>
      </motion.div>

      {/* Architecture Comparison */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl text-white">Architecture Approach</CardTitle>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("traditional")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "traditional"
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  Traditional
                </button>
                <button
                  onClick={() => setActiveTab("vertical")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "vertical"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  Vertical Slice
                </button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Structure Visualization */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {activeTab === "traditional" ? (
                    <Layers className="h-6 w-6 text-red-400" />
                  ) : (
                    <FolderTree className="h-6 w-6 text-cyan-400" />
                  )}
                  <h3 className="text-lg font-semibold text-white">
                    {architectureComparison[activeTab].title}
                  </h3>
                </div>
                
                <div className={`p-4 rounded-lg bg-gradient-to-br ${architectureComparison[activeTab].color}`}>
                  <div className="space-y-3 font-mono text-sm">
                    {architectureComparison[activeTab].structure.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-1"
                      >
                        <div className="text-white/90 flex items-center gap-2">
                          <span>📁</span> {item.name}
                        </div>
                        {item.items.map((subItem, subIndex) => (
                          <div key={subIndex} className="ml-6 text-white/60 text-xs">
                            {typeof subItem === 'string' && subItem.includes('/') ? '📁' : '📄'} {subItem}
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits/Problems */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {activeTab === "traditional" ? "Problems" : "Benefits"}
                </h3>
                
                <div className="space-y-3">
                  {(activeTab === "traditional" 
                    ? architectureComparison.traditional.problems 
                    : architectureComparison.vertical.benefits
                  ).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-1 ${
                        activeTab === "traditional" 
                          ? "text-red-400" 
                          : "text-green-400"
                      }`}>
                        {activeTab === "traditional" ? "✗" : <Check className="h-4 w-4" />}
                      </div>
                      <span className="text-sm text-white/80">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Analogy Card */}
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-white/90">Think of it like a library</p>
                      <p className="text-xs text-white/60">
                        {activeTab === "traditional" 
                          ? "Traditional: Books organized by size and color - looks neat but finding related topics requires searching multiple shelves."
                          : "Vertical Slice: Books organized by topic - everything about one subject is together, making research fast and intuitive."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* VSA Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Architecture Benefits
          </h3>
          <p className="text-white/85 max-w-2xl mx-auto">
            Key advantages that vertical slice architecture brings to development teams
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Feature Isolation",
              description: "Each feature is now completely self-contained with its own components, hooks, and utilities",
              impact: "Independent development and testing"
            },
            {
              title: "Scalable Foundation", 
              description: "New features follow established patterns, making the codebase predictable and maintainable",
              impact: "Consistent architecture across teams"
            },
            {
              title: "Modern Standards",
              description: "Full TypeScript coverage with strong typing, modern React patterns, and best practices",
              impact: "Future-proof technology stack"
            },
            {
              title: "AI-Ready Structure",
              description: "Well-organized code that AI tools can better understand and work with",
              impact: "Enhanced AI development capabilities"
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-white/70 mb-3">{benefit.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-medium">Impact:</span>
                    <span className="text-white/60">{benefit.impact}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionOverview;