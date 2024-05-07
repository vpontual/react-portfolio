import Navigation from "../Navigation/Navigation";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#11111b",
    padding: "1rem",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "2rem",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "inherit",
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    transition: "background-color 0.3s ease",
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: "#f9e2af",
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>Vitor Pontual</h1>
      <Navigation
        navLinkStyle={navLinkStyle}
        activeNavLinkStyle={activeNavLinkStyle}
      />
    </header>
  );
};

export default Header;
