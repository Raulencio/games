
    
       var level = 1;
       var madera = 0;
       var comida = 0;
       var oros = 0;
       var exp = 0;
       var preciopescado = 1;
       var preciomadera = 1;
       var precioayudantemadera = 100;
       var precioayudantepescado = 100;
       var numeroayudantemadera = 1;
       var numeroayudantepescado = 1;

       function algo(){
           esconder("btn1");
           mostrar("contenedor");
           datos();
       }

       function cargarDatos() {
           if (localStorage.getItem("comida") != null) { comida = Number(localStorage.getItem("comida")); }    
           if (localStorage.getItem("oros") != null) { oros = Number(localStorage.getItem("oros")); }    
           if (localStorage.getItem("level") != null) { level = Number(localStorage.getItem("level")); }    
           if (localStorage.getItem("exp") != null) { exp = Number(localStorage.getItem("exp")); }  
           if (localStorage.getItem("madera") != null) { madera = Number(localStorage.getItem("madera")); } 
           if (localStorage.getItem("preciopescado") != null) { preciopescado = Number(localStorage.getItem("preciopescado")); }   
           if (localStorage.getItem("preciomadera") != null) { preciomadera = Number(localStorage.getItem("preciomadera")); }   
           if (localStorage.getItem("numeroayudantemadera") != null) { numeroayudantemadera = Number(localStorage.getItem("numeroayudantemadera")); }   
           if (localStorage.getItem("numeroayudantepescado") != null) { numeroayudantepescado = Number(localStorage.getItem("numeroayudantepescado")); }   
           if (localStorage.getItem("precioayudantemadera") != null) { precioayudantemadera = Number(localStorage.getItem("precioayudantemadera")); }   
           if (localStorage.getItem("precioayudantepescado") != null) { precioayudantepescado = Number(localStorage.getItem("precioayudantepescado")); }   
       }

       function guardarDatos() {
           localStorage.setItem("comida", comida);
           localStorage.setItem("oros", oros);
           localStorage.setItem("level", level);
           localStorage.setItem("exp", exp);
           localStorage.setItem("madera", madera);
           localStorage.setItem("preciopescado", preciopescado);
           localStorage.setItem("preciomadera", preciomadera);
           localStorage.setItem("numeroayudantepescado", numeroayudantepescado);
           localStorage.setItem("numeroayudantemadera", numeroayudantemadera);
           localStorage.setItem("precioayudantepescado", precioayudantepescado);
           localStorage.setItem("precioayudantemadera", precioayudantemadera);
       }

       function experienceForNextLevel(level) {
           return 100 * Math.pow(2, level - 2);
       }

       function addExperience(expAmount) {
           exp += expAmount;
           let experienceForNext = experienceForNextLevel(level);
           while (exp >= experienceForNext) {
               exp -= experienceForNext;
               level++;
               experienceForNext = experienceForNextLevel(level);
           }
           guardarDatos();
           datos();
       }

       function datos() {
           document.getElementById("texto2").textContent = " Madera: " + madera + " Comida: " + comida;
           document.getElementById("texto3").textContent = " Nivel: " + level + " Oro: " + oros + " Exp: " + exp;
           document.getElementById("textoayudantepescado").textContent = "$" + precioayudantepescado + " Pescador +1 precio pescado + 1 exp por vender";
           document.getElementById("textoayudantemadera").textContent = "$" + precioayudantemadera + " Leñador +1 precio madera + 1 exp por vender";
           guardarDatos();
       }

       function abrirtienda() {
           mostrar("tienda");
       }

       function cerrartienda() {
           esconder("tienda");
       }



