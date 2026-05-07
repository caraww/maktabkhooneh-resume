import React, { Component } from "react";
import { scroller } from "react-scroll";
import "./NavbarSection.css";
class NavbarSection extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="colorChange subtitle">Color Change</div>

        <div className="navbar">
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
      </div>
    );
  }
}
export default NavbarSection;
