import profileImage from "../../images/whome.jpg";

const AboutMe = () => {
  return (
    <section className="aboutme d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src={profileImage}
              alt="VP Photo"
              className="img-fluid rounded-circle mb-4"
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 mb-4">About Me</h1>
            <p className="lead mb-4">
              Hello! Welcome to my about me section. I'm a passionate Product
              Manager with a love for all things self-hosting, AI/LLMs, and
              fullstack development!
            </p>
            <p className="mb-4">
              Check out my Portfolio to find out more about my latest passion
              projects. Feel free to reach out to me on my Contact page if you
              have any questions or would like to collaborate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
