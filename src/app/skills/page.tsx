import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import figma from '../../../public/figma.png'
import linear from '../../../public/Linear.png'
import windsurf from '../../../public/windsurf.png'
import docker from '../../../public/docker.png'
import tailwind from '../../../public/tailwindcss.png'
import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
import FramerWrapper from "@/components/animation/FramerWrapper";
import TotalRecall from "@/components/TotalRecall";
TotalRecall
const skillPage = () => {

    const language = [

      {alt:"ts", img:ts, description: "Typescript", link: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA" },
      {alt:"react", img:react, description: "React", link: "https://www.youtube.com/watch?v=Tn6-PIqc4UM" },
      {alt:"nextjs", img:nextjs, description: "Nextjs", link: "https://www.youtube.com/watch?v=Sklc_fQBmcs&t=290s" },
      {alt:"tailwind", img:tailwind, description: "Tailwind", link: "https://www.youtube.com/watch?v=mr15Xzb1Ook" },
        
        
        
    ]
    const framework = [
      {alt:"html", img:figma, description: "Figma", link: "https://www.youtube.com/watch?v=veKJUY2VmxQ" },
        
        {alt:"css", img:linear, description: "Linear", link: "https://www.youtube.com/watch?v=cxBubxMynDQ" },
        
        {alt:"js", img:windsurf, description: "Windsurf", link: "https://codeium.com/windsurf" },
        {alt:"vscode", img:docker, description: "Docker", link: "https://www.youtube.com/watch?v=Gjnup-PuquQ" },
    ]
       

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start  gap-10 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-6" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-6">
        <Heading>Tech Stack</Heading>
        <FramerWrapper y={0} x={200} className={"block mb-10"}>

        <p className="font-poppins text-4xl w-full text-primary max-sm:text-lg">
          6 Months of waking up early, learning the latest tech stack and working with the most dedicated teachers. This was my rock solid routine during the WebDev Bootcamp.  After class I would teach myself even more through the Odin Project. So I would become one hell of an engineer. <br />This is my current stack: 
        </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Building Stack
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block " y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Design and Version Control Stack
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={framework} />
        </div>
        <TotalRecall />
        </FramerWrapper>
      </div>
      
    </div>
  );
};

export default skillPage;


// TS is messed up , update techs tack 