import Project from "./Project/Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "Project 2",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "Project 3",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "Project 4",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "Project 5",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "Project 6",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
