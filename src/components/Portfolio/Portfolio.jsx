import Project from "./Project/Project";

const Portfolio = () => {
  const projects = [
    {
      title: "The Arlington Food Shelf",
      deployedLink: "https://arlingtonfoodshelf.com",
      githubLink:
        "https://github.com/SuperRonanCraft/bootcamp-Arlington-Food-Shelf",
    },
    {
      title: "Pontual Social",
      deployedLink: "https://pontualsocial.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "TimeSavor",
      deployedLink: "https://lovertab.github.io/timesavor/",
      githubLink: "https://github.com/Lovertab/timesavor",
    },
    {
      title: "TrustdNEWS",
      deployedLink: "https://www.trustdnews.com",
      githubLink: "https://github.com/vpontual",
    },
    {
      title: "README Generator",
      deployedLink: "https://github.com/vpontual/readme-generator",
      githubLink: "https://github.com/vpontual/readme-generator",
    },
    {
      title: "The Tech Blog",
      deployedLink: "https://tech-blog-o267.onrender.com/",
      githubLink: "https://github.com/vpontual/tech-blog",
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
