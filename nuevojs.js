var eldiv=document.getElementById("diva");
var unavez=true,dn=20,nd=10,ctn=0;

var piezasB=[tBa=[true,1,1],aBa=[true,1,2],cBa=[true,1,3],rBa=[true,1,4],rBb=[true,1,5],aBb=[true,1,6],aBb=[true,1,7],tBb=[true,1,8],
pBa=[true,2,1],pBa=[true,2,2],pBa=[true,2,3],pBa=[true,2,4],pBa=[true,2,5],pBa=[true,2,6],pBa=[true,2,7],pBa=[true,2,8]]

var piezasN=[tNa=[true,8,1],aNa=[true,8,2],cNa=[true,8,3],rNa=[true,8,4],rNb=[true,8,5],aNb=[true,8,6],aNb=[true,8,7],tNb=[true,8,8],
pNa=[true,7,1],pNa=[true,7,2],pNa=[true,7,3],pNa=[true,7,4],pNa=[true,7,5],pNa=[true,7,6],pNa=[true,7,7],pNa=[true,7,8]]

var colorA="#13e900";//verde
var colorB="#0013bd";//azul
var color1=colorA;
var color2="#e6f517";//amarillo
var color3="#e40e0a";//rojo
var color4=colorB;
//unavez=false;

document.getElementById("cr1").style.backgroundColor=color1;
document.getElementById("cr2").style.backgroundColor=color2;
document.getElementById("cr3").style.backgroundColor=color3;
document.getElementById("cr4").style.backgroundColor=color4;
document.getElementById("cr5").style.backgroundColor=color1;
document.getElementById("cr6").style.backgroundColor=color2;
document.getElementById("cr7").style.backgroundColor=color3;
document.getElementById("cr8").style.backgroundColor=color4;

function randomAr(aM, bM) {
    do {
        num = Math.random();
        num = num * 10000;
        num = Math.floor(num);
    } while (num > aM || num <= bM);

    return num;
}
function al(){
    if(unavez){
elC(randomAr(4,0));
elC(randomAr(8,4));}
}
al();
var cnA="Verde";
var cnB="Azul";
function elC(n){
    if(unavez){
switch(n){
    case 1:colorA=color1;cnA="Verde";break;
    case 2:colorA=color2;cnA="Amarillo";break;
    case 3:colorA=color3;cnA="Rojo";break;
    case 4:colorA=color4;cnA="Azul";break;
    case 5:colorB=color1;cnB="Verde";break;
    case 6:colorB=color2;cnB="Amarillo";break;
    case 7:colorB=color3;cnB="Rojo";break;
    case 8:colorB=color4;cnB="Azul";break;    
}
document.getElementById("elpo").textContent=cnA+" vs "+cnB;
if(n<5){
    for(var i=1;i<5;i++){
        if(i==n){document.getElementById("color"+i).style.backgroundColor=colorA;}
        else{document.getElementById("color"+i).style.backgroundColor="#000";}        
    }
}else{
    for(var i=5;i<9;i++){
        if(i==n){document.getElementById("color"+i).style.backgroundColor=colorB;}
        else{document.getElementById("color"+i).style.backgroundColor="#fff";}  
}
}}
}

