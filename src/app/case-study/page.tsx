"use client"
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProblemStatement from "./components/ProblemStatement";
import SolutionOverview from "./components/SolutionOverview";
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