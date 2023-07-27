// ## This component includes the buttons for sorting algorithms and also generating new array. ## //

import React, { Component } from "react";
import "./ButtonsBar.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
export default class ButtonsBar extends Component {
  render() {
    return (

      <div className="buttons-bar">
        <Tippy content='Click to generate new array.' interactive >
        <button className="button bg-[#001E20] text-gray-100" onClick={() => this.props.generateNewArray()} id="reset">
          Generate New Array
        </button></Tippy>
        <Tippy content='Click to start animation.' interactive>
        <button
          id="insertionSortButton"
          onClick={() => this.props.insertionSort()}
          className="buttonStyle1 button bg-[#001E25] p-2 w-max  text-gray-100"
        >
          Sort Array
        </button>
        </Tippy>
      </div>
    );
  }
}
