import { boardBackground, gameWidth, gameHeitght } from "./constants";

export const gameBoard = document.getElementById("gameBoard") as HTMLCanvasElement;
export const ctx = gameBoard.getContext("2d")!;
export const scoreText = document.querySelector("#scoreText") as HTMLElement;
export const resetBtn = document.querySelector("#resetBtn") as HTMLButtonElement;

export const dialog = document.getElementById("customDialog") as HTMLElement;
export const btnYes = document.getElementById("btnYes") as HTMLButtonElement;
export const btnNo = document.getElementById("btnNo") as HTMLButtonElement;


export function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeitght);
};