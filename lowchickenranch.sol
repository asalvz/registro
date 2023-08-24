// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GallinaFarm is ERC20, Ownable {
    enum GallinaType { Type1, Type2, Type3, Type4, Type5, Type6 }

    struct Gallina {
        uint8 minProduction;
        uint8 maxProduction;
        uint8 currentProduction;
        uint256 productionCooldown;
        uint256 lastProductionUpdate; // Nueva propiedad

    }

    struct User {
        uint256 capacity;
        uint256[] gallinas;
        mapping(uint256 => uint256) eggBalances;
    }

    mapping(GallinaType => Gallina) public gallinas;
    mapping(address => User) public users;
    mapping(address => mapping(uint256 => uint256)) public lastEggMintTime;
    mapping(GallinaType => uint256) public gallinaPrices;




    uint256 public eggPrice = 50000; // Price of 1 egg in wei (0.00005 ETH)

    event EggsCollected(address indexed collector, uint256 eggs); // Declare the event here
    event CapacityUpgraded(address indexed user, uint256 newCapacity);
    event GallinaPurchased(address indexed buyer, GallinaType indexed gallinaType, uint256 price);
    event GallinasOwned(address indexed user, GallinaType[] gallinaTypes);
    event EggsSold(address indexed seller, uint256 eggsSold, uint256 bnbReceived);
    event ProductionUpdated(
    GallinaType indexed gallinaType,
    uint8 minProduction,
    uint8 maxProduction,
    uint8 currentProduction,
    uint256 productionCooldown,
    uint256 gallinaPrice,
    uint256 eggPrice
);






    uint256 public initialCapacity = 12;
    uint256 public capacityIncrement = 20;
    uint256 public capacityUpgradeCost = 0.1 ether;



    constructor() ERC20("EggToken", "EGG") {}


     function getGallinasOwned(address _user) external view returns (GallinaType[] memory) {
        GallinaType[] memory ownedGallinas = new GallinaType[](users[_user].gallinas.length);
        for (uint256 i = 0; i < users[_user].gallinas.length; i++) {
            ownedGallinas[i] = GallinaType(users[_user].gallinas[i]);
        }
        return ownedGallinas;
     }

    function mintEggs(uint256 _amount) external onlyOwner {
        _mint(msg.sender, _amount);
    }

  function buyGallina(GallinaType _gallinaType) external payable {
    
    // Calculate the price of the selected gallina type
    uint256 gallinaPrice;
    if (_gallinaType == GallinaType.Type1) {
        gallinaPrice = 0.04 ether;
    } else if (_gallinaType == GallinaType.Type2) {
        gallinaPrice = 0.05 ether;
    } else if (_gallinaType == GallinaType.Type3) {
        gallinaPrice = 0.07 ether;
    } else if (_gallinaType == GallinaType.Type4) {
        gallinaPrice = 0.08 ether;
    } else if (_gallinaType == GallinaType.Type5) {
        gallinaPrice = 0.1 ether;
    } else if (_gallinaType == GallinaType.Type6) {
        gallinaPrice = 0.2 ether;
    } else {
        revert("Invalid gallina type");
    }
    
    // Calculate total capacity (initial + increased)
    uint256 totalCapacity = initialCapacity + users[msg.sender].capacity;
    
    // Check if the user has enough capacity and send payment
    require(users[msg.sender].gallinas.length < totalCapacity, "User has reached maximum capacity");
    require(msg.value == gallinaPrice, "Invalid payment amount");
    
    // Mint the eggs to the user
    uint256 eggsProduced = generateEggs(_gallinaType);
    _mint(msg.sender, eggsProduced);
    
    users[msg.sender].gallinas.push(uint256(_gallinaType));
    
    // Emit event for successful gallina purchase
    emit GallinaPurchased(msg.sender, _gallinaType, gallinaPrice);
}
function collectEggs() external {
    User storage user = users[msg.sender];
    require(user.gallinas.length > 0, "User has no gallinas to collect eggs from");

    uint256 totalEggsCollected;
    for (uint256 i = 0; i < user.gallinas.length; i++) {
        Gallina storage gallina = gallinas[GallinaType(user.gallinas[i])];
        require(block.timestamp >= gallina.lastProductionUpdate + gallina.productionCooldown, "Egg collection cooldown not reached");

        // Calculate the number of 15-day intervals that have passed
        uint256 intervalsPassed = (block.timestamp - gallina.lastProductionUpdate) / 15 days;

        // Calculate eggs produced based on the current production of the gallina
        uint256 eggsProduced = intervalsPassed * gallina.currentProduction;

        // Mint the calculated eggs
        _mint(msg.sender, eggsProduced);

        user.eggBalances[i] += eggsProduced;
        totalEggsCollected += eggsProduced;

        // Update last production update time
        gallina.lastProductionUpdate += intervalsPassed * 15 days;
    }

    // Emit the EggsCollected event
    emit EggsCollected(msg.sender, totalEggsCollected);
}

