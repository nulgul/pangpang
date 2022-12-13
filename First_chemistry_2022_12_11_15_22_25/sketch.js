let system = [];

function setup() {
  createCanvas(600, 600);
  // system.push(new ParticleSystem(width/2, height/5));
}

function draw() {
  background(51);
  for (let i = 0; i < system.length; i++) {
    system[i].addParticle();
    system[i].run();
    // new ParticleSystem(mouseX, mouseY)

    let gravity = createVector(0, 0.1);
    system[i].addGravity(gravity);

    // if (mouseIsPressed) {
    //   this.mousePosition = createVector(mouseX, mouseY);
    //   this.particles.push(new Particle(this.mousePosition));
    // }
  }
}

function mouseClicked() {
  this.mousePosition = createVector(mouseX, mouseY);
  system.push(new ParticleSystem(mouseX, mouseY));
}

function keyPressed() {
  if (key === ' ') {
    system.splice(0, system.length);
  }
}
