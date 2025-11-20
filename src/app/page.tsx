

import SocialLinks from "@/shared/components/navigation/SocialLinks";
import { HeroTexts, HeroImage } from "./HeroSection";
import DarkModeButton from "@/shared/components/navigation/DarkModeButton";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import TotalRecall from "./education/TotalRecall";

export const siteConfig = {
  name: "Akim the Dream",
  description: "Freelance Web Dev",
  url: "https://freelance-portfolio.vercel.app",

}
export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper className="flex flex-col justify-start gap-5 w-full lg:w-auto items-start" y={0} x={-90}>
        <HeroTexts />



      </FramerWrapper>
      {/* RIGHT SIDE image  */}

      <FramerWrapper className="h-[40%] w-full md:h-[60%] md:w-[45%] lg:h-[70%] lg:w-[47%] relative block mt-8 lg:mt-0" y={0} x={100}>


        {/* IMAGE  */}

        <HeroImage />

      </FramerWrapper>



    </>
  );
}
