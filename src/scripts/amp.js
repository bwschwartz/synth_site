class Amplitude {
  constructor (osc, audioCtx){
    const gainNode = audioCtx.createGain();
    osc.disconnect();
    osc.connect(gainNode).connect(audioCtx.destination)
    return gainNode;
  }

}

module.exports = Amplitude;