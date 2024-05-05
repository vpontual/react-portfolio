const Project = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <img src="path/to/project/image.jpg" alt={project.title} />
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default Project;
