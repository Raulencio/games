//tiempo
var distinto=false;
var eo=true,dia=0,horaxd=0,minuto=0,segundo=0;

var subirls=0;//0;//100;

//mapa
var imagenMapa="https://lh3.googleusercontent.com/nlmvrWGJPPyW6KBrXYq6H0v47t0EKnHw2DkcXjSkDix8GXLg512xAEHDJ2JiKTYmrPhxTtD8SIW9hbXjkE5hvbDFczJry4X9JOY1aA2GuouNzSMHN85thGf6OBLyS2mGZK9z3uVTS0DTutOyQoxqeGbhGqpGEHlswlV3cAP6mW-iXoZ486Oihmbg_Uv9pweL_6q5Vuj4KXZ5Z-bZE1O-cIcQVXZ-leWNp5kzTmjvkcsI6USkevAQau0GaTIPJfOBLtjLi53NmlKRzrw2mxqkXZrCYMcuciwJnlse1zli-C8TR3_qzeaRB3534j6ens6HHY8_DrPwdjXIB1KzrQmF7LItV9FTVQ-Ro-t3OQYB7hAJy4_T77YpKL_u_X-RTLJJMQmGH1wlhNG2uTcTzwpjXmEDF0YVbqZ9ryMQOojsz3ZMo9UTXrIxGWTM7UWcthNyrnO1_1ykQyftHizFERNYh18yiTpY23Xcse0ikyO56X6fF1sOID-ypjrcdrQ-5XiivBZtKynjUX-cmYFwXJL28f5v3XD4-bi5OF3-wUNDk5clyn9q1yhmlNXpda0pcJ5qxDP9lq7RnLGRGKor2JC4xdWJiFCeV6o8oBEo3gPEkusoJT2-ZQZs9u5_YeMShYVR1dpEhIktWUVNLsbi6xe4Ms36UHhe5U8Cvr0VrYg9dPj1I5K7iUmzaXUqz8rgvAE=w1366-h547-no?authuser=0";
var dir=2;
var velocidadd=50;
var mLeft=0;
var mPLeft=300;
var mMleft=500;
var mLeftTienda=4480;
var mLeftPj=2000;
var mLeftPajaro=500;
var mTopPajaro=0;
var mTop=0;
var ctn=0;
var cat=1;
var des=2;var armaFuera=false;
var esesi="https://lh3.googleusercontent.com/_lmlSx7JyBMRnavXIZ3vYplY4Co1LyylQOAO-9DqbS7SPC56-cnVeIG9KSOZjqBB8ey9HXmVEaCwAQg27G5Xc4gDXlUGJ4foCO9CJ-BKpFzZFJlMzB19zGAgGTmrEMxGJj1pOaNWptN3Sy3SPuAc71CMsyHRPfqG_dhLh8mdrtl-uAMgZlGGgEQz9lV5pqL6aTsMgEyKMam6k_TlV443SPM7QUbRI-CCXZXbhKlw1NS_4uTscWgLBdNSmCAYFxaZ9URkKUFwUI1GOdCcROu-K3jliIy-boKyDuZpGsh051FnQNsDFVrvGnAsifUYfG9mGvFs5joKeT-xoxE47jJq2_GtgyYSWQsnpUQVHfgkCwpSXNSSMtpzqH9VDKwy4em8jh6jaMa9iY4ga8ATT9dqv8J2MgNHWrJH7WT0eDPeZcLCDsWg8YlW5uKI-MmWj8kZCJXLogB6rOBLPEGHO5kJ8l3aKZLus2FPw9tecmWRVGQyy8VYmBmGlOywW6oAcdvEUQ8pDAIXxM9OAGLSj2lFaBYUqE_i63wNafrC5hoHRhnakPdIYXlCvuS51Iywydu2e_iPcjk4ubTCZcuAA1o8GHWglTjsBjCuCMqR6Ij8SHAhKT44RqC6BQxt_sxUi0LT6WuZAHxCQrBNUKL2dm2tORR8AjI0bvjOF73G3TCREpASgAdF6o5Csc4P-pfyWGk=w50-h100-no?authuser=0";
var dirPract="https://lh3.googleusercontent.com/_lmlSx7JyBMRnavXIZ3vYplY4Co1LyylQOAO-9DqbS7SPC56-cnVeIG9KSOZjqBB8ey9HXmVEaCwAQg27G5Xc4gDXlUGJ4foCO9CJ-BKpFzZFJlMzB19zGAgGTmrEMxGJj1pOaNWptN3Sy3SPuAc71CMsyHRPfqG_dhLh8mdrtl-uAMgZlGGgEQz9lV5pqL6aTsMgEyKMam6k_TlV443SPM7QUbRI-CCXZXbhKlw1NS_4uTscWgLBdNSmCAYFxaZ9URkKUFwUI1GOdCcROu-K3jliIy-boKyDuZpGsh051FnQNsDFVrvGnAsifUYfG9mGvFs5joKeT-xoxE47jJq2_GtgyYSWQsnpUQVHfgkCwpSXNSSMtpzqH9VDKwy4em8jh6jaMa9iY4ga8ATT9dqv8J2MgNHWrJH7WT0eDPeZcLCDsWg8YlW5uKI-MmWj8kZCJXLogB6rOBLPEGHO5kJ8l3aKZLus2FPw9tecmWRVGQyy8VYmBmGlOywW6oAcdvEUQ8pDAIXxM9OAGLSj2lFaBYUqE_i63wNafrC5hoHRhnakPdIYXlCvuS51Iywydu2e_iPcjk4ubTCZcuAA1o8GHWglTjsBjCuCMqR6Ij8SHAhKT44RqC6BQxt_sxUi0LT6WuZAHxCQrBNUKL2dm2tORR8AjI0bvjOF73G3TCREpASgAdF6o5Csc4P-pfyWGk=w50-h100-no?authuser=0";
var dirPjarracl="img/pajarrock.png";
var conteoVict=0;
var vidaen;

var ekk="img/nuevoestilo.png";
//animacion
var nadando=false;
var yohiroNadando="img/yohiroNadando.png";
var yohiro="https://lh3.googleusercontent.com/KIDkh9b1eSmmKI0izWJvgHoaTr7BLBqUjukZCvg2EJPvxcATgvqxPPNTBSQWCos2IWb0pJpvg1B6fT2AYFaFAI9Bs78lYDX4qJ5xQdsJ_I6oePuo-7rDbetbIIX2ze1QjOiUHN8VZkuTWVFmu35-FnxrJNsUs3R8zKyZpdYj4QMOsgH9XtI1FzLr5pX4PeI8xzUsc9UxTTQa90QtMa6eH8glkOE4vfUQu9gIo7mmRIWXOVD0J1fMR469Oy2SN7hfhlDiQFSpByIyTV24DmEvwiY_iDQgtB-67tkpL6XLeto07F7tZowR0_jjwIa8bsp8vAe6YlbriCiLL0TEcslZGERR2_cbN2VOVbJpif0Bs3fM3zHH3LDUrPyMchrGhumnbIrLq-43Udx7wfWv5zBMZ5BEqUTdpmaM9dovW-p-zO7NFAaDsLyJB6HWRcQ9m8DXkkMCZmN1_ccSaPgro5rf4QIf8OO1VoO4pouuGkpKOH3XpwEEBq0vhTrEMvXE32cBLr3ZkYccku-lT5Vl4h7OQHj7QroCyibmLzx9Gvo5yKH9keuHQPvY0kkpnXoxcaiRzYH_HwIABgg2nETAdkorwV1302I5fv4Q7gu0xKkBv63VzPfOvcLoUHk-ARA1Sd4pcwBFyqTVQAt85eB1v1liCasFH4I6q5BOZP5uAwEaEwVhetLAmQCXkkBgwhrwVco=w50-h100-no?authuser=0";  
var yohiroAtacandoA;
var yohiroAtacandoB;
var yohiroCorriendo,yohiroCorriendoB,yohiroCorriendoA;
var yohiroCaminando;
var yohiroArriba;
var yohiroAbajo;
var yohiroEspA,yohiroEspB,yohiroEspC,yohiroEspD;
var yohiroPalabras="Dia : "+dia;
var yohiroPalabra="Dia : "+dia;
var ts=1;
var dale=false;

//stats
var modo=0;
var vida=1000;
var ataque=500;
var ataqueCarma=0;
var dinero=0;
var nivel=0;
var atEspada=0;
var espada="Ninguna";
var turnos=1;

