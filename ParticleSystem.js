class ParticleSystem {
  constructor(x, y ) {
    this.origin = createVector(x,y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));

    if (mouseIsPressed) {
      this.mousePosition = createVector(mouseX, mouseY);
      this.particles.push(new Particle(this.mousePosition));
    }
  }
  
  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  addGravity(g) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.addForce(g);
    }
  }
}
