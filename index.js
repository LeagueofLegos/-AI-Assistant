const { mouse, straightTo, Point } = require("@nut-tree-fork/nut-js");

async function testMove() {
  await mouse.move(straightTo(new Point(500, 500)));
}

testMove();