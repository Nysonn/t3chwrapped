import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineEye, AiOutlineStar } from 'react-icons/ai';
import { FiFilter, FiArrowRight } from 'react-icons/fi';
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
import classes from './Designs.module.css';

const categories = [
  "All Templates", "Artist Portfolio", "Music Studio", "Record Label", 
  "Producer", "Band", "DJ", "Event"
];

const allDesigns = [
  {
    id: 1,
    name: 'Artist Portfolio Pro',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Perfect for showcasing your music and art with a modern touch.',
    category: 'Artist Portfolio',
    likes: 234,
    views: '1.2k',
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    name: 'Music Studio',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Highlight your services and attract new clients.',
    category: 'Music Studio',
    likes: 180,
    views: '0.9k',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Record Label',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Promote your artists and your brand professionally.',
    category: 'Record Label',
    likes: 150,
    views: '0.8k',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Record Producer',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Perfect for music producers.',
    category: 'Producer',
    likes: 120,
    views: '0.7k',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'DJ',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Highlight your tracks and attract new gigs.',
    category: 'DJ',
    likes: 100,
    views: '0.6k',
    rating: 4.4,
  },
  {
    id: 6,
    name: 'Songwriter',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Promote your songwriting skills and get discovered.',
    category: 'Band',
    likes: 90,
    views: '0.5k',
    rating: 4.3,
  },
  {
    id: 7,
    name: 'Event Organizer',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Showcase your events and attract new bookings.',
    category: 'Event',
    likes: 80,
    views: '0.4k',
    rating: 4.2,
  },
  {
    id: 8,
    name: 'DJ Pro',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Highlight your tracks and attract new gigs.',
    category: 'DJ',
    likes: 70,
    views: '0.3k',
    rating: 4.1,
  },
  {
    id: 9,
    name: 'Band Portfolio',
    images: [DemoImage1, DemoImage2, DemoImage3],
    description: 'Promote your band and connect with fans.',
    category: 'Band',
    likes: 60,
    views: '0.2k',
    rating: 4.0,
  },
];

export default function Designs() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All Templates");
  const [filteredDesigns, setFilteredDesigns] = useState(allDesigns);
  const [localIndexes, setLocalIndexes] = useState({});
  const [hoveredDesign, setHoveredDesign] = useState(null);
  const tooltipTimeout = useSelector((state) => state.designs.tooltipTimeout);
  const showTooltip = useSelector((state) => state.designs.showTooltip);
  const isHomepage = useSelector((state) => state.designs.isHomepage);

  useEffect(() => {
    // Set isHomepage based on the current path
    const isHome = location.pathname === '/';
    dispatch(setIsHomepage(isHome));
  }, [location, dispatch]);

  useEffect(() => {
    const newIndexes = {};
    allDesigns.forEach((design) => {
      newIndexes[design.id] = 0;
    });
    setLocalIndexes(newIndexes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalIndexes((prev) => {
        const newIndexes = { ...prev };
        Object.keys(newIndexes).forEach((id) => {
          newIndexes[id] = (newIndexes[id] + 1) % 3;
        });
        return newIndexes;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filtered = [];
    if (activeCategory === "All Templates") {
      filtered = allDesigns;
    } else {
      filtered = allDesigns.filter(design => design.category === activeCategory);
    }
    
    // If on homepage, only show first 6 designs
    if (isHomepage) {
      filtered = filtered.slice(0, 6);
    }
    
    setFilteredDesigns(filtered);
  }, [activeCategory, isHomepage]);

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
    <section className={classes.designsSection}>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.title}>Popular Designs</h1>
          <p className={classes.subtitle}>
            Professionally crafted designs for the modern music industry
          </p>
        </header>

            <div className={classes.filterSection}>
            <div className={classes.filterHeader}>
              <div className={classes.filterIcon}>
                <FiFilter />
                <span>Filter Templates</span>
              </div>
              <div className={classes.resultsCount}>
                {isHomepage 
                  ? `Showing 6 of ${allDesigns.length} templates` 
                  : `${filteredDesigns.length} templates found`
                }
              </div>
            </div>
            <div className={classes.categoryTabs}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${classes.categoryTab} ${
                    activeCategory === category ? classes.activeTab : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  <span className={classes.categoryCount}>
                    {category === "All Templates" 
                      ? allDesigns.length 
                      : allDesigns.filter(d => d.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

        <div className={classes.designsGrid}>
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className={`${classes.designCard} ${design.featured ? classes.featuredCard : ''}`}
              onMouseEnter={() => setHoveredDesign(design.id)}
              onMouseLeave={() => setHoveredDesign(null)}
            >
              {design.featured && (
                <div className={classes.featuredBadge}>
                  <AiOutlineStar /> Featured
                </div>
              )}
              <div className={classes.designImageContainer}>
                <div
                  className={classes.designSlideshow}
                  style={{ backgroundImage: `url(${design.images[localIndexes[design.id]]})` }}
                />
                <div className={`${classes.designOverlay} ${hoveredDesign === design.id ? classes.showOverlay : ''}`}>
                  <button className={classes.customizeButton}>
                    <AiOutlinePlayCircle />
                    <span>Customize Template</span>
                    <FiArrowRight />
                  </button>
                  {showTooltip === design.id && (
                    <div className={`${classes.tooltip} ${classes.show}`}>
                      <div className={classes.tooltipContent}>
                        <span className={classes.tooltipIcon}>
                          <AiOutlinePlayCircle />
                        </span>
                        Click to <span className={classes.tooltipHighlight}>customize</span> this template
                      </div>
                    </div>
                  )}
                </div>
                <div className={classes.stats}>
                  <span className={classes.rating}>
                    <AiOutlineStar /> {design.rating}
                  </span>
                  <span><AiOutlineHeart /> {design.likes}</span>
                  <span><AiOutlineEye /> {design.views}</span>
                </div>
              </div>
              <div className={classes.designInfo}>
                <div className={classes.designHeader}>
                  <h3>{design.name}</h3>
                  <span className={classes.categoryTag}>{design.category}</span>
                </div>
                <p>{design.description}</p>
                <div className={classes.designActions}>
                  <button className={classes.previewButton}>Live Preview</button>
                  <button className={classes.detailsButton}>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHomepage && (
          <div className={classes.seeMoreContainer}>
            <PrimaryButton to="/designs" className={classes.exploreButton}>
              Explore All Templates <FiArrowRight />
            </PrimaryButton>
          </div>
        )}
        
        {!isHomepage && <FAQSection />}
      </div>
    </section>
  );
}
