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
  Code2
} from "lucide-react";
import { useState } from "react";

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

  const migrationStrategy = {
    phases: [
      {
        phase: "Analysis",
        description: "Map dependencies and identify coupling points",
        tasks: ["Dependency graph creation", "Coupling analysis", "Risk assessment"],
        duration: "2 days"
      },
      {
        phase: "Extraction",
        description: "Extract features into vertical slices",
        tasks: ["Component extraction", "Hook creation", "Type definitions"],
        duration: "5 days"
      },
      {
        phase: "Integration",
        description: "Connect new architecture with existing code",
        tasks: ["Import path updates", "Testing", "Performance validation"],
        duration: "3 days"
      },
      {
        phase: "Optimization",
        description: "Fine-tune performance and bundle size",
        tasks: ["Code splitting", "Lazy loading", "Bundle analysis"],
        duration: "2 days"
      },
      {
        phase: "Documentation",
        description: "Document patterns and best practices",
        tasks: ["Architecture guide", "Component docs", "Migration guide"],
        duration: "2 days"
      }
    ]
  };

  const codePatterns = {
    before: {
      title: "Anti-Pattern: Mixed Concerns",
      code: `// ❌ Everything mixed together
function PropertyPage() {
  // Authentication logic
  const { getToken } = useAuth();
  const [token, setToken] = useState(null);
  
  // Data fetching logic
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  // UI state management
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Business logic
  const calculateRisk = (data) => {
    // Complex calculations mixed with component
  };
  
  useEffect(() => {
    // Everything happens here
    async function fetchEverything() {
      const token = await getToken();
      // Multiple API calls...
      // Error handling...
      // Data transformation...
    }
    fetchEverything();
  }, []);
  
  // Massive render with inline logic
  return (
    <div>
      {/* 1000+ lines of JSX */}
    </div>
  );
}`
    },
    after: {
      title: "Pattern: Clean Separation",
      code: `// ✅ Clean separation of concerns
// hooks/use-property-data.ts
function usePropertyData(id: string) {
  return useClerkSWR(\`/api/property/\${id}\`);
}

// hooks/use-property-ui.ts
function usePropertyUI() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return {
    activeTab,
    setActiveTab,
    isModalOpen,
    setIsModalOpen
  };
}

// utils/risk-calculations.ts
export function calculateRisk(data: PropertyData): RiskLevel {
  // Pure function for business logic
}

// components/PropertyPage.tsx
function PropertyPage({ id }: Props) {
  const propertyData = usePropertyData(id);
  const uiState = usePropertyUI();
  const riskLevel = calculateRisk(propertyData.data);
  
  return (
    <PropertyLayout>
      <PropertyTabs {...uiState} />
      <RiskDisplay level={riskLevel} />
    </PropertyLayout>
  );
}`
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
        {["architecture", "decisions", "patterns", "migration"].map((tab) => (
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

      {activeTab === "patterns" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Before Pattern */}
            <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-red-400" />
                  {codePatterns.before.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-white/10 overflow-auto max-h-[500px]">
                  <pre className="text-xs">
                    <code className="language-typescript text-white/80">
                      {codePatterns.before.code}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* After Pattern */}
            <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-cyan-500/5">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-400" />
                  {codePatterns.after.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-white/10 overflow-auto max-h-[500px]">
                  <pre className="text-xs">
                    <code className="language-typescript text-white/80">
                      {codePatterns.after.code}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {activeTab === "migration" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/2">
            <CardHeader>
              <CardTitle className="text-xl text-white">Migration Strategy Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 to-purple-500/20" />
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {migrationStrategy.phases.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex items-start gap-8"
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 flex items-center justify-center">
                        <span className="text-cyan-400 font-bold">{index + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-white/70 mb-4">{phase.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {phase.tasks.map((task) => (
                            <div key={task} className="flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-green-400" />
                              <span className="text-sm text-white/60">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default TechnicalDeepDive;