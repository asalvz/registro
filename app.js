  // Función para conectarse a MetaMask, obtener la dirección y saldo del usuario
async function connectToMetaMask() {
  try {
    // Solicitar al usuario que conecte su billetera MetaMask
    await ethereum.request({ method: 'eth_requestAccounts' });
    
    // Obtener la dirección del usuario conectado
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const userAddress = accounts[0];
    console.log('Dirección del usuario:', userAddress);

    // Obtener el saldo del usuario conectado
    const balance = await ethereum.request({
      method: 'eth_getBalance',
      params: [userAddress, 'latest'],
    });
    console.log('Saldo del usuario:', balance);
    
    // Imprimir la dirección y saldo en la página HTML
    const userAddressElement = document.getElementById('user-address');
    const balanceElement = document.getElementById('user-balance');
    userAddressElement.textContent = userAddress;
    balanceElement.textContent = balance;
  } catch (error) {
    console.error('Error al conectarse a MetaMask:', error);
  }
}

// Función para comprar una gallina
function buyChicken(chickenId) {
  // Aquí puedes implementar la lógica para comprar una gallina según su ID
  console.log('Comprar gallina:', chickenId);
}

// Función para calcular la rentabilidad según la categoría de las gallinas
function calculateProfitability(category) {
  // Aquí puedes implementar la lógica para calcular la rentabilidad según la categoría
  let price = 0;
  switch (category) {
    case 'A':
      price = 2;
      break;
    case 'B':
      price = 1;
      break;
    case 'C':
      price = 0.5;
      break;
    case 'D':
      price = 0.3;
      break;
    default:
      price = 0;
      break;
  }
  return price;
}

// Conexión con MetaMask y eventos
window.addEventListener('DOMContentLoaded', () => {
  const connectButton = document.getElementById('connect-button');
  const chickens = document.getElementsByClassName('chicken');

  connectButton.addEventListener('click', connectToMetaMask);

  for (let i = 0; i < chickens.length; i++) {
    const chicken = chickens[i];
    const category = chicken.getAttribute('data-category');
    const buyButton = chicken.querySelector('.buy-button');
    const profitabilityElement = chicken.querySelector('.profitability');

    buyButton.addEventListener('click', () => {
      buyChicken(i + 1);
      const profitability = calculateProfitability(category);
      profitabilityElement.textContent = profitability + ' BNB';
    });
  }
});
