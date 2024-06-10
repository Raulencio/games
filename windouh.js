
    

var level=0;
var madera=0;
var comida=0;
var oros=0;
var exp=0;
function algo(){
    esconder("btn1")
    mostrar("contenedor")
    datos()
    }
window.onload=function(){
    mostrar("btn1");
    cargarDatos()

}

function cargarDatos(){
    if((localStorage.getItem("comida"))!=null){comida=Number(localStorage.getItem("comida"));}    
    if((localStorage.getItem("oros"))!=null){oros=Number(localStorage.getItem("oros"));}    
    if((localStorage.getItem("level"))!=null){level=Number(localStorage.getItem("level"));}    
    if((localStorage.getItem("exp"))!=null){exp=Number(localStorage.getItem("exp"));}  
    if((localStorage.getItem("madera"))!=null){madera=Number(localStorage.getItem("madera"));}   
}
function guardarDatos(){
    localStorage.setItem("comida",comida);
    localStorage.setItem("oros",oros);
    localStorage.setItem("level",level);
    localStorage.setItem("exp",exp);
    localStorage.setItem("madera",madera);

}
function datos(){
    document.getElementById("texto2").textContent="Nivel: "+level+" Madera: "+madera+" Comida: "+comida +" Oro : "+oros;
   guardarDatos();
}
function pescar(){
    comida++;
    datos();
}
function talar(){
    madera++;
    datos();
}
