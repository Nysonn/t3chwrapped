import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faSearch, 
  faBullhorn, 
  faLaptopCode, 
  faChartLine, 
  faRocket 
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsHomepage } from '../../../store/designsSlice';
import classes from './FeaturedServices.module.css';

export default function FeaturedServices({ isHomepage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHomepage(isHomepage));
  }, [dispatch, isHomepage]);

  const services = [
    {
      icon: faLaptopCode,
      title: 'Custom Web Development',
      description: 'Build modern, scalable websites with cutting-edge technologies.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO-friendly'],
    },
    {
      icon: faRocket,
      title: 'Digital Marketing',
      description: 'Expand your reach with data-driven marketing strategies.',
      features: ['Social Media', 'Content Strategy', 'Email Campaigns'],
    },
    {
      icon: faChartLine,
      title: 'Analytics & SEO',
      description: 'Boost your visibility and track your online performance.',
      features: ['Keyword Research', 'Traffic Analysis', 'Conversion Tracking'],
    }
  ];

  return (
    <section className={isHomepage ? classes.featured : classes.featuredMore}>
      <div className={classes.container}>
        <div className={classes.headerSection}>
          <h2 className={classes.title}>Our Services</h2>
          <p className={classes.subtitle}>
            Empowering your digital presence with cutting-edge solutions
          </p>
        </div>

        <div className={classes.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={classes.serviceCard}>
              <div className={classes.iconWrapper}>
                <FontAwesomeIcon icon={service.icon} className={classes.icon} />
              </div>
              <h3 className={classes.serviceTitle}>{service.title}</h3>
              <p className={classes.serviceDescription}>{service.description}</p>
              <ul className={classes.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={classes.featureItem}>
                    <span className={classes.featureDot}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={classes.learnMore}>Learn More</button>
            </div>
          ))}
        </div>

        <div className={classes.ctaSection}>
          <h3 className={classes.ctaTitle}>Ready to Transform Your Digital Presence?</h3>
          <p className={classes.ctaText}>Let's create something amazing together</p>
          <button className={classes.ctaButton}>Get Started</button>
        </div>
      </div>
    </section>
  );
}