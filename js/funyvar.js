var derecha=false,izquierda=false,arriba=false,abajo=false;
var veces=700,veces2=330;
var pLeft=100;var pTop=50;var ifp=0, eifp=0;
var rangoA=0;
var oro=0;
var nivel=1;
var datosPj={nombre:"",vidamax:0,vida:0,ataque:0,defensa:0,probCrit:0,dmgCrit:0,recuperacion:0,url:""};
var infoPjs=[
{nombre:"Rain",vidamax:1700
,ataque:1800,defensa:1000,probCrit:40
,dmgCrit:120,recuperacion:200
,url:"https://lh3.googleusercontent.com/rByffD1Yc82VjltG_o49spYycjq4v95PWUlhJ_558DSxd259v3kqLVOZOg95jqNUXx-SLC_Ig2WyhPn26JbaX6-4bVaDk9sc0BzMrsV__JQmU9MbvMUKGO_BuMsQ7TyDvj05QqljrOsLakph3FePUVXaBqDNC61zK0Me4dzs9J-tnuc6IFmtBAt5wqGEWURvdQne52SNVYiDRbWBA_zjOhI7YCBA9AfUVirlDR8MJa7txrkz0GLtlvsqbNL0iH8A9A1Q8tVp4J7LPIKIacotz-3_Vru4aaUZiVW2cGyGiiyPaTBLslzdCrvydYPRk060yWcpFFK3Lwg7kGZLxo6mwz9Vf6w7m2shggl8VDZb6ehMAeR-u_r1U3mnCgtvNL8U5FtYiOJkEp-Vj7Pa9trK90otMsE5iV4ZvOu-G-TjADDoAHHAruyQIfDn7Kh0_QkkdQ3dysPl0cfngFeNVV8oUdTpNJqvDw_mUHC06AqhGrXcXltcZLDzFXUDQy3ZcJiPci5eI2h4Fxg49xCWQUMCyFdxMBPZTHW9DyCcQvRSRszUu-SJKkbw1n5P3ajlKkbNRTJpUnOLOarh1iyPy3qppbwtg6Je5aNMspBLKEdG6fLMgzcbRY0ugrLgEqVcHuUO1KF-Qb7AK-2PRzZHfWroifgsFZpl-Jb9S6AThxwdx4x09iWt8ZH0iZFIERWCH44=w50-h100-no?authuser=0"}
,{nombre:"Yohiro",vidamax:3000
,ataque:1200,defensa:700,probCrit:30
,dmgCrit:170,recuperacion:50
,url:"https://lh3.googleusercontent.com/2NIx7PqqMuUIF80LIXCuENNvXrR9T5h_fseWxTki35S4MHFbL2bESwBdKcCl6qkEJHw4Q-gibyGhBAbbu99ytUwb8ky_-RON4qV1FREet_Ca_8dzS10utCtQ3_AwSVWZ7B0E0o7xlNhOAwvC7yqc6YU4hXPQh79_djSLo23ELyXW6BUrviYI5_boayEiy9GbvLX8nbh9BwECpSGiKoPYUQTg2-YkNIBxujcICf0RlxIkrJqhgOt3VQp7sOuwVfktD4VxnZ-rLIVzJo9X-HOB4z3jHxU5n1AM5r5_0LYLSQEA1ftGRjdtDM3hTpXtP4q1ZgznC_4Ko9b6gbnm_owggiFCELwT6c1IEFoHVWE5Q2RgC45THP0dJWWqYBsI24j9uK4SUxtmY_Bf3asl654zI1CElMcEydxdOPwz3gjFOTnISXZvn6xcG3r9RiAwg2cuJAV2iC3LxoQ2aE0d4TeJpaodAqNnvspYFyYgwjV5lNbJKqyNR1BI2xtldrgdexa1dXBJzZCtMZcLydgnsreqRFqVxXRa_GPY-zx5KdEMHB5rlfIpbNdzejnjGoUxk9KFJpNiaRwu8x7tCBi_AG7aFuQjOezxlOtKhscbSiXdFu_c1u0wAgQtY77e9WVPrH6sYrnMX6FI2rbbOGEH8vydEwWGjYNBwRj_KyxEyypmmPIktrnI9beMLEef6ACBPqU=w50-h100-no?authuser=0"}
,{nombre:"Ninja",vidamax:2500
,ataque:1500,defensa:500,probCrit:20
,dmgCrit:200,recuperacion:300
,url:"https://lh3.googleusercontent.com/mNrOQ3HaYykgJsLSzyAvJ1vQZtLmcdyVr1z1ZW4iP_a9l5bso6jojZZXNOlzj-_1uuvUqJysUJmsI9v7NPFOSK_8uHpDp-8NW1wrvEaisPqqg4LGpH2vIgNnSW3YIvB-_iuzIdxtSNb3ahMHTeMzv5D5N0PhbnvEI6ZoNBBPWaJeXqin8v02k3NHb8k23WGLNxJ0KC5ScBLoUjvDEYwPR13idgmX9r8H96qQNor1HGjoSAnM3j6GbKEMwDuwg1j-oMEmtqOSjenjQUaLk0Wl6jdt-SnqDcVgmWz2wNUqepwFm6VFo0aUEYUhXTMC99Z0cnZxbEfr3ftV2CJ7G8fjlFEPs8rHsS4WmO8g9DVlqOqILJwatFtPRTnE64K7D5Me5MT6Mhp37o8i1mh7sLwya3QI4Q_LPFxQ0JxqwhUPbHf5_DS866N1h2q-rQ7HPa7COglXDNanYJSuD8Okrqko13n_-FqaK1r_egxYzYqx5uvZP6aOyu-KB3FaPNBlACwkITnq0Gw8LjZl3PPTJsF3mvuspEO3nCNEF_H8gQPBYShdu8Knn08ope9r4dx3HLYsX7FOJgdwIpV1JJLQUUUKG-KEuL9uyp7R6BZlHJjbCl4l3BeuxGvpccPTfECVpkCbTfc3gmSViWzQPoie9EhU41dGIL1v_4n9QdzjRE5dN9it-qn4_szslEk5kjTL-F0=w50-h100-no?authuser=0"}
,{nombre:"Sol",vidamax:1500
,ataque:1700,defensa:400,probCrit:10
,dmgCrit:250,recuperacion:100
,url:"https://lh3.googleusercontent.com/QP0h71gLUmxyWVn708VUS2hemkcgVhSYo_pCFkZ97tZtWjmtr8v-WjKVGfF0hF83jSwswxwzMH--4nfYnpLE1gW_fEF3C4FcgIhChBFVR4Flosz-OaFftt3NVqUNZ2nvfGxNdiYdd24waysQhyF1atIw0z2cJ0nnsLEAf2tSmUfzCaaPlooLgHP_d2Vg0l00j1g8Wgc5W6QuKODbMMpejMzaKWOq7qbts53rdvG5PAAkNS0O7bVFGolR87hsoskCKnsfA3pHc0gPpdJFUyLffobtcWY6RVAduTn22xAJodkejGkxr2pIjWEJxuxRe1ssiWN-yXz78gmX3lvqSCTKV8ckUAOFPke__vUuBDLR50Rf04XJWUzGz661nW3epvMNBjzIUGvTPTMz7ttaVbze8MuDEkN2amn_lREp62Hvsm8q_ZdfD5IpMGdIofhx4JWH9mA5xC6OlggyPwz6uuBjxnLoCssiukNOoLVzBeGL7OsLFbnA17dsgx6RjgDoWCEiH6RTueWsiMwv13dMHHeIvG78yPPEBmEUVbNuFpRejKgJVvYPQh027iLqQiNdujQrL0XWxgfQFqa5tWK3cq4AtE2z5xI-YG3phpDoDIXfTOi0bNchFR3DrsxI5cCUYD-2jkapCBxCICUm4KePD5ntAKaiZMVK-F8T7O9pHWf7Qb2KTLr-cOjIx7x2eMsYcxs=w50-h100-no?authuser=0"}
];


