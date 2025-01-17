// Objeto de la tienda con objetos disponibles
const shopItems = [
    { id: 1, name: 'Poción de Salud', price: 20, effect: () => player.health = Math.min(player.maxHealth, player.health + 50) },
    { id: 2, name: 'Mejora de Velocidad', price: 50, effect: () => player.speed += 1 },
    { id: 3, name: 'Espada de Hierro', price: 100, effect: () => player.damage += 5 },
];

// Función para comprar un objeto
function buyItem(input) {
    // Buscar por número o nombre
    const item = shopItems.find(
        (item) =>
            item.id.toString() === input || item.name.toLowerCase() === input.toLowerCase()
    );

    if (!item) {
        alert("El objeto no existe. Intenta nuevamente.");
        return;
    }

    // Verificar si el jugador tiene suficiente oro
    if (player.inventory.gold >= item.price) {
        player.inventory.gold -= item.price;
        player.inventory.items.push(item);

        // Aplicar efecto del objeto
        item.effect();

        alert(`¡Has comprado ${item.name} por ${item.price} de oro!`);
    } else {
        alert("No tienes suficiente oro para comprar este objeto.");
    }
}

// Función para abrir la tienda
function openShop() {
    let shopText = "Tienda de Objetos:\n";
    shopItems.forEach((item) => {
        shopText += `${item.id}. ${item.name} - ${item.price} de oro\n`;
    });
    shopText += `\nTu oro actual: ${player.inventory.gold}\n`;
    shopText += "Escribe el número o el nombre del objeto que deseas comprar:";

    const userInput = prompt(shopText);

    if (userInput) {
        buyItem(userInput.trim());
    }
}

// Vincular la tienda con una tecla
document.addEventListener("keydown", (event) => {
    if (event.key === "T" || event.key === "t") {
        openShop();
    }
});
