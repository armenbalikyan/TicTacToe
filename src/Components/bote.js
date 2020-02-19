import { findWinner } from "../utils/functions";

export function bestMove(human, ai, boxes) {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
        // Is the spot available?
        if (boxes[i] == " ") {
            boxes[i] = ai;
            let score = minimax(boxes, false, human, ai);
            boxes[i] = " ";
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    return move;
    //currentPlayer = human;
}

let scores = {
    X: -10,
    O: 10,
    tie: 0
};
function min(x, y) {
    if (x < y) {
        return x
    } else {
        return y;
    }
}
function max(x, y) {
    if (x > y) {
        return x
    } else {
        return y;
    }
}
function minimax(boxes, isMaximizing, human, ai) {
    let result = findWinner(boxes);
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            // Is the spot available?
            if (boxes[i] == " ") {
                boxes[i] = ai;
                let score = minimax(boxes, false, human, ai);
                boxes[i] = " ";
                bestScore = max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            // Is the spot available?
            if (boxes[i] == " ") {
                boxes[i] = human;
                let score = minimax(boxes, true, human, ai);
                boxes[i] = " ";
                bestScore = min(score, bestScore);
            }
        }
        return bestScore;
    }
}
