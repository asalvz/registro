// Función para agregar una dirección y monto en BNB simulado al ranking de acumulación de Egg
function addToEggAccumulationRanking(position, address, eggAmount) {
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    const row = eggAccumulationListElement.insertRow(position);
    const positionCell = row.insertCell(0);
    const addressCell = row.insertCell(1);
    const eggAmountCell = row.insertCell(2);

    positionCell.textContent = `#${position + 1}`;
    addressCell.textContent = address;

    // Verificar si eggAmount es numérico antes de formatearlo
    if (typeof eggAmount === 'number') {
        eggAmountCell.textContent = `${eggAmount.toFixed(2)} BNB`;
    } else {
        eggAmountCell.textContent = 'N/A'; // Mostrar 'N/A' si no es numérico
    }
}

// ...

// Función para simular actualización de rankings aleatoriamente
function simulateRankingUpdate() {
    // Simulación de 7 direcciones y montos aleatorios
    const addresses = [];
    for (let i = 0; i < 7; i++) {
        const randomAddress = generateRandomAddress();
        const randomReferCount = Math.floor(Math.random() * 100); // Cantidad de referidos simulados
        const randomEggAmount = Math.random() * 100; // Monto en BNB simulado
        addresses.push({ position: i, address: randomAddress, referCount: randomReferCount, eggAmount: randomEggAmount });
    }

    // Ordenar las direcciones aleatoriamente
    addresses.sort(() => Math.random() - 0.5);

    // Crear filas vacías en ambas tablas si no existen
    const referralListElement = document.getElementById('referral-list');
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');

    if (referralListElement.rows.length === 0) {
        for (let i = 0; i < 7; i++) {
            addToReferralRanking(i, '', '');
        }
    }

    if (eggAccumulationListElement.rows.length === 0) {
        for (let i = 0; i < 7; i++) {
            addToEggAccumulationRanking(i, '', '');
        }
    }

    // Actualizar el Ranking de Referidos
    referralListElement.innerHTML = ''; // Limpiar la tabla
    addresses.forEach(({ position, address, referCount }) => {
        addToReferralRanking(position, address, referCount);
    });

    // Actualizar el Ranking de Acumulación de Egg
    eggAccumulationListElement.innerHTML = ''; // Limpiar la tabla
    addresses.forEach(({ position, address, eggAmount }) => {
        addToEggAccumulationRanking(position, address, eggAmount);
    });
}

// Simular actualización de rankings cada 5 segundos
setInterval(simulateRankingUpdate, 5000);

// Llamar a la simulación inicial
simulateRankingUpdate();
