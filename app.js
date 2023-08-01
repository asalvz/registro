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



const chickenSlots = document.querySelectorAll('.chicken-slot');

  function buyChicken(chickenId) {
    // Buscar el primer slot vacío y asignar la gallina seleccionada a ese slot
    for (const slot of chickenSlots) {
      if (!slot.dataset.chickenId) {
        slot.dataset.chickenId = chickenId;
        const chickenCard = document.querySelector(`.chicken[data-id="${chickenId}"]`);
        const slotOverlay = slot.querySelector('.slot-overlay');
        slotOverlay.innerHTML = chickenCard.innerHTML;
        const addRemoveButtons = slotOverlay.querySelector('.add-remove-buttons');
        if (addRemoveButtons) {
          addRemoveButtons.remove(); // Removemos los botones de agregar y quitar si existen
        }
        slotOverlay.style.pointerEvents = 'none'; // Evitamos que se pueda interactuar con los detalles en el slot

        alert(`Gallina ${chickenId} seleccionada en el slot ${slot.dataset.slot}`);
        return;
      }
    }
    alert('Todos los slots están ocupados. Debes liberar un slot antes de seleccionar más gallinas.');
  }

  function selectChickenSlot(slotIndex) {
    const selectedSlot = document.querySelector(`.chicken-slot:nth-child(${slotIndex})`);
    const chickenId = selectedSlot.dataset.chickenId;
    if (chickenId) {
      // Mostrar los detalles de la gallina seleccionada en el slot
      const chickenCard = document.querySelector(`.chicken[data-id="${chickenId}"]`);
      const slotOverlay = selectedSlot.querySelector('.slot-overlay');
      slotOverlay.innerHTML = chickenCard.innerHTML;
      slotOverlay.style.pointerEvents = 'none'; // Evitamos que se pueda interactuar con los detalles en el slot

      alert(`Gallina ${chickenId} seleccionada en el slot ${slotIndex}`);
    } else {
      alert('Este slot está vacío. Seleccione una gallina para asignar a este slot.');
    }
  }

  // Función para aumentar o disminuir la cantidad de gallinas en un card
  function changeChickenCount(button, change) {
    const chickenCard = button.closest('.chicken');
    const chickenCountElement = chickenCard.querySelector('.chicken-count');
    let currentCount = parseInt(chickenCountElement.textContent);
    if (isNaN(currentCount)) {
      currentCount = 0;
    }
    currentCount += change;
    if (currentCount >= 1 && currentCount <= 99) {
      chickenCountElement.textContent = currentCount;
    }
  }
const elems = document.querySelectorAll('.laya-please');
const layer2 = document.querySelector('.layer-2');
const layer3 = document.querySelector('.layer-3');
const layer4 = document.querySelector('.layer-4');
const layer5 = document.querySelector('.layer-5');
const layer6 = document.querySelector('.layer-6');
const layer7 = document.querySelector('.layer-7');
const layer8 = document.querySelector('.layer-8');


setTimeout(function () {
    elems.forEach(function (elem, index) {
        elem.style.animation = "none";
    });
}, 1500);



document.body.addEventListener('mousemove', function (e) {
    if (!e.currentTarget.dataset.triggered) {
        elems.forEach(function (elem, index) {
            if (elem.getAttribute('style')) {
                elem.style.transition = "all .5s";
                elem.style.transform = "none";
            }
        });
    }
    e.currentTarget.dataset.triggered = true;
    
    let width = window.innerWidth / 2;
    let mouseMoved2 = ((width - e.pageX) / 50);
    let mouseMoved3 = ((width - e.pageX) / 40);
    let mouseMoved4 = ((width - e.pageX) / 30);
    let mouseMoved5 = ((width - e.pageX) / 20);
    let mouseMoved6 = ((width - e.pageX) / 10);
    let mouseMoved7 = ((width - e.pageX) / 5);

    layer3.style.transform = "translateX(" + mouseMoved2 + "px)";
    layer4.style.transform = "translateX(" + mouseMoved3 + "px)";
    layer5.style.transform = "translateX(" + mouseMoved4 + "px)";
    layer6.style.transform = "translateX(" + mouseMoved5 + "px)";
    layer7.style.transform = "translateX(" + mouseMoved6 + "px)";
    layer8.style.transform = "translateX(" + mouseMoved7 + "px)";
});

document.body.addEventListener('mouseleave', function (e) {
    elems.forEach(function (elem, index) {
        elem.style.transition = "all .5s";
        elem.style.transform = "none";
    });
});

document.body.addEventListener('mouseenter', function (e) {
    elems.forEach(function (elem, index) {
        setTimeout(function () {
            elem.style.transition = "none";
        }, 500);
    });
});



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
 // Obtener el botón por su ID
  const connectButton = document.getElementById("connect-button");

  // Variable para controlar el estado de conexión
  let isConnected = false;

  // Función para cambiar el texto del botón
  function updateButtonText() {
    connectButton.textContent = isConnected ? "Conectado" : "Login Wallet";
  }

  // Agregar un evento de clic al botón
  connectButton.addEventListener("click", function () {
    // Simulación de cambio de estado de conexión (debes implementar la lógica real)
    isConnected = !isConnected;

    // Actualizar el texto del botón
    updateButtonText();
  });

  // Llamar a la función inicial para establecer el texto del botón
  updateButtonText();


// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  // Agregar evento click al botón para conectar a MetaMask
  const connectButton = document.getElementById('connect-button');
  connectButton.addEventListener('click', connectToMetaMask);
  // Resto del código omitido por brevedad...
  
  const rentButton = document.getElementById('rent-button');
  rentButton.addEventListener('click', rentChickens);
});
