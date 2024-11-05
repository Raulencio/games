var nivelE=0;
var nPreguntas=0;
var respuestaC=0;
var malas=0;
var buenas=0;

function generarAleatorio(min,max){

return Math.floor(Math.random()*(max-min+1))+min;

}

function esconder (n){

if(n==1){
document.getElementById("contenedor"+n).hidden=true;

document.getElementById("contenedor"+2).hidden=false;
}
if(n==2){
document.getElementById("contenedor"+n).hidden=true;

document.getElementById("contenedor"+1).hidden=false;

}

if(n==3){

document.getElementById("contenedor"+2).hidden=true;

document.getElementById("contenedor"+n).hidden=false;

}

if(n==4){

document.getElementById("contenedor"+3).hidden=true;

document.getElementById("contenedor"+2).hidden=false;
nPreguntas=0;document.getElementById("np").textContent="1+0=?"
document.getElementById("btnR1").hidden=true;
document.getElementById("btnR2").hidden=true;
document.getElementById("btnR3").hidden=true;
document.getElementById("btnR4").hidden=true;

malas=0;
buenas=0;

document.getElementById("pb").textContent="correctas";
document.getElementById("pm").textContent="incorectas";
}



}

function reiniciarC(){

document.getElementById("btnR1").style.backgroundColor="#12f5f6";
document.getElementById("btnR2").style.backgroundColor="#12f5f6";
document.getElementById("btnR3").style.backgroundColor="#12f5f6";
document.getElementById("btnR4").style.backgroundColor="#12f5f6";

}

function respuestas(){

var x=generarAleatorio(1,16)

if(x==1){
document.getElementById("r1").textContent=respuestaC;
document.getElementById("r2").textContent=respuestaC+1;
document.getElementById("r3").textContent=respuestaC-1;
document.getElementById("r4").textContent=respuestaC+2;

}
if(x==2){
document.getElementById("r2").textContent=respuestaC;

document.getElementById("r1").textContent=respuestaC+1;
document.getElementById("r3").textContent=respuestaC-1;
document.getElementById("r4").textContent=respuestaC+2;

}if(x==3){
document.getElementById("r3").textContent=respuestaC;

document.getElementById("r2").textContent=respuestaC+1;
document.getElementById("r1").textContent=respuestaC-1;
document.getElementById("r4").textContent=respuestaC+2;

}if(x==4){
document.getElementById("r4").textContent=respuestaC;

document.getElementById("r3").textContent=respuestaC+1;
document.getElementById("r1").textContent=respuestaC-1;
document.getElementById("r2").textContent=respuestaC+2;

}

if(x==5){
document.getElementById("r1").textContent=respuestaC;
document.getElementById("r2").textContent=respuestaC-1;
document.getElementById("r3").textContent=respuestaC+1;
document.getElementById("r4").textContent=respuestaC-2;

}
if(x==6){
document.getElementById("r2").textContent=respuestaC;

document.getElementById("r1").textContent=respuestaC-1;
document.getElementById("r3").textContent=respuestaC+1;
document.getElementById("r4").textContent=respuestaC-2;

}if(x==7){
document.getElementById("r3").textContent=respuestaC;

document.getElementById("r2").textContent=respuestaC-1;
document.getElementById("r1").textContent=respuestaC+1;
document.getElementById("r4").textContent=respuestaC-2;

}if(x==8){
document.getElementById("r4").textContent=respuestaC;

document.getElementById("r3").textContent=respuestaC-1;
document.getElementById("r1").textContent=respuestaC+1;
document.getElementById("r2").textContent=respuestaC-2;

}
if(x==9){
document.getElementById("r1").textContent=respuestaC;
document.getElementById("r2").textContent=respuestaC+1;
document.getElementById("r3").textContent=respuestaC+3;
document.getElementById("r4").textContent=respuestaC+2;

}
if(x==10){
document.getElementById("r2").textContent=respuestaC;

document.getElementById("r1").textContent=respuestaC+1;
document.getElementById("r3").textContent=respuestaC+2;
document.getElementById("r4").textContent=respuestaC+3;

}if(x==11){
document.getElementById("r3").textContent=respuestaC;

document.getElementById("r2").textContent=respuestaC+1;
document.getElementById("r1").textContent=respuestaC+3;
document.getElementById("r4").textContent=respuestaC+2;

}if(x==12){
document.getElementById("r4").textContent=respuestaC;

document.getElementById("r3").textContent=respuestaC+2;
document.getElementById("r1").textContent=respuestaC+3;
document.getElementById("r2").textContent=respuestaC+1;

}

if(x==13){
document.getElementById("r1").textContent=respuestaC;
document.getElementById("r2").textContent=respuestaC-1;
document.getElementById("r3").textContent=respuestaC-2;
document.getElementById("r4").textContent=respuestaC-3;

}
if(x==14){
document.getElementById("r2").textContent=respuestaC;

document.getElementById("r1").textContent=respuestaC-3;
document.getElementById("r3").textContent=respuestaC-1;
document.getElementById("r4").textContent=respuestaC-2;

}if(x==15){
document.getElementById("r3").textContent=respuestaC;

document.getElementById("r2").textContent=respuestaC-1;
document.getElementById("r1").textContent=respuestaC-2;
document.getElementById("r4").textContent=respuestaC-3;

}if(x==16){
document.getElementById("r4").textContent=respuestaC;

document.getElementById("r3").textContent=respuestaC-2;
document.getElementById("r1").textContent=respuestaC-1;
document.getElementById("r2").textContent=respuestaC-3;

}


}

