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
    userAddress = accounts[0]; // Quitamos la palabra clave 'const'
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

function generateReferralLink() {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  // Generar el enlace de referido con la dirección como parámetro
  const referralLink = `https://tusitio.com/registro?ref=${userAddress}`;

  // Abreviar el enlace de referido para mostrar solo los primeros 10 caracteres
  const shortenedLink = `${referralLink.substring(0, 30)}...`;

  // Actualizar el contenido del elemento con el enlace abreviado
  const linkElement = document.getElementById('link');
  linkElement.textContent = shortenedLink;

  // Cambiar el texto y el evento onclick del botón para que ahora copie el enlace abreviado
  const generateButton = document.getElementById('generate-referral-button');
  generateButton.textContent = 'Copiar enlace';
  generateButton.onclick = function() {
    copyToClipboard(referralLink);
    alert('Enlace copiado al portapapeles: ' + referralLink);
  };
}

function copyToClipboard(text) {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
}

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

// Variable para almacenar la cantidad de cada tipo de gallina seleccionada
let selectedChickenCount = 0;

// Función para agregar los datos del card y la cantidad al cotizador de mercado
function addToMarketCart(chickenId, count) {
  // Implementa la lógica para agregar los datos del card al cotizador
  const smallEggPayment = 0.001;
  const mediumEggPayment = 0.003;
  const largeEggPayment = 0.005;

  const totalAmount = (count * smallEggPayment) + (count * mediumEggPayment) + (count * largeEggPayment);

  // Actualizar la cantidad de gallinas seleccionadas en el cotizador
  const selectedChickenCountElement = document.getElementById("selected-chicken-count");
  selectedChickenCount = selectedChickenCount + count;
  selectedChickenCountElement.innerText = selectedChickenCount;

  // Actualizar el monto total en el cotizador
  const totalAmountElement = document.getElementById("total-amount");
  totalAmountElement.innerText = `${totalAmount.toFixed(4)} BNB`;
}

// Agregar evento click al botón para conectar a MetaMask
const connectButton = document.getElementById('connect-button');
connectButton.addEventListener('click', connectToMetaMask);

// Función para mostrar el banner una vez cargada la página
$(document).ready(function() {
  // Ocultar el banner al inicio
  $("#banner-dialog").hide();

  // Comprobar si todos los elementos de la página están cargados
  $(window).on("load", function() {
    // Mostrar el banner una vez que todo esté cargado
    $("#banner-dialog").fadeIn();
  });
});

// Función para cerrar el banner al hacer clic en el botón "Cerrar"
$("#close-btn").click(function() {
  $("#banner-dialog").fadeOut();
});
