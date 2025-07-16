class Particle {
    constructor(x, y, color, size, speedX, speedY, life) {
        Object.assign(this, { x, y, color, size, speedX, speedY, life });
        this.maxLife = life;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life / this.maxLife;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}


class Sprite {
    constructor(imageSrc, frameWidth, frameHeight, frames, frameRate = 10) {
        this.image = new Image();
        this.image.src = imageSrc;

        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frames = frames;
        this.frameRate = frameRate;

        this.currentFrame = 0;
        this.counter = 0;
    }

    update() {
        if (++this.counter >= this.frameRate) {
            this.currentFrame = (this.currentFrame + 1) % this.frames;
            this.counter = 0;
        }
    }

    draw(ctx, x, y) {
        if (!this.image.complete) return;

        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            x, y,
            this.frameWidth, this.frameHeight
        );
    }

    reset() {
        this.currentFrame = 0;
        this.counter = 0;
    }
}


class Proyectil {
    constructor(x, y, velX, velY, daño, dueño) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.daño = daño;
        this.dueño = dueño;
        this.radio = 8;
        this.active = true;

        if (this.dueño === "Mago de Fuego") {
            this.sprite = new Sprite("Fire Wizard/Charge.png", 64, 64, 12, 8);
        } else if (this.dueño === "Mago Eléctrico") {
            this.sprite = new Sprite("Lightning Mage/Charge.png", 64, 64, 10, 8);
        } else {
            this.sprite = new Sprite("Samurai_Archer/Arrow.png", 64, 64, 1, 8);
        }
    }

    update() {
        if (!this.active) return;

        this.x += this.velX;
        this.y += this.velY;

        // Verificar colisión con enemigos
        enemigos.forEach(enemigo => {
            if (!this.active) return;
            const dx = enemigo.x - this.x;
            const dy = enemigo.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist < this.radio + enemigo.idle.frameWidth / 2) {
                enemigo.recibirDanio(this.daño);
                this.active = false;

                for (let i = 0; i < 5; i++) {
                    particles.push(new Particle(
                        this.x, this.y,
                        "orange",
                        2 + Math.random() * 2,
                        (Math.random() - 0.5) * 2,
                        (Math.random() - 0.5) * 2,
                        20 + Math.random() * 10
                    ));
                }
            }
        });

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.active = false;
        }

        this.sprite.update();
    }

    draw(ctx) {
        if (!this.active) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        const angle = Math.atan2(this.velY, this.velX);
        ctx.rotate(angle);
        this.sprite.draw(ctx, -this.sprite.frameWidth / 2, -this.sprite.frameHeight / 2);
        ctx.restore();
    }
}


class Personaje {
    constructor(
        nombre, idleSrc, walkSrc, runSrc, attack1Src, attack2Src,
        frameWidth, frameHeight, idleFrames, walkFrames, runFrames,
        attack1Frames, attack2Frames, peso, regenRate, hpMax, damage,
        ataqueDistancia = false, rangoAtaqueDistancia = 0, dañoDistancia = 0, velocidadProyectil = 0,
        dinero = 0  // <--- aquí
    ) {
        this.nombre = nombre;
        this.idle = new Sprite(idleSrc, frameWidth, frameHeight, idleFrames, 10);
        this.walk = new Sprite(walkSrc, frameWidth, frameHeight, walkFrames, 5);
        this.run = new Sprite(runSrc, frameWidth, frameHeight, runFrames, 3);
        this.attack1 = new Sprite(attack1Src, frameWidth, frameHeight, attack1Frames, 4);
        this.attack2 = new Sprite(attack2Src, frameWidth, frameHeight, attack2Frames, 4);

        // Posición inicial con margen
        const margen = 50;
        this.x = Math.min(canvas.width - margen, Math.max(margen, canvas.width / 4));
        this.y = Math.min(canvas.height - margen, Math.max(margen, canvas.height / 4));

        this.targetX = this.x;
        this.targetY = this.y;

        this.speed = 3;

        this.flip = false;  // Inicialmente no volteado

        this.peso = peso;
        this.regenRate = regenRate;
        this.umbralFlip = 5;

        this.attacking = false;
        this.attackTimer = 0;
        this.hasDealtDamage = false;

        this.objetivo = null;
        this.rangoAtaque = 50;

        this.hpMax = hpMax;
        this.hp = this.hpMax;

        this.exp = 0;
        this.nivel = 1;
        this.damage = damage;

        this.regenCounter = 0;
        this.regenCooldown = 60;

        // Nuevas propiedades para ataque a distancia
        this.ataqueDistancia = ataqueDistancia;
        this.rangoAtaqueDistancia = rangoAtaqueDistancia;
        this.dañoDistancia = dañoDistancia;
        this.velocidadProyectil = velocidadProyectil;
        this.currentAnimation = "idle";

        this.dinero = dinero;

        this.baseStats = {
            hpMax: this.hpMax,
            damage: this.damage,
            regenRate: this.regenRate,
            speed: this.speed,
            defense: this.defense || 0,
            critChance: this.critChance || 0
        };

        this.cargarDatos();
    }

