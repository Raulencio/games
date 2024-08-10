
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

        case 6:
            document.getElementById("infimo").style.width = "0%";
            document.getElementById("infimo").style.height = "0%";
            document.getElementById("infimo").style.left = randomAr(1, 0) * 100 + "%";
            document.getElementById("infimo").style.top = randomAr(1, 0) * 100 + "%";

            for (var e = 1; e < 5; e++) {
                for (var i = 1; i < 6; i++) {
                    document.getElementById(e + "cuadro" + i).style.backgroundColor = "gray";
                }
            }


            break;
    }
}

document.getElementById('mapa').innerHTML = generarDiv(4, 5, "fila", "cuadro");


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
                });
            })(e, i);
        }
    }
}