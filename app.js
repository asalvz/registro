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

    // Función para comprar o seleccionar una gallina
 // Función para comprar una gallina
function buyChicken(chickenId) {
  const chicken = document.getElementById(`chicken${chickenId}`);
  const eggTimeElement = document.getElementById(`chicken${chickenId}-egg-time`);
  const eggCountElement = document.getElementById(`chicken${chickenId}-egg-count`);
  const eggQualityElement = document.getElementById(`chicken${chickenId}-egg-quality`);

  // Obtener los datos fijos de la gallina
  const eggTime = 15; // Tiempo fijo para todos los pollos
  const eggCount = 8; // Cantidad fija para todos los pollos
  const eggQuality = getEggQuality(chickenId);

  // Actualizar las atribuciones en la página HTML
  eggTimeElement.textContent = eggTime;
  eggCountElement.textContent = eggCount;
  eggQualityElement.textContent = eggQuality;

  // Marcar la gallina como comprada
  chicken.classList.add('purchased');
}


    // Función para agregar una gallina a la lista de seleccionadas
  function selectChicken(chicken) {
  

      if (!selectedChickens.includes(chickenId)) {
        selectedChickens.push(chickenId);
        updateChickenSlotUI();
        updateRentButton();
      }
    }

    // Función para quitar una gallina de la lista de seleccionadas
    function removeSelectedChicken(chickenId) {
      const index = selectedChickens.indexOf(chickenId);
      if (index !== -1) {
        selectedChickens.splice(index, 1);
        updateChickenSlotUI();
        updateRentButton();
      }
    }

    // Función para actualizar la interfaz de las ranuras inferiores con las gallinas seleccionadas
    function updateChickenSlotUI() {
      const chickenSlots = document.querySelectorAll('.chicken-slot');
      chickenSlots.forEach((slot, index) => {
        if (selectedChickens[index]) {
          const chickenId = selectedChickens[index];
          const chicken = document.querySelector(`.chicken[data-id="${chickenId}"]`);
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
    // Conexión con MetaMask y eventos
     window.addEventListener('DOMContentLoaded', () => {
      const connectButton = document.getElementById('connect-button');
      const chickens = document.getElementsByClassName('chicken');

      connectButton.addEventListener('click', connectToMetaMask);

      for (let i = 0; i < chickens.length; i++) {
        const chicken = chickens[i];
        const chickenId = chicken.getAttribute('data-id');
        const buyButton = chicken.querySelector('button');

        buyButton.addEventListener('click', () => {
          buyChicken(chickenId);
        });
      }
    });
