import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link
              to={{ pathname: "https://github.com/vpontual" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
          <div className="col-md-4">
            <Link
              to={{ pathname: "https://linkedin.com/in/vitorpontual" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
