//source: https://www.youtube.com/watch?v=urR596FsU68 "The Coding Train"

const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

let canvas, engine, world, mouseConstraint;
let particles = [];
let c;

window.particles = particles;

function setup() {
  // c = color('rgba(0, 0, 255, 1)'); //blue
  // canvas.background('rgba(0,255,0, 0.25)')


  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '1');

  engine = Engine.create();
  world = engine.world;
  Matter.Runner.run(engine);

  let isFixed = false;
  let prev = null;

  const position = 1500

  for (let x = position; x < position +100; x+=10){
    let isFixed = false;

    if (!prev){
      isFixed = true;
    }

    const p = new Particle(x, 300, 30, isFixed);
    // debugger;
    particles.push(p);

    if (prev){
      const constraintOptions = {
      bodyA: p.body,
      bodyB: prev.body,
      length: 100,
      stiffness: 1.0
    }

    const constraint = Constraint.create(constraintOptions)
    World.add(world, constraint)
    }
    prev = p;
    }


    const mouse = Mouse.create( canvas.elt );
    mouse.pixelRatio = pixelDensity();

    const mConstraintOptions = {
      mouse: mouse
    }
    const mConstraint = MouseConstraint.create(engine,mConstraintOptions)

    World.add(world, mConstraint)
  }


function draw() {
  // background(c); //blue
  // background('rgba(10,10,100, 0)'); // effect
  background('rgba(10,10,100, 0)'); // effect


  // background('yellow');
  for (i=0; i<particles.length; i++){
    particles[i].show();

  }
}

function Particle(x, y, r, isFixed) {
  let particleOptions = {
    friction: 0,
    restitution: .2,
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

function mouseDown(e) {
  console.log("mouse down")
  // e.stopPropagation();
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}