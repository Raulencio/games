/* 0 div por id,1 color div,2 ancho,3 largo,4 top,5 left,6 hidden false = se ve ,7 daño por segundo */
var enerfil=0,enerfilaum=1,maxenerfil=100;
var colorEqA=colorRan(),colorEqB=colorRan();
var recup=50;var aumd=1;
var div=[
[document.getElementById("div0"),colorRan(),990,1200,0,0,false],//fondo
[document.getElementById("div1"),colorEqA,300,300,755,90,false,randomAr(5,1)],//cuadro pj1
[document.getElementById("div2"),colorEqB,300,300,135,600,false,randomAr(10,5)],//cuadro pj2
[document.getElementById("div3"),colorEqB,700,45,45,245,false],//vida pj2
[document.getElementById("div4"),colorEqA,randomAr(800,420),45,1100,45,false],//vida pj1
[document.getElementById("div5"),colorEqB,420,300,135,90,false],//info pj2
[document.getElementById("div6"),colorEqA,420,300,755,480,false],//info pj1
[document.getElementById("botones"),colorRan(),990,420,1200,0,false],//cuadro botones
[document.getElementById("recuperarvida"),colorRan(),100,100,100,790,false],//recuperar vida
[document.getElementById("aumataque"),colorRan(),100,100,100,600,false],//aumentar ataque
[document.getElementById("aumef"),colorRan(),100,100,100,410,false]//aumentar enerfil
];
var vidaMaximaA=div[4][2],vidaMaximaB=div[3][2];
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

if(div[3][2]>1&&div[4][2]>1){
div[3][2]-=div[1][7];
div[3][5]+=div[1][7];
if(div[3][2]<0){
div[3][2]=0;
}
if(div[3][2]<810){
div[4][2]-=div[2][7];}
}

document.getElementById("p3").textContent="EnerFill: "+enerfil+"/"+maxenerfil;
document.getElementById("p2").textContent="Vida: "+div[4][2]+"/"+vidaMaximaA+" Ataque: "+div[1][7]+"/s";
document.getElementById("p1").textContent="Vida: "+div[3][2]+"/"+vidaMaximaB+" Ataque: "+div[2][7]+"/s";
document.getElementById("pr").textContent=recup;
document.getElementById("pa").textContent=aumd;
document.getElementById("pf").textContent=enerfilaum;
}
document.getElementById("p3").style.fontSize="45px";
document.getElementById("p2").style.fontSize="45px";
document.getElementById("p1").style.fontSize="45px";
document.getElementById("pr").style.fontSize="24px";
document.getElementById("pa").style.fontSize="24px";
document.getElementById("pf").style.fontSize="24px";

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

function recupera(n){
    
    if(div[4][2]<vidaMaximaA){
        if(enerfil>=recup){enerfil-=recup;
    div[4][2]+=n;}}
if(div[4][2]>vidaMaximaA){
    div[4][2]=vidaMaximaA}
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

