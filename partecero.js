// === CONFIGURACIÓN INICIAL ===
// Referencias a elementos del DOM
const menu = document.getElementById('menu');
const gameOver = document.getElementById('gameOver');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const backToMenuButton = document.getElementById('backToMenuButton');

// Canvas y contexto
const canvas = document.getElementById('arena');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ajustar canvas al redimensionar ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    clearCanvas();
});


const arenaBackgrounds = [
    'volcano.png',
    'volcano.png',
    'volcano.png',
];

function changeArenaLevel() {
    const currentLevel = player.level - 1; // El nivel actual es el nivel del jugador menos uno
    const arenaIndex = Math.min(currentLevel, arenaBackgrounds.length - 1); // No superar el tamaño de los fondos
    backgroundImg.src = arenaBackgrounds[arenaIndex]; // Cambiar fondo según el nivel
}


// === CONFIGURACIÓN DEL JUEGO ===
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 100,
    speed: 4,
    dx: 0,
    dy: 0,
    health:  parseInt(localStorage.getItem("maxHealth")||100),
    maxHealth: parseInt(localStorage.getItem("maxHealth")||100),
    damage: 10,
    level:  parseInt(localStorage.getItem("lvl")||1), // Nivel inicial del jugador
    xp: parseInt(localStorage.getItem("xp")), // Puntos de experiencia
    xpToNextLevel:  parseInt(localStorage.getItem("xpToNextLevel")), // XP necesaria para subir de nivel
    damageIndicators: [],
    inventory: {
        gold:  parseInt(localStorage.getItem("gold")),
        items: [],
    },
};
