const body = document.querySelector("body");

const MAX_IMAGE_NUM = 5;

function handleLoad(event) {
    event.target.classList.remove("unloadedImg");
    event.target.classList.add("loadedImg");
}

function paintImage(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum}.jpg`;
    image.classList.add("unloadedImg");
    image.addEventListener("load", handleLoad);
    body.appendChild(image);
}

function generateRandom() {
    return Math.floor(Math.random() * MAX_IMAGE_NUM);
}

function init() {
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

init();
