class Oscillator {

  init(audioCtx, buttonNum) {

    audioCtx = audioCtx; // get this from the context.js file
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);

    // document.querySelector(`.button${buttonNum}`).addEventListener('click', function() {
    //   oscillator.start();
    //     })//change with one start button

    document.querySelector(`.start-button`).addEventListener('click', function() {
          oscillator.start();
            })

    return oscillator;
    }
}

module.exports = Oscillator;