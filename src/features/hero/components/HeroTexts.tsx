import TextRotator from "./TextRotator";
import './HeroText.css';
import SocialLinks from "@/shared/components/navigation/SocialLinks";

const HeroTexts = () => {
  return (
  
        <div className="hero-text-container">
      <h3 className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-700 dark:text-primary" >Welcome to</h3>
      <h1 className="font-rubik text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl name_underline text-gray-700 dark:text-primary" >
        WebDev <br /> 4Life 
      </h1>
      <TextRotator/>
      <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
          
        </div>
      </div>
    
  );
};
export default HeroTexts