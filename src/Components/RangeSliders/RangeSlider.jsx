// ## This component includes the containers of range sliders. ## //

import React, { Component } from "react";
import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider.jsx";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider.jsx";
import ButtonsBar from "../ButtonsBar/ButtonsBar.jsx";

import "./RangeSlider.css";

export default class RangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfArrayBars: this.props.numberOfArrayBars,
      animationSpeed: this.props.animationSpeed,
    };
  }

  render() {
    return (
      <div id="range-slider">
        <div className="column">
          <ArrayBarRangeSlider
            numberOfArrayBars={this.state.numberOfArrayBars}
            onChangeArrayBarRangeSlider={this.props.onChangeArrayBarRangeSlider}
          />
        </div>
        <div className="column"><ButtonsBar
          generateNewArray={this.props.generateNewArray}
          insertionSort={this.props.insertionSort}
        /></div>
        <div className="column">
          <AnimationSpeedRangeSlider
            animationSpeed={this.state.animationSpeed}
            onChangeAnimationSpeedRangeSlider={
              this.props.onChangeAnimationSpeedRangeSlider
            }
          />
        </div>
      </div>
    );
  }
}