    resetStats() {
        this.hpMax = this.baseStats.hpMax;
        this.damage = this.baseStats.damage;
        this.regenRate = this.baseStats.regenRate;
        this.speed = this.baseStats.speed;
        this.defense = this.baseStats.defense;
        this.critChance = this.baseStats.critChance;
    }

    atacarCuerpoACuerpo() {
        if (!this.attacking) {
            this.attacking = true;
            this.attackTimer = 30;
            this.currentAnimation = "attack1";
            if (this.objetivo) {
                this.objetivo.recibirDanio(this.damage);
            }

            // Fija la posición tras atacar
            this.targetX = this.x;
            this.targetY = this.y;
        }
    }

    atacarDistancia(targetX, targetY) {
        if (!this.attacking) {
            // 🛠️ Asegura el flip al inicio del ataque a distancia
            const dx = targetX - this.x;
            this.flip = dx < 0;

            this.attacking = true;
            this.attackTimer = this.attack2.frames * this.attack2.frameRate;
            this.currentAnimation = "attack2";
            this.hasShotProjectile = false; // Reiniciar el disparo aquí
            this.targetX = this.x;
            this.targetY = this.y;
        }
    }



    update() {
        if (this.attacking) {
            const prevAttackTimer = this.attackTimer;
            this.attackTimer = Math.max(0, this.attackTimer - 1);

            const totalAttackTime = this.attack2.frames * this.attack2.frameRate;
            const triggerFrame = Math.floor(totalAttackTime / 2);

            if (this.currentAnimation === "attack2") {
                if (!this.hasShotProjectile && prevAttackTimer > triggerFrame && this.attackTimer <= triggerFrame) {
                    if (this.objetivo) {
                        const dx = this.objetivo.x - this.x;
                        const dy = this.objetivo.y - this.y;
                        const dist = Math.hypot(dx, dy);
                        if (dist > 0) {
                            const dirX = dx / dist;
                            const dirY = dy / dist;

                            this.flip = dx < 0; // 🔥 Añadido: voltear sprite hacia objetivo

                            proyectiles.push(new Proyectil(
                                this.x,
                                this.y,
                                dirX * this.velocidadProyectil,
                                dirY * this.velocidadProyectil,
                                this.dañoDistancia,
                                this.nombre
                            ));

                            this.hasShotProjectile = true;
                        }
                    }
                }
            }


            if (this.attackTimer === 0) {
                this.attacking = false;
                this.currentAnimation = "idle";
                this.hasShotProjectile = false; // Reiniciar para futuros ataques
            }

            // Actualizar animación de ataque
            switch (this.currentAnimation) {
                case "attack1":
                    this.attack1.update();
                    break;
                case "attack2":
                    this.attack2.update();
                    break;
                default:
                    this.idle.update();
                    break;
            }
            return;
        }

        if (this.objetivo) {  // <-- Aquí también verifica antes de usar .x y .y
            const dx = this.objetivo.x - this.x;
            const dy = this.objetivo.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (this.ataqueDistancia && dist <= this.rangoAtaqueDistancia) {
                if (!this.attacking) {
                    this.atacarDistancia(this.objetivo.x, this.objetivo.y);
                }
            } else if (!this.ataqueDistancia && dist <= this.rangoAtaque) {
                if (!this.attacking) {
                    this.atacarCuerpoACuerpo();
                }
            } else {
                this.speed = Math.min(6, Math.max(2, 6 - this.peso * 0.06));
                this.x += (dx / dist) * this.speed;
                this.y += (dy / dist) * this.speed;
                this.currentAnimation = this.speed > 4.5 ? "run" : "walk";
                this.flip = dx < 0;
                switch (this.currentAnimation) {
                    case "walk":
                        this.walk.update();
                        break;
                    case "run":
                        this.run.update();
                        break;
                }
            }
        } else {
            // movimiento libre
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 3) {
                this.speed = Math.min(6, Math.max(2, 6 - this.peso * 0.06));
                this.x += (dx / dist) * this.speed;
                this.y += (dy / dist) * this.speed;
                this.currentAnimation = this.speed > 4.5 ? "run" : "walk";
                this.flip = dx < 0;
                switch (this.currentAnimation) {
                    case "walk":
                        this.walk.update();
                        break;
                    case "run":
                        this.run.update();
                        break;
                }
            } else {
                this.currentAnimation = "idle";
                this.idle.update();
            }
        }

