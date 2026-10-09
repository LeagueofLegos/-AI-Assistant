const { mouse, straightTo, Point } = require("@nut-tree-fork/nut-js");

async function testMove() {
  await mouse.move(straightTo(new Point(500, 500)));
}

testMove();

const { screen } = require("@nut-tree-fork/nut-js");

async function captureScreen() {
  const width = await screen.width();
  const height = await screen.height();
  console.log(`Screen detected: ${width}x${height}`);

  // Highlights active screen area
  await screen.highlight({ left: 100, top: 100, width: 300, height: 300 });
  console.log("Highlighted region successfully.");
}

captureScreen();