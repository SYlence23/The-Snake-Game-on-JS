const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

const dialog = document.getElementById("customDialog");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

// const gameWidth = gameBoard.width;
// const gameHeitght = gameBoard.height;
// const boardBackground = "white";
// const snakeColor = "lightgreen";
// const snakeBorder = "black";
// const foodColor = "red";
// const unitSize = 25;
// let running = false;
// let xVelocity = unitSize;
// let yVelocity = 0;
// let foodX;
// let foodY;
// let score = 0;
// let snake = [
//     { x: unitSize * 4, y: 0 },
//     { x: unitSize * 3, y: 0 },
//     { x: unitSize * 2, y: 0 },
//     { x: unitSize, y: 0 },
//     { x: 0, y: 0 }
// ];

window.addEventListener("keydown", changeDirection);

window.addEventListener("keydown", event => {
    if (!dialog.classList.contains("hidden")) {
        if (event.key == "Enter") {
            btnYes.click();
        }
        else if (event.key == "Backspace") {
            btnNo.click();
        }
    }
})

resetBtn.addEventListener("click", resetGame);

btnYes.addEventListener("click", () => {
    hideDialog();
    requestAds();
})

btnNo.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
})
showDialog();

function showDialog() {
    dialog.classList.remove("hidden");
}

function hideDialog() {
    dialog.classList.add("hidden");
}


// const adContainer = document.getElementById("adContainer");
// const videoElement = document.getElementById("videoElement");

// const SAMPLE_AD_TAG =
//     "https://pubads.g.doubleclick.net/gampad/ads?" +
//     "iu=/21775744923/external/single_ad_samples&sz=640x480" +
//     "&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90" +
//     "&gdfp_req=1&output=vast&unviewed_position_start=1" +
//     "&env=vp&impl=s&correlator=";

// let adsLoader;
// let adsManager;
// let adDisplayContainer;
// let imaInitialized = false;

// function initIMA() {
//     if (imaInitialized) return;
//     imaInitialized = true;

//     adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
//     adDisplayContainer.initialize();

//     adsLoader = new google.ima.AdsLoader(adDisplayContainer);

//     adsLoader.addEventListener(
//         google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
//         onAdsManagerLoaded,
//         false
//     );
//     adsLoader.addEventListener(
//         google.ima.AdErrorEvent.Type.AD_ERROR,
//         onAdError,
//         false
//     );
// }

// function requestAds() {
//     initIMA();

//     if (adsManager) {
//         adsManager.destroy();
//         adsManager = null;
//     }

//     adContainer.classList.remove("hidden");

//     const adsRequest = new google.ima.AdsRequest();
//     adsRequest.adTagUrl = SAMPLE_AD_TAG;
//     adsRequest.linearAdSlotWidth = window.innerWidth;
//     adsRequest.linearAdSlotHeight = window.innerHeight;
//     adsRequest.nonLinearAdSlotWidth = window.innerWidth;
//     adsRequest.nonLinearAdSlotHeight = window.innerHeight;

//     adsLoader.requestAds(adsRequest);
// }

// function onAdsManagerLoaded(adsManagerLoadedEvent) {
//     adsManager = adsManagerLoadedEvent.getAdsManager(videoElement);

//     adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdDone);
//     adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, onAdDone);
//     adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdDone);
//     adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);

//     try {
//         adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
//         adsManager.start();
//     } catch (e) {
//         onAdError();
//     }
// }

// function onAdDone() {
//     adContainer.classList.add("hidden");
//     resetGame();
// }

// function onAdError() {
//     adContainer.classList.add("hidden");
//     if (adsManager) { adsManager.destroy(); adsManager = null; }
//     resetGame();
// }

// window.addEventListener("resize", () => {
//     if (adsManager) {
//         adsManager.resize(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
//     }
// });




// function gameStart() {
//     running = true;
//     scoreText.textContent = score;
//     createFood();
//     drawFood();
//     nextTick();
// };
// function nextTick() {
//     if (running) {
//         setTimeout(() => {
//             clearBoard();
//             drawFood();
//             moveSnake();
//             drawSnake();
//             checkGameOver();
//             nextTick();
//         }, 75);
//     }
// };
// function clearBoard() {
//     ctx.fillStyle = boardBackground;
//     ctx.fillRect(0, 0, gameWidth, gameHeitght);
// };
function createFood() {
    const randomFood = (min, max) => {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    };
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);

};


function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};

function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    }
    snake.unshift(head);
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        scoreText.textContent = score;
        createFood();
    } else {
        snake.pop();
    }

};
// function drawSnake() {
//     ctx.fillStyle = snakeColor;
//     ctx.strokeStyle = snakeBorder;
//     snake.forEach(segment => {
//         ctx.fillRect(segment.x, segment.y, unitSize, unitSize);
//         ctx.strokeRect(segment.x, segment.y, unitSize, unitSize);
//     });
// };
// function changeDirection(event) {
//     const keyPressed = event.keyCode;
//     const LEFT = 37;
//     const RIGHT = 39;
//     const UP = 38;
//     const DOWN = 40;


//     const goingUp = yVelocity == -unitSize;
//     const goingDown = yVelocity == unitSize;
//     const goingLeft = xVelocity == -unitSize;
//     const goingRight = xVelocity == unitSize;

//     switch (true) {
//         case (keyPressed == LEFT && !goingRight):
//             xVelocity = -unitSize;
//             yVelocity = 0;
//             break;
//         case (keyPressed == RIGHT && !goingLeft):
//             xVelocity = unitSize;
//             yVelocity = 0;
//             break;
//         case (keyPressed == UP && !goingDown):
//             xVelocity = 0;
//             yVelocity = -unitSize;
//             break;
//         case (keyPressed == DOWN && !goingUp):
//             xVelocity = 0;
//             yVelocity = unitSize;
//             break;
//     }
// };
// function checkGameOver() {
//     switch (true) {
//         case (snake[0].x < 0):
//             running = false;
//             showDialog();
//             break;
//         case (snake[0].x >= gameWidth):
//             running = false;
//             showDialog();
//             break;
//         case (snake[0].y < 0):
//             running = false;
//             showDialog();
//             break;
//         case (snake[0].y >= gameHeitght):
//             running = false;
//             showDialog();
//             break;

//     }
//     for (let i = 1; i < snake.length; i += 1) {
//         if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
//             running = false;
//             showDialog();
//             break;
//         }
//     }
// };
function displayGameOver() {

};
// function resetGame() {
//     score = 0;
//     xVelocity = unitSize;
//     yVelocity = 0;
//     snake = [
//         { x: unitSize * 4, y: 0 },
//         { x: unitSize * 3, y: 0 },
//         { x: unitSize * 2, y: 0 },
//         { x: unitSize, y: 0 },
//         { x: 0, y: 0 }
//     ];
//     gameStart();
// };