        // Regeneración de vida si no ataca
        if (!this.attacking) {
            this.regenCounter++;
            if (this.regenCounter >= this.regenCooldown) {
                this.regenCounter = 0;
                if (this.hp < this.hpMax) {
                    this.hp = Math.min(this.hp + this.regenRate, this.hpMax);
                    this.guardarDatos();

                    for (let i = 0; i < 3; i++) {
                        particles.push(new Particle(
                            this.x + (Math.random() - 0.5) * 10,
                            this.y + this.idle.frameHeight * 0.2,
                            "limegreen",
                            1 + Math.random(),
                            (Math.random() - 0.5) * 0.5,
                            -Math.random() * 0.5 - 0.2,
                            30
                        ));
                    }
                }
            }
        }
    }

    setObjetivo(enemigo) {
        this.objetivo = enemigo;
    }

    draw(ctx) {
        // 🗝️ Primero dibuja el sprite con flip
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.flip) ctx.scale(-1, 1);

        switch (this.currentAnimation) {
            case "idle": this.idle.draw(ctx, -this.idle.frameWidth / 2, -this.idle.frameHeight / 2); break;
            case "walk": this.walk.draw(ctx, -this.walk.frameWidth / 2, -this.walk.frameHeight / 2); break;
            case "run": this.run.draw(ctx, -this.run.frameWidth / 2, -this.run.frameHeight / 2); break;
            case "attack1": this.attack1.draw(ctx, -this.attack1.frameWidth / 2, -this.attack1.frameHeight / 2); break;
            case "attack2": this.attack2.draw(ctx, -this.attack2.frameWidth / 2, -this.attack2.frameHeight / 2); break;
        }
        ctx.restore(); // 🔥 Restablece aquí antes de dibujar la barra de vida

        // 🗝️ Luego dibuja la barra de vida sin flip
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "red";
        ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, this.idle.frameWidth, 5);
        ctx.fillStyle = "green";
        ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, (this.hp / this.hpMax) * this.idle.frameWidth, 5);
        ctx.restore();
    }


    moveTo(x, y) {
        this.targetX = x;
        this.targetY = y - this.idle.frameHeight / 2;
    }

    recibirDanio(cantidad) {
        this.hp -= cantidad;
        // Partículas de sangre
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 1.5 + 0.5;
            particles.push(new Particle(
                this.x + (Math.random() - 0.5) * 10,
                this.y + this.idle.frameHeight * 0.1,
                "red",
                1 + Math.random(),
                Math.cos(angle) * speed,
                Math.sin(angle) * speed,
                20 + Math.random() * 10
            ));
        }
        if (this.hp <= 0) {
            this.hp = 0;
            this.morir();
        }
    }

    morir() {
        console.log(`${this.nombre} ha muerto`);
        juegoIniciado = false; // 🔴 Detiene el loop

        // Pierde monedas (ejemplo: 20% del total)
        const monedasPerdidas = Math.floor(this.dinero * 0.2);
        this.dinero = Math.max(0, this.dinero - monedasPerdidas);
        this.guardarDatos();

        // Mostrar mensaje en pantalla
        const mensajeGameOver = document.createElement("div");
        mensajeGameOver.id = "gameOverMensaje";
        Object.assign(mensajeGameOver.style, {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            fontSize: "24px",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            zIndex: 9999
        });
        mensajeGameOver.innerHTML = `
        <p>💀 Game Over 💀</p>
        <p>Perdiste ${monedasPerdidas} monedas</p>
        <button id="volverMenu">Volver al menú</button>
    `;
        document.body.appendChild(mensajeGameOver);

        // Botón volver
        document.getElementById("volverMenu").addEventListener("click", () => {
            location.reload(); // recarga la página para ir al menú principal (o cambia a tu función de menú)
        });
    }



    subirNivel() {
        this.nivel += 1;

        const factor = 0.10; // crecimiento 10% por nivel

        this.hpMax = Math.floor(this.hpMax * (1 + factor));
        this.damage = Math.floor(this.damage * (1 + factor));
        this.regenRate = Math.floor(this.regenRate * (1 + factor));

        if (this.ataqueDistancia) {
            this.rangoAtaqueDistancia = Math.floor(this.rangoAtaqueDistancia * (1 + factor));
            this.dañoDistancia = Math.floor(this.dañoDistancia * (1 + factor));
        }

        this.hp = this.hpMax; // restaurar vida

        console.log(`${this.nombre} subió a nivel ${this.nivel}!`);
    }



    ganarExp(cantidad) {
        this.exp += cantidad;
        const expNecesaria = this.nivel * 100;
        while (this.exp >= expNecesaria) {
            this.exp -= expNecesaria;
            this.subirNivel();

            // Texto flotante para nivel
            const mensaje = document.createElement("div");
            Object.assign(mensaje.style, {
                position: "absolute",
                left: `${canvas.offsetLeft + this.x}px`,
                top: `${canvas.offsetTop + this.y - 50}px`,
                color: "gold",
                fontWeight: "bold",
                pointerEvents: "none",
                userSelect: "none",
            });
            mensaje.textContent = `¡Nivel ${this.nivel}!`;
            document.body.appendChild(mensaje);

            setTimeout(() => document.body.removeChild(mensaje), 1000);
        }
        this.guardarDatos();
    }


    guardarDatos() {
        const datos = {
            nivel: this.nivel,
            exp: this.exp,
            hpMax: this.hpMax,
            hp: this.hp,
            damage: this.damage,
            peso: this.peso,
            regenRate: this.regenRate,
            dinero: this.dinero

        };
        localStorage.setItem(`personajeDatos_${this.nombre}`, JSON.stringify(datos));
    }

    cargarDatos() {
        const datosGuardados = localStorage.getItem(`personajeDatos_${this.nombre}`);
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            Object.assign(this, {
                nivel: datos.nivel ?? this.nivel,
                exp: datos.exp ?? this.exp,
                hpMax: datos.hpMax ?? this.hpMax,
                hp: datos.hp ?? this.hpMax,
                damage: datos.damage ?? this.damage,
                peso: datos.peso ?? this.peso,
                regenRate: datos.regenRate ?? this.regenRate,
                dinero: datos.dinero ?? this.dinero

            });
        }
    }
}


