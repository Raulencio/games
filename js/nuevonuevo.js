var nombre = "";
var nivelActual = 1;
var narmaequipada = 1;
var pequipado = 1;
var enemigoac = 2;
var nenemigo = 5;
var nPjs = 5;
var nArmas = 5;
var dinero = 0;
var preciocosas = 1000;
var personajeElegido = {
    armaduraF: 0, congelar: 0, roboVida: 0,
    nombre: "", vidamax: 0, vidaActual: 0,
    ataque: 0, defensa: 0, probCrit: 0,
    dmgCrit: 0, recuperacion: 0, vida: 0,
    alcance: 0, url: "", chabilidad1: 0, chabilidad2: 0, chabilidad3: 0, chabilidad4: 0
}
var cual = [
    {
        comprado: true, armaduraF: 2000, congelar: 0, roboVida: 0,
        nombre: "espada de fuego", ataque: 4200,
        defensa: 4000, probCrit: 10, dmgCrit: 100,
        recuperacion: 10, vida: 5000, alcance: 2
        , url: "https://lh3.googleusercontent.com/9AbUcqcOyLnUcp76PoldOwKDzlpZQg9yUA7HUxBmB0stbQyV1CEYhwgiX6wQvBZ55BU1pVLzytt6Hj8dhqmJhXuzTn0jjObMh0ND68FruMZUJALsYWEcPDBk_w6d2AkDGtzLQ3BnqkjlBPHv5re0DBGeoP0-QBzvEjXWyODtUzoCV-_Bot-7KYwltFYGASNa7TgxRP9ixA5Z8xn7ZpPxp-XRPtOI1NH7nqKJVTd0usz0cz7sQehJTxiCcpeKYvWZUI0zy7LXzu3ErZbs1v7q2pGrsN8I2T6PMovhxxE1_LL9xCS4XhhoD7mTJOxOcIhyjKqX7UpMjZ_iGj4AZE1nDqiUqet5VID5y8tu4exYgJRahJD0qn3ClHyo85Qt-yKhuJYpqp3O0mzt6ctQsuEE3PT_cNQXmEclqY-kogtb0K7JguWyAkNptC6mvyAyQcREzKDOblfVCa4YEAoyLWf-aJUXcOE7_xyEwCB6S-N2L-6TODn2rELVmEy8aLWckKGrTSsl3qTrSgPzo8TF3d-vQ1UxUvotFPEDdjhn0-qxNV_s72gqcyNPCzBrrDPtJ70iOvfQREcy0zbPJ0hwC3Y0iefXjxfJlhWe5PVJzLmhHFl_PltAuHpRFRUF3KvZtBNyXPRblwnMsXCPTbaAzUmQSeATrC-6gSMCndq5iOCZgnr5dwA_kJHf04TQVJBxAzg=w450-h150-no?authuser=0"
    }
    , {
        comprado: false,
        nombre: "espada de hielo", ataque: 3000, armaduraF: 1000, congelar: 30, roboVida: 0,
        defensa: 2000, probCrit: 40, dmgCrit: 100,
        recuperacion: 50, vida: 2000, alcance: 4
        , url: "https://lh3.googleusercontent.com/qTCY8Ts0_fFUaKAqg1Oo06RTbTKzYlZ-_hcfPTzxD2xfsvYUeGZu_YKWcILimayHQAO8J8KZvAWTagCNQjgN8-hvAamRomecbQZF93zXVXYo_y7vx1bOIqrkYKJa9JhfPbxgUn83jKWeRtPgzGMkm4M1E2qkSZrdRbPxWbScj6LD4XN65mpY2xG1IZgz7NHyn_Dm-okw5h0nYKXVqCRcj1Thzg6jj_R04x2lur9WIAKHEim-z1ZizYODKQL5qwWbZRTisGw4FWe3ArbqV1lWkWkzLIFZ0DbvyraByL05BpYZ0KBSiyaHegTrDao0jxZBQ3F0BThbYEROM1lFqNkzPONvPh7ueNUPT-7JuZCk2qmKHwibYt_Aipa9Dwy-jLQrhrGFNF_GLmdVs65WbsDGOGdMNJ28Mvx2fyMhG_44pMI-R1nS9twy-CZUEgHHNlvaSsQU8McxmX3RuxTMgVEthq8lLIarp8BQJvwwUdgIsH2NOg7_qzwXXA1wdBD0eapyQ3LaLa-CZTq3Le8DXfLaH-ZX-2LjFIJh7bx5Zasro2xq3MPoqDDj65f6C2QtYusg5BKNIscWSQSIr-neqPqHVODwwEmEtNI120aVEh-9J71CB0Db3noYsfOqqZn1TPjqh28tfIAeLtsNzH-t9g5ufA2swXTokMQyvzMHn6_gb8LW92FjaMX4yZ79yI8MLic=w450-h150-no?authuser=0"
    }
    , {
        comprado: false, armaduraF: 0, congelar: 0, roboVida: 30,
        nombre: "espada del bosque", ataque: 2500,
        defensa: 1500, probCrit: 20, dmgCrit: 100,
        recuperacion: 30, vida: 3000, alcance: 1
        , url: "https://lh3.googleusercontent.com/A6zMcmD1AF3VW_pG9GVY3vm6Nuf2W9FZ3MPoRyXi875mgJLghHq-QLjnqm-UYmjkJQ0fsALVCOItgN_GLR2xLEwiYy8WL5LJmmQSgrsdJR02SGvQK_CoyRgX0aGjdJ8t18H5Yed-EGmQD3SowgZWJkWl7JSJdOH1K0Mq6V-RM589IlYT5BlZDdhPvzcPRrRQXapOG-QOj93gpJ9IZi0nLmSbQNLL2_XneuEw3_XSivJj1_cBnpupVWcx-qDgCzJQNkxoMU57p1uV4dZV65rasaySrS6rpE0vkGXS-ZG8gU41IKHuLEo9UiqhDTTxvZSi0pqDUmMIFMFkjfZYdUT0kLhveZ4xgNuwfFsj35-RSF1C4VTBlDGGQzP_7SxTlrwz_pe04i7BewXf9Ecz1eqhqnNjKCjY8YhrI6HkFoogqHVPSURohfHEvy4Y1HWqCDTHQXPgB1qEugvMdeTMaSseq3kE0m7qIMLVaMT2UO7QbjEMRO3P5o2ku-cHs6Ps8ZY_cfuV0vw9TQeV9F6Ad9ieXlw-noeW9Gbug1dY0uMyzRJjQdwCaJ68coDneUJi082xljoDr_saPzpzKy3wancbk1rSXgWOf9iS45skqYdvp5HOhVrqudnAPvozJhyQKpY2FJRLZpomGEZ12_tusGOz-lPX3Hb4csR8d9Tq2Ytf4or5sX98yXK0KcYbB6oy4T0=w450-h150-no?authuser=0"
    }
    , {
        comprado: false, armaduraF: 0, congelar: 0, roboVida: 0,
        nombre: "katana filosa", ataque: 3500,
        defensa: 1000, probCrit: 50, dmgCrit: 200,
        recuperacion: 30, vida: 1500, alcance: 1
        , url: "https://lh3.googleusercontent.com/UC3xiyNXJ4-jhQJCIJtuL_h9rtdr1pk-F0yDvvQIAhB9VffPsNbw5h4U9IMr-URpjaq3gKlr4MkApbGODS_cY31V7k6R2M5ytifGjr6ca3Mja8rihoNfvdsR8z_kyeFAAvkFbqCoujPLlEAOtHPmXpHheYSYn79JKYNhdT0yv7mFgt118e-O0-bqO5NYXUPz-W2VOT_X-fNzTLk-zAtI-laJklmGEqwP9xiOd-6cVkSR1Ljckjo8KT9CsR4dMF4Tz4hsmBUak6y9WbmgggSZzdvYcr22aP0pvSYijxzQ3Fw3A7e8yRImDeRaTnEaRyHteL9x29_1xjwfDRACse6yKNZuRfDzu_8j6m0BW6dnV8GtOjMlP5piq82JYEguiSYkOveW63bNfyBjobBixDgtbui-IEacWlxkMndcnqJ0Ql-XKMMb7hCJRgYZSJ04qo5tuMWFfSEIYYDsYBd08onmlRAbGQlFunKIyvRIOcmK9IqKT6vqDK5BT0auvNGaou7E4fjLe2E9RUEgVK53mYS7J5ws3GY_EHkdawSorGYANr0GiuVMDSChlcNPlWcBs5MY6Gx5W4BJySdIffySCPY4H1h-GMVk0DG14n4oplMP2ue9oPw83nmTLNLDc4vuWg9eDyRTaJ6P_MJHgPrO1pKhEEuUCSf_ngKDGRPFvOEjduyHWOMeUlhVW3-po8NgcZo=w450-h150-no?authuser=0"
    }
]

