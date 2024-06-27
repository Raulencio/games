// Obtener referencias a los elementos
var mapa = document.getElementById('mapa');
var fondo = document.getElementById('fondo');
var moverIzquierda = document.getElementById('moverIzquierda');
var moverDerecha = document.getElementById('moverDerecha');
var moverArriba = document.getElementById('moverArriba');
var moverAbajo = document.getElementById('moverAbajo');

// Variables para controlar el movimiento
var moviendo = false;
var intervalo;

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

// Asignar eventos a los divs
moverIzquierda.addEventListener('touchstart', function() { empezarMover('izquierda'); });
moverDerecha.addEventListener('touchstart', function() { empezarMover('derecha'); });
moverArriba.addEventListener('touchstart', function() { empezarMover('arriba'); });
moverAbajo.addEventListener('touchstart', function() { empezarMover('abajo'); });

moverIzquierda.addEventListener('touchend', pararMover);
moverDerecha.addEventListener('touchend', pararMover);
moverArriba.addEventListener('touchend', pararMover);
moverAbajo.addEventListener('touchend', pararMover);

// También agregar eventos para 'mousedown' y 'mouseup' para soportar la interacción con el ratón
moverIzquierda.addEventListener('mousedown', function() { empezarMover('izquierda'); });
moverDerecha.addEventListener('mousedown', function() { empezarMover('derecha'); });
moverArriba.addEventListener('mousedown', function() { empezarMover('arriba'); });
moverAbajo.addEventListener('mousedown', function() { empezarMover('abajo'); });

moverIzquierda.addEventListener('mouseup', pararMover);
moverDerecha.addEventListener('mouseup', pararMover);
moverArriba.addEventListener('mouseup', pararMover);
moverAbajo.addEventListener('mouseup', pararMover);

// Para asegurarse de que también se detenga el movimiento si el ratón sale del área del botón mientras se mantiene presionado
moverIzquierda.addEventListener('mouseleave', pararMover);
moverDerecha.addEventListener('mouseleave', pararMover);
moverArriba.addEventListener('mouseleave', pararMover);
moverAbajo.addEventListener('mouseleave', pararMover);
