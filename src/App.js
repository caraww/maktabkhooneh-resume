import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import { Element } from "react-scroll";

import "./App.css";
import "./components/SkillCard.css";

function App() {
  return (
    <div className="App">
      <div className="navigation"></div>
      <Element name="Section1">
        <TitlesAndIcons />
      </Element>
      <Element name="Section2">
        <AboutSection />
      </Element>
      <Element name="Section3">
        <SkillSection />
      </Element>
    </div>
  );
}

export default App;
