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
let proyectiles = [];



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
        peso: 25,
        hpMax: 150,
        damage: 35,
        regenRate: 4,
        ataqueDistancia: false,
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
        peso: 35,
        hpMax: 180,
        damage: 28,
        regenRate: 3,
        ataqueDistancia: false,
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
        hpMax: 110,
        damage: 45,
        regenRate: 3,
        ataqueDistancia: false,
    },
    {
        nombre: "Mago Eléctrico",
        previewSrc: "Lightning Mage/Idle.png",
        idleSrc: "Lightning Mage/Idle.png",
        walkSrc: "Lightning Mage/Walk.png",
        runSrc: "Lightning Mage/Run.png",
        attack1Src: "Lightning Mage/Attack_1.png",
        attack2Src: "Lightning Mage/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 7, walkFrames: 7, runFrames: 8,
        attack1Frames: 10, attack2Frames: 4,
        peso: 20,
        hpMax: 100,
        damage: 55,
        regenRate: 2,

        ataqueDistancia: false,
        rangoAtaqueDistancia: 220,
        dañoDistancia: 55,
        velocidadProyectil: 8
    },
    {
        nombre: "Mago de Fuego",
        previewSrc: "Fire Wizard/Idle.png",
        idleSrc: "Fire Wizard/Idle.png",
        walkSrc: "Fire Wizard/Walk.png",
        runSrc: "Fire Wizard/Run.png",
        attack1Src: "Fire Wizard/Attack_1.png",
        attack2Src: "Fire Wizard/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 7, walkFrames: 6, runFrames: 8,
        attack1Frames: 4, attack2Frames: 4,
        peso: 20,
        hpMax: 100,
        damage: 45,
        regenRate: 2,

        ataqueDistancia: false,
        rangoAtaqueDistancia: 200,
        dañoDistancia: 45,
        velocidadProyectil: 7
    },
    {
        nombre: "Mago Errante",
        previewSrc: "Wanderer Magican/Idle.png",
        idleSrc: "Wanderer Magican/Idle.png",
        walkSrc: "Wanderer Magican/Walk.png",
        runSrc: "Wanderer Magican/Run.png",
        attack1Src: "Wanderer Magican/Attack_1.png",
        attack2Src: "Wanderer Magican/Attack_2.png",
        frameWidth: 128, frameHeight: 128,
        idleFrames: 8, walkFrames: 7, runFrames: 8,
        attack1Frames: 7, attack2Frames: 9,
        peso: 20,
        hpMax: 90,
        damage: 40,
        regenRate: 6,

        ataqueDistancia: false,
        rangoAtaqueDistancia: 240,
        dañoDistancia: 40,
        velocidadProyectil: 6
    },

    {
        nombre: "Monje",
        idleSrc: "Ninja_Monk/Idle.png",
        walkSrc: "Ninja_Monk/Walk.png",
        runSrc: "Ninja_Monk/Run.png",
        attack1Src: "Ninja_Monk/Attack_1.png",
        attack2Src: "Ninja_Monk/Attack_2.png",
        frameWidth: 96, frameHeight: 96,
        idleFrames: 7, walkFrames: 7, runFrames: 8,
        attack1Frames: 5, attack2Frames: 5,
        peso: 15,
        hpMax: 130,
        damage: 25,
        regenRate: 6,
        ataqueDistancia: false,
    },
    {
        nombre: "Campesino",
        idleSrc: "Ninja_Peasant/Idle.png",
        walkSrc: "Ninja_Peasant/Walk.png",
        runSrc: "Ninja_Peasant/Run.png",
        attack1Src: "Ninja_Peasant/Attack_1.png",
        attack2Src: "Ninja_Peasant/Attack_2.png",
        frameWidth: 96, frameHeight: 96,
        idleFrames: 6, walkFrames: 8, runFrames: 6,
        attack1Frames: 6, attack2Frames: 4,
        peso: 20,
        hpMax: 100,
        damage: 20,
        regenRate: 3,
        ataqueDistancia: false,
    },
];






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
                regenRate: datos.regenRate ?? p.regenRate,
                dinero: datos.dinero ?? 0 // <-- agregar esta línea para cargar el dinero
            });

        } else {
            p.nivel = 1;
            p.exp = 0;
            p.dinero = 0;
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
    <strong>Monedas:</strong> ${p.dinero}
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
    mostrar("btnTienda");

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
        p.peso, p.regenRate, p.hpMax, p.damage,
        p.ataqueDistancia || false,
        p.rangoAtaqueDistancia || 0,
        p.dañoDistancia || 0,
        p.velocidadProyectil || 0,
        p.dinero || 0
    );

    for (let i = 0; i < 10; i++) {
        agregarEnemigoAleatorio();
    }

    agregarBossAleatorio();



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
    if (!personajeActual) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const enemigoClickeado = enemigos.find(enemigo =>
        x >= enemigo.x - enemigo.idle.frameWidth / 2 &&
        x <= enemigo.x + enemigo.idle.frameWidth / 2 &&
        y >= enemigo.y - enemigo.idle.frameHeight / 2 &&
        y <= enemigo.y + enemigo.idle.frameHeight / 2
    );

    if (enemigoClickeado) {
        personajeActual.setObjetivo(enemigoClickeado);
        console.log(`${personajeActual.nombre} objetivo: ${enemigoClickeado.nombre}`);
    } else {
        personajeActual.moveTo(x, y);
        personajeActual.objetivo = null;
        console.log(`${personajeActual.nombre} se mueve libremente a (${x}, ${y})`);
    }
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
        deadFrames: 5,
    }
    ,
    {
        nombre: "Esqueleto Guerrero", nivel: 1,
        idleSrc: "Skeleton_Warrior/Idle.png",
        walkSrc: "Skeleton_Warrior/Walk.png",
        attackSrc: "Skeleton_Warrior/Attack_1.png",
        deadSrc: "Skeleton_Warrior/Dead.png",
        frameWidth: 128,
        frameHeight: 128,
        idleFrames: 7,
        walkFrames: 7,
        attackFrames: 5,
        deadFrames: 4,
    },
    {
        nombre: "Minotauro", nivel: 1,
        idleSrc: "Minotaur_2/Idle.png",
        walkSrc: "Minotaur_2/Walk.png",
        attackSrc: "Minotaur_2/Attack.png",
        deadSrc: "Minotaur_2/Dead.png",
        frameWidth: 128,
        frameHeight: 128,
        idleFrames: 10,
        walkFrames: 12,
        attackFrames: 5,
        deadFrames: 5,
    },
];

