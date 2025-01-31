import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faChartLine, 
  faTools
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'; // ✅ Added useState here
import { setIsHomepage } from '../../../store/designsSlice';
import classes from './FeaturedServices.module.css';
import SecondaryButton from '../../common/Button/SecondaryButton';
import ScheduleCallModal from '../../common/ScheduleCall/ScheduleCallModal';

export default function FeaturedServices({ isHomepage }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    dispatch(setIsHomepage(isHomepage));
  }, [dispatch, isHomepage]);

  const services = [
    {
      icon: faLaptopCode,
      title: 'Custom Web Development',
      description: 'Build modern, scalable websites with cutting-edge technologies.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO-friendly', 'Cross-Browser Compatibility', 'Custom UI/UX Design'],
    }, 
    {
      icon: faTools,
      title: 'Artist Website Maintenance',
      description: 'Ensure your artist website remains secure, up-to-date, and fully functional.',
      features: ['Regular Updates', 'Security Enhancements', 'Bug Fixes & Support', 'Backup & Recovery', 'Content Updates'],
    },
    {
      icon: faChartLine,
      title: 'Analytics & SEO',
      description: 'Boost your online visibility and track your website’s performance with data-driven insights.',
      features: ['Keyword Research', 'Traffic Analysis', 'Conversion Tracking', 'On-Page & Off-Page SEO', 'Competitor Analysis'],
    }
  ];  

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  return (
    <section className={classes.featured}>
      <div className={isHomepage ? classes.container : classes.containerMore}>
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
              <SecondaryButton onClick={() => openModal(service)}>Schedule a Call</SecondaryButton>
            </div>
          ))}
        </div>

        {!isHomepage && (
          <div className={classes.ctaSection}>
            <h3 className={classes.ctaTitle}>Ready to Transform Your Digital Presence?</h3>
            <p className={classes.ctaText}>Let's create something amazing together</p>
            <button className={classes.ctaButton}>Get Started</button>
          </div>
        )}
      </div>

      {/* Modal Component */}
      {modalIsOpen && (
        <ScheduleCallModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          service={selectedService}
        />
      )}
    </section>
  );
}
