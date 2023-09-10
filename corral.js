// Función para cargar los datos del usuario desde el contrato
async function cargarDatosUsuario() {
    let userAddress = null;

    // Comprobar si MetaMask está disponible
    if (window.ethereum) {
        try {
            // Solicitar acceso a la cuenta del usuario
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Obtener la dirección del usuario
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            userAddress = accounts[0];
        } catch (error) {
            console.error('Error al solicitar acceso a MetaMask:', error);
        }
    }

    if (!userAddress) {
        alert('Por favor, conéctese a MetaMask para ver sus datos.');
        return;
    }

    // Obtener los estados del contrato para el usuario
    const gallinas = await contract.getGallinasOwned(userAddress);
    const referido = await contract.getReferido(userAddress);
    const eggBalance = await contract.getEggBalance(userAddress);
    const upgrades = await contract.getUpgrades(userAddress);

    // Mostrar los datos en la interfaz
    document.getElementById('gallinas').textContent = `Gallinas: ${gallinas.length}`;
    document.getElementById('referido').textContent = `Referido: ${referido}`;
    document.getElementById('eggBalance').textContent = `Egg: ${eggBalance}`;
    document.getElementById('upgrades').textContent = `Upgrades: ${upgrades.join(', ')}`;
}

// Llamar a la función para cargar los datos del usuario al cargar la página
window.addEventListener('load', cargarDatosUsuario);

// Resto del código
