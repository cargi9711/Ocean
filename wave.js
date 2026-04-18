class Wave {
  constructor(height, speed) {
    this.height = height;
    this.speed = speed;
  }

  crash() {
    return `Wave of ${this.height}m crashes at ${this.speed} km/h!`;
  }
}

module.exports = Wave;
