// Función para generar una dirección aleatoria única con 40 caracteres
function generateRandomAddress() {
    let address = '0x';
    for (let i = 0; i < 40; i++) {
        address += Math.floor(Math.random() * 16).toString(16);
    }
    return address;
}

// Función para agregar una dirección y cantidad de referidos simulados al ranking de referidos
function addToReferralRanking(position, address, referCount) {
    const referralListElement = document.getElementById('referral-list');
    const rows = referralListElement.getElementsByTagName('tr');

    // Actualizar la fila en la posición especificada
    if (position >= 0 && position < rows.length) {
        const row = rows[position];
        const addressCell = row.querySelector('.address');
        const referCountCell = row.querySelector('.refer-count');

        addressCell.textContent = address;
        referCountCell.textContent = referCount;
    }
}

// Función para agregar una dirección y monto en BNB simulado al ranking de acumulación de Egg
function addToEggAccumulationRanking(position, address, eggAmount) {
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    const rows = eggAccumulationListElement.getElementsByTagName('tr');

    // Actualizar la fila en la posición especificada
    if (position >= 0 && position < rows.length) {
        const row = rows[position];
        const addressCell = row.querySelector('.address');
        const eggAmountCell = row.querySelector('.egg-amount');

        addressCell.textContent = address;
        eggAmountCell.textContent = `${eggAmount.toFixed(2)} BNB`;
    }
}

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

    // Actualizar el Ranking de Referidos de forma asíncrona
    addresses.forEach(({ position, address, referCount }, index) => {
        setTimeout(() => {
            addToReferralRanking(position, address, referCount);
        }, index * 1000); // Actualizar cada dirección con un retraso de 1 segundo (1000 ms)
    });

    // Actualizar el Ranking de Acumulación de Egg de forma asíncrona
    addresses.forEach(({ position, address, eggAmount }, index) => {
        setTimeout(() => {
            addToEggAccumulationRanking(position, address, eggAmount);
        }, index * 1000); // Actualizar cada dirección con un retraso de 1 segundo (1000 ms)
    });
}

// Simular actualización de rankings cada 5 segundos
setInterval(simulateRankingUpdate, 5000);

// Llamar a la simulación inicial
simulateRankingUpdate();