function actualizarNivel() {
    // Definir la relación entre el nivel y la experiencia
    var experienciaNivelAnterior = Math.pow(2, level); // Experiencia necesaria para el nivel actual
    var experienciaNivelSiguiente = Math.pow(2, level + 1); // Experiencia necesaria para el siguiente nivel

    // Comprobar si se alcanzó la experiencia necesaria para subir de nivel
    if (exp >= experienciaNivelSiguiente) {
        level++; // Aumentar el nivel
        // Actualizar la interfaz con el nuevo nivel
        document.getElementById("texto3").textContent = "Nivel: " + level + " Oro: " + oros + " Exp: " + exp;
        // Llamar recursivamente para verificar si se puede subir de nivel nuevamente
        actualizarNivel();
    }
}
       function venderMadera() {
        var cantidadMadera = parseInt(document.getElementById("cantidadMadera").value);
        if (!isNaN(cantidadMadera) && cantidadMadera > 0 && madera >= cantidadMadera) {
            madera -= cantidadMadera;
            oros += cantidadMadera * preciomadera;
            exp += cantidadMadera * preciomadera;
            actualizarNivel(); // Actualizar nivel
            datos();
            guardarDatos(); // Guardar los cambios en el localStorage
        } else {
            alert("La cantidad de madera ingresada no es válida o no tienes suficiente.");
        }
    }
    
    function venderPescado() {
        var cantidadPescado = parseInt(document.getElementById("cantidadPescado").value);
        if (!isNaN(cantidadPescado) && cantidadPescado > 0 && comida >= cantidadPescado) {
            comida -= cantidadPescado;
            oros += cantidadPescado * preciopescado;
            exp += cantidadPescado * preciopescado;
            actualizarNivel(); // Actualizar nivel
            datos();
            guardarDatos(); // Guardar los cambios en el localStorage
        } else {
            alert("La cantidad de pescado ingresada no es válida o no tienes suficiente.");
        }
    }
    
    function pescar() {
        comida += (1 + numeroayudantepescado);
        exp += preciopescado;
        
        actualizarNivel(); // Actualizar nivel
        datos();
    }
    
    function talar() {
        madera += (1 + numeroayudantemadera);
        exp += preciomadera;
        actualizarNivel(); // Actualizar nivel
        datos();
    }
   
    

    function ayudantemadera() {
        if (oros >= precioayudantemadera) {
            preciomadera++;
            oros -= precioayudantemadera;
            precioayudantemadera += 100; // Aumentar el precio en 100
            numeroayudantemadera++;
            var experienciaGanada = level * 10; // Experiencia ganada proporcional al nivel actual
            exp += experienciaGanada;
            actualizarNivel(); // Actualizar nivel
        } else {
            alert("No hay suficiente oro.");
        }
        datos();
    }
    
    function ayudantepescado() {
        if (oros >= precioayudantepescado) {
            preciopescado++;
            oros -= precioayudantepescado;
            precioayudantepescado += 100; // Aumentar el precio en 100
            numeroayudantepescado++;
            var experienciaGanada = level * 10; // Experiencia ganada proporcional al nivel actual
            exp += experienciaGanada;
            actualizarNivel(); // Actualizar nivel
        } else {
            alert("No hay suficiente oro.");
        }
        datos();
    }

       function mostrar(id) {
           document.getElementById(id).style.display = 'block';
       }

       function esconder(id) {
           document.getElementById(id).style.display = 'none';
       }

       window.onload = function () {
           mostrar("btn1");
           cargarDatos();
           datos();
       }
    
    /*



/*<!DOCTYPE html>
<html lang="es">
<head>    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/colores.css">
    <title>beta</title>
</head>
<body>
<div class="fondo">

    <div class="menu">
        <input type="button" value="JUGAR" id="btn1" class="texto" onclick="algo()" hidden="true">
        
    </div>
    <div class="contenedor" id="contenedor" hidden="true" >    

        <div class="casa" onclick=abrirtienda()></div>
        <div class="bosque" onclick=talar()></div>
        <div class="rio" onclick=pescar()></div>
        

        <div class="texto3">
            <p id="texto3">Nivel:    oro: </p>
        </div>

        <div class="texto2">
            <p id="texto2">Madera:    Comida: </p>
        </div>
        <div class="tienda" id="tienda" hidden="true" >
            <div class="cerrartienda" onclick=cerrartienda()></div>

            <p class="texto3">Tienda</p>
            <div class="vender1" onclick=vendermadera()>
    
                vender madera
            </div>

            <div class="vender2" onclick=venderpescado()>
    
                vender pescado
            </div>
            <div class="comprar1" onclick=ayudantemadera()>
                
                <p id="textoayudantemadera"></p>
            </div>

            <div class="comprar2" onclick=ayudantepescado()>
                 
                <p id="textoayudantepescado"></p>
            
            </div>




        </div>
    </div>
</div>
<script src="js/skrips.js"></script>
<script src="js/windouh.js"></script>
</body>
</html>
var level=0;
var madera=0;
var comida=0;
var oros=0;
var exp=0;
var preciopescado=1;
var preciomadera=1;
var precioayudantemadera=100;
var precioayudantepescado=100;

var numeroayudantemadera=1;
var numeroayudantepescado=1;

function algo(){
    esconder("btn1");
    mostrar("contenedor");
    datos();
    }
window.onload=function(){
    mostrar("btn1");
    cargarDatos()

}


function cargarDatos(){
    if(localStorage.getItem("comida") != null) { comida = Number(localStorage.getItem("comida")); }    
    if(localStorage.getItem("oros") != null) { oros = Number(localStorage.getItem("oros")); }    
    if(localStorage.getItem("level") != null) { level = Number(localStorage.getItem("level")); }    
    if(localStorage.getItem("exp") != null) { exp = Number(localStorage.getItem("exp")); }  
    if(localStorage.getItem("madera") != null) { madera = Number(localStorage.getItem("madera")); } 
    if(localStorage.getItem("preciopescado") != null) { preciopescado = Number(localStorage.getItem("preciopescado")); }   
    if(localStorage.getItem("preciomadera") != null) { preciomadera = Number(localStorage.getItem("preciomadera")); }   
    if(localStorage.getItem("numeroayudantemadera") != null) { numeroayudantemadera = Number(localStorage.getItem("numeroayudantemadera")); }   
    if(localStorage.getItem("numeroayudantepescado") != null) { numeroayudantepescado = Number(localStorage.getItem("numeroayudantepescado")); }   
    if(localStorage.getItem("precioayudantemadera") != null) { precioayudantemadera = Number(localStorage.getItem("precioayudantemadera")); }  // Cargar el precio del ayudante de madera
    if(localStorage.getItem("precioayudantepescado") != null) { precioayudantepescado = Number(localStorage.getItem("precioayudantepescado")); }  // Cargar el precio del ayudante de pescado
}


function guardarDatos(){
    localStorage.setItem("comida", comida);
    localStorage.setItem("oros", oros);
    localStorage.setItem("level", level);
    localStorage.setItem("exp", exp);
    localStorage.setItem("madera", madera);
    localStorage.setItem("preciopescado", preciopescado);
    localStorage.setItem("preciomadera", preciomadera);
    localStorage.setItem("numeroayudantepescado", numeroayudantepescado);
    localStorage.setItem("numeroayudantemadera", numeroayudantemadera);
    localStorage.setItem("precioayudantepescado", precioayudantepescado); // Guardar el precio del ayudante de pescado
    localStorage.setItem("precioayudantemadera", precioayudantemadera); // Guardar el precio del ayudante de madera
}


function datos(){
    document.getElementById("texto2").textContent=" Madera: "+madera+" Comida: "+comida ;
    document.getElementById("texto3").textContent=" Nivel: "+level+" Oro: "+oros+" Exp:"+exp ;
    document.getElementById("textoayudantepescado").textContent="$"+precioayudantepescado+" Pescador +1 precio pescado + 1 exp por vender";
    document.getElementById("textoayudantemadera").textContent="$"+precioayudantemadera+" Leñador +1 precio madera + 1 exp por vender";


   guardarDatos();
}


function pescar(){
    comida += (1 + (numeroayudantepescado )); // Incrementar la cantidad de comida recolectada, teniendo en cuenta el número de ayudantes
    exp += preciopescado;
    datos();
}

function talar(){
    madera += (1 + (numeroayudantemadera)); // Incrementar la cantidad de madera recolectada, teniendo en cuenta el número de ayudantes
    exp += preciomadera;
    datos();
}
function abrirtienda(){
    mostrar("tienda");
}
function cerrartienda(){
    esconder("tienda");
}

function vendermadera(){
    if(madera>=1){
    madera--;
    oros=oros+preciomadera;
    exp=exp+preciomadera;}else{alert("no hay suficientes recursos")}
    datos();
}

function venderpescado(){
if(comida>=1){
    comida--;
    oros=oros+preciopescado;
    exp=exp+preciopescado;}else{alert("no hay suficientes recursos")}
    datos();
}

        function ayudantemadera(){
            if(oros >= precioayudantemadera){
                preciomadera++;
                oros -= precioayudantemadera;
                precioayudantemadera += 100; // Aumentar el precio en 100
                numeroayudantemadera++;
            } else {
                alert("No hay suficiente oro.");
            }
            datos();
        }
        
        function ayudantepescado(){
            if(oros >= precioayudantepescado){
                preciopescado++;
                oros -= precioayudantepescado;
                precioayudantepescado += 100; // Aumentar el precio en 100
                numeroayudantepescado++;
            } else {
                alert("No hay suficiente oro.");
            }
            datos();
        }*/