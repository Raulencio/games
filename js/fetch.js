
async function cargarPokemon(url){
    let respuesta= await fetch(url);
    let datosPokemon= await respuesta.json();//
    console.log(datosPokemon);
    let arreglo=[datosPokemon.name,datosPokemon.id,datosPokemon.sprites.front_default];
    return arreglo;
}

async function click(){
    var numero=Math.floor((Math.random()*809)+1);
    var url="https://pokeapi.co/api/v2/pokemon/"+numero;

    var nombrepokemon=await cargarPokemon(url);

    $("#principal").html("<h1>"+nombrepokemon[0]+" "+nombrepokemon[1]+"</h1> <img src="+nombrepokemon[2]+">");
}

window.onload=function(){
    $("#btnCargar").click(click);    

}
