import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
