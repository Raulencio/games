
var oros = 0;
var level = 1;
var exp = 0;

let npj = 1;
var armas = [
    { id: 1, nivel: 1, nombre: "Katana", ataque: "1000", probCritico: 50, atsp: 1 },
    { id: 2, nivel: 1, nombre: "Sable", ataque: "800", probCritico: 80, atsp: 2 },
    { id: 3, nivel: 1, nombre: "Arco", ataque: "500", probCritico: 70, atsp: 4 },
    { id: 4, nivel: 1, nombre: "Baculo", ataque: "400", probCritico: 90, atsp: 3 }
];

var pjs = [
    { id: 1, nivel: 1, nombre: "Samurai", tipo: "Espadachin", vida: 2000, vidaAc: 2000, ataque: 202, defensa: 100, experiencia: 1 },
    { id: 2, nivel: 1, nombre: "Ninja", tipo: "Espadachin", vida: 1500, vidaAc: 1500, ataque: 255, defensa: 80, experiencia: 1 },
    { id: 3, nivel: 1, nombre: "Arquero", tipo: "Rango", vida: 1000, vidaAc: 1000, ataque: 303, defensa: 50, experiencia: 1 },
    { id: 4, nivel: 1, nombre: "Mago", tipo: "Soporte", vida: 1800, vidaAc: 1800, ataque: 199, defensa: 90, experiencia: 1 }
]

let nenemigo = 0;
let enemigoActual = 0;
let pjActual = 1;

var enemigos = [
    { id: 1, nivel: 1, nombre: "Espantapajaros", tipo: "practica", vida: 1000, vidaAc: 1000, ataque: 0, defensa: 100 },
    { id: 2, nivel: 3, nombre: "Enemigo 2", tipo: "Normal", vida: 800, vidaAc: 800, ataque: 150, defensa: 100 },
    { id: 3, nivel: 5, nombre: "enemigo 3", tipo: "practica", vida: 1000, vidaAc: 1000, ataque: 200, defensa: 100 },
    { id: 4, nivel: 10, nombre: "Hada", tipo: "Soporte", vida: 800, vidaAc: 800, ataque: 1500, defensa: 100 },
    { id: 5, nivel: 15, nombre: "enemigo5", tipo: "practica", vida: 1000, vidaAc: 1000, ataque: 500, defensa: 100 },
    { id: 6, nivel: 20, nombre: "Enemigo 6", tipo: "Normal", vida: 800, vidaAc: 800, ataque: 1500, defensa: 100 },
    { id: 7, nivel: 27, nombre: "enemigo 7", tipo: "practica", vida: 1000, vidaAc: 1000, ataque: 2100, defensa: 100 },
    { id: 8, nivel: 40, nombre: "Enemigo 8", tipo: "Normal", vida: 8000, vidaAc: 800, ataque: 4000, defensa: 100 },
    { id: 9, nivel: 65, nombre: "enemigo 9", tipo: "practica", vida: 60000, vidaAc: 1000, ataque: 6000, defensa: 100 },
    { id: 10, nivel: 100, nombre: "Enemigo 10", tipo: "Normal", vida: 10000, vidaAc: 800, ataque: 10000, defensa: 100 },
    { id: 11, nivel: 140, nombre: "enemigo 11", tipo: "practica", vida: 1000, vidaAc: 1000, ataque: 14000, defensa: 100 },
    { id: 12, nivel: 200, nombre: "Enemigo 12", tipo: "Normal", vida: 8000, vidaAc: 800, ataque: 1500, defensa: 100 },
    { id: 13, nivel: 350, nombre: "enemigo 13", tipo: "practica", vida: 10000, vidaAc: 1000, ataque: 2000, defensa: 100 },
    { id: 14, nivel: 500, nombre: "Enemigo 14", tipo: "Normal", vida: 25000, vidaAc: 800, ataque: 2500, defensa: 100 },
    { id: 15, nivel: 700, nombre: "enemigo 15", tipo: "practica", vida: 50000, vidaAc: 50000, ataque: 7000, defensa: 5000 },
    { id: 16, nivel: 1000, nombre: "Enemigo Final", tipo: "Jefe", vida: 80000, vidaAc: 80000, ataque: 1500, defensa: 10000 }
];

