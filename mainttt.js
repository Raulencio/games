function esconder(id) { document.getElementById(id).hidden = true; }
function mostrar(id) { document.getElementById(id).hidden = false; }

// 🗂️ Referencias principales
const menuInicio = document.getElementById("menuInicio");
const menuSeleccion = document.getElementById("menuSeleccion");
const listaPersonajes = document.getElementById("listaPersonajes");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const btnJugar = document.getElementById("btnJugar");

let personajeActual = null;
let enemigos = [];

// 📁 Datos de personajes (actualiza con tus Attack_1 y Attack_2)
const personajesData = [
    {
        nombre: "Samurai Commandante",
        idleSrc: "Samurai_Commander/Idle.png",
        walkSrc: "Samurai_Commander/Walk.png",
        runSrc: "Samurai_Commander/Run.png",
        attack1Src: "Samurai_Commander/Attack_1.png",
        attack2Src: "Samurai_Commander/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 5, walkFrames: 9, runFrames: 8,
        attack1Frames: 4, attack2Frames: 5,
        peso: 20,
    },
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
    },
];

btnJugar.addEventListener("click", () => {
    menuInicio.style.display = "none";
    menuSeleccion.style.display = "block";
    cargarMenuPersonajes();
});

function cargarMenuPersonajes() {
    listaPersonajes.innerHTML = "";

    personajesData.forEach((p, index) => {
        const contenedor = document.createElement("div");
        contenedor.style.border = "1px solid #333";
        contenedor.style.margin = "10px";
        contenedor.style.padding = "10px";
        contenedor.style.display = "inline-block";
        contenedor.style.textAlign = "center";
        contenedor.style.background = "#ddd";
        contenedor.style.borderRadius = "10px";
        contenedor.style.width = "150px";

        const canvasPreview = document.createElement("canvas");
        canvasPreview.width = p.frameWidth;
        canvasPreview.height = p.frameHeight;
        contenedor.appendChild(canvasPreview);

        const ctxPreview = canvasPreview.getContext("2d");

        const idleSprite = new Sprite(p.idleSrc, p.frameWidth, p.frameHeight, p.idleFrames, 10);

        function animarIdle() {
            ctxPreview.clearRect(0, 0, canvasPreview.width, canvasPreview.height);
            idleSprite.draw(ctxPreview, 0, 0);
            requestAnimationFrame(animarIdle);
        }

        idleSprite.image.onload = animarIdle;

        const nombre = document.createElement("h3");
        nombre.textContent = p.nombre;
        contenedor.appendChild(nombre);

        const stats = document.createElement("p");
        stats.innerHTML = `
            <strong>Peso:</strong> ${p.peso}<br/>
            <strong>Idle Frames:</strong> ${p.idleFrames}<br/>
            <strong>Walk Frames:</strong> ${p.walkFrames}<br/>
            <strong>Run Frames:</strong> ${p.runFrames}
        `;
        contenedor.appendChild(stats);

        const btn = document.createElement("button");
        btn.textContent = "Seleccionar";
        btn.addEventListener("click", () => seleccionarPersonaje(index));
        contenedor.appendChild(btn);

        listaPersonajes.appendChild(contenedor);
    });
}

function seleccionarPersonaje(index) {
    const p = personajesData[index];
    menuSeleccion.style.display = "none";
    canvas.style.display = "block";

    personajeActual = new Personaje(
        p.nombre,
        p.idleSrc,
        p.walkSrc,
        p.runSrc,
        p.attack1Src,
        p.attack2Src,
        p.frameWidth,
        p.frameHeight,
        p.idleFrames,
        p.walkFrames,
        p.runFrames,
        p.attack1Frames,
        p.attack2Frames,
        p.peso
    );

    canvas.addEventListener("click", (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        let objetivoEncontrado = null;
        for (let enemigo of enemigos) {
            let dx = x - enemigo.x;
            let dy = y - enemigo.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 50) { // 🔍 radio de selección
                objetivoEncontrado = enemigo;
                break;
            }
        }

        if (objetivoEncontrado) {
            personajeActual.setObjetivo(objetivoEncontrado);
        } else {
            personajeActual.objetivo = null; // cancela objetivo si click no es enemigo
            personajeActual.moveTo(x, y);
        }
    });


    gameLoop();
    mostrar('hud')
}

