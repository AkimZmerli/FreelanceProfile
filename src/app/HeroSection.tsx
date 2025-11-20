import Image from "next/image";
import SocialLinks from "@/shared/components/navigation/SocialLinks";
import './HeroImage.css';
import './HeroText.css';

const TextRotator = () => {
  return (
    <div className="pt-4 rounded-md flex flex-col justify-center items-start overflow-hidden">
      <div className="font-poppins text-lg sm:text-2xl md:text-3xl lg:text-4xl dark:text-primary [text-wrap:balance] text-gray-700 text-left">
        Hire a Frontend Engineer <br /> and
        <span className="inline-flex flex-col ml-2 h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight [&_li]:block animate-text-slide">
            <li className="text-cyan-500 dark:text-pink-500">System Architect</li>
            <li className="text-cyan-500 dark:text-pink-500">Product Owner</li>
            <li className="text-cyan-500 dark:text-pink-500">AI Pioneer</li>
            <li className="text-cyan-500 dark:text-pink-500">Story Teller</li>
            <li className="text-cyan-500 dark:text-pink-500">Chess Hustler</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', maxWidth: '100%', zIndex: 10 }}>
      <Image
        src="/Racing-removebg.png"
        alt="logo"
        loading="eager"
        priority
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '500px',
        }}
        width={500}
        height={500}
        className="responsive-hero-image"
      />
    </div>
  );
};

const HeroTexts = () => {
  return (
    <div className="hero-text-container">
      <h3 className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-700 dark:text-primary">Welcome to</h3>
      <h1 className="font-rubik text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl name_underline text-gray-700 dark:text-primary">
        WebDev <br /> 4Life 
      </h1>
      <TextRotator />
      <div className="h-fit w-full p-4 flex gap-4">
        <SocialLinks />
      </div>
    </div>
  );
};

export { HeroImage, HeroTexts, TextRotator };
export default HeroTexts;