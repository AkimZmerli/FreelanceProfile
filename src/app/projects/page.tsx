"use client"
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import ScrambleButton from "@/components/ScrambleButton";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ReviewCard from "@/components/review-card";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // PROJECTS DATA
  const Projects = [
    {
      title: "Lichtbildnerei Valentin ",
      description:
        "Discover the powerful photographic art of a rising artist from Chemnitz. His visual language leaves all amateurs speechless.",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://www.instagram.com/valentinmici/",
    },
    {
      title: "ProjektmanagerIn meets Tanz",
      description:
        "You need a new business card that explores creative paths? Then you are in the right place!",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://www.youtube.com/watch?v=o-YBDTqX_ZU",
    },
    {
      title: "Eisdiele Pfeiffer",
      description:
        `Your favorite ice cream parlor, Pfeiffer, has a new online presence. Here you'll find everything about the tastiest ice cream in the Südvorstadt neighborhood`,
      tags: ["Typescript", "Shadcn Ui", "Nextjs"],
      link: "https://www.leipzig-leben.de/eisdiele-pfeifer-leipzig/",
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
  };

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-8">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
    
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-6 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>

      <FramerWrapper y={0} x={-100}>
      <div className="flex items-center w-full m-8">
        <ScrambleButton 
          text="Show Reviews"
          toggledText="Hide Reviews"
          onClick={toggleReviews}
          className="w-fit"
          isActive={isVisible}
        />
      </div>
      </FramerWrapper>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
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
    </div>
  );
};

export default ProjectsPage;