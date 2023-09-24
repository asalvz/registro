 const gameContainer = document.getElementById('game-container');
        const pollo = document.getElementById('pollo');
        const startButton = document.getElementById('start-button');
        const scoreDisplay = document.getElementById('score');
        let score = 0;
        let gameRunning = false;

        startButton.addEventListener('click', () => {
            startGame();
        });

        function startGame() {
            gameRunning = true;
            startButton.style.display = 'none'; // Ocultar el botón de inicio
            pollo.style.display = 'block'; // Mostrar al pollo
            score = 0;
            updateScore();
            createEgg();
        }

        gameContainer.addEventListener('mousemove', (e) => {
            if (gameRunning) {
                const x = e.clientX - gameContainer.getBoundingClientRect().left;
                pollo.style.left = `${x - pollo.clientWidth / 2}px`;
            }
        });

        function createEgg() {
            if (gameRunning) {
                const egg = document.createElement('div');
                egg.classList.add('egg');
                egg.style.left = `${Math.random() * (gameContainer.clientWidth - 30)}px`;
                gameContainer.appendChild(egg);

                const fallInterval = setInterval(() => {
                    if (gameRunning) {
                        const eggY = parseInt(egg.style.top) || 0;
                        const maxY = gameContainer.clientHeight - egg.clientHeight;
                        if (eggY >= maxY) {
                            clearInterval(fallInterval);
                            gameContainer.removeChild(egg);
                            score--; // Restar puntos si se cae un huevo
                            updateScore();
                            createEgg();
                        } else {
                            egg.style.top = `${eggY + 5}px`;
                            const polloX = pollo.getBoundingClientRect().left + pollo.clientWidth / 2;
                            const polloY = pollo.getBoundingClientRect().top;
                            const eggX = egg.getBoundingClientRect().left + egg.clientWidth / 2;
                            const eggY = egg.getBoundingClientRect().top + egg.clientHeight;
                            if (Math.abs(polloX - eggX) < 25 && eggY >= polloY) {
                                clearInterval(fallInterval);
                                gameContainer.removeChild(egg);
                                score++; // Sumar puntos si el pollo atrapa un huevo
                                updateScore();
                                createEgg();
                            }
                        }
                    }
                }, 30);
            }
        }

        function updateScore() {
            scoreDisplay.textContent = `Puntuación: ${score}`;
            if (score <= -10) {
                endGame();
            }
        }

        function endGame() {
            gameRunning = false;
            pollo.style.display = 'none'; // Ocultar el pollo al final del juego
            startButton.style.display = 'block'; // Mostrar el botón de inicio
            scoreDisplay.textContent = `Game Over. Puntuación final: ${score}`;
        }
