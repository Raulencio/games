var eldiv=document.getElementById("diva");
var unavez=true;
var cnA="";
var cnB="";
//[3] 1=torre 2=caballo 3=alfil 4=reina 5=rey 6=peon
var piezas=[tBa=[true,1,1,1,1],cBa=[true,1,2,2,1],aBa=[true,1,3,3,1],rBa=[true,1,4,4,1],rBb=[true,1,5,5,1],aBb=[true,1,6,3,1],cBb=[true,1,7,2,1],tBb=[true,1,8,1,1],
pBa=[true,2,1,6,1],pBa=[true,2,2,6,1],pBa=[true,2,3,6,1],pBa=[true,2,4,6,1],pBa=[true,2,5,6,1],pBa=[true,2,6,6,1],pBa=[true,2,7,6,1],pBa=[true,2,8,6,1],
tNa=[true,8,1,1,2],cNa=[true,8,2,2,2],aNa=[true,8,3,3,2],rNa=[true,8,4,4,2],rNb=[true,8,5,5,2],aNb=[true,8,6,3,2],cNb=[true,8,7,2,2],tNb=[true,8,8,1,2],
pNa=[true,7,1,6,2],pNa=[true,7,2,6,2],pNa=[true,7,3,6,2],pNa=[true,7,4,6,2],pNa=[true,7,5,6,2],pNa=[true,7,6,6,2],pNa=[true,7,7,6,2],pNa=[true,7,8,6,2],vacui=[false,0,0,0,0]];

var colorA="#13e900";//verde
var colorB="#0013bd";//azul
var colores=[colorA,"#e6f517","#e40e0a",colorB,colorA,"#e6f517","#e40e0a",colorB]
//unavez=false;
for(var cr=1;cr<9;cr++){
    document.getElementById("cr"+cr).style.backgroundColor=colores[cr-1];    
}
function randomAr(aM, bM) {
    do {
        num = Math.random();
        num = num * 10000;
        num = Math.floor(num);
    } while (num > aM || num <= bM);

    return num;
}
function al(){
    if(unavez){
elC(randomAr(4,0));
elC(randomAr(8,4));}
}
al();

function elC(n){
    if(unavez){        
        if(n<5){for(var k=1;k<5;k++){document.getElementById("cr"+k).style.backgroundColor=colores[k-1];}
        }else{for(var k=5;k<9;k++){document.getElementById("cr"+k).style.backgroundColor=colores[k-1];}}
    
        switch(n){
            case 1:colorA=colores[n-1];cnA="Verde";document.getElementById("cr1").style.backgroundColor="#000";break;
            case 2:colorA=colores[n-1];cnA="Amarillo";document.getElementById("cr2").style.backgroundColor="#000";break;
            case 3:colorA=colores[n-1];cnA="Rojo";document.getElementById("cr3").style.backgroundColor="#000";break;
            case 4:colorA=colores[n-1];cnA="Azul";document.getElementById("cr4").style.backgroundColor="#000";break;
            case 5:colorB=colores[n-1];cnB="Verde";document.getElementById("cr5").style.backgroundColor="#fff";break;
            case 6:colorB=colores[n-1];cnB="Amarillo";document.getElementById("cr6").style.backgroundColor="#fff";break;
            case 7:colorB=colores[n-1];cnB="Rojo";document.getElementById("cr7").style.backgroundColor="#fff";break;
            case 8:colorB=colores[n-1];cnB="Azul";document.getElementById("cr8").style.backgroundColor="#fff";break;    
        }
    document.getElementById("elpo").textContent=cnA+" vs "+cnB;
        if(n<5){
            for(var i=1;i<5;i++){
                if(i==n){document.getElementById("color"+i).style.backgroundColor=colorA;}
                else{document.getElementById("color"+i).style.backgroundColor="#000";}        
            }
        }else{
            for(var i=5;i<9;i++){
                if(i==n){document.getElementById("color"+i).style.backgroundColor=colorB;}
                else{document.getElementById("color"+i).style.backgroundColor="#fff";}  
            }
        }
    }
}