//tienda
var espadaTienda="n";
var a=1;
var maxi=9;
var precioE=0;
var fraseA=" Meow ",fraseB=", por ",fraseC=" te llevas eso. ";
var compre=false;
var modoT=1;
var vendido=false;var iespada="img/inventario.png";
var espadaFuego=false,espadaB="Espada de Fuego",iespadaB="https://lh3.googleusercontent.com/75UqTptrbyA883WrxZ8IcuueOCjxwwhpYuKjqgHnRpYB0NJw7yCXDsbsXq2ynZFkhwVPFQ7duAzxF2sDuJlTeZS_0bIiqmJlxfYwOGvoOLmc5J1pVXUrVV9uvorne3gUN2iostHPW1WWEoeUk24zqJIYQOEltMGy9vxgp0gXxdkaQYem3DRULqgeE3Crpu8Ardx65PgXwbe6X-vO0hp1dzkcHrY0xf-WCu7UkLBeOKXvEfnSNDNQOG6J1Ewj9X6CgjPYk3fJjMSMYrLwrqF_dT0917uKBjzAXdGZAhhz4uw6dabhORdUj_wL_uW2TdLpKTvoxiGC4eSiIhYGdYz3gJc7UEssBOwvvEFqelrT6ECITbnLLLUG15XdBdxy0x-DaABt2zABr4dKF2od85O6tqMtKPnnFUDjupnDOL7we4iIPFwcMPMhQ9FJDVD-CU4xVZIG3Hsn9gdY-uvESCtZtHvIsqWomTS8DttBbhysTn-wOxnQ3LYg0_h4tPCGnO1Z11QbiERqZK4p3fQf5YdIUKgfRMywwTJK-_cRAqMbHpBJUFgrzyqUc5c9T7I0McO1UwXQAEIh8VwJPdctSqwdSiZl6DJ4TSM4fGOg2bhcddVSuLEkilO_cQZi8onvwCF4fMdaICP9Eu5Ksz-Ih5JDn4gs2liHDzlPlg-EGf6S70eMbFkI_sucFyg4XOdG_-M=w450-h150-no?authuser=0",pespadaB=2000;
var espadaHielo=false,espadaA="Espada de Hielo",iespadaA="https://lh3.googleusercontent.com/3ro69BrGYnonkhJpWiNHEsIBVGONQBJiE4S6KXL-5us2EqNEJ3lgLwET01K8IH_5L0Ac46Aa4DDD2369_1pzUJnwXSJeNbh_cbPiSjzQIK9dyK4Q1aVWp_NFo61DmE2vhAynl8-w7fv7ub5M-_queuMxODTT-J3UrvaQRVhLOZvVLC95hbq_APDJs6KvCn9WHUmIbZlVJ9JKKCQkfTExWE1tCmnTMxOnSmjKfzQUn-kaVD5H14mCS4i1vY6LO20rl32aQ3Q6abYv5pFEppMtegaNPcR6SVlg0_MaM37t8X66hjNzNuBy6MJxPkC1lOGrRcrf6noXTKddjq_hXPnPw5Jd6zC-dk6Ao-yiorBug0WmY26hfqLNSpOEnaQwFQUXqX1s90ufJJhN1A0qBX5X9PrAjeDuvnWCuyXkHw9hWgmL6WhGxo5YOsK-7V5WBkyjks2K2BjDqfI3jsQOOKmrz4RJzXyY44rlNIx3LY4Qx_YBqfDPAH0g40CdgoBnFbNZShZSNHlxFS7tYepZN4Dn8ifk2ZWpPtywZS4jjiFCxhWnbt1gitBmAHZ094mWylv19-5ai0nGH0W04H1rAGWn89BzSCyi5sZFKI0PUE7B2k7HWfdZg8qrxHBnrUJJbqN4FlEncHgBgid_7HAGlibc_6d0nbsTIwvJKH4r9AYfuBjS2ve86Y5rPmvcE8QzssQ=w450-h150-no?authuser=0",pespadaA=1500;
var kataFilosa=false,espadaC="Katana Filosa",iespadaC="https://lh3.googleusercontent.com/E9zFpj4FAYf3REj_HKVM_5o8UfI0qoZBfBFMm5BgaFvlDgQ6gy4-BzAquXy0lOGA8eu4akUpG-MH6kBfI8kmc6CZwtSy1HWqR-qIcHretP0T2pzd8sUJG3PMAwBtiRq12S8kTQRnDbEEdAwXz9gYSR2GzBJ0WA4yY2AYnwwLCoUMV7D2NXUkd68mMeVeSo7RrWn4c3j7oIBKx5lnUA8IlqJSOWj6zIgIIdlOtOx0CrX6ZxupOftKzC_xXTvkgcWwrsfJ1TC2jnbHvqn_oTnQx3STTzvqKtXJNstoXZiVpzrT4S1jhI8JIaklQuPQAm-kmxyIGSmqkEV_bvHtvbWZbFamd6pXNUBjW0gWMnBvSIY6OufIjVwkGolrNt39X5xf_i_xVryvmOiMFVfz37tM9jgPypDL7huxth6s7SMTajqGC2Sxusrgv_alkVXWYnyPKb8Kiw9iq325WhVHbruX7M98hDPk6R7mtivDrT1RPWwTTbIrlv3OtuVsGdJyVP4MeOx-tpUEx4ERN9ewgayLG-QEATTBahB29iLzqRHMeN0R-cAw6GA6_f35TePjQ_nv1kYifYNvgvvC9kMc2BGf0H72A9NOFzsMcDUkBIsRFNmc6u1dWvFM3prx2jLFavdj3hYWhHGEdJNy1R9iqnDlCZMpZ1yguRV_NbHAhQGmGRMU3WFkY83AB0igWcYdLyE=w450-h150-no?authuser=0",pespadaC=3000;
var kataBosque=false,espadaD="Katana del Bosque",iespadaD="https://lh3.googleusercontent.com/GNgSQKKea2uS0NqlFzNM0UOF_Q9wnbjaJRCbIdcVc-ns30z8TImS6qni6HnOCQfM77NIvzKuDfuG_rtDQ1v5WNRrUC1kL6SNADbrwL7x1q_6Aj8D0iWz4xJ43tPs7sMBI6zYF6jakHwNqounXfMOpat5wjpPn4XYDpODXm_F9ny6euZedwAfX6TJlGQVVV19BQKEz2NwNaWCuygl-n1uytWjlqU9xYbZJXpe7J4XWljqAFe_x5fAy5lByju51-dS9N1lBKj0cA39ga5y_qBQSjL_xf3cnMU9NtBFskSJu_2PsaQSwJiaxxkxZ0E_wlpUQ7mSzBTyZABfOIzriX64TmWEOulzgQspJHE6hHLfpL9lL5p58UiVKMMFDdxy5JgNntjgubPFekEaBxaS9Rx6zczB7arhUhbYPIBo-5KDJPbXQ6bgyApFMtDa46z_-XcibXuA8TfJgAqwOW_lfJcQTbGjQF6_17S8kPnzWS69eSlkPu14gzAyEjztNsNkKDd_0s-y5WXZyKN8SR7vqRUksAuqbqb8Um8M7TUkTPsG1JwSa5YB7Juc-UZK2XS6Zr2zG9dA0oQnHg1550DzcyC62A4pJWFdJAeDRjsDhOvZ-clpcHVvJZ-zUxGSjRlvLOWdteJPxF3TL9NSMHHAoDriqE2ax1DtnuaI1dD8hMnwE1xRZR0MxSayOprzxkH-4kI=w450-h150-no?authuser=0",pespadaD=5000;
var hachaNormal=false,hacha="Hacha Normal",iHacha="img/hacha.png",phacha=1000;
var espadaQjen=false,iespadaE="img/espadaqjen.png",espadaE="Que Dulce",pespadaE=10000,espadaQjenMano=iespadaE;


var baculoA=false;ibaculoA="img/baculoA.png",nbaculoA="Baculo Ancestral",pbaculoA=100,baculoAMano=ibaculoA;
var baculoB=false;ibaculoB="img/baculoB.png",nbaculoB="Baculo de Pelea",pbaculoB=20000,baculoBMano=ibaculoB;
var guadaP=false;iguadaP="img/guadaP.png",nguadaP="Poder Cortante",pguadaP=50000,guadaPMano=iguadaP;
var guadaF=false;iguadaF="img/guadaF.png",nguadaF="Fuego Ardiente",pguadaF=100000,guadaFMano=iguadaF;

var list=false;

var cajas=[false,false,false,false,false,false,false,false,false,false,false,false];
var espadaHieloMano="",espadaFuegoMano="",espadaKatFiMano="",espadaBoskeMano="",espadaHachaMano="",bloqueandoimg="",yohiroDesefunde="";
function adinventario(){  
    
for(var i=0;i<12;i++){
if(!cajas[i]&&!list){
    cajas[i]=true;   
    document.getElementById("icaja"+(i+1)).src=iespada;
    list=true;
    item(i);
}
}

}var c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11;
var numturnos=5,vidamax=1000;
var virecup=1;
var velorecup=2000;
setInterval("recuperarse()",velorecup);
function recuperarse(){
    if(ahorasi){
    if(vida<vidamax){//&&!peleando){
        vida+=virecup;
        if(bloqueando){
            vida+=nivel;
        }
    }
}
}

// CARGAR MAPA CARGAR PJ CARGAR ///

