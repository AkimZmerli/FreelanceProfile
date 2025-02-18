import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', maxWidth: '100%' }}>
      <Image
        src="/Racing-removebg.png"
        alt="logo"
        loading="eager"
        priority
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '500px',
          position: 'absolute',
          bottom: '0',
          right: '0',
        }}
        width={500}
        height={500}
        className="responsive-hero-image transform translate-y-[6%]"
      />
    </div>
  );
}
export default HeroImage