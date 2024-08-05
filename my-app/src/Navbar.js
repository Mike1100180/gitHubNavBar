import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">Mukesh</Link>
        <div className="navbar-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/end">End</Link>
          <Link className="nav-link" to="/info">Info</Link>
          <Link className="nav-link" to="/BioData">BioData</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