var exptotal=0;
var cuantaexp=500;
var arab=4;var marTopMapa=0;var topmargpj=40;
var dirc;var altomapa=-1500,largomapaA=4480,largomapaB=-3980,espacioA=200,espacioB=750;
var ahorasi=false;
var ctt=99;
var tlasarmas="";
function todolasArmas(){

    espada="";
    for(var i=0;i<12;i++){
            cajas[i]=false;    
            document.getElementById("icaja"+(i+1)).src="";            
            item(i);
        }

    cajas=[false,false,false,false,false,false,false,false,false,false,false,false];
    espadaFuego=false;
    espadaHielo=false;
    kataFilosa=false;
    kataBosque=false;
    hachaNormal=false;
    espadaQjen=false;
    baculoA=false;
    baculoB=false;
    guadaP=false;
    guadaF=false;

ataqueCarma=0;
ataque=0;
tlasarmas="";
exptotal=0;
}
function dif(n){todolasArmas();playTres=true;cuantaexp=500;ataqueCarma=0;ataque=0;porsupuesto=true;
    ahorasi=true;distinto=true;ctt=99;dia=0;muerto=false;conteoVict=0;dinero=0;iespada="";
    //document.getElementById("entremedio").hidden=true;
    cambiarColor();mostrarInventario();
    yohiroAtacandoA="img/yohiroataqueA.png";
    yohiroAtacandoB="img/yohiroataqueB.png";
    yohiroCorriendoA="img/yohirostanddireccioncorriendoA.png";
    yohiroCorriendoB="img/yohirostanddireccioncorriendoB.png";
    yohiroCaminando="img/yohirostanddireccion.png";
    yohiroArriba="img/yohirostandarriba.png";
    yohiroAbajo="img/yohirostand.png";        
    yohiroEspA="img/yohiroEspA.png";
    yohiroEspB="img/yohiroEspB.png";
    yohiroEspC="img/yohiroEspC.png";
    yohiroEspD="img/yohiroEspD.png";
    espadaHieloMano="img/desenfundeEspadaHielo.png";                
    espadaFuegoMano="img/desenfundeEspadaFuego.png";
    espadaKatFiMano="img/desenfundeEspadaFilosa.png";
    espadaBoskeMano="img/desenfundeEspadaBosque.png";
    espadaHachaMano="img/desenfundeHacha.png";
    //espadaQjenMano="";
    bloqueandoimg="img/yohiroB.png";
    yohiroDesefunde="img/yohirostanddireccion.png";

    if(n==1){ 
        
        numturnos=2;
        vidamax=15000;
        ataque=8000;                      
        var koonline="https://lh3.googleusercontent.com/PIUVaq1AMGLzfdmUEnVCuIgXhMfJkUPjuMproOAE9kWeWFKCxfTZjvY8yUZiIU4fv9AqO35hHdYq2YVzyQ7Ii1sqy3ljnAT1LX5zab3bD0qIVFHzLCoyWD_j4y2zMjmxFxIrqf4fr5Ufc4_F6gm4ZQzCA8wg6CztjeYf8E19EiUhYJCjhyVUn7O17jlyQDKv_5MEhf_5c3sz1GctaPhcYl79v0kxN_bbIcpUKGH5L36gY4hCZvGp_7lW4cZRoxJaDVRTi22SzbNvaMV8XkvGS2PGhu-9D14KV2gw9ZpmVikSMhTq8dz4Fx2T0Yrj3qyPoNeYNZiXXGvbA8bdp5faunvmAYFTPfqyi20NIA8-_JHIZvnatA5UHCPgPUWbxt0NXl0WG63b1xu8hlaKk1mwfDwOqwjDQWc-GW4IzE7sTC3JVQgCpuGWtFQd-5zT-k8CJjqR-Prg35h_8T_68xfv31BB-Kl7othoMwxZNH7DcGmJqeOMgxn0IFvfO1ANIcn9VvH6yJBMbzDyzSNYmOh6VzZ4EZCY7CWR9gq6pxeWs8y94kft1rV7BTKF7XrCn6YzgyPn89HGAMfYvF8azCm3ewKfCXpAFakb-YDr61l0A5-hlqZiLL0QJGMFV-2SRi9JcpMIBYNTGuoxJsrOwggkuxA9a0KAlkVl4Dyo4BVDOrcSOAByLIRRNA9j08r-_yM=w50-h100-no?authuser=0";
        yohiroAtacandoA=koonline;
        yohiroAtacandoB=koonline;
        yohiroCorriendoA=koonline;
        yohiroCorriendoB=koonline;
        yohiroCaminando=koonline;
        yohiroArriba=koonline;
        yohiroAbajo=koonline;
        yohiroEspA=koonline;
        yohiroEspB=koonline;
        yohiroEspC=koonline;
        yohiroEspD=koonline;
        espadaHieloMano=koonline;
        espadaFuegoMano=koonline;
        espadaKatFiMano=koonline;
        espadaBoskeMano=koonline;
        espadaHachaMano=koonline;
        bloqueandoimg=koonline;
        yohiroDesefunde=koonline;
        velorecup=10000;             
    }
    if(n==2){  
        
        numturnos=4;
        vidamax=8000;
        ataque=4000;                      

        yohiroAtacandoA="img/rain.png";
        yohiroAtacandoB="img/rain.png";
        yohiroCorriendoA="img/rain.png";
        yohiroCorriendoB="img/rain.png";
        yohiroCaminando="img/rain.png";
        yohiroArriba="img/rain.png";
        yohiroAbajo="img/rain.png";
        yohiroEspA="img/rain.png";
        yohiroEspB="img/rain.png";
        yohiroEspC="img/rain.png";
        yohiroEspD="img/rain.png";
        espadaHieloMano="img/rain.png";
        espadaFuegoMano="img/rain.png";
        espadaKatFiMano="img/rain.png";
        espadaBoskeMano="img/rain.png";
        espadaHachaMano="img/rain.png"
        bloqueandoimg="img/rain.png";
        yohiroDesefunde="img/rain.png";
        velorecup=1000; 
    }
    if(n==3){

      
        // dinero=20000;
        // precioE=20000;
        // espadaTienda=nbaculoB;a=6;
        // comprar();

        numturnos=5;
        vidamax=5000;
        ataque=5000;                      

        yohiroAtacandoA="img/sol.png";
        yohiroAtacandoB="img/sol.png";
        yohiroCorriendoA="img/sol.png";
        yohiroCorriendoB="img/sol.png";
        yohiroCaminando="img/sol.png";
        yohiroArriba="img/sol.png";
        yohiroAbajo="img/sol.png";
        yohiroEspA="img/sol.png";
        yohiroEspB="img/sol.png";
        yohiroEspC="img/sol.png";
        yohiroEspD="img/sol.png";
        espadaHieloMano="img/sol.png";
        espadaFuegoMano="img/sol.png";
        espadaKatFiMano="img/sol.png";
        espadaBoskeMano="img/sol.png";
        espadaHachaMano="img/sol.png"
        bloqueandoimg="img/sol.png";
        yohiroDesefunde="img/sol.png";
        velorecup=1000;  

    }
    if(n==4){
        //alert("Yohiro");
        
        document.getElementById("iPlayer").style.marginLeft = mPLeft +"px"; 
        document.getElementById("iPlayer").style.marginTop = mTop +"px"; 

        yohiro="img/yohirostand.png";

        numturnos=1;

        modo=4;
        personaje();
        //document.getElementById("iMono").hidden=false;    

        vidamax=20000;
        ataque=1000;
        dinero+=2000;
        productos(0);
        productos(2);
        productos(2);                
        comprar();


        yohiroAtacandoA="img/yohiroataqueA.png";
        yohiroAtacandoB="img/yohiroataqueB.png";
        yohiroCorriendoA="img/yohirostanddireccioncorriendoA.png";
        yohiroCorriendoB="img/yohirostanddireccioncorriendoB.png";
        yohiroCaminando="img/yohirostanddireccion.png";
        yohiroArriba="img/yohirostandarriba.png";
        yohiroAbajo="img/yohirostand.png";        
        yohiroEspA="img/yohiroEspA.png";
        yohiroEspB="img/yohiroEspB.png";
        yohiroEspC="img/yohiroEspC.png";
        yohiroEspD="img/yohiroEspD.png";
        espadaHieloMano="img/desenfundeEspadaHielo.png";                
        espadaFuegoMano="img/desenfundeEspadaFuego.png";
        espadaKatFiMano="img/desenfundeEspadaFilosa.png";
        espadaBoskeMano="img/desenfundeEspadaBosque.png";
        espadaHachaMano="img/desenfundeHacha.png";
        bloqueandoimg="img/yohiroB.png";
        yohiroDesefunde="img/yohirostanddireccion.png";
        }
    if(n==5){
        numturnos=1;
        vidamax=15000;
        ataque=1000;
        dinero+=5000;
        productos(0);
        productos(2);
        productos(2);        
        productos(2);
        productos(2);                
        comprar();       

        yohiroAtacandoA="img/ninja.png";
        yohiroAtacandoB="img/ninja.png";
        yohiroCorriendoA="img/ninja.png";
        yohiroCorriendoB="img/ninja.png";
        yohiroCaminando="img/ninja.png";
        yohiroArriba="img/ninja.png";
        yohiroAbajo="img/ninja.png";
        yohiroEspA="img/ninja.png";
        yohiroEspB="img/ninja.png";
        yohiroEspC="img/ninja.png";
        yohiroEspD="img/ninja.png";
        espadaHieloMano="img/ninja.png";
        espadaFuegoMano="img/ninja.png";
        espadaKatFiMano="img/ninja.png";
        espadaBoskeMano="img/ninja.png";
        espadaHachaMano="img/ninja.png"
        bloqueandoimg="img/ninja.png";
        yohiroDesefunde="img/ninja.png";

    }
    if(n==6){

 
        dinero+=100;
        productos(0);
        productos(2);
        productos(2);        
        productos(2);
        productos(2);                
        productos(2);                
        productos(2);                
        comprar();   
        numturnos=2;
        vidamax=5000;
        ataque=3000;                      

        yohiroAtacandoA="img/humhn.png";
        yohiroAtacandoB="img/humhn.png";
        yohiroCorriendoA="img/humhn.png";
        yohiroCorriendoB="img/humhn.png";
        yohiroCaminando="img/humhn.png";
        yohiroArriba="img/humhn.png";
        yohiroAbajo="img/humhn.png";
        yohiroEspA="img/humhn.png";
        yohiroEspB="img/humhn.png";
        yohiroEspC="img/humhn.png";
        yohiroEspD="img/humhn.png";
        espadaHieloMano="img/humhn.png";
        espadaFuegoMano="img/humhn.png";
        espadaKatFiMano="img/humhn.png";
        espadaBoskeMano="img/humhn.png";
        espadaHachaMano="img/humhn.png"
        bloqueandoimg="img/humhn.png";
        yohiroDesefunde="img/humhn.png";
        velorecup=1000;
    }
    if(n==7){
        dinero+=20000;
        productos(0);
        productos(2);
        productos(2);        
        productos(2);
        productos(2);                
        productos(2);                
        productos(2); 
        productos(2);                
        comprar(); 


        numturnos=1;
        vidamax=10000;
        ataque=1000;                      

        yohiroAtacandoA="img/jaco.png";
        yohiroAtacandoB="img/jaco.png";
        yohiroCorriendoA="img/jaco.png";
        yohiroCorriendoB="img/jaco.png";
        yohiroCaminando="img/jaco.png";
        yohiroArriba="img/jaco.png";
        yohiroAbajo="img/jaco.png";
        yohiroEspA="img/jaco.png";
        yohiroEspB="img/jaco.png";
        yohiroEspC="img/jaco.png";
        yohiroEspD="img/jaco.png";
        espadaHieloMano="img/jaco.png";
        espadaFuegoMano="img/jaco.png";
        espadaKatFiMano="img/jaco.png";
        espadaBoskeMano="img/jaco.png";
        espadaHachaMano="img/jaco.png"
        bloqueandoimg="img/jaco.png";
        yohiroDesefunde="img/jaco.png";
        velorecup=5000;
    }
    if(n==8){
        dinero+=20000;
        productos(0);
        productos(2);
        productos(2);        
        productos(2);
        productos(2);                
        productos(2);                
        productos(2); 
        productos(2);                
        comprar(); 


        numturnos=1;
        vidamax=10000;
        ataque=1000;                      

        yohiroAtacandoA="img/kila.png";
        yohiroAtacandoB="img/kila.png";
        yohiroCorriendoA="img/kila.png";
        yohiroCorriendoB="img/kila.png";
        yohiroCaminando="img/kila.png";
        yohiroArriba="img/kila.png";
        yohiroAbajo="img/kila.png";
        yohiroEspA="img/kila.png";
        yohiroEspB="img/kila.png";
        yohiroEspC="img/kila.png";
        yohiroEspD="img/kila.png";
        espadaHieloMano="img/kila.png";
        espadaFuegoMano="img/kila.png";
        espadaKatFiMano="img/kila.png";
        espadaBoskeMano="img/kila.png";
        espadaHachaMano="img/kila.png"
        bloqueandoimg="img/kila.png";
        yohiroDesefunde="img/kila.png";
        velorecup=5000;
    }

    nivel=0;
    //console.log("ndea");
    vida=vidamax;
    turnos=numturnos;
    dinero+=1000;
    document.getElementById("dOtro").hidden=true;
    document.getElementById("entremedio").hidden=true;
    document.getElementById("delJuego").hidden=false;
    document.getElementById("iTiendaMapa").style.marginLeft=mLeftTienda+"px";    
    document.getElementById("iMono").style.marginLeft = mMleft +"px";
    document.getElementById("iMono").style.marginTop = 50+"px";        
    document.getElementById("ipajarrock").style.marginLeft=mLeftPajaro+"px"; 
    mTopPajaro=(marTopMapa+topmargpj);
    document.getElementById("ipajarrock").style.marginTop=(marTopMapa+topmargpj)+"px";
    consulte();    
    document.getElementById("imagenPajarrock").src=esesi;
    corr();corr();
    moverse(1,0);
    moverse(2,0);
    moverse(3,0);    
    moverse(4,0); 
    modo=n;
    dalePlay(4);//empieza a llover el dia 1
    document.getElementById("lluviaxd").hidden=false;

//  for(var ioi=0;ioi<subirls;ioi++){
//     subirNivel();}
    cambiarColor();mostrarInventario();    
}

function aumexp(n){
    exptotal+=n;
    subirNivel();
}


function compareexp(){
    var dele=false;
        if(exptotal>=cuantaexp){
            exptotal-=cuantaexp;
            dele=true;
        }    
    return dele;
}

function subirNivel(){
    sepuede=compareexp();
    if(sepuede){
    nivel++;ataque+=1000;vidamax+=1000;dinero+=1000*nivel;
    virecup+=nivel;
    console.log("ahora si");
    cuantaexp*=2;
    }else{
        console.log("todavia no "+exptotal+"/"+cuantaexp);
    }
}
function itemSelec(n){
    if(cajas[n]){
    switch(n){
        case 0:espada=c0;
        break;
        case 1:espada=c1;
        break;
        case 2:espada=c2;
        break;
        case 3:espada=c3;
        break;
        case 4:espada=c4;
        break;
        case 5:espada=c5;
        break;
        case 6:espada=c6;
        break;
        case 7:espada=c7;
        break;
        case 8:espada=c8;
        break;
        case 9:espada=c9;
        break;
        case 10:espada=c10;
        break;
        case 11:espada=c11;
        break;
    }armaMano();if(armaFuera){desenfunde();}  
    }
}

