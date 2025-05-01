import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ padding: '2rem', backgroundColor: '#333', color: '#fff', marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>Pet Importation</h4>
          <p>Helping you navigate the process of importing your pet to Australia.</p>
        </div>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/community" style={{ color: '#fff', textDecoration: 'none' }}>Community</Link></li>
            <li><Link to="/partners" style={{ color: '#fff', textDecoration: 'none' }}>Partners</Link></li>
            <li><Link to="/events" style={{ color: '#fff', textDecoration: 'none' }}>Events</Link></li>
            <li><Link to="/volunteer" style={{ color: '#fff', textDecoration: 'none' }}>Volunteer</Link></li>
          </ul>
        </nav>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <p>&copy; 2025 Pet Importation. All rights reserved.</p>
      </div>
    </footer>
  );
}