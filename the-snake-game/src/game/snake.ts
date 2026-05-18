import { unitSize, snakeColor, snakeBorder, gameWidth, gameHeitght } from "../core/constants.ts";
import { showDialog } from "../ui/dialogs.ts";
import { ctx, scoreText } from "../ui/board.ts";
import { state } from "../core/state.ts";
import { createFood } from "./food.ts";


export function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    state.snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, unitSize, unitSize);
        ctx.strokeRect(segment.x, segment.y, unitSize, unitSize);
    });
};

export function moveSnake() {
    const head = {
        x: state.snake[0].x + state.xVelocity,
        y: state.snake[0].y + state.yVelocity
    }
    state.snake.unshift(head);
    if (state.snake[0].x == state.foodX && state.snake[0].y == state.foodY) {
        state.score += 1;
        scoreText.textContent = state.score.toString();
        createFood();
    } else {
        state.snake.pop();
    }
};

export function changeDirection(event: KeyboardEvent) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    const goingUp = state.yVelocity == -unitSize;
    const goingDown = state.yVelocity == unitSize;
    const goingLeft = state.xVelocity == -unitSize;
    const goingRight = state.xVelocity == unitSize;

    switch (true) {
        case (keyPressed == LEFT && !goingRight):
            state.xVelocity = -unitSize;
            state.yVelocity = 0;
            break;
        case (keyPressed == RIGHT && !goingLeft):
            state.xVelocity = unitSize;
            state.yVelocity = 0;
            break;
        case (keyPressed == UP && !goingDown):
            state.xVelocity = 0;
            state.yVelocity = -unitSize;
            break;
        case (keyPressed == DOWN && !goingUp):
            state.xVelocity = 0;
            state.yVelocity = unitSize;
            break;
    }
};

export function checkGameOver() {
    switch (true) {
        case (state.snake[0].x < 0):
            state.running = false;
            showDialog();
            break;
        case (state.snake[0].x >= gameWidth):
            state.running = false;
            showDialog();
            break;
        case (state.snake[0].y < 0):
            state.running = false;
            showDialog();
            break;
        case (state.snake[0].y >= gameHeitght):
            state.running = false;
            showDialog();
            break;
    }
    for (let i = 1; i < state.snake.length; i += 1) {
        if (state.snake[0].x == state.snake[i].x && state.snake[0].y == state.snake[i].y) {
            state.running = false;
            showDialog();
            break;
        }
    }
};