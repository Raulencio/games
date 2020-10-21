/* 0 div por id,1 color div,2 ancho,3 largo,4 top,5 left,6 hidden false = se ve ,7 daño por segundo vida total*/

//multimenu

// pguardar pvictoria ////
//divs arriba abajo izquierda derecha
//movimiento

//mapa(?)

var color1=colorRan(),color2=colorRan(),color3=colorRan(),color4=colorRan();

var colorEqA=colorRan(),colorEqB=colorRan();
var valr=10;var anchobarra=420;
var div=[
[document.getElementById("div0"),colorRan()+"AA",990,1200,0,0,false],//fondo

[document.getElementById("div1"),colorEqA,75,120,795,90,false,unas],//cuadro pj1
[document.getElementById("div2"),colorEqB,75,120,795,600,false,randomAr(10,5)],//cuadro pj2

[document.getElementById("div3"),colorEqB,anchobarra,45,1100,0,false,randomAr(5000,1000)],//vida pj2
[document.getElementById("div4"),colorEqA,anchobarra,45,1100,45,false,vma],//vida pj1

[document.getElementById("div5"),colorEqB+"77",240,240,635,600,false],//info pj2
[document.getElementById("div6"),colorEqA+"77",240,240,635,90,false],//info pj1

[document.getElementById("cielo"),"#00000088",990,420,0,0,false],//cielo

[document.getElementById("soluna"),"#f0f0f0",150,150,42,0,false],//jugaren

[document.getElementById("bttn"),colorRan(),90,90,40,20,false],//btn mult

[document.getElementById("botones"),colorRan(),990,420,1200,0,false],//cuadro botones
[document.getElementById("recuperarvida"),colorRan(),90,135,180,510,false],//recuperar vida
[document.getElementById("aumataque"),colorRan(),90,135,180,410,false],//aumentar ataque
[document.getElementById("aumef"),colorRan(),90,135,180,310,false],//aumentar enerfil x s
[document.getElementById("maxef"),colorRan(),90,135,180,210,false],//aumentar enerfil maximo
[document.getElementById("vidmax"),colorRan(),90,135,180,110,false],//aumentar vida maxima
[document.getElementById("recue"),colorRan(),90,135,180,10,false],//aumentar vida maxima

[document.getElementById("guardar"),colorRan(),990,420,420,0,true],//17
[document.getElementById("ganar"),colorRan(),990,420,420,0,true],//18

[document.getElementById("m1"),color1,90,90,10,575,false],//19
[document.getElementById("m2"),color2,90,90,10,675,false],//20
[document.getElementById("m3"),color3,90,90,10,775,false],//21
[document.getElementById("m4"),color4,90,90,10,875,false],//22

[document.getElementById("d1"),color1,990,420,100,0,true],//23
[document.getElementById("d2"),color2,990,420,100,0,true],//24
[document.getElementById("d3"),color3,990,420,100,0,true],//25
[document.getElementById("d4"),color4,990,420,100,0,false] //26

];
function guardado(){
    div[17][6]=true;
}
function continuar(n){
    if(n==0){
        div[18][6]=true;
    }
}
var vidaMaximaB=div[3][7];var unavez=true;
var veinte=true;
var enemigo=true;

function acontece(){
if(veinte){
    pp();veinte=false;
}else{
    veinte=true;enemigo=true;
    div[2][6]=false;
    div[3][6]=true;
    div[5][6]=false;
 
    for(var e=ctne;e>=1;e--){   
        try{                     
        document.getElementById("es"+e).style.width=randomAr(2,1)+"px";
        document.getElementById("es"+e).style.height=randomAr(2,1)+"px";
        document.getElementById("es"+e).style.top=randomAr(418,2)+"px";
        document.getElementById("es"+e).style.left=randomAr(988,2)+"px";
        document.getElementById("es"+e).style.boxShadow="0px 0px "+randomAr(20,10)+"px "+randomAr(2,0)+"px "+colorRan();            
        }catch{
    
        }}

}
}

