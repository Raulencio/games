

const menu = document.getElementById('menu');
const gameOver = document.getElementById('gameOver');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const backToMenuButton = document.getElementById('backToMenuButton');


// Obtener el canvas y el contexto
const canvas = document.getElementById('arena');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas para que coincida con el tamaño de la pantalla del dispositivo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Función para redibujar el canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Ajustar el fondo
const backgroundImg = new Image();
backgroundImg.src = 'volcano.png';

// Función para limpiar el canvas y redibujar el fondo
function clearCanvas() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}


// Variables para el juego (usadas en el código anterior)
let gameRunning = false; // Para saber si el juego está en curso

// Función para iniciar el juego
function startGame() {
    menu.style.display = 'none';  // Ocultar el menú
    gameOver.style.display = 'none'; // Ocultar la pantalla de Game Over
    gameRunning = true;
    gameLoop(); // Iniciar el ciclo del juego
}

// Función para reiniciar el juego
function restartGame() {
    // Reiniciar las variables del juego y los enemigos, etc.
    player.health = player.maxHealth;
    enemies.length = 0;  // Limpiar enemigos
    gameRunning = true;
    spawnEnemy(); // Generar enemigos al reiniciar
    gameLoop(); // Iniciar el ciclo del juego
    gameOver.style.display = 'none';  // Ocultar pantalla de Game Over
}

// Función para volver al menú
function backToMenu() {
    menu.style.display = 'block'; // Mostrar el menú de inicio
    gameOver.style.display = 'none'; // Ocultar la pantalla de Game Over
    gameRunning = false;
}

// Función para manejar cuando el jugador pierde toda su vida
function handlePlayerDeath() {
    if (player.health <= 0) {
        gameRunning = false;  // Detener el juego
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText('¡Derrotado!', canvas.width / 2, canvas.height / 2);  // Mensaje de derrota

        // Mostrar la pantalla de Game Over
        gameOver.style.display = 'block';

        // Detener el ciclo de animación (detener el juego)
        cancelAnimationFrame(gameLoop);
    }
}

// Evento para el botón de volver al menú
backToMenuButton.addEventListener('click', backToMenu);

// Eventos para los botones
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

// Imágenes

const playerImg = new Image();
playerImg.src = 'yohirostand.png';

const practicaImg = new Image();
practicaImg.src = 'practica.png';

const ninjaImg = new Image();
ninjaImg.src = 'ninja.png';

// Tipos de Gladiadores
const gladiatorTypes = [
    {
        name: 'Fuerte',
        health: 150,
        speed: 2,
        damage: 15,
        description: 'Un gladiador poderoso con alta vida y daño, pero baja movilidad.',
    },
    {
        name: 'Hábil',
        health: 100,
        speed: 4,
        damage: 10,
        description: 'Un gladiador balanceado con buena velocidad y daño moderado.',
    },
    {
        name: 'Ágil',
        health: 80,
        speed: 6,
        damage: 20,
        description: 'Rápido y evasivo, pero con baja vida y daño alto.',
    },
];

// Gladiador seleccionado
let selectedGladiator = gladiatorTypes[1]; // Por defecto, seleccionamos "Hábil"

// Configuración del jugador
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 100,
    speed: selectedGladiator.speed,
    dx: 0,
    dy: 0,
    health: selectedGladiator.health, // Vida según el tipo seleccionado
    maxHealth: selectedGladiator.health,
    damage: selectedGladiator.damage, // Daño según el tipo seleccionado
    isDodging: false,
    isDefending: false,
};

// Proyectiles disparados
let projectiles = [];