var espada={nombre:"",ataque:0,defensa:0,probCrit:00,dmgCrit:0,recuperacion:0,vida:0,alcance:0,url:"",habiliad:""};
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

var oponente={nombre:"",vidamax:0,vida:0,ataque:0,defensa:0,probCrit:0,dmgCrit:0,recuperacion:0,url:""};

var enemigos=[

    {
        nombre:"Practica",vidamax:100000
        ,ataque:0,defensa:500,probCrit:0
        ,dmgCrit:0,recuperacion:5
        ,url:"https://lh3.googleusercontent.com/d0u0cea5eiyOP9rLxeD2fC0qE7XhhqRozc5Gl18lAOs8y5nHBv0fH47bQwst6nsrGiCIHuaWaApSaRlRzaIc4eSFLoL1i32Qs3AOJe2Ai3Ic4lM0658WUWkiR3RtKY-WXkORsoCiF_yRkJsx_ZFUeNeN0_6CQKis6esawNRyKIzobezrvY1b507HSoCwatfaC8O0N-hvGH_2ZN3FBdnGOBx5sCXi_9eVClgYOVBTv77Eu6cIrxHZpUtmzOMK8vMrWy4BL07Ff86HBlLxHwxBkvHLRF4Gdc9e3FS1OOeAvHzNcCL-80SIlgophd2JcvC-WBVf5hYnOgsSZ60ZYht-zF053BNoHg6n7-T6DWUTDOBwjjk1crM_3yI3RgmAntNQQgpj_j6r0HfbSp_5t62lGC6atX-0GFzjmygqtWPRfFSBnkX9t9pNu-XhyiiVpUJibvv1PFpUddILwqkavGAsrW8e4KGFPQ96qdCl5t0_EjhA-zvv-LO_rvcJHuFIgh_CXpM7hJI7pem3IlkbsMHJ9Ytt6E7Y0gpw2b1JqHbuq81RlTig1CTV9lJ-RI22Zpry5o4wgttCpzMFsPmL7FRbJaGIROL_VjH_qKoDjy7pZ5yEthjohhoher_RruWvS4UnPtStT-UgfhXctc2ykUR0gtdwn2v17sPEH56XqNV4Y1ui75n23vZe4cxgWQpmzTQ=w50-h100-no?authuser=0"
    }
,
    {
        nombre:"Elem|Fuego",vidamax:300000
        ,ataque:2000,defensa:500,probCrit:50
        ,dmgCrit:200,recuperacion:10
        ,url:"https://lh3.googleusercontent.com/XNbptuKM4jkVz-DBvilq8pcr7pQemOLtbcAaPY_zrLREgasHW623vEJkrExCXhnEsg8jVLIgw-BaWFNOKd_lgL8G3VS4YwxHsXVP9AnPsrXvc0IGfkYpKjHQPdE7s2oSSP_MV9F4mRmqmzEmIs2vR8PMf4dtKh8NdHry97bjTvFGyf8br0r30qOfHXqLuAaZ7mTy0ktahJsDeN5TBr59gK5sNKuj4JTFs5hOZapmqYNgYl2TRpITaVUJXK7p6-sloCWnuVKNecp-_t97cY7i1Dg2Fw_7deLvlXUEDAP3KrQBfZ3B5CBaGUPD3_KN7sl1rSrTgb25fSKDft7gDmTHGaxL0u41zho0W0xluYhGJ8wUvjMdzHsyB4qNC7OYbH3yhYG9h2kVURZPUnICMarHgIYgjTNiyEre4P1O3Wy8352kM-jOTl04DuQ4Wy08supZzwtg_LIrSQi0xPF6Wn7cTJxrLwQeU3Cu7cNQjLEf_Mte9UaoR6CzxbTzNxFqrdaGRiJ9uTCNDtK0yOzDGTInf2hTaRoPQxLxknFDlAwT9e7u2vB0XbmUMME-U88zUhKnznbf0cCOATbatqmjycwo0ni_CJEHJVvgtYl1z1p14b3vKYlWfGF20aFpmaLyDB8CJACD9P_caTuZClX1yh_e9hemszhdYh6ONm9KQsCYCrDu39iOyGc5gVjs8BFyQ5E=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre:"Elem|Pantano",vidamax:500000
        ,ataque:4000,defensa:700,probCrit:40
        ,dmgCrit:300,recuperacion:40
        ,url:"https://lh3.googleusercontent.com/PIMG-MQmi6pc8_dYScQktaqlzgjoCJi-SGmMG_Rrzug83We_vuGIzCR0a8o8EptDaQk-qqqQc6IwEtXeJLmInA3NDrTqnL3Kg0ptHjBsky9OxFH0PHfTrMCcjsOJS6YrGSCK7Eih6fChLlze7wHoDb3mzLd6MkXMzr2AjM-vmLCJzMNvgW9gOH7Sb0bLXzpL8sU9K25MmbcqBAgCP7QNL3ML9U023KHD7mdT1Yu29DNFjVVfAw89aCvICj8MucruA-0TyUZnEozRigNDXCtPKGu2B0JScUdQ1eS5tdwIBfTkOfeQ1FXvkTUcshSbcd2yv8obDpWPYOK5VJlsNKXx4E5Zv1CNDsOBUPypjIqGSvCquL_-eEe9ngSZHmGYjauQkaKwYTrnI8_uTQoumO39sw-3afsry24kfDH4VUu_l_UfoluYAvPRk__1SottoD5jmoaN8k2uoUu3RIGWIg28Q87FH_Kp9lQSDKW1oScWFBOa6Ud1MzqO78sjFQmcdApL1Fco5QxyRcTfH4GkdWNSPZIwxMV6DsH8iM2w5cub3a5x3nujXK6GE4CIyEHAKDBQws0cbymRYyEOOXPz9xmx2MTMNKTtvkTbturU75MTFz8goS2Gny7Ps4XApYozmHE8RBBtGxXK_BN50s_lmFFuy4RVueAfaKe0xB6WBksJjsRYqJSGkMrrQl9Y8ypBqpY=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre:"Elem|Agua",vidamax:1100000
        ,ataque:7000,defensa:400,probCrit:10
        ,dmgCrit:700,recuperacion:100
        ,url:"https://lh3.googleusercontent.com/t45mlh1VIq3qWTKBkIIXtiLjklsh4Ovigw_VLAsCtNAavX-KHNsjVb3VTu3kJhSypvYpidzdB8-piDS7U1EJQHRMaw0IZsvqzmvcLMbX-ZqeYb0oD_lrrpuH9ygDwX7NU4WkqT59i8NAzNHN3-06KjJ0d_Ilk6GBPAFrU3TtFHwgHpFCKslLyIbBruU2is7e5-Goi4q19EQDMkc8J1KvhRmDWEBn1w8fqWq2Es4ihUjZdMfkKlEG_0reuDOI9POQm2iRYewVghhple8bM-H8fsPfMMPWRIuxzjftQ-uz9kPazuWao86HQW-XMCiQuMcZYJ3rQQ6nzF169SjgpGlkJVMzkhKR4FUg90DGa7RKhMYWzhL_itkjIBuGJkI3Tfv9gXaZ5Fv25J10-GMlFGx4cYcNUW3S_laqFHxEkT8IYmR7aDJnLxI7rKkMzjXRwouikfjMxk0aoFYKzUSfBiHY4CVQXNQg1Y_yafRT4o4ApFaJsXxElK9vjmB5hKZmMNsfRDoG2-dNE-N1LR-0TAYWT4YHsDjwwxJ8xZv3OZR8NfR7Yz5oWNp9f5gLzrbCcNvFMeDOAafOPyiqPZvVfNbdTLdT7j1dZp8eH9oViCAYXUBwLq1ezLxCr2l6i7bVTxL500CzGQLHP8DYS8qbUOQnhBLut3OpSV7wCqachGkvHKCjBigLlXq1PTxPOOXmQ7k=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre:"Elem|Rayo",vidamax:2000000
        ,ataque:12000,defensa:1000,probCrit:80
        ,dmgCrit:500,recuperacion:50
        ,url:"https://lh3.googleusercontent.com/gNX3yo-3ANKvhcFomG4ZqxKbmUp-Ls0Z7lOFAhEYqyKRGzbc3gWzcbJ9z1_2g1NUBtHkQ45AYSc3wRQRFlBV1y6E2AT3kqFanacYLCUkISd1QTfMl0BQ2AeGK1yixmVxRvcLGe9iuErlZG8VxUJ3IINNbpdor9UsSY_WyKof49DgpPKVx-YQdJQkG6fwnzxQDHC7qzINewlmqR8S9jbC2-X4_-iUTvHUu10Z_9cm99RHZpFr3zA9fA-kwHiO73mNTWnYD51FtHrptsJvGVar1PDPfq6iE8lWyRJpUG3pv2dYv-Qnwhayjq1wbfrFE6l-inB0dQyYfzfo-l1KAZwwcnLlZP_TI_pvA0RYyc2zF9nqbLyzX4KJC7uUdc9dsYsrGTdnUVMBZw_asVgz3WsygHeo1fvShNRVNQy9uQkWq-pGWnUmsoxGGuB_KMDi46rEcFqxlKb4rFnLVfL9I_o7K69WYwTaREwYG66NobgNm7pL9yOEh__iwpFW5yRDFdmJq06PuLrs00NStJCVlMpUxhDLk8WwZLOU4DlRdwS0SPx0Ojy1nKetTBfS8A8PyOI4WDQJNvU8UskiOknKvvrMMp-E31IBuDBEpaxiC3doeuZ0Ruqc-y5Efrwv19er-c6zQDS5DS6DWZyW6COGvRIjyRFuzok6q9qfbO0Kchh0-SiN8HnI9PgdokJCJcS3VEY=w50-h100-no?authuser=0"
    }
]

