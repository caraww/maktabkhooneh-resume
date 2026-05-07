import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second">
        <h3 className="title">{data.sections[0].title}</h3>
        <p className="content">{data.sections[0].items[0].content}</p>
      </Fullpage>
    );
  }
}

export default AboutSection;
