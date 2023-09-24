  // Función para generar un número aleatorio entre min y max
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Función para actualizar el ranking de referidos simulado
        function updateReferralRanking() {
            const referralListElement = document.getElementById('referral-list');
            const rows = referralListElement.getElementsByTagName('tr');

            // Actualizar y reorganizar filas aleatoriamente
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                row.classList.add('flash'); // Aplicar efecto de destello

                // Generar datos aleatorios
                const position = i + 1;
                const address = '0x' + Math.random().toString(16).slice(2, 10); // Dirección aleatoria
                const referCount = getRandomNumber(1, 999); // Cantidad de referidos aleatoria

                // Actualizar contenido de la fila
                const cells = row.getElementsByTagName('td');
                cells[0].textContent = `#${position}`;
                cells[1].textContent = address;
                cells[2].textContent = referCount;

                // Reorganizar filas en función de la cantidad de referidos
                const rowCount = referralListElement.rows.length;
                const currentPosition = i + 1;
                const newPosition = getRandomNumber(1, rowCount);
                referralListElement.insertBefore(row, referralListElement.rows[newPosition]);
            }
        }

        // Función para actualizar el ranking de acumulación de Egg simulado
        function updateEggAccumulationRanking() {
            const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
            const rows = eggAccumulationListElement.getElementsByTagName('tr');

            // Actualizar y reorganizar filas aleatoriamente
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                row.classList.add('flash'); // Aplicar efecto de destello

                // Generar datos aleatorios
                const position = i + 1;
                const address = '0x' + Math.random().toString(16).slice(2, 10); // Dirección aleatoria
                const eggAmount = (getRandomNumber(5, 2400) / 100).toFixed(2); // Cantidad de Egg aleatoria

                // Actualizar contenido de la fila
                const cells = row.getElementsByTagName('td');
                cells[0].textContent = `#${position}`;
                cells[1].textContent = address;
                cells[2].textContent = `${eggAmount} BNB`;

                // Reorganizar filas en función de la cantidad de Egg acumulados
                const rowCount = eggAccumulationListElement.rows.length;
                const currentPosition = i + 1;
                const newPosition = getRandomNumber(1, rowCount);
                eggAccumulationListElement.insertBefore(row, eggAccumulationListElement.rows[newPosition]);
            }
        }

        // Llamar a las funciones de actualización de manera periódica
        setInterval(() => {
            updateReferralRanking();
            updateEggAccumulationRanking();
        }, 3000); // Actualizar cada 3 segundos
