import Image from "next/image";
import './hero.css';

const Hero = () => {
  
  return ( 
    <div className="hero">
    <div className="container">
    <h1 className="heading">Essential Vitamins</h1>
    <div className="grid">
      <div className="sectionOne">
        <p className="subtitle">Online Medical Supplies</p>
        <p className="description">Get Your Vitamins & Minerals</p>
        <button className="button">Explore</button>
      </div>
      <div className="sectionTwo">
        <Image
          src="/img/f2-1.png.png" 
          alt="Probiotics"
          width={256}
          height={256}
          className="rounded-lg"
        />
      </div>
      <div className="sectionThree">
  <div className="item">
    <h3 className="title">Vitamins</h3>
    <p className="description">Increased vitamins and minerals in your diet.</p>
  </div>
  <div className="item">
    <h3 className="title">Weight Loss</h3>
    <p className="description">Find scientifically proven solutions.</p>
  </div>
  <div className="item">
    <h3 className="title">Functional Foods</h3>
    <p className="description">From protein powders to baby formula.</p>
  </div>
</div>
</div>
  </div>
  </div>
   );
}
 
export default Hero;