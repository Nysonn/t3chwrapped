import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import {
  setCurrentImageIndex,
  setShowTooltip,
  setTooltipTimeout,
  setIsHomepage,
} from '../../store/designsSlice';
import DemoImage1 from '../../../src/assets/images/braddie.jpg';
import DemoImage2 from '../../../src/assets/images/brad-sings.jpg';
import DemoImage3 from '../../../src/assets/images/brandie-singer.jpg';
import PrimaryButton from '../../../src/components/common/Button/PrimaryButton.jsx';
import FAQSection from '../../components/sections/FAQ/Faq.jsx';
import './Designs.css';

const allDesigns = [
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
  {
    id: 4,
    name: 'Record Producer',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Perfect for music producers.',
  },
  {
    id: 5,
    name: 'DJ',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Highlight your tracks and attract new gigs.',
  },
  {
    id: 6,
    name: 'Songwriter',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Promote your songwriting skills and get discovered.',
  },
  {
    id: 7,
    name: 'Event Organizer',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Showcase your events and attract new bookings.',
  },
  {
    id: 8,
    name: 'DJ',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Highlight your tracks and attract new gigs.',
  },
  {
    id: 9,
    name: 'Songwriter',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Promote your songwriting skills and get discovered.',
  },
];

export default function Designs({ isHomepage = false }) {
  const dispatch = useDispatch();
  const { showTooltip, tooltipTimeout } = useSelector((state) => state.designs);

  const designsToShow = isHomepage ? allDesigns.slice(0, 6) : allDesigns;

  const [localIndexes, setLocalIndexes] = useState(new Array(designsToShow.length).fill(0));

  // Sync isHomepage state with Redux
  useEffect(() => {
    dispatch(setIsHomepage(isHomepage));
  }, [dispatch, isHomepage]);

  // Automatic image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setLocalIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % designsToShow[i].images.length)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [designsToShow]);

  // Update Redux with current slideshow indexes
  useEffect(() => {
    dispatch(setCurrentImageIndex(localIndexes));
  }, [dispatch, localIndexes]);

  const handleMouseEnter = (index) => {
    const timeout = setTimeout(() => {
      dispatch(setShowTooltip(index));
    }, 1000);
    dispatch(setTooltipTimeout(timeout));
  };

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimeout);
    dispatch(setShowTooltip(null));
  };

  return (
    <section className={isHomepage ? 'designs-section' : 'designs-section-more'} id="templates">
      <div className="container">
        <h2 className="section-title">Popular Designs</h2>
        <div className="designs-grid">
          {designsToShow.map((design, index) => (
            <div
              key={design.id}
              className="design-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="design-image-container">
                <div
                  className="design-slideshow"
                  style={{ backgroundImage: `url(${design.images[localIndexes[index]]})` }}
                ></div>
                <div className="design-overlay">
                  <button className="play-button" aria-label="Press play to customize">
                    <AiOutlinePlayCircle size={40} />
                  </button>
                  {showTooltip === index && (
                    <div className="tooltip">Press play to customize</div>
                  )}
                </div>
              </div>
              <h3 className="design-name">{design.name}</h3>
              <p className="design-description">{design.description}</p>
            </div>
          ))}
        </div>
        {isHomepage && (
          <div className="see-more-container">
            <PrimaryButton to="/designs">See more</PrimaryButton>
          </div>
        )}
        {!isHomepage && <FAQSection />}
      </div>
    </section>
  );
}
