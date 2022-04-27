function setup() {
  // put setup code here
  createCanvas(640, 480);
}

function draw() {
  // put drawing code here
  // R, G & B integer values
  stroke(0, 153, 51);
  strokeWeight(4);
  fill(102, 153, 255);
  rect(20, 20, 60, 60);
  translate(30, 20);
  rect(20, 20, 60, 60);
  translate(60, 40);
  rect(20, 20, 60, 60);
  describe('White rect at center with yellow outline.');
}

// w3schools color picker: https://www.w3schools.com/colors/colors_picker.asp

// What I have made here is something that starts to play with the strokeWeight around the outside of a shape, something that
// think can unlock a lot of interesting design possibilities 
