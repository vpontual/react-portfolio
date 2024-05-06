import { NavLink } from "react-router-dom";
import "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
