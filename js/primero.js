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
var cero=0,uno=1,dos=2,tres=3,cuatro=4,cinco=5,seis=6,siete=7,ocho=8,nueve=9,diez=10,once=11;
var contenido=[[cero,0],[uno,1],
[dos,2],[tres,3],
[cuatro,4],[cinco,5],[seis,6],[siete,7],[ocho,8],[nueve,9],
[diez,10,300,200],[once,11,300,700]];

for(var e=contenido.length-1;e>0;e--){
    contenido[e][1]=document.getElementById("did"+e);
}
console.log(contenido);
uno=contenido[1][1];
uno.style.backgroundColor="#0f0f0f";
uno.style.width="1000px";
uno.style.height="600px";
uno.style.position="absolute";
uno.style.top="0px";
uno.style.left="0px";
uno.style.zIndex=1;

dos=contenido[2][1];
dos.style.backgroundColor="#f0f0f0f0";
dos.style.width="1000px";
dos.style.height="400px";
dos.style.position="absolute";
dos.style.top="0px";
dos.style.left="0px";
dos.style.zIndex=2;

tres=contenido[3][1];
tres.style.backgroundColor="#012345";
tres.style.width="1000px";
tres.style.height="200px";
tres.style.position="absolute";
tres.style.top="400px";
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
cinco.style.left="850px";
cinco.style.zIndex=5;

diez=contenido[10][1];
//diez.style.backgroundColor="#ce0404";
diez.style.top="200px";
diez.style.left="200px";
diez.style.zIndex=10;

once=contenido[11][1];
//once.style.backgroundColor="#020968";
once.style.top="200px";
once.style.left="700px";
once.style.zIndex=10;

var did=randomAr(11,10);
function estid(n){did=n;document.getElementById("did"+n).style.boxShadow="(0px 0px "+randomAr(10,5)+"px 5px"+colorRan()+")";}

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
function saltar(n){
//document.getElementById("")
}