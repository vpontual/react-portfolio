const Footer = () => {
  const footerStyle = {
    backgroundColor: "#11111b",
    padding: "1rem",
  };

  const linkStyle = {
    color: "inherit", // Inherit the text color from the parent
  };

  return (
    <footer style={footerStyle} className="text-center py-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://github.com/vpontual"
              className="text-decoration-none"
              style={linkStyle}
            >
              GitHub
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://linkedin.com/in/vitorpontual"
              className="text-decoration-none"
              style={linkStyle}
            >
              LinkedIn
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://linkedin.com/in/vitorpontual"
              className="text-decoration-none"
              style={linkStyle}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
