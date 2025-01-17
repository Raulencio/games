
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


function drawEnemies() {
    enemies.forEach((enemy) => {
        ctx.globalAlpha = enemy.opacity; // Ajustar opacidad del enemigo
        ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        drawHealthBar(ctx, enemy.x, enemy.y - 10, 50, 5, enemy.health, enemy.maxHealth); // Barra de vida
        ctx.globalAlpha = 1; // Restaurar opacidad
    });
}



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