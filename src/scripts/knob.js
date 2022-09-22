// source: https://www.youtube.com/watch?v=C2m4wMfjllA

class Knob {
  constructor(oscillator, audioCtx, knobNum, amp){
    this.osc = oscillator;
    this.audioCtx = audioCtx;
    this.knobNum = knobNum || 1;
    this.amp = amp || '';
    this.knob = document.querySelector(`#${this.amp}knob${this.knobNum}`);
  }

  translateValues(knobOutput) { //I'm beyond sorry, this actually also updates params!
    this.osc.frequency.setValueAtTime(knobOutput, this.audioCtx.currentTime)
  }

  getContainer() {
    return document.querySelector('.vco');
  }

  getKnobValues(e) {

    const container = this.getContainer();

    const w = this.knob.clientWidth / 2;
    const h = this.knob.clientHeight / 2;

    let x;
    if (this.amp === '') {
       x = e.pageX - (container.offsetLeft + this.knob.offsetLeft);
    } else {
       x = e.pageX - (container.offsetLeft + this.knob.offsetLeft + 45);
    }

    const y = e.pageY - (container.offsetTop + this.knob.offsetTop);

    const dX = w-x;
    const dY = h-y;

    const rad = Math.atan2(dY, dX);

    const deg = rad * (180 / Math.PI); // deeply embarassing

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
    }

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

  updateOscillator(osc, waveform){
    this.osc.disconnect();

    this.osc = osc;
    this.osc.disconnect();

    if (waveform === 'sqr') {
      this.osc.type = 'square';
    } else {
      this.osc.type = 'sine';
    };

    osc.connect(this.gainNode).connect(this.audioCtx.destination)
  }


  translateValues(knobOutput) { //I'm so sorry, this poorly named func actually also updates params!
    const amplitude = knobOutput / 360.0
    this.gainNode.gain.exponentialRampToValueAtTime(amplitude, this.audioCtx.currentTime +.1); //avoids clicks :0
    return amplitude;
  }

  getContainer() {
    return document.querySelector('.vca');
  }
}