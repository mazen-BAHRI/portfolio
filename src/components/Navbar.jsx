import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => 
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}