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

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 50 + 20;

    spark.style.setProperty('--x', `${Math.cos(angle) * distance}px`); 
    spark.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

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

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 50 + 50;

    bigSpark.style.setProperty('--x', `${Math.cos(angle) * distance}px`); 
    bigSpark.style.setProperty('--y', `${Math.sin(angle) * distance}px`); 

    setTimeout(() => {
        bigSpark.remove();
    }, 500);
}