function mensaje(){
       
    //document.getElementById("p").textContent=("width : "+veces+" height : "+veces2);

    if(datosPj.vidamax>datosPj.vida){
     datosPj.vida+=datosPj.recuperacion;
     if(datosPj.vida>datosPj.vidamax){
         datosPj.vida=datosPj.vidamax;
     }
    }

        if(oponente.vidamax>oponente.vida){
            oponente.vida+=oponente.recuperacion;
        if(oponente.vida>oponente.vidamax){
            oponente.vida=oponente.vidamax;
        }
       }


    $("#pi1").text("- "+datosPj.nombre+" - | Vida: "+datosPj.vidamax+"/"+datosPj.vida);
    $("#pi2").text("Nivel:"+nivel+"  |Atq: "+datosPj.ataque+" | Def: "+datosPj.defensa);
    $("#pi3").text("Prob Crit: "+datosPj.probCrit+" | Dmg Crit: "+datosPj.dmgCrit+"|oro: "+oro);
    
    $("#pe1").text("- "+oponente.nombre+" - | Vida: "+oponente.vidamax+"/"+oponente.vida);
    $("#pe2").text("Atq: "+oponente.ataque+" | Def: "+oponente.defensa);
    $("#pe3").text("Prob Crit: "+oponente.probCrit+" | Dmg Crit: "+oponente.dmgCrit);
  

    $("#op").text(espada.nombre);
    $("#impg").attr("src",espada.url); 
    var anchobarra=((oponente.vida)*50)/oponente.vidamax;
    $("#saludOP").width(anchobarra);
}
var confirmacion=0,confirmacion2=0;

