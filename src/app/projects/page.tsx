"use client"
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Heading from "@/features/about/components/Heading";
import ProjectCards from "@/features/portfolio/components/ProjectsCard";
import ScrambleButton from "@/shared/components/animations/ScrambleButton";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReviewCard from "@/features/portfolio/components/review-card";

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
        "Absolutely love WebDev4Life! They really know what they are doing, getting the best out of my brand and build an incredible website. Thank you so much.",
    },
    {
      reviewerName: "Alan Turing",
      reviewerImage: {
        img: "/alan.png",
        alt: "Alan Turing"
      },
      rating: 5,
      reviewText:
        "I actually didn't need a new Website but after seeing WebDev4Life's magic skills I had to get a new one. And it has been built to last. You have come to the right place",
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
    <div className="h-full w-full relative flex flex-col items-start gap-5 px-4 py-8 sm:px-6 md:px-8">
      <div className="flex flex-col gap-8">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
    
          </p>
        </FramerWrapper>
      </div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto justify-items-center">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>

      {/* Reviews Section */}
      <div ref={reviewsSectionRef} className="w-full mt-16">
        {/* Section Header */}
        <FramerWrapper y={0} x={-100}>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-rubik font-bold text-primary">
                  Client Reviews
                </h2>
                <p className="text-primary/70 text-sm mt-1">
                  {reviews.length} reviews from satisfied clients
                </p>
              </div>
              <ScrambleButton 
                text={`Show Reviews (${reviews.length})`}
                toggledText="Hide Reviews"
                onClick={toggleReviews}
                className="w-fit"
                isActive={isVisible}
              />
            </div>
            
            {/* Visual Separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>
        </FramerWrapper>

        {/* Placeholder when collapsed */}
        {!isVisible && (
          <motion.div 
            className="flex items-center justify-center py-8 text-primary/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Click &quot;Show Reviews&quot; above to see what clients say about my work
          </motion.div>
        )}

        {/* Reviews Grid with improved animation */}
        <motion.div 
          className="w-full overflow-hidden"
          initial={false}
          animate={{ height: isVisible ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div ref={reviewCardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full pb-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                } : { 
                  opacity: 0, 
                  scale: 0.9,
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
      </div>
    </div>
  );
};

export default ProjectsPage;