import { dialog, btnYes, btnNo } from "./board.ts";
import { requestAds } from "./ads.ts";
import { gameStart } from "./main.ts";

export function showDialog() {
    if (dialog) dialog.classList.remove("hidden");
}

export function hideDialog() {
    if (dialog) dialog.classList.add("hidden");
}

btnYes?.addEventListener("click", () => {
    hideDialog();
    gameStart();
    requestAds();
})

btnNo?.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
})