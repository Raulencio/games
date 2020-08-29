function colorTodo(x){
    try{
    document.getElementById("planeta"+x).style.backgroundColor=colorRan();
    document.getElementById("satelite"+x).style.backgroundColor=colorRan();
    document.getElementById("universo"+x).style.backgroundColor=colorRan();
    document.getElementById("satelite"+x).style.boxShadow="0px 0px "+randomAr(10,1)+"px "+randomAr(10,1)+"px "+colorRan();
    document.getElementById("planeta"+x).style.boxShadow="0px 0px "+randomAr(25,5)+"px "+randomAr(25,5)+"px "+colorRan();
    }catch{

    }
    var num=randomAr(10,0);
    if(num==7){
    document.getElementById("planeta"+x).style.boxShadow="0px 0px "+randomAr(50,10)+"px "+randomAr(25,10)+"px "+colorRan();
    }
    if(num==4){
        document.getElementById("satelite"+x).style.boxShadow="0px 0px "+randomAr(500,100)+"px "+randomAr(50,10)+"px "+colorRan();
    }

}


var planetas=[["",""]];
function colorTodos(){
    for(var a=planetas.length-1;a>=0;a--){
        colorTodo(a);
    }
}
setInterval("colorTodos()",10000);
var numa=120,numb=110;var abajo=true;var orbital=420;var dias=0;

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
    }else if(numa<=115){dias++;
        abajo=true;document.getElementById("satelite"+n).style.zIndex="10";
    }
    if(abajo){    
    numa++;numb++;
    }else{        
    numa--;numb--;
    }
    document.getElementById("pp0").textContent=dias+" dias";
}

function movimientoSatelites(){
    for(var a=planetas.length-1;a>=0;a--){
        movimientoSatelite(a);
    }
}
setInterval("movimientoSatelites()",orbital);
