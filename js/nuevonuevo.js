var nombre="";

var narmaequipada=1;
var pequipado=1;
var nPjs=5;
var nArmas=5;
var cual=[
    {nombre:"espada de hielo",ataque:3000,defensa:200,probCrit:40,dmgCrit:20,recuperacion:50,vida:2000,alcance:4
    ,url:"https://lh3.googleusercontent.com/qTCY8Ts0_fFUaKAqg1Oo06RTbTKzYlZ-_hcfPTzxD2xfsvYUeGZu_YKWcILimayHQAO8J8KZvAWTagCNQjgN8-hvAamRomecbQZF93zXVXYo_y7vx1bOIqrkYKJa9JhfPbxgUn83jKWeRtPgzGMkm4M1E2qkSZrdRbPxWbScj6LD4XN65mpY2xG1IZgz7NHyn_Dm-okw5h0nYKXVqCRcj1Thzg6jj_R04x2lur9WIAKHEim-z1ZizYODKQL5qwWbZRTisGw4FWe3ArbqV1lWkWkzLIFZ0DbvyraByL05BpYZ0KBSiyaHegTrDao0jxZBQ3F0BThbYEROM1lFqNkzPONvPh7ueNUPT-7JuZCk2qmKHwibYt_Aipa9Dwy-jLQrhrGFNF_GLmdVs65WbsDGOGdMNJ28Mvx2fyMhG_44pMI-R1nS9twy-CZUEgHHNlvaSsQU8McxmX3RuxTMgVEthq8lLIarp8BQJvwwUdgIsH2NOg7_qzwXXA1wdBD0eapyQ3LaLa-CZTq3Le8DXfLaH-ZX-2LjFIJh7bx5Zasro2xq3MPoqDDj65f6C2QtYusg5BKNIscWSQSIr-neqPqHVODwwEmEtNI120aVEh-9J71CB0Db3noYsfOqqZn1TPjqh28tfIAeLtsNzH-t9g5ufA2swXTokMQyvzMHn6_gb8LW92FjaMX4yZ79yI8MLic=w450-h150-no?authuser=0"}
    ,{nombre:"espada de fuego",ataque:4200,defensa:400,probCrit:10,dmgCrit:30,recuperacion:50,vida:5000,alcance:2
    ,url:"https://lh3.googleusercontent.com/9AbUcqcOyLnUcp76PoldOwKDzlpZQg9yUA7HUxBmB0stbQyV1CEYhwgiX6wQvBZ55BU1pVLzytt6Hj8dhqmJhXuzTn0jjObMh0ND68FruMZUJALsYWEcPDBk_w6d2AkDGtzLQ3BnqkjlBPHv5re0DBGeoP0-QBzvEjXWyODtUzoCV-_Bot-7KYwltFYGASNa7TgxRP9ixA5Z8xn7ZpPxp-XRPtOI1NH7nqKJVTd0usz0cz7sQehJTxiCcpeKYvWZUI0zy7LXzu3ErZbs1v7q2pGrsN8I2T6PMovhxxE1_LL9xCS4XhhoD7mTJOxOcIhyjKqX7UpMjZ_iGj4AZE1nDqiUqet5VID5y8tu4exYgJRahJD0qn3ClHyo85Qt-yKhuJYpqp3O0mzt6ctQsuEE3PT_cNQXmEclqY-kogtb0K7JguWyAkNptC6mvyAyQcREzKDOblfVCa4YEAoyLWf-aJUXcOE7_xyEwCB6S-N2L-6TODn2rELVmEy8aLWckKGrTSsl3qTrSgPzo8TF3d-vQ1UxUvotFPEDdjhn0-qxNV_s72gqcyNPCzBrrDPtJ70iOvfQREcy0zbPJ0hwC3Y0iefXjxfJlhWe5PVJzLmhHFl_PltAuHpRFRUF3KvZtBNyXPRblwnMsXCPTbaAzUmQSeATrC-6gSMCndq5iOCZgnr5dwA_kJHf04TQVJBxAzg=w450-h150-no?authuser=0"}
    ,{nombre:"espada del bosque",ataque:2500,defensa:1500,probCrit:20,dmgCrit:100,recuperacion:200,vida:3000,alcance:1
    ,url:"https://lh3.googleusercontent.com/A6zMcmD1AF3VW_pG9GVY3vm6Nuf2W9FZ3MPoRyXi875mgJLghHq-QLjnqm-UYmjkJQ0fsALVCOItgN_GLR2xLEwiYy8WL5LJmmQSgrsdJR02SGvQK_CoyRgX0aGjdJ8t18H5Yed-EGmQD3SowgZWJkWl7JSJdOH1K0Mq6V-RM589IlYT5BlZDdhPvzcPRrRQXapOG-QOj93gpJ9IZi0nLmSbQNLL2_XneuEw3_XSivJj1_cBnpupVWcx-qDgCzJQNkxoMU57p1uV4dZV65rasaySrS6rpE0vkGXS-ZG8gU41IKHuLEo9UiqhDTTxvZSi0pqDUmMIFMFkjfZYdUT0kLhveZ4xgNuwfFsj35-RSF1C4VTBlDGGQzP_7SxTlrwz_pe04i7BewXf9Ecz1eqhqnNjKCjY8YhrI6HkFoogqHVPSURohfHEvy4Y1HWqCDTHQXPgB1qEugvMdeTMaSseq3kE0m7qIMLVaMT2UO7QbjEMRO3P5o2ku-cHs6Ps8ZY_cfuV0vw9TQeV9F6Ad9ieXlw-noeW9Gbug1dY0uMyzRJjQdwCaJ68coDneUJi082xljoDr_saPzpzKy3wancbk1rSXgWOf9iS45skqYdvp5HOhVrqudnAPvozJhyQKpY2FJRLZpomGEZ12_tusGOz-lPX3Hb4csR8d9Tq2Ytf4or5sX98yXK0KcYbB6oy4T0=w450-h150-no?authuser=0"}
    ,{nombre:"katana filosa",ataque:3500,defensa:0,probCrit:50,dmgCrit:150,recuperacion:100,vida:1500,alcance:1
    ,url:"https://lh3.googleusercontent.com/UC3xiyNXJ4-jhQJCIJtuL_h9rtdr1pk-F0yDvvQIAhB9VffPsNbw5h4U9IMr-URpjaq3gKlr4MkApbGODS_cY31V7k6R2M5ytifGjr6ca3Mja8rihoNfvdsR8z_kyeFAAvkFbqCoujPLlEAOtHPmXpHheYSYn79JKYNhdT0yv7mFgt118e-O0-bqO5NYXUPz-W2VOT_X-fNzTLk-zAtI-laJklmGEqwP9xiOd-6cVkSR1Ljckjo8KT9CsR4dMF4Tz4hsmBUak6y9WbmgggSZzdvYcr22aP0pvSYijxzQ3Fw3A7e8yRImDeRaTnEaRyHteL9x29_1xjwfDRACse6yKNZuRfDzu_8j6m0BW6dnV8GtOjMlP5piq82JYEguiSYkOveW63bNfyBjobBixDgtbui-IEacWlxkMndcnqJ0Ql-XKMMb7hCJRgYZSJ04qo5tuMWFfSEIYYDsYBd08onmlRAbGQlFunKIyvRIOcmK9IqKT6vqDK5BT0auvNGaou7E4fjLe2E9RUEgVK53mYS7J5ws3GY_EHkdawSorGYANr0GiuVMDSChlcNPlWcBs5MY6Gx5W4BJySdIffySCPY4H1h-GMVk0DG14n4oplMP2ue9oPw83nmTLNLDc4vuWg9eDyRTaJ6P_MJHgPrO1pKhEEuUCSf_ngKDGRPFvOEjduyHWOMeUlhVW3-po8NgcZo=w450-h150-no?authuser=0"}
    ]

    var infoPjs=[
        {nombre:"Yohiro",vidamax:3000
            ,ataque:1200,defensa:700,probCrit:30
            ,dmgCrit:170,recuperacion:50
            ,url:"https://lh3.googleusercontent.com/2NIx7PqqMuUIF80LIXCuENNvXrR9T5h_fseWxTki35S4MHFbL2bESwBdKcCl6qkEJHw4Q-gibyGhBAbbu99ytUwb8ky_-RON4qV1FREet_Ca_8dzS10utCtQ3_AwSVWZ7B0E0o7xlNhOAwvC7yqc6YU4hXPQh79_djSLo23ELyXW6BUrviYI5_boayEiy9GbvLX8nbh9BwECpSGiKoPYUQTg2-YkNIBxujcICf0RlxIkrJqhgOt3VQp7sOuwVfktD4VxnZ-rLIVzJo9X-HOB4z3jHxU5n1AM5r5_0LYLSQEA1ftGRjdtDM3hTpXtP4q1ZgznC_4Ko9b6gbnm_owggiFCELwT6c1IEFoHVWE5Q2RgC45THP0dJWWqYBsI24j9uK4SUxtmY_Bf3asl654zI1CElMcEydxdOPwz3gjFOTnISXZvn6xcG3r9RiAwg2cuJAV2iC3LxoQ2aE0d4TeJpaodAqNnvspYFyYgwjV5lNbJKqyNR1BI2xtldrgdexa1dXBJzZCtMZcLydgnsreqRFqVxXRa_GPY-zx5KdEMHB5rlfIpbNdzejnjGoUxk9KFJpNiaRwu8x7tCBi_AG7aFuQjOezxlOtKhscbSiXdFu_c1u0wAgQtY77e9WVPrH6sYrnMX6FI2rbbOGEH8vydEwWGjYNBwRj_KyxEyypmmPIktrnI9beMLEef6ACBPqU=w50-h100-no?authuser=0"}
            ,
        {nombre:"Rain",vidamax:1700
        ,ataque:1800,defensa:1000,probCrit:40
        ,dmgCrit:120,recuperacion:200
        ,url:"https://lh3.googleusercontent.com/rByffD1Yc82VjltG_o49spYycjq4v95PWUlhJ_558DSxd259v3kqLVOZOg95jqNUXx-SLC_Ig2WyhPn26JbaX6-4bVaDk9sc0BzMrsV__JQmU9MbvMUKGO_BuMsQ7TyDvj05QqljrOsLakph3FePUVXaBqDNC61zK0Me4dzs9J-tnuc6IFmtBAt5wqGEWURvdQne52SNVYiDRbWBA_zjOhI7YCBA9AfUVirlDR8MJa7txrkz0GLtlvsqbNL0iH8A9A1Q8tVp4J7LPIKIacotz-3_Vru4aaUZiVW2cGyGiiyPaTBLslzdCrvydYPRk060yWcpFFK3Lwg7kGZLxo6mwz9Vf6w7m2shggl8VDZb6ehMAeR-u_r1U3mnCgtvNL8U5FtYiOJkEp-Vj7Pa9trK90otMsE5iV4ZvOu-G-TjADDoAHHAruyQIfDn7Kh0_QkkdQ3dysPl0cfngFeNVV8oUdTpNJqvDw_mUHC06AqhGrXcXltcZLDzFXUDQy3ZcJiPci5eI2h4Fxg49xCWQUMCyFdxMBPZTHW9DyCcQvRSRszUu-SJKkbw1n5P3ajlKkbNRTJpUnOLOarh1iyPy3qppbwtg6Je5aNMspBLKEdG6fLMgzcbRY0ugrLgEqVcHuUO1KF-Qb7AK-2PRzZHfWroifgsFZpl-Jb9S6AThxwdx4x09iWt8ZH0iZFIERWCH44=w50-h100-no?authuser=0"}
        ,{nombre:"Ninja",vidamax:2500
        ,ataque:1500,defensa:500,probCrit:20
        ,dmgCrit:200,recuperacion:300
        ,url:"https://lh3.googleusercontent.com/mNrOQ3HaYykgJsLSzyAvJ1vQZtLmcdyVr1z1ZW4iP_a9l5bso6jojZZXNOlzj-_1uuvUqJysUJmsI9v7NPFOSK_8uHpDp-8NW1wrvEaisPqqg4LGpH2vIgNnSW3YIvB-_iuzIdxtSNb3ahMHTeMzv5D5N0PhbnvEI6ZoNBBPWaJeXqin8v02k3NHb8k23WGLNxJ0KC5ScBLoUjvDEYwPR13idgmX9r8H96qQNor1HGjoSAnM3j6GbKEMwDuwg1j-oMEmtqOSjenjQUaLk0Wl6jdt-SnqDcVgmWz2wNUqepwFm6VFo0aUEYUhXTMC99Z0cnZxbEfr3ftV2CJ7G8fjlFEPs8rHsS4WmO8g9DVlqOqILJwatFtPRTnE64K7D5Me5MT6Mhp37o8i1mh7sLwya3QI4Q_LPFxQ0JxqwhUPbHf5_DS866N1h2q-rQ7HPa7COglXDNanYJSuD8Okrqko13n_-FqaK1r_egxYzYqx5uvZP6aOyu-KB3FaPNBlACwkITnq0Gw8LjZl3PPTJsF3mvuspEO3nCNEF_H8gQPBYShdu8Knn08ope9r4dx3HLYsX7FOJgdwIpV1JJLQUUUKG-KEuL9uyp7R6BZlHJjbCl4l3BeuxGvpccPTfECVpkCbTfc3gmSViWzQPoie9EhU41dGIL1v_4n9QdzjRE5dN9it-qn4_szslEk5kjTL-F0=w50-h100-no?authuser=0"}
        ,{nombre:"Sol",vidamax:1500
        ,ataque:1700,defensa:400,probCrit:10
        ,dmgCrit:250,recuperacion:100
        ,url:"https://lh3.googleusercontent.com/QP0h71gLUmxyWVn708VUS2hemkcgVhSYo_pCFkZ97tZtWjmtr8v-WjKVGfF0hF83jSwswxwzMH--4nfYnpLE1gW_fEF3C4FcgIhChBFVR4Flosz-OaFftt3NVqUNZ2nvfGxNdiYdd24waysQhyF1atIw0z2cJ0nnsLEAf2tSmUfzCaaPlooLgHP_d2Vg0l00j1g8Wgc5W6QuKODbMMpejMzaKWOq7qbts53rdvG5PAAkNS0O7bVFGolR87hsoskCKnsfA3pHc0gPpdJFUyLffobtcWY6RVAduTn22xAJodkejGkxr2pIjWEJxuxRe1ssiWN-yXz78gmX3lvqSCTKV8ckUAOFPke__vUuBDLR50Rf04XJWUzGz661nW3epvMNBjzIUGvTPTMz7ttaVbze8MuDEkN2amn_lREp62Hvsm8q_ZdfD5IpMGdIofhx4JWH9mA5xC6OlggyPwz6uuBjxnLoCssiukNOoLVzBeGL7OsLFbnA17dsgx6RjgDoWCEiH6RTueWsiMwv13dMHHeIvG78yPPEBmEUVbNuFpRejKgJVvYPQh027iLqQiNdujQrL0XWxgfQFqa5tWK3cq4AtE2z5xI-YG3phpDoDIXfTOi0bNchFR3DrsxI5cCUYD-2jkapCBxCICUm4KePD5ntAKaiZMVK-F8T7O9pHWf7Qb2KTLr-cOjIx7x2eMsYcxs=w50-h100-no?authuser=0"}
        ];


