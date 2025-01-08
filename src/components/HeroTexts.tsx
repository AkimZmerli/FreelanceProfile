import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-3xl max-sm:text-xl text-gray-700 dark:text-primary" >Hey! My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-gray-800 dark:text-primary max-sm:text-6xl" >
        Akim <br /> Zmerli 
      </h1>
      <TextRotator/>
    </>
  );
};
export default HeroTexts