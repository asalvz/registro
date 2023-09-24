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
    
    // Reordenar aleatoriamente el arreglo de direcciones
    referralData.sort(() => Math.random() - 0.5);
    
    // Actualizar la tabla y aplicar el efecto de destello
    referralListElement.innerHTML = ''; // Limpiar la tabla
    referralData.forEach((item, index) => {
        const row = document.createElement('tr');
        const positionCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const referCountCell = document.createElement('td');

        // Actualizar la posición y dirección
        positionCell.textContent = `#${getRandomNumber(1, 999)}`;
        addressCell.textContent = generateRandomAddress();
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

    // Reordenar aleatoriamente el arreglo de direcciones
    eggAccumulationData.sort(() => Math.random() - 0.5);

    // Actualizar la tabla y aplicar el efecto de destello
    eggAccumulationListElement.innerHTML = ''; // Limpiar la tabla
    eggAccumulationData.forEach((item, index) => {
        const row = document.createElement('tr');
        const positionCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const eggAmountCell = document.createElement('td');

        // Actualizar la posición y dirección
        positionCell.textContent = `#${getRandomNumber(1, 999)}`;
        addressCell.textContent = generateRandomAddress();
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

// Llamar a las funciones de actualización cada 5 segundos
setInterval(() => {
    updateReferralRanking();
    updateEggAccumulationRanking();
}, 5000); // 5000 milisegundos (5 segundos)
