
var width = 0;
var maxWidth = 100;
var intervalo;
var numeroCuadroP = "0";
var verificador = false;

var personajeElegido = {
    armaduraF: 0, congelar: 0, roboVida: 0,
    nombre: "", vidamax: 0, vidaActual: 0,
    ataque: 0, defensa: 0, probCrit: 0,
    dmgCrit: 0, recuperacion: 0, vida: 0, cenergia: 0,
    alcance: 0, url: "yohirostand.png", chabilidad1: 0, chabilidad2: 0, chabilidad3: 0, chabilidad4: 0
}


var infoPjs = [
    {
        comprado: true, armaduraF: 1500, congelar: 0, roboVida: 0,
        nombre: "Samurai", vidamax: 30000
        , ataque: 1200, defensa: 7000, probCrit: 30
        , dmgCrit: 170, recuperacion: 50, chabilidad1: 25, chabilidad2: 50, chabilidad3: 75, chabilidad4: 100
        , url: "yohirostand.png"
    }
    ,
    {
        comprado: false, armaduraF: 1000, congelar: 30, roboVida: 10,
        nombre: "Rain", vidamax: 17000
        , ataque: 1800, defensa: 1000, probCrit: 40
        , dmgCrit: 120, recuperacion: 20, chabilidad1: 20, chabilidad2: 40, chabilidad3: 60, chabilidad4: 80
        , url: "rain.png"
    }
    , {
        comprado: false, armaduraF: 0, congelar: 0, roboVida: 40,
        nombre: "Ninja", vidamax: 25000
        , ataque: 1500, defensa: 500, probCrit: 20
        , dmgCrit: 200, recuperacion: 30, chabilidad1: 5, chabilidad2: 20, chabilidad3: 60, chabilidad4: 90
        , url: "ninja.png"
    }
    , {
        comprado: false, armaduraF: 0, congelar: 0, roboVida: 20,
        nombre: "Sol", vidamax: 15000
        , ataque: 1700, defensa: 400, probCrit: 70
        , dmgCrit: 250, recuperacion: 40, chabilidad1: 20, chabilidad2: 50, chabilidad3: 70, chabilidad4: 100
        , url: "sol.png"
    }
    , {
        comprado: false, armaduraF: 0, congelar: 20, roboVida: 30,
        nombre: "Kayn", vidamax: 20000
        , ataque: 2000, defensa: 500, probCrit: 50
        , dmgCrit: 250, recuperacion: 10, chabilidad1: 30, chabilidad2: 60, chabilidad3: 90, chabilidad4: 100
        , url: "kayn.png"
    }
];


function agregarimagen(e, i) {
    $("#" + numeroCuadroP + "").empty().append("<img width='100%' src='" + personajeElegido.url + "'>");


}
function borrarimagenes() {

    for (var e = 1; e < 5; e++) {
        for (var i = 1; i < 6; i++) {

            $("#"+e+ "cuadroP" +i+ "").empty();

        }
    }

   
}
function mostrarMenu(menuId) {
    switch (menuId) {
        case 1:
            document.getElementById("inicio").style.left = '0%';
            document.getElementById("mejoras").style.left = '100%';
            document.getElementById("inventario").style.left = '200%';
            document.getElementById("tienda").style.left = '300%';
            document.getElementById("juego").style.top = '-100%';
            mostrarMenu(6);
            break;
        case 2:
            document.getElementById("inicio").style.left = '-100%';
            document.getElementById("mejoras").style.left = '0%';
            document.getElementById("inventario").style.left = '100%';
            document.getElementById("tienda").style.left = '200%';
            document.getElementById("juego").style.top = '-100%';
            break;
        case 3:
            document.getElementById("inicio").style.left = '-200%';
            document.getElementById("mejoras").style.left = '-100%';
            document.getElementById("inventario").style.left = '0%';
            document.getElementById("tienda").style.left = '100%';
            document.getElementById("juego").style.top = '-100%';
            break;
        case 4:
            document.getElementById("inicio").style.left = '-300%';
            document.getElementById("mejoras").style.left = '-200%';
            document.getElementById("inventario").style.left = '-100%';
            document.getElementById("tienda").style.left = '0%';
            document.getElementById("juego").style.top = '-100%';
            break;

        case 5:
            document.getElementById("juego").style.top = '0%';

            break;

        case 6://boton cerrar
            document.getElementById("infimo").style.width = "0%";
            document.getElementById("infimo").style.height = "0%";
            document.getElementById("infimo").style.left = randomAr(1, 0) * 100 + "%";
            document.getElementById("infimo").style.top = randomAr(1, 0) * 100 + "%";

            for (var e = 1; e < 5; e++) {
                for (var i = 1; i < 6; i++) {
                    document.getElementById(e + "cuadro" + i).style.backgroundColor = "gray";
                }
            }
            for (var j = 1; j < 5; j++) {
                document.getElementById("boton" + j).style.top = "90%";
            } reiniciarConsumirEnergia(width); clearInterval(intervalo);


            borrarimagenes();
            break;



    }
}

