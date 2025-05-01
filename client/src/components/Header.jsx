import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '1.5rem' }}>
          <li>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/community" style={{ color: '#fff', textDecoration: 'none' }}>
              Community
            </Link>
          </li>
          <li>
            <Link to="/partners" style={{ color: '#fff', textDecoration: 'none' }}>
              Partners
            </Link>
          </li>
          <li>
            <Link to="/events" style={{ color: '#fff', textDecoration: 'none' }}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/volunteer" style={{ color: '#fff', textDecoration: 'none' }}>
              Volunteer
            </Link>
          </li>
          <li>
            <Link to="/request-to-join" style={{ color: '#fff', textDecoration: 'none' }}>
              Request to Join
            </Link>
          </li>
          <li>
            <Link to="/newsletter" style={{ color: '#fff', textDecoration: 'none' }}>
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}