

function drawInventory() {
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Oro: ${player.inventory.gold}`, 10, 200);
  //ctx.fillText(`Inventario: ${player.inventory.items.join(', ') || 'Vacío'}`, 10, 230);
}
function checkLevelUp() {
    if (player.xp >= player.xpToNextLevel) {
        player.level++;
        player.xp -= player.xpToNextLevel; // Restar XP necesario para el próximo nivel
        player.xpToNextLevel = Math.floor(player.xpToNextLevel * 1.2); // Aumentar la XP necesaria para el siguiente nivel
        
        player.maxHealth += 20; // Aumentar la salud máxima
        player.health = player.maxHealth; // Restablecer la salud
        player.damage += 5; // Aumentar el daño
        player.speed += 0.5; // Aumentar la velocidad
        
        updateWeaponDamage(); // Actualizar daño de las armas
        console.log(`¡Nivel ${player.level} alcanzado!`);
    }
}

function updateWeaponDamage() {
    for (const weaponKey in weapons) {
        const weapon = weapons[weaponKey];
        const baseDamage = getBaseDamage(weapon.name); // Obtener el daño base para cada arma
        weapon.damage = baseDamage + player.level; // Actualizar daño basado en el nivel del jugador
    }
}

function getBaseDamage(weaponName) {
    // Define el daño base para cada arma según su nombre
    const baseDamageMap = {
        'Daga': 30,
        'Espada': 75,
        'Lanza': 50,
        'Arco': 20,
        'Ballesta': 15,
    };
    return baseDamageMap[weaponName] || 0; // Devuelve 0 si el arma no está en el mapa
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

    // Dibujar la barra de fondo (roja)
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, width, height);

    // Dibujar la barra de salud restante (verde)
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, width * healthPercentage, height);

    // Dibujar el borde de la barra
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);

    // Dibujar el texto de la vida actual/max
    ctx.fillStyle = 'white'; // Color del texto
    ctx.font = '16px Arial'; // Fuente del texto
    ctx.textAlign = 'center'; // Centrar el texto horizontalmente
    ctx.textBaseline = 'middle'; // Centrar el texto verticalmente
    const text = `${Math.ceil(health)}/${maxHealth}`; // Texto a mostrar
    ctx.fillText(text, x + width / 2, y + height / 2);
}

// === CONFIGURACIÓN DE ENEMIGOS ===



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
    1: { name: 'Daga', damage: 30+player.level, range: 200, speed: 20, color: 'gray', isMelee: false },
    2: { name: 'Espada', damage:75+player.level, range: 50, speed: 10, color: 'blue', isMelee: true },
    3: { name: 'Lanza', damage: 50+player.level, range: 100, speed: 8, color: 'green', isMelee: true },
    4: { name: 'Arco', damage: 20+player.level, range: 600, speed: 14, color: 'orange', isMelee: false },
    5: { name: 'Ballesta', damage:15+player.level, range: 1000, speed: 60, color: 'red', isMelee: false },
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
    if (weaponEquipped) {
        // Si el arma está equipada, se puede atacar
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
            });
            if (weapon.isMelee) {
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
    } else {
        // Si el arma no está equipada, mover hacia el punto de clic
        const targetX = event.offsetX;
        const targetY = event.offsetY;

        // Calcular el vector de movimiento
        const dx = targetX - player.x;
        const dy = targetY - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Normalizar el vector para mover al jugador
        player.dx = (dx / distance) * player.speed;
        player.dy = (dy / distance) * player.speed;
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



let weaponEquipped = true; // Empezamos con el arma equipada por defecto

// Evento para el botón de equipar/desequipar arma
document.getElementById('equipButton').addEventListener('click', () => {
    weaponEquipped = !weaponEquipped; // Cambiar el estado del arma

    // Cambiar el texto del botón según el estado
    if (weaponEquipped) {
        document.getElementById('equipButton').textContent = 'Desequipar Arma';
    } else {
        document.getElementById('equipButton').textContent = 'Equipar Arma';
    }
});



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
    drawInventory(); // Dibujar inventario
    drawPlayerLevel(); // Dibujar nivel del jugador
    guardarDatos() 
    if (gameRunning) requestAnimationFrame(gameLoop);
}

// Define la cantidad de vida que el jugador recupera por segundo
const healthRecoveryPerSecond = player.level;

// Función para recuperar vida
function recoverHealth() {
    if (player.health < player.maxHealth) {
        player.health = Math.min(player.health + healthRecoveryPerSecond, player.maxHealth);
    }
}

// Iniciar la recuperación de vida cada segundo
function startHealthRecovery() {
    setInterval(recoverHealth, 1000); // Llama a recoverHealth cada 1000 ms (1 segundo)
}

// === EVENTOS Y CONTROLES ===
startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    gameRunning = true;
    spawnEnemies();
    gameLoop();
    startHealthRecovery(); // Inicia la recuperación de vida
    verificarDatos()
});

restartButton.addEventListener('click', () => location.reload());
backToMenuButton.addEventListener('click', () => {
    gameRunning = false;
    menu.style.display = 'block';
    gameOver.style.display = 'none';
});







