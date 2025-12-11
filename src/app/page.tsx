

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
        <FramerWrapper className="flex flex-col justify-center gap-5 w-full items-center order-1 -mt-[10%]" y={0} x={-90}>
          <HeroTexts />
        </FramerWrapper>
        
        {/* HERO IMAGE - Bottom on mobile */}
        <FramerWrapper className="h-[30%] w-[60%] absolute bottom-[-6px] left-1/2 -translate-x-[calc(50%+10px)] flex justify-center items-end order-2" y={0} x={100}>
          <HeroImage />
        </FramerWrapper>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex w-full h-full">
        {/* LEFT SIDE */}
        <FramerWrapper className="flex flex-col justify-center gap-5 w-auto items-start mt-[10%]" y={0} x={-90}>
          <HeroTexts />
        </FramerWrapper>
        
        {/* RIGHT SIDE image */}
        <FramerWrapper className="h-[70%] w-[47%] relative block" y={0} x={100}>
          {/* IMAGE */}
          <HeroImage />
        </FramerWrapper>
      </div>
    </>
  );
}
