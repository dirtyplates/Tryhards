const logo = document.getElementById('floating-logo');
const logoImg = logo.querySelector('img');
const speed = 3;
let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;
let velocityX = speed * (Math.random() < 0.5 ? 1 : -1);
let velocityY = speed * (Math.random() < 0.5 ? 1 : -1);

logo.style.position = 'absolute';
logo.style.left = posX + 'px';
logo.style.top = posY + 'px';

function moveLogo() {
    posX += velocityX;
    posY += velocityY;

    if (posX + logoImg.width >= window.innerWidth || posX <= 0) {
        velocityX = -velocityX;
    }
    if (posY + logoImg.height >= window.innerHeight || posY <= 0) {
        velocityY = -velocityY;
    }

    logo.style.left = posX + 'px';
    logo.style.top = posY + 'px';

    requestAnimationFrame(moveLogo);
}

moveLogo();
