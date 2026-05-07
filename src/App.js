import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import { Element } from "react-scroll";
import Snowfall from "react-snowfall";
import NavbarSection from "./sections/NavbarSection";

function App() {
  return (
    <div className="App first">
      <Snowfall className="snowflake" snowflakeCount={120} color={"gray"} />
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
