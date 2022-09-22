//source: https://www.youtube.com/watch?v=urR596FsU68 The Coding Train

const Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  Composites = Matter.Composites;



let canvas, engine, world, testBox;

let boxes = [];

// function windowResized(){
//   console.log('resized');
//   resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  // testBox = Bodies.rectangle(200, 100, 80, 80);
  testBox = new Circle(200, 100, 80);
  Matter.Runner.run(engine);
  World.add(world, testBox); //remove global variable

  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(100);
  // rect(testBox.position.x, testBox.position.y, 80, 80);
  testBox.show();
}

function mousePressed() {
  boxes.push(Bodies.rectangle(200, 100, 80, 80));
}

function Circle(x, y, r) {
  this.body = Bodies.circle(x,y, r);
  // this.w  = w;
  // this.h = h;
  World.add(world, this.body);

  this.remove = function() {
    World.remove(world, this.body);
  }


  this.show = function() {
    let pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    ellipse(0, 0, r);
    pop();
  }
}