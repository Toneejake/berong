import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1rem 2rem', 
      backgroundColor: '#2c3e50', 
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>SafeScape</Link>
        </div>
        <ul style={{ 
          listStyleType: 'none', 
          margin: 0, 
          padding: 0, 
          display: 'flex', 
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <li>
            <Link 
              to="/" 
              style={{ 
                color: '#ecf0f1', 
                textDecoration: 'none', 
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/kids" 
              style={{ 
                color: '#e74c3c', 
                textDecoration: 'none', 
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Kids Zone
            </Link>
          </li>
          <li>
            <Link 
              to="/adults" 
              style={{ 
                color: '#3498db', 
                textDecoration: 'none', 
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Adults Zone
            </Link>
          </li>
          <li>
            <Link 
              to="/bfp" 
              style={{ 
                color: '#2ecc71', 
                textDecoration: 'none', 
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#27ae60'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              BFP Zone
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
