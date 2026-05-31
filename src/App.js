import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import NavbarSection from "./sections/NavbarSection";
import { Element } from "react-scroll";
import Snowfall from "react-snowfall";

function App() {
  return (
    <div className="App first">
      <Snowfall />
      <NavbarSection />
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
