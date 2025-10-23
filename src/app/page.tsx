

import SocialLinks from "@/shared/components/navigation/SocialLinks";
import HeroTexts from "@/features/hero/components/HeroTexts";
import HeroImage from "@/features/hero/components/HeroImage";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";


export const siteConfig = {
  name: "WebDev4Life",
  description: "Software Engineer for Hire",
  url: "https://webdev4life.com",

}
export default function Home() {
  return (
   <>
      {/* LEFT SIDE - Original desktop layout, mobile optimized */}
      <FramerWrapper className="flex flex-col justify-start gap-3 sm:gap-5 lg:gap-5 w-full lg:w-auto items-center lg:items-start pt-16 lg:pt-0" y={0} x={-90}>
        <HeroTexts />
      </FramerWrapper>
      
      {/* RIGHT SIDE image - Original desktop layout, mobile repositioned */}
      <FramerWrapper className="
        absolute bottom-3 left-4 h-[20%] w-[50%] 
        lg:relative lg:bottom-auto lg:left-auto lg:h-[75%] lg:w-[47%] lg:mt-0
        xl:h-[70%] xl:w-[47%]
        block
      " y={0} x={100}>
        <HeroImage />
      </FramerWrapper>
   </>
  );
}
