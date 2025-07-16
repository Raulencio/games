let tiendaAbierta = false;
const tiendaObjetos = [
    {
        id: "amu_hp1",
        nombre: "Amuleto Vital Pequeño",
        descripcion: "+20 HP Máx.",
        precio: 5,
        bonus: { hpMax: 20 }
    },
    {
        id: "amu_dmg1",
        nombre: "Amuleto de Furia",
        descripcion: "+5 Daño",
        precio: 1,
        bonus: { damage: 5 }
    },
    {
        id: "bara_regen1",
        nombre: "Baratija de Curación",
        descripcion: "+2 Regen",
        precio: 4,
        bonus: { regenRate: 2 }
    },
    {
        id: "amu_hp2",
        nombre: "Amuleto Vital Mediano",
        descripcion: "+50 HP Máx.",
        precio: 12,
        bonus: { hpMax: 50 }
    },
    {
        id: "amu_dmg2",
        nombre: "Amuleto de Furia Mayor",
        descripcion: "+12 Daño",
        precio: 20,
        bonus: { damage: 12 }
    },
    {
        id: "bara_regen2",
        nombre: "Baratija de Regeneración Rápida",
        descripcion: "+5 Regen",
        precio: 9,
        bonus: { regenRate: 5 }
    },
    {
        id: "amu_speed1",
        nombre: "Amuleto de Velocidad",
        descripcion: "+0.5 Velocidad",
        precio: 7,
        bonus: { peso: -0.5 }
    },   
    {
        id: "bara_hpRegenBoost",
        nombre: "Baratija de Sanación Eterna",
        descripcion: "+15 HP Máx. y +3 Regen",
        precio: 18,
        bonus: { hpMax: 15, regenRate: 3 }
    }
];


function cargarObjetosComprados() {
    const datos = localStorage.getItem("objetosComprados");
    return datos ? JSON.parse(datos) : [];
}

function guardarObjetosComprados(objetos) {
    localStorage.setItem("objetosComprados", JSON.stringify(objetos));
}

document.getElementById("btnTienda").addEventListener("click", mostrarTienda);

function mostrarTienda() {
    tiendaAbierta = true;
    const tiendaDiv = document.getElementById("tienda");
    tiendaDiv.innerHTML = "<h3>Tienda</h3>";

    tiendaObjetos.forEach(obj => {
        const itemDiv = document.createElement("div");
        itemDiv.style.borderBottom = "1px solid white";
        itemDiv.style.padding = "5px 0";

        itemDiv.innerHTML = `
            <strong>${obj.nombre}</strong><br/>
            <small>${obj.descripcion}</small><br/>
            Precio: ${obj.precio}<br/>
        `;

        const btnComprar = document.createElement("button");
        btnComprar.textContent = "Comprar";
        btnComprar.style.marginTop = "5px";
        btnComprar.addEventListener("click", () => comprarObjeto(obj));

        itemDiv.appendChild(btnComprar);
        tiendaDiv.appendChild(itemDiv);

        tiendaDiv.style.display = "block";
        itemDiv.style.borderBottom = "1px solid rgba(255,255,255,0.3)";
        itemDiv.style.padding = "8px 5px";
        itemDiv.style.marginBottom = "5px";

        btnComprar.style.backgroundColor = "#4CAF50";
        btnComprar.style.color = "white";
        btnComprar.style.border = "none";
        btnComprar.style.padding = "6px 12px";
        btnComprar.style.borderRadius = "4px";
        btnComprar.style.cursor = "pointer";
        btnComprar.style.transition = "background-color 0.3s ease";

        btnComprar.addEventListener("mouseenter", () => {
            btnComprar.style.backgroundColor = "#45a049";
        });
        btnComprar.addEventListener("mouseleave", () => {
            btnComprar.style.backgroundColor = "#4CAF50";
        });
    });


}


function comprarObjeto(obj) {
    if (personajeActual.dinero >= obj.precio) {
        personajeActual.dinero -= obj.precio;

        const comprados = cargarObjetosComprados();
        comprados.push(obj);
        guardarObjetosComprados(comprados);

        // 🔥 Aplicar solo el bonus del último objeto comprado
        for (const stat in obj.bonus) {
            personajeActual[stat] = (personajeActual[stat] || 0) + obj.bonus[stat];
        }

        alert(`Compraste ${obj.nombre}`);
        personajeActual.guardarDatos();
    } else {
        alert("No tienes suficiente dinero");
    }
}
