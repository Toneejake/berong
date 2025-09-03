import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '1rem' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/kids" style={{ color: 'white', textDecoration: 'none' }}>Kids Zone</Link></li>
        <li><Link to="/adults" style={{ color: 'white', textDecoration: 'none' }}>Adults Zone</Link></li>
        <li><Link to="/bfp" style={{ color: 'white', textDecoration: 'none' }}>BFP Zone</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
