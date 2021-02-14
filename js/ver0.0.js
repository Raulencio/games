var nombre="";var cargo="novato";var dPlaneta=randomAr(80,40);

function esconder(a){document.getElementById(a).hidden=true;}
function mostrar(a){document.getElementById(a).hidden=false;}

function verificarNombre(){

    if((localStorage.getItem("nombre"))!=null){
        nombre=(localStorage.getItem("nombre"));                   
        mostrar("mensaje");    
    }else{    
    nombre=prompt("Ingresa tu nombre o apodo");
    localStorage.setItem("nombre",nombre); 
    localStorage.setItem("cargo",cargo);    
    }
    
}

var divs=[
    [$("#fondo"),"absolute",1,1,900,420,
    "black","0px 0px 5px 1px",colorRan()],

    [$("#perfil"),"absolute",10,10,200,200,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],

    [$("#cargo"),"absolute",220,10,200,40,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],

    [$("#planeta"),"absolute",randomAr(270,70),randomAr(660,540),dPlaneta*2,dPlaneta*2,
    colorRan(),"0px 0px 5px 1px",colorRan()],

    [$("#mensaje"),"absolute",10,50,800,400,
    "#ffffffaa","0px 0px 10px 1px ","red"]

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
var nEstrellas=42;
function moverEstrellas(){    
   
    for(var u=0;u<nEstrellas;u++){
        var estrellita=document.createElement("div");
        estrellita.style.position=("absolute");
        estrellita.style.top=randomAr(300,20)+"px";
        estrellita.style.left=randomAr(800,300)+"px";
        estrellita.style.width="1px";
        estrellita.style.height="1px";
        estrellita.style.backgroundColor="white";
        estrellita.style.boxShadow=" 0px 0px"+randomAr(10,1)+"px "+randomAr(5,1)+"px "+colorRan();
        document.querySelector("#fondo").appendChild(estrellita);
    
    }

}

$(document).ready(function(){

verDivs();
verificarNombre();
moverEstrellas();
$("#planeta").css("border-radius",dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px");
$("#titulomensaje").text("Binvenido "+nombre);//set 
$("#textomensaje").text("Que hay "+cargo);//set 
$("#pCargoNombre").text(cargo+" - "+nombre);

})