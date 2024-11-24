var nombre="";var cargo="grumete";var dPlaneta=randomAr(80,40);var nEstrellas=0;var proporcion=42;
var ttiempo=0;var povni=randomAr(35,10);var nOvnis=0;var portesol=randomAr(400,240);var planetasVisitados=1;
var coloressol=["whitesmoke","white","yellow","red","lightblue","#040414","#5353ff","#0000b1","#e9f360","#deee00","#ee5700","#e20b0b","#cccaca","#f7ff8d","#00ffd5","#ff9d00","#fffb04","#ff0404","#39ffde"];
var coloresPlaneta="linear-gradient(blue,brown,blue)";var colorSol="yellow";

function esconder(id){document.getElementById(id).hidden=true;}
function mostrar(id){document.getElementById(id).hidden=false;}

function tiempo(){ttiempo+=nEstrellas;console.log(ttiempo);}

function verificarDatos(){

    if((localStorage.getItem("nombre"))!=null){nombre=(localStorage.getItem("nombre"));}
    else{nombre=prompt("Ingresa tu nombre o apodo");}

    if((localStorage.getItem("nOvnis"))!=null){nOvnis=parseInt(localStorage.getItem("nOvnis"));}

    if((localStorage.getItem("cargo"))!=null){cargo=(localStorage.getItem("cargo"));}

    if((localStorage.getItem("nEstrellas"))!=null){nEstrellas=parseInt(localStorage.getItem("nEstrellas"));}

    if((localStorage.getItem("coloresPlaneta"))!=null){coloresPlaneta=(localStorage.getItem("coloresPlaneta"));}

    if((localStorage.getItem("colorSol"))!=null){colorSol=(localStorage.getItem("colorSol"));}    
    if((localStorage.getItem("planetasVisitados"))!=null){planetasVisitados=parseInt(localStorage.getItem("planetasVisitados"));}
    guardarDatos();
}

// Variable global para controlar si el mensaje ya se mostró
let mensajeMostrado = false;

function guardarDatos() {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("cargo", cargo);
    localStorage.setItem("nEstrellas", nEstrellas);
    localStorage.setItem("nOvnis", nOvnis);
    localStorage.setItem("coloresPlaneta", coloresPlaneta);
    localStorage.setItem("colorSol", colorSol);
    localStorage.setItem("planetasVisitados", planetasVisitados);

    // Actualizar textos o realizar acciones necesarias
    textos();

    // Mostrar mensaje solo si no se ha mostrado antes
    if (!mensajeMostrado) {
        mostrar("mensaje");
        mensajeMostrado = true; // Marcar como mostrado
    }
}


