var nombre="";

var narmaequipada=1;

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

window.onload = function() {
   botones(1);botones(7);
nombre=localStorage.getItem("nombre");
if(localStorage.getItem("nombre") == null){
    nombre = prompt("Por favor, ingrese un nombre:")
    localStorage.setItem("nombre", nombre);
    
}
if(localStorage.getItem("armaequipada")!=null){
narmaequipada=localStorage.getItem("armaequipada");

}
document.getElementById("pnombre").textContent=nombre+" nivel: 1";
for(var e=1;e<5;e++){
    
    $("#arma"+e).append("<p>'"+cual[e-1].nombre+"'</p>");
    $("#arma"+e).append("<img width='100%' src='"+cual[e-1].url+"'>");
}
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
    
    $("#armaequipada").append('<p> arma equipada : '+cual[narmaequipada-1].nombre+"</p>");
    
        
}

