function colorTodo(x){
 
    document.getElementById("planeta"+x).style.backgroundColor=colorRan();
    document.getElementById("satelite"+x).style.backgroundColor=colorRan();
    //document.getElementById("universo"+x).style.backgroundColor=colorRan();
    document.getElementById("satelite"+x).style.boxShadow="0px 0px "+randomAr(10,1)+"px "+randomAr(10,1)+"px "+colorRan();
    document.getElementById("planeta"+x).style.boxShadow="0px 0px "+randomAr(25,5)+"px "+randomAr(25,5)+"px "+colorRan();

    var num=randomAr(8,3);
    if(num==7){
    document.getElementById("planeta"+x).style.boxShadow="0px 0px "+randomAr(50,10)+"px "+randomAr(25,10)+"px "+colorRan();
    }
    if(num==4){
        document.getElementById("satelite"+x).style.boxShadow="0px 0px "+randomAr(500,100)+"px "+randomAr(50,10)+"px "+colorRan();
    }

}


var planetas=[["",""]];
var numa=120,numb=110;var abajo=true;var dias=0;var nupl=1;var energia=0;

function colorTodos(){
    for(var a=planetas.length-1;a>=0;a--){
        colorTodo(a);
    }nupl++;
}

function movimientoSatelite(n){    
    if(n==1){              
    document.getElementById("satelite"+n).style.top=numa-1+"px";
    document.getElementById("satelite"+n).style.left=numb-1+"px";    
    }else{
    document.getElementById("satelite"+n).style.top=numa+"px";
    document.getElementById("satelite"+n).style.left=numb+"px";
    }

    if(numa>415){;
        abajo=false;
        document.getElementById("satelite"+n).style.zIndex="1";
        document.getElementById("planeta"+n).style.zIndex="10";
    }else if(numa<=110){dias++;
        abajo=true;document.getElementById("satelite"+n).style.zIndex="10";
    }
    if(abajo){    
    numa++;numb++;
    }else{        
    numa--;numb--;
    }energia+=cte;
    document.getElementById("pp0").textContent=dias+" dias "+cte+" estrellas "+nupl+" planetas "+energia+" Energia";
}

function movimientoSatelites(){
    for(var a=planetas.length-1;a>=0;a--){
        movimientoSatelite(a);
    }
}
setInterval("movimientoSatelites()",420);
var cte=1;var eest=10;
function mas(n){var eltea="";

    if(n==2){
        if(energia>=eest){energia-=eest;eest++;
        cte++;
        var laid="es"+cte;
        eltea="<div class='estrella' id='"+laid+"'> </div>";
        document.getElementById("universo"+0).innerHTML+=eltea;
  var iabl=document.getElementById(laid);
        iabl.style.top=randomAr(770,2)+"px";
        iabl.style.left=randomAr(570,2)+"px";
        }else{
            
        }
    }else if(n==3){
        for(var e=cte;e>1;e--){            
            document.getElementById("es"+e).style.width=randomAr(5,1)+"px";
            document.getElementById("es"+e).style.height=randomAr(2,1)+"px";
            document.getElementById("es"+e).style.top=randomAr(770,2)+"px";
            document.getElementById("es"+e).style.left=randomAr(570,2)+"px";
            document.getElementById("es"+e).style.boxShadow="0px 0px "+randomAr(7,1)+"px "+randomAr(1,0)+"px "+colorRan();            
        }
    }else if(n==1){
        cte++;
        var laid="es"+cte;
        eltea="<div class='estrella' id='"+laid+"'> </div>";
        document.getElementById("universo"+0).innerHTML+=eltea;
  var iabl=document.getElementById(laid);
        iabl.style.top=randomAr(770,2)+"px";
        iabl.style.left=randomAr(570,2)+"px";
    }
    
}
function estas2(){
    mas(1);
    //colorTodos();
}
setInterval("estas2()",5000);