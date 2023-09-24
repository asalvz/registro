  // Simulación de datos de ranking de referidos y acumulación de Egg
        const referralRankingData = [
            "0xAddress1",
            "0xAddress2",
            "0xAddress3",
            "0xAddress4",
            "0xAddress5"
        ];

        const eggAccumulationRankingData = [
            "0xAddress6",
            "0xAddress7",
            "0xAddress8",
            "0xAddress9",
            "0xAddress10"
        ];

        // Función para actualizar el Ranking de Referidos
        document.getElementById('update-referral-ranking-button').addEventListener('click', () => {
            const referralListElement = document.getElementById('referral-list');
            referralListElement.innerHTML = '';

            for (let i = 0; i < referralRankingData.length; i++) {
                const row = document.createElement('tr');
                const rankCell = document.createElement('td');
                rankCell.textContent = `Puesto ${i + 1}`;
                const addressCell = document.createElement('td');
                addressCell.textContent = referralRankingData[i];

                row.appendChild(rankCell);
                row.appendChild(addressCell);
                referralListElement.appendChild(row);
            }
        });

        // Función para actualizar el Ranking de Acumulación de Egg
        document.getElementById('update-egg-accumulation-ranking-button').addEventListener('click', () => {
            const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
            eggAccumulationListElement.innerHTML = '';

            for (let i = 0; i < eggAccumulationRankingData.length; i++) {
                const row = document.createElement('tr');
                const rankCell = document.createElement('td');
                rankCell.textContent = `Puesto ${i + 1}`;
                const addressCell = document.createElement('td');
                addressCell.textContent = eggAccumulationRankingData[i];

                row.appendChild(rankCell);
                row.appendChild(addressCell);
                eggAccumulationListElement.appendChild(row);
            }
        });

        // Simulación de datos del usuario
        const userAddressData = "0xUserAddress";
        const userEggAmountData = 1000;

        // Actualiza los datos del usuario al cargar la página
        window.addEventListener('load', () => {
            document.getElementById('real-user-address').textContent = userAddressData;
            document.getElementById('real-egg-amount').textContent = userEggAmountData;
        });
