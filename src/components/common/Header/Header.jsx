import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCloud, 
  faMusic, 
  faBars, 
  faTimes 
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

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

  //Open menu when hamburger button is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <div className="logo-wrapper">
            <FontAwesomeIcon icon={faCloud} className="logo-cloud" />
            <FontAwesomeIcon icon={faMusic} className="logo-music" />
          </div>
          <span className="logo-text">t3chwrapped</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Menu */}
        <div className={`nav-wrapper ${menuOpen ? 'show' : ''}`}>
          <nav className="nav-menu">
            <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>
              News
            </Link>
            <Link to="/designs" className={location.pathname === '/designs' ? 'active' : ''}>
              Designs
            </Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
            <Link to="/tools" className={location.pathname === '/tools' ? 'active' : ''}>
              Tools
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