function pregunta(){

nPreguntas++;

document.getElementById("btnR1").hidden=false;
document.getElementById("btnR2").hidden=false;
document.getElementById("btnR3").hidden=false;
document.getElementById("btnR4").hidden=false;

var x=0;
var y=0;
var z=0;
var signo="";

if(nivelE==1){
x=generarAleatorio(5,10);
y=generarAleatorio(0,5);signo="+";
z=x+y;
}

if(nivelE==2){
x=generarAleatorio(10,20);
y=generarAleatorio(10,20);
z=x+y;signo="+";
}

if(nivelE==3){
x=generarAleatorio(5,10);
y=generarAleatorio(1,5);
z=x-y;signo="-";
}

if(nivelE==4){
x=generarAleatorio(10,20);
y=generarAleatorio(1,10);
z=x-y;signo="-";
}


if(nivelE==5){
x=generarAleatorio(20,40);
y=generarAleatorio(10,40);signo="+";
z=x+y;
}

if(nivelE==6){
x=generarAleatorio(50,100);
y=generarAleatorio(10,100);
z=x+y;signo="+";
}

if(nivelE==7){
x=generarAleatorio(5,30);
y=generarAleatorio(5,15);

if(x<y){
x=generarAleatorio(15,30);
y=generarAleatorio(5,15);
}

z=x-y;signo="-";
}

if(nivelE==8){

x=generarAleatorio(10,50);
y=generarAleatorio(5,39);

if(x<y){
x=generarAleatorio(25,50);
y=generarAleatorio(5,20);
}

z=x-y;signo="-";
}

if(nivelE==9){
x=generarAleatorio(100,500);
y=generarAleatorio(150,450);signo="+";
z=x+y;
}
if(nivelE==10){
x=generarAleatorio(500,1000);
y=generarAleatorio(550,950);signo="+";
z=x+y;
}

if(nivelE==11){
x=generarAleatorio(0,10);
y=generarAleatorio(0,10);signo="*";
z=x*y;
}

if(nivelE==12){

do{
x=generarAleatorio(0,20);
y=generarAleatorio(0,10);signo="/";

}while(x<=y||x%y!==0);
z=x/y;

}

if(nivelE==13){

do{

x=generarAleatorio(50,100);
y=generarAleatorio(25,95);signo="-";

}while(x<=y);
z=x-y;
}

if(nivelE==14){

do{

x=generarAleatorio(100,500);
y=generarAleatorio(50,450);signo="-";

}while(x<=y);
z=x-y;
}


if(nivelE==15){
x=generarAleatorio(0,20);
y=generarAleatorio(0,15);signo="*";
z=x*y;
}

if(nivelE==16){

do{
x=generarAleatorio(0,50);
y=generarAleatorio(0,50);signo="/";

}while(x<=y||x%y!==0);
z=x/y;

}


respuestaC=z;
respuestas();
document.getElementById("tp").textContent=x+" "+signo+" "+y+" = ?";


document.getElementById("np").textContent="Nro: "+nPreguntas;


reiniciarC();

}

function comparar(n){

var texto=parseInt(document.getElementById("r"+n).innerText);

if(texto==respuestaC){
console.log("si");

document.getElementById("btnR"+n).style.backgroundColor="#fff";

buenas++;

pregunta();

}else{

document.getElementById("btnR"+n).style.backgroundColor="#ff0000";


malas++;

}
document.getElementById("pb").textContent="correctas: "+buenas;
document.getElementById("pm").textContent="incorrectas: "+malas;


}

function nivel (n){
document.getElementById("tp").textContent="Iniciar";
nivelE=n;
}
