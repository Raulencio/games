
var width = 0;
var maxWidth = 100;
var intervalo;

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
            } reiniciarConsumirEnergia(width);clearInterval(intervalo);
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

