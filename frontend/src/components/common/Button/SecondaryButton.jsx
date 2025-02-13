import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function SecondaryButton({ to, children, onClick, className }) {
  const buttonClass = `${styles.secondaryButton} ${className || ''}`;

  return to ? (
    <Link to={to} className={buttonClass}>
      <span className={styles.buttonContent}>{children}</span>
      <div className={styles.buttonBorder}></div>
    </Link>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles.buttonContent}>{children}</span>
      <div className={styles.buttonBorder}></div>
    </button>
  );
}

SecondaryButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
  