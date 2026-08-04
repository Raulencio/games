const cielo = document.getElementById("cielo");

function crearNube() {

    const nube = document.createElement("div");

    nube.className = "nube";

    const img = document.createElement("img");

    img.src = "nube.png";

    nube.appendChild(img);

    const tamaño = 80 + Math.random() * 220;

    nube.style.width = tamaño + "px";

    nube.style.top = Math.random() * 70 + "%";

    nube.style.animationDuration = (15 + Math.random() * 20) + "s";

    cielo.appendChild(nube);

    nube.addEventListener("animationend", () => {

        nube.remove();

    });

}

setInterval(crearNube, 1500);

for (let i = 0; i < 6; i++) {

    setTimeout(crearNube, i * 500);

}

function esconder(x) {
    document.getElementById(x).hidden = true;

}

function mostrar(x) {
    document.getElementById(x).hidden = false;

}

var monedas = 0;
var vida = 16;
var sed = 8;
var hambre = 8;
function juego(n) {
    switch (n) {
        case 1:
            money = 5000;
            vida = 16;
            sed = 8;
            hambre = 8;
            document.getElementById("tvida").textContent = "❤️❤️❤️❤️❤️❤️❤️❤️ | 💧💧💧💧💧💧💧💧 | 🍗🍗🍗🍗🍗🍗🍗🍗" ;

            break;
        case 2:
            document.getElementById("tvida").textContent = "❤️❤️❤️❤️❤️❤️‍🩹🖤🖤 | 💧💧💧💧💧💧 | 🍗🍗🍗🍗🍗"

            money = 10000;
            vida = 11;
            sed = 6;
            hambre = 5;
            break;
        case 3:
            document.getElementById("tvida").textContent = "❤️❤️‍🩹❤️‍🩹❤️‍🩹🖤🖤🖤🖤 | 💧💧💧💧 | 🍗🍗🍗";            
            money = 20000;
            vida = 5;
            sed = 4;
            hambre = 3;
            break;
    }


    monedas = money;


    document.getElementById("monedas").textContent = "🪙 " + monedas;

    document.getElementById("imgfondo").src="timonbarco.png";
    document.getElementById("iconoP").src="capitana"+n+".png";

}