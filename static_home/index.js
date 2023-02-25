// Important: These must be multiples of 10
const CANVAS_HEIGHT = 480;
const CANVAS_WIDTH = 840;
const SQUARE_WIDTH = 70;
const GAP = 10;
const BOARD_PADDING_TOP = 30;
const BOARD_PADDING_LEFT = 20;

const BG_COLOR = '#c7f0d8';
const FILL_COLOR = '#43523d';

const tileState = {
  invisible: 0,
  tile: 1,
  selected: 2,
}

const gameBoard = [
  [1, 1, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 0, 2, 2, 1, 1, 1, 1],
  [1, 1, 1, 1, 2, 1, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1],
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
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 5; j++) {
      
      c = getSquareColor(gameBoard[j][i]);
      
      fill(c);
      const x = BOARD_PADDING_LEFT + i * SQUARE_WIDTH + (i + 1) * GAP;
      const y = BOARD_PADDING_TOP + j * SQUARE_WIDTH + (j + 1) * GAP;
      rect(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
      c = color(FILL_COLOR);
    }
  }
}

function getSquareColor(currentSquare) {
  if (currentSquare === tileState.invisible) {
    return color(BG_COLOR);
  } else if (currentSquare === tileState.tile) {
    return color(FILL_COLOR);
  } else if (currentSquare === tileState.selected) {
    if (frameCount % 2 === 0) {
      return color(BG_COLOR);
    } else {
      return color(FILL_COLOR);
    }
  }
}
