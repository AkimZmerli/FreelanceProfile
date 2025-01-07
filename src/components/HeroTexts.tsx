import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-3xl max-sm:text-xl text-gray-700 dark:text-gray-300" >Hey! Mein Name ist</h3>
      <h1 className="font-rubik text-8xl name_underline text-gray-800 dark:text-gray-100 max-sm:text-6xl" >
        Akim <br /> Zmerli 
      </h1>
      <TextRotator/>
    </>
  );
};
export default HeroTexts