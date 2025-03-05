function randomAr(aM, bM) {
    var ba=100000;
    while(ba<=aM){
        ba*=ba;
    }
    do {
        num = Math.random();
        num = num * ba;
        num = Math.floor(num);
    } while (num > aM || num < bM);

    return num;
}

//15 hexadecimal hasta la f 16 y // 35 para todos 36 //9 para numeros
function generarLetra(n){
    var letras = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var numero = (Math.random()*n).toFixed(0);
	return letras[numero];
}
	
function colorRan(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra(15) ;
	}
	return "#" + coolor;
}

function generarDiv(na,nb,ta,tb){//generarDiv(7,11,"fila","cuadro");
var envio="";
for(var a=1;a<=na;a++){
    envio+="<div class="+ta+" id="+ta+a+">";
    for(var e=1;e<=nb;e++){
   envio+="<div class="+tb+" id="+a+tb+e+"> </div>";
    }envio+="</div>";
}return envio;
}

function esconder(id){document.getElementById(id).hidden=true;}
function mostrar(id){document.getElementById(id).hidden=false;}