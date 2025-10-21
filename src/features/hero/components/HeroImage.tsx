import logo from "../../public/portfolioLogo.png";
import Image from "next/image"
import './HeroImage.css';

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
}
export default HeroImage