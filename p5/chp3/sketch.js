/* from aestheic programming, chp 3*/

function setup() {
  //create a drawing canvas
  createCanvas(windowWidth, windowHeight);
  frameRate (8); //try to change this parameter
}

function draw() {
  background('rgba(70,70,70, 0.8)'); // check this syntax with alpha value
  // also, i modified this to the somewhat more legilble integer RGBA notation
  drawElements();
}

function drawElements() {
  let num = 9;
  push();
  //move things to the center
  translate(width/2, height/2);
  /* 360/num >> degree of each ellipse's  movement;
  frameCount%num >> get the remainder to know which among 8 possible positions
  */
  let cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(255, 255, 0);
  // the x parameter is the ellipse's distance from the center
  ellipse(35, 0, 22, 22);
  pop();
  stroke(255, 255, 0, 18);
  //static lines
  line(60, 0, 60, height);
  line(width-60, 0, width-60, height);
  line(0, 60, width, 60);
  line(0, height-60, width, height-60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
