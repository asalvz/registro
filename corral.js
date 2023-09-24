// Función para agregar una dirección y cantidad de referidos simulados al ranking de referidos
function addToReferralRanking(address, referCount) {
    const referralListElement = document.getElementById('referral-list');
    const row = document.createElement('tr');
    const addressCell = document.createElement('td');
    const referCountCell = document.createElement('td');

    addressCell.textContent = address;
    referCountCell.textContent = referCount;

    row.appendChild(addressCell);
    row.appendChild(referCountCell);
    referralListElement.appendChild(row);
    row.classList.add('flash');
}

// Función para agregar una dirección y monto en BNB simulado al ranking de acumulación de Egg
function addToEggAccumulationRanking(address, eggAmount) {
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    const row = document.createElement('tr');
    const addressCell = document.createElement('td');
    const eggAmountCell = document.createElement('td');

    addressCell.textContent = address;
    eggAmountCell.textContent = `${eggAmount.toFixed(2)} BNB`;

    row.appendChild(addressCell);
    row.appendChild(eggAmountCell);
    eggAccumulationListElement.appendChild(row);
    row.classList.add('flash');
}

// Función para simular actualización de rankings aleatoriamente
function simulateRankingUpdate() {
    // Simulación de 7 direcciones y montos aleatorios
    const addresses = [];
    for (let i = 0; i < 7; i++) {
        const randomAddress = '0x' + Math.random().toString(16).substr(2, 10);
        const randomReferCount = Math.floor(Math.random() * 100); // Cantidad de referidos simulados
        const randomEggAmount = Math.random() * 100; // Monto en BNB simulado
        addresses.push({ address: randomAddress, referCount: randomReferCount, eggAmount: randomEggAmount });
    }

    // Ordenar las direcciones aleatoriamente
    addresses.sort(() => Math.random() - 0.5);

    // Actualizar el Ranking de Referidos
    const referralListElement = document.getElementById('referral-list');
    referralListElement.innerHTML = ''; // Limpiar la tabla
    addresses.forEach(({ address, referCount }) => {
        addToReferralRanking(address, referCount);
    });

    // Actualizar el Ranking de Acumulación de Egg
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    eggAccumulationListElement.innerHTML = ''; // Limpiar la tabla
    addresses.forEach(({ address, eggAmount }) => {
        addToEggAccumulationRanking(address, eggAmount);
    });
}

// Simular actualización de rankings cada 5 segundos
setInterval(simulateRankingUpdate, 5000);

// Llamar a la simulación inicial
simulateRankingUpdate();
