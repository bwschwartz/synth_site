class Connection {
  constructor(audioCtx, oscArray, ampKnobArray) {
    this.params = null;
    this.audioCtx = audioCtx;
    this.oscArray = oscArray;
    this.sender = null;
    this.receiver = null;
    this.ampKnobArray = ampKnobArray;
  }

  init(){
    const testOut = document.querySelector(`#sin-out1`);
    testOut.addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sin-out2`).addEventListener('mousedown', this.sendParams.bind(this));

    const testIn  = document.querySelector(`#amp-in1`)
    testIn.addEventListener('mousedown', this.receiveParams.bind(this))
  }

  sendParams(e){
    this.sender = e.target.id;
    console.log(this.sender);
    this.params = {
      waveform: this.sender.slice(0, 3),
      oscNum: this.sender.slice(this.sender.length-1) - 1
    };
    // console.log(this.params);
    this.sender = null;
  }

  receiveParams(e){
    // console.log(`receive params: ${this.params['waveform']}`)
    if (this.params){
      const osc = this.oscArray[this.params['oscNum']]
      // console.log(`receiving oscillator: ${osc}`);

      const ampKnobNum = e.target.id.slice(e.target.id.length-1) - 1;
      const ampKnob = this.ampKnobArray[ampKnobNum];
      ampKnob.updateOscillator(osc);



      this.params = null;

    }
  }



}

module.exports = Connection;