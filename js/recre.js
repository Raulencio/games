var multiplicador=1;

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
function maxef(){
    if(enerfil>=maxenerfil){
        enerfil-=maxenerfil;
    maxenerfil*=2;
    }
   
}
function recupera(n){    
    if(div[4][7]<vidaMaximaA){
        if(enerfil>=recup){enerfil-=recup;
            recup++;rps++;
    div[4][7]+=n;}}
if(div[4][7]>vidaMaximaA){
    div[4][7]=vidaMaximaA}
}
function aumat(a){
    if(enerfil>=a){
    enerfil-=a;
        div[1][7]+=a;
        aumd++;
       
    }
}
function aumef(){
    if(enerfil>enerfilaum){
        enerfil-=enerfilaum;
        enerfilaum++;
        
    }
}
function vidmax(){
    if(enerfil>=maxenerfil){enerfil-=maxenerfil;
    vidaMaximaA+=maxenerfil;
    
}
}
function recue(){
    div[4][7]+=enerfil;
    enerfil-=enerfil;
    if(div[4][7]>vidaMaximaA){
        div[4][7]=vidaMaximaA;
    }
}
function guardar(){
    if(!veinte){
    localStorage.setItem("vidaMaximaA",vidaMaximaA);
    localStorage.setItem("aumd",aumd);
    localStorage.setItem("maxenerfil",maxenerfil);
    localStorage.setItem("enerfilaum",enerfilaum);
    localStorage.setItem("ficha",ficha);
    localStorage.setItem("ctne",ctne);
    localStorage.setItem("tofd",div[1][7]);
    localStorage.setItem("recup",recup);
    alert("Guardado");}
}