function nose(nen){
if(nen=="1"){
    if(div[6][6]){
    div[6][6]=false;    
    }else{
    div[6][6]=true;
    }
}else if(nen=="2"){
    if(div[5][6]){
    div[5][6]=false;
    }else{
        div[5][6]=true;
    }
}
}
var mejoraenerfil=2;
function maxef(){
    for(var e=multiplicador;e>=1;e--){
    if(enerfil>=maxenerfil){
        enerfil-=maxenerfil;
    maxenerfil*=mejoraenerfil;
    }
}
}
function recupera(n){    
    for(var e=multiplicador;e>=1;e--){
    if(div[4][7]<vidaMaximaA){
        if(enerfil>=recup){enerfil-=recup;
            recup++;rps++;
    div[4][7]+=n;}}
if(div[4][7]>vidaMaximaA){
    div[4][7]=vidaMaximaA}
}}
function aumat(a){
    for(var e=multiplicador;e>=1;e--){
    if(enerfil>=a){
    enerfil-=a;
        div[1][7]+=a;
        aumd++;
       
    }
}
}
function aumef(){for(var e=multiplicador;e>=1;e--){
    if(enerfil>enerfilaum){
        enerfil-=enerfilaum;
        enerfilaum++;
        
    }
}}
function vidmax(){
    if(enerfil>=maxenerfil){enerfil-=maxenerfil;
    vidaMaximaA+=maxenerfil;
    
}
}
function recue(){for(var e=multiplicador;e>=1;e--){
    div[4][7]+=enerfil;
    enerfil-=enerfil;
    if(div[4][7]>vidaMaximaA){
        div[4][7]=vidaMaximaA;
    }
}}
function mult(){
    
if(parseInt(document.getElementById("trt").value)>=1){multiplicador=parseInt(document.getElementById("trt").value);}
else{
    multiplicador=1;
}
    div[9][1]=colorRan();
}
