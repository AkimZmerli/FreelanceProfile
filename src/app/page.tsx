

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
      {/* Mobile Layout - Flexbox centered */}
      <div className="flex flex-col justify-between items-center w-full h-full overflow-hidden lg:hidden">
        {/* HERO TEXT - Centered on mobile */}
        <FramerWrapper className="flex flex-col justify-center gap-5 w-full items-center order-1" y={0} x={-90}>
          <HeroTexts />
        </FramerWrapper>
        
        {/* HERO IMAGE - Bottom on mobile */}
        <FramerWrapper className="h-[30%] w-[60%] absolute bottom-[-6px] left-1/2 -translate-x-[calc(50%+10px)] flex justify-center items-end order-2" y={0} x={100}>
          <HeroImage />
        </FramerWrapper>
      </div>

      {/* Desktop Layout - CSS Grid */}
      <div className="hidden desktop-grid:grid grid-cols-2 grid-rows-1 w-full h-full">
        {/* TEXT AREA */}
        <FramerWrapper className="hero-text-area flex flex-col justify-center gap-5" y={0} x={-90}>
          <HeroTexts />
        </FramerWrapper>
        
        {/* IMAGE AREA */}
        <FramerWrapper className="hero-image-area flex justify-center items-center" y={0} x={100}>
          <HeroImage />
        </FramerWrapper>
      </div>
    </>
  );
}
