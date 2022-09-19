const Oscillator = require('./scripts/oscillator')
const osc = new Oscillator;

const Drag = require('./scripts/drag')
const drag = new Drag;

const Context = require('./scripts/context')
const context = new Context;
const audioCtx = context.makeContext()

const Knob = require('./scripts/knob')

// console.log(knob.knob)

document.addEventListener("DOMContentLoaded", () =>{
  drag.makeDraggable();

  osc1 = osc.init(audioCtx); //is this kosher (passing in arg to init)
  // console.log(osc1)
  drag.makeClassDraggable();
  drag.makeKnobDraggable();

  const knob = new Knob(osc1, audioCtx);

  knob.runKnob();


});
