window.onload=function(){

    $('#iz').click(function () {mostrar("menu1");$("#iz").css("background-color",colorRan());
    $("#de").css("background-color","whitesmoke");
    esconder("menu2");});
    

    $('#de').click(function () {mostrar("menu2");$("#de").css("background-color",colorRan());
    $("#iz").css("background-color","whitesmoke");
    esconder("menu1");});
    

    $('#ar').click(function () {arriba=true;});
     

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

$("#personaje").css("z-index","8");
$("#opersonaje").css("z-index","8");
$("#opersonaje").css("top",50);
$("#opersonaje").css("left",400);

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
        
    $("#iopersonaje").attr("src","https://lh3.googleusercontent.com/d0u0cea5eiyOP9rLxeD2fC0qE7XhhqRozc5Gl18lAOs8y5nHBv0fH47bQwst6nsrGiCIHuaWaApSaRlRzaIc4eSFLoL1i32Qs3AOJe2Ai3Ic4lM0658WUWkiR3RtKY-WXkORsoCiF_yRkJsx_ZFUeNeN0_6CQKis6esawNRyKIzobezrvY1b507HSoCwatfaC8O0N-hvGH_2ZN3FBdnGOBx5sCXi_9eVClgYOVBTv77Eu6cIrxHZpUtmzOMK8vMrWy4BL07Ff86HBlLxHwxBkvHLRF4Gdc9e3FS1OOeAvHzNcCL-80SIlgophd2JcvC-WBVf5hYnOgsSZ60ZYht-zF053BNoHg6n7-T6DWUTDOBwjjk1crM_3yI3RgmAntNQQgpj_j6r0HfbSp_5t62lGC6atX-0GFzjmygqtWPRfFSBnkX9t9pNu-XhyiiVpUJibvv1PFpUddILwqkavGAsrW8e4KGFPQ96qdCl5t0_EjhA-zvv-LO_rvcJHuFIgh_CXpM7hJI7pem3IlkbsMHJ9Ytt6E7Y0gpw2b1JqHbuq81RlTig1CTV9lJ-RI22Zpry5o4wgttCpzMFsPmL7FRbJaGIROL_VjH_qKoDjy7pZ5yEthjohhoher_RruWvS4UnPtStT-UgfhXctc2ykUR0gtdwn2v17sPEH56XqNV4Y1ui75n23vZe4cxgWQpmzTQ=w50-h100-no?authuser=0");
    var fp=(randomAr(3,0));
    $("#iFP").attr("src",cual[fp].url);

for(var e=1;e<5;e++){
    $("#cuadroP"+e).append("<img src='"+infoPjs[e-1].url+"'>");
    $("#cuadroA"+e).append("<img width='100%' src='"+cual[e-1].url+"'>");
}
    
}