function initializeGallinaTypes() external onlyOwner {
    uint256 productionCooldown = 15 days; // Set the production cooldown to 15 days

    gallinas[GallinaType.Type1] = Gallina(10, 26, 0, productionCooldown, 0);
    gallinas[GallinaType.Type2] = Gallina(15, 26, 0, productionCooldown, 0);
    gallinas[GallinaType.Type3] = Gallina(10, 29, 0, productionCooldown, 0);
    gallinas[GallinaType.Type4] = Gallina(15, 32, 0, productionCooldown, 0);
    gallinas[GallinaType.Type5] = Gallina(22, 31, 0, productionCooldown, 0);
    gallinas[GallinaType.Type6] = Gallina(24, 38, 0, productionCooldown, 0);
}


function upgradeCapacity() external payable {
    require(users[msg.sender].capacity < 99, "Maximum capacity reached");
    require(msg.value == capacityUpgradeCost, "Incorrect payment amount");

    // Increment user's capacity and update the capacity upgrade cost
    users[msg.sender].capacity += capacityIncrement;
    capacityUpgradeCost += 0.1 ether;

    // Emit an event to indicate the capacity upgrade
    emit CapacityUpgraded(msg.sender, users[msg.sender].capacity);
}
function generateEggs(GallinaType _gallinaType) internal returns (uint256) {
    Gallina storage gallina = gallinas[_gallinaType];
    
    // Lógica para calcular la cantidad de huevos generados
    uint256 eggsProduced = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, _gallinaType))) % (gallina.maxProduction - gallina.minProduction + 1) + gallina.minProduction;

    // Actualiza el tiempo del último minteo de huevo
    lastEggMintTime[msg.sender][uint256(_gallinaType)] = block.timestamp;
    
    return eggsProduced;
}




function sellEggs(uint256 _eggAmount) external {
    require(_eggAmount > 0, "Amount of eggs to sell must be greater than 0");
    require(balanceOf(msg.sender) >= _eggAmount, "Not enough eggs to sell");

    uint256 bnbAmount = _eggAmount * eggPrice;
    _burn(msg.sender, _eggAmount);
    payable(msg.sender).transfer(bnbAmount);

    emit EggsSold(msg.sender, _eggAmount, bnbAmount); // Emit an event indicating the eggs were sold
}


   

    function getUserCapacity(address _user) external view returns (uint256) {
        return users[_user].capacity;
    }

    function getUserGallinas(address _user) external view returns (uint256[] memory) {
        return users[_user].gallinas;
    }

    function getUserEggBalance(address _user, uint256 _gallinaIndex) external view returns (uint256) {
        return users[_user].eggBalances[_gallinaIndex];
    }
    function deposit() external payable {
    require(msg.value > 0, "Amount must be greater than 0");
    // Aquí puedes realizar acciones adicionales antes de aceptar el depósito, si es necesario
    }
    function setProduction(
    GallinaType _gallinaType,
    uint8 _minProduction,
    uint8 _maxProduction,
    uint8 _currentProduction,
    uint256 _productionCooldown,
    uint256 _gallinaPrice,
    uint256 _eggPrice
) external onlyOwner {
    require(_minProduction <= _maxProduction, "Min production must be <= max production");

    Gallina storage gallina = gallinas[_gallinaType];
    gallina.minProduction = _minProduction;
    gallina.maxProduction = _maxProduction;
    gallina.currentProduction = _currentProduction;
    gallina.productionCooldown = _productionCooldown;

    uint256 newGallinaPrice = _gallinaPrice * 1 ether; // Convert to Wei
    uint256 newEggPrice = _eggPrice * 1 wei; // Convert to Wei
    require(newGallinaPrice > 0 && newEggPrice > 0, "Prices must be greater than 0");

    // Update gallina and egg prices
    gallinaPrices[_gallinaType] = newGallinaPrice;
    eggPrice = newEggPrice;

    emit ProductionUpdated(
        _gallinaType,
        _minProduction,
        _maxProduction,
        _currentProduction,
        _productionCooldown,
        newGallinaPrice,
        newEggPrice
    );
}




}
