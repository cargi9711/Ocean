class MarineLife {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `${this.name} is a ${this.type} living in the ocean.`;
  }
}

module.exports = MarineLife;
