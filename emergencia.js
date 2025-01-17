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

// === IMÁGENES ===
const backgroundImg = new Image();
backgroundImg.src = 'volcano.png';

const playerImg = new Image();
playerImg.src = 'yohirostand.png';

const ninjaImg = new Image();
ninjaImg.src = 'electron.png';

const archerImg = new Image();
archerImg.src = 'fuegoso.png';

const knightImg = new Image();
knightImg.src = 'baboso.png';

// === CONFIGURACIÓN DE ESTADÍSTICAS DE ENEMIGOS ===
const enemyStats = {
    archer: {
        maxHealth: 70,
        attackDamage: 10,
        speed: 3,
        attackRange: 400,
        attackCooldown: 2000,
        attackSpeed: 8,
        isMelee: false,
    },
    ninja: {
        maxHealth: 50,
        attackDamage: 15,
        speed: 5,
        attackRange: 50,
        attackCooldown: 1500,
        attackSpeed: 6,
        isMelee: true,
    },
    knight: {
        maxHealth: 100,
        attackDamage: 25,
        speed: 2,
        attackRange: 100,
        attackCooldown: 2500,
        attackSpeed: 4,
        isMelee: true,
    }
};

// === CONFIGURACIÓN DEL JUEGO ===
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 100,
    speed: 4,
    dx: 0,
    dy: 0,
    health: 100,
    maxHealth: 100,
    damage: 10,
    level: 1, // Nivel inicial del jugador
    xp: 0, // Puntos de experiencia
    xpToNextLevel: 100, // XP necesaria para subir de nivel
    damageIndicators: [],
};

