// Important: These must be multiples of 10
const CANVAS_HEIGHT = 480;
const CANVAS_WIDTH = 840;
const SQUARE_WIDTH = 70;
const GAP = 10;
const BOARD_PADDING_TOP = 30;
const BOARD_PADDING_LEFT = 20;

let BG_COLOR, FILL_COLOR;

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
  BG_COLOR = color('#c7f0d8');
  FILL_COLOR = color('#43523d');
}

function draw() {
  background(BG_COLOR);
  
  // Set the fill colour of the rectangle
  // No outline
  let c = FILL_COLOR;
  noStroke();
  
  // Rect placement
  for (let j = 0; j < gameBoard.length; j++) {
    for (let i = 0; i < gameBoard[j].length; i++) {
      
      c = getSquareColor(gameBoard[j][i]);
      
      const x = BOARD_PADDING_LEFT + i * SQUARE_WIDTH + (i + 1) * GAP;
      const y = BOARD_PADDING_TOP + j * SQUARE_WIDTH + (j + 1) * GAP;
      fill(c);
      rect(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
    }
  }
}

function getSquareColor(currentSquare) {
  if (currentSquare === tileState.invisible) {
    return BG_COLOR;
  } else if (currentSquare === tileState.tile) {
    return FILL_COLOR;
  } else if (currentSquare === tileState.selected) {
    if (frameCount % 2 === 0) {
      return BG_COLOR;
    } else {
      return FILL_COLOR;
    }
  }
}
