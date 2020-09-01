/* <div class="duno" id="did1">
<div class="ddos" id="did2">

    <div class="dexp" id="did10">

    </div>

</div>
<div class="dtres" id="did3">

    <div class="dcuatro" id="did4"></div><!-- izquierda -->

    <div class="dcinco" id="did5"></div><!-- derecha -->

    <div class="dseis" id="did6"></div><!-- arriba -->

    <div class="dsiete" id="did7"></div><!-- abajo -->
    
    <div class="docho" id="did8"></div><!--  -->

    <div class="dnueve" id="did9"></div><!--  --> */
    var azul="#1b02f8",rojo="#f80202";
var cero=0,uno=1,dos=2,tres=3,cuatro=4,cinco=5,seis=6,siete=7,ocho=8,nueve=9,diez=10,once=11,doce=12;
var contenido=[[cero,0],[uno,1],
[dos,2],[tres,3],
[cuatro,4],[cinco,5],[seis,6],[siete,7],[ocho,8],[nueve,9],
[diez,10,300,100],[once,11,300,300],[doce,10,300,100]];
var unnum=11;
function dale(){
for(var e=contenido.length-1;e>0;e--){
    contenido[e][1]=document.getElementById("did"+e);
}
}dale();
console.log(contenido);
uno=contenido[1][1];
uno.style.backgroundColor="#0f0f0f";
uno.style.width="500px";
uno.style.height="1000px";
uno.style.position="absolute";
uno.style.top="0px";
uno.style.left="0px";
uno.style.zIndex=1;

dos=contenido[2][1];
dos.style.backgroundColor="#f0f0f0f0";
dos.style.width="500px";
dos.style.height="600px";
dos.style.position="absolute";
dos.style.top="0px";
dos.style.left="0px";
dos.style.zIndex=2;

tres=contenido[3][1];
tres.style.backgroundColor="#012345";
tres.style.width="500px";
tres.style.height="200px";
tres.style.position="absolute";
tres.style.top="800px";
tres.style.left="0px";
tres.style.zIndex=3;

cuatro=contenido[4][1];
cuatro.style.backgroundColor="#abc123";
cuatro.style.width="100px";
cuatro.style.height="100px";
cuatro.style.position="absolute";
cuatro.style.top="50px";
cuatro.style.left="50px";
cuatro.style.zIndex=5;

cinco=contenido[5][1];
cinco.style.backgroundColor="#abc123";
cinco.style.width="100px";
cinco.style.height="100px";
cinco.style.position="absolute";
cinco.style.top="50px";
cinco.style.left="350px";
cinco.style.zIndex=5;

diez=contenido[10][1];
//diez.style.backgroundColor="#ce0404";
diez.style.top=contenido[10][2]+"px";
diez.style.left=contenido[10][3]+"px";
diez.style.zIndex=10;

once=contenido[11][1];
//once.style.backgroundColor="#020968";
once.style.top=contenido[11][2]+"px";
once.style.left=contenido[11][3]+"px";
once.style.zIndex=10;

var did=randomAr(11,10);

function estid(n){did=n;

    if(contenido[n][0]){
    var caramba=document.getElementById("did"+n);
    caramba.style.boxShadow="(0px 0px "+randomAr(20,10)+"px 0px "+colorRan()+")";

    caramba.style.transform="scale(-1,1)";
    caramba.style.backgroundColor="#f0f0f0";contenido[n][0]=false;
    }else{
    var caramba=document.getElementById("did"+n);
    caramba.style.boxShadow="(0px 0px "+randomAr(20,10)+"px 0px "+colorRan()+")";
    caramba.style.transform="scale(1,1)";
    if(n==10){
    caramba.style.backgroundColor=azul;contenido[n][0]=true;}
    if(n==11){
        caramba.style.backgroundColor=rojo;contenido[n][0]=true;
    }
    }

}

function dire(n){
    if(n==1){
        //contenido[did][2]+=randomAr(50,20);
        contenido[did][3]+=randomAr(70,35);
        //contenido[did][1].style.top=(contenido[did][2])+"px";
        contenido[did][1].style.left=(contenido[did][3])+"px";
        }else if(n==2){    
        //contenido[did][2]-=randomAr(50,20);
        contenido[did][3]-=randomAr(70,35);
        //contenido[did][1].style.top=(contenido[did][2])+"px";
        contenido[did][1].style.left=(contenido[did][3])+"px";
        }
}

function simbolo(){
    var un=randomAr(4,1);
    switch(un){
        case 1:resp="♦";break;
        case 2:resp="♠";break;
        case 3:resp="♣";break;
        case 4:resp="♥";break;
    }return resp;
}
function mascartas(){
//document.getElementById("")
var resp=simbolo();unnum++;var col=randomAr(2,1)
var le=generarLetra(10);
document.getElementById("did2").innerHTML+='<div class="dexp'+col+'" id="did'+unnum+'" onClick="estid('+unnum+')"><p class="esquinita" id="p'+unnum+'">'+le+'<br>'+resp+'</p><div class="adentro'+col+'"></div><p class="abajito" id="p'+unnum+'p"></p><p class="esquinitabajito" id="p'+unnum+'p'+unnum+'">'+le+'<br>'+resp+'</p></div>';
contenido[unnum][1]=document.getElementById("did"+unnum);
}