var infoPjs = [
    {
        comprado: true, armaduraF: 3000, congelar: 0, roboVida: 0,
        nombre: "Yohiro", vidamax: 3000
        , ataque: 1200, defensa: 7000, probCrit: 30
        , dmgCrit: 170, recuperacion: 50, chabilidad1: 10, chabilidad2: 30, chabilidad3: 70, chabilidad4: 100
        , url: "yohirostand.png"}
    ,
    {
        comprado: false, armaduraF: 1000, congelar: 25, roboVida: 10,
        nombre: "Rain", vidamax: 17000
        , ataque: 1800, defensa: 1000, probCrit: 40
        , dmgCrit: 120, recuperacion: 20, chabilidad1: 20, chabilidad2: 40, chabilidad3: 60, chabilidad4: 80
        , url: "rain.png"}
    , {
        comprado: false, armaduraF: 0, congelar: 0, roboVida: 40,
        nombre: "Ninja", vidamax: 25000
        , ataque: 1500, defensa: 500, probCrit: 20
        , dmgCrit: 200, recuperacion: 30, chabilidad1: 5, chabilidad2: 20, chabilidad3: 60, chabilidad4: 90
        , url: "ninja.png"}
    , {
        comprado: false, armaduraF: 0, congelar: 0, roboVida: 20,
        nombre: "Sol", vidamax: 15000
        , ataque: 1700, defensa: 400, probCrit: 70
        , dmgCrit: 250, recuperacion: 40, chabilidad1: 20, chabilidad2: 50, chabilidad3: 70, chabilidad4: 100
        , url: "sol.png"}
];

var enemigos = [

    {
        nombre: "Practica", vidamax: 10000, vida: 10000
        , ataque: 0, defensa: 100, probCrit: 0
        , dmgCrit: 0, recuperacion: 5
        , url: "practica.png"}
    ,
    {
        nombre: "Fuego", vidamax: 30000, vida: 30000
        , ataque: 2000, defensa: 500, probCrit: 50
        , dmgCrit: 200, recuperacion: 10
        , url: "fuegoso.png"}
    ,
    {
        nombre: "Pantano", vidamax: 50000, vida: 50000
        , ataque: 4000, defensa: 700, probCrit: 40
        , dmgCrit: 300, recuperacion: 40
        , url: "baboso.png"}
    ,
    {
        nombre: "Agua", vidamax: 110000, vida: 110000
        , ataque: 7000, defensa: 400, probCrit: 10
        , dmgCrit: 700, recuperacion: 100
        , url: "acuoso.png"
    }
    ,
    {
        nombre: "Trueno", vidamax: 200000, vida: 200000
        , ataque: 12000, defensa: 1000, probCrit: 80
        , dmgCrit: 500, recuperacion: 50
        , url: "electron.png"
        
        }
]

