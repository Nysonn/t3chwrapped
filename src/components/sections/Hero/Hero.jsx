import { Link } from 'react-router-dom';
import './Hero.css';
import HeroVideo from '../../../assets/images/hero-vid.mp4';
import PrimaryButton from '../../../components/common/Button/PrimaryButton.jsx';
import SecondaryButton from '../../../components/common/Button/SecondaryButton.jsx';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video 
        className="hero-background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-tagline">
            Bridging the gap between <span className="accent">Music</span> and <span className="accent">Technology</span>
          </h1>
          {/* <div className="hero-actions">
            <Link to="/designs" className="btn-primary">
              Explore Designs
            </Link>
            <Link to="/services" className="btn-secondary">
              Our Services
            </Link>
          </div> */}
           <div className="hero-actions">
            <PrimaryButton to="/designs">Explore Designs</PrimaryButton>
            <SecondaryButton to="/services">Our Services</SecondaryButton>
          </div>
        </div>
        <div className="hero-decorator">
          <div className="gradient-circle"></div>
          <div className="floating-shapes"></div>
        </div>
      </div>
    </section>
  );
}