var divs=[
    //0
    [$("#fondo"),"absolute",1,1,410,4200,//
    "black","0px 0px 5px 1px",colorRan()],
    //1
    [$("#sol"),"absolute",1,1,portesol,portesol,
    colorSol,"0px 0px "+randomAr(30,3)+"px "+randomAr(10,1)+"px",coloressol[randomAr(coloressol.length-1,0)]],
    //2
    [$("#perfil"),"absolute",620,10,390,170,
    colorRan()+"aa","0px 0px 5px 1px",colorRan()],
    //3
    [$("#cabeza"),"absolute",60,60,proporcion,proporcion,
    colorRan(),"0px 0px 0px 0px",colorRan()],
    //4
    [$("#cuerpo"),"absolute",110,proporcion,proporcion*2,proporcion,
    colorRan(),"0px 0px 0x 0px",colorRan()],
    //5
    [$("#cargo"),"absolute",620,10,390,40,
    colorRan()+"20","0px 0px 5px 1px",colorRan()],
    //6
    [$("#planeta"),"absolute",3800,150,dPlaneta*2,dPlaneta*2,
    "blue","0px 0px "+randomAr(7,2)+"px "+randomAr(3,1)+"px",colorRan()],
    //7
    [$("#ovni"),"absolute",randomAr(800,220),randomAr(350,50),povni,povni,
    colorRan()+"25","0px 0px 5px 1px",colorRan()],
    //8
    [$("#mensaje"),"absolute",10,10,390,880,
    "#ffffffaa","0px 0px 10px 1px ","red"],

    [$("#datos"),"absolute",40,150,240,170,
    "#ffffff20","0px 0px 0px 0px ","white"],

    [$("#subir"),"absolute",360,360,0,0,
    "#ffffff00","0px 0px 0px 0px ","white"],

    [$("#bajar"),"absolute",420,360,0,0,
    "#ffffff00","0px 0px 0px 0px ","white"],


    [$("#subir2"),"absolute",310,360,0,0,
        "#ffffff00","0px 0px 0px 0px ","white"],
    
    [$("#bajar2"),"absolute",470,360,0,0,
    "#ffffff00","0px 0px 0px 0px ","white"]
    


]
var contador=0;
function viajar(){
    //sol
    colorSol=coloressol[randomAr(coloressol.length-1,0)];//color;
    portesol=randomAr(400,240);
    divs[1][4]=portesol;//width;
    divs[1][5]=portesol;//height;    
    divs[1][6]=colorSol;
    divs[1][7]="0px 0px "+randomAr(30,3)+"px "+randomAr(10,1)+"px";//sombra;    
    divs[1][8]=coloressol[randomAr(coloressol.length-1,0)]
    //planeta
    coloresPlaneta="linear-gradient("+colorRan()+","+colorRan()+","+colorRan()+")";  
    dPlaneta=randomAr(80,40);
    divs[6][2]=randomAr(3660,540);//top;
    divs[6][3]=randomAr(240,70);//left;
    divs[6][4]=dPlaneta*2;//width;
    divs[6][5]=dPlaneta*2//height;
    divs[6][7]="0px 0px "+randomAr(7,2)+"px "+randomAr(3,1)+"px";//sombra;
    divs[6][8]=colorRan();//colorsombra;
    //ovni
    povni=randomAr(35,10);
    divs[7][2]=randomAr(3800,220);//top;
    divs[7][3]=randomAr(350,50);//left;
    divs[7][4]=povni;//width;
    divs[7][5]=povni;//height;
    divs[7][6]=colorRan()+"25";//color;
    divs[7][7]="0px 0px 5px 1px";//sombra;
    divs[7][8]=colorRan();//colorsombra;    
    
    localStorage.setItem("coloresPlaneta",coloresPlaneta); 
    localStorage.setItem("colorSol",colorSol);
    contador=0;
    verDivs();
}
function verDivs(){
    for(var i=0;i<divs.length;i++){
        //console.log(divs[i][0]);
            divs[i][0].css("position",divs[i][1]);
            divs[i][0].css("top",divs[i][2]+"px");
            divs[i][0].css("left",divs[i][3]+"px");
            divs[i][0].css("width",divs[i][4]+"px");
            divs[i][0].css("height",divs[i][5]+"px");
            divs[i][0].css("backgroundColor",divs[i][6]); 
            divs[i][0].css("boxShadow",divs[i][7]+divs[i][8]);
            divs[i][0].css("z-index",i)    
    }
    $("#cargo").css("z-index","7");
    $("#perfil").css("z-index","7");
    $("#cabeza").css("border-radius",proporcion+"px "+proporcion+"px "+proporcion+"px "+proporcion+"px");
    $("#cuerpo").css("border-radius",proporcion/2+"px "+proporcion/2+"px 0px 0px");
    $("#sol").css("border-radius","0px 0px "+(portesol*2)+"px 0px");
    $("#sol").css("backgroundColor",colorSol);
    $("#planeta").css("border-radius",dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px "+dPlaneta+"px");
    //$("#planeta").css("background","linear-gradient("+colorRan()+","+colorRan()+","+colorRan()+")");    
    $("#planeta").css("background",coloresPlaneta);
    //$("#planeta").css("transform","rotate("+randomAr(360,0)+"deg)");
    $("#ovni").css("border-radius",""+povni*4+"px 0px "+povni*4+"px 0px");
    $("#ovni").css("transform","rotate("+randomAr(60,10)+"deg)");
            
    //console.log(colorSol);
    //console.log(coloresPlaneta);
}
var giros=1;

var mensajeOvni = "... ... ...";

var mensajes = ["Hay algo afuera", "Abre bien los ojos", "Creo que vi algo", "Ahí están", "Ya llegaron"];

function mensajeNave() {
    mensajeOvni = mensajes[randomAr(mensajes.length,0)];
}


function rote(){$("#planeta").css("transform","rotate("+giros*3+"deg)");giros++;
if(document.getElementById("ovni").hidden&&contador>12){
    if(randomAr(9,0)==2){mensajeNave();
        mostrar("ovni"); alert(mensajeOvni);
    }else{
        //console.log("Buscando...");
        $("#ovni").css("transform","rotate("+giros*6+"deg)");
    }
}contador++;nEstrellas+=planetasVisitados;
//agregarOvni();
guardarDatos();
}



function moverEstrellas(){    
    if(nEstrellas<51){nEstrellas+=1;}



    if(nEstrellas>15000){cargo="almirante";}
    else if(nEstrellas>5000){cargo="capitan";}
    else if(nEstrellas>1000){cargo="marinero";}
    else if(nEstrellas>100){cargo="recluta";}




    var nes=0;
    if(nEstrellas>100){nes=99;
    }else{nes=nEstrellas;}

    for(var u=0;u<nes;u++){
        var w= randomAr(3,2);
        var estrellita=document.createElement("div");
            estrellita.style.position=("absolute");
            estrellita.style.left=randomAr(409,1)+"px";
            estrellita.style.top=randomAr(4199,21)+"px";
            estrellita.style.width=w+"px";
            estrellita.style.height=w+"px";
            estrellita.style.backgroundColor=colorRan();
            estrellita.style.borderRadius=w+"px "+w+"px "+w+"px "+w+"px ";
            estrellita.className="estrellita";
        if(randomAr(2,1)==2){
            estrellita.style.boxShadow=" 0px 0px "+randomAr(5,2)+"px "+randomAr(1,0)+"px "+colorRan();
        }else{
            estrellita.style.boxShadow=" 0px 0px "+randomAr(5,3)+"px 1px whitesmoke";
        }
        document.querySelector("#fondo").appendChild(estrellita);
    }
    guardarDatos();    
}

var saludo=["Bienvenido ","Hola ","Saludos ","Buenas ","Que tal "];
var muchoTexto=["Aqui esta la lista ","La informacion del dia ","Sus datos ","Mensaje para "+nombre,"Todo listo "];
function textos(){
$("#titulomensaje").text(saludo[randomAr(saludo.length-1,0)]+cargo+" "+nombre);//set 
$("#textomensaje1").text(muchoTexto[randomAr(muchoTexto.length-1,0)]);
$("#textomensaje2").text(" Energia de Estrellas: "+nEstrellas);//set 
$("#textomensaje3").text(" Ovnis avistados: "+nOvnis);
$("#textomensaje4").text("  Planetas visitados: "+planetasVisitados);
$("#pCargoNombre").text(cargo+" - "+nombre);

}


var menuPerfil=true;



function menudesp(){

if(menuPerfil){
    divs[5][2]=750;
    divs[2][2]=750;  
    divs[2][5]=40;   
    menuPerfil=false;
    verDivs();

}else{
    divs[5][2]=620;
    divs[2][2]=620; 
    divs[2][5]=170;    
    menuPerfil=true;
    verDivs();
    
}textos();


}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $("#fondo").css("overflow","hidden");
    $("#perfil").css("overflow","hidden");


    
    $("#subir").css("border-left","20px solid transparent");
    $("#subir").css("border-right","20px solid transparent");
    $("#subir").css("border-bottom","30px solid whitesmoke");
    
    $("#bajar").css("border-left","20px solid transparent");
    $("#bajar").css("border-right","20px solid transparent");
    $("#bajar").css("border-top","30px solid whitesmoke");



  
    $("#subir2").css("border-left","20px solid transparent");
    $("#subir2").css("border-right","20px solid transparent");
    $("#subir2").css("border-bottom","30px solid whitesmoke");
    
    $("#bajar2").css("border-left","20px solid transparent");
    $("#bajar2").css("border-right","20px solid transparent");
    $("#bajar2").css("border-top","30px solid whitesmoke");





    document.getElementById("fondo").style.transition="all 1s"; 
    document.getElementById("perfil").style.transition="all 0.5s"; 
    document.getElementById("cargo").style.transition="all 0.5s"; 
    document.getElementById("ovni").style.transition="all 5s"; 
    document.getElementById("planeta").style.transition="transform 5s"; 


esconder("ovni");
verificarDatos();
verDivs();
moverEstrellas();
textos();

})


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// document.getElementById("enemigo").style.backgroundColor="#"+(Math.floor(Math.random()*16777215).toString(16));
//setInterval("sumE()",10000);