var unavez=1;
function listaPersonajes() {
    for (let i = 0; i < pjs.length; i++) {
        document.getElementById('nombrePj' + (i + 1)).textContent = ("Nombre: " + pjs[i].nombre);
        document.getElementById('ataquePj' + (i + 1)).textContent = ("ataque: " + pjs[i].ataque);
        document.getElementById('vidaPj' + (i + 1)).textContent = ("vida: " + pjs[i].vida);
        document.getElementById('defensaPj' + (i + 1)).textContent = ("defensa: " + pjs[i].defensa);
        document.getElementById('manaPj' + (i + 1)).textContent = ("Tipo: " + pjs[i].tipo);
    }
}
function enemigoAc() {
    let enemigoDerrotado = enemigoActual.vida < 0; // Verificar si el enemigo ya está muerto
    
    for (let i = 0; i < enemigos.length; i++) {
        const mapa = document.getElementById('mapa' + (i + 1));
        if (!mapa.hidden) {
            nenemigo = i + 1;
            break;
        }
    }
    if (!enemigoDerrotado) {
        enemigoActual = enemigos[nenemigo - 1];

    }
    pjActual = pjs[npj - 1];
    datos();

}
function datos(){

    document.getElementById("nivelE").textContent = ("Nivel " + enemigoActual.nivel + " " + enemigoActual.nombre);
    document.getElementById("nombreE").textContent = ("");
    document.getElementById("vidaE").textContent = ("Vida: " + enemigoActual.vida);
    document.getElementById("ataqueE").textContent = ("Ataque: " + enemigoActual.ataque + " Defensa: " + enemigoActual.defensa);
    document.getElementById("defensaE").textContent = ("");

    document.getElementById("datosPj").textContent = ("Nivel " + level + " Oro: " + oros + " Experiencia: " + exp);
    document.getElementById("nombrePj").textContent = (pjActual.nombre);
    document.getElementById("nombrePjI").textContent = (pjActual.nombre);
    document.getElementById("vidaPj").textContent = ("Vida Maxima: " + pjActual.vida);
    document.getElementById("ataquePj").textContent = ("Ataque: " + pjActual.ataque);
    document.getElementById("defensaPj").textContent = ("Defensa: " + pjActual.defensa);
    document.getElementById("manaPj").textContent = ("Tipo: " + pjActual.tipo);

    document.getElementById("enemigo").style.backgroundColor = colorRan();

    recrearBarraDeVida(enemigoActual.vidaAc, enemigoActual.vida, 'barraDeVida');
    recrearBarraDeVida(pjActual.vidaAc, pjActual.vida, 'barraDeVidaPj');
    guardarDatos();

}
function pelear() {
    if (enemigoActual.vida > 0 && pjActual.vida >= 1) {
        enemigoActual.vida = Math.max(enemigoActual.vida - pjActual.ataque, 0);
        pjActual.vida = Math.max(pjActual.vida - enemigoActual.ataque, 0);
        enemigoAc(); // Actualizar la pantalla después de cada pelea

        // Actualizar las barras de vida
         }

    if (enemigoActual.vida <= 0&&unavez==1) {
        oros += enemigoActual.nivel; // Sumar el oro según el nivel del enemigo
        const expGanada = enemigoActual.nivel * 10; // Calcular la experiencia ganada (por ejemplo, 10 veces el nivel del enemigo)
        exp += expGanada; // Aumentar la experiencia del personaje
         nivelAc();
        alert(enemigoActual.nombre + " ha caído. +$" + enemigoActual.nivel + " y +" + expGanada + " XP");
        enemigoActual = {}; // Reiniciar el enemigo actual para mostrar el siguiente  
        enemigoAc(); // Actualizar la pantalla después de cada pelea
        unavez=0;
    }else if(unavez==0&&enemigoActual.vida>=1){
        unavez=1;
    }

    if (pjActual.vida <= 0) {
        alert(pjActual.nombre + " ha caído");
    }
    enemigoAc(); // Actualizar la pantalla después de cada pelea

   }
function seleccionar(n) {
    npj = n;
    enemigoAc();
}

function cargarDatos() {
    if (localStorage.getItem("oros") != null) { oros = Number(localStorage.getItem("oros")); }
    if (localStorage.getItem("level") != null) { level = Number(localStorage.getItem("level")); }
    if (localStorage.getItem("exp") != null) { exp = Number(localStorage.getItem("exp")); }
    nivelAc()
   
}


function recrearBarraDeVida(vidaMax, vidaActual, barraId) {
    const barraDeVida = document.getElementById(barraId);
    const porcentajeVida = (vidaActual / vidaMax) * 100;
    barraDeVida.style.width = porcentajeVida + '%';
    barraDeVida.innerText = vidaActual + ' / ' + vidaMax;
}

function guardarDatos() {
    localStorage.setItem("oros", oros);
    localStorage.setItem("level", level);
    localStorage.setItem("exp", exp);
   
   
}
function nivelAc() {

    for(var e=1;e<100;e++){
      
        if(exp>=e*100){
            level=e;
                pjActual.vidaAc=pjActual.vida*e;
                pjActual.ataque=pjActual.ataque*e;
                pjActual.defensa=pjActual.defensa*e;
                
            for(var u=1;u<4;u++){
                pjs.vidaAc=pjs[u].vidaAc*e;
                pjs.ataque=pjs[u].ataque*e;
                pjs.defensa=pjs[u].defensa*e;
        }
        }

    }

}


function iniciarContador() {
    let contador = 0;

    // Función que se ejecutará cada segundo
    const intervalID = setInterval(() => {


    recrearBarraDeVida(enemigoActual.vidaAc, enemigoActual.vida, 'barraDeVida');
    recrearBarraDeVida(pjActual.vidaAc, pjActual.vida, 'barraDeVidaPj');
        contador++;
        console.log(`Segundos transcurridos: ${contador}`);
    }, 1000);

    // Detener el contador después de cierto tiempo (opcional)
    // Puedes descomentar las siguientes líneas si deseas detener el contador después de un tiempo específico.
    // setTimeout(() => {
    //     clearInterval(intervalID);
    //     console.log('Contador detenido.');
    // }, 10000); // Detener después de 10 segundos (por ejemplo)
}

// Llamar a la función para iniciar el contador
iniciarContador();