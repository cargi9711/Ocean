class Ocean {
  constructor(name, depth) {
    this.name = name;
    this.depth = depth;
  }

  describe() {
    return `${this.name} Ocean has an average depth of ${this.depth} meters.`;
  }
}

module.exports = Ocean;
