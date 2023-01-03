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
  canvas.style('z-index', '-1');

  engine = Engine.create();
  world = engine.world;
  Matter.Runner.run(engine);

  let isFixed = false;
  let prev = null;

  // const position = 1500

  // for (let x = position; x < position +100; x+=10){
  //   let isFixed = false;

  //   if (!prev){
  //     isFixed = true;
  //   }

  //   const p = new Particle(x, 300, 30, isFixed);
  //   // debugger;
  //   particles.push(p);

  //   if (prev){
  //     const constraintOptions = {
  //     bodyA: p.body,
  //     bodyB: prev.body,
  //     length: 100,
  //     stiffness: 1.0
  //   }

  //   const constraint = Constraint.create(constraintOptions)
  //   World.add(world, constraint)
  //   }
  //   prev = p;
  //   }


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

  background('palegoldenrod');
  for (i=0; i<particles.length; i++){
    particles[i].show();
  }
}

function Particle(x, y, r, isFixed, hole, end) {
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
  },
  this.hole = (hole || null )
  this.end = end;
}

const removeCable = (holeId) => {
  document.querySelector(`#${holeId}`).classList.remove('active')
  document.querySelector(`#${holeId}`).style.backgroundColor = 'black'

  let startIdx = 0;
  for (let i=0; i<particles.length; i++){
    if (particles[i].hole === holeId) {
      startIdx = i;
      break
    }
  }

  const inputId = particles[startIdx + 9].hole
  document.querySelector(`#${inputId}`).style.backgroundColor = 'black'
  particles.splice(startIdx, 10)

}

const getNeighborOutput = (id) => {
  const [wave, osc] = id.split('-');
  console.log("neighbor id is", id);
  console.log("neighbor id is", osc);
  const otherWave = wave === 'sin' ? 'sqr' : 'sin';
  const otherId = otherWave + '-' + osc;
  return document.querySelector(`#${otherId}`)
}

function mousePressed(e) {

  if (particles[0] && e.target.classList[1] === "input") {
    particles[particles.length-1].body.position.x = e.clientX
    particles[particles.length-1].body.position.y = e.clientY
    particles[particles.length-1].body.isStatic = true;
    particles[particles.length-1].hole = e.target.id;
    document.querySelector(`#${e.target.id}`).getBoundingClientRect().x
  }

  if (e.target.classList[0] === "hole" && e.target.classList[1] !== "input") {

    // destroy active connection
    if (e.target.classList[1] === "active"){
      removeCable(e.target.id)
      return
    }

    const neighborOutput = getNeighborOutput(e.target.id)

    if (neighborOutput.classList[1] === "active"){
      removeCable(neighborOutput.id)
      return
    }
    console.log("neighborOutput is", neighborOutput)



    //destroy hanging connection if there is one
    if (particles[particles.length-1] && particles[particles.length-1].body.isStatic !== true){
      particles = particles.slice(0, -10)
    }

    let isFixed = false;
    let prev = null;
    const  xPos = e.clientX;
    const yPos = e.clientY;

    for (let x = xPos; x < xPos +100; x+=10){
      let hole = null;
      let isFixed = false;
      if (x === xPos ) {
        hole = e.target.id
      }

      if (!prev){
        isFixed = true;
      }

      const p = new Particle(x, yPos, 30, isFixed, hole);
      particles.push(p);

      if (prev){
        const constraintOptions = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 100,
        stiffness: 0.4
      }

      const constraint = Constraint.create(constraintOptions)
      World.add(world, constraint)
      }
      prev = p;
      }
    }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(e){
  for (let i=0; i<particles.length; i++) {
    if (particles[i].hole) {
      particles[i].body.position.x = document.querySelector(`#${particles[i].hole}`).getBoundingClientRect().x
      particles[i].body.position.y = document.querySelector(`#${particles[i].hole}`).getBoundingClientRect().y

      // particles[i].body.position.y =  document.querySelector(`#${particles[i].hole}`).clientY


    }

    // console.log("e.offsetX is", e)
  }

}