function sumE(){
    nEstrellas++;
    var w= randomAr(3,2);
    var estrellita=document.createElement("div");
    estrellita.style.position=("absolute");
    estrellita.style.left=randomAr(409,1)+"px";
    estrellita.style.top=randomAr(4199,21)+"px";
    estrellita.style.width=w+"px";
    estrellita.style.height=w+"px";
    estrellita.style.backgroundColor=colorRan();
    estrellita.style.boxShadow=" 0px 0px "+randomAr(5,3)+"px "+randomAr(1,0)+"px "+colorRan();
    estrellita.style.borderRadius=w+"px "+w+"px "+w+"px "+w+"px ";
    estrellita.className="estrellita";
    document.querySelector("#fondo").appendChild(estrellita);    
    //console.log(nEstrellas);
}

function alertaOvni(){
    alert("Un Ovni!!!..");
    nOvnis+=1;
    //esconder("ovni");    
    
    localStorage.setItem("nOvnis",nOvnis); 
    localStorage.setItem("nEstrellas",nEstrellas);  
    
    var viaje=confirm("Deseas viajar a otro lugar?");
    if(viaje){viajar();planetasVisitados++;
         var cupcakes= document.getElementsByClassName("estrellita");
do{
    for(var i=0;i<cupcakes.length;i++){    
    document.getElementById("fondo").removeChild(cupcakes[i]);
    cupcakes= document.getElementsByClassName("estrellita");
    }
}while(cupcakes.length>0);
        var veces=0;
        if(nEstrellas>100){
            veces=100;
        }else{
            veces=nEstrellas;
        }
        for(var e=0;e<veces;e++){
        sumE();    
    }
}else{
    povni=randomAr(35,10);
    divs[7][2]=randomAr(3800,220);//top;
    divs[7][3]=randomAr(350,50);//left;
    divs[7][4]=povni;//width;
    divs[7][5]=povni;//height;
    divs[7][6]=colorRan()+"25";//color;
    divs[7][7]="0px 0px 5px 1px";//sombra;
    divs[7][8]=colorRan();//colorsombra;        
    verDivs();}
    esconder("ovni");textos();
}



