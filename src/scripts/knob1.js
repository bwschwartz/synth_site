// source: https://www.youtube.com/watch?v=C2m4wMfjllA

class Knob {
  constructor(oscillator, audioCtx, knobNum){
    this.osc = oscillator;
    this.audioCtx = audioCtx;
    this.knobNum = knobNum || 1;
  }

  translateValues(knobOutput) { //I'm sorry, this actually also updates params
    this.osc.frequency.setValueAtTime(knobOutput, this.audioCtx.currentTime)
    return knobOutput + 100;
  }

  runKnob() {
    const knob = document.querySelector(`#knob${this.knobNum}`);

    function getKnobValues(e) {
      const container = document.querySelector('.vco');
      const w = knob.clientWidth / 2;
      const h = knob.clientHeight / 2;

      const x = e.clientX - (container.offsetLeft + knob.offsetLeft); //+70
      const y = e.clientY - (container.offsetTop + knob.offsetTop); //+1s

      const dX = w-x;
      const dY = h-y;

      const rad = Math.atan2(dY, dX);

      const deg = rad * (180 / Math.PI); //used to be let

      return deg;
    }

    function rotate(e) {
      let result = Math.floor(getKnobValues(e) - 80);
      knob.style.transform = `rotate(${result}deg)`;

      if (result < 0) {
        result = 360 + result;
      }
      result = this.translateValues(result);
      // this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime)
    }

    const that = this;
    const boundRotate = rotate.bind(this);
    function startRotation(e) {
      knob.addEventListener("mousemove", boundRotate);
      knob.addEventListener("mouseup", endRotation);
      e.stopPropagation();
    }

    function endRotation() {
      knob.removeEventListener("mousemove", boundRotate);
      knob.removeEventListener("mouseup", endRotation);
    }

    knob.addEventListener("mousedown", startRotation);

  }
}

class freqKnob extends Knob {}


module.exports = freqKnob;

