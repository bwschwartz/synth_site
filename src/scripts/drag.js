class Drag {

  init() {

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

  makeVcoDraggable(){
    $( "#draggablevco" ).draggable();
  }
}

module.exports = Drag;
