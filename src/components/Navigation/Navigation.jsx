import { NavLink } from "react-router-dom";

// The Navigation component should render a list of NavLink components.
const Navigation = ({ navLinkStyle, activeNavLinkStyle }) => {
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
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: "1rem" }}>
          <NavLink
            to="/portfolio"
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: "1rem" }}>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item" style={{ marginRight: 0 }}>
          <NavLink
            to="/resume"
            style={({ isActive }) =>
              isActive ? activeNavLinkStyle : navLinkStyle
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
