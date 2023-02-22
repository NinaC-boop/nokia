let KEYCODE_TO_INPUT_MAP = {
  'ArrowUp': 'up',
  'ArrowDown': 'down',
  'ArrowLeft': 'left',
  'ArrowRight': 'right',
  'Space': 'confirm',
  'Backspace': 'back',
}

document.addEventListener('keydown', function(event) {
  if(event.code in KEYCODE_TO_INPUT_MAP) {
    console.log(KEYCODE_TO_INPUT_MAP[event.code]);
    console.log(window.controlEvents)
    window.controlEvents.push(KEYCODE_TO_INPUT_MAP[event.code]);
  }
});

// todo: could change this into a class later to make it easier to dependency inject
function consumeInputs(
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
) {
  let usedInputs = 0;
  window.controlEvents.forEach((control) => {
    switch (control) {
      case 'up':
        moveUp();
      case 'down':
        moveDown();
      case 'left':
        moveLeft();
      case 'right':
        moveRight();
      case 'space':
        break;
      case 'back':
        break;
    }
    usedInputs++;
  })
  window.controlEvents.splice(0, usedInputs);
}

export { consumeInputs };