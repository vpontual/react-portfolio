const Footer = () => {
  const footerStyle = {
    backgroundColor: "#11111b",
    padding: "1rem",
  };

  return (
    <footer style={footerStyle} className="text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://github.com/vpontual"
              className="text-decoration-none"
            >
              GitHub
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://linkedin.com/in/vitorpontual"
              className="text-decoration-none"
            >
              LinkedIn
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://linkedin.com/in/vitorpontual"
              className="text-decoration-none"
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
