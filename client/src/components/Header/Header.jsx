import Navigation from "../Navigation/Navigation";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#11111b",
    padding: "1rem",
  };

  return (
    <header style={headerStyle}>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Vitor Pontual</h1>
            </div>
            <div className="col-md-6">
              <Navigation />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
