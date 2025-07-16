
const miniMapa = document.getElementById('miniMapa');
const ctxMini = miniMapa.getContext('2d');
function dibujarMiniMapa() {
    const mapScale = miniMapa.width / mapa.width;

    ctxMini.clearRect(0, 0, miniMapa.width, miniMapa.height);

    // Fondo semi-transparente
    ctxMini.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctxMini.fillRect(0, 0, miniMapa.width, miniMapa.height);

    // Jugador con color semitransparente
    const jugadorXMini = personajeActual.x * mapScale;
    const jugadorYMini = personajeActual.y * mapScale;
    const radioJugador = 6;

    ctxMini.fillStyle = 'rgba(50, 205, 50, 0.7)'; // verde lima semi
    ctxMini.beginPath();
    ctxMini.arc(jugadorXMini, jugadorYMini, radioJugador, 0, Math.PI * 2);
    ctxMini.fill();

    // Enemigos y bosses con colores y radios distintos
    enemigos.forEach(enemigo => {
        const enemigoXMini = enemigo.x * mapScale;
        const enemigoYMini = enemigo.y * mapScale;

        let radioEnemigo = 5;
        let colorEnemigo = 'rgba(255, 0, 0, 0.5)'; // rojo semi para enemigos normales

        if (enemigo.esBoss) {
            radioEnemigo = 8; // más grande para boss
            colorEnemigo = enemigo.colorBoss || 'rgba(0, 0, 0, 0.8)'; // usa su colorBoss o negro
        }

        ctxMini.fillStyle = colorEnemigo;
        ctxMini.beginPath();
        ctxMini.arc(enemigoXMini, enemigoYMini, radioEnemigo, 0, Math.PI * 2);
        ctxMini.fill();
    });

}

function actualizarHUD(personaje) {
    const vidaPorcentaje = (personaje.hp / personaje.hpMax) * 100;
    const expNecesaria = personaje.nivel * 100;
    const expPorcentaje = (personaje.exp / expNecesaria) * 100;
    const nombrePj = personaje.nombre;

    document.getElementById("textoPj").textContent = "" + nombrePj + ` Nivel: ${personaje.nivel}`;;
    document.getElementById("vidaActual").style.width = vidaPorcentaje + "%";
    document.getElementById("expActual").style.width = expPorcentaje + "%";

    document.getElementById("textoVida").textContent = `HP: ${personaje.hp} / ${personaje.hpMax}`;
    document.getElementById("textoExp").textContent = `EXP: ${personaje.exp} / ${expNecesaria}`;
    document.getElementById("dinero").textContent = `Plata: ${personaje.dinero}`;

}

function volverMenuPrincipal() {
    // Detener juego si es necesario
    juegoIniciado = false;

    // Mostrar menú principal
    document.getElementById("menuSeleccion").style.display = "block";

    // Opcional: reiniciar personaje o lógica de juego aquí
}