function mover(x) {
    switch (x) {
        case 1: // Subir (pequeño incremento hacia arriba)
            divs[0][2] += 350; // Incrementar
            if (divs[0][2] > 0) divs[0][2] = 0; // Límite superior
            break;
        case 2: // Bajar (pequeño decremento hacia abajo)
            divs[0][2] -= 350; // Decrementar
            if (divs[0][2] < -3400) divs[0][2] = -3400; // Límite inferior
            break;
        case 3: // Subir (mayor incremento hacia arriba)
            divs[0][2] += 1750; // Incrementar más rápido
            if (divs[0][2] > 0) divs[0][2] = 0; // Límite superior
            break;
        case 4: // Bajar (mayor decremento hacia abajo)
            divs[0][2] -= 1750; // Decrementar más rápido
            if (divs[0][2] < -3400) divs[0][2] = -3400; // Límite inferior
            break;
    }

    // Actualizar visibilidad de los botones según los límites
    if (divs[0][2] >= 0) {
        document.getElementById("subir").style.visibility = "hidden"; // Ocultar botón interno
        document.getElementById("subir2").style.visibility = "hidden"; // Ocultar botón externo
    } else {
        document.getElementById("subir").style.visibility = "visible"; // Mostrar botón interno
        document.getElementById("subir2").style.visibility = "visible"; // Mostrar botón externo
    }

    // Control de visibilidad para bajar
    if (divs[0][2] <= -3400) {
        document.getElementById("bajar").style.visibility = "hidden"; // Ocultar botón interno
        document.getElementById("bajar2").style.visibility = "hidden"; // Ocultar botón externo
    } else {
        document.getElementById("bajar").style.visibility = "visible"; // Mostrar botón interno
        document.getElementById("bajar2").style.visibility = "visible"; // Mostrar botón externo
    }

    verDivs(); // Actualizar los cambios visualmente
}


setInterval("rote()",5000);



var numO=0;
function agregarOvni(){
   
    //document.querySelector("#fondo").appendChild(estrellita);  

var e="<div class='ovni' id='ovni"+numO+"' hidden='' onClick='esconder('ovni'"+numO+")'></div>"

document.querySelector("#fondo").innerHTML+=e;
let estrellita=document.getElementById("ovni"+numO);
estrellita.style.position=("absolute");
estrellita.style.left=randomAr(409,1)+"px";
estrellita.style.top=randomAr(3899,21)+"px";
estrellita.style.width=povni+"px";
estrellita.style.height=povni+"px";
estrellita.style.backgroundColor=colorRan()+"20";
estrellita.style.boxShadow=" 0px 0px "+randomAr(5,3)+"px "+randomAr(2,1)+"px "+colorRan();
estrellita.style.borderRadius=povni*4+"px 0px "+povni*4+"px 1px";
estrellita.style.transform="rotate("+randomAr(60,10)+"deg)";        
estrellita.className="ovni";    
numO++;console.log("algo");
}


//var arr=[2,3,4,5].map(numero)=(console.log(numero));

var arrre=[2,3,4,5,6];
var arre=[2,3,4,5,6];
arrre.push(...arre);
//console.log(arrre);

function sumar(a,b,c){
    return a+b+c;
}
//console.log(sumar(...arrre));

let{num1,num2,num3,num4,num5}=arrre;

//console.log(num1);

mover(1);