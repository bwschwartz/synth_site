class Connection {
  constructor(audioCtx, oscArray, ampKnobArray) {
    this.audioCtx = audioCtx;
    this.oscArray = oscArray;
    this.ampKnobArray = ampKnobArray;
    this.sender = null;
    this.receiver = null;
    this.params = null;
    this.color = null;
    this.colors = ['cornsilk', 'paleogoldenrod', 'aliceblue', 'firebrick', 'azure', 'bisque', 'burlywood', 'darkseagreen'];
  }

  init() {
    this.setUpEventListeners();
  }

  sendParams(e) {
    this.sender = e.target.id;

    this.color = this.colors[ Math.floor( Math.random() * 7 ) ];
    console.log("this color is", this.color)
    this.params = {
      waveform: this.sender.slice(0, 3),
      oscNum: this.sender.slice(this.sender.length-1) - 1,
      sender_id: this.sender,
      color: this.color
    };

    const osc = this.oscArray[this.params['oscNum']];
    osc.disconnect();





    // document.querySelector(`#${this.sender}`).style.backgroundColor = this.color;
    // document.querySelector(`#${this.sender}`).classList.add('active')

    this.sender = null;
  }

  receiveParams(e) {
    if (this.params){
      const osc = this.oscArray[this.params['oscNum']];
      console.log("in receive params", this.params)

      const ampKnobNum = e.target.id.slice(e.target.id.length-1) - 1;
      const ampKnob = this.ampKnobArray[ampKnobNum];

      ampKnob.updateOscillator(osc, this.params['waveform']);

      document.querySelector(`#${this.params.sender_id}`).style.backgroundColor = this.params.color;
      document.querySelector(`#${this.params.sender_id}`).classList.add('active')
      document.querySelector(`#${e.target.id}`).style.backgroundColor = this.params.color;

      this.params = null;

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