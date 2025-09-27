var ataque = 0;
var vida = 0;
var monedas = 0;

function btns(n) {
    switch (n) {
        case 1: ataque++; break;
        case 2: if (ataque > 0) ataque--; break;
        case 3: vida++; break;
        case 4: if (vida > 0) vida--; break;
        case 5: monedas++; break;
        case 6: if (monedas > 0) monedas--; break;
    }
    actualizarUI();
}

function actualizarUI() {
    document.getElementById("ataque").textContent = ataque;
    document.getElementById("vida").textContent = vida;
    document.getElementById("monedas").textContent = "Monedas : " + monedas;
}

function mostrar(id) {
    document.getElementById(id).style.display = "block";
}

function esconder(id) {
    document.getElementById(id).style.display = "none";
}

window.onload = function () {
    actualizarUI();
    esconder('c1');
    actualizarBotonBorrar(); // Asegura que el botón empiece desactivado
};



function generarCara(num) {
    const dadosAscii = {
        0: "┌───┐\n│   │\n│   │\n│   │\n└───┘",
        1: "┌───┐\n│   │\n│ * │\n│   │\n└───┘",
        2: "┌───┐\n│*  │\n│   │\n│  *│\n└───┘",
        3: "┌───┐\n│*  │\n│ * │\n│  *│\n└───┘",
        4: "┌───┐\n│* *│\n│   │\n│* *│\n└───┘",
        5: "┌───┐\n│* *│\n│ * │\n│* *│\n└───┘",
        6: "┌───┐\n│* *│\n│* *│\n│* *│\n└───┘"
    };
    return dadosAscii[num];
}

function agregarDado() {
    let dado = document.createElement("pre");
    dado.className = "dado";
    dado.textContent = generarCara(0);
    document.getElementById("dados-container").appendChild(dado);
    actualizarBotonBorrar();
}

function borrarDado() {
    const dados = document.querySelectorAll(".dado");
    if (dados.length > 0) {
        dados[dados.length - 1].remove();
        actualizarBotonBorrar();
    }
}

function lanzarDados() {
    const dados = document.querySelectorAll(".dado");

    // Activar animación de sacudida
    dados.forEach(dado => {
        dado.classList.add("shake");
    });

    // Después de 1 segundo, parar animación y mostrar número aleatorio
    setTimeout(() => {
        dados.forEach(dado => {
            dado.classList.remove("shake");
            let random = Math.floor(Math.random() * 6) + 1;
            dado.textContent = generarCara(random);
        });
    }, 1000);
}


function actualizarBotonBorrar() {
    const dados = document.querySelectorAll(".dado");
    const btnBorrar = document.getElementById("btn-borrar");
    btnBorrar.disabled = dados.length === 0;
}

function seleccionarPersonaje(imagen) {
    // Cambia la imagen de la carta principal
    document.querySelector("#carta img").src = imagen;

    // Carga las estadísticas base
    const p = personajes[imagen];
    ataque = p.ataque;
    vida = p.vida;
    monedas = p.monedas;
    actualizarUI();

    // Oculta el menú inicial y muestra la carta
    document.getElementById("menu-inicial").style.display = "none";
    document.getElementById("carta").style.display = "block";
}


const personajes = {
    "bhcazadoradebestias.png": {
        nombre: "Cazadora de Bestias",
        ataque: 5,
        vida: 10,
        monedas: 3
    },
    "bhninja.png": {
        nombre: "Ninja",
        ataque: 8,
        vida: 8,
        monedas: 1
    }
    // Puedes agregar más personajes aquí
};
const contenedor = document.querySelector(".personajes");
contenedor.innerHTML = ""; // limpiar si hay algo

for (const img in personajes) {
    const p = personajes[img];
    const div = document.createElement("div");
    div.className = "personaje";
    div.onclick = () => seleccionarPersonaje(img);

    div.innerHTML = `
        <img src="${img}" alt="${p.nombre}">
        <p>${p.nombre}</p>
        <p>⚔ Ataque: ${p.ataque} | ❤️ Vida: ${p.vida} | 🪙 Monedas: ${p.monedas}</p>
    `;
    contenedor.appendChild(div);
}
