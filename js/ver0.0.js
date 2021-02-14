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
    [$("#fondo"),"absolute",1,1,900,420,
    "green","0px 0px 5px 1px",colorRan()],

    [$("#mensaje"),"absolute",10,50,800,400,
    "yellow","0px 0px 10px 1px ","red"]

]

function verDivs(){
    for(var i=0;i<divs.length;i++){
        console.log(divs[i][0]);
            divs[i][0].css("position",divs[i][1]);
            divs[i][0].css("top",divs[i][2]+"px");
            divs[i][0].css("left",divs[i][3]+"px");
            divs[i][0].css("width",divs[i][4]+"px");
            divs[i][0].css("height",divs[i][5]+"px");
            divs[i][0].css("backgroundColor",divs[i][6]); 
            divs[i][0].css("boxShadow",divs[i][7]+divs[i][8]);
            divs[i][0].css("z-index",i)
    
    }
}

$(document).ready(function(){

verDivs();
verificarNombre();

$("#titulomensaje").text("Binvenido "+nombre);//set 
$("#textomensaje").text("Que hay");//set 
 
})