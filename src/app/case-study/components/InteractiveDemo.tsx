"use client"
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Code2, 
  FileCode, 
  GitBranch,
  Package,
  Zap,
  CheckCircle
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";


interface DemoStep {
  title: string;
  description: string;
  codeSnippet?: string | React.ReactNode;
  metrics?: { label: string; value: string; change?: string }[];
  icon: React.ElementType;
  duration: number;
}

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const demoSteps = useMemo(() => [
    {
      title: "Initial State: Monolithic Chaos",
      description: "2,000+ lines of mixed concerns in a single file",
      codeSnippet: `// Initial state analysis
function PortfolioPage({ params }) {
  // Mixed concerns everywhere
  const auth = useAuth();
  const data = useState(null);
  // ... 2000+ lines of tangled code
}`,
      metrics: [
        { label: "Lines of Code", value: "2,147" },
        { label: "Complexity", value: "Very High" },
        { label: "Bundle Size", value: "727 KB" }
      ],
      icon: FileCode,
      duration: 6000
    },
    {
      title: "Step 1: Identify Coupling Points",
      description: "AI analyzes code to find 47 coupling issues",
      metrics: [
        { label: "Issues Found", value: "47" },
        { label: "Circular Deps", value: "31" },
        { label: "Mixed Concerns", value: "16" }
      ],
      icon: GitBranch,
      duration: 5500
    },
    {
      title: "Step 2: Extract Feature Modules",
      description: "Create vertical slices for each feature domain",
      codeSnippet: `// portfolio/[id]/
├── components/
│   ├── PortfolioHeader.tsx
│   └── MetricsDisplay.tsx
├── hooks/
│   └── use-portfolio-data.ts
└── types/
    └── portfolio.types.ts`,
      icon: Package,
      duration: 6000
    },
    {
      title: "Step 3: Implement Clean Separation",
      description: "Separate data fetching from presentation logic",
      codeSnippet: `// Clean orchestration
const portfolioData = usePortfolioData(id);
const uiState = usePortfolioUI();

return (
  <PortfolioLayout>
    <PortfolioHeader {...portfolioData} />
    <MetricsDisplay {...uiState} />
  </PortfolioLayout>
);`,
      icon: Code2,
      duration: 6000
    },
    {
      title: "Step 4: Optimize & Test",
      description: "Performance improvements and comprehensive testing",
      metrics: [
        { label: "Bundle Size", value: "489 KB", change: "-33%" },
        { label: "Load Time", value: "1.2s", change: "-48%" },
        { label: "Test Coverage", value: "87%", change: "+87%" }
      ],
      icon: Zap,
      duration: 5500
    },
    {
      title: "Final Result: Production Ready",
      description: "Clean, maintainable, and performant architecture",
      metrics: [
        { label: "Files", value: "208", change: "Restructured" },
        { label: "Performance", value: "70%", change: "Faster" },
        { label: "DX Score", value: "95%", change: "Improved" }
      ],
      icon: CheckCircle,
      duration: 6000
    }
  ], []);

  useEffect(() => {
    // Clear any existing interval when starting new step or stopping
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }

    if (isPlaying) {
      const totalDuration = demoSteps.reduce((sum, step) => sum + step.duration, 0);
      const startTime = Date.now();
      
      progressInterval.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
        
        // Calculate which step we should be on based on progress
        const stepCheckpoints = [16.67, 33.33, 50, 66.67, 83.33, 100];
        const newStep = stepCheckpoints.findIndex(checkpoint => newProgress <= checkpoint);
        
        if (newStep !== currentStep && newStep !== -1) {
          setCurrentStep(newStep);
        }
        
        setProgress(newProgress);
        
        // Stop when we reach 100%
        if (newProgress >= 100) {
          if (progressInterval.current) {
            clearInterval(progressInterval.current);
            progressInterval.current = null;
          }
          setIsPlaying(false);
        }
      }, 50);

      return () => {
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
          progressInterval.current = null;
        }
      };
    } else if (!isPlaying) {
      // When paused, keep current progress but clear interval
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
    }
  }, [isPlaying, demoSteps]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePlayPause = () => {
    if (currentStep === demoSteps.length - 1 && !isPlaying) {
      setCurrentStep(0);
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
    setCurrentStep(0);
    setProgress(0);
  };

  const currentStepData = demoSteps[currentStep];
  const StepIcon = currentStepData.icon;

  return (
    <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      
      <CardContent className="p-8 relative z-10">
        {/* Demo Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">Live Transformation Demo</h3>
            <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">
              Interactive
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayPause}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" fill="currentColor" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <RotateCcw className="h-5 w-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">Step {currentStep + 1} of {demoSteps.length}</span>
            <span className="text-sm text-cyan-400">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-8">
          {demoSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.button
                key={index}
                onClick={() => {
                  setIsPlaying(false);
                  if (progressInterval.current) {
                    clearInterval(progressInterval.current);
                    progressInterval.current = null;
                  }
                  setCurrentStep(index);
                  setProgress(0);
                }}
                whileHover={{ scale: 1.1 }}
                className={`relative p-3 rounded-full transition-all ${
                  index === currentStep
                    ? "bg-cyan-500/20 border-2 border-cyan-400"
                    : index < currentStep
                    ? "bg-green-500/20 border-2 border-green-400"
                    : "bg-white/10 border-2 border-white/20"
                }`}
              >
                <Icon className={`h-5 w-5 ${
                  index === currentStep
                    ? "text-cyan-400"
                    : index < currentStep
                    ? "text-green-400"
                    : "text-white/60"
                }`} />
                
                {index < demoSteps.length - 1 && (
                  <div className={`absolute top-1/2 left-full h-0.5 w-8 lg:w-16 -translate-y-1/2 ${
                    index < currentStep
                      ? "bg-green-400"
                      : "bg-white/20"
                  }`} />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Current Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 min-h-[400px]"
          >
            {/* Step Header */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <StepIcon className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {currentStepData.title}
                </h4>
                <p className="text-white/70">
                  {currentStepData.description}
                </p>
              </div>
            </div>

            {/* Code Snippet */}
            {(currentStepData as DemoStep).codeSnippet && (
              <div className="bg-gray-900/50 rounded-lg p-4 border border-white/10">
                {typeof (currentStepData as DemoStep).codeSnippet === 'string' ? (
                  <pre className="text-sm overflow-x-auto">
                    <code className="language-typescript text-white/80">
                      {(currentStepData as DemoStep).codeSnippet}
                    </code>
                  </pre>
                ) : (
                  <div className="overflow-x-auto">
                    {(currentStepData as DemoStep).codeSnippet as React.ReactNode}
                  </div>
                )}
              </div>
            )}

            {/* Metrics */}
            {currentStepData.metrics && (
              <div className="grid grid-cols-3 gap-4">
                {currentStepData.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/60">{metric.label}</div>
                    {'change' in metric && metric.change && (
                      <Badge className={`mt-2 text-xs ${
                        metric.change.startsWith('+') || metric.change.includes('Faster') || metric.change.includes('Improved')
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : metric.change.startsWith('-') && !metric.change.includes('KB')
                          ? 'bg-red-500/20 text-red-400 border-red-500/30'
                          : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                      }`}>
                        {metric.change}
                      </Badge>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Hint */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>Click on any step to jump directly</span>
            <span>Press play to watch the full transformation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveDemo;