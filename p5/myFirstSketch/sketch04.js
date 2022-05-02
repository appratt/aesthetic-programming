let names = 'Pat,Xio,Alex';


function setup() {
  // create canvas
  createCanvas(710, 400);
}

function draw() {
  let splitString = split(names, ',');
  text(splitString[0], 5, 30);
  text(splitString[1], 5, 50);
  text(splitString[2], 5, 70);
}
