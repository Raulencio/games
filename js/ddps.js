// Obtener referencias a los elementos
var personaje = document.getElementById('personaje');
var moverIzquierda = document.getElementById('moverIzquierda');
var moverDerecha = document.getElementById('moverDerecha');
var moverArriba = document.getElementById('moverArriba');
var moverAbajo = document.getElementById('moverAbajo');

// Variables para controlar el movimiento
var moviendo = false;
var intervalo;

// Función para mover el personaje
function moverPersonaje(direccion) {
    var top = parseInt(personaje.style.top);
    var left = parseInt(personaje.style.left);

    switch (direccion) {
        case 'izquierda':
            personaje.style.left = (left - 5) + 'px';
            break;
        case 'derecha':
            personaje.style.left = (left + 5) + 'px';
            break;
        case 'arriba':
            personaje.style.top = (top - 5) + 'px';
            break;
        case 'abajo':
            personaje.style.top = (top + 5) + 'px';
            break;
    }
}

// Función para empezar a mover el personaje
function empezarMover(direccion) {
    if (!moviendo) {
        moviendo = true;
        intervalo = setInterval(function() {
            moverPersonaje(direccion);
        }, 100);
    }
}

// Función para parar de mover el personaje
function pararMover() {
    moviendo = false;
    clearInterval(intervalo);
}

// Asignar eventos a los botones
moverIzquierda.addEventListener('touchstart', function() { empezarMover('izquierda'); });
moverDerecha.addEventListener('touchstart', function() { empezarMover('derecha'); });
moverArriba.addEventListener('touchstart', function() { empezarMover('arriba'); });
moverAbajo.addEventListener('touchstart', function() { empezarMover('abajo'); });

moverIzquierda.addEventListener('touchend', pararMover);
moverDerecha.addEventListener('touchend', pararMover);
moverArriba.addEventListener('touchend', pararMover);
moverAbajo.addEventListener('touchend', pararMover);