const tiposBosses = [
    {
        nombre: "Jefe Minotauro",
        idleSrc: "Minotaur_1/Idle.png",
        walkSrc: "Minotaur_1/Walk.png",
        attackSrc: "Minotaur_1/Attack.png",
        deadSrc: "Minotaur_1/Dead.png",
        frameWidth: 128,
        frameHeight: 128,
        idleFrames: 10,
        walkFrames: 12,
        attackFrames: 5,
        deadFrames: 5,
        nivel: 10,
        colorBoss: "white"
    },
    {
        nombre: "Jefa Minotauro",
        idleSrc: "Minotaur_3/Idle.png",
        walkSrc: "Minotaur_3/Walk.png",
        attackSrc: "Minotaur_3/Attack.png",
        deadSrc: "Minotaur_3/Dead.png",
        frameWidth: 128,
        frameHeight: 128,
        idleFrames: 10,
        walkFrames: 12,
        attackFrames: 4,
        deadFrames: 5,
        nivel: 12,
        colorBoss: "yellow"
    }
];




function posicionAleatoriaEnMapa() {
    const x = Math.random() * mapa.width;
    const y = Math.random() * mapa.height;
    return { x, y };
}

function posicionLejanaDePersonaje() {
    const intentos = 1;
    let mejorPos = null;
    let maxDist = -1;

    for (let i = 0; i < intentos; i++) {
        const x = Math.random() * mapa.width;
        const y = Math.random() * mapa.height;

        const dx = x - personajeActual.x;
        const dy = y - personajeActual.y;
        const dist = Math.hypot(dx, dy);

        if (dist > maxDist) {
            maxDist = dist;
            mejorPos = { x, y };
        }
    }

    return mejorPos;
}



