const pollo = document.getElementById('pollo');
const gameContainer = pollo.parentElement;
const scoreDisplay = document.createElement('div');
gameContainer.appendChild(scoreDisplay);
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.style.fontSize = '24px';
scoreDisplay.style.color = 'white';
let score = 0;
let gameRunning = true; // Variable para controlar si el juego está en curso

pollo.addEventListener('mousemove', (e) => {
    const x = e.clientX - gameContainer.getBoundingClientRect().left;
    pollo.style.left = `${x - pollo.clientWidth / 2}px`;
});

function createCoyote() {
    if (gameRunning) {
        const coyote = document.createElement('div');
        coyote.style.position = 'absolute';
        coyote.style.width = '50px';
        coyote.style.height = '50px';
        coyote.style.backgroundImage = "url('https://low-chicken-ranch.netlify.app/chicken5.png')"; /* Ruta de la imagen del coyote */
        coyote.style.backgroundSize = 'cover';
        coyote.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;
        gameContainer.appendChild(coyote);

        const moveCoyote = () => {
            const maxY = gameContainer.clientHeight - coyote.clientHeight;
            let y = 0;

            const moveInterval = setInterval(() => {
                if (y >= maxY) {
                    clearInterval(moveInterval);
                    gameContainer.removeChild(coyote);
                    if (gameRunning) {
                        score--; // Restar puntos cuando el coyote llega al suelo
                        updateScore();
                    }
                } else {
                    y += 5;
                    coyote.style.top = `${y}px`;

                    const polloX = pollo.getBoundingClientRect().left + pollo.clientWidth / 2;
                    const polloY = pollo.getBoundingClientRect().top;

                    const coyoteX = coyote.getBoundingClientRect().left + coyote.clientWidth / 2;
                    const coyoteY = coyote.getBoundingClientRect().top + coyote.clientHeight;

                    if (Math.abs(polloX - coyoteX) < 25 && coyoteY >= polloY) {
                        clearInterval(moveInterval);
                        gameContainer.removeChild(coyote);
                        if (gameRunning) {
                            score++; // Aumentar puntos cuando el pollo atrapa el coyote
                            updateScore();
                        }
                    }
                }
            }, 30);
        };

        moveCoyote();
    }
}

function updateScore() {
    scoreDisplay.textContent = `Puntuación: ${score}`;
    
    // Verificar si el juego ha terminado
    if (score <= -10) { // Cambia este valor a la condición deseada para el final del juego
        endGame();
    }
}

function endGame() {
    gameRunning = false;
    scoreDisplay.textContent = `Game Over. Puntuación final: ${score}`;
}

setInterval(() => {
    createCoyote();
}, 2000);
