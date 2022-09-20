const Oscillator = require('./scripts/oscillator')
let osc1 = new Oscillator;
let osc2 = new Oscillator;
let osc3 = new Oscillator;
let osc4 = new Oscillator;

const Drag = require('./scripts/drag')
const drag = new Drag;

const Context = require('./scripts/context')
const context = new Context;
const audioCtx = context.makeContext()

const Knob = require('./scripts/knob')

document.addEventListener("DOMContentLoaded", () =>{

  drag.makeDraggable();

  osc1 = osc1.init(audioCtx, 1); //is this kosher (passing in arg to init)
  osc2 = osc2.init(audioCtx, 2);
  osc3 = osc3.init(audioCtx, 3);
  osc4 = osc4.init(audioCtx, 4);

  drag.makeClassDraggable();
  // drag.makeKnobDraggable();
  drag.makeVcoDraggable();

  const knob1 = new Knob(osc1, audioCtx, 1);
  const knob2 = new Knob(osc2, audioCtx, 2);
  const knob3 = new Knob(osc3, audioCtx, 3);
  const knob4 = new Knob(osc4, audioCtx, 4);

  knob1.runKnob();
  knob2.runKnob();
  knob3.runKnob();
  knob4.runKnob();

});
