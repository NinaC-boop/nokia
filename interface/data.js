var control_events = [];

let gameBoard = [
  [1, 1, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 0, 3, 3, 1, 1, 1, 1],
  [1, 1, 1, 1, 3, 1, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1],
];

const INVISIBLE = 0;
const TILE = 1;
const CURSOR = 2;
const CURSOR_PAINTED = 3;
const PAINTED = 4;
const COMPLETE = 5;
