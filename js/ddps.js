// Obtener referencias a los elementos
var mapa = document.getElementById('mapa');
var fondo = document.getElementById('fondo');
var personaje = document.getElementById('personaje');
var enemigo = document.getElementById('enemigo');
var moverIzquierda = document.getElementById('moverIzquierda');
var moverDerecha = document.getElementById('moverDerecha');
var moverArriba = document.getElementById('moverArriba');
var moverAbajo = document.getElementById('moverAbajo');
var atacar = document.getElementById('atacar');

// Variables para controlar el movimiento
var moviendo = false;
var intervalo;

// Posiciones iniciales del personaje
var personajePos = { top: 225, left: 225 };

// Tamaño del rango de colisión del personaje (ajustar según el arma)
var rangoColision = 50; // Ejemplo: rango de colisión de 20 píxeles alrededor del personaje

// Función para mover el fondo del mapa
function moverFondo(direccion) {
    var top = parseInt(fondo.style.top) || 0;
    var left = parseInt(fondo.style.left) || 0;
    var fondoWidth = fondo.offsetWidth;
    var fondoHeight = fondo.offsetHeight;
    var mapaWidth = mapa.offsetWidth;
    var mapaHeight = mapa.offsetHeight;

    switch (direccion) {
        case 'izquierda':
            if (left < 0) {
                fondo.style.left = Math.min(left + 5, 0) + 'px';
            }
            break;
        case 'derecha':
            if (left > -(fondoWidth - mapaWidth)) {
                fondo.style.left = Math.max(left - 5, -(fondoWidth - mapaWidth)) + 'px';
            }
            break;
        case 'arriba':
            if (top < 0) {
                fondo.style.top = Math.min(top + 5, 0) + 'px';
            }
            break;
        case 'abajo':
            if (top > -(fondoHeight - mapaHeight)) {
                fondo.style.top = Math.max(top - 5, -(fondoHeight - mapaHeight)) + 'px';
            }
            break;
    }

    // Actualizar la posición del personaje
    actualizarPosicionPersonaje();
    // Verificar colisiones
    verificarColision();
}

// Función para actualizar la posición del personaje
function actualizarPosicionPersonaje() {
    personajePos.top = 225 - parseInt(fondo.style.top);
    personajePos.left = 225 - parseInt(fondo.style.left);
}

// Función para verificar colisiones
function verificarColision() {
    var enemigoRect = enemigo.getBoundingClientRect();
    var personajeRect = personaje.getBoundingClientRect();

    // Calcular el área de colisión con el rango del arma
    var areaColision = {
        top: personajeRect.top - rangoColision,
        bottom: personajeRect.bottom + rangoColision,
        left: personajeRect.left - rangoColision,
        right: personajeRect.right + rangoColision
    };

    if (personajeRect.left < enemigoRect.left + enemigoRect.width &&
        personajeRect.left + personajeRect.width > enemigoRect.left &&
        personajeRect.top < enemigoRect.top + enemigoRect.height &&
        personajeRect.top + personajeRect.height > enemigoRect.top) {
        // Colisión detectada
        console.log('Colisión detectada');
        enemigo.style.backgroundColor = 'white'; // Cambiar color de fondo a blanco
        return true;
    } else {
        // No hay colisión
        enemigo.style.backgroundColor = 'transparent'; // Restaurar color de fondo transparente
        return false;
    }
}

// Función para empezar a mover el fondo del mapa
function empezarMover(direccion) {
    if (!moviendo) {
        moviendo = true;
        intervalo = setInterval(function() {
            moverFondo(direccion);
        }, 100);
    }
}

// Función para parar de mover el fondo del mapa
function pararMover() {
    moviendo = false;
    clearInterval(intervalo);
}

// Función de ataque
function atacarEnemigo() {
    if (verificarColision()) {
        console.log('Ataque realizado!');
        // Aquí puedes agregar la lógica para el ataque, como reducir la vida del enemigo, mostrar efectos, etc.
    } else {
        console.log('No hay colisión, no se puede atacar.');
    }
}

// Asignar eventos a los divs de movimiento
moverIzquierda.addEventListener('touchstart', function() { empezarMover('izquierda'); });
moverDerecha.addEventListener('touchstart', function() { empezarMover('derecha'); });
moverArriba.addEventListener('touchstart', function() { empezarMover('arriba'); });
moverAbajo.addEventListener('touchstart', function() { empezarMover('abajo'); });

moverIzquierda.addEventListener('touchend', pararMover);
moverDerecha.addEventListener('touchend', pararMover);
moverArriba.addEventListener('touchend', pararMover);
moverAbajo.addEventListener('touchend', pararMover);

moverIzquierda.addEventListener('mousedown', function() { empezarMover('izquierda'); });
moverDerecha.addEventListener('mousedown', function() { empezarMover('derecha'); });
moverArriba.addEventListener('mousedown', function() { empezarMover('arriba'); });
moverAbajo.addEventListener('mousedown', function() { empezarMover('abajo'); });

moverIzquierda.addEventListener('mouseup', pararMover);
moverDerecha.addEventListener('mouseup', pararMover);
moverArriba.addEventListener('mouseup', pararMover);
moverAbajo.addEventListener('mouseup', pararMover);

moverIzquierda.addEventListener('mouseleave', pararMover);
moverDerecha.addEventListener('mouseleave', pararMover);
moverArriba.addEventListener('mouseleave', pararMover);
moverAbajo.addEventListener('mouseleave', pararMover);

// Asignar evento al botón de ataque
atacar.addEventListener('click', atacarEnemigo);
