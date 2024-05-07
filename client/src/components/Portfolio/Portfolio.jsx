import Project from "./Project/Project";

const Portfolio = () => {
  const projects = [
    {
      title: "The Arlington Food Shelf",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "Pontual Social",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "TimeSavor",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "TrustdNEWS",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "README Generator",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "The Tech Blog",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
  ];

  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
