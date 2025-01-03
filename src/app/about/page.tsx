import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import TotalRecall from "@/components/TotalRecall";
const page = () => {
  const items = [
    { hobby: "Outdoor Sport" },
    { hobby: "Schallplatten sammeln" },
    { hobby: "um die Welt reisen" },
    { hobby: "Saunieren und Eisbaden" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        Life in a Nutshell
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            Software und Web <br /> Entwickler aus Leipzig
          </Heading>
   


        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-2xl w-full text-primary mt-6 mb-6 max-sm:text-lg">
            Ich bin Fullstack Web Entwickler mit einem Herz für spannendes Storytelling und Special Effects. Auf meinem Weg sammelte ich Erfahrungen als kreativer Schauspieler, neugieriger Wissenschaftler und systemischer Coach. All die Erfahrung zeichnet meine Arbeit aus und garantiert dir eine kompentente Lösung für jeden Auftrag.
          
          </p>
        </FramerWrapper>

        
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter  />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
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
        </div>
        <TotalRecall />
      </FramerWrapper>
    </div>
  );
};

export default page;