document.getElementById('mapa').innerHTML = generarDiv(4, 5, "fila", "cuadro");

document.getElementById('acciones').innerHTML = generarDiv(2, 5, "filaA", "cuadroA");

document.getElementById('personajes').innerHTML = generarDiv(4, 5, "filaP", "cuadroP");

document.getElementById('enemigos').innerHTML = generarDiv(4, 5, "filaE", "cuadroE");


window.onload = function () {
    for (var e = 1; e < 5; e++) {
        for (var i = 1; i < 6; i++) {
            (function (e, i) {
                document.getElementById(e + "cuadro" + i).addEventListener("click", function () {
                    document.getElementById(e + "cuadro" + i).style.backgroundColor = "black";
                    document.getElementById("infimo").style.width = "100%";
                    document.getElementById("infimo").style.height = "100%";
                    document.getElementById("infimo").style.top = "0%";
                    document.getElementById("infimo").style.left = "0%";
                    document.getElementById("infimo").style.backgroundColor = "white";
                    iniciarRelleno();
                    for (var j = 1; j < 5; j++) {
                        document.getElementById("boton" + j).style.top = "100%";
                    }
                });
            })(e, i);
        }
    }



    for (var e = 1; e < 3; e++) {
        for (var i = 1; i < 6; i++) {
            (function (e, i) {
                document.getElementById(e + "cuadroA" + i).addEventListener("click", function () {

                    if (i == 1 && e == 1) {

                        consumirEnergia(20);


                        personajeElegido = infoPjs[0];


                        agregarimagen(e, i);
                    } else if (i == 2 && e == 1) {

                        personajeElegido = infoPjs[1];


                        agregarimagen(e, i);
                        consumirEnergia(30);
                    } else if (i == 3 && e == 1) {
                        consumirEnergia(40);

                        personajeElegido = infoPjs[2];


                        agregarimagen(e, i);
                    } else if (i == 4 && e == 1) {


                        consumirEnergia(60);

                        if (verificador) {
                            personajeElegido = infoPjs[3];
                            agregarimagen(e, i);
                        }
                    }
                    else if (i == 5 && e == 1) {

                        personajeElegido = infoPjs[4];


                        agregarimagen(e, i);
                        consumirEnergia(70);
                    }
                });
            })(e, i);
        }
    }


    for (var e = 1; e < 5; e++) {
        for (var i = 1; i < 6; i++) {
            (function (e, i) {
                document.getElementById(e + "cuadroP" + i).addEventListener("click", function () {
                
                    numeroCuadroP = (e + "cuadroP" + i);
                    console.log(numeroCuadroP);

                });
                document.getElementById(e + "cuadroP" + i).addEventListener("mousedown", function () {
                    stecuadro = document.getElementById(e + "cuadroP" + i);
                    stecuadro.style.border = "1px solid red";
                });
                
                document.getElementById(e + "cuadroP" + i).addEventListener("mouseup", function () {
                    stecuadro = document.getElementById(e + "cuadroP" + i);
                    stecuadro.style.border = "none";
                });
            })(e, i);
        }
    }








}




function iniciarRelleno() {
    clearInterval(intervalo);
    intervalo = setInterval(function () {
        if (width >= maxWidth) {
            clearInterval(intervalo);
        } else {
            width++;
            actualizarBarra();
        }
    }, 100); // Ajusta el tiempo (100 ms) para cambiar la velocidad de relleno
}

function reiniciarConsumirEnergia(n) {
    clearInterval(intervalo);
    var consumo = n; // Cantidad de energía a consumir
    if (width >= consumo) {
        width = Math.max(0, width - consumo);
    }
    actualizarBarra();
    iniciarRelleno(); // Reinicia el relleno después de consumir
}

function consumirEnergia(n) {
    clearInterval(intervalo);
    var consumo = n; // Cantidad de energía a consumir
    if (width >= consumo) {
        width = Math.max(0, width - consumo);
        document.getElementById('barra-energia').style.backgroundColor = "red";
        verificador = true;
    }
    actualizarBarra();
    iniciarRelleno(); // Reinicia el relleno después de consumir
}

function actualizarBarra() {
    var barra = document.getElementById('barra-energia');
    barra.style.width = width + '%';
    barra.innerText = width + '/ 100';
    barra.style.backgroundColor = "red";
}

