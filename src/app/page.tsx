

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DarkModeButton from "@/components/DarkModeButton";
import FramerWrapper from "@/components/animation/FramerWrapper";
import TotalRecall from "@/components/TotalRecall";

export const siteConfig = {
  name: "Akim the Dream",
  description: "Freelance Web Dev",
  url: "https://freelance-portfolio.vercel.app",

}
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <FramerWrapper className="  flex flex-col justify-start gap-5" y={0} x={-90}>
        <HeroTexts />
        
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
          
        </div>
       
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      
      <FramerWrapper className="h-[70%] w-[47%] relative block   max-lg:hidden" y={0} x={100}>
      
      
      {/* IMAGE  */}
        <div className="">
          <HeroImage />
        </div>
      </FramerWrapper>
     
      {/* GITHUB BUTTON  */}
      
      <GithubBtn/>
      
      
      </>
  );
}