function moverPersonaje(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Detectar si se clickeó sobre un enemigo
    const enemigoClickeado = enemigos.find(enemigo =>
        x >= enemigo.x - enemigo.idle.frameWidth / 2 &&
        x <= enemigo.x + enemigo.idle.frameWidth / 2 &&
        y >= enemigo.y - enemigo.idle.frameHeight / 2 &&
        y <= enemigo.y + enemigo.idle.frameHeight / 2
    );

    if (enemigoClickeado) {
        personajeActual.setObjetivo(enemigoClickeado);
    } else {
        personajeActual.moveTo(x, y);
        personajeActual.objetivo = null; // 🔄 Cancela objetivo si clickeas en el suelo
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

    draw(ctx, x, y) {
        if (!this.image.complete) return;
        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            x, y, this.frameWidth, this.frameHeight
        );
        this.counter++;
        if (this.counter >= this.frameRate) {
            this.currentFrame = (this.currentFrame + 1) % this.frames;
            this.counter = 0;
        }
    }

    reset() {
        this.currentFrame = 0;
        this.counter = 0;
    }
}

class Personaje {
    constructor(nombre, idleSrc, walkSrc, runSrc, attack1Src, attack2Src, frameWidth, frameHeight, idleFrames, walkFrames, runFrames, attack1Frames, attack2Frames, peso) {
        this.nombre = nombre;
        this.idle = new Sprite(idleSrc, frameWidth, frameHeight, idleFrames, 10);
        this.walk = new Sprite(walkSrc, frameWidth, frameHeight, walkFrames, 5);
        this.run = new Sprite(runSrc, frameWidth, frameHeight, runFrames, 3);
        this.attack1 = new Sprite(attack1Src, frameWidth, frameHeight, attack1Frames, 4);
        this.attack2 = new Sprite(attack2Src, frameWidth, frameHeight, attack2Frames, 4);
        const margen = 50;
        this.x = Math.min(canvas.width - margen, Math.max(margen, this.x));
        this.y = Math.min(canvas.height - margen, Math.max(margen, this.y));
        this.targetX = this.x;
        this.targetY = this.y;
        this.speed = 3;
        this.currentAnimation = "idle";
        this.flip = false;
        this.peso = peso;
        this.umbralFlip = 5;
        this.attacking = false;
        this.attackTimer = 0;
        this.objetivo = null; // 🎯 Nuevo: objetivo de ataque
        this.rangoAtaque = 50;
        this.hpMax = 100;
        this.hp = this.hpMax;
        this.exp = 0;
        this.nivel = 1;
        this.damage = 20;
        this.cargarDatos();

    }


    update() {

        if (this.objetivo && this.objetivo.isDead) {
            this.objetivo = null;
            this.targetX = this.x; // ❗ Mantiene su posición actual como target
            this.targetY = this.y;
            this.currentAnimation = "idle";
            return;
        }


        if (this.attacking) {
            this.attackTimer--;

            // Cada vez que inicia un ciclo de frames (o ajusta como gustes)
            if (this.attackTimer % (this.attack1.frameRate * this.attack1.frames) === 0) {
                if (this.objetivo) {
                    this.objetivo.recibirDanio(this.damage);
                }
            }

            if (this.attackTimer <= 0) {
                this.attacking = false;
                this.currentAnimation = "idle";
            }
            return;
        }

        if (this.objetivo) {
            // Movimiento hacia el objetivo si está fuera de rango
            let dx = this.objetivo.x - this.x;
            let dy = this.objetivo.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > this.rangoAtaque) {
                this.speed = Math.min(6, Math.max(2, 6 - (this.peso * 0.06)));
                this.x += (dx / dist) * this.speed;
                this.y += (dy / dist) * this.speed;
                this.currentAnimation = this.speed > 4.5 ? "run" : "walk";
                this.flip = dx < 0;
            } else {
                // Si está en rango, ataca
                this.atacar1();
            }
            return;
        }

