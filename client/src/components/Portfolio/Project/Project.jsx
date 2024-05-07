import projectImage1 from "../../../images/project1.png";
import projectImage2 from "../../../images/project2.png";
import projectImage3 from "../../../images/project3.png";
import projectImage4 from "../../../images/project4.png";
import projectImage5 from "../../../images/project5.png";
import projectImage6 from "../../../images/project6.png";
import "./Project.module.css";

const Project = ({ project }) => {
  const { title, deployedLink, githubLink } = project;
  const projectImage = {
    "Project 1": projectImage1,
    "Project 2": projectImage2,
    "Project 3": projectImage3,
    "Project 4": projectImage4,
    "Project 5": projectImage5,
    "Project 6": projectImage6,
  }[title];

  return (
    <div className="col-md-4">
      <div className="card">
        {projectImage && (
          <img
            src={projectImage}
            alt={title}
            className="card-img-top"
            style={{ width: "100%" }}
          />
        )}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <a href={deployedLink} className="btn btn-primary">
            Deployed App
          </a>
          <a href={githubLink} className="btn btn-secondary">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
