let system = [];

function setup() {
  createCanvas(600, 600);
  system.push(new ParticleSystem(width/2, height/5));
}

function draw() {
  background(51);
  for (let i = 0; i < system.length; i++) {
    system[i].addParticle();
    system[i].run();
    // new ParticleSystem(mouseX, mouseY)

    let gravity = createVector(0, 0.1);
    system[i].addGravity(gravity);

    // if (mouseMoved) {
    //   let pos = [mouseX, mouseY];
    //   system[i].pos
    // }
  }
}

function mouseClicked() {
  system.push(new ParticleSystem(width/2, height/5));
}

function keyPressed() {
  if (key === ' ') {
    system.splice(0, system.length);
  }
}
