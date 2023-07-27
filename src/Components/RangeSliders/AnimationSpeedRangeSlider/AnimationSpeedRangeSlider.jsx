// ## This component includes a range slider for changing Animation Speed. ## //

import React, { Component } from "react";
import { Slider, withStyles } from "@material-ui/core";
import "./AnimationSpeedRangeSlider.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const AnimationSpeedSlider = withStyles({
  root: {
    color: "gray",
    inlineSize: "60%",
    padding: 10,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

export default class AnimationSpeedRangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationSpeed: this.props.animationSpeed,
    };
  }

  render() {
    return (
      <Tippy content='Slide to control speed of animation.' interactive>
      <div className="range-slider-container bg-[#001E25]">
        <p id="text-animation-speed">Delay (ms)</p>
        <AnimationSpeedSlider
          id="animationSpeedSlider"
          min={10}
          max={200}
          defaultValue={this.state.animationSpeed}
          valueLabelDisplay="auto"
          onChangeCommitted={this.props.onChangeAnimationSpeedRangeSlider}
        />
      </div>
      </Tippy>
    );
  }
}
