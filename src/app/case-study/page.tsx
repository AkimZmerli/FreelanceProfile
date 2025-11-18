"use client"
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProblemStatement from "./components/ProblemStatement";
import SolutionOverview from "./components/SolutionOverview";
import NarrativeBridge from "./components/NarrativeBridge";
import CodeComparison from "./components/CodeComparison";
import ProcessTimeline from "./components/ProcessTimeline";
import ResultsShowcase from "./components/ResultsShowcase";
import TechnicalDeepDive from "./components/TechnicalDeepDive";
import LessonsLearned from "./components/LessonsLearned";

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-16 overflow-hidden pt-20 pb-20">
      
      {/* Container wrapper for consistent spacing */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-20">
        
        {/* Hero Section with Metrics */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <HeroSection />
        </motion.section>

        {/* Problem Statement Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <ProblemStatement />
        </motion.section>

        {/* Solution Overview Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <SolutionOverview />
        </motion.section>

        {/* Narrative Bridge Section - Text cards between metrics and code transformation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <NarrativeBridge />
        </motion.section>

        {/* Code Comparison Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <CodeComparison />
        </motion.section>

        {/* Results Showcase Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <ResultsShowcase />
        </motion.section>

        {/* Prominent CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
            
            <div className="relative z-10 p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Codebase?
                </h2>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  See how vertical slice architecture and AI-assisted development can revolutionize 
                  your development workflow. Let's build something extraordinary together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Start Your Project
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </div>
                
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Available for Projects
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Remote Friendly
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    AI-Powered Development
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technical Deep Dive Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <TechnicalDeepDive />
        </motion.section>

        {/* Process Timeline Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <ProcessTimeline />
        </motion.section>

        {/* Lessons Learned Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <LessonsLearned />
        </motion.section>

      </div>
    </div>
  );
};

export default CaseStudyPage;