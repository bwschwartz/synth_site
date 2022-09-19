// source: https://www.youtube.com/watch?v=C2m4wMfjllA

class Knob {
  runKnob() {
    const knob = document.querySelector(".knob");

    function volumeKnob(e) {
      const w = knob.clientWidth / 2;
      const h = knob.clientHeight / 2;

      const x = e.clientX - knob.offsetLeft;
      const y = e.clientY - knob.offsetTop;

      const dX = w-x;
      const dY = h-y;

      const rad = Math.atan2(dY, dX);

      let deg = rad * (180 / Math.PI);

      return deg;
    }

    function rotate(e) {
      const result = Math.floor(volumeKnob(e) - 80);
      // console.log(result);
      knob.style.transform = `rotate(${result}deg)`;
      const ampChange = result/360;
      console.log(ampChange);
      return ampChange;
    }

    function startRotation(e) {
      window.addEventListener("mousemove", rotate);
      window.addEventListener("mouseup", endRotation);
      e.stopPropagation();
    }

    function endRotation() {
      window.removeEventListener("mousemove", rotate);
    }
    knob.addEventListener("mousedown", startRotation);
  }

}

module.exports = Knob;

