// var React = require("react");
// var ReactDOM = require("react-dom");

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>This is paragraph.</p>
//     </div>,
//   document.getElementById("root"));

// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello World!";
// document.getElementById("root").append(h1);

// // Create a react app from scratch
// import React from "react";
// import ReactDOM from "react-dom";

// // It should display a h1 heading
// ReactDOM.render(
//   <div>
//     <h1>My Favourite Food</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

const name = "Gam";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Create by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
