declare var google: any;

// Замість імпорту з main.ts (кругова залежність) — зберігаємо callback
let onAdFinished: (() => void) | null = null;

// Додаємо типізацію для елементів
const adContainer = document.getElementById("adContainer") as HTMLElement;
const videoElement = document.getElementById("videoElement") as HTMLVideoElement;

const SAMPLE_AD_TAG =
    "https://pubads.g.doubleclick.net/gampad/ads?" +
    "iu=/21775744923/external/single_ad_samples&sz=640x480" +
    "&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90" +
    "&gdfp_req=1&output=vast&unviewed_position_start=1" +
    "&env=vp&impl=s&correlator=";

let adsLoader: any;
let adsManager: any;
let adDisplayContainer: any;
let imaInitialized = false;

export function initIMA() {
    if (imaInitialized) return;
    imaInitialized = true;

    adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
    adDisplayContainer.initialize();

    adsLoader = new google.ima.AdsLoader(adDisplayContainer);

    adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false
    );
    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false
    );
}

export function requestAds(callback: () => void) {
    onAdFinished = callback;
    initIMA();

    if (adsManager) {
        adsManager.destroy();
        adsManager = null;
    }

    adContainer.classList.remove("hidden");

    const adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = SAMPLE_AD_TAG;
    adsRequest.linearAdSlotWidth = window.innerWidth;
    adsRequest.linearAdSlotHeight = window.innerHeight;
    adsRequest.nonLinearAdSlotWidth = window.innerWidth;
    adsRequest.nonLinearAdSlotHeight = window.innerHeight;

    adsLoader.requestAds(adsRequest);
}

// Додаємо тип (adsManagerLoadedEvent: any)
function onAdsManagerLoaded(adsManagerLoadedEvent: any) {
    adsManager = adsManagerLoadedEvent.getAdsManager(videoElement);

    adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdDone);
    adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, onAdDone);
    adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdDone);
    adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);

    try {
        adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
        adsManager.start();
    } catch (e) {
        onAdError();
    }
}

function onAdDone() {
    adContainer.classList.add("hidden");
    if (onAdFinished) {
        const cb = onAdFinished;
        onAdFinished = null; // Очищаємо, щоб не викликати двічі
        cb();
    }
}

function onAdError() {
    adContainer.classList.add("hidden");
    if (adsManager) { adsManager.destroy(); adsManager = null; }
    if (onAdFinished) {
        const cb = onAdFinished;
        onAdFinished = null;
        cb();
    }
}

window.addEventListener("resize", () => {
    if (adsManager) {
        adsManager.resize(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
    }
});
