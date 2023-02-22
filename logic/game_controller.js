const GameController = () => {

    let board = [];
    let cursor = [0, 0];
    let painting = false;
    let paint = [];

    const init = () => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 9; j++) {
                board[i][j] = TILE;
            }
        }
        board[cursor[0]][cursor[1]] = CURSOR;
    }

    const moveUp = () => {
        if (painting) {
            board[cursor[0]][cursor[1]] = PAINTED;
            cursor[0] = Math.max(cursor[0] + 1, 5 - 1);
            board[cursor[0]][cursor[1]] = CURSOR_PAINTED;
        } else {
            board[cursor[0]][cursor[1]] = TILE;
            cursor[0] = Math.max(cursor[0] + 1, 5 - 1);
            board[cursor[0]][cursor[1]] = CURSOR;
        }
    };

    const moveDown = () => {

    };
    const moveRight = () => {

    };
    const moveLeft = () => {

    };
    const paintStart = () => {
        painting = true;

    };
    const paintEnd = () => {
        if (painting == true) {
            painting = false;
        }

    };

    const getState = () => {

    };

    return {
        moveUp,
        moveDown,
        moveRight,
        moveLeft,
        paintStart,
        paintEnd,

        getState
    }
};