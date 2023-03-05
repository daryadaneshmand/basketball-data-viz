import entry from "./src/entry";

export default entry;


npm install scrollama intersection-observer --save

import scrollama from "scrollama"; // or...
const scrollama = require("scrollama");

// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => {
    // { element, index, direction }
  })
  .onStepExit((response) => {
    // { element, 1, down }
  });



// REPLACING DRAGON IMAGE

