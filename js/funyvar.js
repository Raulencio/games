var derecha=false,izquierda=false,arriba=false,abajo=false;
var veces=700,veces2=330;
var pLeft=100;var pTop=50;var ifp=0, eifp=0;


var datosPj={nombre:"",vidamax:0,vida:0,ataque:0,defensa:0,probCrit:0,dmgCrit:0,recuperacion:0,url:""};
var infoPjs=[
{nombre:"Rain",vidamax:2000,vida:2000
,ataque:200,defensa:100,probCrit:20
,dmgCrit:110,recuperacion:10
,url:"https://lh3.googleusercontent.com/rByffD1Yc82VjltG_o49spYycjq4v95PWUlhJ_558DSxd259v3kqLVOZOg95jqNUXx-SLC_Ig2WyhPn26JbaX6-4bVaDk9sc0BzMrsV__JQmU9MbvMUKGO_BuMsQ7TyDvj05QqljrOsLakph3FePUVXaBqDNC61zK0Me4dzs9J-tnuc6IFmtBAt5wqGEWURvdQne52SNVYiDRbWBA_zjOhI7YCBA9AfUVirlDR8MJa7txrkz0GLtlvsqbNL0iH8A9A1Q8tVp4J7LPIKIacotz-3_Vru4aaUZiVW2cGyGiiyPaTBLslzdCrvydYPRk060yWcpFFK3Lwg7kGZLxo6mwz9Vf6w7m2shggl8VDZb6ehMAeR-u_r1U3mnCgtvNL8U5FtYiOJkEp-Vj7Pa9trK90otMsE5iV4ZvOu-G-TjADDoAHHAruyQIfDn7Kh0_QkkdQ3dysPl0cfngFeNVV8oUdTpNJqvDw_mUHC06AqhGrXcXltcZLDzFXUDQy3ZcJiPci5eI2h4Fxg49xCWQUMCyFdxMBPZTHW9DyCcQvRSRszUu-SJKkbw1n5P3ajlKkbNRTJpUnOLOarh1iyPy3qppbwtg6Je5aNMspBLKEdG6fLMgzcbRY0ugrLgEqVcHuUO1KF-Qb7AK-2PRzZHfWroifgsFZpl-Jb9S6AThxwdx4x09iWt8ZH0iZFIERWCH44=w50-h100-no?authuser=0"}
,{nombre:"Yohiro",vidamax:1000,vida:1000
,ataque:100,defensa:50,probCrit:10
,dmgCrit:150,recuperacion:10
,url:"https://lh3.googleusercontent.com/2NIx7PqqMuUIF80LIXCuENNvXrR9T5h_fseWxTki35S4MHFbL2bESwBdKcCl6qkEJHw4Q-gibyGhBAbbu99ytUwb8ky_-RON4qV1FREet_Ca_8dzS10utCtQ3_AwSVWZ7B0E0o7xlNhOAwvC7yqc6YU4hXPQh79_djSLo23ELyXW6BUrviYI5_boayEiy9GbvLX8nbh9BwECpSGiKoPYUQTg2-YkNIBxujcICf0RlxIkrJqhgOt3VQp7sOuwVfktD4VxnZ-rLIVzJo9X-HOB4z3jHxU5n1AM5r5_0LYLSQEA1ftGRjdtDM3hTpXtP4q1ZgznC_4Ko9b6gbnm_owggiFCELwT6c1IEFoHVWE5Q2RgC45THP0dJWWqYBsI24j9uK4SUxtmY_Bf3asl654zI1CElMcEydxdOPwz3gjFOTnISXZvn6xcG3r9RiAwg2cuJAV2iC3LxoQ2aE0d4TeJpaodAqNnvspYFyYgwjV5lNbJKqyNR1BI2xtldrgdexa1dXBJzZCtMZcLydgnsreqRFqVxXRa_GPY-zx5KdEMHB5rlfIpbNdzejnjGoUxk9KFJpNiaRwu8x7tCBi_AG7aFuQjOezxlOtKhscbSiXdFu_c1u0wAgQtY77e9WVPrH6sYrnMX6FI2rbbOGEH8vydEwWGjYNBwRj_KyxEyypmmPIktrnI9beMLEef6ACBPqU=w50-h100-no?authuser=0"}
,{nombre:"Ninja",vidamax:500,vida:500
,ataque:1000,defensa:500,probCrit:1
,dmgCrit:200,recuperacion:50
,url:"https://lh3.googleusercontent.com/mNrOQ3HaYykgJsLSzyAvJ1vQZtLmcdyVr1z1ZW4iP_a9l5bso6jojZZXNOlzj-_1uuvUqJysUJmsI9v7NPFOSK_8uHpDp-8NW1wrvEaisPqqg4LGpH2vIgNnSW3YIvB-_iuzIdxtSNb3ahMHTeMzv5D5N0PhbnvEI6ZoNBBPWaJeXqin8v02k3NHb8k23WGLNxJ0KC5ScBLoUjvDEYwPR13idgmX9r8H96qQNor1HGjoSAnM3j6GbKEMwDuwg1j-oMEmtqOSjenjQUaLk0Wl6jdt-SnqDcVgmWz2wNUqepwFm6VFo0aUEYUhXTMC99Z0cnZxbEfr3ftV2CJ7G8fjlFEPs8rHsS4WmO8g9DVlqOqILJwatFtPRTnE64K7D5Me5MT6Mhp37o8i1mh7sLwya3QI4Q_LPFxQ0JxqwhUPbHf5_DS866N1h2q-rQ7HPa7COglXDNanYJSuD8Okrqko13n_-FqaK1r_egxYzYqx5uvZP6aOyu-KB3FaPNBlACwkITnq0Gw8LjZl3PPTJsF3mvuspEO3nCNEF_H8gQPBYShdu8Knn08ope9r4dx3HLYsX7FOJgdwIpV1JJLQUUUKG-KEuL9uyp7R6BZlHJjbCl4l3BeuxGvpccPTfECVpkCbTfc3gmSViWzQPoie9EhU41dGIL1v_4n9QdzjRE5dN9it-qn4_szslEk5kjTL-F0=w50-h100-no?authuser=0"}
,{nombre:"Sol",vidamax:1500,vida:1500
,ataque:2000,defensa:10,probCrit:50
,dmgCrit:150,recuperacion:100
,url:"https://lh3.googleusercontent.com/QP0h71gLUmxyWVn708VUS2hemkcgVhSYo_pCFkZ97tZtWjmtr8v-WjKVGfF0hF83jSwswxwzMH--4nfYnpLE1gW_fEF3C4FcgIhChBFVR4Flosz-OaFftt3NVqUNZ2nvfGxNdiYdd24waysQhyF1atIw0z2cJ0nnsLEAf2tSmUfzCaaPlooLgHP_d2Vg0l00j1g8Wgc5W6QuKODbMMpejMzaKWOq7qbts53rdvG5PAAkNS0O7bVFGolR87hsoskCKnsfA3pHc0gPpdJFUyLffobtcWY6RVAduTn22xAJodkejGkxr2pIjWEJxuxRe1ssiWN-yXz78gmX3lvqSCTKV8ckUAOFPke__vUuBDLR50Rf04XJWUzGz661nW3epvMNBjzIUGvTPTMz7ttaVbze8MuDEkN2amn_lREp62Hvsm8q_ZdfD5IpMGdIofhx4JWH9mA5xC6OlggyPwz6uuBjxnLoCssiukNOoLVzBeGL7OsLFbnA17dsgx6RjgDoWCEiH6RTueWsiMwv13dMHHeIvG78yPPEBmEUVbNuFpRejKgJVvYPQh027iLqQiNdujQrL0XWxgfQFqa5tWK3cq4AtE2z5xI-YG3phpDoDIXfTOi0bNchFR3DrsxI5cCUYD-2jkapCBxCICUm4KePD5ntAKaiZMVK-F8T7O9pHWf7Qb2KTLr-cOjIx7x2eMsYcxs=w50-h100-no?authuser=0"}
];



