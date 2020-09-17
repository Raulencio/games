/* 0 div por id,1 color div,2 ancho,3 largo,4 top,5 left,6 hidden false = se ve ,7 daño por segundo vida total*/

var enerfil=1000;
var colorEqA=colorRan(),colorEqB=colorRan();
var valr=10;var anchobarra=420;
var rps=0;
var div=[
[document.getElementById("div0"),colorRan()+"AA",990,1200,0,0,false],//fondo

[document.getElementById("div1"),colorEqA,300,240,795,90,false,unas],//cuadro pj1
[document.getElementById("div2"),colorEqB,300,240,795,600,false,randomAr(10,5)],//cuadro pj2

[document.getElementById("div3"),colorEqB,anchobarra,45,1100,0,false,randomAr(5000,1000)],//vida pj2
[document.getElementById("div4"),colorEqA,anchobarra,45,1100,45,false,vidaMaximaA],//vida pj1

[document.getElementById("div5"),colorEqB,300,300,635,600,false],//info pj2
[document.getElementById("div6"),colorEqA,300,300,635,90,false],//info pj1

[document.getElementById("div7"),colorRan(),150,150,420,0,false],//jugaren

[document.getElementById("cielo"),colorRan()+"AA",990,420,0,0,false],//cielo

[document.getElementById("bttn"),colorRan(),90,90,420,700,false],//btn mult

[document.getElementById("botones"),colorRan(),990,420,1200,0,false],//cuadro botones
[document.getElementById("recuperarvida"),colorRan(),90,135,180,510,false],//recuperar vida
[document.getElementById("aumataque"),colorRan(),90,135,180,410,false],//aumentar ataque
[document.getElementById("aumef"),colorRan(),90,135,180,310,false],//aumentar enerfil x s
[document.getElementById("maxef"),colorRan(),90,135,180,210,false],//aumentar enerfil maximo
[document.getElementById("vidmax"),colorRan(),90,135,180,110,false],//aumentar vida maxima
[document.getElementById("recue"),colorRan(),90,135,180,10,false]//aumentar vida maxima

];

var vidaMaximaB=div[3][7];var unavez=true;
var veinte=true;
var enemigo=true;

function acontece(){
if(veinte){
    pp();veinte=false;
}else{
    veinte=true;enemigo=true;
    div[2][6]=false;
    div[3][6]=false;
    div[5][6]=false;
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
}


function pelea(){
if(unavez){
    if(!(div[2][6])){        
        if(div[3][7]>0){
        div[3][7]-=div[1][7];
        div[4][7]-=div[2][7];   
        }else if((div[3][2]<=0)&&enemigo){ficha+=ctne;            
        
//        acontece();
            alert("fichas +"+ctne);enemigo=false; acontece();        
        }    
   }    
}
}
 
function juntos(){segundo++;
if(enerfil<maxenerfil){
    enerfil+=enerfilaum;
    if(enerfil>maxenerfil){
        enerfil=maxenerfil;
    }
}

if(div[4][7]<vidaMaximaA){div[4][7]+=rps;}else if(div[4][7]>vidaMaximaA){div[4][7]=vidaMaximaA;}

div[4][2]=Math.floor((anchobarra*div[4][7])/vidaMaximaA);
div[3][2]=Math.floor((anchobarra*div[3][7])/vidaMaximaB);        
div[3][5]=525+Math.floor(((vidaMaximaB-div[3][7])*anchobarra)/vidaMaximaB);

if(unavez){if((div[4][2])<=0){alert("Game Over");unavez=false;}}
//reiniciar
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
    
document.getElementById("p3").textContent="EnerFill: "+enerfil+"/"+maxenerfil+" Fichas: "+ficha;
document.getElementById("p2").textContent="Vida: "+div[4][7]+"/"+vidaMaximaA+" Ataque: "+div[1][7]+"/s";
document.getElementById("p1").textContent="Nivel: "+ctne+" Vida: "+div[3][7]+"/"+vidaMaximaB+" Ataque: "+div[2][7]+"/s";
document.getElementById("pr").textContent=recup;
document.getElementById("pa").textContent=aumd;
document.getElementById("pf").textContent=enerfilaum;
document.getElementById("pef").textContent=maxenerfil;
pelea();
}

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

