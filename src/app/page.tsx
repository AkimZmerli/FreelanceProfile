

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
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-full overflow-hidden">
      {/* HERO TEXT - Centered on mobile, left side on desktop */}
      <FramerWrapper className="flex flex-col justify-center lg:justify-start gap-5 w-full lg:w-auto items-center lg:items-start order-1 lg:order-1 -mt[10%] lg:mt-0" y={0} x={-90}>
        <HeroTexts />
      </FramerWrapper>
      
      {/* HERO IMAGE - Bottom on mobile, right side on desktop */}
      <FramerWrapper className="h-[30%] w-[60%] md:h-[50%] md:w-[50%] lg:h-[70%] lg:w-[47%] lg:relative absolute bottom-[-6px] left-1/2 -translate-x-[calc(50%+10px)] lg:translate-x-0 lg:bottom-auto lg:left-auto flex justify-center lg:justify-end items-end lg:items-center lg:-mt-3 order-2 lg:order-2" y={0} x={100}>
        <HeroImage />
      </FramerWrapper>
    </div>
  );
}
