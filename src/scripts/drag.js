class Drag {
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
