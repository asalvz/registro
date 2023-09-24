// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Arreglo para almacenar las direcciones y su información
let referralData = [];
let eggAccumulationData = [];

// Función para generar una dirección aleatoria única
function generateRandomAddress() {
    return '0x' + Math.random().toString(16).slice(2, 10);
}

// Función para actualizar el ranking de referidos simulado
function updateReferralRanking() {
    const referralListElement = document.getElementById('referral-list');
    const rows = referralListElement.getElementsByTagName('tr');

    // Actualizar las filas una por una
    for (let i = 0; i < rows.length && i < 7; i++) {
        const addressCell = rows[i].querySelector('.address');
        const referCountCell = rows[i].querySelector('.refer-count');

        const address = generateRandomAddress();
        const referCount = getRandomNumber(1, 999);

        addressCell.textContent = address;
        referCountCell.textContent = referCount;
    }

    // Reordenar aleatoriamente el arreglo
    referralData.sort(() => Math.random() - 0.5);
}

// Función para actualizar el ranking de acumulación de Egg simulado (similar a la función de referidos)
function updateEggAccumulationRanking() {
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    const rows = eggAccumulationListElement.getElementsByTagName('tr');

    // Actualizar las filas una por una
    for (let i = 0; i < rows.length && i < 7; i++) {
        const addressCell = rows[i].querySelector('.address');
        const eggAmountCell = rows[i].querySelector('.egg-amount');

        const address = generateRandomAddress();
        const eggAmount = (getRandomNumber(5, 2400) / 100).toFixed(2);

        addressCell.textContent = address;
        eggAmountCell.textContent = `${eggAmount} BNB`;
    }

    // Reordenar aleatoriamente el arreglo
    eggAccumulationData.sort(() => Math.random() - 0.5);
}

// Llamar a las funciones de actualización cada 5 segundos
setInterval(() => {
    updateReferralRanking();
    updateEggAccumulationRanking();
}, 5000); // 5000 milisegundos (5 segundos)
