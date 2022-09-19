const Oscillator = require('./scripts/oscillator')
const osc = new Oscillator;

const Drag = require('./scripts/drag')
const drag = new Drag;

const Context = require('./scripts/context')
const context = new Context;
const audioCtx = context.makeContext()

const Knob = require('./scripts/knob')
const knob = new Knob;


document.addEventListener("DOMContentLoaded", () =>{
  drag.makeDraggable();
  osc.test();

  osc.init(audioCtx); //is this kosher (passing in arg to init)
  drag.makeClassDraggable();
  drag.makeKnobDraggable();

  knob.runKnob();



});
