/*function savePlayerData() {
    // Guardar el objeto player en el localStorage
    localStorage.setItem('playerData', JSON.stringify(player));
}
function loadPlayerData() {
    // Verificar si ya existen datos guardados en el localStorage
    const savedData = localStorage.getItem('playerData');
    if (savedData) {
        // Cargar los datos guardados
        const loadedData = JSON.parse(savedData);

        // Actualizar el objeto player con los datos guardados
        player.level = loadedData.level;
        player.xp = loadedData.xp;
        player.xpToNextLevel = loadedData.xpToNextLevel;
        player.inventory.gold = loadedData.inventory.gold;
        player.health = loadedData.health;
        player.maxHealth = loadedData.maxHealth;
        player.damage = loadedData.damage;
        // Si tienes más propiedades, actualízalas de forma similar
    }
}
*/
var nombre="";

function verificarDatos() {
    if (localStorage.getItem("nombre") !== null) {
        nombre = localStorage.getItem("nombre");
    } else {
        nombre = prompt("Ingresa tu nombre o apodo") || "Jugador"; // Valor predeterminado si no ingresa nada
    }

    // Cargar oro, experiencia, nivel y XP requerido para el siguiente nivel
    player.inventory.gold = parseInt(localStorage.getItem("gold")) || 0; // Si no es válido, predeterminado a 0
    player.xp = parseInt(localStorage.getItem("xp")) || 0;               // Si no es válido, predeterminado a 0
    player.level = parseInt(localStorage.getItem("lvl")) || 1;           // Nivel predeterminado: 1
    player.xpToNextLevel = parseInt(localStorage.getItem("xpToNextLevel")) || 100; // XP necesario predeterminado: 100
    player.maxHealth = parseInt(localStorage.getItem("maxHealth")) || 100;


    // Guardar datos nuevamente para garantizar que todos los valores existan
    guardarDatos();
}

function guardarDatos() {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("gold", player.inventory.gold);
    localStorage.setItem("xp", player.xp);
    localStorage.setItem("lvl", player.level);
    localStorage.setItem("xpToNextLevel", player.xpToNextLevel);
    localStorage.setItem("maxHealth",player.maxHealth);
}
