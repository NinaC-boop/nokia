let KEYCODE_TO_INPUT_MAP = {
  'ArrowUp': UP,
  'ArrowDown': DOWN,
  'ArrowLeft': LEFT,
  'ArrowRight': RIGHT,
  'Space': START,
  'KeyZ': CANCEL
}

const subscribers = [];

document.addEventListener('keydown', function(event) {
    if (KEYCODE_TO_INPUT_MAP[event.code]) {
        for (let i = 0; i < subscribers.length; i++) {
            const keyAction = subscribers[i];
            keyAction(KEYCODE_TO_INPUT_MAP[event.code]);
        }
    }
});

const addKeyAction = (keyAction) => {
    subscribers.push(keyAction);
}

