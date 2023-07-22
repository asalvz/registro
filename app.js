let web3;
let isConnected = false; 

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
    console.log('Address:', userAddress);

    // Obtener el saldo del usuario conectado en BNB
    const balance = await getBalance(userAddress);
    console.log('Avaliable:', balance + ' BNB');

    // Imprimir la dirección y saldo en la página HTML
    const userAddressElement = document.getElementById('user-address');
    const balanceElement = document.getElementById('user-balance');
    userAddressElement.textContent = userAddress;
    balanceElement.textContent = balance + ' BNB';

    // Obtener y mostrar el progreso del usuario
    const userProgress = getUserProgress();
    console.log('Update:', userProgress + '%');
    const progressElement = document.getElementById('user-progress');
    progressElement.textContent = userProgress + '%';

    // Cambiar el texto del botón a "Dashboard" una vez que el usuario se ha conectado
    const connectButton = document.getElementById('connect-button');
    connectButton.textContent = 'Dashboard';
    isConnected = true;
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

// Función para obtener el progreso del usuario desde Local Storage
function getUserProgress() {
  const userProgress = localStorage.getItem('user-progress');
  return userProgress ? parseFloat(userProgress) : 0;
}

// Función para guardar el progreso del usuario en Local Storage
function saveUserProgress(progress) {
  localStorage.setItem('user-progress', progress);
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




  const userAddress = document.getElementById('user-address').textContent;
  const confirmation = window.confirm(`Confirmar alquiler de ${selectedChickens.length} gallinas por ${paymentAmount} BNB a la dirección ${userAddress}. ¿Deseas continuar?`);
  if (confirmation) {
    // Aquí se debe realizar la transacción con MetaMask para enviar el pago al contrato o dirección especificada
    // Una vez completada la transacción, se puede actualizar el estado del progreso del usuario y mostrarlo en la página
    const userProgress = parseFloat(getUserProgress()) + paymentAmount; // Sumar el pago al progreso actual
    saveUserProgress(userProgress.toFixed(2));
    const progressElement = document.getElementById('user-progress');
    progressElement.textContent = userProgress.toFixed(2) + '%';
    alert(`Transacción exitosa. Se ha agregado el pago al progreso del usuario.`);
  }
}

// Función para calcular el pago total por el alquiler de las gallinas seleccionadas
function calculatePayment() {
  const smallEggPrice = 0.001;
  const mediumEggPrice = 0.003;
  const largeEggPrice = 0.005;
  
  let payment = 0;
  selectedChickens.forEach(chickenId => {
    const chicken = document.querySelector(`.chicken[data-id="${chickenId}"]`);
    const eggQuality = chicken.querySelector('p:nth-child(4)').textContent;
    if (eggQuality === 'Alta') {
      payment += smallEggPrice;
    } else if (eggQuality === 'Media') {
      payment += mediumEggPrice;
    } else if (eggQuality === 'Baja') {
      payment += largeEggPrice;
    }
  });

  return payment.toFixed(4);
}

// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  // Agregar evento click al botón para conectar a MetaMask
  const connectButton = document.getElementById('connect-button');
  connectButton.addEventListener('click', connectToMetaMask);

  // Agregar evento click al botón "Refrescar Progreso"
  const refreshButton = document.getElementById('refresh-button');
  refreshButton.addEventListener('click', () => {
    const randomProgress = Math.random() * 100; // Generar un progreso aleatorio
    saveUserProgress(randomProgress.toFixed(2));
    const progressElement = document.getElementById('user-progress');
    progressElement.textContent = randomProgress.toFixed(2) + '%';
  });

  const rentButton = document.getElementById('rent-button');
  rentButton.addEventListener('click', rentChickens);
});
