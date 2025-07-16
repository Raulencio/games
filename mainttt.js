// ✅ Edición y mejoras aplicadas a la primera mitad

function esconder(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
}
function mostrar(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
}

let juegoIniciado = false;


// 🗂️ Referencias principales
const menuInicio = document.getElementById("menuInicio");
const menuSeleccion = document.getElementById("menuSeleccion");
const listaPersonajes = document.getElementById("listaPersonajes");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const btnJugar = document.getElementById("btnJugar");

const miniMapa = document.getElementById('miniMapa');
const ctxMini = miniMapa.getContext('2d');
function dibujarMiniMapa() {
    const mapScale = miniMapa.width / mapa.width;

    ctxMini.clearRect(0, 0, miniMapa.width, miniMapa.height);

    // Fondo semi-transparente
    ctxMini.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctxMini.fillRect(0, 0, miniMapa.width, miniMapa.height);

    // Jugador con color semitransparente
    const jugadorXMini = personajeActual.x * mapScale;
    const jugadorYMini = personajeActual.y * mapScale;
    const radioJugador = 6;

    ctxMini.fillStyle = 'rgba(50, 205, 50, 0.7)'; // verde lima semi
    ctxMini.beginPath();
    ctxMini.arc(jugadorXMini, jugadorYMini, radioJugador, 0, Math.PI * 2);
    ctxMini.fill();

    // Enemigos con color semi
    enemigos.forEach(enemigo => {
        const enemigoXMini = enemigo.x * mapScale;
        const enemigoYMini = enemigo.y * mapScale;
        const radioEnemigo = 5;

        ctxMini.fillStyle = 'rgba(255, 0, 0, 0.5)'; // rojo semi
        ctxMini.beginPath();
        ctxMini.arc(enemigoXMini, enemigoYMini, radioEnemigo, 0, Math.PI * 2);
        ctxMini.fill();
    });
}


let personajeActual = null;
let enemigos = [];
let ultimaCamX = 0, ultimaCamY = 0;

function ajustarCanvasInicio() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
const altoMinimo = Math.max(400, window.innerHeight);
function ajustarCanvasSeleccion() {
    const anchoPorPersonaje = 200;
    const margenHorizontal = 20;
    const anchoTotal = personajesData.length * anchoPorPersonaje + margenHorizontal * 2;
    const altoMinimo = window.innerHeight; // cambia de 400 a window.innerHeight

    canvas.width = Math.max(window.innerWidth, anchoTotal);
    canvas.height = altoMinimo;
}


function ajustarCanvasJuego() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const mapa = { width: 2800, height: 2600 };

let particles = []; // 🌟 Array global de partículas

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

