
/*
{}
*/

var oros=0;
var level=0;
var exp=0;


var npj=1;
var armas=[
    {id:1,nivel:1,nombre:"Katana",ataque:"1000",probCritico:50,atsp:1},
    {id:2,nivel:1,nombre:"Sable",ataque:"800",probCritico:80,atsp:2},
    {id:3,nivel:1,nombre:"Arco",ataque:"500",probCritico:70,atsp:4},
    {id:4,nivel:1,nombre:"Baculo",ataque:"400",probCritico:90,atsp:3}
]
var pjs=[
    { 
        id: 1,nivel:1,
        nombre:"Samurai",
        tipo: "Espadachin",
        vida: 2000,vidaAc:2000,
        ataque:202,
        defensa:100
   },
   { 
    id: 2,nivel:1,
    nombre:"Ninja",
    tipo: "Espadachin",
    vida: 1500,vidaAc:1500,
    ataque:255,
    defensa:80
},
{ 
    id: 3,nivel:1,
    nombre:"Arquero",
    tipo: "Rango",
    vida: 1000,vidaAc:1000,
    ataque:303,
    defensa:50
},
{ 
id: 4,nivel:1,
nombre:"Mago",
tipo: "Soporte",
vida: 1800,vidaAc:1800,
ataque:199,
defensa:90
}

]
var nenemigo=0;

var enemigos = [
    { 
        id: 1,nivel:1,
        nombre: "Espantapajaros",
        tipo: "practica",
        vida: 1000,vidaAc:1000,
        ataque: 0,
        defensa:100
    },
    { 
        id: 2,nivel:3,
        nombre: "Enemigo 2",
        tipo: "Normal",
        vida: 800,vidaAc:800,
        ataque: 150,
        defensa:100
    },
    { 
        id: 3,nivel:5,
        nombre: "enemigo 3",
        tipo: "practica",
        vida: 1000,vidaAc:1000,
        ataque: 200,
        defensa:100
    },
    { 
        id: 4,nivel:10,
        nombre: "Hada",
        tipo: "Soporte",
        vida: 800,vidaAc:800,
        ataque: 1500,
        defensa:100
    },{ 
        id: 5,nivel:15,
        nombre: "enemigo5",
        tipo: "practica",
        vida: 1000,vidaAc:1000,
        ataque: 500,
        defensa:100
    },
    { 
        id: 6,nivel:20,
        nombre: "Enemigo 6",
        tipo: "Normal",
        vida: 800,vidaAc:800,
        ataque: 1500,
        defensa:100
    },
    { 
        id: 7,nivel:27,
        nombre: "enemigo 7",
        tipo: "practica",
        vida: 1000,vidaAc:1000,
        ataque: 2100,
        defensa:100
    },
    { 
        id: 8,nivel:40,
        nombre: "Enemigo 8",
        tipo: "Normal",
        vida: 8000,vidaAc:800,
        ataque: 4000,
        defensa:100
    },{ 
        id: 9,nivel:65,
        nombre: "enemigo 9",
        tipo: "practica",
        vida: 60000,vidaAc:1000,
        ataque: 6000,
        defensa:100
    },
    { 
        id: 10,nivel:100,
        nombre: "Enemigo 10",
        tipo: "Normal",
        vida: 10000,vidaAc:800,
        ataque: 10000,
        defensa:100
    },
    { 
        id: 11,nivel:140,
        nombre: "enemigo 11",
        tipo: "practica",
        vida: 1000,vidaAc:1000,
        ataque: 14000,
        defensa:100
    },
    { 
        id: 12,nivel:200,
        nombre: "Enemigo 12",
        tipo: "Normal",
        vida: 8000,vidaAc:800,
        ataque: 1500,
        defensa:100
    },{ 
        id: 13,nivel:350,
        nombre: "enemigo 13",
        tipo: "practica",
        vida: 10000,vidaAc:1000,
        ataque: 2000,
        defensa:100
    },
    { 
        id: 14,nivel:500,
        nombre: "Enemigo 14",
        tipo: "Normal",
        vida: 25000,vidaAc:800,
        ataque:2500,
        defensa:100
    },
    { 
        id: 15,nivel:700,
        nombre: "enemigo 15",
        tipo: "practica",
        vida: 50000,vidaAc:50000,
        ataque: 7000,
        defensa:5000
    },
    { 
        id: 16,nivel:1000,
        nombre: "Enemigo Final",
        tipo: "Jefe",
        vida: 80000,vidaAc:80000,
        ataque: 1500,
        defensa:10000
    },
    // Agrega más enemigos según sea necesario
];
var enemigoActual=0;
var pjActual=1;
function listaPersonajes(){


    for (var i = 1; i <= 4; i++) {
    document.getElementById('nombrePj' + i).textContent=("Nombre: "+pjs[i-1].nombre);
       
    document.getElementById('ataquePj' + i).textContent=("ataque: "+pjs[i-1].ataque);;

    document.getElementById('vidaPj' + i).textContent=("vida: "+pjs[i-1].vida);;
    document.getElementById('defensaPj' + i).textContent=("defensa: "+pjs[i-1].defensa);;
    document.getElementById('manaPj' + i).textContent=("Tipo: "+pjs[i-1].tipo);;
    }

}
function enemigoAc() {
    for (var i = 1; i <= 16; i++) {
        var mapa = document.getElementById('mapa' + i);
        if (!mapa.hidden) {
            nenemigo = i;
            break;
        }
    }
    enemigoActual = enemigos[nenemigo - 1];


       pjActual = pjs[npj-1];



    document.getElementById("nivelE").textContent=("Nivel "+enemigoActual.nivel+" "+enemigoActual.nombre)
    document.getElementById("nombreE").textContent=("");
    document.getElementById("vidaE").textContent=("Vida: "+ enemigoActual.vida)
    document.getElementById("ataqueE").textContent=("Ataque: "+enemigoActual.ataque+" Defensa: "+enemigoActual.defensa)
    document.getElementById("defensaE").textContent=("")

    document.getElementById("datosPj").textContent = ("Nivel "+pjActual.nivel+" Oro: "+oros);
    document.getElementById("nombrePj").textContent = (pjActual.nombre);
    document.getElementById("nombrePjI").textContent = (pjActual.nombre);
    document.getElementById("vidaPj").textContent = ("Vida Maxima: "+pjActual.vida);
    document.getElementById("ataquePj").textContent = ("Ataque: "+pjActual.ataque);
    document.getElementById("defensaPj").textContent = ("Defensa: "+pjActual.defensa);
    document.getElementById("manaPj").textContent = ("Tipo: "+pjActual.tipo);



    console.log("Enemigo asignado al mapa: " + nenemigo);
    console.log("Enemigo actual:", enemigoActual);
    console.log("Nombre del enemigo:", enemigoActual.nombre);
    console.log("Tipo de enemigo:", enemigoActual.tipo);
    console.log("Vida del enemigo:", enemigoActual.vida);
    console.log("Ataque del enemigo:", enemigoActual.ataque);


    document.getElementById("enemigo").style.backgroundColor=colorRan();
    

    recrearBarraDeVidaPj(pjActual.vidaAc, pjActual.vida);
    recrearBarraDeVida(enemigoActual.vidaAc, enemigoActual.vida);


    

}

