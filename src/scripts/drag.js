class Drag {
  test(){
    console.log("hey bitch from drag.js")
  }
  makeDraggable() {
    $( "#draggable" ).draggable();
  };

  makeClassDraggable() {
    $( "#draggable1" ).draggable();
  };

  makeKnobDraggable() {
    $( "#draggable2" ).draggable();
  }

}

module.exports = Drag;
