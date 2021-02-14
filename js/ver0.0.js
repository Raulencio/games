var nombre="";var cargo="grumete";var dPlaneta=randomAr(80,40);var nEstrellas=0;var proporcion=42;
var ttiempo=0;
var coloressol=["whitesmoke","white","yellow","red",colorRan(),"lightblue"];
function esconder(a){document.getElementById(a).hidden=true;}
function mostrar(a){document.getElementById(a).hidden=false;}
function tiempo(){ttiempo+=nEstrellas;}
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
    console.log("nombre : "+nombre);
    console.log("cargo : "+cargo);
    console.log("numero de Estrellas : "+nEstrellas);
    //alert("Guardado");
    mostrar("mensaje"); 
}
var portesol=randomAr(420,240);
var divs=[
    [$("#fondo"),"absolute",1,1,415,900,
    "black","0px 0px 5px 1px",colorRan()],

    [$("#sol"),"absolute",1,1,portesol,portesol,
    coloressol[randomAr(coloressol.length-1,0)],"0px 0px "+randomAr(9,3)+"px "+randomAr(3,1)+"px",colorRan()],

    [$("#perfil"),"absolute",10,10,200,200,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],

    [$("#cabeza"),"absolute",100,60,proporcion,proporcion,
    colorRan(),"0px 0px 0px 0px",colorRan()],
    [$("#cuerpo"),"absolute",150,proporcion,proporcion*2,proporcion,
    colorRan(),"0px 0px 0x 0px",colorRan()],

    [$("#cargo"),"absolute",220,10,200,40,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],

    [$("#planeta"),"absolute",randomAr(660,540),randomAr(240,70),dPlaneta*2,dPlaneta*2,
    colorRan(),"0px 0px 5px 1px",colorRan()],

    [$("#mensaje"),"absolute",50,10,400,800,
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
    nEstrellas+=1;   
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
        estrellita.style.left=randomAr(400,20)+"px";
        estrellita.style.top=randomAr(880,240)+"px";
        estrellita.style.width="1px";
        estrellita.style.height="1px";
        estrellita.style.backgroundColor=colorRan();
        
        if(randomAr(2,1)==2){
        estrellita.style.boxShadow=" 0px 0px "+randomAr(6,2)+"px "+randomAr(1,0)+"px "+colorRan();
        }else{
            estrellita.style.boxShadow=" 0px 0px "+randomAr(5,3)+"px 0px white";
        }
        document.querySelector("#fondo").appendChild(estrellita);
    }
    guardarDatos();    
}
$(document).ready(function(){

verDivs();
verificarDatos();
moverEstrellas();
$("#cabeza").css("border-radius",proporcion+"px "+proporcion+"px "+proporcion+"px "+proporcion+"px");
$("#cuerpo").css("border-radius",proporcion/2+"px "+proporcion/2+"px 0px 0px");
$("#sol").css("border-radius","0px 0px "+(portesol*2)+"px 0px");
$("#planeta").css("border-radius",dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px");
$("#planeta").css("background","linear-gradient("+colorRan()+","+colorRan()+","+colorRan()+")");
$("#planeta").css("transform","rotate("+randomAr(360,0)+"deg)");

$("#titulomensaje").text("Binvenido "+cargo);//set 
$("#textomensaje").text("Que hay "+nombre);//set 
$("#pCargoNombre").text(cargo+" - "+nombre);

})
// document.getElementById("enemigo").style.backgroundColor="#"+(Math.floor(Math.random()*16777215).toString(16));

//setInterval("sumE()",10000);
function sumE(){
    nEstrellas++;
    var estrellita=document.createElement("div");
    estrellita.style.position=("absolute");
    estrellita.style.left=randomAr(400,20)+"px";
    estrellita.style.top=randomAr(880,240)+"px";
    estrellita.style.width="1px";
    estrellita.style.height="1px";
    estrellita.style.backgroundColor=colorRan();
    estrellita.style.boxShadow=" 0px 0px "+randomAr(6,4)+"px "+randomAr(2,1)+"px "+colorRan();
    document.querySelector("#fondo").appendChild(estrellita);
    console.log(nEstrellas);
}