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
  // Aquí puedes implementar la lógica para comprar una gallina según su ID
  console.log('Comprar gallina:', chickenId);
}

// Función para seleccionar una gallina y colocarla en una ranura
function selectChickenSlot(slotNumber) {
  const chickenSlot = document.querySelector('.chicken-slot:nth-child(' + slotNumber + ')');
  chickenSlot.classList.toggle('selected');
}

// Función para alquilar las gallinas seleccionadas
function rentChickens() {
  const selectedChickenSlots = document.querySelectorAll('.chicken-slot.selected');
  const selectedChickenIds = Array.from(selectedChickenSlots).map((slot) => {
    return slot.getAttribute('data-chicken-id');
  });
  console.log('Alquilar gallinas seleccionadas:', selectedChickenIds);
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
    const profitabilityElement = chicken.querySelector('.profitability');

    buyButton.addEventListener('click', () => {
      buyChicken(chickenId);
      const profitability = calculateProfitability(chickenId);
      profitabilityElement.textContent = profitability + ' BNB';
    });
  }
});