function seleccionarP(n){
    for(var e=1;e<5;e++){
        document.getElementById("cuadroP"+e).style.backgroundColor="#130688b9";
    }
    document.getElementById("cuadroP"+n).style.backgroundColor=colorRan();
    eifp=(n-1);confirmacion++;
    $("#infoP").text(""+infoPjs[eifp].nombre+"|ataque: "+infoPjs[eifp].ataque+"|vida: "+infoPjs[eifp].vidamax+"|probCrit: "+infoPjs[eifp].probCrit+"|dmgCrit: "+infoPjs[eifp].dmgCrit+"|def: "+infoPjs[eifp].defensa+"");
}
function seleccionarA(n){
    for(var e=1;e<5;e++){
        document.getElementById("cuadroA"+e).style.backgroundColor="#130688b9";
    }
    document.getElementById("cuadroA"+n).style.backgroundColor=colorRan();
    ifp=(n-1);confirmacion2++;
    $("#infoA").text(""+cual[ifp].nombre+"|ataque: "+cual[ifp].ataque+"|vida: "+cual[ifp].vida+"|probCrit: "+cual[ifp].probCrit+"|dmgCrit: "+cual[ifp].dmgCrit+"|def: "+cual[ifp].defensa+"|alcance : "+cual[ifp].alcance+"");
}

