"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import HeroSection from "./components/HeroSection";
import ProblemStatement from "./components/ProblemStatement";
import SolutionOverview from "./components/SolutionOverview";
import NarrativeBridge from "./components/NarrativeBridge";
import CodeComparison from "./components/CodeComparison";
import ProcessTimeline from "./components/ProcessTimeline";
import ResultsShowcase from "./components/ResultsShowcase";
import TechnicalDeepDive from "./components/TechnicalDeepDive";
import LessonsLearned from "./components/LessonsLearned";
import { ChevronDown, Code2, BookOpen, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { SendEmail } from "../contact/SendEmail";

const CaseStudyPage = () => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
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
                  your development workflow. Let&apos;s build something extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <motion.button
                    onClick={() => setShowContactForm(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-lg"
                  >
                    Start Your Project
                  </motion.button>
                  
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                    >
                      Back to Projects
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
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

        {/* Optional Technical Deep Dive Toggle */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-32"
        >
          <div className="text-center">
            <motion.button
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-md px-8 py-6 transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-800/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                    {showTechnicalDetails ? <BookOpen className="w-5 h-5 text-indigo-400" /> : <Code2 className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors">
                      {showTechnicalDetails ? 'Hide Technical Details' : 'Explore Technical Implementation'}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {showTechnicalDetails
                        ? 'Collapse the detailed technical breakdown'
                        : 'Deep dive into architecture patterns, code examples, and implementation details'
                      }
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: showTechnicalDetails ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </motion.section>

        {/* Expandable Technical Content */}
        <AnimatePresence>
          {showTechnicalDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-20">
                {/* Technical Deep Dive Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <TechnicalDeepDive />
                </motion.section>

                {/* Process Timeline Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <ProcessTimeline />
                </motion.section>

                {/* Lessons Learned Section */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <LessonsLearned />
                </motion.section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-white/10 bg-slate-900/95 backdrop-blur-md">
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const formData = new FormData(e.target as HTMLFormElement);
                    await SendEmail(formData);
                    (e.target as HTMLFormElement).reset();
                    setShowContactForm(false);
                    alert("Message sent successfully!");
                  } catch (error) {
                    alert("Error sending message. Please try again.");
                  }
                }}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-white">Start Your Project</CardTitle>
                        <CardDescription className="text-slate-400">
                          Let's discuss how we can work together
                        </CardDescription>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        required
                        className="bg-slate-800 border-slate-700 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        type="email"
                        name="SenderEmail"
                        required
                        className="bg-slate-800 border-slate-700 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <textarea
                        placeholder="Tell me about your project..."
                        name="message"
                        required
                        className="resize-none flex min-h-[100px] w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    >
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudyPage;