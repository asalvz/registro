console.log("Archivo JavaScript cargado");

document.addEventListener('DOMContentLoaded', () => {

    const connectButton = document.getElementById('connect-button');
    const generateReferralButton = document.getElementById('generate-referral-button');
    const referrerInput = document.getElementById('referrer-input'); 
    const userAddress = document.getElementById('user-address');
    const userBalance = document.getElementById('user-balance');
    const referralLink = document.getElementById('link');
    const gallinaTypeSelect = document.getElementById('gallina-type');
    const buyButtons = document.querySelectorAll('.buy-button');
    const buyExtensionButton = document.getElementById('buy-extension-button');





    // Reemplaza con el ABI de tu contrato
    const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "boostProductivity",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum GallinaFarm.GallinaType",
				"name": "_gallinaType",
				"type": "uint8"
			}
		],
		"name": "buyGallina",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCapacity",
				"type": "uint256"
			}
		],
		"name": "CapacityUpgraded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "collectEggs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "collector",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "EggsCollected",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "eggsSold",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bnbReceived",
				"type": "uint256"
			}
		],
		"name": "EggsSold",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "enum GallinaFarm.GallinaType",
				"name": "gallinaType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "GallinaPurchased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum GallinaFarm.GallinaType[]",
				"name": "gallinaTypes",
				"type": "uint8[]"
			}
		],
		"name": "GallinasOwned",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initializeGallinaTypes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mintEggs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "enum GallinaFarm.GallinaType",
				"name": "gallinaType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "minProduction",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "maxProduction",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "currentProduction",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "productionCooldown",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gallinaPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "eggPrice",
				"type": "uint256"
			}
		],
		"name": "ProductionUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "reduceCooldownTime",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_eggAmount",
				"type": "uint256"
			}
		],
		"name": "sellEggs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellEggsAtHigherPrice",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum GallinaFarm.GallinaType",
				"name": "_gallinaType",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_minProduction",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_maxProduction",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_currentProduction",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_productionCooldown",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_gallinaPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_eggPrice",
				"type": "uint256"
			}
		],
		"name": "setProduction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_referrer",
				"type": "address"
			}
		],
		"name": "setReferrer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "updateBoostCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "updateCapacityUpgradeCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPrice",
				"type": "uint256"
			}
		],
		"name": "updateEggPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "updateReduceCooldownCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCost",
				"type": "uint256"
			}
		],
		"name": "updateSellEggsCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "upgradeCapacity",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "boostProductivityCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "boostProductivityUsage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "capacityIncrement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "capacityUpgradeCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "eggPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum GallinaFarm.GallinaType",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "gallinaPrices",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum GallinaFarm.GallinaType",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "gallinas",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "minProduction",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "maxProduction",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "currentProduction",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "productionCooldown",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastProductionUpdate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getGallinasOwned",
		"outputs": [
			{
				"internalType": "enum GallinaFarm.GallinaType[]",
				"name": "",
				"type": "uint8[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getReferralCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserCapacity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_gallinaIndex",
				"type": "uint256"
			}
		],
		"name": "getUserEggBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserGallinas",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserRankings",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "eggsCollected",
						"type": "uint256"
					}
				],
				"internalType": "struct GallinaFarm.UserRanking[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserReferrer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialCapacity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lastEggMintTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reduceCooldownCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "reduceCooldownUsage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellEggsAtHigherPriceCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "sellEggsAtHigherPriceUsage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userRankings",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "eggsCollected",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "capacity",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
    // Reemplaza con la dirección de tu contrato
    const contractAddress = '0xC4d977a53E3b1F748B5797bfcf43E565BF28b45C';

    connectButton.addEventListener('click', async () => {
      try {
        // Verificar si MetaMask está instalado
        if (typeof window.ethereum === 'undefined') {
          alert('Please install MetaMask to use this feature.');
          return;
        }

        // Solicitar acceso a la billetera del usuario a través de MetaMask
        await window.ethereum.enable();
        
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];

        userAddress.textContent = address;

        // Conectar a Binance Smart Chain
        const bscWeb3 = new Web3('https://bsc-dataseed.binance.org/');

        const contract = new bscWeb3.eth.Contract(contractAbi, contractAddress);
        
        // Obtener saldo del usuario y mostrarlo
        const balance = await bscWeb3.eth.getBalance(address);
        userBalance.textContent = `${bscWeb3.utils.fromWei(balance, 'ether')} BNB`;

      } catch (error) {
        console.error(error);
      }
    });   
 generateReferralButton.addEventListener('click', async () => {
      try {
        // Verificar si MetaMask está instalado
        if (typeof window.ethereum === 'undefined') {
          alert('Please install MetaMask to use this feature.');
          return;
        }

        // Solicitar acceso a la billetera del usuario a través de MetaMask
        await window.ethereum.enable();

        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const senderAddress = accounts[0];

        // Obtener la dirección del referente del input
        const referrerAddress = referrerInput.value;

        if (!referrerAddress) {
          return;
        }

        // Validar que la dirección sea de 40 caracteres (dirección ERC20)
        if (referrerAddress.length !== 42) {
          alert('Invalid referrer address format');
          return;
        }

        // Llamar a la función setReferrer en el contrato
        await contract.methods.setReferrer(referrerAddress).send({ from: senderAddress });

        referralLink.textContent = `Referral set to ${referrerAddress}`;
      } catch (error) {
        console.error(error);
      }
    });



buyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      // Obtener el tipo de gallina, el índice del card y el precio de la tarjeta clickeada
      const selectedGallinaType = button.getAttribute('data-gallina-type');
      const selectedGallinaIndex = parseInt(button.closest('.chicken').querySelector('h2').textContent);
      const gallinaPrice = button.closest('.chicken').getAttribute('data-price');

      // Solicitar acceso a la billetera del usuario a través de MetaMask
      await window.ethereum.enable();

      // Crear una instancia de Web3 y del contrato
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      // Obtener la dirección del usuario actual
      const accounts = await web3.eth.getAccounts();
      const senderAddress = accounts[0];

      // Llamar a la función buyGallina en el contrato con el índice como parámetro
      const transaction = await contract.methods.buyGallina(selectedGallinaIndex).send({
        from: senderAddress,
        value: web3.utils.toWei(gallinaPrice, 'ether'),
        gas: 200000 // Ajusta el valor del gas según sea necesario
      });

      // Mostrar un mensaje de éxito
      alert(`Successfully bought ${selectedGallinaType} at index ${selectedGallinaIndex}`);

      // Escuchar el evento GallinaPurchased después de realizar la transacción
      const gallinaPurchasedEvent = contract.events.GallinaPurchased();
      gallinaPurchasedEvent.on('data', event => {
        console.log('Gallina purchased event:', event.returnValues);
      });

    } catch (error) {
      console.error(error);
    }
  });
});
	// Función para obtener el referido del usuario del contrato
async function getUserReferrer() {
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    const referrer = await contract.methods.getUserReferrer(userAddress).call();
    return referrer;
  } catch (error) {
    console.error(error);
    return '';
  }
}

// Función para mostrar el referido en el elemento HTML
async function showReferrerOnPage() {
  const referrer = await getUserReferrer();
  const referrerElement = document.getElementById('link');
  referrerElement.textContent = referrer;
}

// Ejecutar la función para mostrar el referido al cargar la página
window.addEventListener('load', showReferrerOnPage);

	


document.addEventListener('DOMContentLoaded', () => {

  // ... (otras declaraciones y funciones aquí)

  // Función para comprar una extensión de corral
  async function buyCorralExtension() {
    // Verificar si el usuario tiene una cuenta conectada
    if (!ethereum || !ethereum.isMetaMask) {
      console.log('MetaMask no está disponible');
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const userAddress = accounts[0];

      // Crear una instancia de Web3 y del contrato
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      // Llamar a la función del contrato para comprar la extensión y aumentar la capacidad
      const result = await contract.methods.upgradeCapacity().send({
        from: userAddress,
        value: web3.utils.toWei('0.1', 'ether'),
        gas: 200000
      });

      console.log('Compra exitosa:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Asignar la función buyCorralExtension al botón "Buy Corral Extension"
  if (buyExtensionButton) {
    buyExtensionButton.addEventListener('click', buyCorralExtension);
  }

  // ... (resto de tu código)
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
});

 
