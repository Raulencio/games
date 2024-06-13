
/*
{}
*/

var oros=0;
var level=0;
var exp=0;


var npj=0;
var pjs=[
    { 
        id: 1,nivel:0,
        nombre:"Samurai",
        tipo: "Espadachin",
        vida: 2000,
        ataque:200,
        defensa:100
   }


]
var nenemigo=0;

var enemigos = [
    { 
        id: 1,nivel:1,
        nombre: "Espantapajaros",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 2,nivel:3,
        nombre: "Enemigo 2",
        tipo: "Normal",
        vida: 800,
        ataque: 15,
        defensa:100
    },
    { 
        id: 3,nivel:5,
        nombre: "enemigo 3",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 4,nivel:10,
        nombre: "Hada",
        tipo: "Soporte",
        vida: 800,
        ataque: 15,
        defensa:100
    },{ 
        id: 5,nivel:15,
        nombre: "enemigo5",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 6,nivel:20,
        nombre: "Enemigo 6",
        tipo: "Normal",
        vida: 800,
        ataque: 15,
        defensa:100
    },
    { 
        id: 7,nivel:27,
        nombre: "enemigo 7",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 8,nivel:40,
        nombre: "Enemigo 8",
        tipo: "Normal",
        vida: 800,
        ataque: 15,
        defensa:100
    },{ 
        id: 9,nivel:65,
        nombre: "enemigo 9",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 10,nivel:100,
        nombre: "Enemigo 10",
        tipo: "Normal",
        vida: 800,
        ataque: 15,
        defensa:100
    },
    { 
        id: 11,nivel:140,
        nombre: "enemigo 11",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 12,nivel:200,
        nombre: "Enemigo 12",
        tipo: "Normal",
        vida: 800,
        ataque: 15,
        defensa:100
    },{ 
        id: 13,nivel:350,
        nombre: "enemigo 13",
        tipo: "practica",
        vida: 1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 14,nivel:500,
        nombre: "Enemigo 14",
        tipo: "Normal",
        vida: 800,
        ataque: 15,
        defensa:100
    },
    { 
        id: 15,nivel:700,
        nombre: "enemigo 15",
        tipo: "practica",
        vida: 50000,
        ataque: 7000,
        defensa:5000
    },
    { 
        id: 16,nivel:1000,
        nombre: "Enemigo Final",
        tipo: "Jefe",
        vida: 80000,
        ataque: 1500,
        defensa:10000
    },
    // Agrega más enemigos según sea necesario
];
var enemigoActual=0;
var pjActual=1;


function enemigoAc() {
    for (var i = 1; i <= 16; i++) {
        var mapa = document.getElementById('mapa' + i);
        if (!mapa.hidden) {
            nenemigo = i;
            break;
        }
    }
    enemigoActual = enemigos[nenemigo - 1];

       pjActual = pjs[npj];

    document.getElementById("nivelE").textContent=(enemigoActual.nivel)
    document.getElementById("nombreE").textContent=(enemigoActual.nombre)
    document.getElementById("vidaE").textContent=(enemigoActual.vida)
    document.getElementById("ataqueE").textContent=(enemigoActual.ataque)
    document.getElementById("defensaE").textContent=(enemigoActual.defensa)

    document.getElementById("datosPj").textContent = (pjActual.nivel);
    document.getElementById("nombrePj").textContent = (pjActual.nombre);
    document.getElementById("vidaPj").textContent = (pjActual.vida);
    document.getElementById("ataquePj").textContent = (pjActual.ataque);
    document.getElementById("defensaPj").textContent = (pjActual.defensa);



    console.log("Enemigo asignado al mapa: " + nenemigo);
    console.log("Enemigo actual:", enemigoActual);
    console.log("Nombre del enemigo:", enemigoActual.nombre);
    console.log("Tipo de enemigo:", enemigoActual.tipo);
    console.log("Vida del enemigo:", enemigoActual.vida);
    console.log("Ataque del enemigo:", enemigoActual.ataque);
}



function cargarDatos() {
    if (localStorage.getItem("oros") != null) { oros = Number(localStorage.getItem("oros")); }    
    if (localStorage.getItem("level") != null) { level = Number(localStorage.getItem("level")); }    
    if (localStorage.getItem("exp") != null) { exp = Number(localStorage.getItem("exp")); }  
}

function guardarDatos() {
   localStorage.setItem("oros", oros);
    localStorage.setItem("level", level);
    localStorage.setItem("exp", exp);
   }