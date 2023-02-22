const CANVAS_HEIGHT = 480;
const CANVAS_WIDTH = 840;
const SQUARE_WIDTH = 70;
const GAP = 10;

const BG_COLOR = '#c7f0d8';
const FILL_COLOR = '#43523d';

let selectedSquares = [
  [5, 3],
  [5, 4],
  [6, 3],
];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  frameRate(2);
}

function draw() {
  background(BG_COLOR);
  
  // Set the fill colour of the rectangle
  // No outline
  let c = color(FILL_COLOR);
  noStroke();
  
  // Rect placement
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 5; j++) {
      
      // Flashing logic for selected squares
      selectedSquares.forEach(squarePos => {
        if (squarePos[0] === i && squarePos[1] === j) {
          if (frameCount % 2 === 0) {
            c = color(BG_COLOR);
          }
        }
      });
      
      fill(c);
      const x = (i - 1) * SQUARE_WIDTH + i * GAP;
      const y = (j - 1) * SQUARE_WIDTH + j * GAP;
      rect(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
      c = color(FILL_COLOR);
    }
  }
}