function posicionAlejadaEnMapa() {
    const intentos = 1; // Número de posiciones a evaluar
    let mejorPos = null;
    let maxDist = -1;

    for (let i = 0; i < intentos; i++) {
        const x = Math.random() * mapa.width;
        const y = Math.random() * mapa.height;

        const dist = Math.hypot(x, y);

        if (dist > maxDist) {
            maxDist = dist;
            mejorPos = { x, y };
        }
    }

    return mejorPos;
}

function agregarEnemigoAleatorio() {
    const tipo = tiposEnemigos[Math.floor(Math.random() * tiposEnemigos.length)];
    const pos = posicionLejanaDePersonaje();


    // 🔥 Ajuste: nivel basado en personajeActual
    let nivel = 1; // default

    if (personajeActual) {
        const nivelPersonaje = personajeActual.nivel;

        // Genera enemigos entre -2 y +2 niveles respecto al personaje, mínimo 1
        const minNivel = Math.max(1, nivelPersonaje - 2);
        const maxNivel = nivelPersonaje + 2;

        nivel = Math.floor(Math.random() * (maxNivel - minNivel + 1)) + minNivel;
        if(personajeActual.nivel==1){
            nivel=1;
        }
    }

    const esBoss = Math.random() < 0.042;
    const colorBoss = esBoss ? "black" : null;

    const nuevoEnemigo = new Enemigo(
        tipo.nombre,
        nivel,
        tipo.idleSrc,
        tipo.walkSrc,
        tipo.attackSrc,
        tipo.deadSrc,
        tipo.frameWidth,
        tipo.frameHeight,
        tipo.idleFrames,
        tipo.walkFrames,
        tipo.attackFrames,
        tipo.deadFrames,
        pos.x,
        pos.y,
        esBoss,
        colorBoss
    );

    enemigos.push(nuevoEnemigo);

    console.log(`Nuevo enemigo agregado: ${tipo.nombre} Lv.${nivel} en (${pos.x.toFixed(0)}, ${pos.y.toFixed(0)})`);
}

function agregarBossAleatorio() {
    const tipo = tiposBosses[Math.floor(Math.random() * tiposBosses.length)];
    const pos = posicionLejanaDePersonaje();

    let nivel = tipo.nivel; // default boss level

    if (personajeActual) {
        const nivelPersonaje = personajeActual.nivel;
        nivel = Math.max(1, nivelPersonaje + 3); // bosses siempre 3 niveles más alto, por ejemplo
    }

    const nuevoBoss = new Enemigo(
        tipo.nombre,
        nivel,
        tipo.idleSrc,
        tipo.walkSrc,
        tipo.attackSrc,
        tipo.deadSrc,
        tipo.frameWidth,
        tipo.frameHeight,
        tipo.idleFrames,
        tipo.walkFrames,
        tipo.attackFrames,
        tipo.deadFrames,
        pos.x,
        pos.y,
        true, // esBoss
        tipo.colorBoss
    );

    enemigos.push(nuevoBoss);
    console.log(`🔥 Nuevo boss agregado: ${tipo.nombre} Lv.${nivel} en (${pos.x.toFixed(0)}, ${pos.y.toFixed(0)})`);
}



setInterval(agregarEnemigoAleatorio, 20000); // 20000 ms = 20 segundos
setInterval(agregarBossAleatorio, 42000); // cada 2 minutos por ejemplo





window.addEventListener("resize", () => {
    if (personajeActual) {
        ajustarCanvasJuego();
    } else {
        ajustarCanvasInicio();
    }
});
window.onload = () => {
    miniMapa.style.display = "none";  // <-- Ocultar mini mapa hasta iniciar
    ajustarCanvasInicio();
    cargarDatosPersonajes();
    esconder("gameCanvas");
    esconder("btnTienda");
};

// ✅ Evento para botón Jugar
btnJugar.addEventListener("click", () => {
    esconder("menuInicio");
    esconder("gameCanvas")
    mostrar("menuSeleccion");
    ajustarCanvasSeleccion();
});

document.addEventListener("click", function (event) {
    const tiendaDiv = document.getElementById("tienda");
    const btnTienda = document.getElementById("btnTienda");

    // Si la tienda está abierta y el click no fue dentro de la tienda ni en el botón de tienda
    if (tiendaAbierta && !tiendaDiv.contains(event.target) && event.target !== btnTienda) {
        tiendaDiv.style.display = "none";
        tiendaAbierta = false; // 🔥 Marca tienda cerrada
    }
});

