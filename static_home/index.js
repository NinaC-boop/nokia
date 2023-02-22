console.log('hello');
const HEIGHT = 400;
const WIDTH = 700;
const S_WIDTH = 50;

let rectX = 0;

function setup() {
  createCanvas(700, 400);
  frameRate(2);
  
}

function draw() {
  rectX = (rectX + S_WIDTH) % WIDTH;
  background(220);
  rect(rectX, S_WIDTH * 2, S_WIDTH, S_WIDTH);
}