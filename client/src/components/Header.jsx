// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
//       <nav>
//         <ul style={{ listStyleType: 'none', display: 'flex', gap: '1.5rem' }}>
//           <li>
//             <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/community" style={{ color: '#fff', textDecoration: 'none' }}>
//               Community
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" style={{ color: '#fff', textDecoration: 'none' }}>
//               Partners
//             </Link>
//           </li>
//           <li>
//             <Link to="community/events" style={{ color: '#fff', textDecoration: 'none' }}>
//               Events
//             </Link>
//           </li>
//           <li>
//             <Link to="/volunteer" style={{ color: '#fff', textDecoration: 'none' }}>
//               Volunteer
//             </Link>
//           </li>
//           <li>
//             <Link to="/requestToJoin" style={{ color: '#fff', textDecoration: 'none' }}>
//               Request to Join
//             </Link>
//           </li>
//           <li>
//             <Link to="/newsletter" style={{ color: '#fff', textDecoration: 'none' }}>
//               Newsletter
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function Header() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <header style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
//       <nav>
//         <ul style={{ listStyleType: 'none', display: 'flex', gap: '1.5rem', position: 'relative' }}>
//           <li><Link to="/" style={linkStyle}>Home</Link></li>
//           <li><Link to="/about" style={linkStyle}>About</Link></li>

//           <li
//             onMouseEnter={() => setShowDropdown(true)}
//             onMouseLeave={() => setShowDropdown(false)}
//             style={{ position: 'relative' }}
//           >
//             <span style={{ ...linkStyle, cursor: 'pointer' }}>Community</span>
//             {showDropdown && (
//               <ul style={dropdownStyle}>
//                 <li><Link to="/community" style={dropdownLinkStyle}>Overview</Link></li>
//                 <li><Link to="/community/insights" style={dropdownLinkStyle}>Insights</Link></li>
//                 <li><Link to="/community/news" style={dropdownLinkStyle}>News</Link></li>
//                 <li><Link to="/community/events" style={dropdownLinkStyle}>Events</Link></li>
//                 <li><Link to="/community/events/upcoming" style={dropdownLinkStyle}>Upcoming</Link></li>
//                 <li><Link to="/community/events/past" style={dropdownLinkStyle}>Past</Link></li>
//               </ul>
//             )}
//           </li>

//           <li><Link to="/partners" style={linkStyle}>Partners</Link></li>
//           <li><Link to="/volunteer" style={linkStyle}>Volunteer</Link></li>
//           <li><Link to="/requestToJoin" style={linkStyle}>Request to Join</Link></li>
//           <li><Link to="/newsletter" style={linkStyle}>Newsletter</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// const linkStyle = { color: '#fff', textDecoration: 'none' };

// const dropdownStyle = {
//   position: 'absolute',
//   top: '100%',
//   left: 0,
//   backgroundColor: '#444',
//   listStyle: 'none',
//   padding: '0.5rem 0',
//   margin: 0,
//   zIndex: 1000,
// };

// const dropdownLinkStyle = {
//   display: 'block',
//   padding: '0.5rem 1rem',
//   color: '#fff',
//   textDecoration: 'none',
//   whiteSpace: 'nowrap',
// };

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '1.5rem', position: 'relative' }}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>

          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            style={{ position: 'relative' }}
          >
            <span style={{ ...linkStyle, cursor: 'pointer' }}>Community</span>
            {showDropdown && (
              <ul style={dropdownStyle}>
                <li><Link to="/community" style={dropdownLinkStyle}>Overview</Link></li>
                <li><Link to="/community/insights" style={dropdownLinkStyle}>Insights</Link></li>
                <li><Link to="/community/news" style={dropdownLinkStyle}>News</Link></li>
                <li><Link to="/community/events" style={dropdownLinkStyle}>Events</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/partners" style={linkStyle}>Partners</Link></li>
          <li><Link to="/volunteer" style={linkStyle}>Volunteer</Link></li>
          <li><Link to="/requestToJoin" style={linkStyle}>Request to Join</Link></li>
          <li><Link to="/newsletter" style={linkStyle}>Newsletter</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const linkStyle = { color: '#fff', textDecoration: 'none' };

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#444',
  listStyle: 'none',
  padding: '0.5rem 0',
  margin: 0,
  zIndex: 1000,
};

const dropdownLinkStyle = {
  display: 'block',
  padding: '0.5rem 1rem',
  color: '#fff',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};