const body = document.querySelector("body");

const MAX_IMAGE_NUM = 5;

function paintImage(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum}.jpg`;
    image.classList.add("bgImg");
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
