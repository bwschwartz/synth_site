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


const Gain = require('./scripts/amp');

const Input = require('./scripts/input');

const Connection = require('./scripts/connection')

import {freqKnob, ampKnob} from './scripts/knob';

document.addEventListener("DOMContentLoaded", () =>{
  drag.init();


  osc1 = osc1.init(audioCtx, 1);
  osc2 = osc2.init(audioCtx, 2);
  osc3 = osc3.init(audioCtx, 3);
  osc4 = osc4.init(audioCtx, 4);

  const oscArray = [osc1, osc2, osc3, osc4]

  const freqknob1 = new freqKnob(osc1, audioCtx, 1);
  const freqknob2 = new freqKnob(osc2, audioCtx, 2);
  const freqknob3 = new freqKnob(osc3, audioCtx, 3);
  const freqknob4 = new freqKnob(osc4, audioCtx, 4);

  freqknob1.runKnob();
  freqknob2.runKnob();
  freqknob3.runKnob();
  freqknob4.runKnob();


  const gain1 = new Gain(osc1, audioCtx);
  const gain2 = new Gain(osc2, audioCtx);
  const gain3 = new Gain(osc3, audioCtx);
  const gain4 = new Gain(osc4, audioCtx);


  const ampknob1 = new ampKnob(osc1, audioCtx, 1, 'amp', gain1);
  const ampknob2 = new ampKnob(osc2, audioCtx, 2, 'amp', gain2);
  const ampknob3 = new ampKnob(osc3, audioCtx, 3, 'amp', gain3);
  const ampknob4 = new ampKnob(osc4, audioCtx, 4, 'amp', gain4);

  const ampKnobArray = [ampknob1, ampknob2, ampknob3, ampknob4];


  ampknob1.runKnob();
  ampknob2.runKnob();
  ampknob3.runKnob();
  ampknob4.runKnob();


  // const input = new Input(1);
  // input.activateInput();


  const connection  = new Connection(audioCtx, oscArray, ampKnobArray);
  connection.init();





  //on clicking VCO output: make an object wtih oscillator number and wave type
  //on clicking down on output: change waveform to correct type; initialize gain and tie ti to

});
