import React from 'react';
import classes from './About.module.css';

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

      <section className={classes.servicesSection}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.sectionTitle}>What We Deliver</h2>
          <div className={classes.servicesGrid}>
            <div className={classes.serviceCard}>
              <div className={classes.serviceIcon}>🎸</div>
              <h3>Artist Websites</h3>
              <p>Professional platforms that showcase your work and engage fans effectively</p>
            </div>
            <div className={classes.serviceCard}>
              <div className={classes.serviceIcon}>💿</div>
              <h3>E-Commerce Solutions</h3>
              <p>Custom online stores for selling music, merchandise, and digital products</p>
            </div>
            <div className={classes.serviceCard}>
              <div className={classes.serviceIcon}>📣</div>
              <h3>Audience Growth</h3>
              <p>Strategic tools to expand your reach and boost fan interactions</p>
            </div>
            <div className={classes.serviceCard}>
              <div className={classes.serviceIcon}>🎭</div>
              <h3>Promotional Platforms</h3>
              <p>Dynamic solutions for events, releases, and collaboration opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.techSection}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.sectionTitle}>Our Expertise</h2>
          <div className={classes.techStack}>
            <div className={classes.techItem}>React</div>
            <div className={classes.techItem}>Node.js</div>
            <div className={classes.techItem}>PostgreSQL</div>
            <div className={classes.techItem}>JavaScript</div>
            <div className={classes.techItem}>HTML5</div>
            <div className={classes.techItem}>CSS3</div>
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
            <a href="/contact" className={classes.primaryButton}>
              Get Started
            </a>
            <a href="/blog" className={classes.secondaryButton}>
              Explore Our Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 