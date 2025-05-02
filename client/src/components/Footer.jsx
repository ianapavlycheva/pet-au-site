import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4>Pet Importation</h4>
          <p>Helping you navigate the process of importing your pet to Australia.</p>
        </div>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/community/events">Events</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Pet Importation. All rights reserved.</p>
      </div>
    </footer>
  );
}