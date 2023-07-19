  let selectedChickenSlots = [];

    function buyChicken(chickenId) {
      if (selectedChickenSlots.length < 3) {
        selectedChickenSlots.push(chickenId);
        console.log("Gallina " + chickenId + " comprada.");
      } else {
        console.log("No se pueden comprar más gallinas.");
      }
    }

    function selectChickenSlot(slotNumber) {
      if (!selectedChickenSlots.includes(slotNumber)) {
        selectedChickenSlots.push(slotNumber);
        console.log("Seleccionado el espacio " + slotNumber + ".");
      } else {
        const index = selectedChickenSlots.indexOf(slotNumber);
        selectedChickenSlots.splice(index, 1);
        console.log("Deseleccionado el espacio " + slotNumber + ".");
      }
    }

    function rentChickens() {
      console.log("Alquiladas las gallinas seleccionadas:", selectedChickenSlots);
    }
