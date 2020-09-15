/* 0 div por id,1 color div,2 ancho,3 largo,4 top,5 left,6 hidden false = se ve ,7 daño por segundo */
var enerfil=1000,enerfilaum=1,maxenerfil=10;var monedas=0;
var colorEqA=colorRan(),colorEqB=colorRan();
var recup=50;var aumd=1;var valr=10;var anchobarra=900;
var rps=0;
var div=[
[document.getElementById("div0"),colorRan(),990,1200,0,0,false],//fondo
[document.getElementById("div1"),colorEqA,300,300,755,90,false,randomAr(5,1)],//cuadro pj1
[document.getElementById("div2"),colorEqB,300,300,135,600,false,randomAr(10,5)],//cuadro pj2
[document.getElementById("div3"),colorEqB,anchobarra,45,45,45,false,randomAr(5000,1000)],//vida pj2
[document.getElementById("div4"),colorEqA,anchobarra,45,1100,45,false,randomAr(1000,500)],//vida pj1
[document.getElementById("div5"),colorEqB,420,300,135,90,false],//info pj2
[document.getElementById("div6"),colorEqA,420,300,755,480,false],//info pj1

[document.getElementById("div7"),colorRan(),420,150,555,420,false],//jugaren

[document.getElementById("botones"),colorRan(),990,420,1200,0,false],//cuadro botones
[document.getElementById("recuperarvida"),colorRan(),90,135,180,510,false],//recuperar vida
[document.getElementById("aumataque"),colorRan(),90,135,180,410,false],//aumentar ataque
[document.getElementById("aumef"),colorRan(),90,135,180,310,false],//aumentar enerfil x s
[document.getElementById("maxef"),colorRan(),90,135,180,210,false],//aumentar enerfil maximo
[document.getElementById("vidmax"),colorRan(),90,135,180,110,false],//aumentar vida maxima
[document.getElementById("recue"),colorRan(),90,135,180,10,false]//aumentar vida maxima

];
var ctne=0;
var vidaMaximaA=div[4][7],vidaMaximaB=div[3][7];var unavez=true;
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
        }else if((div[3][2]<=0)&&enemigo){monedas+=ctne;
//        acontece();
            alert("monedas +"+ctne);enemigo=false; acontece();        
        }    
   }    
}
}
 
function juntos(){
if(enerfil<maxenerfil){
    enerfil+=enerfilaum;
    if(enerfil>maxenerfil){
        enerfil=maxenerfil;
    }
}

for(var f=div.length-1;f>=0;f--){
    
div[f][0].style.position="absolute";
div[f][0].style.backgroundColor=div[f][1];
div[f][0].style.width=div[f][2]+"px";
div[f][0].style.height=div[f][3]+"px";
div[f][0].style.top=div[f][4]+"px";
div[f][0].style.left=div[f][5]+"px";
div[f][0].hidden=div[f][6];
div[f][0].style.transition="all 0.5s";

}

if(div[4][7]<vidaMaximaA){div[4][7]+=rps;}else if(div[4][7]>vidaMaximaA){div[4][7]=vidaMaximaA;}

div[4][2]=Math.floor((anchobarra*div[4][7])/vidaMaximaA);
div[3][2]=Math.floor((anchobarra*div[3][7])/vidaMaximaB);        
div[3][5]=45+Math.floor(((vidaMaximaB-div[3][7])*anchobarra)/vidaMaximaB);

if(unavez){if((div[4][2])<=0){alert("Game Over");unavez=false;}}
//reiniciar

pelea();

document.getElementById("p3").textContent="EnerFill: "+enerfil+"/"+maxenerfil+" Monedas: "+monedas;
document.getElementById("p2").textContent="Vida: "+div[4][7]+"/"+vidaMaximaA+" Ataque: "+div[1][7]+"/s";
document.getElementById("p1").textContent="Nivel: "+ctne+" Vida: "+div[3][7]+"/"+vidaMaximaB+" Ataque: "+div[2][7]+"/s";
document.getElementById("pr").textContent=recup;
document.getElementById("pa").textContent=aumd;
document.getElementById("pf").textContent=enerfilaum;
document.getElementById("pef").textContent=maxenerfil;
}


document.getElementById("p3").style.fontSize="45px";
document.getElementById("p2").style.fontSize="45px";
document.getElementById("p1").style.fontSize="45px";



setInterval("juntos()",1000);

console.log(div);

function nose(nen){
if(nen=="1"){
    if(div[6][6]){
    div[6][6]=false;
    div[6][5]=480;
    }else{
    div[6][6]=true;
    div[6][5]=90;
    }
}else if(nen=="2"){
    if(div[5][6]){
    div[5][6]=false;
    }else{
        div[5][6]=true;
    }
}
}
function maxef(){
    if(enerfil>=maxenerfil){
        enerfil-=maxenerfil;
    maxenerfil*=2;
    }
}
function recupera(n){    
    if(div[4][7]<vidaMaximaA){
        if(enerfil>=recup){enerfil-=recup;
            recup++;rps++;
    div[4][7]+=n;}}
if(div[4][7]>vidaMaximaA){
    div[4][7]=vidaMaximaA}
}

function aumat(a){
    if(enerfil>=a){
    enerfil-=a;
        div[1][7]+=a;
        aumd++;
    }
}
function aumef(){
    if(enerfil>enerfilaum){
        enerfil-=enerfilaum;
        enerfilaum++;
    }
}
function vidmax(){
    if(enerfil>=maxenerfil){enerfil-=maxenerfil;
    vidaMaximaA+=maxenerfil;}
}
function recue(){
    div[4][7]+=enerfil;
    enerfil-=enerfil;
    if(div[4][7]>vidaMaximaA){
        div[4][7]=vidaMaximaA;
    }
}


acontece();
recupera(1);
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

