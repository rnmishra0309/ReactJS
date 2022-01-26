/* 
  const React = require("react")
  const ReactDOM = require("react-dom")
*/
// The new way of doing the above is:
import React from 'react';
import ReactDOM from "react-dom";

// Both are same:

//React JS  
ReactDOM.render(<h1 className='heading'>Intro to JSX</h1>, document.getElementById("intro-div"));

//Vanilla JS
var hello = document.createElement("h1")
hello.classList.add('heading')
hello.innerHTML = "Intro to JSX"
document.getElementById("intro-div").appendChild(hello)

// Exercise 1: to print JSX containing HTML that contains JSX:
var sports = ['Football', 'Cricket', 'Hockey'];

ReactDOM.render(
  <div id="favourite">
    <h3>Exercise 1: My Favourite Sports: </h3>
    <ul>
      <li> { sports[0] } </li>
      <li> { sports[1] } </li>
      <li> { sports[2] } </li>
    </ul>
  </div>, document.getElementById("exercise-one")
);

// Exercise 2: to print your favourite foods using JSX with inline styling:
var favourite_foods = ['Banana', 'Mango', 'Apple'];

const customStyle = {
  color: "black"
};

const customStyleBackground = {
  background: "yellow",
  textAlign: "center",
};

ReactDOM.render(
  <div id="favourite" style={customStyleBackground}>
    <h3>Exercise 2: My Favourite Foods: </h3>
    <ul id="list" style={customStyle}></ul>
  </div>, document.getElementById("exercise-two")
);

var ulist = document.getElementById("list");

for(let i=0; i<favourite_foods.length;i++){
  var element = document.createElement("li");
  element.innerHTML = favourite_foods[i];
  ulist.appendChild(element);
}

// Excercise 3: As the mouse pointer moves inside a created box,
// display the pointer location x and y coordinates.

const boxDimensions = {
  width: "500px",
  height: "300px",
  background: "lawngreen",
  border: "3px solid black"
};

function getMouseCoordinates(e){
  var location = "Coordinates are: (" + e.clientX + ", " + e.clientY + ").";
  document.getElementById('box').innerHTML = location;
  document.getElementById('bigbox').style.background = "rgb("+e.clientX/2+","+e.clientY/2+","+200 +")";
};

function removeCoordinates(){
  document.getElementById('box').innerHTML = "";
  document.getElementById('bigbox').style.background = "lawngreen";
};

ReactDOM.render(
  <div>
    <div id="bigbox" onMouseMove={(e) => getMouseCoordinates(e)} onMouseOut={removeCoordinates} style={boxDimensions}></div>
    <div id="box"></div>
  </div>,
  document.getElementById("exercise-three")
);