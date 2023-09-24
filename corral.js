   // Función para agregar una dirección y monto simulados al ranking
        function addToRanking(rankingElement, address, amount) {
            const row = document.createElement('tr');
            const addressCell = document.createElement('td');
            const amountCell = document.createElement('td');

            addressCell.textContent = address;
            amountCell.textContent = `${amount} BNB`;

            row.appendChild(addressCell);
            row.appendChild(amountCell);
            rankingElement.prepend(row); // Agregar en la parte superior de la lista
            row.classList.add('flash'); // Agregar clase de destello
        }

        // Función para simular actualización de rankings
        function simulateRankingUpdate() {
            // Simulación de dirección y monto aleatorios
            const randomAddress = '0x' + Math.random().toString(16).substr(2, 10);
            const randomAmount = Math.floor(Math.random() * 100);

            // Actualizar el Ranking de Referidos
            const referralListElement = document.getElementById('referral-list');
            addToRanking(referralListElement, randomAddress, randomAmount);

            // Actualizar el Ranking de Acumulación de Egg
            const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
            addToRanking(eggAccumulationListElement, randomAddress, randomAmount);
        }

        // Simular actualización de rankings cada 5 segundos
        setInterval(simulateRankingUpdate, 5000);
