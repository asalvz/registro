let web3;
let userAddress;
let contractInstance; // Asigna la instancia del contrato aquí (reemplaza 'ContractAbi' y 'ContractAddress')





if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
  contractInstance = new web3.eth.Contract(ABI, 0xC4d977a53E3b1F748B5797bfcf43E565BF28b45C);
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
    const referralLink = `${userAddress}`;

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

 
function changeButtonColor(button) {
  // Cambiar el color del fondo del botón
  if (button.style.backgroundColor === 'gray') {
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
  } else {
    button.style.backgroundColor = 'gray';
    button.style.color = 'white';
  }
}
 function expandPanel() {
  var panel = document.getElementById("header");
  var expandButton = document.getElementById("expand-button");
  
  if (panel.style.maxHeight === "250px") {
    panel.style.maxHeight = "100%";
    expandButton.innerHTML = "Mostrar menos";
  } else {
    panel.style.maxHeight = "250px";
    expandButton.innerHTML = "Mostrar más";
  }
}
// Función para comprar gallinas
async function buyChicken(type) {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  const quantityInput = document.getElementById(`gallina${type}-quantity`);
  const amount = parseInt(quantityInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert('Ingresa una cantidad válida.');
    return;
  }

  try {
    // Obtener el precio de la gallina según el tipo (debes definir los precios)
    let chickenPrice;
    if (type === 1) {
      chickenPrice = 0.04;
    } else if (type === 2) {
      chickenPrice = 0.05;
    } else if (type === 3) {
      chickenPrice = 0.07;
    } else if (type === 4) {
      chickenPrice = 0.08;
    } else if (type === 5) {
      chickenPrice = 0.1;
    } else if (type === 6) {
      chickenPrice = 0.2;
    }
    // Agrega más tipos de gallinas con sus respectivos precios aquí

    const totalCost = amount * chickenPrice;

    // Enviar la transacción al contrato para comprar las gallinas
    await contractInstance.methods.buyChicken(type, amount).send({ from: userAddress, value: web3.utils.toWei(totalCost.toString(), 'ether') });

    // Actualizar el balance del usuario y el estado del contrato
    const newBalance = await getBalance(userAddress);
    const contractState = await contractInstance.methods.getContractState().call();

    // Actualizar el balance del usuario en la interfaz
    const balanceElement = document.getElementById('user-balance');
    balanceElement.textContent = newBalance + ' BNB';

    // Actualizar el estado del contrato en la interfaz (ejemplo)
    const contractStateElement = document.getElementById('contract-state');
    contractStateElement.textContent = contractState;

    alert(`¡Has comprado ${amount} gallina(s) de tipo ${type}!`);
  } catch (error) {
    console.error('Error al comprar gallinas:', error);
  }
}

// Función para ampliar el corral
async function expandCorral() {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  try {
    // Enviar la transacción al contrato para ampliar el corral
    await contractInstance.methods.expandCorral().send({ from: userAddress });

    // Actualizar el estado del contrato y el balance del usuario
    const contractState = await contractInstance.methods.getContractState().call();
    const newBalance = await getBalance(userAddress);

    // Actualizar el estado del contrato en la interfaz (ejemplo)
    const contractStateElement = document.getElementById('contract-state');
    contractStateElement.textContent = contractState;

    // Actualizar el balance del usuario en la interfaz
    const balanceElement = document.getElementById('user-balance');
    balanceElement.textContent = newBalance + ' BNB';

    alert('¡Has ampliado el corral!');
  } catch (error) {
    console.error('Error al ampliar el corral:', error);
  }
}

// Función para reducir el enfriamiento
async function reduceCooldown() {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  try {
    // Enviar la transacción al contrato para reducir el enfriamiento
    await contractInstance.methods.reduceCooldown().send({ from: userAddress });

    // Actualizar el estado del contrato y el balance del usuario
    const contractState = await contractInstance.methods.getContractState().call();
    const newBalance = await getBalance(userAddress);

    // Actualizar el estado del contrato en la interfaz (ejemplo)
    const contractStateElement = document.getElementById('contract-state');
    contractStateElement.textContent = contractState;

    // Actualizar el balance del usuario en la interfaz
    const balanceElement = document.getElementById('user-balance');
    balanceElement.textContent = newBalance + ' BNB';

    alert('¡Has reducido el enfriamiento!');
  } catch (error) {
    console.error('Error al reducir el enfriamiento:', error);
  }
}

// Función para aumentar el precio de venta
async function increaseSalePrice() {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  try {
    // Enviar la transacción al contrato para aumentar el precio de venta
    await contractInstance.methods.increaseSalePrice().send({ from: userAddress });

    // Actualizar el estado del contrato y el balance del usuario
    const contractState = await contractInstance.methods.getContractState().call();
    const newBalance = await getBalance(userAddress);

    // Actualizar el estado del contrato en la interfaz (ejemplo)
    const contractStateElement = document.getElementById('contract-state');
    contractStateElement.textContent = contractState;

    // Actualizar el balance del usuario en la interfaz
    const balanceElement = document.getElementById('user-balance');
    balanceElement.textContent = newBalance + ' BNB';

    alert('¡Has aumentado el precio de venta!');
  } catch (error) {
    console.error('Error al aumentar el precio de venta:', error);
  }
}


// Función para aumentar la producción
async function increaseProduction() {
  if (!userAddress) {
    alert('Conéctate a MetaMask para obtener la dirección de tu billetera.');
    return;
  }

  try {
    // Enviar la transacción al contrato para aumentar la producción
    await contractInstance.methods.increaseProduction().send({ from: userAddress });

    // Actualizar el estado del contrato y el balance del usuario
    const contractState = await contractInstance.methods.getContractState().call();
    const newBalance = await getBalance(userAddress);

    // Actualizar el estado del contrato en la interfaz (ejemplo)
    const contractStateElement = document.getElementById('contract-state');
    contractStateElement.textContent = contractState;

    // Actualizar el balance del usuario en la interfaz
    const balanceElement = document.getElementById('user-balance');
    balanceElement.textContent = newBalance + ' BNB';

    alert('¡Has aumentado la producción!');
  } catch (error) {
    console.error('Error al aumentar la producción:', error);
  }
}


// Función para generar el enlace de referido
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


// Evento al hacer clic en el botón para comprar gallinas
document.getElementById('buy-chickens-button').addEventListener('click', () => {
  const amount = parseInt(document.getElementById('chicken-amount').value);
  buyChickens(amount);
});

// Evento al hacer clic en el botón para ampliar el corral
document.getElementById('expand-corral-button').addEventListener('click', expandCorral);

// Evento al hacer clic en el botón para reducir el enfriamiento
document.getElementById('reduce-cooldown-button').addEventListener('click', reduceCooldown);

// Evento al hacer clic en el botón para aumentar el precio de venta
document.getElementById('increase-price-button').addEventListener('click', increaseSalePrice);

// Evento al hacer clic en el botón para aumentar la producción
document.getElementById('increase-production-button').addEventListener('click', increaseProduction);

// Evento al hacer clic en el botón para generar el enlace de referido
document.getElementById('generate-referral-button').addEventListener('click', generateReferralLink);




// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  // Agregar evento click al botón para conectar a MetaMask
  const connectButton = document.getElementById('connect-button');
  connectButton.addEventListener('click', connectToMetaMask);
  // Resto del código omitido por brevedad...
  
 
});