const personajesData = [
    {
        nombre: "Samurai",
        idleSrc: "Samurai/Idle.png",
        walkSrc: "Samurai/Walk.png",
        runSrc: "Samurai/Run.png",
        attack1Src: "Samurai/Attack_1.png",
        attack2Src: "Samurai/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 5, walkFrames: 9, runFrames: 8,
        attack1Frames: 4, attack2Frames: 5,
        peso: 20,
        hpMax: 120,
        damage: 30,
        regenRate: 4
    },
    {
        nombre: "Commandante",
        idleSrc: "Samurai_Commander/Idle.png",
        walkSrc: "Samurai_Commander/Walk.png",
        runSrc: "Samurai_Commander/Run.png",
        attack1Src: "Samurai_Commander/Attack_1.png",
        attack2Src: "Samurai_Commander/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 5, walkFrames: 9, runFrames: 8,
        attack1Frames: 4, attack2Frames: 5,
        peso: 30,
        hpMax: 150,
        damage: 25,
        regenRate: 2
    },


    {
        nombre: "Kunoichi", previewSrc: "Kunoichi/Idle.png",
        idleSrc: "Kunoichi/Idle.png",
        walkSrc: "Kunoichi/Walk.png",
        runSrc: "Kunoichi/Run.png",
        attack1Src: "Kunoichi/Attack_1.png",
        attack2Src: "Kunoichi/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 9, walkFrames: 8, runFrames: 8,
        attack1Frames: 6, attack2Frames: 8,
        peso: 20,
        hpMax: 120,
        damage: 40,
        regenRate: 3
    },
    {
        nombre: "Mago Eléctrico", previewSrc: "Lightning Mage/Idle.png",
        idleSrc: "Lightning Mage/Idle.png",
        walkSrc: "Lightning Mage/Walk.png",
        runSrc: "Lightning Mage/Run.png",
        attack1Src: "Lightning Mage/Attack_1.png",
        attack2Src: "Lightning Mage/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 7, walkFrames: 7, runFrames: 8,
        attack1Frames: 10, attack2Frames: 4,
        peso: 20,
        hpMax: 120,
        damage: 60,
        regenRate: 5
    },
    {
        nombre: "Mago de Fuego", previewSrc: "Fire Wizard/Idle.png",
        idleSrc: "Fire Wizard/Idle.png",
        walkSrc: "Fire Wizard/Walk.png",
        runSrc: "Fire Wizard/Run.png",
        attack1Src: "Fire Wizard/Attack_1.png",
        attack2Src: "Fire Wizard/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 7, walkFrames: 6, runFrames: 8,
        attack1Frames: 4, attack2Frames: 4,
        peso: 20,
        hpMax: 120,
        damage: 20,
        regenRate: 1
    },
    {
        nombre: "Mago Errante", previewSrc: "Wanderer Magican/Idle.png",
        idleSrc: "Wanderer Magican/Idle.png",
        walkSrc: "Wanderer Magican/Walk.png",
        runSrc: "Wanderer Magican/Run.png",
        attack1Src: "Wanderer Magican/Attack_1.png",
        attack2Src: "Wanderer Magican/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 8, walkFrames: 7, runFrames: 8,
        attack1Frames: 7, attack2Frames: 9,
        peso: 20,
        hpMax: 100,
        damage: 30,
        regenRate: 6
    },
    {
        nombre: "Monje Ninja",
        idleSrc: "Ninja_Monk/Idle.png",
        walkSrc: "Ninja_Monk/Walk.png",
        runSrc: "Ninja_Monk/Run.png",
        attack1Src: "Ninja_Monk/Attack_1.png",
        attack2Src: "Ninja_Monk/Attack_2.png",
        frameWidth: 96, frameHeight: 96,
        idleFrames: 7, walkFrames: 7, runFrames: 8,
        attack1Frames: 5, attack2Frames: 5,
        peso: 20,
        hpMax: 120,
        damage: 30,
        regenRate: 4
    },
];
class Sprite {
    constructor(imageSrc, frameWidth, frameHeight, frames, frameRate = 10) {
        Object.assign(this, {
            image: new Image(),
            frameWidth, frameHeight, frames, frameRate,
            currentFrame: 0, counter: 0
        });
        this.image.src = imageSrc;
    }

    draw(ctx, x, y) {
        if (!this.image.complete) return;
        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            x, y, this.frameWidth, this.frameHeight
        );
        if (++this.counter >= this.frameRate) {
            this.currentFrame = (this.currentFrame + 1) % this.frames;
            this.counter = 0;
        }
    }

    reset() {
        this.currentFrame = 0;
        this.counter = 0;
    }
}

function cargarDatosPersonajes() {
    personajesData.forEach(p => {
        const datosGuardados = localStorage.getItem(`personajeDatos_${p.nombre}`);
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            Object.assign(p, {
                nivel: datos.nivel ?? 1,
                exp: datos.exp ?? 0,
                hpMax: datos.hpMax ?? p.hpMax,
                hp: datos.hp ?? datos.hpMax ?? p.hpMax,
                damage: datos.damage ?? p.damage,
                regenRate: datos.regenRate ?? p.regenRate
            });
        } else {
            p.nivel = 1;
            p.exp = 0;
        }
    });


    personajesData.forEach((p, index) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("personaje-card");

        // Canvas preview animado
        const canvasPreview = document.createElement("canvas");
        canvasPreview.width = p.frameWidth;
        canvasPreview.height = p.frameHeight;
        canvasPreview.classList.add("personaje-preview");
        contenedor.appendChild(canvasPreview);

        const ctxPreview = canvasPreview.getContext("2d");
        const idleSprite = new Sprite(p.idleSrc, p.frameWidth, p.frameHeight, p.idleFrames, 10);

        idleSprite.image.onload = function animarIdle() {
            ctxPreview.clearRect(0, 0, canvasPreview.width, canvasPreview.height);
            idleSprite.draw(ctxPreview, 0, 0);
            requestAnimationFrame(animarIdle);
        };

        // Nombre
        const nombre = document.createElement("h3");
        nombre.textContent = p.nombre;
        contenedor.appendChild(nombre);

        // Stats
        const stats = document.createElement("p");
        stats.innerHTML = `
    <strong>Nivel:</strong> ${p.nivel}<br/>
    <strong>EXP:</strong> ${p.exp}<br/>
    <strong>HP:</strong> ${p.hp ?? p.hpMax} / ${p.hpMax}<br/>
    <strong>Daño:</strong> ${p.damage}<br/>
    <strong>Regeneración:</strong> ${p.regenRate}
`;

        contenedor.appendChild(stats);

        // Botón
        const btn = document.createElement("button");
        btn.textContent = "Seleccionar";
        btn.classList.add("btn-seleccionar");
        btn.addEventListener("click", () => seleccionarPersonaje(index));
        contenedor.appendChild(btn);

        listaPersonajes.appendChild(contenedor);
    });
}

