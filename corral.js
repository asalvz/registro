// Función para agregar una dirección y cantidad simulada al ranking
function addToRanking(rankingElement, address, amount) {
    const row = document.createElement('tr');
    const addressCell = document.createElement('td');
    const amountCell = document.createElement('td');

    addressCell.textContent = address;
    amountCell.textContent = `${amount.toFixed(2)} BNB`;

    row.appendChild(addressCell);
    row.appendChild(amountCell);

    // Agregar al principio de la tabla (en la parte superior)
    rankingElement.insertBefore(row, rankingElement.firstChild);

    // Aplicar efecto de destello
    row.classList.add('flash');

    // Si hay más de 7 filas, eliminar la última
    if (rankingElement.rows.length > 7) {
        rankingElement.removeChild(rankingElement.lastChild);
    }
}

// Función para simular actualización de rankings aleatoriamente
function simulateRankingUpdate() {
    // Simulación de dirección y cantidad aleatorias
    const randomAddress = '0x' + Math.random().toString(16).padStart(40, '0'); // Dirección de 40 caracteres
    const randomAmount = Math.random() * 100;

    // Actualizar el Ranking de Referidos
    const referralListElement = document.getElementById('referral-list');
    addToRanking(referralListElement, randomAddress, randomAmount);

    // Actualizar el Ranking de Acumulación de Egg
    const eggAccumulationListElement = document.getElementById('egg-accumulation-list');
    addToRanking(eggAccumulationListElement, randomAddress, randomAmount);
}

// Simular actualización de rankings cada 5 segundos
setInterval(simulateRankingUpdate, 5000);

// Llamar a la simulación inicial
simulateRankingUpdate();