/*https://lh3.googleusercontent.com/gNX3yo-3ANKvhcFomG4ZqxKbmUp-Ls0Z7lOFAhEYqyKRGzbc3gWzcbJ9z1_2g1NUBtHkQ45AYSc3wRQRFlBV1y6E2AT3kqFanacYLCUkISd1QTfMl0BQ2AeGK1yixmVxRvcLGe9iuErlZG8VxUJ3IINNbpdor9UsSY_WyKof49DgpPKVx-YQdJQkG6fwnzxQDHC7qzINewlmqR8S9jbC2-X4_-iUTvHUu10Z_9cm99RHZpFr3zA9fA-kwHiO73mNTWnYD51FtHrptsJvGVar1PDPfq6iE8lWyRJpUG3pv2dYv-Qnwhayjq1wbfrFE6l-inB0dQyYfzfo-l1KAZwwcnLlZP_TI_pvA0RYyc2zF9nqbLyzX4KJC7uUdc9dsYsrGTdnUVMBZw_asVgz3WsygHeo1fvShNRVNQy9uQkWq-pGWnUmsoxGGuB_KMDi46rEcFqxlKb4rFnLVfL9I_o7K69WYwTaREwYG66NobgNm7pL9yOEh__iwpFW5yRDFdmJq06PuLrs00NStJCVlMpUxhDLk8WwZLOU4DlRdwS0SPx0Ojy1nKetTBfS8A8PyOI4WDQJNvU8UskiOknKvvrMMp-E31IBuDBEpaxiC3doeuZ0Ruqc-y5Efrwv19er-c6zQDS5DS6DWZyW6COGvRIjyRFuzok6q9qfbO0Kchh0-SiN8HnI9PgdokJCJcS3VEY=w50-h100-no?authuser=0"
     */

var venemigo1 = false;
var venemigo2 = false;
var venemigo3 = false;
var venemigo4 = false;
var venemigo5 = false;
var venemigo6 = false;
var venemigo7 = false;
var venemigo8 = false;
var venemigo9 = false;
var venemigo10 = false;
var venemigo11 = false;
var venemigo12 = false;
var venemigo13 = false;
var venemigo14 = false;
var venemigo15 = false;
var venemigo16 = false;

var pequipados = 0;

function actualizarTienda() {

    for (var e = 1; e < 7; e++) {

        document.getElementById("valorcosas" + e).textContent = "$" + preciocosas;

    }
    document.getElementById("tiendaH").textContent = ("Tienda $" + dinero);
    localStorage.setItem("dinero", dinero);

    for (var e = 1; e < 4; e++) {
        if (infoPjs[e].comprado) {
            document.getElementById("botonCompra" + e).hidden = true;
        }
    } for (var e = 1; e < 4; e++) {
        if (cual[e].comprado) {
            document.getElementById("botonCompraA" + e).hidden = true;
        }
    }

}


function actualizarVisualizacion() {
    // Actualizar la visualización de personajes comprados
    for (var e = 1; e < nPjs; e++) {
        var elementoPersonaje = document.getElementById("personaje" + (e));
        if (infoPjs[e - 1].comprado) {
            elementoPersonaje.style.backgroundColor = '#ffffff';
        } else {
            elementoPersonaje.style.backgroundColor = '#000000';
        }
    }

    // Actualizar la visualización de armas compradas
    for (var e = 1; e < nArmas; e++) {
        var elementoArma = document.getElementById("arma" + (e));
        if (cual[e - 1].comprado) {
            elementoArma.style.backgroundColor = '#ffffff';
        } else {
            elementoArma.style.backgroundColor = '#000000';
        }
    }
}

// Función para comprar personajes o armas
function comprar(o, n) {
    if (o === 1) { // Comprar personaje
        if (infoPjs[n - 1].comprado) {

        } else {
            if (dinero >= preciocosas) {
                dinero -= preciocosas;
                infoPjs[n - 1].comprado = true;
                localStorage.setItem("compradoP" + n, true);
                alert("Has comprado " + infoPjs[n - 1].nombre);
            } else {
                alert("No tienes suficiente dinero.");
            }
        }
    } else if (o === 2) { // Comprar arma
        if (cual[n - 1].comprado) {

        } else {
            if (dinero >= preciocosas) {
                dinero -= preciocosas;
                cual[n - 1].comprado = true;
                localStorage.setItem("comprado" + n, true);
                alert("Has comprado " + cual[n - 1].nombre);
            } else {
                alert("No tienes suficiente dinero.");
            }
        }
    }

    // Actualizar la visualización después de la compra
    actualizarVisualizacion();
    actualizarTienda();
}


function cosastienda() {
    for (var e = 1; e < nArmas; e++) {
        var comprada = localStorage.getItem("comprado" + (e));
        if (comprada !== null) {
            cual[e - 1].comprado = (comprada === 'true'); // Convertir string a booleano
        } else {
            localStorage.setItem("comprado" + (e), cual[e - 1].comprado);
        }
    }

    for (var e = 1; e < nPjs; e++) {
        var comprada = localStorage.getItem("compradoP" + (e));
        if (comprada !== null) {
            infoPjs[e - 1].comprado = (comprada === 'true'); // Convertir string a booleano
        } else {
            localStorage.setItem("compradoP" + (e), infoPjs[e - 1].comprado);
        }
    }
}


