// Conexión con MetaMask y eventos
let web3;
let userAddress;

// Comprobar si web3 está disponible en el navegador
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  console.log('No se detectó la billetera MetaMask. Asegúrate de tener instalada la extensión MetaMask en tu navegador.');
}

async function connectToMetaMask() {
  try {
    // Solicitar al usuario que conecte su billetera MetaMask
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Obtener la dirección del usuario conectado
    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
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

// Variable para almacenar la cantidad de gallinas seleccionadas
let selectedChickenCount = 0;

// Función para incrementar y decrementar la cantidad de gallinas en cada card
function changeChickenCount(button, increment) {
  const chickenCountElement = button.parentElement.querySelector(".chicken-selected-count");
  let currentCount = parseInt(chickenCountElement.innerText);
  currentCount += increment;
  if (currentCount < 0) {
    currentCount = 0;
  }
  chickenCountElement.innerText = currentCount;
  addToMarketCart(button.parentElement.dataset.id, currentCount); // Llamamos a la función para actualizar el cotizador
}

// Función para agregar los datos del card y la cantidad al cotizador de mercado
function addToMarketCart(chickenId, count) {
  // Implementa la lógica para agregar los datos del card al cotizador
  const smallEggPayment = 0.001;
  const mediumEggPayment = 0.003;
  const largeEggPayment = 0.005;

  const totalAmount = (count * smallEggPayment) + (count * mediumEggPayment) + (count * largeEggPayment);

  // Actualizar la cantidad de gallinas seleccionadas en el cotizador
  selectedChickenCount += count;
  const selectedChickenCountElement = document.getElementById("selected-chicken-count");
  selectedChickenCountElement.innerText = selectedChickenCount;

  // Actualizar el monto total en el cotizador
  const totalAmountElement = document.getElementById("total-amount");
  totalAmountElement.innerText = `${totalAmount.toFixed(4)} BNB`;
}

// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  // Agregar evento click al botón para conectar a MetaMask
  const connectButton = document.getElementById('connect-button');
  connectButton.addEventListener('click', connectToMetaMask);
  // Resto del código omitido por brevedad...

  // Agregar eventos click a los botones de aumentar y el de select
  const addChickenButtons = document.querySelectorAll('.add-chicken-button');
  const selectChickenButtons = document.querySelectorAll('.chicken-select-button');

  addChickenButtons.forEach((button) => {
    button.addEventListener('click', () => changeChickenCount(button, 1));
  });

  selectChickenButtons.forEach((button) => {
    button.addEventListener('click', () => addToMarketCart(button.parentElement.dataset.id, parseInt(button.parentElement.querySelector(".chicken-selected-count").innerText)));
  });
});