function fun(){
    if(unavez){document.getElementById("borre").hidden=true;
        
        for(var i=1;i<9;i++){
        eldiv.innerHTML+=("<div class='divB' id='id"+i+"' onClick='dime("+i+")'></div>");
        var otrodiv=document.getElementById("id"+i);
        // if(i!=3&&i!=4&&i!=5&&i!=6){
            for(var e=1;e<=8;e++){ 
                if(i%2==0){
                    if(e%2==0){otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><div class='pa' id='"+i+"a"+e+"'><div class='pb' id='"+i+"b"+e+"'></div></div></div>");}
                    else{otrodiv.innerHTML+=("<div class='divD' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><div class='pa' id='"+i+"a"+e+"'><div class='pb' id='"+i+"b"+e+"'></div></div></div>");}    
                }else{
                    if(e%2==0){otrodiv.innerHTML+=("<div class='divD' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><div class='pa' id='"+i+"a"+e+"'><div class='pb' id='"+i+"b"+e+"'></div></div></div>");}
                    else{ otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'><div class='pa' id='"+i+"a"+e+"'><div class='pb' id='"+i+"b"+e+"'></div></div></div>");}
                }
            }
        // }else{
        //         for(var e=1;e<=8;e++){    
        //             if(i%2==0){
        //                 if(e%2==0){otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'></div>");}
        //                 else{otrodiv.innerHTML+=("<div class='divD' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'></div>");}    
        //             }else{
        //                 if(e%2==0){otrodiv.innerHTML+=("<div class='divD' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'></div>");}
        //                 else{ otrodiv.innerHTML+=("<div class='divC' id='"+i+"id"+e+"' onClick='decime("+e+","+i+")'></div>");}
        //             }
        //         }

        //     }
        }
    unavez=false;todos();
}
    else{if(ctn==dn){dn+=20;eldiv.style.backgroundColor=colorHEX(6)}
}
}

function dime(x){
    var color=document.getElementById("id"+x);
    if(ctn==nd){nd+=20;
    color.style.backgroundColor=colorHEX(8);
    }
}

function todos(){
    for(var i=1;i<9;i++){
        for(var e=1;e<9;e++){        
            decime(e,i);
        }    
    }
}

function decime(x,y){
    // ctn++;
    // var otrodivmas=document.getElementById(y+"id"+x);
    // otrodivmas.style.backgroundColor=colorHEX(6);
    if(y==1||y==2){        
    var elp=document.getElementById(y+"a"+x);    
    elp.style.backgroundColor="#000";
    elp.style.boxShadow=("2px 2px 5px "+colorA+",-2px -2px 5px "+colorA+",-2px 2px 5px "+colorA+",2px -2px 5px "+colorA+"");
    var elp=document.getElementById(y+"b"+x);
    elp.style.backgroundColor=colorA;
    
        if(y==2){
            var elp=document.getElementById(y+"b"+x);
            elp.style.borderRadius="25px";
            var elp=document.getElementById(y+"a"+x);
            elp.style.borderRadius="25px";            
        }
        if(y==1){            
            if(x==2||x==7){//caballo
            var elp=document.getElementById(y+"b"+x);
            elp.style.borderRadius="20px 0px 0px 0px";
            var elp=document.getElementById(y+"a"+x);
            elp.style.borderRadius="20px 0px 0px 0px";}
            if(x==3||x==6){//alfil              
                var elp=document.getElementById(y+"b"+x);
                elp.style.borderRadius="0px 10px 0px 10px";
                var elp=document.getElementById(y+"a"+x);
                elp.style.borderRadius="0px 10px 0px 10px";
                }
                if(x==5){//rey
                var elp=document.getElementById(y+"b"+x);
                elp.style.borderRadius="15px 15px 0px 0px";
                var elp=document.getElementById(y+"a"+x);
                elp.style.borderRadius="15px 15px 0px 0px";
                }
                if(x==4){//reina
                var elp=document.getElementById(y+"b"+x);
                elp.style.borderRadius="0px 0px 15px 15px";
                var elp=document.getElementById(y+"a"+x);
                elp.style.borderRadius="0px 0px 15px 15px";
                }
        }

    }else if(y==7||y==8){        
    var elp=document.getElementById(y+"a"+x);
    elp.style.backgroundColor="#fff";
    elp.style.boxShadow=("2px 2px 5px "+colorB+",-2px -2px 5px "+colorB+",-2px 2px 5px "+colorB+",2px -2px 5px "+colorB+"");
    var elp=document.getElementById(y+"b"+x);
    elp.style.backgroundColor=colorB;
    if(y==7){
        var elp=document.getElementById(y+"b"+x);
        elp.style.borderRadius="25px";
        var elp=document.getElementById(y+"a"+x);
        elp.style.borderRadius="25px";            
    }
    if(y==8){            
        if(x==2||x==7){//caballo
        var elp=document.getElementById(y+"b"+x);
        elp.style.borderRadius="20px 0px 0px 0px";
        var elp=document.getElementById(y+"a"+x);
        elp.style.borderRadius="20px 0px 0px 0px";}
        if(x==3||x==6){//alfil              
            var elp=document.getElementById(y+"b"+x);
            elp.style.borderRadius="0px 10px 0px 10px";
            var elp=document.getElementById(y+"a"+x);
            elp.style.borderRadius="0px 10px 0px 10px";
            }
            if(x==5){//rey
            var elp=document.getElementById(y+"b"+x);
            elp.style.borderRadius="15px 15px 0px 0px";
            var elp=document.getElementById(y+"a"+x);
            elp.style.borderRadius="15px 15px 0px 0px";
            }
            if(x==4){//reina
            var elp=document.getElementById(y+"b"+x);
            elp.style.borderRadius="0px 0px 15px 15px";
            var elp=document.getElementById(y+"a"+x);
            elp.style.borderRadius="0px 0px 15px 15px";
            }
    }

    }
    if(y==3||y==4||y==5||y==6){
        if(y==3||y==5){
            if(x%2==0){
                var elp=document.getElementById(y+"b"+x);
        elp.style.backgroundColor="#000";
        var elp=document.getElementById(y+"a"+x);
        elp.style.backgroundColor="#000";
            }else{
                var elp=document.getElementById(y+"b"+x);
        elp.style.backgroundColor="#fff";
        var elp=document.getElementById(y+"a"+x);
        elp.style.backgroundColor="#fff";
            }
        }else{
            if(x%2==0){
                var elp=document.getElementById(y+"b"+x);
        elp.style.backgroundColor="#fff";
        var elp=document.getElementById(y+"a"+x);
        elp.style.backgroundColor="#fff";
             }else{
                
        var elp=document.getElementById(y+"b"+x);
        elp.style.backgroundColor="#000";
        var elp=document.getElementById(y+"a"+x);
        elp.style.backgroundColor="#000";
      }
        }
        
    }
    
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
