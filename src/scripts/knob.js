// source: https://www.youtube.com/watch?v=C2m4wMfjllA

class Knob {
  constructor(oscillator, audioCtx){
    this.osc = oscillator;
    this.audioCtx = audioCtx;
  }

  runKnob() {
    const knob = document.querySelector(".knob");

    function volumeKnob(e) {
      const container = document.querySelector('.module-container');
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
      // e.stopPropagation();
      const result = Math.floor(volumeKnob(e) - 80);
      knob.style.transform = `rotate(${result}deg)`;

      const ampChange = result/360;
      this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime)
      return result;
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
    // knob.addEventListener("mousedown", rotate.bind(that));
    // console.log(this.osc);
    // this.osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);

    // changeAmp(this.osc, 880, this.audioCtx);
  }

}

module.exports = Knob;

