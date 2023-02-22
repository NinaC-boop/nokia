const GameController = () => {

    let board = [];

    let cursor = [0, 0];
    let painting = false;
    let paint = new Set();

    for (let i = 0; i < 5; i++) {
        board.push(Array(9).fill(TILE));
    }

    const moveXY = (dx, dy) => {
        cursor[0] = Math.max(0, Math.min(cursor[0] + dy, 5 - 1));
        cursor[1] = Math.max(0, Math.min(cursor[1] + dx, 9 - 1));
        const currentTile = board[cursor[0]][cursor[1]];
        if (painting && currentTile == TILE) {
            paint.add(`${cursor[0]},${cursor[1]}`);
        }
        console.log(painting, currentTile, paint);
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
        paint = new Set([`${cursor[0]},${cursor[1]}`]);
    };

    const paintEnd = () => {
        painting = false;
        console.log(paint);
        for (const p of paint) {
            const [i, j] = p.split(',');
            board[i][j] = COMPLETE;
        }
        paint = new Set();
    };

    const getState = () => {
        const state = [];
        for (let i = 0; i < 5; i++) {
            state.push([]);
            for (let j = 0; j < 9; j++) {
                state[i].push(board[i][j]);
            }
        }
        if (painting) {
            for (const p of paint) {
                const [i, j] = p.split(',');
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
        for (let i = 0; i < 5; i++) {
            console.log(boardPrint[i].join(' '));
        }
    };

    return {
        moveUp,
        moveDown,
        moveRight,
        moveLeft,
        paintStart,
        paintEnd,

        getState,
        printState
    }
};