window.onload = function() {
   botones(1);botones(8);
nombre=localStorage.getItem("nombre");
if(localStorage.getItem("nombre") == null){
    nombre = prompt("Por favor, ingrese un nombre:")
    localStorage.setItem("nombre", nombre);
    
}
if(localStorage.getItem("armaequipada")!=null){
narmaequipada=localStorage.getItem("armaequipada");

}

if(localStorage.getItem("pequipado")!=null){
    pequipado=localStorage.getItem("pequipado");
    }
document.getElementById("pnombre").textContent=nombre+" nivel: 1";
for(var e=1;e<nArmas;e++){
    
    $("#arma"+e).append("<p>'"+cual[e-1].nombre+"'</p>");
    $("#arma"+e).append("<img width='100%' src='"+cual[e-1].url+"'>");
}
for(var e=1;e<nPjs;e++){
    

    $("#personaje"+e).append("<img width='100%' src='"+infoPjs[e-1].url+"'>");
}
for(var e=1;e<nArmas;e++){

    document.getElementById("texto1arma"+e).textContent=("Ataque: "+cual[e-1].ataque+"");
    document.getElementById("texto2arma"+e).textContent=("Defensa: "+cual[e-1].defensa+"");
    document.getElementById("texto3arma"+e).textContent=("Prob Crti: "+cual[e-1].probCrit+"");
  
}
for(var e=1;e<nPjs;e++){
    document.getElementById("texto1personaje"+e).textContent=("Ataque: "+infoPjs[e-1].ataque+"");
    document.getElementById("texto2personaje"+e).textContent=("Defensa: "+infoPjs[e-1].defensa+"");
    document.getElementById("texto3personaje"+e).textContent=("Prob Crit:  "+infoPjs[e-1].probCrit+"");
    

    
}



elegir(pequipado);

equipar(narmaequipada);
};

