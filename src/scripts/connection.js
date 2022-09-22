class Connection {
  constructor(audioCtx, oscArray, ampKnobArray) {
    this.audioCtx = audioCtx;
    this.oscArray = oscArray;
    this.ampKnobArray = ampKnobArray;
    this.params = null;
    this.sender = null;
    this.receiver = null;
    this.color = null;
    this.colors = ['cornsilk', 'paleogoldenrod', 'aliceblue', 'firebrick', 'azure', 'bisque'];
  }

  init() {
    this.setUpEventListeners();
  }

  sendParams(e) {
    this.sender = e.target.id;

    this.params = {
      waveform: this.sender.slice(0, 3),
      oscNum: this.sender.slice(this.sender.length-1) - 1
    };

    this.color = this.colors[ Math.floor( Math.random() * 8 ) ]; // need func to add/remove colors from array
    console.log(this.sender)
    document.querySelector(`#${this.sender}`).style.backgroundColor = this.color;

    this.sender = null;
  }

  receiveParams(e) {
    if (this.params){
      const osc = this.oscArray[this.params['oscNum']];

      const ampKnobNum = e.target.id.slice(e.target.id.length-1) - 1;
      const ampKnob = this.ampKnobArray[ampKnobNum];

      ampKnob.updateOscillator(osc, this.params['waveform']);

      this.params = null;

      document.querySelector(`#${e.target.id}`).style.backgroundColor = this.color;
    }
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
    document.querySelector(`#amp-in3`).addEventListener('mousedown', this.receiveParams.bind(this));
    document.querySelector(`#amp-in4`).addEventListener('mousedown', this.receiveParams.bind(this));
  }
}

module.exports = Connection;