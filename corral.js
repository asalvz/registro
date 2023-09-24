       const referralAddresses = [];
        const eggAccumulationAddresses = [];

        // Función para generar una dirección aleatoria de 25 caracteres
        function generateRandomAddress() {
            let address = '0x';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < 25; i++) {
                address += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            address += '...'; // Agregar puntos suspensivos
            return address;
        }

        // Función para generar un número aleatorio en el rango de 0.05 a 35
        function getRandomBNBAmount() {
            return (Math.random() * (35 - 0.05) + 0.05).toFixed(2);
        }

        // Función para agregar una dirección y monto simulados al ranking
        function addToRanking(rankingElement, address, amount) {
            if (rankingElement.rows.length >= 10) {
                rankingElement.deleteRow(9); // Eliminar la última fila si hay más de 10
            }

            const row = rankingElement.insertRow(0);
            const addressCell = row.insertCell(0);
            const amountCell = row.insertCell(1);

            addressCell.textContent = address;
            amountCell.textContent = `${amount} BNB`;
            amountCell.style.color = 'green'; // Establecer el color en verde

            row.classList.add('flash'); // Agregar clase de destello
        }

        // Función para simular actualización de rankings aleatoriamente
        function simulateRankingUpdate() {
            // Simulación de 1 dirección y monto aleatorio para Referidos
            const randomAddress = generateRandomAddress();
            const randomAmount = getRandomBNBAmount();
            addToRanking(referralListElement, randomAddress, randomAmount);

            // Simulación de 1 dirección y monto aleatorio para Acumulación de Egg
            const randomAddress2 = generateRandomAddress();
            const randomAmount2 = getRandomBNBAmount();
            addToRanking(eggAccumulationListElement, randomAddress2, randomAmount2);
        }

        // Simular actualización de rankings cada 5 segundos
        setInterval(simulateRankingUpdate, 5000);

        // Obtener las referencias a las tablas
        const referralListElement = document.getElementById('referral-list').getElementsByTagName('tbody')[0];
        const eggAccumulationListElement = document.getElementById('egg-accumulation-list').getElementsByTagName('tbody')[0];

        // Llamar a la simulación inicial
        simulateRankingUpdate();
