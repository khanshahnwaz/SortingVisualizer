// ## This component includes a range slider for changing Array Size. ## //

import React, { Component } from "react";
import { Slider, withStyles } from "@material-ui/core";
import "./ArrayBarRangeSlider.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const ArrayBarSlider = withStyles({
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

export default class ArrayBarRangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfArrayBars: this.props.numberOfArrayBars,
    };
  }
  render() {
    return (
      <Tippy content='Slide to change number of bars.' interactive>
      <div className="range-slider-container bg-[#001E25]">
        <p id="text-array-size">Array Size</p>
        <ArrayBarSlider
          id="arrayBarSlider"
          min={2}
          max={14}
          step={1}
          defaultValue={this.state.numberOfArrayBars}
          valueLabelDisplay="auto"
          marks
          onChangeCommitted={this.props.onChangeArrayBarRangeSlider}
        />
      </div>
      </Tippy>
    );
  }
}
