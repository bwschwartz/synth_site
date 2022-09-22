//source: https://www.youtube.com/watch?v=urR596FsU68 "The Coding Train"

const Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

let canvas, engine, world, testBox;

let boxes = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let particles = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  engine = Engine.create();
  world = engine.world;
  Matter.Runner.run(engine);

  let isFixed = false;
  let prev = null;

  for (let x = 500; x < 1000; x+=40){
    let isFixed = false;

    if (!prev){
      isFixed = true;
    }

    const p = new Particle(x, 100, 10, isFixed);
    particles.push(p);


    if (prev){
      const constraintOptions = {
      bodyA: p.body,
      bodyB: prev.body,
      length: 50,
      stiffness: .4
    }

    const constraint = Constraint.create(constraintOptions)
    World.add(world, constraint)
    }

    prev = p;

  }

  // const p2 = new Particle(150, 150, 100, isFixed);




  // particles.push(p1);
  // particles.push(p2);
  }


function draw() {
  background('transparent');
  for (i=0; i<particles.length; i++){
    particles[i].show();
  }

}

function Particle(x, y, r, isFixed) {
  let particleOptions = {
    friction: 0,
    restitution: 0.95,
    isStatic: isFixed
  }

  this.body = Bodies.circle(x,y, r, particleOptions);

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



function mousePressed() {
  boxes.push(Bodies.rectangle(200, 100, 80, 80));
}
