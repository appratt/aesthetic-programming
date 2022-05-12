// based on Tanabata(七夕) by sayo https://openprocessing.org/sketch/926326

const dx = -30;
const dy = -10;

let font;
let time = 0.0;

/*
function preload() {
	font = loadFont("Hannari.otf");
}
*/

function setup() {
  createCanvas(600, 600, P2D);
}

function draw() {
  background(220);
  fill(40);
  textSize(180);
  // originally the iteration was 7, which changes in the "i<7" and TWO_PI*i/7
  for (let i=0; i<4; i++) {
    push();
    translate(width/2, height/2);
    rotate(TWO_PI*i/4*(0.5-0.5*cos(time)));
    // originally just a singe character
    text("Penn", dx, dy);
    pop();
  }
  time += TWO_PI / 1440;
}
