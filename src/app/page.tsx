

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Akim the Dream",
  description: "Ich bin leidenschaftlicher Web Dev",
  url: "https://freelance-portfolio.vercel.app",

}
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <FramerWrapper className="  w-auto flex flex-col justify-start gap-5" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
       <DownLoadResumeBtn/>
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
