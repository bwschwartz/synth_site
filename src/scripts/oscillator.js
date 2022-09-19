class Oscillator {

  test() {
    console.log("in the oscillator file")
  }

  init(audioCtx) {
    audioCtx = audioCtx; // get this from the context.js file
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);

    document.querySelector('button').addEventListener('click', function() {
    oscillator.start()
      })}
}


module.exports = Oscillator;