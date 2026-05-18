import { unitSize } from "./constants";

export const state = {
    running: false,
    xVelocity: unitSize,
    yVelocity: 0,
    foodX: 0,
    foodY: 0,
    score: 0,
    snake: [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ]
};