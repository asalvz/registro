// Inicializar web3
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
    await ethereum.request({ method: 'eth_requestAccounts' });

    // Obtener la dirección del usuario conectado
    const accounts = await ethereum.request({ method: 'eth_accounts' });
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
  const weiBalance = await ethereum.request({
    method: 'eth_getBalance',
    params: [address, 'latest'],
  });
  const balance = web3.utils.fromWei(weiBalance, 'ether');
  return parseFloat(balance).toFixed(4);
}

// Función para comprar una gallina
function buyChicken(chickenId) {
  const chicken = document.getElementById(`chicken${chickenId}`);
  const eggTimeElement = document.getElementById(`chicken${chickenId}-egg-time`);
  const eggCountElement = document.getElementById(`chicken${chickenId}-egg-count`);
  const eggQualityElement = document.getElementById(`chicken${chickenId}-egg-quality`);

  // Generar atribuciones aleatorias mejoradas según el precio de la gallina
  let eggTime = getRandomNumber(10, 20);
  let eggCount = getRandomNumber(5, 10);
  let eggQuality = getEggQuality(chickenId);

  // Actualizar las atribuciones en la página HTML
  eggTimeElement.textContent = eggTime;
  eggCountElement.textContent = eggCount;
  eggQualityElement.textContent = eggQuality;

  // Marcar la gallina como comprada
  chicken.classList.add('purchased');
}

// Función para seleccionar una gallina y colocarla en una ranura
function selectChickenSlot(slotNumber) {
  const chickenSlot = document.querySelector('.chicken-slot:nth-child(' + slotNumber + ')');

  if (chickenSlot.classList.contains('selected')) {
    chickenSlot.classList.remove('selected');
    chickenSlot.innerHTML = '';
  } else {
    const purchasedChickens = document.querySelectorAll('.chicken.purchased');
    const selectedChickenId = chickenSlot.getAttribute('data-chicken-id');

    if (purchasedChickens.length > 0) {
      for (let i = 0; i < purchasedChickens.length; i++) {
        const purchasedChicken = purchasedChickens[i];
        const chickenId = purchasedChicken.getAttribute('data-chicken-id');

        if (chickenId === selectedChickenId) {
          chickenSlot.classList.add('selected');
          chickenSlot.innerHTML = purchasedChicken.innerHTML;
          break;
        }
      }
    }
  }
}

// Función para alquilar las gallinas seleccionadas
function rentChickens() {
  const selectedChickenSlots = document.querySelectorAll('.chicken-slot.selected');
  const selectedChickenIds = Array.from(selectedChickenSlots).map((slot) => {
    return slot.getAttribute('data-chicken-id');
  });
  console.log('Alquilar gallinas seleccionadas:', selectedChickenIds);
}

// Función para generar un número aleatorio en un rango dado
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener la calidad de los huevos según el ID de la gallina
function getEggQuality(chickenId) {
  switch (chickenId) {
    case 1:
      return 'Excelente';
    case 2:
      return 'Buena';
    case 3:
      return 'Regular';
    case 4:
      return 'Buena';
    case 5:
      return 'Excelente';
    case 6:
      return 'Regular';
    default:
      return 'Desconocida';
  }
}

// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  const connectButton = document.getElementById('connect-button');
  const chickens = document.getElementsByClassName('chicken');

  connectButton.addEventListener('click', connectToMetaMask);

  for (let i = 0; i < chickens.length; i++) {
    const chicken = chickens[i];
    const chickenId = i + 1;
    const buyButton = chicken.querySelector('button');

    buyButton.addEventListener('click', () => {
      buyChicken(chickenId);
    });
  }
});