function botones(n){

if(n==1){mostrar('inicio');esconder('tienda');esconder('inventario');esconder('algo');
    document.getElementById("botoninicio").style.backgroundColor = colorRan();

    document.getElementById("botontienda").style.backgroundColor ="#ffffff";
    document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
    document.getElementById("botonalgo").style.backgroundColor = "#ffffff";
}else if(n==2){ mostrar('tienda');esconder('inicio');esconder('inventario');esconder('algo');
 
    document.getElementById("botontienda").style.backgroundColor = colorRan();
    document.getElementById("botoninicio").style.backgroundColor ="#ffffff";
    document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
    document.getElementById("botonalgo").style.backgroundColor = "#ffffff";

}else if(n==3){mostrar('inventario');esconder('inicio');esconder('tienda');esconder('algo');

    document.getElementById("botoninventario").style.backgroundColor = colorRan();
    document.getElementById("botontienda").style.backgroundColor ="#ffffff";
    document.getElementById("botoninicio").style.backgroundColor = "#ffffff";
    document.getElementById("botonalgo").style.backgroundColor = "#ffffff";

}else if(n==4){mostrar('algo');esconder('inicio');esconder('tienda');esconder('inventario');

    document.getElementById("botonalgo").style.backgroundColor = colorRan();
    document.getElementById("botontienda").style.backgroundColor ="#ffffff";
    document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
    document.getElementById("botoninicio").style.backgroundColor = "#ffffff";

}else if(n==5){esconder('inicio');mostrar('juego');esconder('botoninicio');esconder('botoninventario');esconder('botontienda');esconder('botonalgo');
}else if(n==6){mostrar('inicio');esconder('juego');mostrar('botoninicio');mostrar('botoninventario');mostrar('botontienda');mostrar('botonalgo');}
else if(n==7){mostrar('armas');esconder('personajes');}
else if(n==8){mostrar('personajes');esconder('armas');}

}
function equipar(n){
    narmaequipada=n;

    localStorage.setItem("armaequipada",narmaequipada);

    $("#armaequipada").empty().append("<img width='100%' src='"+cual[narmaequipada-1].url+"'>");
    
    $("#armaequipada").append('<p>'+cual[narmaequipada-1].nombre+" Ataque: "+cual[narmaequipada-1].ataque+" Defensa: "+cual[narmaequipada-1].defensa+" Prob Crti: "+cual[narmaequipada-1].probCrit+"</p>");
    
    
    $("#contenedorArma").empty().append("<img width='100%' src='"+cual[narmaequipada-1].url+"'>");


  estadisticas();
     
}
function elegir(n){
    pequipado=n;
    localStorage.setItem("pequipado",pequipado);
    $("#personajeElegido").empty().append("<img width='100%' src='"+infoPjs[pequipado-1].url+"'>");
    $("#contenedorPj").empty().append("<img width='100%' src='"+infoPjs[pequipado-1].url+"'>");
   
estadisticas();
}
function estadisticas(){
  
    nombreArmaelegido.textContent = ''+cual[narmaequipada-1].nombre;

    nombrePjelegido.textContent = ''+infoPjs[pequipado-1].nombre;

    defensaPj.textContent="Defensa: "+(parseInt(infoPjs[pequipado-1].defensa)+parseInt(cual[narmaequipada-1].defensa));
    
    ataquePj.textContent="Ataque: "+(parseInt(infoPjs[pequipado-1].ataque)+parseInt(cual[narmaequipada-1].ataque));

    probCritPj.textContent="Prob Crit: "+(parseInt(infoPjs[pequipado-1].probCrit)+parseInt(cual[narmaequipada-1].probCrit));
}

