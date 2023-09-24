  // Función para agregar una dirección y monto simulados al ranking
        function addToRanking(rankingElement, address, amount) {
            const row = document.createElement('tr');
            const addressCell = document.createElement('td');
            const amountCell = document.createElement('td');

            addressCell.textContent = address;
            amountCell.textContent = `${amount.toFixed(2)} BNB`;

            row.appendChild(addressCell);
            row.appendChild(amountCell);
            rankingElement.appendChild(row); // Agregar al final de la lista
            row.classList.add('flash'); // Agregar clase de destello
        }

        // Función para simular actualización de rankings aleatoriamente
        function simulateRankingUpdate() {
            // Simulación de 7 direcciones y montos aleatorios
            const addresses = [];
            for (let i = 0; i < 7; i++) {
                const randomAddress = '0x' + Math.random().toString(16).substr(2, 10);
                const randomAmount = Math.random() * 100;
                addresses.push({ address: randomAddress, amount: randomAmount });
            }

            // Ordenar las direcciones aleatoriamente
            addresses.sort(() => Math.random() - 0.5);

            // Actualizar el Ranking de Referidos
            const referralListElement = document.getElementById('referral-list');
            referralListElement.innerHTML = ''; // Limpiar la tabla
            addresses.forEach(({ address, amount }) => {
                addToRanking(referralListElement, address, amount);
            });

            // Actualizar el Ranking de Acumulación de Egg
            const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
            eggAccumulationListElement.innerHTML = ''; // Limpiar la tabla
            addresses.forEach(({ address, amount }) => {
                addToRanking(eggAccumulationListElement, address, amount);
            });
        }

        // Simular actualización de rankings cada 5 segundos
        setInterval(simulateRankingUpdate, 5000);

        // Llamar a la simulación inicial
        simulateRankingUpdate();