window.onload = function () {

    cosastienda();

    if (localStorage.getItem("nivelActual") != null) {
        nivelActual = parseInt(localStorage.getItem("nivelActual"));
    } else {
        localStorage.setItem("nivelActual", nivelActual);
    }

    if (localStorage.getItem("dinero") != null) {
        dinero = parseInt(localStorage.getItem("dinero"));
    } else {
        localStorage.setItem("dinero", dinero);
    }
    actualizarTienda();

    botones(1); botones(8);
    for (var e = 1; e < nArmas; e++) {
        var comprado = localStorage.getItem("compradoArma" + e);
        if (comprado !== null && JSON.parse(comprado) === true) {
            cual[e - 1].comprado = JSON.parse(comprado);
            comprar(2, e);
        }
    }

    for (var e = 1; e < nArmas; e++) {
        var comprado = localStorage.getItem("compradoPj" + e);
        if (comprado !== null && JSON.parse(comprado) === true) {
            infoPjs[e - 1].comprado = JSON.parse(comprado);
            comprar(1, e);
        }
    }

    nombre = localStorage.getItem("nombre");
    if (localStorage.getItem("nombre") == null) {
        nombre = prompt("Por favor, ingrese un nombre:")
        localStorage.setItem("nombre", nombre);
    }
    if (localStorage.getItem("armaequipada") != null) {
        narmaequipada = localStorage.getItem("armaequipada");
    }
    if (localStorage.getItem("pequipado") != null) {
        pequipado = localStorage.getItem("pequipado");
    }
    document.getElementById("pnombre").textContent = nombre + " nivel: " + nivelActual;

    for (var e = 1; e < nArmas; e++) {

        $("#arma" + e).append("<p>'" + cual[e - 1].nombre + "'</p>");
        $("#arma" + e).append("<img width='100%' src='" + cual[e - 1].url + "'>");


        document.getElementById("arma" + e).style.backgroundColor = "#ffffff";

    }
    for (var e = 1; e < nPjs; e++) {

        $("#personaje" + e).append("<img width='100%' src='" + infoPjs[e - 1].url + "'>");


        document.getElementById("personaje" + e).style.backgroundColor = "#ffffff";
    }

    for (var e = 1; e <= nenemigo; e++) {
        $("#mapa" + e).append("<img width'100%' src='" + enemigos[e - 1].url + "'>")

    }


    for (var e = 1; e < nArmas - 1; e++) {

        $("#pjArma" + e).append("<img width='100%' src='" + cual[e].url + "'>");

    }

    for (var e = 1; e < nPjs - 1; e++) {

        $("#pjTienda" + e).append("<img width='100%' src='" + infoPjs[e].url + "'>");

    }
    for (var e = 1; e < 4; e++) {
        if (infoPjs[e].comprado) {
            document.getElementById("botonCompra" + e).hidden = true;
        }
    } for (var e = 1; e < 4; e++) {
        if (cual[e].comprado) {
            document.getElementById("botonCompraA" + e).hidden = true;
        }
    }


    for (var e = 1; e < nArmas; e++) {

        document.getElementById("texto1arma" + e).textContent = ("Ataque: " + cual[e - 1].ataque + "");
        document.getElementById("texto2arma" + e).textContent = ("Defensa: " + cual[e - 1].defensa + "");
        document.getElementById("texto3arma" + e).textContent = ("Vida: " + cual[e - 1].vida + "");

    }
    for (var e = 1; e < nPjs; e++) {
        document.getElementById("texto1personaje" + e).textContent = ("Ataque: " + infoPjs[e - 1].ataque + "");
        document.getElementById("texto2personaje" + e).textContent = ("Defensa: " + infoPjs[e - 1].defensa + "");
        document.getElementById("texto3personaje" + e).textContent = ("Vida :  " + infoPjs[e - 1].vidamax + "");


    }

    elegir(pequipado);

    equipar(narmaequipada);

    infoMapa();
}
function infoMapa() {

    if (nivelActual >= 1) { venemigo1 = true; }
    if (nivelActual >= 2) { venemigo2 = true; document.getElementById("mapa2").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 3) { venemigo3 = true; document.getElementById("mapa3").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 4) { venemigo4 = true; document.getElementById("mapa4").style.backgroundColor = "#ffffff"; }

    if (nivelActual >= 5) { venemigo5 = true; document.getElementById("mapa5").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 6) { venemigo6 = true; document.getElementById("mapa6").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 7) { venemigo7 = true; document.getElementById("mapa7").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 8) { venemigo8 = true; document.getElementById("mapa8").style.backgroundColor = "#ffffff"; }

    if (nivelActual >= 9) { venemigo9 = true; document.getElementById("mapa9").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 10) { venemigo10 = true; document.getElementById("mapa10").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 11) { venemigo11 = true; document.getElementById("mapa11").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 12) { venemigo12 = true; document.getElementById("mapa12").style.backgroundColor = "#ffffff"; }

    if (nivelActual >= 13) { venemigo13 = true; document.getElementById("mapa13").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 14) { venemigo14 = true; document.getElementById("mapa14").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 15) { venemigo15 = true; document.getElementById("mapa15").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 16) { venemigo16 = true; document.getElementById("mapa216").style.backgroundColor = "#ffffff"; }
    consumirEnergiaC(width);
}
function botones(n) {

    if (n == 1) {
        mostrar('inicio'); esconder('tienda'); esconder('inventario'); esconder('algo');
        document.getElementById("botoninicio").style.backgroundColor = colorRan();

        document.getElementById("botontienda").style.backgroundColor = "#ffffff";
        document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
        document.getElementById("botonalgo").style.backgroundColor = "#ffffff";
    } else if (n == 2) {
        mostrar('tienda'); esconder('inicio'); esconder('inventario'); esconder('algo');

        document.getElementById("botontienda").style.backgroundColor = colorRan();
        document.getElementById("botoninicio").style.backgroundColor = "#ffffff";
        document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
        document.getElementById("botonalgo").style.backgroundColor = "#ffffff";

    } else if (n == 3) {
        mostrar('inventario'); esconder('inicio'); esconder('tienda'); esconder('algo');

        document.getElementById("botoninventario").style.backgroundColor = colorRan();
        document.getElementById("botontienda").style.backgroundColor = "#ffffff";
        document.getElementById("botoninicio").style.backgroundColor = "#ffffff";
        document.getElementById("botonalgo").style.backgroundColor = "#ffffff";

    } else if (n == 4) {
        mostrar('algo'); esconder('inicio'); esconder('tienda'); esconder('inventario');

        document.getElementById("botonalgo").style.backgroundColor = colorRan();
        document.getElementById("botontienda").style.backgroundColor = "#ffffff";
        document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
        document.getElementById("botoninicio").style.backgroundColor = "#ffffff";

    } else if (n == 5) {
        esconder('inicio'); mostrar('juego'); esconder('botoninicio'); esconder('botoninventario'); esconder('botontienda'); esconder('botonalgo');
    } else if (n == 6) { esconder("batalla"); mostrar('inicio'); esconder('juego'); mostrar('botoninicio'); mostrar('botoninventario'); mostrar('botontienda'); mostrar('botonalgo'); }
    else if (n == 7) { mostrar('armas'); esconder('personajes'); }
    else if (n == 8) { mostrar('personajes'); esconder('armas'); }
    else if (n == 9) {

        mostrar('juego'), esconder('batalla'); for (var e = 1; e < nenemigo; e++) {
            enemigos[e - 1].vida = enemigos[e - 1].vidamax;
        } personajeElegido.vida = personajeElegido.vidamax; detenerAtaquesIA(); consumirEnergia(width);
    }

    document.getElementById("pnombre").textContent = nombre + " nivel: " + nivelActual;

}
function equipar(n) {
    narmaequipada = n;

    if (cual[n - 1].comprado == true) {

        localStorage.setItem("armaequipada", narmaequipada);

        $("#armaequipada").empty().append("<img width='100%' src='" + cual[narmaequipada - 1].url + "'>");
        $("#armaequipada").append('<p>' + cual[narmaequipada - 1].nombre + " Ataque: " + cual[narmaequipada - 1].ataque + " Defensa: " + cual[narmaequipada - 1].defensa + " Prob Crti: " + cual[narmaequipada - 1].probCrit + "</p>");
        $("#contenedorArma").empty().append("<img width='100%' src='" + cual[narmaequipada - 1].url + "'>");

        for (var e = 1; e < nArmas; e++) {
            if (cual[e - 1].comprado == true) {
                document.getElementById("arma" + e).style.backgroundColor = '#ffffff';
            } else {
                document.getElementById("arma" + e).style.backgroundColor = '#000000';

            }
        }

        document.getElementById("arma" + narmaequipada).style.backgroundColor = '#ffff00';

    }
    estadisticas();

}
function elegir(n) {
    pequipados = localStorage.getItem("pequipado");
    pequipado = n;

    if (infoPjs[n - 1].comprado == true) {

        localStorage.setItem("pequipado", pequipado);
        $("#personajeElegido").empty().append("<img width='100%' src='" + infoPjs[pequipado - 1].url + "'>");
        $("#contenedorPj").empty().append("<img width='100%' src='" + infoPjs[pequipado - 1].url + "'>");


        for (var e = 1; e < nArmas; e++) {
            document.getElementById("personaje" + e).style.backgroundColor = '#ffffff';

            if (infoPjs[e - 1].comprado == true) {
                document.getElementById("personaje" + e).style.backgroundColor = '#ffffff';
            } else {
                document.getElementById("personaje" + e).style.backgroundColor = '#000000';

            }

        }
        document.getElementById("personaje" + pequipado).style.backgroundColor = '#ffff00';

    }
    estadisticas();
}

