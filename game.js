// === FUNCIONES DE GAME OVER ===

// Mostrar pantalla de Game Over
function gameOverScreen() {
    gameRunning = false;
    gameOver.style.display = 'block';
    menu.style.display = 'none';
}

// Manejar el movimiento del jugador mediante las teclas presionadas
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft': player.dx = -player.speed; break;
        case 'ArrowRight': player.dx = player.speed; break;
        case 'ArrowUp': player.dy = -player.speed; break;
        case 'ArrowDown': player.dy = player.speed; break;
    }
});

document.addEventListener('keyup', (event) => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) player.dx = 0;
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) player.dy = 0;
});

// Disparar proyectiles
canvas.addEventListener('click', (event) => {
    const angle = Math.atan2(event.offsetY - (player.y + player.height / 2), event.offsetX - (player.x + player.width / 2));
    shootProjectile(angle);
});

// Función para disparar un proyectil
function shootProjectile(angle) {
    const projectile = {
        x: player.x + player.width / 2,
        y: player.y + player.height / 2,
        width: 10,
        height: 5,
        speed: 10,
        damage: 20,
        angle,
    };
    projectiles.push(projectile);
}

// Actualizar enemigos
function updateEnemies() {
    enemies.forEach((enemy, index) => {
        moveEnemyTowardPlayer(enemy);
        if (enemy.health <= 0) {
            enemies.splice(index, 1);
        }
    });
}

// Mover enemigo hacia el jugador
function moveEnemyTowardPlayer(enemy) {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > enemy.attackRange) {
        enemy.x += (dx / distance) * enemy.speed;
        enemy.y += (dy / distance) * enemy.speed;
    } else {
        attackPlayer(enemy); // Si está dentro del rango de ataque, atacar
    }
}

// Cambiar de arma
function switchWeapon() {
    const weaponsList = Object.keys(weapons);
    const currentIndex = weaponsList.indexOf(player.currentWeapon.name);
    const nextIndex = (currentIndex + 1) % weaponsList.length;
    player.currentWeapon = weapons[weaponsList[nextIndex]];
    console.log(`Cambiaste a: ${player.currentWeapon.name}`);
}

// Controlar el cambio de arma con la tecla (por ejemplo, tecla "W")
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') switchWeapon();
});

// Dibujar el arma actual
function drawWeapon() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Arma: ${player.currentWeapon.name}`, 10, 40);
}

// Función para atacar
function attack() {
    const currentTime = Date.now();

    if (currentTime - player.lastAttackTime < player.currentWeapon.attackSpeed * 1000) return;

    if (player.currentWeapon.type === 'melee') {
        attackMelee(currentTime);
    } else if (player.currentWeapon.type === 'ranged') {
        attackRanged(currentTime);
    }

    player.lastAttackTime = currentTime;
}

// Realizar ataque cuerpo a cuerpo
function attackMelee(currentTime) {
    enemies.forEach(enemy => {
        const distance = getDistance(player, enemy);
        if (distance < player.currentWeapon.range) {
            enemy.health -= player.currentWeapon.damage;
            player.damageIndicators.push(createDamageIndicator(player, currentTime));
        }
    });
}

// Realizar ataque a distancia (disparo)
function attackRanged(currentTime) {
    const angle = Math.atan2(event.offsetY - (player.y + player.height / 2), event.offsetX - (player.x + player.width / 2));
    shootProjectile(angle);
}

// Crear indicador de daño
function createDamageIndicator(target, currentTime) {
    return {
        x: target.x + target.width / 2,
        y: target.y,
        text: `-${player.currentWeapon.damage}`,
        time: currentTime,
    };
}

// Calcular la distancia entre dos puntos
function getDistance(obj1, obj2) {
    const dx = obj1.x - obj2.x;
    const dy = obj1.y - obj2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Limpiar el canvas y redibujar el fondo
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

// === BUCLE PRINCIPAL DEL JUEGO ===
// === INICIO DEL JUEGO ===
backgroundImg.onload = () => {
    gameRunning = true;
    gameLoop();  // Inicia el bucle del juego una vez que la imagen está lista
};

function checkLevelCompletion() {
    if (enemies.length === 0) {
        // Si no hay enemigos, iniciar el siguiente nivel
        startNextLevel();
    }
}


function startNextLevel() {
    // Incrementa el nivel
    currentLevel++;
    
    // Incrementa el número máximo de enemigos por nivel
    maxEnemiesPerLevel += 2;  // Por ejemplo, aumentar 2 enemigos por nivel
    
    // Reiniciar el contador de enemigos
    currentEnemyCount = 0;
    
    // Generar los enemigos para el siguiente nivel
    for (let i = 0; i < maxEnemiesPerLevel; i++) {
        spawnEnemy();
    }
    
    // Aquí puedes hacer otras modificaciones, como aumentar la velocidad de los enemigos
    console.log(`¡Nivel ${currentLevel} iniciado!`);
}

function showLevelUpMessage() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'yellow';
    ctx.fillText(`¡Nivel ${currentLevel} completado!`, canvas.width / 2 - 150, canvas.height / 2);
}


// === BUCLE PRINCIPAL DEL JUEGO ===
function gameLoop() {
    clearCanvas();
    updatePlayer();
    drawPlayer();
    drawPlayerHealthBar();
    drawWeapon(); // Mostrar el arma actual
    updateEnemies();
    drawEnemies();
    updateProjectiles();
    updateEnemyProjectiles();
    drawProjectiles();
    drawEnemyProjectiles();
    drawDamageIndicators();
    checkProjectileCollision();

    // Verificar muerte de enemigos y actualizar el contador
    checkEnemyDeath();

    // Verificar si el nivel está completo y pasar al siguiente nivel
    checkLevelCompletion();

    // Generar nuevos enemigos si es necesario
    if (Math.random() < 0.02) {
        spawnEnemy();
    }

    // Verificar si la salud del jugador llegó a 0
    if (player.health <= 0) {
        gameOverScreen();
        return;
    }

    requestAnimationFrame(gameLoop);
}


// === INICIO DEL JUEGO ===
startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    gameOver.style.display = 'none';
    gameRunning = true;
    
    // Comienza el primer nivel
    startNextLevel();
    
    gameLoop();
});


// Reiniciar el juego
restartButton.addEventListener('click', () => {
    location.reload();
});

// Volver al menú principal
backToMenuButton.addEventListener('click', () => {
    gameOver.style.display = 'none';
    menu.style.display = 'block';
});
