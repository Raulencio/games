var ptop=200,pleft=200,pwidth=250,pheight=250;

function colorTodo(x){

    if(energia>10000){document.getElementById("planeta"+x).style.background="linear-gradient("+colorRan()+","+colorRan()+","+colorRan()+","+colorRan()+","+colorRan()+")";
    }
    else if(energia>1000){document.getElementById("planeta"+x).style.background="linear-gradient("+colorRan()+","+colorRan()+","+colorRan()+")";
    }
    else if(energia<=1000){document.getElementById("planeta"+x).style.background="linear-gradient("+colorRan()+","+colorRan()+")";
    }

    document.getElementById("astro"+x).style.background="linear-gradient("+colorRan()+","+colorRan()+")";    
    //document.getElementById("universo"+x).style.backgroundColor=colorRan();
    document.getElementById("astro"+x).style.boxShadow="0px 0px "+randomAr(5,1)+"px "+randomAr(5,1)+"px "+colorRan();
    document.getElementById("planeta"+x).style.boxShadow="0px 0px "+randomAr(25,5)+"px "+randomAr(25,10)+"px "+colorRan();

    var num=randomAr(8,3);

    if(num==7){document.getElementById("planeta"+x).style.boxShadow="0px 0px "+randomAr(25,5)+"px "+randomAr(15,1)+"px "+colorRan();
    }
    if(num==4){document.getElementById("astro"+x).style.boxShadow="0px 0px "+randomAr(15,10)+"px "+randomAr(5,1)+"px "+colorRan();
    }
}


var planetas=[["",""]];

var numa=120,numb=110;var abajo=true;var dias=0;var nupl=1;var energia=0;

function colorTodos(){for(var a=planetas.length;a>=0;a--){colorTodo(a);}nupl++;}

function movimientoastro(n){    
    //console.log(numa);    
    var asn=document.getElementById("astro"+n);

    if(n==1){asn.style.top=numa-1+"px";asn.style.left=numb-1+"px";    
    }
    else{asn.style.top=numa+"px";asn.style.left=numb+"px";
    }

    if(numa>415){;
        abajo=false;
        document.getElementById("astro"+n).style.zIndex="1";
        document.getElementById("planeta"+n).style.zIndex="10";
    }
    else if(numa<=110){dias++;abajo=true;document.getElementById("astro"+n).style.zIndex="10";
    }

    if(abajo){numa++;numb++;
    }
    if(!abajo){numa--;numb--;
    }
    energia+=cte;energia-=(nupl*(dias+nupl));

    document.getElementById("pp0").textContent=dias+" dias "+cte+" estrellas "+nupl+" planetas "+energia+" Energia";

}

function movimientoastros(){
    for(var a=planetas.length-1;a>=0;a--){
        movimientoastro(a);
    }
}

setInterval("movimientoastros()",250);

var cte=1;var eest=10;

function unnomb(){
    var elnom="-";
    for(var e=9;e>0;e--){elnom = elnom + generarLetra(35) ;}    
    return elnom;
}
function nombre(nom){
alert(nom+"-");
}
function mas(n){var eltea="";
    
    if(n==2){
        if(energia>=eest){energia-=eest;eest++;
        cte++;
        var laid="es"+cte;var noms=unnomb();
        eltea="<div class='estrella' id='"+laid+"' onClick='nombre("+noms+")'> </div>";
        document.getElementById("universo"+0).innerHTML+=eltea;
        var iabl=document.getElementById(laid);
        iabl.style.top=randomAr(840,2)+"px";
        iabl.style.left=randomAr(600,2)+"px";
       

        }else{document.getElementById("universo"+0).innerHTML=eltea;cte=0;
            
        }
    }else if(n==3){
        for(var e=cte-1;e>1;e--){                        
            document.getElementById("es"+e).style.width=randomAr(2,1)+"px";
            document.getElementById("es"+e).style.height=randomAr(2,1)+"px";
            document.getElementById("es"+e).style.top=randomAr(839,2)+"px";
            document.getElementById("es"+e).style.left=randomAr(599,2)+"px";
            document.getElementById("es"+e).style.boxShadow="0px 0px "+randomAr(20,10)+"px "+randomAr(2,0)+"px "+colorRan();            
        } 
       
    }else if(n==1){
        cte++;
        var laid="es"+cte;
        eltea="<div class='estrella' id='"+laid+"'> </div>";
        document.getElementById("universo"+0).innerHTML+=eltea;
    var iabl=document.getElementById(laid);
        iabl.style.top=randomAr(839,2)+"px";
        iabl.style.left=randomAr(599,2)+"px";
    }
    
}
function estas2(){mas(1);//colorTodos();
energia-=dias;}
setInterval("estas2()",10000);

 var esa="es2";var posicion=0;var altura=0;var modofugaz=0;var efugaz;
function estrellafugaz(){
     modofugaz=randomAr(4,1);
     var num=randomAr(cte,2);
     esa=("es"+num);
     efugaz=document.getElementById(esa);
     switch(modofugaz){
      case 1:efugaz.style.transform=("translate(0px,-420px)");break;
      case 2:efugaz.style.transform=("translate(420px,-0px)");break;
      case 3:efugaz.style.transform=("translate(-420px,0px)");break;
      case 4:efugaz.style.transform=("translate(0px,420px)");break;
      }
//     posicion=randomAr(400,100);altura=randomAr(600,300);energia+=cte*nupl;
 }

 setInterval("estrellafugaz()",40000);

// function dsf(){
//     var unnum=randomAr(20,5);
//     return unnum;
// }

// function movimiento(){
    
//     if((modofugaz==1)&&(altura>0)){altura-=dsf;}
//     if((modofugaz==2)&&((altura>0)&&(posicion>600))){altura-=dsf;posicion+=dsf;}
//     if((modofugaz==3)&&(posicion<600)){posicion+=dsf;}
//     if((modofugaz==4)&&(altura<840&&posicion<600)){altura+=dsf;posicion+=dsf;}
//     //if((modofugaz==5)&&(altura<840)){altura+=dsf;}
//     //if((modofugaz==6)&&((altura<840)&&(posicion>0))){altura+=dsf;posicion-=dsf;}
//     //if((modofugaz==7)&&(posicion>0)){posicion-=dsf;}
//     //if((modofugaz==8)&&(altura>0&&posicion>0)){altura+=dsf;posicion+=dsf;}

//     document.getElementById(esa).style.top=altura+"px";
//     document.getElementById(esa).style.left=posicion+"px";
// }

// setInterval("movimiento()",50);

for(var e=2;e>=0;e--){
    mas(1);}
    var moo=1;
function movimientoo(n){
    //document.getElementById("asteroide"+n).transition="all 2s";  
    if(moo==1){
    document.getElementById("asteroide"+n).style.transform=("translate(0px,-420px)");moo++;
    }else if(moo==2){
        document.getElementById("asteroide"+n).style.transform=("translate(0px,0px)");moo--;
    }
      
}