function prosiga(){
    if(confirmacion>=1&&confirmacion2>=1){        
        proceder();
        esconder("pantalla2");
        mostrar("pantalla");

        $("#iz").click();
    }
}
function pegensen (){
var number = randomAr(100,1);
if(number<=oponente.probCrit){
number=Math.ceil(((oponente.ataque*(oponente.dmgCrit/100))-datosPj.defensa));
}else{
number=oponente.ataque-datosPj.defensa;
}
return number
}
function proceder(){

    cargarDatos();//aqui podria hacer varias cosas vite

    espada.nombre=cual[ifp].nombre;
    espada.url=cual[ifp].url;
        
    $("#ipersonaje").attr("src",infoPjs[eifp].url);
     
    console.log(infoPjs[eifp]);
    console.log(cual[ifp]);

    datosPj.nombre=infoPjs[eifp].nombre;
    datosPj.vidamax=Math.ceil(((infoPjs[eifp].vidamax)+(cual[ifp].vida))+((infoPjs[eifp].vidamax)+(cual[ifp].vida))*nivel/20)
    datosPj.vida=datosPj.vidamax;
    datosPj.ataque=Math.ceil((infoPjs[eifp].ataque)+(cual[ifp].ataque)+(infoPjs[eifp].ataque)+(cual[ifp].ataque)*nivel/20);
    datosPj.defensa=Mary.ceil(((infoPjs[eifp].defensa)+(cual[ifp].defensa))+((infoPjs[eifp].defensa)+(cual[ifp].defensa))*nivel/20);
    datosPj.probCrit=((infoPjs[eifp].probCrit)+(cual[ifp].probCrit));
    datosPj.dmgCrit=((infoPjs[eifp].dmgCrit)+(cual[ifp].dmgCrit));
    datosPj.recuperacion=((infoPjs[eifp].recuperacion)+(cual[ifp].recuperacion));
    rangoA=50*cual[ifp].alcance;
         
    
    equipar();

    apareceEnemigo();

}


