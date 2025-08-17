var ataque = 0;
var vida = 0;
var monedas = 0;
function btns(n) {

    switch (n) {
        case 1: ataque++; break;
        case 2: ataque--; break;
        case 3: vida++; break;
        case 4: vida--; break;
        case 5: monedas++; break;
        case 6: monedas--; break;
    }
    document.getElementById("ataque").textContent = ataque;
    document.getElementById("vida").textContent = vida;
    document.getElementById("monedas").textContent = "Monedas : " + monedas;
}
esconder('c1');