function pp(){    
    var nuevocolor=colorRan();    
    ctne++;    
    div[3][7]=((700+ctne)*(randomAr(10*ctne,5+ctne)));
    vidaMaximaB=div[3][7];
    valr++;
    div[2][1]=nuevocolor;
    div[3][1]=nuevocolor;
    div[5][1]=nuevocolor;    
    div[2][7]=randomAr(ctne*ctne,ctne);
    div[2][6]=true;
    div[3][6]=true;
    div[5][6]=true;  

var laid="es"+ctne;
var eltea="<div class='estrella' id='"+laid+"'> </div>";
document.getElementById("cielo").innerHTML+=eltea;
var iabl=document.getElementById(laid);


iabl.style.top=randomAr(418,2)+"px";
iabl.style.left=randomAr(988,2)+"px";
iabl.style.backgroundColor=colorRan();
  

}


function pelea(){
if(unavez){
    if(!(div[2][6])){        
        if(div[3][7]>0){
        div[3][7]-=div[1][7];
        div[4][7]-=div[2][7];   
        }else if((div[3][2]<=0)&&enemigo){ficha+=ctne;            
        
//        acontece();
            

//alert("fichas +"+ctne);
    div[18][6]=false;

enemigo=false; acontece();        
        }    
   }    
}
}
 

///////////////////////////////

function juntos(){segundo++;

if(enerfil<maxenerfil){
    enerfil+=enerfilaum;
    if(enerfil>maxenerfil){
        enerfil=maxenerfil;
    }
}

div[8][5]++;//soluna izquierda derecha


if(div[4][7]<vidaMaximaA){div[4][7]+=rps;}
else if(div[4][7]>vidaMaximaA){div[4][7]=vidaMaximaA;}

if(unavez){if((div[4][2])<=0){alert("Game Over");unavez=false;}}
//reiniciar

div[4][2]=Math.floor((anchobarra*div[4][7])/vidaMaximaA);
div[3][2]=Math.floor((anchobarra*div[3][7])/vidaMaximaB);        
div[3][5]=525+Math.floor(((vidaMaximaB-div[3][7])*anchobarra)/vidaMaximaB);


for(var f=div.length-1;f>=0;f--){
    
    div[f][0].style.position="absolute";
    div[f][0].style.backgroundColor=div[f][1];
    div[f][0].style.width=div[f][2]+"px";
    div[f][0].style.height=div[f][3]+"px";
    div[f][0].style.top=div[f][4]+"px";
    div[f][0].style.left=div[f][5]+"px";
    div[f][0].hidden=div[f][6];
    div[f][0].style.transition="all 0.420s";    
    
    }
    
 

document.getElementById("p3").textContent="EnerFill: "+enerfil+"/"+maxenerfil;

document.getElementById("pd4").textContent=" Fichas: "+ficha;

document.getElementById("p2").textContent="Vida: "+div[4][7]+"/"+vidaMaximaA+" Ataque: "+div[1][7]+"/s";
document.getElementById("p1").textContent="Nivel: "+ctne+" Vida: "+div[3][7]+"/"+vidaMaximaB+" Ataque: "+div[2][7]+"/s";
document.getElementById("pr").textContent=recup;
document.getElementById("pa").textContent=aumd;
document.getElementById("pf").textContent=enerfilaum;
document.getElementById("pef").textContent=maxenerfil;
pelea();
}
div[8][0].style.borderRadius="90px";
document.getElementById("p3").style.fontSize="45px";
document.getElementById("p2").style.fontSize="45px";
document.getElementById("p1").style.fontSize="45px";

function Numeros(string) {//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            //Se añaden a la salida los caracteres validos
            out += string.charAt(i);

    //Retornar valor filtrado
    return out;
}

function opcion(m){
    switch(m){
        case 1:div[23][6]=false;div[24][6]=true;div[25][6]=true;div[26][6]=true;break;
        case 2:div[23][6]=true;div[24][6]=false;div[25][6]=true;div[26][6]=true;break;
        case 3:div[23][6]=true;div[24][6]=true;div[25][6]=false;div[26][6]=true;break;
        case 4:div[23][6]=true;div[24][6]=true;div[25][6]=true;div[26][6]=false;break;
    }
}

acontece();
recupera(1);

setInterval("juntos()",1000);

console.log(div);



// for(var x=1;x<=z;x++){
//     div[0][0].innerHTML+=("<div id='div"+x+"'></div>");
// div[x][0]=document.getElementById("div"+x);
// div[x][0].style.width="10px".height;
// div[x][0].style.height="10px";
// div[x][0].style.position="absolute";
// div[x][0].style.top=randomAr(410,1)+"px";
// div[x][0].style.left=randomAr(410,10)+"px";
// div[x][0].style.backgroundColor=colorRan();

// }