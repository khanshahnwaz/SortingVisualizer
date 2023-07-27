import React, { Component } from "react";
// .. COMPONENTS .. //
import ArrayBar from "./Components/ArrayBar/ArrayBar.jsx";
import RangeSlider from "./Components/RangeSliders/RangeSlider.jsx";
// .. HELPER FUNCTIONS .. //
import { randomIntFromInterval } from "./HelperFunctions.js";
// .. ALGORITHMS .. //
import InsertionSort from "./SortingAlgorithms/InsertionSort/InsertionSort.js";
// .. STYLE .. //
import "./SortingVisualizer.css";
// .. SOUNDS .. //

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  // ##
      //        Initializing in state because:
      //         1. It might be changed later by the user.
      //         2. The change value must be re-rendered.
      // ## //
      array: [],
      animationSpeed: 400,
      numberOfArrayBars: 5,
      keyValue:null,
      keyBoxColor:'bg-gray-600'
    };

    this.generateNewArray = this.generateNewArray.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.onChangeArrayBarRangeSlider = this.onChangeArrayBarRangeSlider.bind(
      this
    );
    this.onChangeAnimationSpeedRangeSlider = this.onChangeAnimationSpeedRangeSlider.bind(
      this
    );
    
  }

  // ## This function generates the array before the page is rendere. ## //
  componentDidMount() {
    this.generateNewArray();
  }

  // ## This function generates new random array of size "numberOfArrayBars". ## //
   generateNewArray() {
    const array = [];
    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
      // ## Generates an element between 5 and 70, and pushes it into the array. ## //
      array.push(randomIntFromInterval(5, 70));
    }
    this.setState({ array: array });
    let bar= document.getElementsByClassName('color-bar');
    let barBottom= document.getElementsByClassName('bottom');

    for(let i=0;i<bar.length;i++){
      bar[i].style.backgroundColor='rgba(0, 109, 128,0.5)';
    }
    for(let i=0;i<barBottom.length;i++){
      barBottom[i].style.backgroundColor='rgba(0, 109, 128,0.5)';
      barBottom[i].style.boxshadow='5px 5px 50px 5px rgba(0, 109, 128,0.2)';
    }
  }

  // ******************************************************************************* //

  // ## Handles if the "Array Size" slider is changed. ## //
  onChangeArrayBarRangeSlider = (event, value) => {
    this.setState({ numberOfArrayBars: value });
    this.generateNewArray();
  };

  // ## Handles if the "Animation Speed" slider is changed. ## //
  onChangeAnimationSpeedRangeSlider = (event, value) => {
    this.setState({ animationSpeed: value });
  };

  // ******************************************************************************* //

  // ## Calls the InsertionSort component/function. ## //
  insertionSort = () => {
    InsertionSort(this.state.array, this.state.animationSpeed);
  };

  // ******************************************************************************* //

  render() {
    return (
      <div className="hidden md:block main-container">
        {/* --------------------- HEADER : 8% Height --------------------- */}
        {/* <Header /> */}
        <RangeSlider
          numberOfArrayBars={this.state.numberOfArrayBars}
          animationSpeed={this.state.animationSpeed}
          onChangeArrayBarRangeSlider={this.onChangeArrayBarRangeSlider}
          onChangeAnimationSpeedRangeSlider={
            this.onChangeAnimationSpeedRangeSlider

          }
          generateNewArray={this.generateNewArray}
          insertionSort={this.insertionSort}

        />

        {/* --------------------- BARS : 74% Height --------------------- */}
        <ArrayBar array={this.state.array} keyValue={this.state.keyValue} keyBoxColor={this.state.keyBoxColor} />




      </div>
    );
  }
}
