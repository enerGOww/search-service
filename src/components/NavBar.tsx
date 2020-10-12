import React from 'react';
import { Link } from 'react-router-dom';
import { navItem } from '../types';

const NavBar: React.FC<{navItems: navItem[]}> = ({ navItems }) => {
  const [active, setActive] = React.useState(window.location.pathname);

  return (
    <nav className="nav-bar">
      {navItems.map((item) => (
        <Link
          to={item.linkTo}
          key={item.linkTo}
          onClick={() => setActive(item.linkTo)}
          style={{ textDecoration: 'none' }}
        >
          <div
            className={`nav-bar__item ${item.linkTo === active ? 'nav-bar__item--active' : ''}`}
            key={item.linkTo}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
