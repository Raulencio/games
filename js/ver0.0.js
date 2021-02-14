var nombre="";var cargo="grumete";var dPlaneta=randomAr(80,40);var nEstrellas=0;

function esconder(a){document.getElementById(a).hidden=true;}
function mostrar(a){document.getElementById(a).hidden=false;}

function verificarDatos(){

    if((localStorage.getItem("nombre"))!=null){
        nombre=(localStorage.getItem("nombre"));          
        cargo=(localStorage.getItem("cargo"));          
        nEstrellas=parseInt(localStorage.getItem("nEstrellas"));
        mostrar("mensaje");    
    }else{    
    nombre=prompt("Ingresa tu nombre o apodo");
      guardarDatos();
    }
    
}

function guardarDatos(){
    localStorage.setItem("nombre",nombre); 
    localStorage.setItem("cargo",cargo); 
    localStorage.setItem("nEstrellas",nEstrellas); 
}

var divs=[
    [$("#fondo"),"absolute",1,1,900,420,
    "black","0px 0px 5px 1px",colorRan()],

    [$("#perfil"),"absolute",10,10,200,200,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],

    [$("#cargo"),"absolute",220,10,200,40,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],

    [$("#planeta"),"absolute",randomAr(240,70),randomAr(660,540),dPlaneta*2,dPlaneta*2,
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

function moverEstrellas(){    
    nEstrellas++;   
    if(nEstrellas>150){
        cargo="almirante";
    }else if(nEstrellas>100){
        cargo="capitan";
    }else if(nEstrellas>50){
        cargo="marinero";
    }
    for(var u=0;u<nEstrellas;u++){
        var estrellita=document.createElement("div");
        estrellita.style.position=("absolute");
        estrellita.style.top=randomAr(400,20)+"px";
        estrellita.style.left=randomAr(880,240)+"px";
        estrellita.style.width="1px";
        estrellita.style.height="1px";
        estrellita.style.backgroundColor="white";
        estrellita.style.boxShadow=" 0px 0px"+randomAr(10,5)+"px "+randomAr(6,2)+"px "+colorRan();
        document.querySelector("#fondo").appendChild(estrellita);
    }
    guardarDatos();
    console.log(nEstrellas);
}

$(document).ready(function(){

verDivs();
verificarDatos();
moverEstrellas();
$("#planeta").css("border-radius",dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px");
$("#planeta").css("background","linear-gradient("+colorRan()+","+colorRan()+","+colorRan()+")");
$("#titulomensaje").text("Binvenido "+nombre);//set 
$("#textomensaje").text("Que hay "+cargo);//set 
$("#pCargoNombre").text(cargo+" - "+nombre);

})
// document.getElementById("enemigo").style.backgroundColor="#"+(Math.floor(Math.random()*16777215).toString(16));