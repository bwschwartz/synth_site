// source: https://www.youtube.com/watch?v=C2m4wMfjllA

class Knob {
  constructor(oscillator, audioCtx, knobNum, amp){
    this.osc = oscillator;
    this.audioCtx = audioCtx;
    this.knobNum = knobNum || 1;
    this.amp = amp || '';
    this.knob = document.querySelector(`#${this.amp}knob${this.knobNum}`);
  }

  translateValues(knobOutput) { //I'm sorry, this actually also updates params
    this.osc.frequency.setValueAtTime(knobOutput, this.audioCtx.currentTime)
    console.log(knobOutput)
    return knobOutput + 100;
  }

  getContainer() {
    return document.querySelector('.vco');
  }

  getKnobValues(e) {

      // const container = document.querySelector('.vca');
    const container = this.getContainer();

    const w = this.knob.clientWidth / 2;
    const h = this.knob.clientHeight / 2;

    const x = e.clientX - (container.offsetLeft + this.knob.offsetLeft); //+70
    const y = e.clientY - (container.offsetTop + this.knob.offsetTop); //+1s

    const dX = w-x;
    const dY = h-y;

    const rad = Math.atan2(dY, dX);

    const deg = rad * (180 / Math.PI); //used to be let

    return deg;
  }

  runKnob() {
    const knob = document.querySelector(`#${this.amp}knob${this.knobNum}`);

    function rotate(e) {
      let result = Math.floor(this.getKnobValues(e) - 80);
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

export class freqKnob extends Knob {}

export class ampKnob extends Knob {

  constructor(oscillator, audioCtx, knobNum, amp, gain) {
    super(oscillator, audioCtx, knobNum, amp);
    this.gainNode = gain;
  }


  translateValues(knobOutput) { //I'm sorry, this actually also updates params
    const amplitude = knobOutput / 360.0
    console.log(this.gainNode);
    this.gainNode.gain.value = amplitude;

    // this.osc.frequency.setValueAtTime(knobOutput, this.audioCtx.currentTime)

    return amplitude;
  }

  getContainer() {
    return document.querySelector('.vca');
  }
}




