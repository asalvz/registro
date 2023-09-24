   // Función para generar un número aleatorio entre min y max
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Función para actualizar el ranking de referidos simulado
        function updateReferralRanking() {
            const referralListElement = document.getElementById('referral-list');
            referralListElement.innerHTML = ''; // Limpiar la tabla

            // Generar 7 direcciones aleatorias para el ranking
            for (let i = 1; i <= 7; i++) {
                const row = document.createElement('tr');
                const positionCell = document.createElement('td');
                const addressCell = document.createElement('td');
                const referCountCell = document.createElement('td');

                const position = i;
                const address = '0x' + Math.random().toString(16).slice(2, 10); // Dirección aleatoria
                const referCount = getRandomNumber(1, 999); // Cantidad de referidos aleatoria

                positionCell.textContent = `#${position}`;
                addressCell.textContent = address;
                referCountCell.textContent = referCount;

                row.appendChild(positionCell);
                row.appendChild(addressCell);
                row.appendChild(referCountCell);

                referralListElement.appendChild(row);
            }
        }

        // Función para actualizar el ranking de acumulación de Egg simulado
        function updateEggAccumulationRanking() {
            const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
            eggAccumulationListElement.innerHTML = ''; // Limpiar la tabla

            // Generar 7 direcciones aleatorias para el ranking
            for (let i = 1; i <= 7; i++) {
                const row = document.createElement('tr');
                const positionCell = document.createElement('td');
                const addressCell = document.createElement('td');
                const eggAmountCell = document.createElement('td');

                const position = i;
                const address = '0x' + Math.random().toString(16).slice(2, 10); // Dirección aleatoria
                const eggAmount = (getRandomNumber(5, 2400) / 100).toFixed(2); // Cantidad de Egg aleatoria

                positionCell.textContent = `#${position}`;
                addressCell.textContent = address;
                eggAmountCell.textContent = `${eggAmount} BNB`;

                row.appendChild(positionCell);
                row.appendChild(addressCell);
                row.appendChild(eggAmountCell);

                eggAccumulationListElement.appendChild(row);
            }
        }

        // Llamar a las funciones de actualización al cargar la página
        window.addEventListener('load', () => {
            updateReferralRanking();
            updateEggAccumulationRanking();
        });
