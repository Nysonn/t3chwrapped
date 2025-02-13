import classes from './Footer.module.css';
import { 
  faCloud, 
  faMusic,
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerGrid}>
          {/* Company Info */}
          <div className={classes.footerSection}>
            <a href="/" className={classes.logo}>
              <div className={classes.logoWrapper}>
                <FontAwesomeIcon icon={faCloud} className={classes.logoCloud} />
                <FontAwesomeIcon icon={faMusic} className={classes.logoMusic} />
              </div>
              <span className={classes.logoText}>t3chwrapped</span>
            </a>
            <p>Bridging technology and music for a better tomorrow.</p>
            <div className={classes.contactInfo}>
              <div className={classes.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@t3chwrapped.com</span>
              </div>
              <div className={classes.contactItem}>
                <FontAwesomeIcon icon={faPhone} />
                <span>+(256) 559-766-05</span>
              </div>
              <div className={classes.contactItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={classes.footerSection}>
            <h4>Quick Links</h4>
            <ul className={classes.footerLinks}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/designs">Portfolio</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={classes.footerSection}>
            <h4>Services</h4>
            <ul className={classes.footerLinks}>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">Tech Consulting</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={classes.footerSection}>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and insights.</p>
            <form className={classes.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className={classes.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.footerBottom}>
          <div className={classes.footerBottomContent}>
            <p>&copy; {currentYear} t3chwrapped. All Rights Reserved.</p>
            <div className={classes.footerBottomLinks}>
              <Link to="/privacy">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms">Terms of Service</Link>
              <span>|</span>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