class Enemigo {
    constructor(nombre, nivel, idleSrc, walkSrc, attack1Src, deadSrc, frameWidth, frameHeight, idleFrames, walkFrames, attack1Frames, deadFrames, x, y, esBoss = false, colorBoss = "black") {

        this.nombre = nombre;
        this.nivel = nivel; // 🆕 Nivel base del enemigo

        // Sprites
        this.idle = new Sprite(idleSrc, frameWidth, frameHeight, idleFrames, 10);
        this.walk = new Sprite(walkSrc, frameWidth, frameHeight, walkFrames, 5);
        this.attack1 = new Sprite(attack1Src, frameWidth, frameHeight, attack1Frames, 4);
        this.dead = new Sprite(deadSrc, frameWidth, frameHeight, deadFrames, 5);

        // Posición y movimiento
        this.x = x;
        this.y = y;
        this.speed = 2 + (this.nivel * 0.1); // 🆕 Incremento leve por nivel

        // Animación y estado
        this.currentAnimation = "idle";
        this.flip = false;
        this.attacking = false;
        this.attackTimer = 0;
        this.hasDealtDamage = false;

        // Vida y daño escalados por nivel
        this.hpMax = 100 + (this.nivel * 20);
        this.hp = this.hpMax;
        this.damage = 15 + (this.nivel * 3);

        // Muerte y limpieza
        this.isDead = false;
        this.deadTimer = 0;
        this.isRemoved = false;

        this.esBoss = esBoss;           // 🔥 Nuevo: indica si es un boss
        this.colorBoss = colorBoss;     // 🔥 Nuevo: color representativo en minimapa


        if (this.esBoss) {
            this.hpMax *= 5;
            this.hp = this.hpMax;
            this.damage *= 3;
        }


    }

