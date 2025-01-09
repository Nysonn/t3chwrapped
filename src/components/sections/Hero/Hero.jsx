import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Tech Journey, <span className="accent">Elevated</span>
          </h1>
          <p className="hero-subtitle">
            Explore professionally crafted web solutions tailored for modern tech enthusiasts and digital creators.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-primary">
              Browse Templates
            </Link>
            <Link to="/blog" className="btn-secondary">
              Tech Insights
            </Link>
            <Link to="/services" className="btn-outline">
              Custom Solutions
            </Link>
          </div>
        </div>
        <div className="hero-decorator">
          <div className="gradient-circle"></div>
          <div className="floating-shapes"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
