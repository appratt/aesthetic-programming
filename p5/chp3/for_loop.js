let x = 20;

function setup() {
  createCanvas(420, 100);
  background(220);
  for (let i=0; i < 20; i++){
    ellipse(x, 45, 15, 15);
    print('x = ' + x);
    print('i = ' + i);
    x+=20;
  }
}
