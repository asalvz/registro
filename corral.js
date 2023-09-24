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
    const row = document.createElement('tr');
    const addressCell = document.createElement('td');
    const amountCell = document.createElement('td');

    addressCell.textContent = address;
    amountCell.textContent = `${amount} BNB`;
    amountCell.style.color = 'green'; // Establecer el color en verde

    row.appendChild(addressCell);
    row.appendChild(amountCell);
    rankingElement.appendChild(row); // Agregar al final de la lista
    row.classList.add('flash'); // Agregar clase de destello
}

// Definir contadores para cada panel
let referralCount = 0;
let eggAccumulationCount = 0;

// Función para simular actualización de rankings aleatoriamente
function simulateRankingUpdate() {
    if (referralCount < 10) {
        // Simulación de 1 dirección y monto aleatorio para el Ranking de Referidos
        const randomAddress = generateRandomAddress();
        const randomAmount = getRandomBNBAmount();
        const referralListElement = document.getElementById('referral-list');
        addToRanking(referralListElement, randomAddress, randomAmount);
        referralCount++;
    }

    if (eggAccumulationCount < 10) {
        // Simulación de 1 dirección y monto aleatorio para el Ranking de Acumulación de Egg
        const randomAddress2 = generateRandomAddress();
        const randomAmount2 = getRandomBNBAmount();
        const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
        addToRanking(eggAccumulationListElement, randomAddress2, randomAmount2);
        eggAccumulationCount++;
    }
    
    // Eliminar las filas que excedan 10 en cada panel
    if (referralListElement.rows.length > 10) {
        referralListElement.deleteRow(0);
    }

    if (eggAccumulationListElement.rows.length > 10) {
        eggAccumulationListElement.deleteRow(0);
    }
}

// Simular actualización de rankings cada 5 segundos
setInterval(simulateRankingUpdate, 5000);

// Llamar a la simulación inicial
simulateRankingUpdate();