    update(jugadorX, jugadorY) {
        if (this.isDead) {
            this.currentAnimation = "dead";
            this.deadTimer++;
            if (this.deadTimer >= this.dead.frames * this.dead.frameRate) {
                this.isRemoved = true;
                if (personajeActual?.objetivo === this) {
                    personajeActual.objetivo = null;
                    personajeActual.attacking = false;
                    personajeActual.currentAnimation = "idle";
                }
            }
            this.dead.update();
            return;
        }

        if (this.attacking) {
            this.attackTimer--;

            const golpeFrame = 0;
            if (!this.hasDealtDamage && this.attackTimer === golpeFrame) {
                personajeActual?.recibirDanio(this.damage);
                this.hasDealtDamage = true;
            }

            if (this.attackTimer <= 0) {
                this.attacking = false;
                this.currentAnimation = "idle";
                this.hasDealtDamage = false;
            }

            this.attack1.update();
            return;
        }

        const dx = jugadorX - this.x;
        const dy = jugadorY - this.y;
        const dist = Math.hypot(dx, dy);
        const rangoDeteccion = 150;
        const rangoAtaque = 50;

        if (dist < rangoAtaque) {
            this.currentAnimation = "attack1";
            this.attack1.reset();
            this.attacking = true;
            this.attackTimer = this.attack1.frames * this.attack1.frameRate;
        } else if (dist < rangoDeteccion) {
            this.currentAnimation = "walk";
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
            this.flip = dx < 0;
        } else {
            this.currentAnimation = "idle";
        }

        switch (this.currentAnimation) {
            case "idle":
                this.idle.update();
                break;
            case "walk":
                this.walk.update();
                break;
        }
    }

