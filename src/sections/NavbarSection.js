import React from "react";
import { scroller } from "react-scroll";
import "./NavbarSection.css";
import ColorChange from "../components/ColorChange";
class NavbarSection extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ColorChange />
        <div
          className="nav-item subtitle"
          onClick={() =>
            scroller.scrollTo("Section2", { duration: 800, smooth: true })
          }
        >
          About
        </div>

        <div
          className="nav-item subtitle"
          onClick={() =>
            scroller.scrollTo("Section3", { duration: 800, smooth: true })
          }
        >
          Skills
        </div>
      </div>
    );
  }
}

export default NavbarSection;