function barraDeVida(vidaMax, vidaActual, barraId) {
    var barraDeVida = document.getElementById(barraId);
    var porcentajeVida = (vidaActual / vidaMax) * 100;
    barraDeVida.style.width = porcentajeVida + '%';
    barraDeVida.innerText = vidaActual + ' / ' + vidaMax;
}


function enemigo(n) {
    var confirmacion = false;
    switch (n) {
        case 1: if (venemigo1) {
            confirmacion = true; enemigoac = n;
        } case 2: if (venemigo2) {
            confirmacion = true; enemigoac = n;
        } case 3: if (venemigo3) {
            confirmacion = true; enemigoac = n;
        } case 4: if (venemigo4) {
            confirmacion = true; enemigoac = n;
        } case 5: if (venemigo5) {
            confirmacion = true; enemigoac = n;
        } case 6: if (venemigo6) {
            confirmacion = true; enemigoac = n;
        } case 7: if (venemigo7) {
            confirmacion = true; enemigoac = n;
        } case 8: if (venemigo8) {
            confirmacion = true; enemigoac = n;
        } case 9: if (venemigo9) {
            confirmacion = true; enemigoac = n;
        } case 10: if (venemigo10) {
            confirmacion = true; enemigoac = n;
        } case 11: if (venemigo11) {
            confirmacion = true; enemigoac = n;
        } case 12: if (venemigo12) {
            confirmacion = true; enemigoac = n;
        } case 13: if (venemigo13) {
            confirmacion = true; enemigoac = n;
        } case 14: if (venemigo14) {
            confirmacion = true; enemigoac = n;
        } case 15: if (venemigo15) {
            confirmacion = true; enemigoac = n;
        } case 16: if (venemigo16) {
            confirmacion = true; enemigoac = n;
        }
    }

    if (confirmacion) {
        cosa(n);
    }
    eimagen();
    reiniciarConsumirEnergia(width); consumirEnergiaB(widthB); consumirEnergiaC(width);
    iniciarRelleno(); iniciarRellenoB(); iniciarAtaquesIA();
}

