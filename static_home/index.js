// Important: These must be multiples of 10
const CANVAS_HEIGHT = 480;
const CANVAS_WIDTH = 840;
const SQUARE_WIDTH = 70;
const ONE_PIXEL = 10;

let BG_COLOR, FILL_COLOR;

const controller = GameController();
const renderer = GameRenderer({
    offsetResetAction: () => {
        controller.shiftUp();
    },
    pixelWidth: ONE_PIXEL,
    squareWidth: SQUARE_WIDTH,
    bottomPadding: 3,
    leftPadding: 2
});

addKeyAction((event) => {
    switch(event) {
        case UP:
            controller.moveUp();
            break;
        case DOWN:
            controller.moveDown();
            break;
        case RIGHT:
            controller.moveRight();
            break;
        case LEFT:
            controller.moveLeft();
            break;
        case START:
            controller.paintStart();
            break;
        case CANCEL:
            controller.paintEnd();
            break;
    }
})

setInterval(() => {
    renderer.increaseOffset();
}, 2000);

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  frameRate(30);

  BG_COLOR = color('#c7f0d8');
  FILL_COLOR = color('#43523d');
}

function draw() {
    translate(0, CANVAS_HEIGHT);  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"

    background(BG_COLOR);
    const board = controller.getState();
    renderer.renderBoard(this, board);
    fill(BG_COLOR);
    rect(0, 0, CANVAS_WIDTH, ONE_PIXEL * 3);
}

