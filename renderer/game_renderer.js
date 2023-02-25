const GameRenderer = (options) => {
    const {
        offsetResetAction,
        pixelWidth,
        squareWidth,
        bottomPadding,
        leftPadding
    } = options;
    let currentOffset = 0;
    const offsetResetPoint = (squareWidth / pixelWidth) + 1;

    const increaseOffset = () => {
        currentOffset = (currentOffset + 1) % offsetResetPoint;
        if (currentOffset == 0) {
            offsetResetAction();
        }
    }

    const renderBoard = (tools = { fill, rect, noStroke }, board) => {
        const leftP = leftPadding * pixelWidth;
        const bottomP = (bottomPadding - currentOffset) * pixelWidth;

        noStroke();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const x = leftP + j * (squareWidth + pixelWidth);
                const y = bottomP + i * (squareWidth + pixelWidth);
                if (board[i][j] !== INVISIBLE && board[i][j] !== COMPLETE) {
                    fill(FILL_COLOR);
                    rect(x, y, squareWidth, squareWidth);
                    drawTile(tools, x, y, board[i][j], pixelWidth);
                }
            }
        }
    }

    const drawTile = ({ fill, rect }, x, y, tile, pixelWidth) => {
        let pixels = [];
        switch(tile) {
            case CURSOR:
            case CURSOR_PAINTED:
                pixels = [[0, 0], [1, 0], [2, 1], [2, 0]];
                break;
            case PAINTED:
                pixels = [[0, 0], [0, 1], [1, 2], [0, 2]];
                break;
        }
        fill(BG_COLOR);
        for (let i = 0; i < pixels.length; i++) {
            rect(x + pixels[i][0] * pixelWidth, y + pixels[i][1] * pixelWidth,
                pixelWidth, pixelWidth);
        }
    }

    return {
        increaseOffset,
        renderBoard
    }
};