/* mostrar estadisticas del enemigo*/

function cosa(n) {
    enemigoac = n;
    var estats = enemigos[n - 1];

    document.getElementById("pnombreE").textContent = estats.nombre;
    document.getElementById("pvidaE").textContent = estats.vidamax;
    document.getElementById("pataqueE").textContent = estats.ataque;
    document.getElementById("pdefensaE").textContent = estats.defensa;
    barraDeVida(estats.vidamax, estats.vida, "barraVidaE");
    mostrar("batalla"); personajeBatalla();
}

function personajeBatalla() {

    document.getElementById("pnombreP").textContent = personajeElegido.nombre;
    document.getElementById("pvidaP").textContent = personajeElegido.vidamax;
    document.getElementById("pataqueP").textContent = personajeElegido.ataque;
    document.getElementById("pdefensaP").textContent = personajeElegido.defensa;

    barraDeVida(personajeElegido.vidamax, personajeElegido.vida, "barraVidaP");

}


/*funcion de cargar estadisticas base para el personaje elegido en base al arma equipada*/



function estadisticas() {

    personajeElegido.nombre = infoPjs[pequipado - 1].nombre;
    personajeElegido.vidamax = parseInt(infoPjs[pequipado - 1].vidamax) + parseInt(cual[narmaequipada - 1].vida);
    personajeElegido.vida = parseInt(infoPjs[pequipado - 1].vidamax) + parseInt(cual[narmaequipada - 1].vida);
    personajeElegido.ataque = parseInt(infoPjs[pequipado - 1].ataque) + parseInt(cual[narmaequipada - 1].ataque);
    personajeElegido.defensa = parseInt(infoPjs[pequipado - 1].defensa) + parseInt(cual[narmaequipada - 1].defensa);
    personajeElegido.probCrit = (parseInt(infoPjs[pequipado - 1].probCrit) + parseInt(cual[narmaequipada - 1].probCrit));
    personajeElegido.url = infoPjs[pequipado - 1].url;
    personajeElegido.recuperacion = infoPjs[pequipado - 1].recuperacion;
    personajeElegido.dmgCrit = parseInt(infoPjs[pequipado - 1].dmgCrit) + parseInt(cual[narmaequipada - 1].dmgCrit);
    personajeElegido.recuperacion = parseInt(infoPjs[pequipado - 1].recuperacion) + parseInt(cual[narmaequipada - 1].recuperacion);

    personajeElegido.armaduraF = parseInt(infoPjs[pequipado - 1].armaduraF) + parseInt(cual[narmaequipada - 1].armaduraF);

    personajeElegido.congelar = parseInt(infoPjs[pequipado - 1].congelar) + parseInt(cual[narmaequipada - 1].congelar);

    personajeElegido.roboVida = parseInt(infoPjs[pequipado - 1].roboVida) + parseInt(cual[narmaequipada - 1].roboVida);

    personajeElegido.chabilidad1 = parseInt(infoPjs[pequipado - 1].chabilidad1);
    personajeElegido.chabilidad2 = parseInt(infoPjs[pequipado - 1].chabilidad2);

    personajeElegido.chabilidad3 = parseInt(infoPjs[pequipado - 1].chabilidad3);

    personajeElegido.chabilidad4 = parseInt(infoPjs[pequipado - 1].chabilidad4);

    nombreArmaelegido.textContent = '' + cual[narmaequipada - 1].nombre;

    nombrePjelegido.textContent = '' + infoPjs[pequipado - 1].nombre;

    defensaPj.textContent = "Defensa: " + personajeElegido.defensa;

    ataquePj.textContent = "Ataque: " + personajeElegido.ataque;

    probCritPj.textContent = "Vida: " + personajeElegido.vidamax;

    document.getElementById("thabilidad1").textContent = personajeElegido.chabilidad1;

    document.getElementById("thabilidad2").textContent = personajeElegido.chabilidad2;

    document.getElementById("thabilidad3").textContent = personajeElegido.chabilidad3;

    document.getElementById("thabilidad4").textContent = personajeElegido.chabilidad4;

}

function eimagen() {
    $("#contieneImagenP").empty().append("<img width='100%' src='" + personajeElegido.url + "'>");

    $("#contieneImagenE").empty().append("<img width='100%' src='" + enemigos[enemigoac - 1].url + "'>");

}


var width = 0;
var maxWidth = 100;
var intervalo;