var espada={nombre:"",url:"",habiliad:""};
var cual=[
{nombre:"espada de hielo",ataque:700,defensa:0,probCrit:10,dmgCrit:0,recuperacion:0,vida:2000
,url:"https://lh3.googleusercontent.com/qTCY8Ts0_fFUaKAqg1Oo06RTbTKzYlZ-_hcfPTzxD2xfsvYUeGZu_YKWcILimayHQAO8J8KZvAWTagCNQjgN8-hvAamRomecbQZF93zXVXYo_y7vx1bOIqrkYKJa9JhfPbxgUn83jKWeRtPgzGMkm4M1E2qkSZrdRbPxWbScj6LD4XN65mpY2xG1IZgz7NHyn_Dm-okw5h0nYKXVqCRcj1Thzg6jj_R04x2lur9WIAKHEim-z1ZizYODKQL5qwWbZRTisGw4FWe3ArbqV1lWkWkzLIFZ0DbvyraByL05BpYZ0KBSiyaHegTrDao0jxZBQ3F0BThbYEROM1lFqNkzPONvPh7ueNUPT-7JuZCk2qmKHwibYt_Aipa9Dwy-jLQrhrGFNF_GLmdVs65WbsDGOGdMNJ28Mvx2fyMhG_44pMI-R1nS9twy-CZUEgHHNlvaSsQU8McxmX3RuxTMgVEthq8lLIarp8BQJvwwUdgIsH2NOg7_qzwXXA1wdBD0eapyQ3LaLa-CZTq3Le8DXfLaH-ZX-2LjFIJh7bx5Zasro2xq3MPoqDDj65f6C2QtYusg5BKNIscWSQSIr-neqPqHVODwwEmEtNI120aVEh-9J71CB0Db3noYsfOqqZn1TPjqh28tfIAeLtsNzH-t9g5ufA2swXTokMQyvzMHn6_gb8LW92FjaMX4yZ79yI8MLic=w450-h150-no?authuser=0"}
,{nombre:"espada de fuego",ataque:1200,defensa:40,probCrit:0,dmgCrit:40,recuperacion:50,vida:5000
,url:"https://lh3.googleusercontent.com/9AbUcqcOyLnUcp76PoldOwKDzlpZQg9yUA7HUxBmB0stbQyV1CEYhwgiX6wQvBZ55BU1pVLzytt6Hj8dhqmJhXuzTn0jjObMh0ND68FruMZUJALsYWEcPDBk_w6d2AkDGtzLQ3BnqkjlBPHv5re0DBGeoP0-QBzvEjXWyODtUzoCV-_Bot-7KYwltFYGASNa7TgxRP9ixA5Z8xn7ZpPxp-XRPtOI1NH7nqKJVTd0usz0cz7sQehJTxiCcpeKYvWZUI0zy7LXzu3ErZbs1v7q2pGrsN8I2T6PMovhxxE1_LL9xCS4XhhoD7mTJOxOcIhyjKqX7UpMjZ_iGj4AZE1nDqiUqet5VID5y8tu4exYgJRahJD0qn3ClHyo85Qt-yKhuJYpqp3O0mzt6ctQsuEE3PT_cNQXmEclqY-kogtb0K7JguWyAkNptC6mvyAyQcREzKDOblfVCa4YEAoyLWf-aJUXcOE7_xyEwCB6S-N2L-6TODn2rELVmEy8aLWckKGrTSsl3qTrSgPzo8TF3d-vQ1UxUvotFPEDdjhn0-qxNV_s72gqcyNPCzBrrDPtJ70iOvfQREcy0zbPJ0hwC3Y0iefXjxfJlhWe5PVJzLmhHFl_PltAuHpRFRUF3KvZtBNyXPRblwnMsXCPTbaAzUmQSeATrC-6gSMCndq5iOCZgnr5dwA_kJHf04TQVJBxAzg=w450-h150-no?authuser=0"}
,{nombre:"espada del bosque",ataque:800,defensa:70,probCrit:20,dmgCrit:30,recuperacion:0,vida:3000
,url:"https://lh3.googleusercontent.com/A6zMcmD1AF3VW_pG9GVY3vm6Nuf2W9FZ3MPoRyXi875mgJLghHq-QLjnqm-UYmjkJQ0fsALVCOItgN_GLR2xLEwiYy8WL5LJmmQSgrsdJR02SGvQK_CoyRgX0aGjdJ8t18H5Yed-EGmQD3SowgZWJkWl7JSJdOH1K0Mq6V-RM589IlYT5BlZDdhPvzcPRrRQXapOG-QOj93gpJ9IZi0nLmSbQNLL2_XneuEw3_XSivJj1_cBnpupVWcx-qDgCzJQNkxoMU57p1uV4dZV65rasaySrS6rpE0vkGXS-ZG8gU41IKHuLEo9UiqhDTTxvZSi0pqDUmMIFMFkjfZYdUT0kLhveZ4xgNuwfFsj35-RSF1C4VTBlDGGQzP_7SxTlrwz_pe04i7BewXf9Ecz1eqhqnNjKCjY8YhrI6HkFoogqHVPSURohfHEvy4Y1HWqCDTHQXPgB1qEugvMdeTMaSseq3kE0m7qIMLVaMT2UO7QbjEMRO3P5o2ku-cHs6Ps8ZY_cfuV0vw9TQeV9F6Ad9ieXlw-noeW9Gbug1dY0uMyzRJjQdwCaJ68coDneUJi082xljoDr_saPzpzKy3wancbk1rSXgWOf9iS45skqYdvp5HOhVrqudnAPvozJhyQKpY2FJRLZpomGEZ12_tusGOz-lPX3Hb4csR8d9Tq2Ytf4or5sX98yXK0KcYbB6oy4T0=w450-h150-no?authuser=0"}
,{nombre:"katana filosa",ataque:500,defensa:0,probCrit:10,dmgCrit:50,recuperacion:0,vida:1500
,url:"https://lh3.googleusercontent.com/UC3xiyNXJ4-jhQJCIJtuL_h9rtdr1pk-F0yDvvQIAhB9VffPsNbw5h4U9IMr-URpjaq3gKlr4MkApbGODS_cY31V7k6R2M5ytifGjr6ca3Mja8rihoNfvdsR8z_kyeFAAvkFbqCoujPLlEAOtHPmXpHheYSYn79JKYNhdT0yv7mFgt118e-O0-bqO5NYXUPz-W2VOT_X-fNzTLk-zAtI-laJklmGEqwP9xiOd-6cVkSR1Ljckjo8KT9CsR4dMF4Tz4hsmBUak6y9WbmgggSZzdvYcr22aP0pvSYijxzQ3Fw3A7e8yRImDeRaTnEaRyHteL9x29_1xjwfDRACse6yKNZuRfDzu_8j6m0BW6dnV8GtOjMlP5piq82JYEguiSYkOveW63bNfyBjobBixDgtbui-IEacWlxkMndcnqJ0Ql-XKMMb7hCJRgYZSJ04qo5tuMWFfSEIYYDsYBd08onmlRAbGQlFunKIyvRIOcmK9IqKT6vqDK5BT0auvNGaou7E4fjLe2E9RUEgVK53mYS7J5ws3GY_EHkdawSorGYANr0GiuVMDSChlcNPlWcBs5MY6Gx5W4BJySdIffySCPY4H1h-GMVk0DG14n4oplMP2ue9oPw83nmTLNLDc4vuWg9eDyRTaJ6P_MJHgPrO1pKhEEuUCSf_ngKDGRPFvOEjduyHWOMeUlhVW3-po8NgcZo=w450-h150-no?authuser=0"}
]