function seleccionarPersonaje(index) {
    const p = personajesData[index];  // Definir p antes de usarlo
    esconder('menuSeleccion');
    mostrar('hud');
    mostrar('gameCanvas');
    ajustarCanvasJuego();


    juegoIniciado = true;       // <-- Aquí marcas que el juego inició
    miniMapa.style.display = "block";  // <-- Muestras el mini mapa


    // Crear personaje seleccionado
    personajeActual = new Personaje(
        p.nombre, p.idleSrc, p.walkSrc, p.runSrc,
        p.attack1Src, p.attack2Src,
        p.frameWidth, p.frameHeight,
        p.idleFrames, p.walkFrames, p.runFrames,
        p.attack1Frames, p.attack2Frames,
        p.peso, p.regenRate, p.hpMax, p.damage
    );

    canvas.addEventListener("click", e => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // convierto a coordenadas de mapa
        const worldX = clickX + ultimaCamX;
        const worldY = clickY + ultimaCamY;

        // busco enemigo bajo el clic
        let objetivo = enemigos.find(enemigo => {
            const dx = worldX - enemigo.x;
            const dy = worldY - enemigo.y;
            return Math.hypot(dx, dy) < enemigo.idle.frameWidth / 2;
        });

        if (objetivo) personajeActual.setObjetivo(objetivo);
        else {
            personajeActual.objetivo = null;
            personajeActual.moveTo(worldX, worldY);
        }
    });

    // finalmente, arranco el bucle
    requestAnimationFrame(gameLoop);
}


function canvasClickHandler(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Determinar clic sobre enemigo usando su tamaño
    let objetivo = enemigos.find(enemigo => {
        const dx = x - enemigo.x;
        const dy = y - enemigo.y;
        // Usa la mitad del ancho del sprite como radio de clic
        const radio = enemigo.idle.frameWidth / 2;
        return Math.hypot(dx, dy) < radio;
    });

    if (objetivo) {
        personajeActual.setObjetivo(objetivo);
    } else {
        personajeActual.objetivo = null;
        personajeActual.moveTo(x, y);
    }
}



function moverPersonaje(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const enemigoClickeado = enemigos.find(enemigo =>
        x >= enemigo.x - enemigo.idle.frameWidth / 2 &&
        x <= enemigo.x + enemigo.idle.frameWidth / 2 &&
        y >= enemigo.y - enemigo.idle.frameHeight / 2 &&
        y <= enemigo.y + enemigo.idle.frameHeight / 2
    );

    if (enemigoClickeado) personajeActual.setObjetivo(enemigoClickeado);
    else {
        personajeActual.moveTo(x, y);
        personajeActual.objetivo = null;
    }
}



class Personaje {
    constructor(nombre, idleSrc, walkSrc, runSrc, attack1Src, attack2Src, frameWidth, frameHeight, idleFrames, walkFrames, runFrames, attack1Frames, attack2Frames, peso, regenRate, hpMax, damage) {
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
        this.currentAnimation = "idle";
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

        this.cargarDatos();
    }

    update() {
        if (this.objetivo?.isDead) {
            this.objetivo = null;
            this.targetX = this.x;
            this.targetY = this.y;
            this.currentAnimation = "idle";
            return;
        }

        if (this.attacking) {
            this.attackTimer--;

            const golpeFrame = 0; // Daño al terminar animación
            if (!this.hasDealtDamage && this.attackTimer === golpeFrame) {
                this.objetivo?.recibirDanio(this.damage);
                this.hasDealtDamage = true;
            }

            if (this.attackTimer <= 0) {
                this.attacking = false;
                this.currentAnimation = "idle";
            }
            return;
        }

        if (this.objetivo) {
            const dx = this.objetivo.x - this.x;
            const dy = this.objetivo.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist > this.rangoAtaque) {
                this.speed = Math.min(6, Math.max(2, 6 - this.peso * 0.06));
                this.x += (dx / dist) * this.speed;
                this.y += (dy / dist) * this.speed;
                this.currentAnimation = this.speed > 4.5 ? "run" : "walk";
                this.flip = dx < 0;
            } else {
                this.atacar1();
            }
            return;
        }

