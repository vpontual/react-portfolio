import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="card" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title mb-4">Resume</h2>
          <p className="card-text mb-4">
            You can download my resume by clicking the button below:
          </p>
          <Link
            to="/documents/resume.txt"
            target="_blank"
            download
            className="btn btn-primary"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
