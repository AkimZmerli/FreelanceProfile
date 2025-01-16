import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import TotalRecall from "@/components/TotalRecall";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";


const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Eisdiele Pfeiffer",
      description:
        `Your favorite ice cream parlor, Pfeiffer, has a new online presence. Here you'll find everything about the tastiest ice cream in the Südvorstadt neighborhood`,
      tags: ["Zustand", "Shadcn Ui", "Nextjs"],
      link: "https://www.youtube.com/watch?v=xxA-Wq1w2G4",
    },
   
    {
      title: "ProjektmanagerIn meets Tanz",
      description:
        "You need a new business card that explores new creative paths? Then you are in the right place!",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://www.youtube.com/watch?v=eerHzJP2-Zc",
    },
    {
      title: "Lichtbildnerei Valentin ",
      description:
        "Discover the powerful photographic art of a rising artist from Chemnitz. His visual language leaves all amateurs speechless.",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://www.youtube.com/watch?v=0DubP5iYTic",
    },
    
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-8">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            {/* I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action. */}
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-6 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
      <TotalRecall />
    </div>
  );
};

export default projectsPage;
