import projectImage1 from "../images/project1.png";
import projectImage2 from "../images/project2.png";
import projectImage3 from "../images/project3.png";
import projectImage4 from "../images/project4.png";
import projectImage5 from "../images/project5.png";
import projectImage6 from "../images/project6.png";

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
    <div>
      <h3>{title}</h3>
      {projectImage && <img src={projectImage} alt={title} />}
      <a href={deployedLink}>Deployed App</a>
      <a href={githubLink}>GitHub Repository</a>
    </div>
  );
};

export default Project;