function checkLevelUp() {
    if (player.xp >= player.xpToNextLevel) {
        player.level++;
        player.xp -= player.xpToNextLevel; // Restar XP necesario para el próximo nivel
        player.xpToNextLevel = Math.floor(player.xpToNextLevel * 1.2); // Aumentar la XP necesaria para el siguiente nivel
        player.maxHealth += 20; // Aumentar la salud máxima
        player.health = player.maxHealth; // Restablecer la salud
        player.damage += 5; // Aumentar el daño
        player.speed += 0.5; // Aumentar la velocidad

        console.log(`¡Nivel ${player.level} alcanzado!`);
    }
}
function drawPlayerLevel() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Nivel: ${player.level}`, 10, 140);
    ctx.fillText(`XP: ${player.xp} / ${player.xpToNextLevel}`, 10, 170);
}


const enemies = [];
const projectiles = [];
const enemyProjectiles = [];
let gameRunning = false;

// === FUNCIONES DE UTILIDAD ===

// Dibujar fondo del canvas
function clearCanvas() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

// Dibujar barra de vida genérica
function drawHealthBar(ctx, x, y, width, height, health, maxHealth) {
    const healthPercentage = Math.max(0, Math.min(health / maxHealth, 1));
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, width * healthPercentage, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
}

// === CONFIGURACIÓN DE ENEMIGOS ===
function createEnemy(type) {
    const stats = enemyStats[type];
    let enemy = {
        type: type,
        x: Math.random() < 0.5 ? -50 : canvas.width + 50,
        y: Math.random() * canvas.height,
        width: 50,
        height: 100,
        health: stats.maxHealth,
        maxHealth: stats.maxHealth,
        speed: stats.speed,
        attackRange: stats.attackRange,
        attackDamage: stats.attackDamage,
        attackCooldown: stats.attackCooldown,
        attackSpeed: stats.attackSpeed,
        isMelee: stats.isMelee,
        lastAttackTime: 0,
        img: null,
        damageIndicators: [],
        dying: false,
        opacity: 1,
    };
    enemy.img = type === 'archer' ? archerImg : type === 'ninja' ? ninjaImg : knightImg;
    return enemy;
}

// Agregar enemigos periódicamente
function spawnEnemies() {
    setInterval(() => {
        if (gameRunning) {
            const types = Object.keys(enemyStats);
            const randomType = types[Math.floor(Math.random() * types.length)];
            enemies.push(createEnemy(randomType));
        }
    }, 3000); // Cada 3 segundos
}

// === FUNCIONES DE DIBUJO ===
function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    drawHealthBar(ctx, 10, 10, 200, 20, player.health, player.maxHealth); // Barra de vida del jugador
}

function drawEnemies() {
    enemies.forEach((enemy) => {
        ctx.globalAlpha = enemy.opacity; // Ajustar opacidad del enemigo
        ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        drawHealthBar(ctx, enemy.x, enemy.y - 10, 50, 5, enemy.health, enemy.maxHealth); // Barra de vida
        ctx.globalAlpha = 1; // Restaurar opacidad
    });
}

function drawProjectiles() {
    projectiles.forEach((projectile) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
    });
}

// === DETECCIÓN DE COLISIONES ===
function checkCollisions() {
    projectiles.forEach((projectile, pIndex) => {
        enemies.forEach((enemy, eIndex) => {
            // Comprobar colisión: simplificación con rectángulos
            const projectileHitbox = {
                x: projectile.x,
                y: projectile.y,
                width: projectile.width,
                height: projectile.height,
            };
            const enemyHitbox = {
                x: enemy.x,
                y: enemy.y,
                width: enemy.width,
                height: enemy.height,
            };

            if (
                projectileHitbox.x < enemyHitbox.x + enemyHitbox.width &&
                projectileHitbox.x + projectileHitbox.width > enemyHitbox.x &&
                projectileHitbox.y < enemyHitbox.y + enemyHitbox.height &&
                projectileHitbox.y + projectileHitbox.height > enemyHitbox.y
            ) {
                // Aplicar daño al enemigo
                enemy.health -= projectile.damage;

                // Mostrar daño en pantalla (opcional)
                enemy.damageIndicators.push({
                    value: projectile.damage,
                    x: enemy.x + enemy.width / 2,
                    y: enemy.y,
                    opacity: 1,
                });

                // Eliminar el proyectil
                projectiles.splice(pIndex, 1);

                // Eliminar enemigo si su salud llega a 0
                if (enemy.health <= 0) {
                    enemies.splice(eIndex, 1);
                }
            }
        });
    });
}

function updateHealthBar() {
    const healthBar = document.getElementById('healthBar');
    const healthPercentage = (player.health / player.maxHealth) * 100;
    healthBar.style.width = `${healthPercentage}%`;
}

function updateDamageIndicators() {
    enemies.forEach((enemy) => {
        enemy.damageIndicators.forEach((indicator, index) => {
            indicator.y -= 0.5; // Elevar el texto
            indicator.opacity -= 0.02; // Reducir la opacidad
            if (indicator.opacity <= 0) {
                enemy.damageIndicators.splice(index, 1); // Eliminar indicador
            }
        });
    });
}

function drawDamageIndicators() {
    enemies.forEach((enemy) => {
        enemy.damageIndicators.forEach((indicator) => {
            ctx.globalAlpha = indicator.opacity;
            ctx.fillStyle = 'yellow';
            ctx.font = '16px Arial';
            ctx.fillText(`-${indicator.value}`, indicator.x, indicator.y);
            ctx.globalAlpha = 1; // Restaurar opacidad
        });
    });
}



function applyDamageToPlayer(amount) {
    player.health -= amount;

    // Añadir un indicador de daño
    player.damageIndicators.push({
        value: amount,
        x: player.x + player.width / 2,  // Posición en el centro del jugador
        y: player.y,  // La posición 'y' es sobre el personaje
        opacity: 1,
    });

    // Añadir la clase de daño al jugador para la animación
    const playerDiv = document.getElementById('player');
    playerDiv.classList.add('damage');

    // Eliminar la clase después de la animación (0.5s en este caso)
    setTimeout(() => {
        playerDiv.classList.remove('damage');
    }, 500);

    // Actualizar la barra de salud o cualquier otro indicador visual
    updateHealthBar();
}



// === CONFIGURACIÓN DE ARMAS ===
const weapons = {
    1: { name: 'Daga', damage: 30, range: 200, speed: 20, color: 'gray', isMelee: false },
    2: { name: 'Espada', damage: 75, range: 50, speed: 10, color: 'blue', isMelee: true },
    3: { name: 'Lanza', damage: 50, range: 100, speed: 8, color: 'green', isMelee: true },
    4: { name: 'Arco', damage: 20, range: 600, speed: 14, color: 'orange', isMelee: false },
    5: { name: 'Ballesta', damage: 15, range: 700, speed: 60, color: 'red', isMelee: false },
};


let currentWeapon = 1; // Arma seleccionada por defecto

// === EVENTOS Y CONTROLES ===
// Movimiento
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') player.dx = -player.speed;
    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') player.dx = player.speed;
    if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') player.dy = -player.speed;
    if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') player.dy = player.speed;

    // Cambio de arma con los números 1-5
    if (event.key >= '1' && event.key <= '5') {
        currentWeapon = parseInt(event.key);
        console.log(`Arma cambiada a: ${weapons[currentWeapon].name}`);
    }
});

document.addEventListener('keyup', (event) => {
    if (
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key.toLowerCase() === 'a' ||
        event.key.toLowerCase() === 'd'
    ) {
        player.dx = 0;
    }
    if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key.toLowerCase() === 'w' ||
        event.key.toLowerCase() === 's'
    ) {
        player.dy = 0;
    }
});
function drawMeleeAttack(range) {
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, range, 0, Math.PI * 2);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.stroke();
}


// Ataque con clic del mouse
canvas.addEventListener('click', (event) => {
    const weapon = weapons[currentWeapon];

    if (weapon.isMelee) {
        // Ataque melee: verificar enemigos en el rango cercano
        enemies.forEach((enemy, index) => {
            const dx = player.x - enemy.x;
            const dy = player.y - enemy.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= weapon.range) {
                // Aplicar daño al enemigo
                enemy.health -= weapon.damage;

                // Mostrar daño en pantalla
                enemy.damageIndicators.push({
                    value: weapon.damage,
                    x: enemy.x + enemy.width / 2,
                    y: enemy.y,
                    opacity: 1,
                });

                // Eliminar enemigo si la salud llega a 0
                if (enemy.health <= 0) {
                    enemies.splice(index, 1);
                    gainXP(10)
                }
            }
        });if (weapon.isMelee) {
            drawMeleeAttack(weapon.range);
        }
        
    } else {
        // Ataque a distancia: crear proyectiles
        const angle = Math.atan2(event.offsetY - player.y, event.offsetX - player.x);
        projectiles.push({
            x: player.x + player.width / 2,
            y: player.y + player.height / 2,
            width: 10,
            height: 5,
            speed: weapon.speed,
            damage: weapon.damage,
            range: weapon.range,
            angle,
            color: weapon.color,
            distanceTraveled: 0,
        });
    }
});


// === ACTUALIZAR PROYECTILES ===
// === ACTUALIZAR PROYECTILES ===
function updateProjectiles() {
    // Actualizar proyectiles del jugador
    projectiles.forEach((projectile, index) => {
        const dx = Math.cos(projectile.angle) * projectile.speed;
        const dy = Math.sin(projectile.angle) * projectile.speed;

        projectile.x += dx;
        projectile.y += dy;
        projectile.distanceTraveled += Math.sqrt(dx * dx + dy * dy);

        // Eliminar proyectil si supera su rango o sale del canvas
        if (
            projectile.distanceTraveled > projectile.range ||
            projectile.x < 0 || projectile.x > canvas.width ||
            projectile.y < 0 || projectile.y > canvas.height
        ) {
            projectiles.splice(index, 1);
        }
    });

    // Actualizar proyectiles de los enemigos
    enemyProjectiles.forEach((projectile, index) => {
        const dx = Math.cos(projectile.angle) * projectile.speed;
        const dy = Math.sin(projectile.angle) * projectile.speed;

        projectile.x += dx;
        projectile.y += dy;
        projectile.distanceTraveled += Math.sqrt(dx * dx + dy * dy);

        // Verificar colisión con el jugador
        if (
            projectile.x < player.x + player.width &&
            projectile.x + projectile.width > player.x &&
            projectile.y < player.y + player.height &&
            projectile.y + projectile.height > player.y
        ) {
            // Aplicar daño al jugador
            player.health -= projectile.damage;

            // Mostrar daño en pantalla
            player.damageIndicators.push({
                value: projectile.damage,
                x: player.x + player.width / 2,
                y: player.y,
                opacity: 1,
            });

            // Eliminar el proyectil después de la colisión
            enemyProjectiles.splice(index, 1);
        }

        // Eliminar proyectil si supera su rango o sale del canvas
        if (
            projectile.distanceTraveled > projectile.range ||
            projectile.x < 0 || projectile.x > canvas.width ||
            projectile.y < 0 || projectile.y > canvas.height
        ) {
            enemyProjectiles.splice(index, 1);
        }
    });
}


// === DIBUJAR PROYECTILES ===
function drawProjectiles() {
    projectiles.forEach((projectile) => {
        ctx.fillStyle = projectile.color;
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
    });
}










// === LÓGICA DEL JUEGO ===
function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}


function attackEnemyMelee(enemy) {
    // Verificar si el enemigo puede atacar (basado en el tiempo de cooldown)
    const currentTime = Date.now();
    if (currentTime - enemy.lastAttackTime >= enemy.attackCooldown) {
        player.health -= enemy.attackDamage; // Reducir la salud del jugador
        enemy.lastAttackTime = currentTime; // Actualizar el tiempo de ataque del enemigo

        // Mostrar daño en pantalla (opcional)
        player.damageIndicators.push({
            value: enemy.attackDamage,
            x: player.x + player.width / 2,
            y: player.y,
            opacity: 1,
        });
    }
}
function attackEnemyRanged(enemy) {
    // Verificar si el enemigo puede disparar un proyectil (basado en el cooldown)
    const currentTime = Date.now();
    if (currentTime - enemy.lastAttackTime >= enemy.attackCooldown) {
        const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);

        // Crear un proyectil y añadirlo al arreglo de proyectiles
        enemyProjectiles.push({
            x: enemy.x + enemy.width / 2,
            y: enemy.y + enemy.height / 2,
            width: 10,
            height: 5,
            speed: enemy.attackSpeed,
            damage: enemy.attackDamage,
            range: enemy.attackRange,
            angle: angle,
            color: 'red', // Puedes cambiar el color o hacer que sea dinámico
            distanceTraveled: 0,
        });

        enemy.lastAttackTime = currentTime; // Actualizar el tiempo de ataque del enemigo
    }
}


function updateEnemies() {
    enemies.forEach((enemy) => {
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mover al enemigo hacia el jugador si está fuera de su rango de ataque
        if (distance > enemy.attackRange) {
            enemy.x += (dx / distance) * enemy.speed;
            enemy.y += (dy / distance) * enemy.speed;
        }

        // Verificar si el enemigo está dentro de su rango de ataque
        if (distance <= enemy.attackRange) {
            if (enemy.isMelee) {
                // Ataque cuerpo a cuerpo
                attackEnemyMelee(enemy);
            } else {
                // Ataque a distancia (usando proyectiles)
                attackEnemyRanged(enemy);
            }
        }
    });
}


function drawWeaponIndicator() {
    const weapon = weapons[currentWeapon];
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Arma: ${weapon.name}`, 10, 50); // Nombre del arma
    ctx.fillText(`Daño: ${weapon.damage}`, 10, 80); // Daño del arma
    ctx.fillText(`Rango: ${weapon.range}`, 10, 110); // Rango del arma


}
function updateEnemyProjectiles() {
    enemyProjectiles.forEach((projectile, index) => {
        const dx = Math.cos(projectile.angle) * projectile.speed;
        const dy = Math.sin(projectile.angle) * projectile.speed;

        projectile.x += dx;
        projectile.y += dy;
        projectile.distanceTraveled += Math.sqrt(dx * dx + dy * dy);

        // Verificar colisión con el jugador
        if (
            projectile.x < player.x + player.width &&
            projectile.x + projectile.width > player.x &&
            projectile.y < player.y + player.height &&
            projectile.y + projectile.height > player.y
        ) {
            applyDamageToPlayer(projectile.damage); // Aplicar daño al jugador
            enemyProjectiles.splice(index, 1); // Eliminar proyectil
        }

        // Eliminar proyectil si supera su rango o sale del canvas
        if (
            projectile.distanceTraveled > projectile.range ||
            projectile.x < 0 || projectile.x > canvas.width ||
            projectile.y < 0 || projectile.y > canvas.height
        ) {
            enemyProjectiles.splice(index, 1);
        }
    });
}




