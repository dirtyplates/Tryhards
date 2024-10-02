document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    createSpark(x, y);
});

document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    createBigSpark(x, y);
});

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    document.body.appendChild(spark);
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    // Set random direction for the spark
    const angle = Math.random() * 2 * Math.PI; // Random angle
    const distance = Math.random() * 50 + 20; // Random distance

    spark.style.setProperty('--x', `${Math.cos(angle) * distance}px`); // For horizontal movement
    spark.style.setProperty('--y', `${Math.sin(angle) * distance}px`); // For vertical movement

    // Remove spark after animation ends
    setTimeout(() => {
        spark.remove();
    }, 500);
}

function createBigSpark(x, y) {
    const bigSpark = document.createElement('div');
    bigSpark.classList.add('big-spark');
    document.body.appendChild(bigSpark);
    bigSpark.style.left = `${x}px`;
    bigSpark.style.top = `${y}px`;

    // Set random direction for the big spark
    const angle = Math.random() * 2 * Math.PI; // Random angle
    const distance = Math.random() * 50 + 50; // Random distance for explosion effect

    bigSpark.style.setProperty('--x', `${Math.cos(angle) * distance}px`); // For horizontal movement
    bigSpark.style.setProperty('--y', `${Math.sin(angle) * distance}px`); // For vertical movement

    // Remove big spark after animation ends
    setTimeout(() => {
        bigSpark.remove();
    }, 500);
}