function mensaje(){
       
    //document.getElementById("p").textContent=("width : "+veces+" height : "+veces2);

    if(datosPj.vidamax>datosPj.vida){
     datosPj.vida+=datosPj.recuperacion;
     if(datosPj.vida>datosPj.vidamax){
         datosPj.vida=datosPj.vidamax;
     }
 }

    $("#pi1").text("Nombre: "+datosPj.nombre+" | Vida: "+datosPj.vidamax+"/"+datosPj.vida);
    $("#pi2").text("Ataque: "+datosPj.ataque+" | Defensa: "+datosPj.defensa);
    $("#pi3").text("Prob Crit: "+datosPj.probCrit+" | Dmg Crit: "+datosPj.dmgCrit);
    $("#op").text(espada.nombre);
    $("#impg").attr("src",espada.url);
     
}
var confirmacion=0;

function seleccionarP(n){
    for(var e=1;e<5;e++){
        document.getElementById("cuadroP"+e).style.backgroundColor="#130688b9";
    }
    document.getElementById("cuadroP"+n).style.backgroundColor=colorRan();
    eifp=(n-1);confirmacion++;
}
function seleccionarA(n){
    for(var e=1;e<5;e++){
        document.getElementById("cuadroA"+e).style.backgroundColor="#130688b9";
    }
    document.getElementById("cuadroA"+n).style.backgroundColor=colorRan();
    ifp=(n-1);confirmacion++;
}

function prosiga(){
    if(confirmacion>=2){        
        proceder();
        esconder("pantalla2");
        mostrar("pantalla");
    }
}

function proceder(){

    espada.nombre=cual[ifp].nombre;
    espada.url=cual[ifp].url;
        
    $("#ipersonaje").attr("src",infoPjs[eifp].url);
     
    console.log(infoPjs[eifp]);
    console.log(cual[ifp]);

     datosPj.nombre=infoPjs[eifp].nombre;
     datosPj.vidamax=((infoPjs[eifp].vidamax)+(cual[ifp].vida));
     datosPj.vida=infoPjs[eifp].vida;
     datosPj.ataque=((infoPjs[eifp].ataque)+(cual[ifp].ataque));
     datosPj.defensa=((infoPjs[eifp].defensa)+(cual[ifp].defensa));
     datosPj.probCrit=((infoPjs[eifp].probCrit)+(cual[ifp].probCrit));
     datosPj.dmgCrit=((infoPjs[eifp].dmgCrit)+(cual[ifp].dmgCrit));
     datosPj.recuperacion=((infoPjs[eifp].recuperacion)+(cual[ifp].recuperacion));

}