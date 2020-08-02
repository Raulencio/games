var eldiv=document.getElementById("diva");
var unavez=true,dn=20,nd=10,ctn=0;

var piezasB=[tBa=[true,1,1],aBa=[true,1,2],cBa=[true,1,3],rBa=[true,1,4],rBb=[true,1,5],aBb=[true,1,6],aBb=[true,1,7],tBb=[true,1,8],
pBa=[true,2,1],pBa=[true,2,2],pBa=[true,2,3],pBa=[true,2,4],pBa=[true,2,5],pBa=[true,2,6],pBa=[true,2,7],pBa=[true,2,8]]

var piezasN=[tNa=[true,8,1],aNa=[true,8,2],cNa=[true,8,3],rNa=[true,8,4],rNb=[true,8,5],aNb=[true,8,6],aNb=[true,8,7],tNb=[true,8,8],
pNa=[true,7,1],pNa=[true,7,2],pNa=[true,7,3],pNa=[true,7,4],pNa=[true,7,5],pNa=[true,7,6],pNa=[true,7,7],pNa=[true,7,8]]

function fun(){
    if(unavez){
    for(var i=1;i<9;i++){
        eldiv.innerHTML+=("<div class='divB' id='id"+i+"' onClick='dime("+i+")'></div>");
        
    var otrodiv=document.getElementById("id"+i);
    for(var e=1;e<=8;e++){    
    if(i%2==0){
        if(e%2==0){
        otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><p class='pa' id='"+i+"p"+e+"'>"+i+","+e+"</p></div>");
        }else{
        otrodiv.innerHTML+=("<div class='divD' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><p class='pb' id='"+i+"p"+e+"'>"+i+","+e+"</p></div>");
        }    
    }else{
        if(e%2==0){
            otrodiv.innerHTML+=("<div class='divD' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><p class='pb' id='"+i+"p"+e+"'>"+i+","+e+"</p></div>");        
        }else{    otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><p class='pa' id='"+i+"p"+e+"'>"+i+","+e+"</p></div>");                
    }
    }
    }}
    unavez=false;}
    else{if(ctn==dn){dn+=20;eldiv.style.backgroundColor=colorHEX(6)}}
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