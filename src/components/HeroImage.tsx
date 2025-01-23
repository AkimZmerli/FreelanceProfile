import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src="/Racing-removebg.png"
          alt="logo"
          loading="eager"
          priority
          height={500}
          width={500}
          className="transform translate-y-[6%]  "
        />
        </>
    )
}
export default HeroImage