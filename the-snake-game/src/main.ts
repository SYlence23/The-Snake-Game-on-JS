import './style.css';
import { createFood, drawFood } from './game/food.ts';
import { state } from './core/state.ts';
import { scoreText, clearBoard, resetBtn } from './ui/board.ts';
import { drawSnake, moveSnake, checkGameOver, changeDirection } from './game/snake.ts';
import { unitSize } from './core/constants.ts';
import { showDialog } from './ui/dialogs.ts';

window.addEventListener("keydown", changeDirection);
window.addEventListener("keydown", (event: KeyboardEvent) => {
  const dialog = document.getElementById("customDialog");
  if (dialog && !dialog.classList.contains("hidden")) {
    if (event.key === "Enter") document.getElementById("btnYes")?.click();
    else if (event.key === "Backspace") document.getElementById("btnNo")?.click();
  }
});

resetBtn?.addEventListener("click", resetGame);

let timeoutId: ReturnType<typeof setTimeout> | null = null;

export function gameStart() {
  state.running = true;
  if (scoreText) scoreText.textContent = state.score.toString();
  createFood();
  drawFood();
  nextTick();
};

function nextTick() {
  if (timeoutId) clearTimeout(timeoutId); // Очищаємо попередній таймер

  if (state.running) {
    timeoutId = setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 75);
  }
};

export function resetGame() {
  state.score = 0;
  state.xVelocity = unitSize;
  state.yVelocity = 0;
  state.snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
  ];
  gameStart();
};

// Показати діалог одразу при відкритті сторінки
showDialog();
