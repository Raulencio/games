var eldiv=document.getElementById("diva");
var unavez=true,dn=20,nd=10,ctn=0;
function fun(){
    if(unavez){
    for(var i=1;i<6;i++){
        eldiv.innerHTML+=("<div class='divB' id='id"+i+"' onClick='dime("+i+")'></div>");
        
    var otrodiv=document.getElementById("id"+i);
    for(var e=1;e<=7;e++){
        otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><p id='"+i+"p"+e+"'>"+i+","+e+"</p></div>");  
    }       
    }
    unavez=false;}
    else{if(ctn==dn){dn+=20;eldiv.style.backgroundColor=colorHEX(6)
}else if(ctn==420){eldiv.innerHTML="";
unavez=true;ctn=0;
}}
}

function dime(x){
    var color=document.getElementById("id"+x);
    if(ctn==nd){nd+=20;
    color.style.backgroundColor=colorHEX(8);
    }
}

function decime(x,y){
    ctn++;
    var otrodivmas=document.getElementById(y+"id"+x);
    otrodivmas.style.backgroundColor=colorHEX(6);
    var elp=document.getElementById(y+"p"+x);
    elp.style.color=colorHEX(3);
    elp.textContent=ctn;
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
