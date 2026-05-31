import React, { Component } from "react";
import "../sections/NavbarSection.css";

class ColorChange extends Component {
  state = {
    color: "black",
  };

  changeColor = () => {
    let newColor = "black";
    let lightColor = "#aaa";
    let darkcolor = "#828282";

    if (this.state.color === "black") {
      newColor = "rgb(124, 164, 131)";
      lightColor = "rgb(150, 200, 160)";
      darkcolor = "rgb(54, 110, 63)";
    } else if (this.state.color === "rgb(124, 164, 131)") {
      newColor = "rgb(149, 167, 181)";
      lightColor = "rgb(170, 200, 220)";
      darkcolor = "rgb(80, 106, 125)";
    } else if (this.state.color === "rgb(149, 167, 181)") {
      newColor = "rgb(200, 144, 144)";
      lightColor = "rgb(235, 195, 195)";
      darkcolor = "rgb(163, 100, 100)";
    }

    const title = document.querySelectorAll(".title");
    const subtitle = document.querySelectorAll(".subtitle");
    const content = document.querySelector(".content");
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");

    title.forEach((el) => {
      el.style.color = darkcolor;
    });
    subtitle.forEach((el) => {
      el.style.color = lightColor;
    });

    if (first) first.style.backgroundColor = newColor;
    if (second) second.style.backgroundColor = newColor;
    if (third) third.style.backgroundColor = newColor;
    if (content) content.style.color = lightColor;
    this.setState({ color: newColor });
  };

  render() {
    return (
      <div className="colorChange-wrapper">
        <button
          onClick={this.changeColor}
          className="colorChange subtitle nav-item"
        >
          Color Change
        </button>
      </div>
    );
  }
}

export default ColorChange;
