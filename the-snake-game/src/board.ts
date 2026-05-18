import { boardBackground, gameWidth, gameHeitght } from "./constants";

export const gameBoard = document.getElementById("gameBoard") as HTMLCanvasElement;
export const ctx = gameBoard.getContext("2d");
export const scoreText = document.querySelector("#scoreText");
export const resetBtn = document.querySelector("#resetBtn");

export const dialog = document.getElementById("customDialog");
export const btnYes = document.getElementById("btnYes");
export const btnNo = document.getElementById("btnNo");


export function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeitght);
};