let textField, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  textField = createInput();
  textField.position(20, 65);
	textField.size(120, 40);

  button = createButton('Submit');
  button.position(textField.x + textField.width + 10, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(20);
}



function greet() {
  const name = textField.value();
  greeting.html('Hello, ' + name + '!');
  textField.value('');

  let splitString = split(name, '');
  text(splitString[0], 300, 30);
  text(splitString[1], 300, 60);
  text(splitString[2], 300, 90);
}
