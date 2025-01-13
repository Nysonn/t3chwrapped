import React, { useEffect } from 'react';
import DemoImage1 from '../../../src/assets/images/braddie.jpg';
import DemoImage2 from '../../../src/assets/images/brad-sings.jpg';
import DemoImage3 from '../../../src/assets/images/brandie-singer.jpg';
import './Designs.css';

const designs = [
  {
    id: 1,
    name: 'Artist Portfolio',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Perfect for showcasing your music and art.',
  },
  {
    id: 2,
    name: 'Music Studio',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Highlight your services and attract new clients.',
  },
  {
    id: 3,
    name: 'Record Label',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Promote your artists and your brand professionally.',
  },
];

export default function Designs() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(designs.map(() => 0));
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % designs[i].images.length)
      );
    }, 5000); // Interval for the transition

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset transition state after the transition is complete
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1500); // Same duration as the CSS transition

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  return (
    <section className="designs-section" id="templates">
      <div className="container">
        <h2 className="section-title">Popular Designs</h2>
        <div className="designs-grid">
          {designs.map((design, index) => (
            <div key={design.id} className="design-card" style={{ '--index': index }}>
              <div className="design-image-container">
                <div
                  className={`design-slideshow ${isTransitioning ? 'transitioning' : ''}`}
                  style={{
                    backgroundImage: `url(${design.images[currentImageIndex[index]]})`,
                  }}
                ></div>
                <div className="design-overlay">
                  <button className="customize-button">Customize</button>
                </div>
              </div>
              <h3 className="design-name">{design.name}</h3>
              <p className="design-description">{design.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
