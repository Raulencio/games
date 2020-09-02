

var pjs=[["div","top","left","movimiento"],
superheroe=[document.getElementById("cuadro1"),0,0,80],
superheroe=[document.getElementById("cuadro2"),100,100,50],
superheroe=[document.getElementById("cuadro3"),200,50,100],
];
//console.log(superheroe);
function muv(id){
    superheroe[1]=randomAr(420,0);
    superheroe[2]=randomAr(420,0);
    document.getElementById(id).style.top=superheroe[1]+"px";
    document.getElementById(id).style.left=pjs[0][2]+"px";
}
function mov(n){
    for(var e=pjs.length-1;e>0;e--){
    if(n==4){
        //izquierda
        pjs[e][1]-=pjs[e][3];
    }
    else if(n==6){
        //derecha
        pjs[e][1]+=pjs[e][3];
    }
    else if(n==8){
        //arriba
        pjs[e][2]-=pjs[e][3];
    }
    else if(n==2){
        //abajo
        pjs[e][2]+=pjs[e][3];
    }
    pjs[e][0].style.top=pjs[e][2]+"px";
    pjs[e][0].style.left=pjs[e][1]+"px";}
}

//console.log(superheroe);
