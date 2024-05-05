const Project = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      {/* <img src=`/public/images/{project.title}".jpg` alt={project.title} /> */}
      <a href={project.deployedLink}>Deployed App</a>
      <a href={project.githubLink}>GitHub Repository</a>
    </div>
  );
};

export default Project;