function damage(){

    var num=randomAr(100,0);
    if(num<=(datosPj.probCrit)){
    num=Math.ceil((datosPj.ataque)*((datosPj.dmgCrit)/100));
    }else{
        num=(datosPj.ataque);
    }
    console.log(num);
    return num;
    }

var menp=1;var conteo=1;

function ataque(){
    var opt=$("#opersonaje").css("top");//oponente top
    var opl=$("#opersonaje").css("left");//oponente left
    var pl=$("#personaje").css("left");//personaje left
    var po=$("#personaje").css("top");//personaje top

    opl =Number(opl.split('') // separa el string según espacios en blanco
            .slice(0, -2) // toma todos los elementos menos el último
            .join('')); // vuelve a armar el string

    pl =Number(pl.split('').slice(0, -2).join(''));

    po =Number(po.split('').slice(0, -2).join(''));
    opt =Number(opt.split('').slice(0, -2).join(''));

    var peguele=false;
    //posicion pl+rangoA>=opl&&!(pl<opl-rangoA) pl-rangoA==opl||pl+rangoA==opl||pl==opl

    

    if((((pl>opl-rangoA-50)&&pl<50+opl+rangoA)&&oponente.vida>0)&&po==opt){
        peguele=true;
    }
    if(peguele){
        var tuc=((damage())-oponente.defensa);
moverOP("opersonaje",13,6,2,0);
        if(tuc<0){tuc=0};
        if(menp==1){
        $("#pdmgo").css('top',"40px");
        $("#pdmgo").css('color',"whitesmoke");        
        $("#pdmgo").text(tuc);        
        }else{
        $("#pdmgo2").css('top',"40px");
        $("#pdmgo2").css('color',"whitesmoke");        
        $("#pdmgo2").text(tuc);
	
        }        
        oponente.vida-=tuc;
datosPj.vida-=pegensen();
        if(oponente.vida<=0){
            oponente.vida=0;oponente.recuperacion=0;
            $("#iopersonaje").css("opacity","0.0");
            $("#barraenemigo").css('background-color',"#3f3e3e00");
            conteo++;nivelexp(conteo*200);unavez=true;
            $("#ab").css("background-color","#3f3e3e");
        }
        setTimeout(borre,100);
       
    }

}
var exp=0;