function fun(){
    if(unavez){
        for(var x=1;x<9;x++){
        document.getElementById("color"+x).hidden=true;        
        }
        
        for(var i=1;i<9;i++){
            eldiv.innerHTML+=("<div class='divB' id='id"+i+"'></div>");
        var otrodiv=document.getElementById("id"+i);        
            for(var e=1;e<=8;e++){                 
                otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='dime("+i+","+e+")'><div class='pa' id='"+i+"a"+e+"'><div class='pb' id='"+i+"b"+e+"'></div></div></div>");
            }
        }
    unavez=false;todos();
}   
}

function digame(n){
    var nombre="";
    switch(n){
        case 1:nombre="Torre";break;
        case 2:nombre="Caballo";break;
        case 3:nombre="Alfil";break;
        case 4:nombre="Reina";break;
        case 5:nombre="Rey";break;
        case 6:nombre="Peon";break;
    }
    return nombre;
}
var turno=1;
var lapieza=32;var equipo=2;

var xan=0,yan=0;
function averiguar(x,y){var guarde="";
    for(var i=piezas.length-1;i>=0;i--){
        if(piezas[i][0]){
        if(piezas[i][1]==x&&piezas[i][2]==y){lapieza=i;
            
            if(equipo!=piezas[i][4]){            
            equipo=piezas[i][4];                        
            console.log("equipo "+piezas[i][4]);            
        }            
            guarde=(piezas[i][3]);
        }   }   
    }return digame(guarde);
}
var mover=false;
function dime(x,y){
document.getElementById("elpo").textContent=(averiguar(x,y)+" ("+x+","+y+")");
if(equipo==1&&((piezas[lapieza][3]==6)&&x==((piezas[lapieza][1])+1)&&piezas[lapieza][2]==y)){mover=true;}//peon arriba
if(equipo==2&&((piezas[lapieza][3]==6)&&x==((piezas[lapieza][1])-1)&&piezas[lapieza][2]==y)){mover=true;}//peon abajo
if(piezas[lapieza][3]==1&&((x==piezas[lapieza][1])||(y==piezas[lapieza][2]))){mover=true;}//torres
if(piezas[lapieza][3]==2){mover=true;}//caballo
if(piezas[lapieza][3]==3){mover=true;}//alfil
if(piezas[lapieza][3]==5){mover=true;}//rey
if(piezas[lapieza][3]==4){mover=true;}//reina la reina puede ser una suma de movimientos de alfil + torre

if(mover){
    piezas[lapieza][1]=x;
    piezas[lapieza][2]=y;
    mover=false;
}

//console.log(lapieza);
// if((turno==1||turno==2)&&equipo==2){
// piezas[lapieza][1]=x;
// piezas[lapieza][2]=y;turno++;
// }
// if((turno==3||turno==4)&&equipo==1){    
//     turno++;
//     }
//     console.log(turno);
// if(turno==5){
//     turno=1;
// }
todos();
document.getElementById("elpo").textContent=(averiguar(x,y)+" ("+x+","+y+")")
//funcion con el guarde segun su numero de tipo de pieza--
//eligo la pieza 1 muevo la pieza , siguiente turno
//eligo la pieza 1er equipo puede comer piezas del equipo 2 si se elige una del mismo equipo cambian de posicion(?)
}

