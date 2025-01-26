import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function PrimaryButton({ to, children, onClick, className }) {
  const buttonClass = `${styles.primaryButton} ${className || ''}`;
  
  return to ? (
    <Link to={to} className={buttonClass}>
      <span className={styles.buttonContent}>{children}</span>
      <div className={styles.buttonGlow}></div>
    </Link>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles.buttonContent}>{children}</span>
      <div className={styles.buttonGlow}></div>
    </button>
  );
}

PrimaryButton.propTypes = {
  to: PropTypes.string, // URL for navigation (optional)
  children: PropTypes.node.isRequired, // Content inside the button
  onClick: PropTypes.func, // Click handler for button (optional)
  className: PropTypes.string,
};