function nivelexp(n){
    exp+=n;
    if(exp>1000*nivel){
        nivel++;
    }
}
function borre(){
    if(menp==1){
    $("#pdmgo").css('top',"60px");
    $("#pdmgo").css('color',"#3f3e3e00");}else{
    $("#pdmgo2").css('top',"60px");
    $("#pdmgo2").css('color',"#3f3e3e00");}
    if(menp<2){menp++;}else{menp=1;}
    
}

function equipar(){

    espada.nombre=cual[ifp].nombre;
    espada.ataque=cual[ifp].ataque;
    espada.defensa=cual[ifp].defensa;
    espada.probCrit=cual[ifp].probCrit;
    espada.recuperacion=cual[ifp].recuperacion;
    espada.vida=cual[ifp].vida;
    espada.alcance=cual[ifp].alcance;
    espada.url=cual[ifp].url;
        
}
var unavez=false;
function apareceEnemigo(){

    $("#iopersonaje").css("opacity","1.0");
    $("#barraenemigo").css('background-color',"#3f3e3e");

    var x=0;   
    
    if(conteo==5||conteo==9){
        x=1;
    }
    if(conteo==6||conteo==10){
        x=2;
    }
    if(conteo==7||conteo==11){
        x=3;
    }
    if(conteo==8||conteo==20){
        x=4;
    }
        
    oponente.nombre=enemigos[x].nombre;
    oponente.vidamax=((enemigos[x].vidamax)*(conteo/2));
    oponente.vida=oponente.vidamax;
    oponente.ataque=((enemigos[x].ataque));
    oponente.defensa=((enemigos[x].defensa)*(conteo/2));
    oponente.probCrit=((enemigos[x].probCrit));
    oponente.dmgCrit=((enemigos[x].dmgCrit));
    oponente.recuperacion=((enemigos[x].recuperacion)*conteo);

    console.log(oponente);
    $("#iopersonaje").attr("src",enemigos[x].url);    

    $("#ab").attr("value","practica: "+conteo);
    $("#ab").css("background-color","whitesmoke");
    $("#opersonaje").css("left",(randomAr(13,6)*50)+"px");
    $("#opersonaje").css("top",(randomAr(2,0)*50)+"px");
    guardarDatos();
}

function moverOP(quien,a,b,c,d){

$("#" +quien).css("left",(randomAr(a,b)*50)+"px");
$("#" +quien).css("top",(randomAr(c,d)*50)+"px");
    
} 

//quiza guardar info del arma o el personaje o todos los stats
function cargarDatos(){
    if((localStorage.getItem("conteo"))!=null){conteo=Number(localStorage.getItem("conteo"));}    
    if((localStorage.getItem("oro"))!=null){oro=Number(localStorage.getItem("oro"));}    
    if((localStorage.getItem("nivel"))!=null){nivel=Number(localStorage.getItem("nivel"));}    
    if((localStorage.getItem("exp"))!=null){exp=Number(localStorage.getItem("exp"));}    
}
//cargar que arma y personaje se estaba usando habria que ver si borrar o ponerle un continue o new game
function guardarDatos(){
    localStorage.setItem("conteo",conteo);
    localStorage.setItem("oro",oro);
    localStorage.setItem("nivel",nivel);
    localStorage.setItem("exp",exp);

}
