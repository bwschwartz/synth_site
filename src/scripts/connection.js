class Connection {
  constructor(audioCtx, oscArray, ampKnobArray) {
    this.params = null;
    this.audioCtx = audioCtx;
    this.oscArray = oscArray;
    this.sender = null;
    this.receiver = null;
    this.ampKnobArray = ampKnobArray;
    this.color = null;
  }

  init() {
    // const testOut = document.querySelector(`#sin-out1`);
    // testOut.addEventListener('mousedown', this.sendParams.bind(this));

    // const testIn  = document.querySelector(`#amp-in1`)
    // testIn.addEventListener('mousedown', this.receiveParams.bind(this))

    this.setUpEventListeners();
  }

  setUpEventListeners() {
    document.querySelector(`#sin-out1`).addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sin-out2`).addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sin-out3`).addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sin-out4`).addEventListener('mousedown', this.sendParams.bind(this));

    document.querySelector(`#sqr-out1`).addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sqr-out2`).addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sqr-out3`).addEventListener('mousedown', this.sendParams.bind(this));
    document.querySelector(`#sqr-out4`).addEventListener('mousedown', this.sendParams.bind(this));


    document.querySelector(`#amp-in1`).addEventListener('mousedown', this.receiveParams.bind(this));
    document.querySelector(`#amp-in2`).addEventListener('mousedown', this.receiveParams.bind(this));
    // document.querySelector(`#amp-in3`).addEventListener('mousedown', this.receiveParams.bind(this));
    // document.querySelector(`#amp-in4`).addEventListener('mousedown', this.receiveParams.bind(this));




  }

  sendParams(e) {
    this.sender = e.target.id;
    // console.log(this.sender);
    this.params = {
      waveform: this.sender.slice(0, 3),
      oscNum: this.sender.slice(this.sender.length-1) - 1
    };
    this.sender = null;
    this.color = 'blue';

    document.querySelector(`#${e.target.id}`).style.backgroundColor = 'black';
  }

  receiveParams(e) {
    // console.log(`receive params: ${this.params['waveform']}`)
    if (this.params){
      const osc = this.oscArray[this.params['oscNum']]
      // console.log(`receiving oscillator: ${osc}`);

      const ampKnobNum = e.target.id.slice(e.target.id.length-1) - 1;
      const ampKnob = this.ampKnobArray[ampKnobNum];

      // const waveform = this.params['waveform'];
      ampKnob.updateOscillator(osc, this.params['waveform']);

      this.params = null;

      document.querySelector(`#${e.target.id}`).style.backgroundColor = 'black';

    }
  }



}

module.exports = Connection;