// Lista de enemigos
const enemies = [
    {
        name: 'Ninja',
        health: 50,
        damage: 10,
        speed: 2,
        img: ninjaImg,
        type: 'ninja',
        maxHealth: 50,
        lastAttackTime: 0,
        attackCooldown: 1000, // Intervalo entre ataques
    },
    {
        name: 'Práctica',
        health: 30,
        damage: 0,
        speed: 0,
        img: practicaImg,
        type: 'practica',
        maxHealth: 30,
        lastAttackTime: 0,
        attackCooldown: 1000,
    },
];// Generar un nuevo enemigo
function spawnEnemy() {
    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    const size = 50;  // Tamaño del enemigo
    let x, y;

    // Verificar si el enemigo es 'Práctica' y colocarlo cerca del centro
    if (randomEnemy.name === 'Práctica') {
        // Crear un rango alrededor del centro para la posición de 'Práctica'
        const margin = 100; // Margen alrededor del centro
        x = canvas.width / 2 - size / 2 + Math.random() * margin - margin / 2;  // Alejar un poco del centro en X
        y = canvas.height / 2 - size + Math.random() * margin - margin / 2;  // Alejar un poco del centro en Y
    } else {
        // Si es otro enemigo, aparecerá en uno de los bordes
        const randomEdge = Math.floor(Math.random() * 4);  // 0: arriba, 1: abajo, 2: izquierda, 3: derecha
        switch(randomEdge) {
            case 0: // Borde superior
                x = Math.random() * (canvas.width - size);
                y = 0;
                break;
            case 1: // Borde inferior
                x = Math.random() * (canvas.width - size);
                y = canvas.height - size;
                break;
            case 2: // Borde izquierdo
                x = 0;
                y = Math.random() * (canvas.height - size);
                break;
            case 3: // Borde derecho
                x = canvas.width - size;
                y = Math.random() * (canvas.height - size);
                break;
        }
    }

    // Agregar el enemigo a la lista
    enemies.push({
        ...randomEnemy,
        x,
        y,
        width: size,
        height: 2 * size, // Tamaño de la altura del enemigo
    });
}


// Dibujar la barra de vida de un personaje (jugador o enemigo)
function drawHealthBar(x, y, maxWidth, height, currentHealth, maxHealth) {
    // Calcular el porcentaje de vida restante (0 a 1)
    const healthPercentage = currentHealth / maxHealth;

    // Establecer el ancho de la barra de vida basado en el porcentaje
    const barWidth = healthPercentage * maxWidth;

    // Log para depurar
    console.log(`currentHealth: ${currentHealth}, maxHealth: ${maxHealth}`);
    console.log(`healthPercentage: ${healthPercentage}, barWidth: ${barWidth}`);

    // Fondo de la barra (rojo)
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, maxWidth, height);

    // Barra de vida de frente (verde) basada en la vida restante
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, barWidth, height);
}




// Limpiar la pantalla
function clearCanvas() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

// Actualizar la posición del jugador
function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    // Limitar al jugador dentro de los bordes
    if (player.x < 0) player.x = 0;
    if (player.y < 0) player.y = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}
// Actualizar enemigos para rodear el borde del jugador
function updateEnemies() {
    const currentTime = Date.now();
    enemies.forEach((enemy) => {
        // Calcular los bordes del jugador
        const playerLeft = player.x;
        const playerRight = player.x + player.width;
        const playerTop = player.y;
        const playerBottom = player.y + player.height;

        // Encontrar el borde más cercano del jugador
        let targetX = player.x;
        let targetY = player.y;

        const distances = [
            { x: playerLeft, y: playerTop, distance: Math.hypot(enemy.x - playerLeft, enemy.y - playerTop) },  // Top Left
            { x: playerRight, y: playerTop, distance: Math.hypot(enemy.x - playerRight, enemy.y - playerTop) },  // Top Right
            { x: playerLeft, y: playerBottom, distance: Math.hypot(enemy.x - playerLeft, enemy.y - playerBottom) },  // Bottom Left
            { x: playerRight, y: playerBottom, distance: Math.hypot(enemy.x - playerRight, enemy.y - playerBottom) },  // Bottom Right
        ];

        // Elegir el borde más cercano
        const closestPoint = distances.reduce((prev, curr) => (curr.distance < prev.distance ? curr : prev));
        targetX = closestPoint.x;
        targetY = closestPoint.y;

        // Calcular el ángulo hacia el borde más cercano
        const angle = Math.atan2(targetY - enemy.y, targetX - enemy.x);

        // Mover el enemigo hacia el borde del jugador
        enemy.x += Math.cos(angle) * enemy.speed;
        enemy.y += Math.sin(angle) * enemy.speed;

        // Comprobar si el enemigo ha llegado cerca del jugador
        if (
            enemy.x < player.x + player.width &&
            enemy.x + enemy.width > player.x &&
            enemy.y < player.y + player.height &&
            enemy.y + enemy.height > player.y
        ) {
            // Atacar al jugador si el cooldown ha pasado
            if (currentTime - enemy.lastAttackTime >= enemy.attackCooldown) {
                player.health -= enemy.damage; // El jugador recibe daño
                enemy.lastAttackTime = currentTime; // Actualizar el tiempo de ataque
            }
        }
    });
}

