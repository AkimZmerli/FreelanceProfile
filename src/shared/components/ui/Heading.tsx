import FramerWrapper from "@/shared/components/animations/FramerWrapper";

const Heading = ({ children }: { children: React.ReactNode }) => {
  // CUSTOM HEADING FOR ALL PAGE
  return (
    <FramerWrapper y={0} x={-100}>
      <h1 className="text-5xl md:text-6xl font-bold text-center mt-[10vh] md:mt-[5vh]">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          {children}
        </span>
      </h1>
    </FramerWrapper>
  );
};

export default Heading;
