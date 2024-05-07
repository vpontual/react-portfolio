import projectImage1 from "../../../images/project1.png";
import projectImage2 from "../../../images/project2.png";
import projectImage3 from "../../../images/project3.png";
import projectImage4 from "../../../images/project4.png";
import projectImage5 from "../../../images/project5.png";
import projectImage6 from "../../../images/project6.png";

const Project = ({ project }) => {
  const { title, deployedLink, githubLink } = project;
  const projectImage = {
    "The Arlington Food Shelf": projectImage1,
    "Pontual Social": projectImage2,
    TimeSavor: projectImage3,
    TrustdNEWS: projectImage4,
    "README Generator": projectImage5,
    "The Tech Blog": projectImage6,
  }[title];

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="card padding"
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "var(--bs-card-border-radius)",
          padding: 0,
          margin: "1rem",
        }}
      >
        {projectImage && (
          <img
            src={projectImage}
            alt={title}
            className="card-img-top"
            style={{
              height: "400px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        )}
        <div
          className="card-body"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            padding: "var(--bs-card-spacer-y) var(--bs-card-spacer-x)",
          }}
        >
          <h3 className="card-title text-center" style={{ marginTop: "0" }}>
            {title}
          </h3>
          <div className="mx-auto" style={{ marginTop: "auto" }}>
            <a href={deployedLink} className="btn btn-primary mx-3">
              Deployed App
            </a>
            <a href={githubLink} className="btn btn-secondary mx-3">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
