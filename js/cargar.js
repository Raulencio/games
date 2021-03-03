window.onload=function(){

    $('#iz').click(function () {mostrar("menu1");$("#iz").css("background-color",colorRan());
    $("#de").css("background-color","whitesmoke");$("#ar").css("background-color","whitesmoke");
    esconder("menu2");esconder("menu3");});
    
    $('#de').click(function () {mostrar("menu2");$("#de").css("background-color",colorRan());
    $("#iz").css("background-color","whitesmoke");$("#ar").css("background-color","whitesmoke");
    esconder("menu3");esconder("menu1");});
    

    $('#ar').click(function () {mostrar("menu3");$("#ar").css("background-color",colorRan());
    $("#iz").css("background-color","whitesmoke");$("#de").css("background-color","whitesmoke");
    esconder("menu2");esconder("menu1");});     

    $('#ab').click(function () {abajo=true;});
    

    $("#pantalla1").click(function (){esconder("pantalla1");mostrar("pantalla2");});

    $("#btn1").click(function (){  
        if(pLeft>0){
            pLeft-=50;
        $("#personaje").css("left",pLeft+"px");
        }
     });
     $("#btn2").click(function (){  
         if(pLeft<650){
        pLeft+=50;
        $("#personaje").css("left",pLeft+"px");
        }
     });
     $("#btn3").click(function (){  
        if(pTop>0){
            pTop-=50;
        $("#personaje").css("top",pTop+"px");
        if(pTop==0){
            $("#personaje").css("z-index","7");
        }else if(pTop==50){
            $("#personaje").css("z-index","8");
        }else if(pTop==100){
            $("#personaje").css("z-index","9");
        }
        }
     });
     $("#btn4").click(function (){  
         if(pTop<100){
            pTop+=50;
        $("#personaje").css("top",pTop+"px");
        if(pTop==0){
            $("#personaje").css("z-index","7");
        }else if(pTop==50){
            $("#personaje").css("z-index","8");
        }else if(pTop==100){
            $("#personaje").css("z-index","9");
        }
        }
     });
     $("#todo").click(function (){  
        if(unavez){
        oro+=nivel*conteo;}
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