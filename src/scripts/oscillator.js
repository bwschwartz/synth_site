class Oscillator {

  init(audioCtx, buttonNum) {

    audioCtx = audioCtx; // get this from the context.js file
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();


    // document.querySelector(`.button${buttonNum}`).addEventListener('click', function() {
    //   oscillator.start();
    //     })//change with one start button

    const onOffButton =  document.querySelector(`.start-button`);

    onOffButton.addEventListener('click', function(e) {
      if (onOffButton.innerText ==="ON") {
        setTimeout(()=>{onOffButton.innerText = "OFF"}, 100
        )
        audioCtx.resume();
        return
      }
      if (onOffButton.innerText ==="OFF" && audioCtx.state !=="closed" ){
        setTimeout(()=>{onOffButton.innerText = "ON"}, 200
        )

      audioCtx.suspend()
      return
      }
      }
      )

    return oscillator;
    }
}

module.exports = Oscillator;