function iniciarRelleno() {
    clearInterval(intervalo);
    intervalo = setInterval(function () {
        if (width >= maxWidth) {
            clearInterval(intervalo);
        } else {
            width++;
            actualizarBarra();
        }
    }, personajeElegido.recuperacion); // Ajusta el tiempo (100 ms) para cambiar la velocidad de relleno
}
var dineroganado = 0;
function consumirEnergiaC(n) {
    clearInterval(intervaloB);
    var consumo = n; // Cantidad de energía a consumir
    if (width >= consumo) {
        width = Math.max(0, width - consumo);
        document.getElementById('barra-energia').style.backgroundColor = colorRan();
    }
    actualizarBarra();
    iniciarRelleno(); // Reinicia el relleno después de consumir
}
function verificarCongelacion() {
    if (eCongelado) {
        // Si el enemigo está congelado, entonces lo descongelamos
        eCongelado = false;
        document.getElementById("barraVidaE").style.backgroundColor = "#ff0000"; // Rojo para descongelado
    } else {
        // Si no está congelado, calculamos si debe congelarse
        eCongelado = Math.random() * 100 < personajeElegido.congelar;
        if (eCongelado) {
            document.getElementById("barraVidaE").style.backgroundColor = "#00bbff"; // Azul para congelado
        } else {
            document.getElementById("barraVidaE").style.backgroundColor = "#ff0000"; // Rojo para descongelado (por si acaso)
        }
    }
}


function consumirEnergia(n) {
    clearInterval(intervalo);
    var consumo = n; // Cantidad de energía a consumir
    if (width >= consumo) {
        width = Math.max(0, width - consumo);
        document.getElementById('barra-energia').style.backgroundColor = colorRan();

        var estats = enemigos[enemigoac - 1];
        var golpe = 0;
        var esCritico = Math.random() * 100 < personajeElegido.probCrit;
        if (esCritico) {

            golpe = Math.ceil(consumo / 100 * personajeElegido.ataque * ((consumo / 100) * personajeElegido.dmgCrit / 100))
            estats.vida -= golpe;

            console.log(golpe);
        } else {

            golpe = consumo / 100 * personajeElegido.ataque;
            estats.vida -= golpe;
            console.log(consumo / 100 * personajeElegido.ataque);
        }
        // Aplicar robo de vida al personaje
        var roboDeVida = Math.ceil(golpe * (personajeElegido.roboVida / 100));
        if (personajeElegido.vida < personajeElegido.vidamax) {
            personajeElegido.vida += roboDeVida;
            if (personajeElegido.vida > personajeElegido.vidamax) {
                personajeElegido.vida = personajeElegido.vidamax;
            }
        }


        // Llamada a la función para verificar y aplicar congelación
        verificarCongelacion();


        // Asegurarse de que la vida del personaje no exceda su vida máxima

        document.getElementById("pnombreE").textContent = estats.nombre;
        document.getElementById("pvidaE").textContent = estats.vida;
        document.getElementById("pataqueE").textContent = estats.ataque;
        document.getElementById("pdefensaE").textContent = estats.defensa;

        barraDeVida(estats.vidamax, estats.vida, "barraVidaE");
        if (estats.vida <= 0) {
            dineroganado = nivelActual * 100 * enemigoac; dinero += nivelActual * 100 * enemigoac;
            actualizarTienda();
            alert("Venciste a " + estats.nombre + " Dinero $" + dineroganado);
            console.log("n " + enemigoac)
            if (enemigoac >= nivelActual && nivelActual < 5) {
                nivelActual++;
            }
            localStorage.setItem("nivelActual", nivelActual);
            estats.vida = estats.vidamax;
            infoMapa();
            botones(9);
            consumirEnergia(0);
        }
    } barraDeVida(personajeElegido.vidamax, personajeElegido.vida, "barraVidaP");

    actualizarBarra();
    iniciarRelleno(); // Reinicia el relleno después de consumir
}

function actualizarBarra() {
    var barra = document.getElementById('barra-energia');
    barra.style.width = width + '%';

    if (width == personajeElegido.chabilidad1) {

        barra.style.backgroundColor = colorRan();
    }

    if (width == personajeElegido.chabilidad2) {

        barra.style.backgroundColor = colorRan();
    } else if (width == personajeElegido.chabilidad3) {

        barra.style.backgroundColor = colorRan();
    } else if (width == personajeElegido.chabilidad4) {

        barra.style.backgroundColor = colorRan();
    }
    barra.innerText = width + '/ 100';
}


var widthB = 0;
var maxWidthB = 100;
var intervaloB;
var ataques = {
    nivel1: { energia: 25, daño: 25 },
    nivel2: { energia: 50, daño: 50 },
    nivel3: { energia: 75, daño: 75 },
    nivel4: { energia: 100, daño: 100 }
};

function iniciarRellenoB() {
    clearInterval(intervaloB);
    intervaloB = setInterval(function () {
        if (widthB >= maxWidthB) {
            clearInterval(intervaloB);
        } else {
            widthB++;
            actualizarBarraB();
        }
    }, 100); // Ajusta el tiempo (100 ms) para cambiar la velocidad de relleno
}

function reiniciarConsumirEnergia(n) {
    clearInterval(intervalo);
    var consumo = n; // Cantidad de energía a consumir
    if (widthB >= consumo) {
        widthB = Math.max(0, widthB - consumo);
    }
    actualizarBarraB();
    iniciarRellenoB(); // Reinicia el relleno después de consumir
}

function consumirEnergiaB(n) {
    clearInterval(intervaloB);
    var consumo = n; // Cantidad de energía a consumir
    if (widthB >= consumo) {
        widthB = Math.max(0, widthB - consumo);
        document.getElementById('barra-energiaB').style.backgroundColor = colorRan();
    }
    actualizarBarraB();
    iniciarRellenoB(); // Reinicia el relleno después de consumir
}

