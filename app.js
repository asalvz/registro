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

    // Función para comprar una gallina
  function buyChicken(chickenId) {
      const chicken = document.querySelector(`.chicken[data-id="${chickenId}"]`);
      const eggTimeElement = chicken.querySelector('.egg-time');
      const eggCountElement = chicken.querySelector('.egg-count');
      const eggQualityElement = chicken.querySelector('.egg-quality');

      // Obtener los datos fijos de la gallina
      const eggTime = 15; // Tiempo fijo para todos los pollos
      const eggCount = 8; // Cantidad fija para todos los pollos
      const eggQuality = getEggQuality(chickenId);

      // Actualizar las atribuciones en la página HTML
      eggTimeElement.textContent = `Tiempo en poner huevos: ${eggTime} minutos`;
      eggCountElement.textContent = `Cantidad de huevos: ${eggCount}`;
      eggQualityElement.textContent = `Calidad de huevos: ${eggQuality}`;

      // Marcar la gallina como comprada
      chicken.classList.add('purchased');
    }

    // Función para seleccionar una gallina y colocarla en una ranura
    function selectChickenSlot(slotNumber) {
      const chickenSlot = document.querySelector('.chicken-slot:nth-child(' + slotNumber + ')');
      const purchasedChickens = document.querySelectorAll('.chicken.purchased');

      if (chickenSlot.classList.contains('selected')) {
        chickenSlot.classList.remove('selected');
        chickenSlot.innerHTML = '';
      } else {
        if (purchasedChickens.length < 3) {
          for (let i = 0; i < purchasedChickens.length; i++) {
            const purchasedChicken = purchasedChickens[i];
            const chickenId = purchasedChicken.getAttribute('data-id');

            if (chickenId === slotNumber.toString()) {
              chickenSlot.classList.add('selected');
              chickenSlot.innerHTML = purchasedChicken.outerHTML;
              break;
            }
          }
        } else {
          console.log('Ya se seleccionaron 3 gallinas.');
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
