// initialize DSP framework

class Context {
    makeContext() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  // should include error handling
}

module.exports = Context;