import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import TotalRecall from "@/components/TotalRecall";


const page = () => {

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        Life in a Nutshell
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            Fullstack Web Developer <br /> for life
          </Heading>
   


        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-4xl w-full text-primary mt-6 mb-6 max-sm:text-lg">
            After years of working in the academic and social sector, I found my one true passion. Developing Dreams with Code.
            Together we will spin ideas, figure out your resources and make your web site as unique as you are. Join me on this path of creativity.
          </p>
        </FramerWrapper>

        
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter  />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        {/* <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
         {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div> */}
        <TotalRecall />
      </FramerWrapper>
    </div>
  );
};

export default page;