function item(n){
switch(n){
    case 0:c0=espada;
    break;
    case 1:c1=espada;
    break;
    case 2:c2=espada;
    break;
    case 3:c3=espada;
    break;
    case 4:c4=espada;
    break;
    case 5:c5=espada;
    break;
    case 6:c6=espada;
    break;
    case 7:c7=espada;
    break;
    case 8:c8=espada;
    break;
    case 9:c9=espada;
    break;
    case 10:c10=espada;
    break;
    case 11:c11=espada;
    break;
}tlasarmas+=" - "+espada;
}
var ctp=1;
//nada xd
var corresponde="onscreenControls/Sprites/flatDark/flatDark35.png";
var botonB="",botonX="",botonY="",botonCorrer="",botonDetenerse="",colorText="",botonArriba="",botonAbajo="",botonIzquierda="",botonDerecha="";
var botonStart="".botonSelect="";

function mostrarPoderes(){
    if(ctp==1){//argentina is white
        document.getElementById("invt").hidden=true;
        document.getElementById("podrs").hidden=false;    
        }
        if(ctp==2){
        document.getElementById("invt").hidden=false;
        document.getElementById("podrs").hidden=true;
        ctp=0;
      
        }
        ctp++; 

      
}
var elcxd=1;
var botonCC="onscreenControls/Sprites/flatLight/flatLight31.png";
function cambiarColor(){confg();
if(elcxd==1){
    
    botonCC="onscreenControls/Sprites/flatDark/flatDark32.png";
    colorText="#ffffff";

    botonArriba="onscreenControls/Sprites/flatLight/flatLight01.png";
    botonAbajo="onscreenControls/Sprites/flatLight/flatLight08.png";
    botonIzquierda="onscreenControls/Sprites/flatLight/flatLight03.png";
    botonDerecha="onscreenControls/Sprites/flatLight/flatLight04.png";

    botonB="onscreenControls/Sprites/flatLight/flatLight35.png";
    botonX="onscreenControls/Sprites/flatLight/flatLight36.png";
    botonY="onscreenControls/Sprites/flatLight/flatLight37.png";

    botonCorrer="onscreenControls/Sprites/flatLight/flatLight51.png";
    botonDetenerse="onscreenControls/Sprites/flatLight/flatLight50.png";

    botonStart="onscreenControls/Sprites/flatLight/flatLight40.png";
    botonSelect="onscreenControls/Sprites/flatLight/flatLight41.png";

    document.getElementById("imgf").style.filter="grayscale(0%)";
    document.getElementById("icomic").style.filter="grayscale(0%)";
}

if(elcxd==2){   
    document.getElementById("imgf").style.filter="grayscale(100%)";
    document.getElementById("icomic").style.filter="grayscale(100%)";

    botonCC="onscreenControls/Sprites/flatLight/flatLight31.png";
    botonArriba="onscreenControls/Sprites/flatDark/flatDark02.png";
    botonAbajo="onscreenControls/Sprites/flatDark/flatDark09.png";
    botonIzquierda="onscreenControls/Sprites/flatDark/flatDark04.png";
    botonDerecha="onscreenControls/Sprites/flatDark/flatDark05.png";
    colorText="#000000";

    botonB="onscreenControls/Sprites/flatDark/flatDark36.png";
    botonX="onscreenControls/Sprites/flatDark/flatDark37.png";
    botonY="onscreenControls/Sprites/flatDark/flatDark38.png";
    
    botonCorrer="onscreenControls/Sprites/flatDark/flatDark35.png";
    botonDetenerse="onscreenControls/Sprites/flatDark/flatDark50.png";

    botonStart="onscreenControls/Sprites/flatDark/flatDark41.png";
    botonSelect="onscreenControls/Sprites/flatDark/flatDark42.png";        
elcxd=0;
}

    if(dale){
        corresponde=botonDetenerse;
    }else{
        corresponde=botonCorrer;
    }
    document.getElementById("cc").src=botonCC;
    document.getElementById("pText").style.color=colorText;
    document.getElementById("pTexts").style.color=colorText;
    document.getElementById("pTexte").style.color=colorText;
    document.getElementById("biz").src=botonIzquierda;
    document.getElementById("bde").src=botonDerecha;
    document.getElementById("bar").src=botonArriba;
    document.getElementById("bab").src=botonAbajo;
    document.getElementById("atq").src=botonY;
    document.getElementById("idesenfunde").src=botonX;
    document.getElementById("de").src=botonB;
    document.getElementById("ic").src=corresponde;
    document.getElementById("start").src=botonStart;
    document.getElementById("bsee").src=botonSelect;
    elcxd++;
}

//abrir cerrar tienda
function mostrarTienda(n){
    if(dale){corr();}        
    if(n==1){
    document.getElementById("dTienda").hidden=false;
    document.getElementById("delJuego").hidden=true;
    dalePlay(1);
    hablaGato(1);
    productos(0); 
    }
    if(n==2){
    document.getElementById("dTienda").hidden=true;
    document.getElementById("delJuego").hidden=false;
    dalePlay(4);
    hablaYohiro();
    }      
}
//la lista de items podria ser unos arryas

var armasBol=[hachaNormal,espadaHielo];

