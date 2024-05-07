import { NavLink } from "react-router-dom";
import "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul
        className="nav-links"
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          display: "flex",
        }}
      >
        <li className="nav-item" style={{ marginRight: "1rem" }}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: "1rem" }}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: "1rem" }}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: 0 }}>
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