// Manejar las teclas
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            player.dy = -player.speed;
            break;
        case 'ArrowDown':
            player.dy = player.speed;
            break;
        case 'ArrowLeft':
            player.dx = -player.speed;
            break;
        case 'ArrowRight':
            player.dx = player.speed;
            break;
        case 'e': // Esquivar
            player.isDodging = true;
            break;
        case 'r': // Defenderse
        case 'Shift': // Defensa con Shift
            player.isDefending = true;
            break;
    }
});

// Soltar las teclas
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.dx = 0;
            break;
        case 'e': // Dejar de esquivar
            player.isDodging = false;
            break;
        case 'r': // Dejar de defenderse
        case 'Shift':
            player.isDefending = false;
            break;
    }
});

// Función para manejar cuando el jugador pierde toda su vida
function handlePlayerDeath() {
    if (player.health <= 0) {
        // Mostrar un mensaje de derrota
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText('¡Perdiste!', canvas.width / 2, canvas.height / 2);

        // Detener el juego
        cancelAnimationFrame(gameLoop);
    }
}

// Crear un proyectil
function shootProjectile(event) {
    const angle = Math.atan2(event.offsetY - player.y, event.offsetX - player.x);
    const projectile = {
        x: player.x + player.width / 2,
        y: player.y + player.height / 2,
        width: 10,
        height: 5,
        speed: 10,
        damage: 20,
        angle: angle,
    };
    projectiles.push(projectile);
}

// Mover los proyectiles
function updateProjectiles() {
    projectiles.forEach((projectile, index) => {
        projectile.x += Math.cos(projectile.angle) * projectile.speed; // Movimiento en X
        projectile.y += Math.sin(projectile.angle) * projectile.speed; // Movimiento en Y

        // Verificar si el proyectil está fuera de los límites
        if (
            projectile.x < 0 || projectile.x > canvas.width ||
            projectile.y < 0 || projectile.y > canvas.height
        ) {
            projectiles.splice(index, 1); // Eliminar el proyectil si está fuera de los límites
        }
    });
}

// Verificar impactos de los proyectiles
function checkProjectileCollision() {
    projectiles.forEach((projectile, index) => {
        enemies.forEach((enemy, enemyIndex) => {
            // Comprobar si el proyectil toca el área del enemigo (caja delimitadora)
            const enemyLeft = enemy.x;
            const enemyRight = enemy.x + enemy.width;
            const enemyTop = enemy.y;
            const enemyBottom = enemy.y + enemy.height;

            if (
                projectile.x + projectile.width > enemyLeft &&
                projectile.x < enemyRight &&
                projectile.y + projectile.height > enemyTop &&
                projectile.y < enemyBottom
            ) {
                // Reducir la vida del enemigo por el daño del proyectil
                enemy.health -= projectile.damage;

                // Si el enemigo muere, eliminarlo
                if (enemy.health <= 0) {
                    enemies.splice(enemyIndex, 1); // Eliminar el enemigo
                }

                // Eliminar el proyectil al hacer impacto
                projectiles.splice(index, 1);
            }
        });
    });
}

// Lógica del juego aquí
function gameLoop() {
    if (!gameRunning) return;  // Si no está en curso, no hacer nada

    clearCanvas();
    updatePlayer();
    updateProjectiles();
    checkProjectileCollision();
    updateEnemies();

    drawHealthBar(player.x, player.y - 10, 50, 5, player.health, player.maxHealth);
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    // Dibujar enemigos
    enemies.forEach((enemy) => {
        ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        drawHealthBar(enemy.x, enemy.y - 10, 50, 5, enemy.health, enemy.maxHealth);
    });

    // Dibujar proyectiles
    projectiles.forEach((projectile) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
    });

    handlePlayerDeath();  // Verificar si el jugador ha muerto

    if (gameRunning) {
        requestAnimationFrame(gameLoop); // Continuar el ciclo del juego
    }
}


// Generar enemigos periódicamente
setInterval(spawnEnemy, 5000);  // Generar enemigos cada 5 segundos

// Evento de disparo de proyectil
canvas.addEventListener('click', shootProjectile);

// Iniciar juego
gameLoop(); // Iniciar el juego
