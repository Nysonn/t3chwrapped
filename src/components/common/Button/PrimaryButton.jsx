import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

export default function PrimaryButton({ to, children, onClick }) {
  return to ? (
    <Link to={to} className="btn-primary">
      {children}
    </Link>
  ) : (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  to: PropTypes.string, // URL for navigation (optional)
  children: PropTypes.node.isRequired, // Content inside the button
  onClick: PropTypes.func, // Click handler for button (optional)
};
