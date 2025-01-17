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
          height={600}
          width={600}
          className="transform translate-y-[7%] translate-x-[-7%] "
        />
        </>
    )
}
export default HeroImage