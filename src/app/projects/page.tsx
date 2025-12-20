"use client"
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Heading from "@/shared/components/ui/Heading";
import ProjectCards from "./ProjectsCard";
import ScrambleButton from "@/shared/components/animations/ScrambleButton";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { Badge } from "@/shared/components/ui/badge";
import { Sparkles, Code2, Rocket, Users } from "lucide-react";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reviewsSectionRef = useRef<HTMLDivElement>(null);
  const reviewCardsRef = useRef<HTMLDivElement>(null);

  // PROJECTS DATA
  const Projects = [
    {
      title: "Cinematic Portfolio Page",
      description:
        "Discover the powerful photographic art of a rising artist from Chemnitz. His visual language leaves all amateurs speechless.",
      tags: ["Immersive UX", "3D Gallery", "Video Streaming"],
      link: "https://www.valentinmici.com/",
    },
    {
      title: "Frontend Architecture Refactoring ",
      description:
        "Visit a Case Study in which I transformed an enterprise atomic structured codebase to vertical slice architecture",
      tags: ["Architecture Performance", "UX Improvements", "Code Refactoring"],
      link: "/case-study",
    },
    {
      title: "Open Source 3D Flipbook",
      description:
        `A modern, framework-agnostic flipbook library that is build for developers who need customizable, high-performance digital flipbook experiences.`,
      tags: ["Framework Agnostic", "Modern Architecture"],
      link: "https://github.com/AkimZmerli/3D-Flipbook",
    }



  ];


  const reviews = [
    {
      reviewerName: "Valentin Mici",
      reviewerImage: {
        img: "/valentin.png",
        alt: "Valentin Mici"
      },
      rating: 5,
      reviewText:
        "WebDev4Life transformed my photographic portfolio into an immersive gallery experience. They really took the time to understand my vision and include an UX designer to elevate my brand. I'm so grateful for their dedication. Thank you so much!",
    },
    {
      reviewerName: "Tore Waldhausen",
      reviewerImage: {
        img: "/Tore.webp",
        alt: "Tore Waldhausen"
      },
      rating: 5,
      reviewText:
        "r3leaf GmbH is very thankful for WebDev4Life's initiative in refactoring our frontend codebase and reshaping our AI product development. They combine rare qualities: deep technical skills and genuine product vision. I highly recommend their services and expertise.",
    },
    {
      reviewerName: "Jeff Bezos",
      reviewerImage: {
        img: "/jeff.png",
        alt: "Jeff Bezos"
      },
      rating: 1,
      reviewText:
        "This punk scammed me! He used his moms Account and never paid for his own Prime Subscription. I want my money Back!! ",
    },
  ];

  const toggleReviews = () => {
    setIsVisible(!isVisible);

    // Auto-scroll to reviews section when expanding
    if (!isVisible) {
      setTimeout(() => {
        const element = reviewsSectionRef.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = rect.bottom + scrollTop - window.innerHeight + 50;

          // Smooth scroll to bottom of reviews section
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  };

  return (
    // PROJECT PAGE
    <div className="min-h-screen w-full relative flex flex-col items-start gap-16 overflow-hidden pt-20 pb-20">
      {/* Container wrapper for consistent spacing - matching case study */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-20">

        {/* Hero Section with gradient text and badge */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mt-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto font-bold"
          >
            Transforming ideas into exceptional digital experiences through innovative development and thoughtful design
          </motion.p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-8"
        >


          {/* Projects Grid with staggered animations */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {Projects.map((val, indx) => {
              return <ProjectCards key={indx} value={val} num={indx} />;
            })}
          </div>
        </motion.section>

        {/* Reviews Section with glassmorphism */}
        <motion.section
          ref={reviewsSectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Section Header with gradient and badge */}
          <div className="relative overflow-hidden rounded-2xl border dark:border-white/10 border-gray-200/50 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/2 bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-md p-8 shadow-lg shadow-gray-200/20">
            <div className="absolute inset-0 bg-gradient-to-r dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 from-cyan-600/12 via-blue-600/12 to-purple-600/12" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left space-y-2">
                <Badge className="mb-2 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300">
                  <Users className="w-3 h-3 mr-1.5" />
                  Testimonials
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Client Reviews
                </h2>
                <p className="dark:text-white/60 text-gray-600 text-sm">
                  {reviews.length} reviews from satisfied clients
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrambleButton
                  text={`Show Reviews (${reviews.length})`}
                  toggledText="Hide Reviews"
                  onClick={toggleReviews}
                  className="w-fit bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                  isActive={isVisible}
                />
              </motion.div>
            </div>
          </div>

          {/* Placeholder when collapsed with glassmorphism */}
          {!isVisible && (
            <motion.div
              className="flex items-center justify-center py-12 rounded-xl border border-white/5 bg-gradient-to-br from-white/2 to-transparent backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Click &quot;Show Reviews&quot; above to see what clients say about my work</span>
              </div>
            </motion.div>
          )}

          {/* Reviews Grid with staggered animations */}
          <motion.div
            className="w-full overflow-hidden"
            initial={false}
            animate={{ height: isVisible ? "auto" : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div ref={reviewCardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  } : {
                    opacity: 0,
                    y: 20,
                    transition: {
                      duration: 0.3,
                      delay: (reviews.length - index - 1) * 0.05,
                      ease: "easeIn"
                    }
                  }}
                >
                  <ReviewCard
                    reviewerName={review.reviewerName}
                    reviewerImage={review.reviewerImage}
                    rating={review.rating}
                    reviewText={review.reviewText}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectsPage;