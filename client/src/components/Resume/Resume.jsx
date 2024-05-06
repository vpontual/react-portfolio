import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <Link to="/documents/resume.txt" target="_blank" download>
        Download Resume
      </Link>
    </section>
  );
};

export default Resume;
