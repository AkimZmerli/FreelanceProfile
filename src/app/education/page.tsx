import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Heading from "@/shared/components/ui/Heading";
import { Badge } from "@/shared/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            July 2014 - 2018
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Arts, Arabistik  <br /> Universität Leipzig
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-medium:text-medium">
                bblablabla
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;


// keep the education part? Or add more education stuff? 