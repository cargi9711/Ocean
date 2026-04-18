const Ocean = require("./ocean");

function testOcean() {
  const ocean = new Ocean("Test", 1000);
  if (!ocean.describe().includes("Test")) {
    throw new Error("Test failed");
  }
  console.log("Test passed");
}

testOcean();
