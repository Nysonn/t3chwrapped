import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline */}
        <div className="footer-logo">
          <span className="logo-text">t3chwrapped</span>
          <p>Innovating at the intersection of technology and music.</p>
          <p className="footer-email">Email: <a href="mailto:info@t3chwrapped.com">info@t3chwrapped.com</a></p> {/* Add company email */}
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="/news">News</a></li>
              <li><a href="/designs">Designs</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/tools">Tools</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Newsletter Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          {/* Newsletter */}
          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form action="submit-newsletter" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} t3chwrapped. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
