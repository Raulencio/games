function aventura(){
    cambiarColor()
    document.getElementById("dInicio").hidden=true;
    document.getElementById("dOtro").hidden=false;
    document.getElementById("histor").hidden=false;
    document.getElementById("superv").hidden=true;

    document.getElementById("lys").style.filter="grayscale(0%)"
    cambiarColor();
}
function palante(){
    document.getElementById("dOtro").hidden=true;
    document.getElementById("dnj").hidden=false;
    deselec();
}

function cancelados(){
    document.getElementById("dOtro").hidden=true;
    document.getElementById("dInicio").hidden=false;
    document.getElementById("superv").hidden=false;
    deselec();
}

 function patra(){
    document.getElementById("dInicio").hidden=false;
    document.getElementById("dnj").hidden=true;
    deselec();
}

// function cancelatres(){
//     document.getElementById("dOtro").hidden=true;
//     document.getElementById("dInicio").hidden=false;
// }
var yasi=false;
function deselec(){
    if(yasi){yasi=false;
    document.getElementById("r"+nlibr).style.backgroundColor="#0c0c83a8";
    document.getElementById(tlibr).style.color="#ffffff";
    document.getElementById("adelanti").hidden=true;
    }
}

var nlibr=0;tlibr="";
function borde(n,p){ yasi=true;

    if(nlibr>0){
        deselec();yasi=true;
    }

    nlibr=n;
    tlibr=p;   
    if(n==1){document.getElementById("adelanti").hidden=false;}
    document.getElementById("r"+n).style.backgroundColor="#ffffff";
    document.getElementById(p).style.color="#000099";
}

var text_wan=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];

var sum_c=0;

function paquesepa(){
    if(nlibr==1){
        if(numPagina==1){sum_c=0;}
        if(numPagina==2){sum_c=6; 
            // for(var i=1;i<=6;i++){
            //     document.getElementById("cuadro"+i).src=comic_wan[i+6];
            //     document.getElementById("textoc"+i).textContent=text_wan[i+6];
            //     }
                
        }
        if(numPagina==3){sum_c=12; 
            // for(var i=1;i<=6;i++){
            //     document.getElementById("cuadro"+i).src=comic_wan[i+12];
            //     document.getElementById("textoc"+i).textContent=text_wan[i+12];
            //     }
        }
        if(numPagina==4){sum_c=18; 
            // for(var i=1;i<=6;i++){
            //     document.getElementById("cuadro"+i).src=comic_wan[i+18];
            //     document.getElementById("textoc"+i).textContent=text_wan[i+18];
            //     }
        }        
        if(numPagina==5){sum_c=24; 
            // for(var i=1;i<=6;i++){
            //     document.getElementById("cuadro"+i).src=comic_wan[i+24];
            //     document.getElementById("textoc"+i).textContent=text_wan[i+24];
            //     }
        }
        if(numPagina==6){sum_c=30;}
        if(numPagina==7){sum_c=36;}
        if(numPagina==8){sum_c=42;}
        if(numPagina==9){sum_c=48;}
        if(numPagina==10){sum_c=56;}

        for(var numi=1;numi<=6;numi++){
            document.getElementById("cuadro"+numi).src="comisk/cuadro"+(numi+sum_c)+".png";
            document.getElementById("textoc"+numi).textContent=text_wan[(numi+sum_c)];
            }
    }
    if(nlibr==2){
        if(numPagina==1){sum_c=60;}
    }
}
var juego=0;
function clickPlay(){
    if(nlibr==1){porsupuesto=true;
        document.getElementById("dnj").hidden=true;
        document.getElementById("dpan").hidden=false;
        paquesepa();
    }
    imggris();
}
var conf=true;
function confg(){

    if(conf){
        conf=false;
        document.getElementById("conf").hidden=false;
    }else{
        conf=true;
        document.getElementById("conf").hidden=true;
    }

}
var numPagina=0;
var verdad=true;
///       0  ,  1  ,   2 ,  3 , 4 , 5 ,  6 ,   7   , 8 ,  9 , 10  , 11  
//esto significa que cuando estoy en esa pagina me permite pasar a la siguiente
var pag=[true,true,true,true,true,false,false,true,true,true,true,false]

function imggris(){

    if(verdad){verdad=false;
        if(cvinvt){
            mosinv();
        }
        document.getElementById("dia").hidden=true;
        document.getElementById("invg").hidden=true;                
        document.getElementById("icomic").hidden=false;
        

        document.getElementById("fleD").hidden=false;
        if(numPagina>0){
        document.getElementById("fleI").hidden=false;
        }

    }else{verdad=true;               
        document.getElementById("fleD").hidden=true;
        document.getElementById("fleI").hidden=true;
        document.getElementById("dia").hidden=false;
        document.getElementById("invg").hidden=false;
        document.getElementById("icomic").hidden=true;
    }

   }

   function dialogo(){
       document.getElementById("pdt").textContent="como estan";
       document.getElementById("ch").src="img/cuadrocuadrado.png";
   }
   function pensamiento(){
       document.getElementById("ch").src="img/cuadropensamiento.png";
       document.getElementById("pdt").textContent="espero no sea tarde";
   }
   var oculte=false;
   function hastadonde(){
       var conf=false;
       if(pag[numPagina]){
        conf=true;
        if(numPagina==9){
            oculte=true;
        }
       }
       return conf;
   }


   function mas(){
    var sepuede=false;   
    sepuede=hastadonde();
    if(sepuede){
       numPagina++;
       document.getElementById("nupg").textContent=numPagina;
       
       if(numPagina>0){
        document.getElementById("fleI").hidden=false;
        document.getElementById("pgs").hidden=false;
        document.getElementById("prt").hidden=true;
        }
        if(!(pag[numPagina])){
            document.getElementById("fleD").hidden=true;
        }
        paquesepa();
    }
   }

   function menos(){
       if(numPagina<11){
           oculte=false;
       }
       numPagina--;       
       document.getElementById("nupg").textContent=numPagina;       
       if(numPagina==0){
        document.getElementById("prt").hidden=false;
        document.getElementById("fleI").hidden=true;
        document.getElementById("pgs").hidden=true;
        }
        if(!oculte){
            document.getElementById("fleD").hidden=false;
        }paquesepa();
   }
   var cvinvt=false;//el inventario
   function mosinv(){
    if(cvinvt){cvinvt=false;        
        document.getElementById("noche").hidden=true;
    }else{cvinvt=true;        
        document.getElementById("noche").hidden=false;
    }
   }
var porsupuesto=false;
   function salir(){confg();
    if(porsupuesto){porsupuesto=false;
    document.getElementById("delJuego").hidden=true;  
    document.getElementById("dpan").hidden=true;  
    document.getElementById("dInicio").hidden=false;   
    }
   }