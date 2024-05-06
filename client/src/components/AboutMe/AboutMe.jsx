import profileImage from "../../images/whome.jpg";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2>About Me</h2>
      <img
        src={profileImage}
        alt="VP Photo"
        style={{ width: "200px", height: "auto" }}
      />
      <p>Hello! Welcome to my about me section</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iusto
        autem ullam quibusdam quas earum dolorem odio aliquam, cupiditate, natus
        temporibus molestiae illo, reiciendis corporis vero iste expedita nulla
        labore.
      </p>
    </section>
  );
};

export default AboutMe;
