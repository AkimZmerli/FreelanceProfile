"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { AlertTriangle, Code, FileX, Bug, Clock, Users } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";

const ProblemStatement = () => {
  const challenges = [
    {
      icon: Code,
      title: "Monolithic Structure",
      description: "2,000+ lines of tightly coupled code in single files",
      impact: "Impossible to maintain or extend",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: FileX,
      title: "Mixed Concerns",
      description: "Authentication, data fetching, and UI logic intertwined",
      impact: "No separation of concerns",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: Bug,
      title: "Debugging Nightmare",
      description: "Business logic scattered across dozens of files",
      impact: "Hours to locate simple bugs",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: Clock,
      title: "Development Velocity",
      description: "Simple features required untangling spaghetti code",
      impact: "Days for minor changes",
      color: "from-purple-500/20 to-purple-600/20"
    },
  ];

  const codeExample = {
    before: `// Before: Monolithic Portfolio page.tsx (2k+ lines)
export default function PortfolioPage({ params }) {
  const { id } = use(params);
  const { getToken } = useAuth(); // Auth mixed in
  
  // Data fetching mixed with rendering logic
  const [buildingData, setBuildingData] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [climateData, setClimateData] = useState(null);
  
  useEffect(() => {
    // Authentication and data fetching all in one place
    const fetchAllData = async () => {
      try {
        const token = await getToken();
        // 50+ lines of mixed fetching logic...
        // Error handling mixed with business logic...
        // State updates scattered throughout...
      } catch (error) {
        console.error("Failed:", error);
      }
    };
    fetchAllData();
  }, [id, getToken]);
  
  // 1500+ lines of mixed rendering and business logic...
  return (
    <div>
      {/* Massive JSX with inline business logic */}
      {buildingData && (
        // Complex inline rendering logic...
      )}
    </div>
  );
}`
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
        <Badge className="gap-2" variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          The Challenge
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Prototype Technical Debt Crisis
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          When a critical pain point emerged in the Portfolio feature, it revealed 
          fundamental architectural problems affecting the entire codebase
        </p>
      </motion.div>

      {/* The Story Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="relative overflow-hidden border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />
          
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl text-white flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              The Breaking Point
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-6">
            <blockquote className="border-l-4 border-red-400 pl-6 py-2">
              <p className="text-lg text-white/90 italic mb-2">
                &quot;The Portfolio page had become unmaintainable. 2,000+ lines of tightly coupled code 
                where authentication, data fetching, and rendering logic fought for dominance. 
                Adding a simple feature required untangling spaghetti code across dozens of files.&quot;
              </p>
              <footer className="text-sm text-white/60">
                — Initial State Assessment, Portfolio Feature
              </footer>
            </blockquote>

            {/* Specific Issues */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white/90">What I Encountered:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Authentication logic mixed with rendering",
                  "Data fetching embedded directly in components",
                  "Business logic scattered across multiple files",
                  "Coupling making unit testing impossible",
                  "Visual bugs from inconsistent component usage",
                  "Poor UX patterns lacking standardized interactions"
                ].map((issue, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{issue}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
          >
            <Card className="group h-full relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <challenge.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-white">{challenge.title}</h3>
                    <p className="text-sm text-white/70">{challenge.description}</p>
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-xs font-medium text-red-300">Impact: </span>
                      <span className="text-xs text-white/60">{challenge.impact}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Code Example */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Card className="relative overflow-hidden border-red-500/20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-xl text-white flex items-center gap-3">
              <Code className="h-5 w-5 text-red-400" />
              The Monolithic Nightmare
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="relative">
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="language-typescript text-white/80">
                  {codeExample.before}
                </code>
              </pre>
              
              {/* Issue Indicators */}
              <div className="absolute top-4 right-4 space-y-2">
                <Badge variant="destructive" className="text-xs">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  2000+ lines
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  <Bug className="h-3 w-3 mr-1" />
                  Mixed concerns
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  <Users className="h-3 w-3 mr-1" />
                  Poor DX
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center"
      >
        <p className="text-lg text-white/70">
          This experience revealed the fundamental architectural problem affecting the{" "}
          <span className="text-red-400 font-semibold">entire codebase</span> and{" "}
          <span className="text-orange-400 font-semibold">user experience</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemStatement;