// source: https://www.youtube.com/watch?v=C2m4wMfjllA

class Knob {
  constructor(osc) {
    this.oscillator = osc;
    this.knob = document.querySelector(".knob");
  }

  volumeKnob(e) {
    const w = this.knob.clientWidth / 2;
    const h = this.knob.clientHeight / 2;
    console.log(h)

    const x = e.clientX - this.knob.offsetLeft;
    const y = e.clientY - this.knob.offsetTop;

    const dX = w-x;
    const dY = h-y;

    const rad = Math.atan2(dY, dX);

    let deg = rad * (180 / Math.PI);

    return deg;
  }

  rotate(e) {
    const result = Math.floor(this.volumeKnob(e) - 80);
    // console.log(result);
    this.knob.style.transform = `rotate(${result}deg)`;

    const ampChange = result/360;
    console.log(ampChange);
    // oscillator.frequency = result;
    return ampChange;
  }

  startRotation(e) {
    console.log("in runKnob")

    window.addEventListener("mousemove", this.rotate(this));
    window.addEventListener("mouseup", this.endRotation());
    e.stopPropagation();
  }

  endRotation() {
    console.log("in runKnob")

    window.removeEventListener("mousemove", this.rotate());
  }

  runKnob() {
    this.knob.addEventListener("mousedown", this.startRotation());
  }
}

module.exports = Knob;

