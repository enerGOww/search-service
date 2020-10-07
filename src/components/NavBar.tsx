import React from 'react';
import {navItem} from '../consts';
import {Link} from 'react-router-dom';

const NavBar: React.FC<{navItems: navItem[]}> = ({navItems}) => {
  const [active, setActive] = React.useState(0);

  return (
    <nav className='nav-bar'>
      {navItems.map((item, index) => (
        <Link
          to={item.linkTo}
          key={index}
          onClick={() => setActive(index)}
          style={{ textDecoration: 'none' }}
        >
          <div
            className={`nav-bar__item ${active === index ? 'nav-bar__item--active' : ''}`}
            key={index}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
