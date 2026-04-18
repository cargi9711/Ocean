function calculatePressure(depth) {
  return depth * 0.1; // simplified formula
}

function formatOceanName(name) {
  return `${name} Ocean`;
}

module.exports = { calculatePressure, formatOceanName };
