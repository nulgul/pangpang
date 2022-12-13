class Particle {
  constructor(pos, c) {
    this.acc = createVector(0, 0.05);
    this.vel = createVector(random(-3, 3), random(-1, 1));
    this.pos = pos.copy();
    this.lifespan = 5000;
    this.c = color(c,random(100,120),random(200,220),random(0,80));
  }
  
  // applyForce(aForce) {
  //   let f = p5.Vector.div(aForce, this.m);
  //   this.acc.add(f);
  // }

  addForce(aForce) {
    this.acc.add(aForce)
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  run() {
    this.update();
    this.checkEdge();
    this.display();
  }

  // Method to update position
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 3;
  }

  checkEdge() {
    if (this.pos.x <= 0) {
      this.pos.x = 0;
      this.vel.x *= -0.1;
      this.acc.x *= -0.9;
    }
    if (this.pos.x >= width) {
      this.pos.x = width;
      this.vel.x *= -0.1;
      this.acc.x *= -0.1;
    }
    if (this.pos.y <= 0) {
      this.pos.y = 0;
      this.vel.y *= -0.1;
      this.acc.y *= -0.1;
    }
    if (this.pos.y >= height) {
      this.pos.y = height;
      this.vel.y *= -0.1;
      this.acc.y *= -0.1;
    }
  }

  // Method to display
  display() {
    noStroke();
    let alpha = map(this.pos.y, 0, 600, 255, brightness);

    brightness = color('hsb(60, 100%, 50%)');

    // let value = brightness(c);
    // fill(value);

    this.c = fill(random(100, 255), random(200), 200, alpha)
    ellipse(this.pos.x, this.pos.y, 12, 12);
  }

isDead() {
    return this.lifespan < 0;
  }
}
