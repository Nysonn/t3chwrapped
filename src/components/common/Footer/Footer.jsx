import classes from './Footer.module.css';
import { 
  faCloud, 
  faMusic,
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={classes.contactItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={classes.footerSection}>
            <h4>Quick Links</h4>
            <ul className={classes.footerLinks}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={classes.footerSection}>
            <h4>Services</h4>
            <ul className={classes.footerLinks}>
              <li><a href="/web-development">Web Development</a></li>
              <li><a href="/digital-marketing">Digital Marketing</a></li>
              <li><a href="/seo">SEO Optimization</a></li>
              <li><a href="/consulting">Tech Consulting</a></li>
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.footerBottom}>
          <div className={classes.footerBottomContent}>
            <p>&copy; {currentYear} t3chwrapped. All Rights Reserved.</p>
            <div className={classes.footerBottomLinks}>
              <a href="/privacy">Privacy Policy</a>
              <span>|</span>
              <a href="/terms">Terms of Service</a>
              <span>|</span>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