// === LÓGICA DE GAME OVER ===
function checkGameOver() {
    if (player.health <= 0) {
        gameRunning = false;
        gameOver.style.display = 'block'; // Mostrar la pantalla de Game Over

        // Oscurecer la pantalla lentamente
        const overlay = document.getElementById('overlay');
        overlay.hidden=false;
        
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Cambia la opacidad gradualmente

        // Aquí también podrías agregar un retraso antes de mostrar el mensaje de Game Over
    }
}


function gainXP(amount) {
    player.xp += amount;
    checkLevelUp();  // Verificar si el jugador ha subido de nivel
}


// === DIBUJAR PROYECTILES DE LOS ENEMIGOS ===
function drawEnemyProjectiles() {
    enemyProjectiles.forEach((projectile) => {
        ctx.fillStyle = projectile.color; // Color del proyectil
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height); // Dibujo del proyectil
    });
}

function drawPlayerDamageIndicators() {
    player.damageIndicators.forEach((indicator, index) => {
        indicator.y -= 0.5;  // Elevar el texto
        indicator.opacity -= 0.02;  // Reducir la opacidad

        if (indicator.opacity <= 0) {
            player.damageIndicators.splice(index, 1);  // Eliminar indicador cuando la opacidad llegue a 0
        }

        ctx.globalAlpha = indicator.opacity;
        ctx.fillStyle = 'yellow';
        ctx.font = '16px Arial';
        ctx.fillText(`-${indicator.value}`, indicator.x, indicator.y);
        ctx.globalAlpha = 1;  // Restaurar opacidad
    });
}

// === BUCLE PRINCIPAL ===
function gameLoop() {
    
    clearCanvas();
    updatePlayer();
    updateProjectiles(); // Llamar a la función de actualización de proyectiles aquí
    updateEnemies();
    updateDamageIndicators();
    checkCollisions();
    checkGameOver();
    checkLevelUp();
    drawPlayer();
    drawEnemies();
    drawProjectiles();
    drawDamageIndicators();
    drawWeaponIndicator();
    drawPlayerDamageIndicators(); 
    drawEnemyProjectiles();

    if (gameRunning) requestAnimationFrame(gameLoop);
}



// === EVENTOS Y CONTROLES ===
startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    gameRunning = true;
    spawnEnemies();
    gameLoop();
});

restartButton.addEventListener('click', () => location.reload());
backToMenuButton.addEventListener('click', () => {
    gameRunning = false;
    menu.style.display = 'block';
    gameOver.style.display = 'none';
});

