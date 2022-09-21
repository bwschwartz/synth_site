class Input {
  constructor(inputNum, type){
    this.inNum = inputNum;
    this.type = type || 'amp';
  }

  activateInput(){
    // console.log(`${this.type}-in${this.inputNum}`)
    const input = document.querySelector(`#${this.type}-in${this.inNum}`)
    console.log(input)
    input.addEventListener("mousedown", this.test)
  }

  test(){
    console.log("responds to mousedown")
  }

}

module.exports = Input;