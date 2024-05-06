import projectImage1 from "./assets/project1.jpg";
import projectImage2 from "./assets/project2.jpg";
import projectImage3 from "./assets/project3.jpg";
import projectImage4 from "./assets/project4.jpg";
import projectImage5 from "./assets/project5.jpg";
import projectImage6 from "./assets/project6.jpg";

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
