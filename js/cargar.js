function menuesdeColores(idm,idb){
    esconder("menu1");
    esconder("menu2");
    esconder("menu3");
    esconder("menu6");
    esconder("menu7");
    esconder("menu8");

    $("#btns1").css("background-color","whitesmoke");
    $("#btns2").css("background-color","whitesmoke");
    $("#btns3").css("background-color","whitesmoke");
    $("#btns6").css("background-color","whitesmoke");
    $("#btns7").css("background-color","whitesmoke");
    $("#btns8").css("background-color","whitesmoke");

    mostrar(idm);    
    let colorM=colorRan();
    $(idb).css("background-color",colorM);
    $("#"+idm).css("background-color",colorM);
}
window.onload=function(){

    $('#btns1').click(function () {        
        menuesdeColores("menu1","#btns1");         
    });
    
    $('#btns2').click(function () {menuesdeColores("menu2","#btns2");
    });
    

    $('#btns3').click(function () {menuesdeColores("menu3","#btns3");
    });    
    $('#btns6').click(function () {menuesdeColores("menu6","#btns6");
    });     

    $('#btns7').click(function () {menuesdeColores("menu7","#btns7");
    });     

    $('#btns8').click(function () {menuesdeColores("menu8","#btns8");
    });     


    $('#ab').click(function () {abajo=true;});
    

    $("#pantalla1").click(function (){esconder("pantalla1");mostrar("pantalla2");});

    $("#btn1").click(function (){  //izquierda
        if(pLeft>0){
            pLeft-=50; document.getElementById("ipersonaje").style.transform="scale(-1,1)";
        $("#personaje").css("left",pLeft+"px");
        }
     });
     $("#btn2").click(function (){   //derecha
         if(pLeft<650){
        pLeft+=50; document.getElementById("ipersonaje").style.transform="scale(1,1)";
        $("#personaje").css("left",pLeft+"px");
        }
     });
     $("#btn3").click(function (){  
        if(pTop>50){
            pTop-=25;
        $("#personaje").css("top",pTop+"px");
        if(pTop==50){
            $("#personaje").css("z-index","7");
        }else if(pTop==75){
            $("#personaje").css("z-index","8");
        }else if(pTop==100){
            $("#personaje").css("z-index","9");
        }
        }
     });
     $("#btn4").click(function (){  
         if(pTop<100){
            pTop+=25;
        $("#personaje").css("top",pTop+"px");
        if(pTop==50){
            $("#personaje").css("z-index","7");
        }else if(pTop==75){
            $("#personaje").css("z-index","8");
        }else if(pTop==100){
            $("#personaje").css("z-index","9");
        }
        }
     });
     $("#todo").click(function (){  
        oro+=nivel*(conteo-1);
        conteo=1;
        apareceEnemigo();unavez=false;
     });

$("#personaje").css("z-index","8");
$("#opersonaje").css("z-index","8");
$("#opersonaje").css("top",50);

$("#pantalla1").css("z-index","10");
$("#pContinuar").text("> Click para continuar <");

var numero=$("#fondo").width();

    numero=Number(numero);
    numero-=veces;
    numero/=2;
    numero=Math.floor(numero);
    $("#fondo").css("padding-left",""+numero+"px");
    numero2=Number($("#fondo").width());
    $("#fondo").width(numero2-numero); 
     var fp=(randomAr(3,0));
    $("#iFP").attr("src",cual[fp].url);

for(var e=1;e<5;e++){
    $("#cuadroP"+e).append("<img src='"+infoPjs[e-1].url+"'>");
    $("#cuadroA"+e).append("<img width='100%' src='"+cual[e-1].url+"'>");
}
seleccionarP(randomAr(4,1));
seleccionarA(randomAr(4,1));
}

document.addEventListener("keydown",function(e){
    if(e.keyCode=="37"||e.keyCode=="65"){
        $("#btn1").click();}
    if(e.keyCode=="39"||e.keyCode=="68"){     
        $("#btn2").click();}
    if(e.keyCode=="38"||e.keyCode=="87"){
        $("#btn3").click();}
    if(e.keyCode=="40"||e.keyCode=="83"){
        $("#btn4").click();}

    if(e.keyCode=="32"){//espacio
        ataque();
    }
    }
);