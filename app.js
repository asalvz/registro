    const connectButton = document.getElementById('connect-button');
    const userAddress = document.getElementById('user-address');
    const userBalance = document.getElementById('user-balance');

    connectButton.addEventListener('click', async () => {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        alert('Please install MetaMask to use this feature.');
        return;
      }

      try {
        // Request access to the user's MetaMask wallet
        await window.ethereum.enable();
        
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];

        userAddress.textContent = address;

        // Connect to Binance Smart Chain
        const bscWeb3 = new Web3('https://bsc-dataseed.binance.org/');

        // Replace with your contract address and ABI
        const contractAddress = '0x...';
        const contractAbi = [...]; // Contract ABI

        const contractInstance = new bscWeb3.eth.Contract(contractAbi, contractAddress);
        
        // Fetch and display user balance
        const balance = await bscWeb3.eth.getBalance(address);
        userBalance.textContent = `${bscWeb3.utils.fromWei(balance, 'ether')} BNB`;

        // You can now interact with the contractInstance to get contract states
        // For example:
        // const contractState = await contractInstance.methods.getState().call();
        // console.log('Contract State:', contractState);

      } catch (error) {
        console.error(error);
      }
    });





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
 
