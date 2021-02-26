var pokemon;
var esshiny=false;
async function cargarPokemon(url){
    let respuesta= await fetch(url);
    let datosPokemon= await respuesta.json();//
    //console.log(datosPokemon);
    let arreglo=[datosPokemon.name,datosPokemon.id,datosPokemon.sprites.front_default,datosPokemon.sprites.front_shiny];
    return arreglo;
}

async function click(){
    try{
    var numero=Math.floor((Math.random()*898)+1);
        buscar(numero);
    }catch{
        alert("error");
    }
    colorP();
}

async function buscar(x){
try {    
    var url="https://pokeapi.co/api/v2/pokemon/"+x;    
    pokemon=await cargarPokemon(url);
    pantalla(pokemon);
} catch (error) {
    alert("pokemon no encontrado");
}
}
function pantalla(pokemon){
    
    $("#numero").text("Nro "+pokemon[1]);
    
    if(esshiny){
        $("#sprite").attr("src",pokemon[3]);
        $("#pnombre").text(pokemon[0]+" shiny");
    }else{
    $("#sprite").attr("src",pokemon[2]);
    $("#pnombre").text(""+pokemon[0]);
    }    
    $("#texto").val("");
}
var color1,color2,color3,color4;
function colorP(){
    
    var color;
    if(esshiny){
        color=randomAr(4,1);
    }else{
        color=randomAr(2,1);
    }
    
    var color1=colorRan();
    var color2=colorRan();
    var color3=colorRan();
    var color4=colorRan();      
    
    switch(color){
    case 4:$("#azul").css("background-image","repeating-radial-gradient("+color1+","+color3+" 10px,"+color2+" 10px,"+color4+" 20px)");break;    
    case 3:$("#azul").css("background-image","repeating-linear-gradient("+randomAr(360,0)+"0deg,"+color4+","+color1+" 10px,"+color3+" 10px,"+color2+" 20px)");break;
    case 2:$("#azul").css("background-image","repeating-radial-gradient("+color1+","+color1+" 10px,"+color2+" 10px,"+color2+" 20px)");break;    
    case 1:$("#azul").css("background-image","repeating-linear-gradient("+randomAr(360,0)+"0deg,"+color1+","+color1+" 10px,"+color2+" 10px,"+color2+" 20px)");break;
    }
}

function shinyC(){
if(esshiny){
    $("#btnShiny").css("background-color","whitesmoke");
    esshiny=false;
    $("#sprite").attr("src",pokemon[2]);
$("#pnombre").text(pokemon[0]+"");
}else{
    $("#btnShiny").css("background-color",colorRan());
    esshiny=true;   
    $("#sprite").attr("src",pokemon[3]);
    $("#pnombre").text(pokemon[0]+" shiny"); 
}


}
window.onload=function(){
    $("#btnCargar").click(click);        
    $("#btnShiny").click(shinyC);
    click();
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