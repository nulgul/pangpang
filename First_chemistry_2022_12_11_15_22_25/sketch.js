let system = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51);
  for (let i = 0; i < system.length; i++) {
    system[i].addParticle();
    system[i].run();
  }
}

// function mouseClicked() {
//   system.push(new ParticleSystem(mouseX, mouseY));
// }

function keyPressed() {
  if (key === ' ') {
    system.splice(0, system.length);
  }
}
