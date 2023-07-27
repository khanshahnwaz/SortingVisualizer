// ## This component includes all the 3D bars/containers and array values. ## //

import React from "react";
import "./ArrayBar.css";

export default function BarContainer (props) {
    return (
      <>
      <div id='keyBox' className={`py-2 px-4 rounded-md border-2 inline-block mt-2 border-gray-200 bg-gray-500 text-white`}>Key = <span id='keyValue'></span> </div>
      <div className="bar-container md:flex md:text-base ">
        
        <div className="shadow-2xl md:px-8 md:py-4 rounded-3xl md:mr-6 m-2 bg-gray-500 md:m-10 md:mt-20 text-left max-w-[40vw]">
          <ul className='list-disc md:px-5 p-2 text-xs md:text-base text-white '>
        <h4 className="md:text-lg font-bold  mb-2 underline">Instructions</h4>
        <li className="mb-1"><b>Hover over buttons to know their working.</b></li>
        <li className='mb-1'><b>Here, these bars represent the elements of the array.</b></li>
        
        <li className='mb-1'><b>Initially, bars are unsorted that represents unsorted array.</b></li>
        <li className="mb-1"><b>Understand different aspects of animation.</b></li>
        <ul className="list-disc list-inside">
          <li className="mb-1"><b>Key index is coloured <span className="text-red-500">RED</span></b></li>
          <li className="mb-1"><b>Key Box will contain value of Key Index.</b></li>
          <li className="mb-1"><b>Index comparing to key value is coloured <span className='text-blue-500'>BLUE.</span></b></li>
         
        <li className='mb-1'><b>Shifting indices will be coloured as <span className='text-yellow-500'>YELLOW.</span></b></li>
       
        <li className='mb-1'><b>After the algorithm is executed, sorted numbers will be coloured <span className='text-green-500'>GREEN.</span></b></li>
        </ul>
       
    <li className="mb-1"><b>Insertion sort is not an easy concept, so if you find this animation little bit confusing then try one more time.</b></li>
					{/* <li><b className='mb-1' >Unsorted numbers are coloured <span className='text-cyan-500'>AQUA.</span></b></li><br/>
            <li><b className='mb-1' >Two swapping indexes will be coloured <span className='text-yellow-500'>YELLOW.</span></b></li><br/>
           <li><b className='mb-1' >Two comparing indexes will be coloured <span className='text-blue-500'>BLUE.</span></b></li> <br/>
           <li><b className='mb-1'>Sorted numbers will be coloured <span className='text-green-500'>GREEN.</span></b></li><br/>
           <li><b className='mb-1'>Click on Sort Array button to start visualizer.</b></li><br/> */}

		  </ul>
					</div>
        {/* Create n bars, where n - size of the array */}
        {props.array.map((value, i) => (
          <div className="bar relative" key={i}>
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side right">
              <div
                className="color-bar right-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side left">
              <div
                className="color-bar left-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side front">
              <div
                className="color-bar front-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side back">
              <div
                className="color-bar back-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
          <p  className="boxValue absolute">{value}</p>
          </div>
        ))}
      </div>
      </>
    );
  }

