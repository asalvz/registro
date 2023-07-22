let web3;


// Comprobar si web3 está disponible en el navegador
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  console.log('No se detectó la billetera MetaMask. Asegúrate de tener instalada la extensión MetaMask en tu navegador.');
}

// Función para conectarse a MetaMask, obtener la dirección y saldo del usuario
async function connectToMetaMask() {
  try {
    // Solicitar al usuario que conecte su billetera MetaMask
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Obtener la dirección del usuario conectado
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    console.log('Dirección del usuario:', userAddress);

    // Obtener el saldo del usuario conectado en BNB
    const balance = await getBalance(userAddress);
    console.log('Saldo del usuario:', balance + ' BNB');

    // Imprimir la dirección y saldo en la página HTML
    const userAddressElement = document.getElementById('user-address');
    const balanceElement = document.getElementById('user-balance');
    userAddressElement.textContent = userAddress;
    balanceElement.textContent = balance + ' BNB';
  } catch (error) {
    console.error('Error al conectarse a MetaMask:', error);
  }
}

// Función para obtener el saldo del usuario en BNB
async function getBalance(address) {
  const weiBalance = await web3.eth.getBalance(address);
  const balance = web3.utils.fromWei(weiBalance, 'ether');
  return parseFloat(balance).toFixed(4);
}
let selectedChickens = [];

function selectChicken(chickenElement) {
  const chickenId = chickenElement.getAttribute('data-id');
  const index = selectedChickens.indexOf(chickenId);
  
  if (index === -1) {
    selectedChickens.push(chickenId);
  } else {
    selectedChickens.splice(index, 1);
  }

  updateChickenSlotUI();
  updateRentButton();
}

// Función para colocar las gallinas seleccionadas en las ranuras inferiores
function updateChickenSlotUI() {
  const chickenSlots = document.querySelectorAll('.chicken-slot');
  chickenSlots.forEach((slot, index) => {
    const chickenId = selectedChickens[index];
    const chicken = document.querySelector(`.chicken[data-id="${chickenId}"]`);

    if (chickenId) {
      slot.innerHTML = chicken.outerHTML;
    } else {
      slot.innerHTML = '';
    }
  });
}

// Función para actualizar el estado del botón "Alquilar" y su evento click
function updateRentButton() {
  const rentButton = document.getElementById('rent-button');
  rentButton.innerHTML = '';

  if (selectedChickens.length > 0) {
    const button = document.createElement('button');
    button.textContent = 'ALQUILAR (' + selectedChickens.length + ')';
    button.onclick = rentChickens;
    rentButton.appendChild(button);
  } else {
    const info = document.createElement('p');
    info.textContent = 'Selecciona al menos una gallina para alquilar.';
    rentButton.appendChild(info);
  }
}

// Función para actualizar el estado del botón "Alquilar" y su evento click
function updateRentButton() {
  const rentButton = document.getElementById('rent-button');
  rentButton.innerHTML = '';

  if (selectedChickens.length > 0) {
    const button = document.createElement('button');
    button.textContent = 'ALQUILAR (' + selectedChickens.length + ')';
    button.onclick = rentChickens;
    rentButton.appendChild(button);
  } else {
    const info = document.createElement('p');
    info.textContent = 'Selecciona al menos una gallina para alquilar.';
    rentButton.appendChild(info);
  }
}

// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  // Agregar evento click al botón para conectar a MetaMask
  const connectButton = document.getElementById('connect-button');
  connectButton.addEventListener('click', connectToMetaMask);
  // Resto del código omitido por brevedad...
  
  const rentButton = document.getElementById('rent-button');
  rentButton.addEventListener('click', rentChickens);
});
