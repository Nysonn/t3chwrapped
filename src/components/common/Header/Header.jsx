import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCloud, 
  faMusic, 
  faBars, 
  faTimes 
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect with a small delay for smoother transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Open menu when hamburger button is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo Section */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <FontAwesomeIcon icon={faCloud} className={styles.logoCloud} />
            <FontAwesomeIcon icon={faMusic} className={styles.logoMusic} />
          </div>
          <span className={styles.logoText}>t3chwrapped</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Menu */}
        <div className={`${styles.navWrapper} ${menuOpen ? styles.show : ''}`}>
          <nav className={styles.navMenu}>
            <Link to="/news" className={location.pathname.startsWith('/news') ? styles.active : ''}>
              News
            </Link>
            <Link to="/designs" className={location.pathname.startsWith('/designs') ? styles.active : ''}>
              Designs
            </Link>
            <Link to="/services" className={location.pathname.startsWith('/services') ? styles.active : ''}>
              Services
            </Link>
            <Link to="/about" className={location.pathname.startsWith('/about') ? styles.active : ''}>
              About
            </Link>
            <Link to="/contact" className={location.pathname.startsWith('/contact') ? styles.active : ''}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}