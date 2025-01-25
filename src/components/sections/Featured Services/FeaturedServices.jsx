import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSearch, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsHomepage } from '../../../store/designsSlice';
import './FeaturedServices.css';

export default function FeaturedServices({ isHomepage }) {
  const dispatch = useDispatch();
  const isHomepageState = useSelector((state) => state.designs.isHomepage);

  useEffect(() => {
    dispatch(setIsHomepage(isHomepage));
  }, [dispatch, isHomepage]);

  const features = [
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Custom Web Development',
      description:
        'Build modern, scalable, and responsive websites tailored to your needs, with cutting-edge technologies to give you an edge in the digital world.',
    },
    {
      icon: <FontAwesomeIcon icon={faSearch} />,
      title: 'SEO Optimization',
      description:
        'Boost your search engine rankings and drive organic traffic to your site with proven SEO strategies tailored to your goals.',
    },
    {
      icon: <FontAwesomeIcon icon={faBullhorn} />,
      title: 'Digital Marketing',
      description:
        'Expand your online reach with targeted campaigns, analytics-driven strategies, and effective social media management.',
    },
  ];

  return (
    <section className={isHomepageState ? 'featured' : 'featured-more'}>
      {/* //  <section className="featured"> */}
      <div className="featured-container">
        <h2>Our Services</h2>
        <p className="featured-subtitle">
          Unlock your full potential with our tailored services for businesses, creatives, and entrepreneurs.
        </p>
        <div className="featured-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}