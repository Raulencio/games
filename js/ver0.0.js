var nombre="";

function esconder(a){document.getElementById(a).hidden=true;}
function mostrar(a){document.getElementById(a).hidden=false;}

function verificarNombre(){

    if((localStorage.getItem("nombre"))!=null){
        nombre=(localStorage.getItem("nombre"));   
        mostrar("mensaje");
    }else{    
    nombre=prompt("Ingresa tu nombre o apodo");
    localStorage.setItem("nombre",nombre);    
    }
}


var divs=[
    [$("#fondo"),"absolute","1px","1px","900px","420px",
    "red","0px 0px 0px 0px red"],

    [$("#mensaje"),"absolute","10px","50px","800px","400px",
    "green","0px 0px 10px 1px yellow"]

]

$(document).ready(function(){
for(var i=0;i<divs.length;i++){
    console.log(divs[i][0]);
        divs[i][0].css("position",divs[i][1]);
        divs[i][0].css("top",divs[i][2]);
        divs[i][0].css("left",divs[i][3]);
        divs[i][0].css("width",divs[i][4]);
        divs[i][0].css("height",divs[i][5]);
        divs[i][0].css("backgroundColor",divs[i][6]); 
        divs[i][0].css("boxShadow",divs[i][7]);
        divs[i][0].css("z-index",i)

}

verificarNombre();

$("#titulomensaje").text("Binvenido "+nombre);//set 
$("#textomensaje").text("Que hay");//set 
 
})