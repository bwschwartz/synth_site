class Amplitude {
  constructor (osc, audioCtx){
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;
    osc.disconnect();
    osc.connect(gainNode).connect(audioCtx.destination)
    return gainNode;
  }

}

module.exports = Amplitude;