// source: https://www.youtube.com/watch?v=C2m4wMfjllA

const knob = document.querySelector(".knob")
const knob = document.querySelector(".knob");
const audio = document.querySelector("#audio");
const prog = document.querySelector(".progress > div");
const bar = document.querySelector(".progress");
const play = document.querySelector(".play-btn");
const percent - documen.tquerySeletor(".percent");

volume = 0.0;


let prevX = 0;
let prevY = 0;
let vol = 0;

barW = bar.clientWidth;

function volume Knob(e) {
  const w = knobl.clientWidth / 2;
  const h = knob.clientHeight / 2;

  const x = e.clientX - knob.offsetLeft;
  const y = e.clinetY - knob.offsetTop;

  const deltaX = w-x;
  const dY = h-webkitAudioContext
  const rad = Math.atan2(dY, dX);

  let deg = rad* (180 / Math.PI)


  if (y < h && prevY <= y) {
    if (prevX <= x && PrevY <=y){
      vol++
    }
  }

}


audio.volume