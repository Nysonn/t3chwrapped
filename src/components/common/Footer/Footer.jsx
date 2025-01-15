import './Footer.css';
import { 
  faCloud, 
  faMusic
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Tagline */}
        <div className="footer-logo">
          <div className="logo-wrapper-footer">
            <FontAwesomeIcon icon={faCloud} className="logo-cloud-footer" />
            <FontAwesomeIcon icon={faMusic} className="logo-music-footer" />
          </div>
          <h2>t3chwrapped</h2>
          <p>Email: info@t3chwrapped.com</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} t3chwrapped. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
