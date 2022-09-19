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
      let result = Math.floor(volumeKnob(e) - 80);
      knob.style.transform = `rotate(${result}deg)`;

      if (result < 0) {
        result = 360 + result;
      }

      this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime)
      console.log(result)
      // return result;
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

module.exports = Knob;

