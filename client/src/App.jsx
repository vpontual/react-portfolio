import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [currentSection, setCurrentSection] = useState("AboutMe");

  const renderSection = () => {
    switch (currentSection) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header />
      <Navigation
        currentSection={currentSection}
        handleNavClick={handleNavClick}
      />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;