        // Movimiento libre hacia target
        let dx = this.targetX - this.x;
        let dy = this.targetY - this.y;
        const dist = Math.hypot(dx, dy);
        const llegadaUmbral = 3;

        if (dist > llegadaUmbral) {
            this.speed = Math.min(6, Math.max(2, 6 - this.peso * 0.06));
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
            this.currentAnimation = this.speed > 4.5 ? "run" : "walk";
            this.flip = dx < 0;
        } else {
            this.x = this.targetX;
            this.y = this.targetY;
            this.currentAnimation = "idle";
        }

        // Regeneración de vida si no ataca
        if (!this.attacking) {
            this.regenCounter++;
            if (this.regenCounter >= this.regenCooldown) {
                this.regenCounter = 0;
                if (this.hp < this.hpMax) {
                    this.hp = Math.min(this.hp + this.regenRate, this.hpMax);
                    this.guardarDatos(); // Guarda la vida actual
                    // Partículas verdes para regeneración
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

    atacar1() {
        if (!this.attacking) {
            if (this.objetivo) {
                // Voltear hacia el objetivo antes de atacar
                this.flip = (this.objetivo.x < this.x);
            }
            this.currentAnimation = "attack1";
            this.attack1.reset();
            this.attacking = true;
            this.attackTimer = this.attack1.frames * this.attack1.frameRate;

            if (this.objetivo) this.objetivo.recibirDanio(this.damage);
        }
    }

    setObjetivo(enemigo) {
        this.objetivo = enemigo;
    }

    draw(ctx) {
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

        // Barra de vida
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
        // Opcional: reiniciar o mostrar mensaje de muerte
    }

    ganarExp(cantidad) {
        this.exp += cantidad;
        const expNecesaria = this.nivel * 100;
        if (this.exp >= expNecesaria) {
            this.exp -= expNecesaria;
            this.nivel++;
            this.hpMax += 20;
            this.hp = this.hpMax;

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
            regenRate: this.regenRate
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
                hp: datos.hp ?? p.hpMax,
                damage: datos.damage ?? this.damage,
                peso: datos.peso ?? this.peso,
                regenRate: datos.regenRate ?? this.regenRate,
            });
        }
    }
}

class Enemigo {
    constructor(nombre, idleSrc, walkSrc, attack1Src, deadSrc, frameWidth, frameHeight, idleFrames, walkFrames, attack1Frames, deadFrames, x, y) {
        this.nombre = nombre;
        this.idle = new Sprite(idleSrc, frameWidth, frameHeight, idleFrames, 10);
        this.walk = new Sprite(walkSrc, frameWidth, frameHeight, walkFrames, 5);
        this.attack1 = new Sprite(attack1Src, frameWidth, frameHeight, attack1Frames, 4);
        this.dead = new Sprite(deadSrc, frameWidth, frameHeight, deadFrames, 5);

        this.x = x;
        this.y = y;
        this.speed = 2;

        this.currentAnimation = "idle";
        this.flip = false;

        this.attacking = false;
        this.attackTimer = 0;

        this.isDead = false;
        this.deadTimer = 0;
        this.isRemoved = false;

        this.hpMax = 100;
        this.hp = this.hpMax;
        this.damage = 15;
        this.hasDealtDamage = false;
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
            return;
        }

        if (this.attacking) {
            this.attackTimer--;

            const golpeFrame = 0; // Daño al finalizar animación
            if (!this.hasDealtDamage && this.attackTimer === golpeFrame) {
                personajeActual?.recibirDanio(this.damage);
                this.hasDealtDamage = true;
            }

            if (this.attackTimer <= 0) {
                this.attacking = false;
                this.currentAnimation = "idle";
                this.hasDealtDamage = false;
            }
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
    }

    draw(ctx) {
        if (this.isRemoved) return;

        ctx.save();
        ctx.translate(this.x, this.y);
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

        if (!this.isDead) {
            ctx.fillStyle = "red";
            ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, this.idle.frameWidth, 5);
            ctx.fillStyle = "green";
            ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, (this.hp / this.hpMax) * this.idle.frameWidth, 5);
        }

        ctx.restore();
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
        if (personajeActual) personajeActual.ganarExp(30);
    }
}

