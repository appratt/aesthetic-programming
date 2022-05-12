/* from aestheic programming, chp 2*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

function draw() {
  // background
  background(random(130, 240), random(200, 255), random(20, 120));
  print(mouseX, mouseY);
}
