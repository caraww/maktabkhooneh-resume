import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { scroller } from "react-scroll";
import DownIcon from "../components/DownIcon";

class TitlesAndIcons extends Component {
  render() {
    return (
      <Fullpage className="first">
        <h1 className="title">{data.title}</h1>
        <h2 className="subtitle">{data.subtitle}</h2>

        <div className="icons">
          <SocialIcon className="icon" url={data.links.github} />
          <SocialIcon className="icon" url={data.links.telegram} />
          <SocialIcon className="icon" url={data.links.linkedin} />
        </div>
        <DownIcon
          onClick={() => {
            scroller.scrollTo("Section3", { duration: 800, smooth: true });
          }}
        />
      </Fullpage>
    );
  }
}

export default TitlesAndIcons;
