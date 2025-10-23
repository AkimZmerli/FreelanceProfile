import ContactForm from "@/features/contact/components/ContactForm";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import Heading from "@/features/about/components/Heading";




 
const contactPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden m-8">
      <div className="flex flex-col gap-3 w-full">
        <Heading>Ready to start <br /> your next project? </Heading>
        <div className="h-auto w-full flex justify-center items-center">
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm/>
          </FramerWrapper>
        </div>
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default contactPage;
