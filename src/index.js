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

// const Knob = require('./scripts/knob1')
// const knob = new freqKnob;
import {freqKnob, ampKnob} from './scripts/knob1';

const Amplitude = require('./scripts/amp');

document.addEventListener("DOMContentLoaded", () =>{


  osc1 = osc1.init(audioCtx, 1); //is this kosher
  osc2 = osc2.init(audioCtx, 2);
  osc3 = osc3.init(audioCtx, 3);
  osc4 = osc4.init(audioCtx, 4);
  drag.init();


  const freqknob1 = new freqKnob(osc1, audioCtx, 1);
  const freqknob2 = new freqKnob(osc2, audioCtx, 2);
  const freqknob3 = new freqKnob(osc3, audioCtx, 3);
  const freqknob4 = new freqKnob(osc4, audioCtx, 4);

  freqknob1.runKnob();
  freqknob2.runKnob();
  freqknob3.runKnob();
  freqknob4.runKnob();

  const ampknob1 = new ampKnob(osc1, audioCtx, 1, 'amp');
  const ampknob2 = new ampKnob(osc1, audioCtx, 2, 'amp');
  const ampknob3 = new ampKnob(osc1, audioCtx, 3, 'amp');
  const ampknob4 = new ampKnob(osc1, audioCtx, 4, 'amp');


  ampknob1.runKnob();
  ampknob2.runKnob();
  ampknob3.runKnob();
  ampknob4.runKnob();



});