function todos(){
    for(var y=1;y<9;y++){
        for(var x=1;x<9;x++){  
            var otrodivmas=document.getElementById(y+"a"+x);
            otrodivmas.style.boxShadow=("0px 0px 0px "+colorA+",-0px -0px 0px "+colorA+",-0px 0px 0px "+colorA+",0px -0px 0px "+colorA+"");
            var otrodivmas=document.getElementById(y+"b"+x);
            otrodivmas.style.boxShadow=("0px 0px 0px "+colorA+",-0px -0px 0px "+colorA+",-0px 0px 0px "+colorA+",0px -0px 0px "+colorA+"");
            
            if(y%2==0){
                if(x%2==0){
                    var otrodivmas=document.getElementById(y+"id"+x);
                    otrodivmas.style.backgroundColor="#fff";
                    var otrodivmas=document.getElementById(y+"a"+x);
                    otrodivmas.style.backgroundColor="#fff";
                    var otrodivmas=document.getElementById(y+"b"+x);
                    otrodivmas.style.backgroundColor="#fff";
                    
                }else{var otrodivmas=document.getElementById(y+"id"+x);
                    otrodivmas.style.backgroundColor="#000";
                    var otrodivmas=document.getElementById(y+"a"+x);
                    otrodivmas.style.backgroundColor="#000";
                    var otrodivmas=document.getElementById(y+"b"+x);
                    otrodivmas.style.backgroundColor="#000";
            }
            }else{
                if(x%2==0){var otrodivmas=document.getElementById(y+"id"+x);
                otrodivmas.style.backgroundColor="#000";
                var otrodivmas=document.getElementById(y+"a"+x);
                otrodivmas.style.backgroundColor="#000";
                var otrodivmas=document.getElementById(y+"b"+x);
                otrodivmas.style.backgroundColor="#000";}
                else{ var otrodivmas=document.getElementById(y+"id"+x);
                otrodivmas.style.backgroundColor="#fff";
                var otrodivmas=document.getElementById(y+"a"+x);
                otrodivmas.style.backgroundColor="#fff";
                var otrodivmas=document.getElementById(y+"b"+x);
                otrodivmas.style.backgroundColor="#fff";
                }
            }              
            decime(y,x);
        }    
    }
}

function cambio(y,x,z,a){
    if(a==1){ 
    var elp=document.getElementById(y+"a"+x);    
    elp.style.backgroundColor="#000";
    elp.style.boxShadow=("2px 2px 5px "+colorA+",-2px -2px 5px "+colorA+",-2px 2px 5px "+colorA+",2px -2px 5px "+colorA+"");
    var elp=document.getElementById(y+"b"+x);
    elp.style.backgroundColor=colorA;           
    }else{
    var elp=document.getElementById(y+"a"+x);
    elp.style.backgroundColor="#fff";
    elp.style.boxShadow=("2px 2px 5px "+colorB+",-2px -2px 5px "+colorB+",-2px 2px 5px "+colorB+",2px -2px 5px "+colorB+"");
    var elp=document.getElementById(y+"b"+x);
    elp.style.backgroundColor=colorB;
    }
switch(z){
    case 1:
        var elp=document.getElementById(y+"b"+x);
        elp.style.borderRadius="0px 0px 0px 0px";
        var elp=document.getElementById(y+"a"+x);
        elp.style.borderRadius="0px 0px 0px 0px";
        break;//torre
    case 2:
        var elp=document.getElementById(y+"b"+x);
        elp.style.borderRadius="20px 0px 0px 0px";
        var elp=document.getElementById(y+"a"+x);
        elp.style.borderRadius="20px 0px 0px 0px";
        break;//caballo
    case 3:
         var elp=document.getElementById(y+"b"+x);
                elp.style.borderRadius="0px 10px 0px 10px";
                var elp=document.getElementById(y+"a"+x);
                elp.style.borderRadius="0px 10px 0px 10px";
        break;//alfil
    case 4:
    var elp=document.getElementById(y+"b"+x);
    elp.style.borderRadius="0px 0px 15px 15px";
    var elp=document.getElementById(y+"a"+x);
    elp.style.borderRadius="0px 0px 15px 15px";
        break;//reina
    case 5:
        var elp=document.getElementById(y+"b"+x);
        elp.style.borderRadius="15px 15px 0px 0px";
        var elp=document.getElementById(y+"a"+x);
        elp.style.borderRadius="15px 15px 0px 0px";
        break;//rey
    case 6:
        var elp=document.getElementById(y+"b"+x);
            elp.style.borderRadius="25px";
            var elp=document.getElementById(y+"a"+x);
            elp.style.borderRadius="25px"; 
        break;//peon
}
}
function decime(x,y){
    for(var i=piezas.length-1;i>=0;i--){
        if(piezas[i][0]){
            if(piezas[i][1]==x&&piezas[i][2]==y){
                cambio(x,y,piezas[i][3],piezas[i][4]);
            }
        }
    }
}

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(n){
	var coolor = "";
	for(var i=0;i<n;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