        // Movimiento libre si no hay objetivo
        let dx = this.targetX - this.x;
        let dy = this.targetY - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        const llegadaUmbral = 3;

        if (dist > llegadaUmbral) {
            this.speed = Math.min(6, Math.max(2, 6 - (this.peso * 0.06)));
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
            this.currentAnimation = this.speed > 4.5 ? "run" : "walk";
            this.flip = dx < 0;
        } else {
            this.x = this.targetX;
            this.y = this.targetY;
            this.currentAnimation = "idle";
        }


        const margen = 50;
        this.x = Math.min(canvas.width - margen, Math.max(margen, this.x));
        this.y = Math.min(canvas.height - margen, Math.max(margen, this.y));

    }

    atacar1() {
        if (!this.attacking) {
            this.currentAnimation = "attack1";
            this.attack1.reset();
            this.attacking = true;
            this.attackTimer = this.attack1.frames * this.attack1.frameRate;

            if (this.objetivo) {
                this.objetivo.recibirDanio(this.damage);
            }
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
        const hpWidth = (this.hp / this.hpMax) * this.idle.frameWidth;
        ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, hpWidth, 5);

        ctx.restore();
    }




    moveTo(x, y) {
        this.targetX = x;
        this.targetY = y - this.idle.frameHeight / 2;
    }

    recibirDanio(cantidad) {
        this.hp -= cantidad;
        if (this.hp <= 0) {
            this.hp = 0;
            this.morir();
        }
    }

    morir() {
        console.log(this.nombre + " ha muerto");
        // Aquí puedes reiniciar el juego o mostrar un mensaje
    }
    ganarExp(cantidad) {
        this.exp += cantidad;
        const expNecesaria = this.nivel * 100;
        if (this.exp >= expNecesaria) {
            this.exp -= expNecesaria;
            this.nivel++;
            this.hpMax += 20;
            this.hp = this.hpMax;

            // ⚡ Muestra texto flotante
            const mensaje = document.createElement("div");
            mensaje.textContent = "¡Nivel " + this.nivel + "!";
            mensaje.style.position = "absolute";
            mensaje.style.left = (canvas.offsetLeft + this.x) + "px";
            mensaje.style.top = (canvas.offsetTop + this.y - 50) + "px";
            mensaje.style.color = "gold";
            mensaje.style.fontWeight = "bold";
            document.body.appendChild(mensaje);

            setTimeout(() => {
                document.body.removeChild(mensaje);
            }, 1000);
            this.guardarDatos();
        }
        
    }


guardarDatos() {
    const datos = {
        nivel: this.nivel,
        exp: this.exp,
        hpMax: this.hpMax,
        hp: this.hp
    };
    localStorage.setItem("personajeDatos", JSON.stringify(datos));
}

