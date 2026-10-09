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

const { keyboard, Key, sleep } = require("@nut-tree-fork/nut-js");
const { exec } = require("child_process");

async function runAssistantTask() {
  // Launch Notepad directly via Windows command line
  exec("notepad.exe");

  // Give Notepad 1.5 seconds to open and gain window focus
  await sleep(1500);

  // Type text through simulated keystrokes
  await keyboard.type("Assistant initialized. Ready for commands.");

  // Press Enter twice
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);

  await keyboard.type("Status: System operational.");
  console.log("Task executed successfully.");
}

runAssistantTask();