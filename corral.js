// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Arreglo para almacenar las direcciones y su información
let referralData = [];
let eggAccumulationData = [];

// Función para actualizar el ranking de referidos simulado
function updateReferralRanking() {
    const referralListElement = document.getElementById('referral-list');
    referralListElement.innerHTML = ''; // Limpiar la tabla

    // Generar 7 direcciones aleatorias para el ranking si es la primera vez
    if (referralData.length === 0) {
        for (let i = 1; i <= 7; i++) {
            const address = '0x' + Math.random().toString(16).slice(2, 10); // Dirección aleatoria
            const referCount = getRandomNumber(1, 999); // Cantidad de referidos aleatoria
            referralData.push({ position: i, address, referCount });
        }
    }

    // Reordenar aleatoriamente el arreglo
    referralData.sort(() => Math.random() - 0.5);

    // Actualizar la tabla y aplicar el efecto de destello
    referralData.forEach((item, index) => {
        const row = document.createElement('tr');
        const positionCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const referCountCell = document.createElement('td');

        positionCell.textContent = `#${index + 1}`;
        addressCell.textContent = item.address;
        referCountCell.textContent = item.referCount;

        row.appendChild(positionCell);
        row.appendChild(addressCell);
        row.appendChild(referCountCell);

        if (index < 7) {
            row.classList.add('flash'); // Aplicar el efecto de destello a las primeras 7 filas
        }

        referralListElement.appendChild(row);
    });
}

// Función para actualizar el ranking de acumulación de Egg simulado (similar a la función de referidos)
function updateEggAccumulationRanking() {
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    eggAccumulationListElement.innerHTML = '';

    if (eggAccumulationData.length === 0) {
        for (let i = 1; i <= 7; i++) {
            const address = '0x' + Math.random().toString(16).slice(2, 10);
            const eggAmount = (getRandomNumber(5, 2400) / 100).toFixed(2);
            eggAccumulationData.push({ position: i, address, eggAmount });
        }
    }

    eggAccumulationData.sort(() => Math.random() - 0.5);

    eggAccumulationData.forEach((item, index) => {
        const row = document.createElement('tr');
        const positionCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const eggAmountCell = document.createElement('td');

        positionCell.textContent = `#${index + 1}`;
        addressCell.textContent = item.address;
        eggAmountCell.textContent = `${item.eggAmount} BNB`;

        row.appendChild(positionCell);
        row.appendChild(addressCell);
        row.appendChild(eggAmountCell);

        if (index < 7) {
            row.classList.add('flash');
        }

        eggAccumulationListElement.appendChild(row);
    });
}

// Llamar a las funciones de actualización al cargar la página
window.addEventListener('load', () => {
    updateReferralRanking();
    updateEggAccumulationRanking();
});
