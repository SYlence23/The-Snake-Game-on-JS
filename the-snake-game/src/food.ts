import { state } from "./state.ts";
import { gameWidth, unitSize, foodColor } from "./constants.ts";
import { ctx } from "./board.ts";

export function createFood() {
    const randomFood = (min: number, max: number) => {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    };
    state.foodX = randomFood(0, gameWidth - unitSize);
    state.foodY = randomFood(0, gameWidth - unitSize); // Збережено оригінальну логіку з index.js
};

export function drawFood() {
    if (ctx) {
        ctx.fillStyle = foodColor;
        ctx.fillRect(state.foodX, state.foodY, unitSize, unitSize);
    }
};
