import TextRotator from "./TextRotator";
import './HeroText.css';
import SocialLinks from "@/shared/components/navigation/SocialLinks";

const HeroTexts = () => {
  return (
  
        <div className="hero-text-container">
      <h3 className="font-poppins text-7xl max-sm:text-xl text-gray-700 dark:text-primary" >Welcome to</h3>
      <h1 className="font-rubik text-9xl name_underline text-gray-700 dark:text-primary max-sm:text-6xl" >
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