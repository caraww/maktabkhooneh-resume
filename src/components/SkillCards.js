import React, { Component } from "react";
import data from "../data.json";
import "../components/SkillCard.css";

class SkillCards extends Component {
  render() {
    const skills = data.sections[1];

    return (
      <div className="cards">
        {skills.items.map((each) => (
          <figure className="card">
            <img
              src={each.content.image}
              alt={each.content.title}
              width={160}
            />
            <figcaption className="subtitle">{each.content.title}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
}

export default SkillCards;
