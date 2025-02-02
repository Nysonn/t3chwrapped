import React from 'react';
import classes from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <section className={classes.heroSection}>
        <h1 className={classes.mainTitle}>
          Bridging Tech and Music
          <span className={classes.accent}>for a Better Tomorrow</span>
        </h1>
      </section>

      <section className={classes.missionSection}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.sectionTitle}>Our Mission</h2>
          <p className={classes.missionText}>
            We empower music professionals by leveraging cutting-edge technology to amplify their digital presence and streamline their operations. Our commitment is to provide innovative solutions that enable artists, producers, and industry leaders to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Updated Section: Our Vision Statement */}
      <section className={classes.visionSection}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.sectionTitle}>Our Vision</h2>
          <p className={classes.missionText}>
            We envision a world where technology and creativity seamlessly converge, empowering musicians and artists to reach their full potential. By fostering innovation and collaboration, we aim to revolutionize the music industry, making it more accessible, inclusive, and impactful for everyone.
          </p>
        </div>
      </section>

      <section className={classes.techSection}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.sectionTitle}>Our Expertise</h2>
          <div className={classes.techStack}>
            <div className={classes.techItem}>Software Maintenance</div>
            <div className={classes.techItem}>Web Applications</div>
            <div className={classes.techItem}>Mobile Apps</div>
            <div className={classes.techItem}>Analytics & SEO</div>
            <div className={classes.techItem}>Website Development</div>
          </div>
        </div>
      </section>

      <section className={classes.ctaSection}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.ctaTitle}>Ready to Amplify Your Music Career?</h2>
          <p className={classes.ctaText}>
            Let's collaborate to bring your vision to life with technology that works for you.
          </p>
          <div className={classes.ctaButtons}>
            <Link to="/services" className={classes.primaryButton}>
              Get Started
            </Link>
            <Link to="/news" className={classes.secondaryButton}>
              Explore Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;