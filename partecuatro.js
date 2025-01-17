
// === FUNCIONES DE DIBUJO ===
function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    drawHealthBar(ctx, 10, 10, 200, 20, player.health, player.maxHealth); // Barra de vida del jugador
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
                    const goldReward = Math.floor(Math.random() * 10) + 5; // Oro aleatorio entre 5 y 15
                    player.inventory.gold += goldReward;
                    
                    // Agregar experiencia al jugador
                    const xpReward = Math.floor(Math.random() * 20) + 10; // Experiencia aleatoria entre 10 y 30
                    player.xp += xpReward;
                    console.log(`Enemigo derrotado. Ganaste ${goldReward} de oro y ${xpReward} de experiencia.`);
                
                    // Verificar si el jugador sube de nivel
                    checkLevelUp();
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
