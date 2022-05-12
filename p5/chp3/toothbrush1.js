function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);
  
  let tm = millis();

  textSize(100);
  text(nfc((tm/1000),1),windowWidth/2, windowHeight/2);

  textSize(18);
  text("seconds:",windowWidth/2, windowHeight/2-80);

  if (tm < 5000) {
    text("let's go!",windowWidth/2, windowHeight/2+80);
  }

  if (tm > 1000 && tm < 5000){
    square(30, 20, 55);
  }

  if (tm > 5000 && tm < 10000) {
    text("now you're cooking",windowWidth/2, windowHeight/2+80);
  }

}
