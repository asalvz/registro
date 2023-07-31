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



let selectedChickens = [];
// Función para agregar una gallina al contador
function addChicken(button) {
  const chickenCard = button.closest(".chicken");
  const chickenId = chickenCard.getAttribute("data-id");
  let count = selectedChickenCounts[chickenId] || 0;

  if (count < 60) {
    count++;
    selectedChickenCounts[chickenId] = count;
  }

  updateChickenCard(chickenCard, count);
}

// Función para eliminar una gallina del contador
function removeChicken(button) {
  const chickenCard = button.closest(".chicken");
  const chickenId = chickenCard.getAttribute("data-id");
  let count = selectedChickenCounts[chickenId] || 0;

  if (count > 0) {
    count--;
    selectedChickenCounts[chickenId] = count;
  }

  updateChickenCard(chickenCard, count);
}

function selectChickenSlot(slotNumber) {
  const slot = document.querySelector(".chicken-slot:nth-child(" + slotNumber + ")");
  const overlay = slot.querySelector(".slot-overlay");

  if (!overlay.style.display || overlay.style.display === "none") {
    overlay.style.display = "flex";
    overlay.querySelector("input").focus();
  } else {
    const chickenCard = overlay.querySelector(".chicken");
    if (chickenCard) {
      const chickenId = chickenCard.getAttribute("data-id");
      const count = parseInt(overlay.querySelector(".chicken-count").textContent);
      selectedChickens[slotNumber - 1] = { chickenId, count };
      updateChickenSlotUI();
      updateRentButton();
      overlay.style.display = "none";
    }
  }
}


// Función para colocar las gallinas seleccionadas en las ranuras inferiores
function updateChickenSlotUI() {
  const chickenSlots = document.querySelectorAll(".chicken-slot");
  chickenSlots.forEach((slot, index) => {
    const selectedChickenData = selectedChickens[index];

    if (selectedChickenData) {
      const chickenId = selectedChickenData.chickenId;
      const chicken = document.querySelector(`.chicken[data-id="${chickenId}"]`);
      const count = selectedChickenData.count;

      if (chicken) {
        slot.innerHTML = chicken.outerHTML;
        const chickenCount = slot.querySelector(".chicken-count");
        chickenCount.textContent = count;
        chickenCount.style.display = "block";
        slot.dataset.chickenId = count;
        slot.dataset.id = chickenId; // Agregar el atributo "data-id" con el id de la gallina seleccionada
        slot.dataset.index = index; // Agregar el atributo "data-index" con el índice de la ranura
      }
    } else {
      slot.innerHTML = "";
    }
  });
}
// Función para cambiar la cantidad de gallinas
function changeChickenCount(button, change) {
  const chickenCard = button.closest(".chicken");
  const chickenId = chickenCard.getAttribute("data-id");
  let count = selectedChickenCounts[chickenId] || 0;

  // Asegurarse de que el número no sea negativo o mayor a 60
  count = Math.max(0, Math.min(60, count + change));
  selectedChickenCounts[chickenId] = count;

  updateChickenCard(chickenCard, count);
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



// Función para generar el enlace de referido y copiar la dirección al portapapeles
function generateReferralLink() {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  // Generar el enlace de referido con la dirección como parámetro
  const referralLink = `https://tusitio.com/registro?ref=${userAddress}`;

  // Mostrar el enlace generado en el elemento HTML
  const linkElement = document.getElementById('link');
  linkElement.textContent = referralLink;

  // Copiar el enlace al portapapeles
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = referralLink;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  // Mostrar un mensaje para indicar que se copió el enlace
  alert('Enlace de referido copiado al portapapeles: ' + referralLink);
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
// Global variable to store the selected chicken counts
const selectedChickenCounts = {};

// Function to add a chicken count
function addChicken(button) {
    const chickenCard = button.parentNode;
    const chickenId = chickenCard.getAttribute("data-id");
    let count = selectedChickenCounts[chickenId] || 0;
  
    if (count < 60) {
        count++;
        selectedChickenCounts[chickenId] = count;
    }

    updateChickenCard(chickenCard, count);
}

// Function to update the chicken card display
function updateChickenCard(chickenCard, count) {
    const addButton = chickenCard.querySelector(".add-chicken-button");
    const selectButton = chickenCard.querySelector("button");
  
    // Display the count and enable/disable the select button accordingly
    addButton.textContent = count === 0 ? "+" : count;
    selectButton.disabled = count === 0;
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