function actualizarBarraB() {
    var barra = document.getElementById('barra-energiaB');
    barra.style.width = widthB + '%';

    if (widthB == 25) {
        barra.style.backgroundColor = colorRan();
    } else if (widthB == 50) {
        barra.style.backgroundColor = colorRan();
    } else if (widthB == 75) {
        barra.style.backgroundColor = colorRan();
    } else if (widthB == 100) {
        barra.style.backgroundColor = colorRan();
    }
    barra.innerText = widthB + '/ 100';
}

var eCongelado = false;

function atacarIA() {
    // Generar un número aleatorio entre 0 y 1 para decidir si atacar o esperar

    if (!eCongelado) {

        var probabilidadAtaque = Math.random();

        if (widthB >= ataques.nivel4.energia && probabilidadAtaque <= 0.25) {
            // Realizar ataque de nivel 4 (100%)
            var daño = ataques.nivel4.daño;
            var consumoEnergia = ataques.nivel4.energia;
            realizarAtaque('nivel4', daño);
            consumirEnergiaB(consumoEnergia);

            // Verificar si el personaje elegido tiene armadura de fuego y aplicar rebote de daño
            if (personajeElegido.armaduraF > 0) {
                var dañoRebotado = Math.ceil(daño * (personajeElegido.armaduraF / 100));
                enemigos[enemigoac - 1].vida -= dañoRebotado;
                console.log('¡El personaje elegido tiene armadura de fuego! Rebote de daño: ' + dañoRebotado);

                // Asegurar que la vida del enemigo no sea menor que 0
                if (enemigos[enemigoac - 1].vida <= 0) {
                    // Manejar la derrota del enemigo
                    // Puedes implementar aquí la lógica necesaria cuando el enemigo muere
                }
            }
        } else if (widthB >= ataques.nivel3.energia && probabilidadAtaque <= 0.50) {
            // Realizar ataque de nivel 3 (75%)
            var daño = ataques.nivel3.daño;
            var consumoEnergia = ataques.nivel3.energia;
            realizarAtaque('nivel3', daño);
            consumirEnergiaB(consumoEnergia);

            if (personajeElegido.armaduraF > 0) {
                var dañoRebotado = Math.ceil(daño * (personajeElegido.armaduraF / 100));
                enemigos[enemigoac - 1].vida -= dañoRebotado;
                console.log('¡El personaje elegido tiene armadura de fuego! Rebote de daño: ' + dañoRebotado);

                if (enemigos[enemigoac - 1].vida <= 0) {
                    // Manejar la derrota del enemigo
                }
            }
        } else if (widthB >= ataques.nivel2.energia && probabilidadAtaque <= 0.75) {
            // Realizar ataque de nivel 2 (50%)
            var daño = ataques.nivel2.daño;
            var consumoEnergia = ataques.nivel2.energia;
            realizarAtaque('nivel2', daño);
            consumirEnergiaB(consumoEnergia);

            if (personajeElegido.armaduraF > 0) {
                var dañoRebotado = Math.ceil(daño * (personajeElegido.armaduraF / 100));
                enemigos[enemigoac - 1].vida -= dañoRebotado;
                console.log('¡El personaje elegido tiene armadura de fuego! Rebote de daño: ' + dañoRebotado);

                if (enemigos[enemigoac - 1].vida <= 0) {
                    // Manejar la derrota del enemigo
                }
            }
        } else if (widthB >= ataques.nivel1.energia) {
            // Realizar ataque de nivel 1 (25%)
            var daño = ataques.nivel1.daño;
            var consumoEnergia = ataques.nivel1.energia;
            realizarAtaque('nivel1', daño);
            consumirEnergiaB(consumoEnergia);

            if (personajeElegido.armaduraF > 0) {
                var dañoRebotado = Math.ceil(daño * (personajeElegido.armaduraF / 100));
                enemigos[enemigoac - 1].vida -= dañoRebotado;
                console.log('¡El personaje elegido tiene armadura de fuego! Rebote de daño: ' + dañoRebotado);

                if (enemigos[enemigoac - 1].vida <= 0) {
                    // Manejar la derrota del enemigo
                }
            }
        } else {
            console.log('No hay suficiente energía para atacar');
        }
    } else {
        console.log("enemigo congelado");
    }
    var estats = enemigos[enemigoac - 1];

    if (estats.vida <= 0) {
        consumirEnergia(0);
    }
    if (personajeElegido.vida > personajeElegido.vidamax) {
        personajeElegido.vida = personajeElegido.vidamax;
    }

    barraDeVida(estats.vidamax, estats.vida, "barraVidaE");

}

function realizarAtaque(nivel, daño) {

    personajeElegido.vida -= (enemigos[enemigoac - 1].ataque / 100 * daño);
    if (personajeElegido.vida < personajeElegido.vidamax) {
        personajeElegido.vida += +(personajeElegido.defensa / 100);
        if (personajeElegido.vida > personajeElegido.vidamax) {
            personajeElegido.vida = personajeElegido.vidamax;
        }
    }

    barraDeVida(personajeElegido.vidamax, personajeElegido.vida, "barraVidaP");

    if (personajeElegido.vida <= 0) {
        alert("Derrotado"); botones(9);
    }

    console.log(`La IA realiza un ataque ${nivel} causando ${daño} de daño`);
    // Aquí puedes agregar la lógica para aplicar el daño al enemigo
}

var intervaloAtaquesIA; // Variable para guardar el intervalo de ataques de la IA

function iniciarAtaquesIA() {
    intervaloAtaquesIA = setInterval(atacarIA, 2000); // La IA intenta atacar cada 2 segundos
}


function detenerAtaquesIA() {
    clearInterval(intervaloAtaquesIA);
}
