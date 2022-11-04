import React, { Component } from "react";
import LifeCycleSample, { Component } from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000", // black
  };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    return <div></div>;
  }
}

export default App;
