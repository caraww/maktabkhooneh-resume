import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCards from "../components/SkillCards";
import "../components/SkillCard.css";
import UpIcon from "../components/UpIcon";
import { scroller } from "react-scroll";

class SkillSection extends Component {
  render() {
    const skillsSection = data.sections[1];
    return (
      <Fullpage className="third">
        <h3 className="title">{skillsSection.title}</h3>
        <div className="cards">
          <SkillCards />
        </div>
        <UpIcon
          onClick={() => {
            scroller.scrollTo("Section1", { duration: 800, smooth: true });
          }}
        />
      </Fullpage>
    );
  }
}

export default SkillSection;