cargarDatos() {
    const datosGuardados = localStorage.getItem("personajeDatos");
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        this.nivel = datos.nivel;
        this.exp = datos.exp;
        this.hpMax = datos.hpMax;
        this.hp = datos.hp;
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
        this.hpMax = 100;
        this.hp = this.hpMax;
        this.damage = 15;               // Daño que inflige el enemigo
        this.hasDealtDamage = false;   // Control para aplicar daño solo una vez por ataque
    }

    update(jugadorX, jugadorY) {
        if (this.isDead) {
            this.currentAnimation = "dead";
            this.deadTimer++;
            if (this.deadTimer > this.dead.frames * this.dead.frameRate) {
                // Eliminar enemigo después de la animación muerte
                enemigos = enemigos.filter(e => e !== this);
                // Si el personaje estaba atacando a este enemigo, detener ataque
                if (personajeActual && personajeActual.objetivo === this) {
                    personajeActual.objetivo = null;
                    personajeActual.attacking = false;
                    personajeActual.currentAnimation = "idle";
                }
            }
            return;
        }

        if (this.attacking) {
            this.attackTimer--;

            // Aplicar daño una vez cuando la animación de ataque llega a mitad de frames
            const attackFrameToHit = Math.floor(this.attack1.frames / 2) * this.attack1.frameRate;
            if (!this.hasDealtDamage && this.attackTimer <= attackFrameToHit) {
                if (personajeActual) {
                    personajeActual.recibirDanio(this.damage);
                }
                this.hasDealtDamage = true;
            }

            if (this.attackTimer <= 0) {
                this.attacking = false;
                this.currentAnimation = "idle";
                this.hasDealtDamage = false; // Reset para próximo ataque
            }
            return;
        }

        let dx = jugadorX - this.x;
        let dy = jugadorY - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
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

        // Barra de vida
        if (!this.isDead) {
            ctx.fillStyle = "red";
            ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, this.idle.frameWidth, 5);
            ctx.fillStyle = "green";
            const hpWidth = (this.hp / this.hpMax) * this.idle.frameWidth;
            ctx.fillRect(-this.idle.frameWidth / 2, -this.idle.frameHeight / 2 - 10, hpWidth, 5);
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
        // Dar experiencia al jugador
        if (personajeActual) personajeActual.ganarExp(30);
    }
}



// ➕ Ejemplo creación de enemigos
enemigos = [
    new Enemigo(
        "Esqueleto Lancero",
        "Skeleton_Spearman/Idle.png",
        "Skeleton_Spearman/Walk.png",
        "Skeleton_Spearman/Attack_1.png",
        "Skeleton_Spearman/Dead.png", // nuevo
        128, 128, 7, 7, 4, 5,
        600, 400
    ),

];


enemigos = [
    new Enemigo("Esqueleto Lancero", "Skeleton_Spearman/Idle.png",
        "Skeleton_Spearman/Walk.png", "Skeleton_Spearman/Attack_1.png",
        "Skeleton_Spearman/Dead.png", 128, 128, 7, 7, 4, 5, 800, 600),
    new Enemigo("Esqueleto Guerrero", "Skeleton_Warrior/Idle.png", "Skeleton_Warrior/Walk.png", "Skeleton_Warrior/Attack_1.png", "Skeleton_Warrior/Dead.png",
        128, 128, 7, 7, 5, 4, 1000, 600),
];
function actualizarHUD(personaje) {
    const vidaPorcentaje = (personaje.hp / personaje.hpMax) * 100;
    const expNecesaria = personaje.nivel * 100;
    const expPorcentaje = (personaje.exp / expNecesaria) * 100;

    // Actualizar barras
    document.getElementById("vidaActual").style.width = vidaPorcentaje + "%";
    document.getElementById("expActual").style.width = expPorcentaje + "%";

    // Actualizar textos
    document.getElementById("textoVida").textContent = `HP: ${personaje.hp} / ${personaje.hpMax}`;
    document.getElementById("textoExp").textContent = `EXP: ${personaje.exp} / ${expNecesaria}`;
    document.getElementById("nivel").textContent = `Nivel: ${personaje.nivel}`;
}



function gameLoop() {






    const gradiente = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradiente.addColorStop(0, "#88ccee");   // cielo o color claro arriba
    gradiente.addColorStop(1, "#446644");   // suelo o color oscuro abajo

    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    if (personajeActual) {
        personajeActual.update();
        personajeActual.draw(ctx);
        actualizarHUD(personajeActual); // 👉 Actualiza el HUD aquí
    }




    enemigos.forEach(enemigo => {
        enemigo.update(personajeActual.x, personajeActual.y);
        enemigo.draw(ctx);
    });



    requestAnimationFrame(gameLoop);
}