//productos de la tienda de momento solo espadas []
function productos(n){

//aqui recibe la n = 0 para mostra r el menu de cosas
if(n==0){a=0;}
if(n==1){if(a!=0){a--;}else{a=maxi;}}
if(n==2){if(a<maxi){a++;}else{a=0;}}

if(a==0){document.getElementById("itArma").src=iHacha;espadaTienda=hacha;precioE=phacha;
if(hachaNormal){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==1){document.getElementById("itArma").src=iespadaA;espadaTienda=espadaA;precioE=pespadaA;
if(espadaHielo){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==2){document.getElementById("itArma").src=iespadaB;espadaTienda=espadaB;precioE=pespadaB;
if(espadaFuego){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==3){document.getElementById("itArma").src=iespadaC;espadaTienda=espadaC;precioE=pespadaC;
if(kataFilosa){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==4){document.getElementById("itArma").src=iespadaD;espadaTienda=espadaD;precioE=pespadaD;
if(kataBosque){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==5){document.getElementById("itArma").src=iespadaE;espadaTienda=espadaE;precioE=pespadaE;
if(espadaQjen){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==6){document.getElementById("itArma").src=ibaculoA;espadaTienda=nbaculoA;precioE=pbaculoA;
if(baculoA){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==7){document.getElementById("itArma").src=ibaculoB;espadaTienda=nbaculoB;precioE=pbaculoB;
if(baculoB){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==8){document.getElementById("itArma").src=iguadaP;espadaTienda=nguadaP;precioE=pguadaP;
if(guadaP){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}
if(a==9){document.getElementById("itArma").src=iguadaF;espadaTienda=nguadaF;precioE=pguadaF;
if(guadaF){vendido=true;dile=false;document.getElementById("itAbajo").src="img/comprado.png";}
else{document.getElementById("itAbajo").src="img/comprar.png";dile=true;vendido=false;}}

if(dile){document.getElementById("pTienda").textContent=fraseA+" "+espadaTienda+" "+fraseB+" "+precioE+" "+fraseC;}
if(vendido){hablaGato(4);}
}


//para elegir que arma se compra se viene el [] asi hace que se puede comprar y agregar al inventario la correcta
function analizar(){
    if(a==1){
        espadaHielo=true;
    }
    if(a==2){
        espadaFuego=true;
    }
    if(a==3){
        kataFilosa=true;
    }
    if(a==4){
        kataBosque=true;
    }
    if(a==0){
        hachaNormal=true;
    }
    if(a==5){
        espadaQjen=true;
    }
    if(a==6){
        baculoA=true;
    }
    
    if(a==7){
        baculoB=true;
    }
    
    if(a==8){
        guadaP=true;
    }
    
    if(a==9){
        guadaF=true;
    }
}

//para comprar armas xd
function comprar(){
    if(modoT=1){
        if(!vendido){
        if(dinero>=precioE){
            ataque-=ataqueCarma;
            ataqueCarma+=precioE;
            ataque+=ataqueCarma;
            dinero-=precioE;
            espada=espadaTienda;
            document.getElementById("itAbajo").src="img/comprado.png";
            vendido=true;
            hablaGato(2);
            analizar();
            armaMano();
            list=false;
            if(vendido){adinventario();}       
        }else{
            hablaGato(3);
        }
        }else{
            hablaGato(4);
        }
    }
}


function mostrarStats(){
    if(ts==1){document.getElementById("pTexts").textContent="Salud "+vida +" Ataque "+ataque+" Dinero "+dinero;
    document.getElementById("pTexte").textContent="Nivel "+nivel+" Arma "+espada
    yohiroPalabras="Dia : "+dia+" Enemigo : "+vidaen;
    hablaYohiro();
    hablaYohiro();
    ts=0;
}

    ts++;
    espadaMano();    
}

var cinvt=2;//mostrar
function mostrarInventario(){

    if(cinvt==1){
        document.getElementById("tyb").hidden=false;        
        document.getElementById("cosas").hidden=true;    
        if(ctp==2){
            document.getElementById("invt").hidden=true;    
        }
        if(armaFuera){desenfunde();}
    }
    if(cinvt==2){        
        armaMano();
        document.getElementById("tyb").hidden=true;
           
        document.getElementById("cosas").hidden=false; 
        if(ctp==1){
            document.getElementById("invt").hidden=false;    
        }   
    cinvt=0;if(armaFuera){desenfunde();}
    }
    cinvt++;   
}


//aqui es para añadir al inventario al momento de comprar no fake
function armaMano(){
    if(espada==espadaA){
        iespada=iespadaA;
    }
    if(espada==espadaB){
        iespada=iespadaB;
    }
    if(espada==espadaC){
        iespada=iespadaC;
    }
    if(espada==espadaD){
        iespada=iespadaD;
    }
    if(espada==hacha){
        iespada=iHacha;
    }
    if(espada==espadaE){
        iespada=iespadaE;
    }
    if(espada==nbaculoB){
        iespada=ibaculoB;
    }    
    if(espada==nbaculoA){
        iespada=ibaculoA;
    }
        if(espada==nguadaP){
        iespada=iguadaP;
    }
    if(espada==nguadaF){
    iespada=iguadaF;
}
    document.getElementById("espInv").src=iespada;
}
//aqui seleccionas el arma a equipar
function espadaMano(){
    if(espada==espadaA){
        yohiroDesefunde=espadaHieloMano;
    }
    if(espada==espadaB){
                
        espadaFuegoMano;        
        yohiroDesefunde=espadaFuegoMano;
    }
    if(espada==espadaC){
        yohiroDesefunde=espadaKatFiMano;
    }
    if(espada==espadaD){
        yohiroDesefunde=espadaBoskeMano;
    }
    if(espada==hacha){
        yohiroDesefunde=espadaHachaMano;
    }
    if(espada==espadaE){
        yohiroDesefunde=espadaQjenMano;
    }    
    if(espada==nbaculoA){
        yohiroDesefunde=baculoAMano;
    }    
    if(espada==nbaculoB){
        yohiroDesefunde=baculoBMano;
    }    
    if(espada==nguadaP){
        yohiroDesefunde=guadaPMano;
    }    
    if(espada==nguadaF){
        yohiroDesefunde=guadaFMano;
    }
}

var ty=1;//texto yohiro
function hablaYohiro(){
    if(ty==1){
    document.getElementById("pText").textContent=yohiroPalabras;}
    if(ty==2){
        document.getElementById("pText").textContent=yohiroPalabra;
        ty=0;}
    ty++;
    //if(dale){corr();}
}

var quedicegato=["Asi es","Welcome","Buena Eleccion","Te falta","Dejeme informarle que ya posee dicho elemento","Im Happy","Mew Mew","Purrr","Yo","Want More?"];
function hablaGato(n){
    var textoGato;    
        textoGato=quedicegato[n];
    document.getElementById("pToro").textContent="Monedas: "+dinero;
    document.getElementById("pTienda").textContent=textoGato;
}

var texts=[yohiro,"...","Asi es",":O",":D","..."];
function continuar(){
    ctn++;
        document.getElementById("pJug").textContent=texts[ctn];
        document.getElementById("imagenJuego").src="img/prueba"+ctn+".png";
    if(ctn==6){
    mostrarTienda();ctn=0;
    }
}

/// AAAAAAQUIIII EMPIEZAAA

function iniciar(){
    document.getElementById("histor").hidden=true;            
    document.getElementById("dInicio").hidden=true;
    document.getElementById("dOtro").hidden=false;
    document.getElementById("superv").hidden=false;
    muerto=false;
    document.getElementById("imgpj").style.filter="grayscale(0%)"
    document.getElementById("esppj").hidden=false;
    document.getElementById("losstats").hidden=true;
    document.getElementById("otrostats").hidden=true;
    document.getElementById("elitemn").hidden=true;
}

var muerto=false;
var nper=0;
function stats(n){ 
    
    if(muerto){
    document.getElementById("delJuego").hidden=true;
    document.getElementById("idJuego").hidden=true;
    document.getElementById("entremedio").hidden=true;
        cancelatres();ahorasi=false;distinto=false;
    document.getElementById("losstats").hidden=true;
    document.getElementById("otrostats").hidden=true;
    document.getElementById("elitemn").hidden=false;
    document.getElementById("algopj").hidden=false;
    document.getElementById("titi").hidden=false;
    
    }else{

    if(!distinto){
        if(n==0){        
        document.getElementById("entremedio").hidden=true;        
        }else{
        nper=n;
        document.getElementById("entremedio").hidden=false;        
        segun(n);
        }
    } 
}
}
var ninjaAbajo="img/ninja.png";
var pjs=[cKo=["Ko","Rey de las Artes Marciales, el legendario Ko una vez mas buscara ser el heroe","","img/ko.png"]
,cRain=["Rain","Hija de la lluvia, capaz de generar una tormenta en segundos","","img/rain.png"]
,cSol=["Sol","Bendecida con un poder sin igual, Sol madre de planetas, hija del universo","","img/sol.png"]
, cYohiro=["Yohiro","Nacido del Volcan Yanike. Yohiro blandira su espada contra todo el que se le interponga en su busqueda, hasta encontrar a su hermano...",iespadaB,yohiro]
, cNinja=["Ninja","Una orden secreta, encargada de la recoleccion de las armas, provee de su mejor guerrero para esta busqueda",iespadaD,ninjaAbajo]
, cHumhn=["Humhn","Luego de ser alcanzado por un rayo especial Humhn vio cambios en su cuerpo al principio no parecia mucho... ahora ya es una nube...",ibaculoA,koonline]
, cJaco=["Jaco","Guardia de la ciudad del valle del sur",ibaculoB,"img/jaco.png"]
, cKila=["Kila","Guardia de la ciudad del valle del sur",ibaculoB,"https://lh3.googleusercontent.com/-7BYIXwUXw8pOjK1_cSRgJtFZiW0gsbpFGDVkgRq9PwgAhOzBfvLv8WCXxr5IY8Ezymr8l4kshx89rxQkONGowxfxSpEc7kZhzxFhbbPO61mf-5YL-kXquzO0ly8PN7QXkbDJYdVko54_EI2rs17qhiPknP958THsULRNNiJFi9ndqwA0wfXtZIBCy8rzdvODjJ7EwoQn-rIq-RoAXEDTKgV5nrfR_6UKuvIxp34G-_e5WSGke9JHxnLUjw8PHmezWhOGNM9juefJICl8CCGpMQPp4I6-Zp5ZGcuvgBfc43NemDPFw13GNdvQhC03Vw6j50J7ghSounFJ9TIZusH6WA--S3XBVNfg9fWGkZdRh4pf3cfM2S97ubmwf45aYLxvjkhQTiQeFY27F4Jh2JXhExx45ZvKY1hUOq49F0EEGmmU6nI3q35MUjDWacWNoZXLhx2CWHay80n18wJF77t-K6B0__u49foqfQERwXNOgzi-6A7yATPir76wsr91gMVD9eu8cABik2E9wflz70Mv5dtKUNYkcghFu9Pfz99Tlpc-yoX_OJC1WiLyRqzQkf6AGG-j9sV3D_JfVfYUrdK5MYMEyl4E7KvLzGN0YqaWhUtizIDoEJi6-gbGcBYE4GFdl6V4X-_32QfSHLlY1mJ7u1bhBm7ZrJftFWLL6nSZlojZyULLn5GvcNsUaQCVO4=w50-h100-no?authuser=0"]
];

var nombrepj="",algopj="",esppj="",impj="";

function segun(n){

//     if(n==1){        
//         nombrepj=cKo[0];
//         algopj=cKo[1];
//         esppj=cKo[2];
//         impj=cKo[3];
    
//     }
//     if(n==2){        
//         nombrepj=cRain[0];
//         algopj=cRain[1];
//         esppj=cRain[2];
//         impj=cRain[3];
    
//     }
//     if(n==3){        
//         nombrepj=cSol[0];
//         algopj=cSol[1];
//         esppj=cSol[2];
//         impj=cSol[3];    
//     }
//     if(n==4){
//         nombrepj=cYohiro[0];
//         algopj=cYohiro[1];
//         esppj=cYohiro[2];
//         impj=cYohiro[3];
//     }
//     if(n==5){
//         nombrepj=cNinja[0];
//         algopj=cNinja[1];
//         esppj=cNinja[2];
//         impj=cNinja[3];
//     }
    
//     if(n==6){
//         nombrepj=cHumhn[0];
//         algopj=cHumhn[1];
//         esppj=cHumhn[2];
//         impj=cHumhn[3];
//     }
//     if(n==7){
//         nombrepj=cJaco[0];
//         algopj=cJaco[1];
//         esppj=cJaco[2];
//         impj=cJaco[3];
//     }
//     if(n==8){
//         nombrepj=cKila[0];
//         algopj=cKila[1];
//         esppj=cKila[2];
//         impj=cKila[3];
//     }

// /*
n-=1;
nombrepj=pjs[n][0];
algopj=pjs[n][1];
esppj=pjs[n][2];
impj=pjs[n][3];

    document.getElementById("nombrpj").textContent=nombrepj;
    document.getElementById("algopj").textContent=algopj;
    document.getElementById("imgpj").src=impj;
    document.getElementById("esppj").src=esppj;

}
function cancelatres(){
    document.getElementById("dOtro").hidden=true;
    document.getElementById("dInicio").hidden=false;
    document.getElementById("superv").hidden=false;
}
function elegitres(){
    
    //console.log(ahorasi+"&&"+distinto+"||"+nper);
   
    if(!ahorasi){
        dif(nper);
        document.getElementById("algopj").hidden=true;
        document.getElementById("tiktak").hidden=true;
    }
    else{
         if(distinto){            
            document.getElementById("idJuego").hidden=true;
            document.getElementById("entremedio").hidden=true;
            document.getElementById("delJuego").hidden=false;                
         }
     }
}

function desenfunde(){
    if(armaFuera){armaFuera=false;//enfundar xd
    //console.log("no");
    document.getElementById("de").hidden=true; 
    document.getElementById("ic").hidden=false;    
    document.getElementById("bsee").hidden=false;     
    yohiroDesefunde=yohiroCaminando;
    yohiro=yohiroCaminando;
    ataque-=ataqueCarma;
    if(dir==1){
        moverse(2,0);
        moverse(2,50);
        moverse(1,0);espacioA=200;espacioB=750;
    }
    // document.getElementById("iPlayer").style.height="100px" ;
    // document.getElementById("iPlayer").style.width="50px" ;
    //normal
    }else if(!armaFuera){armaFuera=true;//desenfundar
        //console.log("si");
        des=0;        
        document.getElementById("ic").hidden=true;         
        document.getElementById("bsee").hidden=true;
        document.getElementById("de").hidden=false; 
        espadaMano();
        yohiro=yohiroDesefunde;
        ataque+=ataqueCarma;
        if(dir==1){
            moverse(1,50);espacioA=0,espacioB=900;
        }
    // document.getElementById("iPlayer").style.height="100px" ;
    // document.getElementById("iPlayer").style.width="100px" ;
    //     if(dir==1){
    //         mPLeft
    //     }
    //Desenfunde
    }
    cat=1;
    personaje();
}

document.addEventListener("keydown",function(e){
    
   //console.log(e.keyCode); //});

    if(e.keyCode=="82"){ //R
    zona(0); //mostrarPoderes();
    }

    if(e.keyCode=="80"){ //P
        stark(); //mostrarPoderes();
        }


    if(e.keyCode=="37"||e.keyCode=="65"){
        moverse(1,20);}
    if(e.keyCode=="39"||e.keyCode=="68"){     
        moverse(2,20);}    
    if(e.keyCode=="38"||e.keyCode=="87"){
        moverse(3,20);}    
    if(e.keyCode=="40"||e.keyCode=="83"){
        moverse(4,20);}    

    if(e.keyCode=="32"){//espacio
        corr();
    }
    if(e.keyCode=="17"){//ctrl
        desenfunde();
    }
    if(e.keyCode=="16"){//mayus
        mostrarInventario();
    }
    
    if(e.keyCode=="88"){//x
        mostrarTienda(1);
     
    }
    if(e.keyCode=="89"){ //y  
        ataqueMapa();
    }
    if(e.keyCode=="90"){//z
     
        mostrarTienda(2);
    }
    if(e.keyCode=="66"){//b
     
        if(armaFuera){
            bloqueo();
        }
    }
    // if(e.keyCode=="38"){
    //     mTop-=velocidad;
    //     document.getElementById("iTierra").style.marginTop = mTop +"px"; caminar();
    // }
    // if(e.keyCode=="40"){
    //     mTop+=velocidad;
    // document.getElementById("iTierra").style.marginTop = mTop +"px"; caminar();
    // }
        
});


///MOVERSE AQUI//////
var ubic=0;
function moverse(n,velocidad){
if(!ahorasi){velocidad=0;}
if(ahorasi&&!dale){tavivomaluco();}
if(n==1){if(n!=dir){velocidad=0;if(armaFuera){mPLeft-=50;}document.getElementById("ic").hidden=false;}
 
dir=n;dirc=n;    
        if(mPLeft>=espacioA){ubic-=velocidad;   
            mPLeft-=velocidad;}        
    document.getElementById("iPlayer").style.marginLeft = mPLeft +"px";     
    document.getElementById("imPlayer").style.transform="scale(-1,1)";
    document.getElementById("ic").style.transform="scale(-1,1)";
    yohiro=yohiroCaminando;       
    //poner imagen mirando izquierda
    if(dale){
        yohiro=yohiroCorriendo;            
        document.getElementById("biz").hidden=true;
        document.getElementById("bde").hidden=false;
        document.getElementById("bar").hidden=false;
        document.getElementById("bab").hidden=false;
    }
    
    if((mLeft<1000&&mLeft!=0&&mPLeft<espacioA)){ 
        ubic-=velocidad;          
        mLeft+=velocidad;
        mMleft+=velocidad; 
        mLeftTienda+=velocidad;
        mLeftPajaro+=velocidad;   
        document.getElementById("iTiendaMapa").style.marginLeft=mLeftTienda+"px";
        document.getElementById("iTierra").style.marginLeft = mLeft +"px";  
        document.getElementById("iMono").style.marginLeft = mMleft +"px";      
        document.getElementById("ipajarrock").style.marginLeft=mLeftPajaro+"px"; 
    }
    if(mLeftTienda>=largomapaA&&dale&&(mPLeft<=200)){
        corr();
    }
 }//izquierda

if(n==2){if(n!=dir){velocidad=0;document.getElementById("bde").hidden=false;
if(armaFuera){mPLeft+=50;}}

    dir=n;dirc=n;
    if(mPLeft<espacioB){mPLeft+=velocidad;ubic+=velocidad;}
    document.getElementById("iPlayer").style.marginLeft = mPLeft +"px"; 
    document.getElementById("imPlayer").style.transform="scale(1,1)";
    document.getElementById("ic").style.transform="scale(1,1)";
    yohiro=yohiroCaminando;
    if(dale){
        yohiro=yohiroCorriendo;
        document.getElementById("bde").hidden=true;
        document.getElementById("biz").hidden=false;
        document.getElementById("bar").hidden=false;
        document.getElementById("bab").hidden=false;
    }
//poner imagen mirando derecha

    if((mLeft<1000&&mLeft!=largomapaB&&mPLeft>=espacioB)){
        document.getElementById("iTiendaMapa").style.marginLeft=mLeftTienda+"px";
        mLeft-=velocidad;
        mMleft-=velocidad;  
        mLeftTienda-=velocidad;  
        mLeftPajaro-=velocidad;  
        ubic+=velocidad;       
        document.getElementById("iTierra").style.marginLeft = mLeft +"px";
        document.getElementById("iMono").style.marginLeft = mMleft +"px";        
        document.getElementById("ipajarrock").style.marginLeft=mLeftPajaro+"px";
}
}//derecha

if(n==3){if(!dale){yohiro=yohiroArriba;}if(arab!=n&&!dale){velocidad=0;}arab=n;
dirc=n;//console.log(marTopMapa)
if(dale){
    yohiro=yohiroArriba
    document.getElementById("bde").hidden=false;
    document.getElementById("biz").hidden=false;
    document.getElementById("bar").hidden=true;
    document.getElementById("bab").hidden=false;
}
if((mTop==-100&&marTopMapa<0)&&(!armaFuera)){//document.getElementById("iPlayer").style.transform="scale(0.65,0.65)";
document.getElementById("iPlayer").style.zIndex=0;
marTopMapa+=velocidad;
document.getElementById("iTierra").style.marginTop = marTopMapa +"px";


document.getElementById("ipajarrock").style.marginTop=(marTopMapa+topmargpj)+"px";
//hacer lo del z index xd
}   
if(mTop!=-100){        
        mTop-=velocidad;        
        document.getElementById("iPlayer").style.marginTop = mTop +"px";        

            
    if(mTop==-80){//document.getElementById("iPlayer").style.transform="scale(0.6,0.6)";
    document.getElementById("iPlayer").style.zIndex=0;}    

    if(mTop==-60){//document.getElementById("iPlayer").style.transform="scale(0.6,0.6)";
    document.getElementById("iPlayer").style.zIndex=1;}

    if(mTop==-40){//document.getElementById("iPlayer").style.transform="scale(0.7,0.7)"; 
    document.getElementById("iPlayer").style.zIndex=2;}

    if(mTop==-20){//document.getElementById("iPlayer").style.transform="scale(0.75,0.75)"; 
    document.getElementById("iPlayer").style.zIndex=3;}
    
    if(mTop==0){//document.getElementById("iPlayer").style.transform="scale(0.8,0.8)";
    document.getElementById("iPlayer").style.zIndex=4;}

    if(mTop==20){//document.getElementById("iPlayer").style.transform="scale(0.85,0.85)";
    document.getElementById("iPlayer").style.zIndex=5;}

    if(mTop==40){//document.getElementById("iPlayer").style.transform="scale(0.9,0.9)"; 
    document.getElementById("iPlayer").style.zIndex=6;}

    if(mTop==60){//document.getElementById("iPlayer").style.transform="scale(0.95,0.95)"; 
    document.getElementById("iPlayer").style.zIndex=7;}

    if(mTop==80){//document.getElementById("iPlayer").style.transform="scale(1,1)"; 
    document.getElementById("iPlayer").style.zIndex=8;

    if(mTop==100){//document.getElementById("iPlayer").style.transform="scale(1,1)"; 
    document.getElementById("iPlayer").style.zIndex=9;}
    
}

    }//poner imagen mirando arriba

}//ARRIBA

if(n==4){if(!dale){yohiro=yohiroAbajo;}if(arab!=n&&!dale){velocidad=0;}arab=n;
dirc=n;//console.log(marTopMapa)
if(dale){yohiro=yohiroAbajo;
    document.getElementById("bde").hidden=false;
    document.getElementById("biz").hidden=false;
    document.getElementById("bar").hidden=false;
    document.getElementById("bab").hidden=true;
}
if((mTop==100&&marTopMapa!=altomapa)&&(!armaFuera)){//document.getElementById("iPlayer").style.transform="scale(1,1)"; 
document.getElementById("iPlayer").style.zIndex=8;
marTopMapa-=velocidad; 

document.getElementById("iTierra").style.marginTop = marTopMapa +"px"; 
document.getElementById("ipajarrock").style.marginTop=(marTopMapa+topmargpj)+"px";
}

    if(mTop!=100){        
        mTop+=velocidad;    
    document.getElementById("iPlayer").style.marginTop = mTop +"px";         
            
    if(mTop==-80){//document.getElementById("iPlayer").style.transform="scale(0.6,0.6)";
    document.getElementById("iPlayer").style.zIndex=0;}

    if(mTop==-60){//document.getElementById("iPlayer").style.transform="scale(0.65,0.65)";
    document.getElementById("iPlayer").style.zIndex=1;}

    if(mTop==-40){//document.getElementById("iPlayer").style.transform="scale(0.7,0.7)"; 
    document.getElementById("iPlayer").style.zIndex=2;}

    if(mTop==-20){//document.getElementById("iPlayer").style.transform="scale(0.75,0.75)"; 
    document.getElementById("iPlayer").style.zIndex=3;}
    
    if(mTop==0){//document.getElementById("iPlayer").style.transform="scale(0.8,0.8)";
    document.getElementById("iPlayer").style.zIndex=4;}

    if(mTop==20){//document.getElementById("iPlayer").style.transform="scale(0.85,0.85)";
    document.getElementById("iPlayer").style.zIndex=5;}

    if(mTop==40){//document.getElementById("iPlayer").style.transform="scale(0.9,0.9)"; 
    document.getElementById("iPlayer").style.zIndex=6;}

    if(mTop==60){//document.getElementById("iPlayer").style.transform="scale(0.95,0.95)"; 
    document.getElementById("iPlayer").style.zIndex=7;}   
    if(mTop==80){//document.getElementById("iPlayer").style.transform="scale(0.95,0.95)"; 
    document.getElementById("iPlayer").style.zIndex=8;}   
    if(mTop==100){//document.getElementById("iPlayer").style.transform="scale(0.95,0.95)"; 
    document.getElementById("iPlayer").style.zIndex=9;}   

    }//poner imagen mirando abajo
}//ABAJO


if(dale&&dir==2&&mPLeft>=600&&mLeftTienda<510){corr();}


var muestrek=false;
//par mostrar la tienda

// if(mLeftTienda>510&&marTopMapa<-160){    muestrek=true;
//     document.getElementById("iti").hidden=true;    
//     if(armaFuera){
//         document.getElementById("ic").hidden=true;
//     }else{
//         document.getElementById("ic").hidden=false;
//     }
//     if(!dale){
//         document.getElementById("atq").hidden=false;
//         if(espada!="Ninguna"){
//         document.getElementById("idesenfunde").hidden=false;}
//     }
// }

//subir Barco
if(mLeftTienda<510&&marTopMapa>-160){
    if(abordo==0){
    document.getElementById("iti").hidden=false;    
    document.getElementById("atq").hidden=true;     
    //document.getElementById("ic").hidden=true;
    document.getElementById("idesenfunde").hidden=true;

    muestrek=true;}
}
else if(mLeftTienda>=4440&&marTopMapa<=-1400&&mPLeft<200&&mTop>=0){   
        
    document.getElementById("iba").hidden=false;  //botonBarco    
    
    document.getElementById("atq").hidden=true;    
    
    muestrek=false;
    //document.getElementById("ic").hidden=true;

    document.getElementById("idesenfunde").hidden=true;
}
if((mLeftTienda>510||marTopMapa<-160)&&muestrek){
    document.getElementById("iti").hidden=true; 
    if(!dale){
            document.getElementById("atq").hidden=false;
            if(espada!="Ninguna"){
                document.getElementById("idesenfunde").hidden=false;
            }
        }

}
if((mLeftTienda<4440||marTopMapa>-1400||mPLeft>200||mTop<0)&&!muestrek){   
        
    document.getElementById("iba").hidden=true;  //botonBarco    
    
    document.getElementById("atq").hidden=false;    
        
    //document.getElementById("ic").hidden=true;

    if(!dale){
        document.getElementById("atq").hidden=false;
        if(espada!="Ninguna"){
            document.getElementById("idesenfunde").hidden=false;
        }
    }
}

// }else if((mLeftTienda<4440)&&(marTopMapa>-1400)&&(mPLeft>200)){   

//     document.getElementById("iba").hidden=true;    //botonBarco

//     if(armaFuera){
//         document.getElementById("ic").hidden=true;
//     }else{
//         document.getElementById("ic").hidden=false;
//     }
//     if(!dale){
//         document.getElementById("atq").hidden=false;
//         if(espada!="Ninguna"){
//         document.getElementById("idesenfunde").hidden=false;}
//     }
// }




console.log(/*"mLeftTienda "+mLeftTienda+"mLeftPajarraco "+*/mLeftPajaro+", ubicacion "+ubic-mLeftPajaro+",mLeft "+mLeft+",mPLeft "+mPLeft+",mMleft "+mMleft);//+"",mTop "+mTop+",marTopMapa "+marTopMapa+",dir "+dir+"xd");



///CAERSE AQUI GRAVEDAD XD

if(caer){
    if(marTopMapa<=-1480){
    
    if(abordo==1){
        abordo=0;
        zona(1);
    }
    }
    }

//mTop es el top del pj y mLeft el left 

if(armaFuera){
    yohiro=yohiroDesefunde;
}//aqui se cambian los yohiros

if(nadando){
    yohiro=yohiroNadando;
}

personaje();

}

var abordo=0;
var caer=false;
setInterval("gravityBarco()",100);

function gravityBarco(){
    if(abordo==1){
        //&&((mLeftTienda==4480&&mPLeft>220&&marTopMapa<-880))){
            if((mLeftTienda<3200)&&mPLeft==760){
                caer=true;
            }
            if(marTopMapa<=-900){
                caer=true;
            }
        //
            if(mLeftTienda==4480&&mPLeft<=220){
                caer=false;
            }
            if((marTopMapa>=-1040&&mTop<=-100)&&(mLeftTienda>3000)){
                caer=false;
            }
            
            if((marTopMapa>=-1020&&mTop<=-80)&&(mLeftTienda>3000)){
                caer=false;
            }

            if((marTopMapa>=-1000&&mTop<=-60)&&(mLeftTienda>3000)){
                caer=false;
            }

            if((marTopMapa>=-980&&mTop<=-40)&&(mLeftTienda>3000)){
                caer=false;
            }

            if((marTopMapa>=-960&&mTop<=-20)&&(mLeftTienda>3000)){
                caer=false;
            }

            if((marTopMapa>=-940&&mTop<=0)&&(mLeftTienda>3000)){
                caer=false;
            }

            if((marTopMapa>=-900&&mTop<=20)&&(mLeftTienda>3000)){
                caer=false;
            }


        if(caer){if(dale){
            corr();
        }
            moverse(4,20);caer=false;
        }
    }
}
var mapan=0;
function zona(n){
    mapan=n;
if(n==0){
    if(abordo==0){
        abordo=1;
    imagenMapa="img/fondobarco.png";document.getElementById("ipajarrock").hidden=true;
}else if(abordo==1){
    abordo=0;
        imagenMapa="img/fondo.png";document.getElementById("ipajarrock").hidden=false;
        }
        
}
if(n==1){
    imagenMapa="img/agua.png";nadando=true;
}else{
    nadando=false;moverse(4,0);
}
document.getElementById("iTierra").src=imagenMapa;
}

function corr(){
if(dale){
    dale=false;    

    document.getElementById("ic").src=botonCorrer;
    corresponde=botonCorrer;

    document.getElementById("bde").hidden=false;
    document.getElementById("biz").hidden=false;
    document.getElementById("bar").hidden=false;
    document.getElementById("bab").hidden=false;
    document.getElementById("bsee").hidden=false;
    if(mLeftTienda>510){document.getElementById("atq").hidden=false;}
    if(espada!="Ninguna"){document.getElementById("idesenfunde").hidden=false;}
    
    yohiro=yohiroCaminando;//poner imagen stand
    
}else if(!dale){
    dale=true;
    
    document.getElementById("ic").src=botonDetenerse;
    corresponde=botonDetenerse;
    document.getElementById("bsee").hidden=true;
    
    if(dir==2){document.getElementById("bde").hidden=true;}
    
    if(dir==1){document.getElementById("biz").hidden=true;} 
    document.getElementById("atq").hidden=true;
    document.getElementById("idesenfunde").hidden=true;  
    //poner imagen corriendo
}personaje();
}

var ic=1;
setInterval("correr()",50);
function correr(){
    if(dale){
    moverse(dirc,10);
    if(ic==1){
        yohiroCorriendo=yohiroCorriendoA;
    }
    if(ic==2){
        yohiroCorriendo=yohiroCorriendoB;
        ic=0;
    }
    ic++; personaje();   
    }            
}

var solto=false;
var dropitem="...";
var peleando=false;

function pelea(){    
    var num=0;
    if(peleando){
        document.getElementById("textY").textContent="Vida "+vida +" Turnos "+turnos;
        document.getElementById("textO").textContent="Vida "+vidaen; 
        if(turnos==0&&vidaen>0){
            vida-=ataqueE;
            turnos=numturnos;
        }
    if(vidaen<=0&&peleando){if(ctnsn==2){sino();}
    
        victoria();
        // //alert("Victoria");        
        // document.getElementById("dJuego").hidden=false;
        // document.getElementById("idJuego").hidden=true;
        consulte();    
        document.getElementById("imagenPajarrock").src=esesi;
        
        //if(armaFuera){desenfunde();}

        num=randomAr(1000,500);
        mLeftPj=num;
        num=randomAr(300,50);
        topmargpj=num;

        mLeftPajaro=mLeft+mLeftPj; 
        document.getElementById("ipajarrock").style.marginLeft=mLeftPajaro+"px"; 
        document.getElementById("ipajarrock").style.marginTop=(marTopMapa+topmargpj)+"px";
        dinero+=(100*conteoVict);        
        peleando=false;turnos=numturnos;
        if(strat){
            strat=false;                  
            distinto=true;
            if(!solto){
                dropitem="Ninguno";
                document.getElementById("esppj").hidden=true;
            }else{
                document.getElementById("esppj").hidden=false;
            }
            document.getElementById("entremedio").hidden=false;
            document.getElementById("elitemn").hidden=false;
            document.getElementById("losstats").hidden=false;
            document.getElementById("otrostats").hidden=false;
            document.getElementById("losstats").textContent="+$"+(100*conteoVict);        
            document.getElementById("otrostats").textContent="Exp +"+(conteoVict*1000);   
            document.getElementById("elitemn").textContent="Item "+dropitem;
            document.getElementById("esppj").src=iespada;
            document.getElementById("nombrpj").textContent="Victoria";
        //document.getElementById("dJuego").hidden=false; 

        }
        //alert("+"+100*conteoVict);        
    }
}if(vida<=0){
    distinto=false;
    strat=false;                  
    muerto=true;stark();
    document.getElementById("tiktak").hidden=false;
    document.getElementById("titi").hidden=true;
    document.getElementById("entremedio").hidden=false;
    document.getElementById("esppj").hidden=true;
    document.getElementById("imgpj").style.filter="grayscale(100%)"
    document.getElementById("losstats").hidden=false;
    document.getElementById("otrostats").hidden=false;
    document.getElementById("elitemn").hidden=false;
    document.getElementById("esppj").src=iespada;
    document.getElementById("nombrpj").textContent="Fin del Juego";
    document.getElementById("losstats").textContent="Nivel "+nivel ;    
    document.getElementById("otrostats").textContent="Dias "+dia;
    document.getElementById("elitemn").textContent="Armas :"+tlasarmas;
}


//if(vida>0){vida-=5000;} /// para matarse


}
//el primer numero es el mayor posible el segundo el menor sin considerarlo f
function randomAr(aM, bM) {
    do {
        num = Math.random();
        num = num * 10000;
        num = Math.floor(num);
    } while (num > aM || num <= bM);

    return num;
}

var poderes=[true,false,false,false];//si tiene disponible la habilidad
var textPod=["Basico","Nada","Nada","Nada"];//los textos en el inventario
var atqPo=[ataque,ataque,]//aqui podrian ser todos los ataqaues[]

function go(n){ 
    if(dale){corr();}
    document.getElementById("delJuego").hidden=true;
    document.getElementById("idJuego").hidden=false;
    fotos(n);
}

/////enemigos del objetivo de practica////


var pajar=4;
var toro=8,itoro="img/toro.png";
var rino=10,irino="img/rino.png";
var nninja=2,ininja="img/ninja.png";
var nhumhn=6,ihumhn="img/humhn.png";
var baboso=12,ibaboso="img/baboso.png";
var acuoso=16,iacuoso="img/acuoso.png";
var fuegoso=14,ifuegoso="img/fuegoso.png";
var electron=18,ielectron="img/electron.png";

var ataqueE=0;
var numk=0;

function tavivomaluco(){
    if(conteoVict!=0&&conteoVict!=1&&conteoVict!=3&&conteoVict!=5&&conteoVict!=7&&conteoVict!=9&&conteoVict!=11&&conteoVict!=13&&conteoVict!=15&&conteoVict!=17&&conteoVict!=19){

 numk=randomAr(7,1);
if(numk==2&&mLeftPajaro<2000){
    mLeftPajaro+=20;
    document.getElementById("ipajarrock").style.transform="scale(1,1)";
    document.getElementById("ipajarrock").style.marginLeft=mLeftPajaro+"px"; 
    tavivomaluco()}
if(numk==3&&mLeftPajaro>100){
    mLeftPajaro-=20;
    document.getElementById("ipajarrock").style.transform="scale(-1,1)";
    document.getElementById("ipajarrock").style.marginLeft=mLeftPajaro+"px";     
    tavivomaluco()}
if(numk==4&&topmargpj<2000){
    topmargpj+=20;
    document.getElementById("ipajarrock").style.transform="scale(1,1)";
    document.getElementById("ipajarrock").style.marginTop=(marTopMapa+topmargpj)+"px";
}
if(numk==5&&topmargpj>200){
    topmargpj-=20;
    document.getElementById("ipajarrock").style.transform="scale(-1,1)";
    document.getElementById("ipajarrock").style.marginTop=(marTopMapa+topmargpj)+"px";
}
if(numk==6){
    document.getElementById("ipajarrock").style.transform="scale(0.8,0.8)";
    vidaen+=(100*conteoVict);
}
if(numk==7){
    
    if(!bloqueando){vida-=ataqueE
        document.getElementById("tyb").style.backgroundColor="#e0d8d820";
    };
    document.getElementById("ipajarrock").style.transform="scale(-1.2,1.2)";
}

    }
}

///////////////////////////////////////////////////////////////////////////////
function consulte(){
    switch(conteoVict){//en tal case le cambias el esesi y los stats gg
        case 20:
            esesi=espadaFuegoMano;
            vidaen=200000;
            ataqueE=5000;            
            break;
        case pajar:
            esesi=dirPjarracl;
            vidaen=60000;ataqueE=300;
            break;        
        case toro:
                esesi=itoro;
                vidaen=100000;ataqueE=500;
            break;
        case rino:
            esesi=irino;
            vidaen=140000;ataqueE=700;
            break;
        case nninja:
            esesi=ininja;
            vidaen=80000;ataqueE=1000;
            break;
        case nhumhn:
            esesi=ihumhn;
            vidaen=60000;ataqueE=1000;
            break;
        case baboso:
                esesi=ibaboso;
                vidaen=80000;ataqueE=800;
                break;
        case acuoso:
            esesi=iacuoso;
            vidaen=180000;ataqueE=400;
        break;
        case fuegoso:
            esesi=ifuegoso;
            vidaen=160000;ataqueE=1000;
        break;
        case electron:
            esesi=ielectron;
            vidaen=120000;ataqueE=4000;
        break;

        default:
            if(conteoVict==0){vidaen=1000;esesi=dirPract;ataqueE=1}else{
            vidaen=2000*conteoVict;esesi=dirPract;        
            ataqueE=1*conteoVict;}
            break;
    }
}

function accion(n){
    if(turnos>0){
    haga(textPod[n]);    
    }
}
var ctnsn=1;
function sino(){
    if(ctnsn==1){
        document.getElementById("pctn").hidden=false;
        document.getElementById("iOp1").hidden=true;
        document.getElementById("iOp2").hidden=true;
        document.getElementById("iOp3").hidden=true;
        document.getElementById("iOp4").hidden=true;
}
    if(ctnsn==2){corresponde=yohiro;document.getElementById("yohiro").src=corresponde;
        document.getElementById("pctn").hidden=true;
        document.getElementById("iOp1").hidden=false;
        document.getElementById("iOp2").hidden=false;
        document.getElementById("iOp3").hidden=false;
        document.getElementById("iOp4").hidden=false;
    ctnsn=0;
}
ctnsn++;
}var strat=false;
var correspondey=yohiro;
function haga(t){
switch(t){

    case "Basico":vidaen-=ataque;correspondey=yohiroEspA;break;

    case "Nada":vidaen+=0;break;

    case "Ataque":vidaen-=(ataqueCarma);correspondey=yohiroEspB;break;

    case "Especial":vidaen-=(ataque*2);correspondey=yohiroEspC;break;

    case "Ultimate":vidaen-=(ataque+(ataqueCarma*2));correspondey=yohiroEspD;break; 
    
    case "am":vidaen-=(ataque/2);break;
}
    if(t!="Nada"&&strat){
        turnos--;sino();document.getElementById("yohiro").src=correspondey;
    }
}

function habilidades(){
    poderes[0]=true;textPod[0]="Basico";document.getElementById("pop1").textContent=textPod[0]+": "+ataque;
    
if(espada!="Ninguna"){
    if(nivel>2){
    poderes[1]=true;textPod[1]="Ataque";}
    if(nivel>5){
    poderes[2]=true;textPod[2]="Especial";}
    if(nivel>10){
    poderes[3]=true;textPod[3]="Ultimate";}
}

//y con un if espada == "a" se agregan poderes personalizados

   if(textPod[1]!="Nada"){document.getElementById("pop2").textContent=textPod[1]+": "+(ataqueCarma);
   }else{document.getElementById("pop2").textContent=textPod[1];}
   if(textPod[2]!="Nada"){document.getElementById("pop3").textContent=textPod[2]+": "+(ataque*2);
   }else{document.getElementById("pop3").textContent=textPod[2];}
   if(textPod[3]!="Nada"){document.getElementById("pop4").textContent=textPod[3]+": "+(ataque+(ataqueCarma*2));}
    else{document.getElementById("pop4").textContent=textPod[3];}

}
var imgBatalla="img/batalla.png";
function fotos(n){
if(n==1){ 

    dalePlay(2);
    document.getElementById("imagenJuego").src="img/prueba.png";
    document.getElementById("pJug").hidden=false;
    document.getElementById("iOp1").hidden=true;
    document.getElementById("iOp2").hidden=true;
    document.getElementById("iOp3").hidden=true;
    document.getElementById("iOp4").hidden=true;
    document.getElementById("yohiro").hidden=true;
    document.getElementById("otre").hidden=true;
    
}    

    
    if(n==2){
        document.getElementById("imagenJuego").src=imgBatalla;
        document.getElementById("pJug").hidden=true;
        document.getElementById("iOp1").hidden=false;
        document.getElementById("iOp2").hidden=false;
        document.getElementById("iOp3").hidden=false;
        document.getElementById("iOp4").hidden=false;
        if(!armaFuera){desenfunde();}
        document.getElementById("yohiro").src=yohiro;        
        document.getElementById("otre").src=esesi;
        document.getElementById("otre").style.transform="scale(-1,1)";
        document.getElementById("textY").textContent="Vida "+vida;
        document.getElementById("textO").textContent="Vida "+vidaen;
        peleando=true;strat=true;
        habilidades();
    }
}



///   PERSONAJE AQUII  ////
function personaje(){
   
    // if(modo<4){
    // document.getElementById("imPlayer").src=ekk;/*yohiro; */
    // }
    if(armaFuera){
        document.getElementById("imPlayer").src=yohiro;
        document.getElementById("iPlayer").style.width="100px";
        document.getElementById("iPlayer").style.height="100px";        
    } else{
        document.getElementById("imPlayer").src=yohiro;
        document.getElementById("iPlayer").style.width="50px";
        document.getElementById("iPlayer").style.height="100px";        
    }  
   // console.log(yohiro);     
}

function victoria(){     
    if(conteoVict==2){
    dinero+=5000;
    productos(0);
    productos(2);
    productos(2);
    productos(2);
    productos(2);
    comprar();
    solto=true;
    dropitem=espadaD;
    }else{
        solto=false;
    }
    conteoVict++;aumexp(conteoVict*1000);
    console.log(conteoVict+"-"+exptotal)
}

var audio = {
    musica: null,
    pista1: "audio/y2mate.com _Inicio_by_TMSC.mp3",
    pista2: "audio/y2mate.com _Seleccion_by_MR_NCS.mp3",//MR NCS
    pista3: "audio/MusicaGuzheng,MusicaChina,MusicaRelajante.mp3",
    pista4:"audio/y2mate.com - EFECTOS DE SONIDO _  LLUVIA Y TORMENTA_IPKoCpsWAHw.mp3",
    
    reproducir: function (rutaPista) {
        if (audio.musica != null) {
            audio.musica.pause();
            audio.musica.src = "";
            
        }
        audio.musica = new Audio(rutaPista);
        audio.musica.play();
        audio.volume = 0.1;
    }
};// audio.reproducir(audio.pistaN);

var musica=true;

function pauset(){confg();
    if(musica){
    audio.musica.pause();
    musica=false;
    document.getElementById("msc").src="onscreenControls/Sprites/flatDark/flatDark18.png";
    }else{
        audio.musica.play();
        musica=true;
        document.getElementById("msc").src="onscreenControls/Sprites/flatDark/flatDark16.png";
    }
}

var playTres=true;
function dalePlay(elNum) {
    if(musica)
    switch (elNum) {
        case 1:
            audio.reproducir(audio.pista1);//
            break;
        case 2:
            audio.reproducir(audio.pista2);
            break;
        case 3:if(playTres){playTres=false;
            audio.reproducir(audio.pista3);}            
            break;
        case 4:if(dia>=0&&dia<=15){
            audio.reproducir(audio.pista4);}//
            break;
    }
}

var ctno=4;

function normal(){
    if(ctno==2&&(!dale)&&(!armaFuera)){
    yohiro=yohiroCaminando;personaje();}
    if(armaFuera&&ctno==2&&(!bloqueando)){
        yohiro=yohiroDesefunde;personaje();cat=1;
    }
    if(armaFuera&&ctno==2&&bloqueando){bloqueando=false;
        yohiro=yohiroDesefunde;personaje();cat=1;
    }
ctno++;
if(ctno>3){
    ctno=3;
}
}

function pegale(){
    if(ahorasi&&!strat&&abordo==0&&mapan==0){
        
        peleando=true;
        if(cat<=3){haga("am");
        document.getElementById("tyb").style.backgroundColor="#b60a0a20";
    }
        if(cat==4){haga("Ataque");
        document.getElementById("tyb").style.backgroundColor="#ff040420";
    }
    }
//console.log(vidaen);
}

//agregar combos en un array en el normal que se borra o algo asi
function ataqueMapa(){ 

    //falta crear la hubicacion del pj en el mapa
    
    pegale(cat);

    if(armaFuera){
        
        if(cat==1){yohiro=yohiroEspA;ctno=1;}
    
        if(cat==2){yohiro=yohiroEspB;ctno=1;}
    
        if(cat==3){yohiro=yohiroEspC;ctno=1;}
        
        if(cat==4){moverse(dir,100);yohiro=yohiroEspD;cat=0;ctno=1;}

    }else{

        if(cat==1){yohiro=yohiroAtacandoA;ctno=1;}

        if(cat==2){yohiro=yohiroAtacandoB;cat=0;ctno=1;}
    }
    cat++;
    personaje();
}

var bloqueando=false;

function bloqueo(){
    bloqueando=true;
    yohiro=bloqueandoimg;
    cat=1;
    personaje();
    ctno=0;
    document.getElementById("tyb").style.backgroundColor="#34da3420";
}


var cst=1;var textArmaE="...";
function stark(){
    if(cst==1){
    ahorasi=false;
    yohiroPalabras="Pausa";
    yohiroPalabra="Pausa";
    document.getElementById("pTexts").textContent="Exp "+exptotal+" / "+cuantaexp;
    document.getElementById("")
    hablaYohiro();
    }
    if(cst==2){
    ahorasi=true;cst=0;    
    yohiroPalabras="Dia : "+dia;
    yohiroPalabra=textArmaE;

    hablaYohiro();
    }
cst++;

}

setInterval("cielo()",1000);

function cielo(){    
    //document.getElementById("dCielo").style.backgroundColor="#"+(Math.floor(Math.random()*16777215).toString(16));    
   if(ahorasi){pelea();normal();mostrarStats(); 
       if(!strat){tavivomaluco();}
       
    document.getElementById("dCielo").style.backgroundColor="#02020e"+ctt;    //020208 09092b a x 7 no tan de noche
    if(ctt==99){
        eo=false;hablaYohiro();
    }
    if(ctt==0){        
        eo=true;dia++;hablaYohiro();dinero+=1000*dia;subirNivel();                
    }
    if(eo){
        ctt++;
    }
    if(!eo){
        ctt--;
    }
    //console.log(dia+" : "+ct);}

    if(espada==espadaA){
        textArmaE="Esta espada me trae recuerdos";
    }
    if(espada==espadaB){
        textArmaE="Gran Espada Gran Viaje";
    }
    if(espada==espadaC){
        textArmaE="Esta arma es muy filosa";
    }
    if(espada==espadaD){
        textArmaE="...";
    }
    if(espada==hacha){
        textArmaE="El Hacha";
    }
    yohiroPalabra=textArmaE;
}
}

// juego.onmouseover = juego.onmouseout = handler;

// function handler(event) {

//   function str(el) {
//     if (!el) return "null"
//     return el.className || el.tagName;
//   }

//   log.value += event.type + ':  ' +
//     'target=' + str(event.target) +
//     ',  relatedTarget=' + str(event.relatedTarget) + "\n";
//   log.scrollTop = log.scrollHeight;

//   if (event.type == 'mouseover') {
//     event.target.style.background = 'pink'
//   }
//   if (event.type == 'mouseout') {
//     event.target.style.background = ''
//   }
// }

/*


*/