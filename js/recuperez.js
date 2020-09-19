if(parseInt(localStorage.getItem("enerfilaum"))>1){
    var enerfilaum=parseInt(localStorage.getItem("enerfilaum"));
}else{enerfilaum=1;
}

if(parseInt(localStorage.getItem("maxenerfil"))>1){
    var maxenerfil=parseInt(localStorage.getItem("maxenerfil"));
}else{maxenerfil=10;
}

if(parseInt(localStorage.getItem("ficha"))>0){
    var ficha=parseInt(localStorage.getItem("ficha"));
}else{ficha=0;
}

if(parseInt(localStorage.getItem("ctne"))>1){
    var ctne=(parseInt(localStorage.getItem("ctne")))-1;
}else{ctne=0;
}

if(parseInt(localStorage.getItem("vidaMaximaA"))>1){
var vidaMaximaA=parseInt(localStorage.getItem("vidaMaximaA"));
}else{vidaMaximaA=randomAr(1000,420);
}
if(parseInt(localStorage.getItem("aumd"))>1){
    var aumd=parseInt(localStorage.getItem("aumd"));
}else{aumd=1;
}
if(parseInt(localStorage.getItem("tofd"))>1){
    var unas=parseInt(localStorage.getItem("tofd"));
}else{unas=1;
}
if(parseInt(localStorage.getItem("recup"))>1){
    var recup=parseInt(localStorage.getItem("recup"));
}else{recup=50;
}
if(parseInt(localStorage.getItem("multiplicador"))>1){
    var multiplicador=parseInt(localStorage.getItem("multiplicador"));
}else{multiplicador=1;
}
if(parseInt(localStorage.getItem("segundo"))>1){
    var segundo=parseInt(localStorage.getItem("segundo"));
}else{segundo=0;
}
if(parseInt(localStorage.getItem("rps"))>1){
    var rps=parseInt(localStorage.getItem("rps"));
}else{rps=0;}

if(parseInt(localStorage.getItem("enerfil"))>=0){
    var enerfil=parseInt(localStorage.getItem("enerfil"));
}else{enerfil=1000;}

if(parseInt(localStorage.getItem("vma"))>=0){
    var vma=parseInt(localStorage.getItem("vma"));
}else{vma=vidaMaximaA;}



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
        localStorage.setItem("multiplicador",multiplicador);
        localStorage.setItem("segundo",segundo);
        localStorage.setItem("rps",rps);
        localStorage.setItem("enerfil",enerfil);
        localStorage.setItem("vma",div[4][7]);
    
        //alert("Guardado");
    
       div[17][6]=false;
    
    }
}