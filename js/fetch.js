
async function cargarPokemon(url){
    let respuesta= await fetch(url);
    let datosPokemon= await respuesta.json();//
    console.log(datosPokemon);
    let arreglo=[datosPokemon.name,datosPokemon.id,datosPokemon.sprites.front_default];
    return arreglo;
}

async function click(){
    var numero=Math.floor((Math.random()*150)+1);
    var url="https://pokeapi.co/api/v2/pokemon/"+numero;

    var nombrepokemon=await cargarPokemon(url);

    $("#principal").html("<h1>"+nombrepokemon[0]+" "+nombrepokemon[1]+"</h1> <img src="+nombrepokemon[2]+">");
}

window.onload=function(){
    $("#btnCargar").click(click);    

}







/*

fetch("archivo1.txt")
.then(data=>data.text())
.then(contenido=>console.log(contenido))
.catch(e=>console.log(e.text()))



function cargarHTML(datos){

    //$("#principal").append(datos);
    document.getElementById("principal").innerHTML=datos;

}
function escribirError(e){
    console.log(e.text());
}

fetch("archivo1.txt")
.then(respuesta=>respuesta.text())
.then(cargarHTML)
.catch(escribirError);

async function leerDatos(){
try{
var respuesta= await fetch("archivo1.txt");
var datos= await respuesta.text();
console.log("datos");
console.log(datos);
}catch(error){
    console.log(error);
}
}

leerDatos();


function escribirRespuesta(data){
    console.log("respuesta:");
    console.log(data);
    console.log("---------------------------------------------");
    return data.text();//<--el then siempre espera una respuesta (dato)
    //opción 2, eliminando el segundo then del fetch
    //data.text().then(escribirTextoRespuesta);
    }
    
    
    function escribirTextoRespuesta(data){
    console.log("datos extraídos:");
    console.log(data);
    }
    function escribirError(error){
    console.log("error generado"+ error);
    }
    
    fetch("mensaje.txt")
    .then(escribirRespuesta)
    .then(escribirTextoRespuesta)
    .catch(escribirError);
    */