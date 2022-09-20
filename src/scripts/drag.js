class Drag {

  init() {
    this.makeDraggable();
    this.makeClassDraggable();
    this.makeVcoDraggable();
    this.makeVcaDraggable();

  }
  makeDraggable() {
    $( "#draggable" ).draggable();
  };

  makeClassDraggable() {
    $( "#draggable1" ).draggable();
  };

  makeVcoDraggable(){
    $( "#draggablevco" ).draggable();
  }

  makeVcaDraggable(){
    $( "#draggablevca" ).draggable();
  }


}

module.exports = Drag;
