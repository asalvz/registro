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
    const sellEggsButton = document.getElementById('sell-eggs-button');
    const eggAmountInput = document.getElementById('egg-amount-input');
    const eggCountElement = document.querySelector('.user-count');
    const boostProductivityButton = document.getElementById('boost-productivity-button');
    const boostsUsedElement = document.getElementById('boosts-used');
    const reduceCooldownButton = document.getElementById('reduce-cooldown-button');
    const reductionsUsedElement = document.getElementById('reductions-used');
    const sellHigherButton = document.getElementById('sell-higher');
    const sellBoostsUsedElement = document.getElementById('sell-boosts-used');
    const referralList = document.getElementById('referral-list');
    const eggAccumulationList = document.getElementById('egg-accumulation-list');
    const newEggAmountInput = document.getElementById('newEggAmountt');
    const mintButton = document.getElementById('mintButton');
    const toggleButton = document.getElementById("toggle-button");
    const panel = document.getElementById("header");
    const gallinasListElement = document.querySelector('.gallinas-list'); 
    const collectEggsButton = document.getElementById('collectEggsButton');




    
    
 








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
    const contractAddress = '0xC4d977a53E3b1F748B5797bfcf43E565BF28b45C';
    const contract = new web3.eth.Contract(contractABI, contractAddress);



  
connectButton.addEventListener('click', async () => {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this feature.');
            return;
        }

        await window.ethereum.enable();

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];

        userAddress.textContent = address;

        const bscWeb3 = new Web3('https://bsc-dataseed.binance.org/');

        const contract = new bscWeb3.eth.Contract(contractAbi, contractAddress);

        const balance = await bscWeb3.eth.getBalance(address);
        userBalance.textContent = `${bscWeb3.utils.fromWei(balance, 'ether')} BNB`;

        const eggBalance = await contract.methods.balanceOf(address).call();
        eggCountElement.textContent = eggBalance; 
        connectButton.innerHTML = 'web3 active';
    } catch (error) {
        console.error(error);
    }
});






	
 generateReferralButton.addEventListener('click', async () => {
      try {
        if (typeof window.ethereum === 'undefined') {
          alert('Please install MetaMask to use this feature.');
          return;
        }

        await window.ethereum.enable();

        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const senderAddress = accounts[0];

        const referrerAddress = referrerInput.value;

        if (!referrerAddress) {
          return;
        }

        if (referrerAddress.length !== 42) {
          alert('Invalid referrer address format');
          return;
        }

        await contract.methods.setReferrer(referrerAddress).send({ from: senderAddress });

        referralLink.textContent = `Referral set to ${referrerAddress}`;
      } catch (error) {
        console.error(error);
      }
    });


	
	// Agrega un evento click al botón para obtener el estado del usuario en el contrato
document.getElementById('get-user-status-button').addEventListener('click', async () => {
    try {
        // Obtén la dirección del usuario actual
        const userAddress = await getUserAddress();

        

// Llama a una función del contrato para obtener el estado del usuario
        
       
const userStatus = await contract.methods.getUserStatus(userAddress).call();

        // Muestra el estado en la página web (reemplaza 'estadoElementId' con el ID de tu elemento HTML)
        document.getElementById('estadoElementId').textContent = `Estado del usuario: ${userStatus}`;
    } catch (error) {
        console.error('Error al obtener el estado del usuario:', error);
    }
});

// Función para obtener la dirección del usuario actual (puedes mantenerla como está)
async function getUserAddress() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Por favor, instala MetaMask para usar esta función.');
            return '';
        }

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } catch (error) {
        console.error(error);
        return '';
    }
}

	



buyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      const selectedGallinaType = button.getAttribute('data-gallina-type');
      const selectedGallinaIndex = parseInt(button.closest('.chicken').querySelector('h2').textContent);
      const gallinaPrice = button.closest('.chicken').getAttribute('data-price');
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      const accounts = await web3.eth.getAccounts();
      const senderAddress = accounts[0];
      const transaction = await contract.methods.buyGallina(selectedGallinaIndex).send({
        from: senderAddress,
        value: web3.utils.toWei(gallinaPrice, 'ether'),
        gas: 200000 
      });
      alert(`Successfully bought ${selectedGallinaType} at index ${selectedGallinaIndex}`);
      const gallinaPurchasedEvent = contract.events.GallinaPurchased();
      gallinaPurchasedEvent.on('data', event => {
        console.log('Gallina purchased event:', event.returnValues);
      });
    } catch (error) {
      console.error(error);
    }
  });
});

	
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

async function showReferrerOnPage() {
  const referrer = await getUserReferrer();
  const referrerElement = document.getElementById('link');
  referrerElement.textContent = referrer;
}

window.addEventListener('load', showReferrerOnPage);

	
	
buyExtensionButton.addEventListener('click', buyCorralExtension);


async function buyCorralExtension() {
  try {
    await window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];

    const result = await contract.methods.upgradeCapacity().send({
      from: senderAddress,
      value: web3.utils.toWei('0.1', 'ether'),
      gas: 200000
    });

    console.log('Compra exitosa:', result);

    const newUpgradeCost = web3.utils.toWei('0.1', 'ether'); 
    const capacityUpgradeCostElement = document.getElementById('capacity-upgrade-cost');
    capacityUpgradeCostElement.textContent = `${web3.utils.fromWei(newUpgradeCost, 'ether')} BNB`;
  } catch (error) {
    console.error('Error:', error);
  }
}
sellEggsButton.addEventListener('click', async () => {
  try {
    await window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];
    
    const eggAmount = parseInt(eggAmountInput.value);

    if (isNaN(eggAmount) || eggAmount <= 0) {
      alert('Por favor, ingresa una cantidad válida de huevos');
      return;
    }

    // Convertir la cantidad de egg a su equivalente en unidades base (1 egg = 1.000.000.000 unidades)
    const eggAmountInUnits = eggAmount * 1000000000;

    // Enviar la cantidad convertida al contrato
    const result = await contract.methods.sellEggs(eggAmountInUnits).send({
      from: senderAddress,
      gas: 200000
    });

    console.log('Huevos vendidos:', result);

    eggAmountInput.value = '';
  } catch (error) {
    console.error('Error:', error);
  }
});
	 boostProductivityButton.addEventListener('click', async () => {
                try {
                    if (typeof window.ethereum === 'undefined') {
                        alert('Please install MetaMask to use this feature.');
                        return;
                    }

                    await window.ethereum.enable();
                    const web3 = new Web3(window.ethereum);
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);
                    const accounts = await web3.eth.getAccounts();
                    const userAddress = accounts[0];

                    const cost = await contract.methods.boostProductivityCost().call({ from: userAddress });

                    const result = await contract.methods.boostProductivity().send({ from: userAddress, value: cost });

                    console.log('Boosted productivity:', result);

                    const boostsUsed = await contract.methods.getBoostsUsed(userAddress).call();
                    boostsUsedElement.textContent = `Boosts used: ${boostsUsed}`;
                } catch (error) {
                    console.error(error);
                }
            });
reduceCooldownButton.addEventListener('click', async () => {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this feature.');
            return;
        }

        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        const cost = await contract.methods.reduceCooldownCost().call({ from: userAddress });

        const result = await contract.methods.reduceCooldownTime().send({
            from: userAddress,
            value: cost,
        });

        console.log('Cooldown time reduced:', result);

        const events = result.events; 
        const reductionsUsed = await contract.methods.getReductionsUsed(userAddress).call();

        reductionsUsedElement.textContent = `Reductions used: ${reductionsUsed}`;

        events.forEach(event => {
            console.log('Event:', event.event, event.returnValues);
        });
    } catch (error) {
        console.error(error);
    }
});
 sellHigherButton.addEventListener('click', async () => {
        try {
            if (typeof window.ethereum === 'undefined') {
                alert('Please install MetaMask to use this feature.');
                return;
            }

            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(contractAbi, contractAddress);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];

            const result = await contract.methods.sellEggsAtHigherPrice().send({ from: userAddress, value: web3.utils.toWei('0.3', 'ether') });

            console.log('Eggs sold at higher price:', result);

            const events = result.events; 
            const sellBoostsUsed = await contract.methods.getSellBoostsUsed(userAddress).call();

            sellBoostsUsedElement.textContent = `Sell boosts used: ${sellBoostsUsed}`;
            
            events.forEach(event => {
                console.log('Event:', event.event, event.returnValues);
            });
        } catch (error) {
            console.error(error);
        }
    });
 mintButton.addEventListener('click', mintEggss);