    draw(ctx) {
        if (this.isRemoved) return;

        ctx.save();
        ctx.translate(this.x, this.y);

        // ✨ Si es boss, dibuja un aura contorno alrededor del sprite
        if (this.esBoss) {
            const sprite = this[this.currentAnimation];
            const w = sprite.frameWidth;
            const h = sprite.frameHeight;

            // Configurar shadow glow
            ctx.shadowColor = this.colorBoss;
            ctx.shadowBlur = 20; // Ajusta intensidad de glow
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            // Dibuja un rectángulo invisible para aplicar el shadowBlur alrededor del sprite
            ctx.fillStyle = "rgba(0,0,0,0)"; // Invisible
            ctx.fillRect(-w / 2, -h / 2, w, h);

        }

        // Dibuja el sprite con flip si corresponde
        if (this.flip) ctx.scale(-1, 1);

        switch (this.currentAnimation) {
            case "idle":
                this.idle.draw(ctx, -this.idle.frameWidth / 2, -this.idle.frameHeight / 2);
                break;
            case "walk":
                this.walk.draw(ctx, -this.walk.frameWidth / 2, -this.walk.frameHeight / 2);
                break;
            case "attack1":
                this.attack1.draw(ctx, -this.attack1.frameWidth / 2, -this.attack1.frameHeight / 2);
                break;
            case "dead":
                this.dead.draw(ctx, -this.dead.frameWidth / 2, -this.dead.frameHeight / 2);
                break;
        }

        ctx.restore(); // Restablece transformaciones para dibujar el texto sin flip

        if (!this.isDead) {
            ctx.save();
            ctx.translate(this.x, this.y);
            // Dibuja nombre y barra de vida sin flip
            ctx.fillStyle = "white";
            ctx.font = "bold 12px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`${this.nombre} (Lv ${this.nivel})`, 0, -this.idle.frameHeight / 2 - 20);

            // Barra de vida
            ctx.fillStyle = "red";
            ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, this.idle.frameWidth, 5);
            ctx.fillStyle = "green";
            ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, (this.hp / this.hpMax) * this.idle.frameWidth, 5);
            ctx.restore();
        }
    }



    recibirDanio(cantidad) {
        if (this.isDead) return;

        this.hp -= cantidad;
        if (this.hp <= 0) {
            this.hp = 0;
            this.morir();
        }
    }

    morir() {
        this.isDead = true;
        this.deadTimer = 0;
        this.dead.reset();

        // Partículas de muerte
        for (let i = 0; i < 10; i++) {
            particles.push(new Particle(
                this.x + (Math.random() - 0.5) * 20,
                this.y + (Math.random() - 0.5) * 20,
                "gray",
                2 + Math.random() * 2,
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2,
                30 + Math.random() * 20
            ));
        }

        // 🪙 Drop de monedas de plata
        const dropBase = Math.floor(Math.random() * 5) + 1; // 1 a 5 monedas
        const multiplicador = 1 + this.nivel * 0.2;
        let monedasGanadas = Math.floor(dropBase * multiplicador);

        // 🔥 Si es boss, multiplica las monedas y experiencia
        let expGanada = 50 + this.nivel * 5;
        if (this.esBoss) {
            monedasGanadas *= 3; // por ejemplo, triple monedas
            expGanada *= 3;      // triple experiencia
        }

        // Aumentar dinero y experiencia al personaje actual
        if (personajeActual) {
            personajeActual.ganarExp(expGanada);

            // Suma dinero al personaje
            personajeActual.dinero = (personajeActual.dinero || 0) + monedasGanadas;

            // 🪙 Texto flotante de monedas
            const mensajeMonedas = document.createElement("div");
            Object.assign(mensajeMonedas.style, {
                position: "absolute",
                left: `${canvas.offsetLeft + this.x - ultimaCamX}px`,
                top: `${canvas.offsetTop + this.y - ultimaCamY - 15}px`,
                color: "silver",
                fontWeight: "bold",
                pointerEvents: "none",
                userSelect: "none",
            });

            mensajeMonedas.textContent = `+${monedasGanadas} plata`;
            document.body.appendChild(mensajeMonedas);

            setTimeout(() => document.body.removeChild(mensajeMonedas), 1000);
        }
    }



}