function seleccionar(n){

npj=n;

enemigoAc()

}
function pelear(){
    if(enemigoActual.vida>0){
    enemigoActual.vida=enemigoActual.vida-pjActual.ataque;
    pjActual.vida=pjActual.vida-enemigoActual.ataque;
        
    }
    if(enemigoActual.vida<0){
     enemigoActual.vida=0;   
     oros=oros+enemigoActual.nivel;
     alert(""+enemigoActual.nombre+" ha caido +$"+enemigoActual.nivel)


    }
    
     if(pjActual.vida<0){
         pjActual.vida=0;   
         alert(pjActual.nombre+" ha caido");
        }
    
    enemigoAc();



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



   function recrearBarraDeVida(vidaMax, vidaActual) {
    // Obtener el elemento de la barra de vida del DOM
    var barraDeVida = document.getElementById('barraDeVida');

    // Calcular el porcentaje de vida actual con respecto a la vida máxima
    var porcentajeVida = (vidaActual / vidaMax) * 100;

    // Actualizar el ancho de la barra de vida para reflejar el porcentaje de vida
    barraDeVida.style.width = porcentajeVida + '%';

    // También podemos actualizar el texto dentro de la barra de vida, si existe
    barraDeVida.innerText = vidaActual + ' / ' + vidaMax;
}
function recrearBarraDeVidaPj(vidaMax, vidaActual) {
    // Obtener el elemento de la barra de vida del DOM
    var barraDeVida = document.getElementById('barraDeVidaPj');

    // Calcular el porcentaje de vida actual con respecto a la vida máxima
    var porcentajeVida = (vidaActual / vidaMax) * 100;

    // Actualizar el ancho de la barra de vida para reflejar el porcentaje de vida
    barraDeVida.style.width = porcentajeVida + '%';

    // También podemos actualizar el texto dentro de la barra de vida, si existe
    barraDeVida.innerText = vidaActual + ' / ' + vidaMax;
}


function iniciarRecuperacionDeVida(vidaMax, vidaActual, incremento, intervalo) {
    // Obtener el elemento de la barra de vida del DOM
    var barraDeVida = document.getElementById('barraDeVidaPj');

    // Función para actualizar la barra de vida
    function actualizarBarraDeVida() {
        // Calcular el porcentaje de vida actual con respecto a la vida máxima
        var porcentajeVida = (vidaActual / vidaMax) * 100;

        // Actualizar el ancho de la barra de vida para reflejar el porcentaje de vida
        barraDeVida.style.width = porcentajeVida + '%';

        // También podemos actualizar el texto dentro de la barra de vida, si existe
        barraDeVida.innerText = vidaActual + ' / ' + vidaMax;
    }

    // Función para recuperar vida
    function recuperarVida() {
        if (vidaActual < vidaMax) {
            vidaActual += incremento;
            if (vidaActual > vidaMax) {
                vidaActual = vidaMax;
            }
            actualizarBarraDeVida();
        } else {
            clearInterval(intervalID); // Detener la recuperación si la vida está completa
        }
    }

    // Iniciar el intervalo para recuperar vida
    var intervalID = setInterval(recuperarVida, intervalo);

    // Llamar inmediatamente para actualizar la barra al inicio
    actualizarBarraDeVida();
}

// Ejemplo de uso