async function mintEggss() {
    const eggAmount = newEggAmountInput.value;

    if (eggAmount <= 0) {
        alert('Please enter a valid egg amount.');
        return;
    }

    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const tx = await contract.mintEggs(eggAmount);
        await tx.wait();

        console.log('Transaction hash:', tx.hash);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while minting eggs.');
    }
}

 



  toggleButton.addEventListener("click", () => {
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  })


	  
	collectEggsButton.addEventListener('click', async () => {
  try {
    // Verifica si MetaMask está instalado
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to use this feature.');
      return;
    }

    // Habilita MetaMask
    await window.ethereum.enable();

    // Crea una instancia de Web3
    const web3 = new Web3(window.ethereum);

    // Crea una instancia del contrato
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    // Obtiene la cuenta del usuario actual
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];

    // Llama a la función collectEggs en el contrato
    const transaction = await contract.methods.collectEggs().send({ from: senderAddress });

    // Comprueba el éxito de la transacción
    if (transaction.status) {
      alert('Eggs collected successfully!');

      // Escucha el evento EggsCollected y obtiene los valores
      contract.events.EggsCollected({ filter: { user: senderAddress } }, (error, result) => {
        if (!error) {
          const user = result.returnValues.user;
          const eggs = result.returnValues.eggs;
          console.log(`User: ${user}, Eggs: ${eggs}`);
        } else {
          console.error('Error listening to EggsCollected event:', error);
        }
      });
    } else {
      alert('Transaction failed. Please check your MetaMask and try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Error collecting eggs. Please check your MetaMask and try again.');
  }
});



	
	async function getUserAddress() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this feature.');
            return;
        }

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } catch (error) {
        console.error(error);
        return '';
    }
}


async function getUserGallinasDetails() {
    try {
        const userAddress = await getUserAddress();
        const gallinasOwned = await contract.methods.getGallinasOwned(userAddress).call();
        const gallinaCount = gallinasOwned.length;

        // Actualizar la dirección del usuario y la cantidad de gallinas en la página
        document.getElementById('user-address').textContent = userAddress;
        document.getElementById('user-chicken-count').textContent = gallinaCount;

        const gallinaList = document.getElementById('gallina-list');
        gallinaList.innerHTML = ''; // Limpiar la lista existente

        for (let i = 0; i < gallinaCount; i++) {
            const gallinaType = gallinasOwned[i];
            const gallinaDetails = await contract.methods.gallinas(gallinaType).call();
            const lastProductionUpdate = parseInt(gallinaDetails.lastProductionUpdate);

            // Calcular el tiempo restante para la próxima producción
            const cooldownTime = parseInt(gallinaDetails.productionCooldown);
            const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
            const timeRemaining = cooldownTime - (currentTime - lastProductionUpdate);

            // Crear un elemento de lista para mostrar los detalles de la gallina
            const listItem = document.createElement('li');
            listItem.textContent = `Gallina ${i + 1}: Tipo ${gallinaType}, Tiempo restante para la producción: ${timeRemaining} segundos`;
            gallinaList.appendChild(listItem);
        }
    } catch (error) {
        console.error('Error al obtener los detalles de las gallinas:', error);
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
 

$(document).ready(function() {
    // Ocultar el panel al principio
    $("#banner-dialog").hide();

    // Mostrar el panel cuando se carga la página
    $(window).on("load", function() {
        $("#banner-dialog").fadeIn();
    });

    // Asociar el evento click para cerrar el panel
    $("#close-btn").click(function() {
        $("#banner-dialog").fadeOut();
    });
});


 });

