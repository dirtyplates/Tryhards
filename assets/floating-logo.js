const logo = document.getElementById('floating-logo');
const logoImg = logo.querySelector('img');
const speed = 3; // Speed of movement
let posX = Math.random() * window.innerWidth; // Initial X position
let posY = Math.random() * window.innerHeight; // Initial Y position
let velocityX = speed * (Math.random() < 0.5 ? 1 : -1); // Random horizontal direction
let velocityY = speed * (Math.random() < 0.5 ? 1 : -1); // Random vertical direction

// Set the initial position of the logo
logo.style.position = 'absolute';
logo.style.left = posX + 'px';
logo.style.top = posY + 'px';

function moveLogo() {
    posX += velocityX;
    posY += velocityY;

    // Check for collision with the edges of the viewport
    if (posX + logoImg.width >= window.innerWidth || posX <= 0) {
        velocityX = -velocityX; // Reverse horizontal direction
    }
    if (posY + logoImg.height >= window.innerHeight || posY <= 0) {
        velocityY = -velocityY; // Reverse vertical direction
    }

    // Update the position of the logo
    logo.style.left = posX + 'px';
    logo.style.top = posY + 'px';

    requestAnimationFrame(moveLogo); // Repeat the movement
}

moveLogo(); // Start moving the logo
