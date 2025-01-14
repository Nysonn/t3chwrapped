import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

export default function SecondaryButton({ to, children, onClick }) {
    return to ? (
      <Link to={to} className="btn-secondary">
        {children}
      </Link>
    ) : (
      <button className="btn-secondary" onClick={onClick}>
        {children}
      </button>
    );
  }
  
  SecondaryButton.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };
  