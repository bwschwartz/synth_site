// source: https://www.youtube.com/watch?v=C2m4wMfjllA


class Knob {
  runKnob() {
    const knob = document.querySelector(".knob");
    const audio = document.querySelector("#audio");
    const prog = document.querySelector(".progress > div");
    const bar = document.querySelector(".progress");
    const play = document.querySelector(".play-btn");
    const percent = document.querySelector(".percent");

    let prevX = 0;
    let prevY = 0;
    let vol = 0.0;

    // barW = bar.clientWidth;
    const barW = 3;

    function volumeKnob(e) {
      const w = knob.clientWidth / 2;
      const h = knob.clientHeight / 2;

      const x = e.clientX - knob.offsetLeft;
      const y = e.clientY - knob.offsetTop;

      const dX = w-x;
      const dY = h-y;
      const rad = Math.atan2(dY, dX);

      let deg = rad* (180 / Math.PI);

      // top right quadrant
      if (y < h && x > w){
        if (prevX <= x && prevY <= y) {
          vol++;
        } else if (prevX >= x && prevY >= y) {
          vol--;
        }

      } else if (y > h && x > w) {
        if (prevX >= x && prevY <= y) {
          vol++;
        } else if (prevX < x && prevY >= y) {
          vol--;
        }

      } else if (y < h && x < w) {
        if (prevX <= x && prevY >= y) {
          vol++;
        }
        else if ( prevX >= x && prevY <= y) {
          vol--;
        }

      } else if (y > h && x < w) {
        if (prevX >= x && prevY >= y) {
          vol++;
        }
        else if (prevX <= x && prevY <= y) {
          vol--;
        }
      }

      const percentage = Math.round((100*vol)/ barW);

      if (vol < 0){
        vol = 0;
      } else if (vol>barW){
        vol = barW;
      }
      prevX = x;
      prevY = y;

      return deg;
    }

    function rotate(e) {
      const result = Math.floor(volumeKnob(e) - 80);
      console.log(result);
      knob.style.transform = `rotate(${result}deg)`;
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

