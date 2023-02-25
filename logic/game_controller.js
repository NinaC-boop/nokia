const Painting = () => {
    let paintSet = new Set();

    const add = ([x, y]) => {
        paintSet.add(`${x},${y}`);
    }
    
    const reset = () => {
        paintSet = new Set();
    }

    const resetWith = ([x, y]) => {
        paintSet = new Set([`${x},${y}`]);
    }

    const shift = () => {
        const painting = getPainting();
        paintSet = new Set();
        for (const [i, j] of painting) {
            if (i > 0) {
                add([i - 1, j]);
            }
        }
    }

    const getPainting = () => {
        return Array.from(paintSet).map(p => {
            const [x, y] = p.split(',');
            return [parseInt(x), parseInt(y)];
        });
    }

    return {
        add,
        reset,
        resetWith,
        shift,
        getPainting
    };
};

const GameController = () => {
    let COLUMNS = 10;
    let ROWS = 7;

    let board = [];

    let cursor = [0, 0];
    let painting = false;
    const paint = Painting();

    for (let i = 0; i < ROWS; i++) {
        board.push(Array(COLUMNS).fill(TILE));
    }

    const moveXY = (dx, dy) => {
        cursor[0] = Math.max(0, Math.min(cursor[0] + dy, ROWS - 1));
        cursor[1] = Math.max(0, Math.min(cursor[1] + dx, COLUMNS - 1));
        const currentTile = board[cursor[0]][cursor[1]];
        if (painting && currentTile == TILE) {
            paint.add(cursor);
        }
    }

    const moveUp = () => {
        moveXY(0, 1);
    };

    const moveDown = () => {
        moveXY(0, -1);
    };

    const moveRight = () => {
        moveXY(1, 0);
    };

    const moveLeft = () => {
        moveXY(-1, 0);
    };

    const paintStart = () => {
        painting = true;
        paint.resetWith(cursor);
    };

    const paintEnd = () => {
        painting = false;
        for (const [i, j] of paint.getPainting()) {
            board[i][j] = COMPLETE;
        }
        paint.reset();
    };

    const shiftUp = () => {
        cursor[0] = Math.max(cursor[0] - 1, 0);
        board.shift();
        paint.shift();
        board.push(Array(COLUMNS).fill(TILE));
    };

    const getState = () => {
        const state = [];
        for (let i = 0; i < ROWS; i++) {
            state.push([]);
            for (let j = 0; j < COLUMNS; j++) {
                state[i].push(board[i][j]);
            }
        }
        if (painting) {
            for (const [i, j] of paint.getPainting()) {
                state[i][j] = PAINTED;
            }
            state[cursor[0]][cursor[1]] = CURSOR_PAINTED;
        } else {
            state[cursor[0]][cursor[1]] = CURSOR;
        }
        return state;
    };

    const printState = () => {
        const boardPrint = getState();
        for (let i = 0; i < ROWS; i++) {
            console.log(boardPrint[i].join(' '));
        }
        console.log('  ');
    };

    return {
        moveUp,
        moveDown,
        moveRight,
        moveLeft,
        paintStart,
        paintEnd,

        shiftUp,
        getState,
        printState
    }
};
