function gameLoop() {

    if (!juegoIniciado) return;

    // ***** Fondo con gradiente *****
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;

    const grad = ctx.createLinearGradient(0, 0, 0, mapa.height);
    grad.addColorStop(0, "#5c6d2eff");
    grad.addColorStop(1, "#5b7529ff");

    ctx.fillStyle = grad;

    // ajusto la cámara según la posición del personaje
    ultimaCamX = Math.min(Math.max(personajeActual.x - canvas.width / 2, 0), mapa.width - canvas.width);
    ultimaCamY = Math.min(Math.max(personajeActual.y - canvas.height / 2, 0), mapa.height - canvas.height);

    ctx.fillRect(0, 0, mapa.width, mapa.height);

    ctx.save();
    ctx.translate(-ultimaCamX, -ultimaCamY);

    // Actualizaciones

    personajeActual.update();

    // Actualizar enemigos y eliminar muertos
    for (let i = enemigos.length - 1; i >= 0; i--) {
        enemigos[i].update(personajeActual.x, personajeActual.y);
        if (enemigos[i].isRemoved) {
            enemigos.splice(i, 1);
        }
    }


    // Actualizar proyectiles y eliminar inactivos
    for (let i = proyectiles.length - 1; i >= 0; i--) {
        const p = proyectiles[i];
        p.update();
        if (!p.active) {
            proyectiles.splice(i, 1);
        }
    }

    // Dibujar proyectiles activos
    proyectiles.forEach(p => p.draw(ctx));

    // Dibujado de enemigos y personaje
    enemigos.forEach(enemigo => enemigo.draw(ctx));
    personajeActual.draw(ctx);

    // Actualizar, dibujar y limpiar partículas
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }

    ctx.restore();

    actualizarHUD(personajeActual);

    if (juegoIniciado) {
        dibujarMiniMapa();
    }

    requestAnimationFrame(gameLoop);
}
