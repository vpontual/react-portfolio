const Navigation = ({ currentSection, handleNavClick }) => {
  const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
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
    </nav>
  );
};

export default Navigation;
