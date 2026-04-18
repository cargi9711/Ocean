const Ocean = require("./ocean");
const Wave = require("./wave");
const MarineLife = require("./marineLife");

const ocean = new Ocean("Pacific", 3970);
const wave = new Wave(5, 30);
const fish = new MarineLife("Clownfish", "Fish");

console.log(ocean.describe());
console.log(wave.crash());
console.log(fish.describe());
