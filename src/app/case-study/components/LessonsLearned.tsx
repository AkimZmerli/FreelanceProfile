"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { 
  Lightbulb, 
  Target, 
  AlertCircle, 
  TrendingUp,
  Users,
  Clock,
  Brain,
  Zap,
  CheckCircle,
  XCircle
} from "lucide-react";

const LessonsLearned = () => {
  const keyLessons = [
    {
      category: "Architecture",
      icon: Target,
      lessons: [
        {
          title: "Start with the worst pain point",
          description: "Beginning with the Portfolio page's 2000+ lines gave immediate value and validated the approach",
          type: "success"
        },
        {
          title: "Vertical slices reduce cognitive load",
          description: "Developers can understand entire features without jumping between 10+ folders",
          type: "success"
        },
        {
          title: "Don't over-engineer shared components early",
          description: "Extract to shared layer only after patterns emerge naturally",
          type: "warning"
        }
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: "Process",
      icon: Clock,
      lessons: [
        {
          title: "Incremental migration reduces risk",
          description: "Feature-by-feature approach allowed continuous deployment without disruption",
          type: "success"
        },
        {
          title: "AI accelerates pattern recognition",
          description: "Claude Code identified coupling issues 10x faster than manual review",
          type: "success"
        },
        {
          title: "Document decisions immediately",
          description: "Architecture decisions documented during implementation prevent knowledge loss",
          type: "warning"
        }
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Team Impact",
      icon: Users,
      lessons: [
        {
          title: "Clear boundaries enable parallel work",
          description: "Teams can work on different features without conflicts or coordination overhead",
          type: "success"
        },
        {
          title: "Onboarding time dramatically reduced",
          description: "New developers productive in days instead of weeks with clear structure",
          type: "success"
        },
        {
          title: "Invest in team education early",
          description: "Teaching vertical slice patterns upfront would have saved iteration time",
          type: "warning"
        }
      ],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const dosDonts = {
    dos: [
      {
        action: "Map dependencies before refactoring",
        reason: "Prevents breaking changes and circular dependencies"
      },
      {
        action: "Create feature-complete vertical slices",
        reason: "Ensures each feature is truly independent"
      },
      {
        action: "Use TypeScript strict mode from the start",
        reason: "Catches issues early and improves refactoring safety"
      },
      {
        action: "Implement comprehensive testing during migration",
        reason: "Validates functionality remains intact"
      },
      {
        action: "Leverage AI for pattern detection and boilerplate",
        reason: "Accelerates development and ensures consistency"
      }
    ],
    donts: [
      {
        action: "Mix concerns in shared components",
        reason: "Creates new coupling points and dependencies"
      },
      {
        action: "Skip the analysis phase",
        reason: "Leads to incomplete refactoring and missed issues"
      },
      {
        action: "Refactor everything at once",
        reason: "High risk of breaking changes and difficult rollback"
      },
      {
        action: "Ignore performance metrics",
        reason: "Can introduce regressions without monitoring"
      },
      {
        action: "Forget about documentation",
        reason: "Future developers won't understand architectural decisions"
      }
    ]
  };

  const unexpectedWins = [
    {
      win: "70% Performance Improvement",
      description: "Better code organization led to more efficient bundling and loading",
      icon: Zap,
      metric: "70%"
    },
    {
      win: "AI Development Readiness",
      description: "Clean architecture makes the codebase perfect for AI-assisted development",
      icon: Brain,
      metric: "10x"
    },
    {
      win: "Developer Satisfaction",
      description: "Team morale improved with cleaner, more maintainable codebase",
      icon: TrendingUp,
      metric: "+85%"
    }
  ];

  const futureApplications = [
    {
      area: "Microservices Migration",
      description: "Vertical slices map directly to service boundaries"
    },
    {
      area: "Module Federation",
      description: "Each feature slice can become an independent module"
    },
    {
      area: "Team Autonomy",
      description: "Features can be owned by different teams without conflicts"
    },
    {
      area: "A/B Testing",
      description: "Feature isolation enables easier experimentation"
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
          <Lightbulb className="h-4 w-4" />
          Lessons Learned
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Key Insights & Takeaways
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          What worked, what didn't, and what we'd do differently next time
        </p>
      </motion.div>

      {/* Key Lessons by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {keyLessons.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
          >
            <Card className={`h-full border-white/10 bg-gradient-to-br ${category.color}`}>
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 ${
                        lesson.type === 'success' 
                          ? 'text-green-400'
                          : 'text-yellow-400'
                      }`}>
                        {lesson.type === 'success' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {lesson.title}
                        </h4>
                        <p className="text-xs text-white/60">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Do's and Don'ts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/2">
          <CardHeader>
            <CardTitle className="text-xl text-white">Best Practices Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Do's
                </h3>
                <div className="space-y-3">
                  {dosDonts.dos.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                    >
                      <h4 className="text-sm font-medium text-white mb-1">
                        ✓ {item.action}
                      </h4>
                      <p className="text-xs text-white/60">{item.reason}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Don'ts */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Don'ts
                </h3>
                <div className="space-y-3">
                  {dosDonts.donts.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="p-3 bg-red-500/10 rounded-lg border border-red-500/20"
                    >
                      <h4 className="text-sm font-medium text-white mb-1">
                        ✗ {item.action}
                      </h4>
                      <p className="text-xs text-white/60">{item.reason}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Unexpected Wins */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {unexpectedWins.map((win, index) => (
          <motion.div
            key={win.win}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
          >
            <Card className="h-full border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                  <win.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{win.win}</h3>
                <p className="text-sm text-white/70 mb-4">{win.description}</p>
                <div className="text-3xl font-bold text-yellow-400">{win.metric}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Future Applications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-400" />
              Future Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {futureApplications.map((application, index) => (
                <motion.div
                  key={application.area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.05 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-purple-400 mb-1">
                    {application.area}
                  </h4>
                  <p className="text-xs text-white/60">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LessonsLearned;