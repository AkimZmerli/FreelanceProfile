

import SocialLinks from "@/shared/components/navigation/SocialLinks";
import HeroTexts from "@/features/hero/components/HeroTexts";
import HeroImage from "@/features/hero/components/HeroImage";
import GithubBtn from "@/shared/components/animations/GithubBtn";
import DarkModeButton from "@/shared/components/navigation/DarkModeButton";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import TotalRecall from "@/features/education/components/TotalRecall";

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
        

       
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      
      <FramerWrapper className="h-[70%] w-[47%] relative block   max-lg:hidden" y={0} x={100}>
      
      
      {/* IMAGE  */}
     
          <HeroImage />
        
      </FramerWrapper>
     
      {/* GITHUB BUTTON  */}
      
      <GithubBtn/>
      
      
      </>
  );
}