function posicionAleatoriaEnMapa() {
    const x = Math.random() * mapa.width;
    const y = Math.random() * mapa.height;
    return { x, y };
}
const tiposEnemigos = [
    {
        nombre: "Esqueleto Lancero",
        idleSrc: "Skeleton_Spearman/Idle.png",
        walkSrc: "Skeleton_Spearman/Walk.png",
        attackSrc: "Skeleton_Spearman/Attack_1.png",
        deadSrc: "Skeleton_Spearman/Dead.png",
        frameWidth: 128,
        frameHeight: 128,
        idleFrames: 7,
        walkFrames: 7,
        attackFrames: 4,
        peso: 5,
        hpMax: 800,
        damage: 600,
    },
    {
        nombre: "Esqueleto Guerrero",
        idleSrc: "Skeleton_Warrior/Idle.png",
        walkSrc: "Skeleton_Warrior/Walk.png",
        attackSrc: "Skeleton_Warrior/Attack_1.png",
        deadSrc: "Skeleton_Warrior/Dead.png",
        frameWidth: 128,
        frameHeight: 128,
        idleFrames: 7,
        walkFrames: 7,
        attackFrames: 5,
        peso: 4,
        hpMax: 1000,
        damage: 600,
    },
];
function agregarEnemigoAleatorio() {
    const tipo = tiposEnemigos[Math.floor(Math.random() * tiposEnemigos.length)];
    const pos = posicionAleatoriaEnMapa();

    const nuevoEnemigo = new Enemigo(
        tipo.nombre,
        tipo.idleSrc,
        tipo.walkSrc,
        tipo.attackSrc,
        tipo.deadSrc,
        tipo.frameWidth,
        tipo.frameHeight,
        tipo.idleFrames,
        tipo.walkFrames,
        tipo.attackFrames,
        tipo.peso,
        tipo.hpMax,
        tipo.damage
    );

    nuevoEnemigo.x = pos.x;
    nuevoEnemigo.y = pos.y;

    enemigos.push(nuevoEnemigo);

    console.log(`Nuevo enemigo agregado: ${tipo.nombre} en (${pos.x.toFixed(0)}, ${pos.y.toFixed(0)})`);
}


setInterval(agregarEnemigoAleatorio, 42000); // 20000 ms = 20 segundos
for (let i = 0; i < 10; i++) {
    agregarEnemigoAleatorio();
}

function actualizarHUD(personaje) {
    const vidaPorcentaje = (personaje.hp / personaje.hpMax) * 100;
    const expNecesaria = personaje.nivel * 100;
    const expPorcentaje = (personaje.exp / expNecesaria) * 100;

    document.getElementById("vidaActual").style.width = vidaPorcentaje + "%";
    document.getElementById("expActual").style.width = expPorcentaje + "%";

    document.getElementById("textoVida").textContent = `HP: ${personaje.hp} / ${personaje.hpMax}`;
    document.getElementById("textoExp").textContent = `EXP: ${personaje.exp} / ${expNecesaria}`;
    document.getElementById("nivel").textContent = `Nivel: ${personaje.nivel}`;
}

function gameLoop() {



    // ***** Fondo con gradiente *****
    // Fondo que cubre todo el mapa antes de la cámara
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;

    const grad = ctx.createLinearGradient(0, 0, 0, mapa.height);
    grad.addColorStop(0, "#88ccee");
    grad.addColorStop(1, "#446644");

    ctx.fillStyle = grad;

    // ajusto la cámara según la posición del personaje
    ultimaCamX = Math.min(Math.max(personajeActual.x - canvas.width / 2, 0), mapa.width - canvas.width);
    ultimaCamY = Math.min(Math.max(personajeActual.y - canvas.height / 2, 0), mapa.height - canvas.height);

    ctx.fillRect(0, 0, mapa.width, mapa.height);
    ctx.save();
    ctx.translate(-ultimaCamX, -ultimaCamY);

    // Dibujo personaje y enemigos en coordenadas del mundo
    personajeActual.update();
    personajeActual.draw(ctx);

    enemigos.forEach(enemigo => {
        enemigo.update(personajeActual.x, personajeActual.y);
        enemigo.draw(ctx);
    });
    enemigos = enemigos.filter(e => !e.isRemoved);

    // Partículas
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) particles.splice(i, 1);
    }

    ctx.restore();

    actualizarHUD(personajeActual);

    if (juegoIniciado) {
        dibujarMiniMapa();
    }

    requestAnimationFrame(gameLoop);

}


window.addEventListener("resize", () => {
    if (personajeActual) {
        ajustarCanvasJuego();
    } else {
        ajustarCanvasInicio();
    }
});
window.onload = () => {
    ajustarCanvasInicio();
    cargarDatosPersonajes();
    esconder("gameCanvas")
    miniMapa.style.display = "none";  // <-- Ocultar mini mapa hasta iniciar
};

// ✅ Evento para botón Jugar
btnJugar.addEventListener("click", () => {
    esconder("menuInicio");
    esconder("gameCanvas")
    mostrar("menuSeleccion");
    ajustarCanvasSeleccion();
});