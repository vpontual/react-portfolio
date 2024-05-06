const Navigation = ({ currentSection, handleNavClick }) => {
  const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul>
            {navTitles.map((title) => (
              <li
                key={title}
                className={currentSection === title ? "active" : ""}
                onClick={() => handleNavClick(title)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
