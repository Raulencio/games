var nombre = "";
var nivelActual = 1;
var narmaequipada = 1;
var pequipado = 1;
var enemigoac = 2;
var nenemigo = 5;
var nPjs = 5;
var nArmas = 5;
var dinero = 0;
var preciocosas = 10000;
var personajeElegido = {
    nombre: "", vidamax: 0, vidaActual: 0, ataque: 0, defensa: 0, probCrit: 0, dmgCrit: 0, recuperacion: 0, vida: 0, alcance: 0, url: ""
}
var cual = [
    {
        comprado: true,
        nombre: "espada de fuego", ataque: 4200, defensa: 400, probCrit: 10, dmgCrit: 30, recuperacion: 50, vida: 5000, alcance: 2
        , url: "https://lh3.googleusercontent.com/9AbUcqcOyLnUcp76PoldOwKDzlpZQg9yUA7HUxBmB0stbQyV1CEYhwgiX6wQvBZ55BU1pVLzytt6Hj8dhqmJhXuzTn0jjObMh0ND68FruMZUJALsYWEcPDBk_w6d2AkDGtzLQ3BnqkjlBPHv5re0DBGeoP0-QBzvEjXWyODtUzoCV-_Bot-7KYwltFYGASNa7TgxRP9ixA5Z8xn7ZpPxp-XRPtOI1NH7nqKJVTd0usz0cz7sQehJTxiCcpeKYvWZUI0zy7LXzu3ErZbs1v7q2pGrsN8I2T6PMovhxxE1_LL9xCS4XhhoD7mTJOxOcIhyjKqX7UpMjZ_iGj4AZE1nDqiUqet5VID5y8tu4exYgJRahJD0qn3ClHyo85Qt-yKhuJYpqp3O0mzt6ctQsuEE3PT_cNQXmEclqY-kogtb0K7JguWyAkNptC6mvyAyQcREzKDOblfVCa4YEAoyLWf-aJUXcOE7_xyEwCB6S-N2L-6TODn2rELVmEy8aLWckKGrTSsl3qTrSgPzo8TF3d-vQ1UxUvotFPEDdjhn0-qxNV_s72gqcyNPCzBrrDPtJ70iOvfQREcy0zbPJ0hwC3Y0iefXjxfJlhWe5PVJzLmhHFl_PltAuHpRFRUF3KvZtBNyXPRblwnMsXCPTbaAzUmQSeATrC-6gSMCndq5iOCZgnr5dwA_kJHf04TQVJBxAzg=w450-h150-no?authuser=0"
    }
    , {
        comprado: false,
        nombre: "espada de hielo", ataque: 3000, defensa: 200, probCrit: 40, dmgCrit: 20, recuperacion: 50, vida: 2000, alcance: 4
        , url: "https://lh3.googleusercontent.com/qTCY8Ts0_fFUaKAqg1Oo06RTbTKzYlZ-_hcfPTzxD2xfsvYUeGZu_YKWcILimayHQAO8J8KZvAWTagCNQjgN8-hvAamRomecbQZF93zXVXYo_y7vx1bOIqrkYKJa9JhfPbxgUn83jKWeRtPgzGMkm4M1E2qkSZrdRbPxWbScj6LD4XN65mpY2xG1IZgz7NHyn_Dm-okw5h0nYKXVqCRcj1Thzg6jj_R04x2lur9WIAKHEim-z1ZizYODKQL5qwWbZRTisGw4FWe3ArbqV1lWkWkzLIFZ0DbvyraByL05BpYZ0KBSiyaHegTrDao0jxZBQ3F0BThbYEROM1lFqNkzPONvPh7ueNUPT-7JuZCk2qmKHwibYt_Aipa9Dwy-jLQrhrGFNF_GLmdVs65WbsDGOGdMNJ28Mvx2fyMhG_44pMI-R1nS9twy-CZUEgHHNlvaSsQU8McxmX3RuxTMgVEthq8lLIarp8BQJvwwUdgIsH2NOg7_qzwXXA1wdBD0eapyQ3LaLa-CZTq3Le8DXfLaH-ZX-2LjFIJh7bx5Zasro2xq3MPoqDDj65f6C2QtYusg5BKNIscWSQSIr-neqPqHVODwwEmEtNI120aVEh-9J71CB0Db3noYsfOqqZn1TPjqh28tfIAeLtsNzH-t9g5ufA2swXTokMQyvzMHn6_gb8LW92FjaMX4yZ79yI8MLic=w450-h150-no?authuser=0"
    }
    , {
        comprado: false,
        nombre: "espada del bosque", ataque: 2500, defensa: 1500, probCrit: 20, dmgCrit: 100, recuperacion: 200, vida: 3000, alcance: 1
        , url: "https://lh3.googleusercontent.com/A6zMcmD1AF3VW_pG9GVY3vm6Nuf2W9FZ3MPoRyXi875mgJLghHq-QLjnqm-UYmjkJQ0fsALVCOItgN_GLR2xLEwiYy8WL5LJmmQSgrsdJR02SGvQK_CoyRgX0aGjdJ8t18H5Yed-EGmQD3SowgZWJkWl7JSJdOH1K0Mq6V-RM589IlYT5BlZDdhPvzcPRrRQXapOG-QOj93gpJ9IZi0nLmSbQNLL2_XneuEw3_XSivJj1_cBnpupVWcx-qDgCzJQNkxoMU57p1uV4dZV65rasaySrS6rpE0vkGXS-ZG8gU41IKHuLEo9UiqhDTTxvZSi0pqDUmMIFMFkjfZYdUT0kLhveZ4xgNuwfFsj35-RSF1C4VTBlDGGQzP_7SxTlrwz_pe04i7BewXf9Ecz1eqhqnNjKCjY8YhrI6HkFoogqHVPSURohfHEvy4Y1HWqCDTHQXPgB1qEugvMdeTMaSseq3kE0m7qIMLVaMT2UO7QbjEMRO3P5o2ku-cHs6Ps8ZY_cfuV0vw9TQeV9F6Ad9ieXlw-noeW9Gbug1dY0uMyzRJjQdwCaJ68coDneUJi082xljoDr_saPzpzKy3wancbk1rSXgWOf9iS45skqYdvp5HOhVrqudnAPvozJhyQKpY2FJRLZpomGEZ12_tusGOz-lPX3Hb4csR8d9Tq2Ytf4or5sX98yXK0KcYbB6oy4T0=w450-h150-no?authuser=0"
    }
    , {
        comprado: false,
        nombre: "katana filosa", ataque: 3500, defensa: 0, probCrit: 50, dmgCrit: 150, recuperacion: 100, vida: 1500, alcance: 1
        , url: "https://lh3.googleusercontent.com/UC3xiyNXJ4-jhQJCIJtuL_h9rtdr1pk-F0yDvvQIAhB9VffPsNbw5h4U9IMr-URpjaq3gKlr4MkApbGODS_cY31V7k6R2M5ytifGjr6ca3Mja8rihoNfvdsR8z_kyeFAAvkFbqCoujPLlEAOtHPmXpHheYSYn79JKYNhdT0yv7mFgt118e-O0-bqO5NYXUPz-W2VOT_X-fNzTLk-zAtI-laJklmGEqwP9xiOd-6cVkSR1Ljckjo8KT9CsR4dMF4Tz4hsmBUak6y9WbmgggSZzdvYcr22aP0pvSYijxzQ3Fw3A7e8yRImDeRaTnEaRyHteL9x29_1xjwfDRACse6yKNZuRfDzu_8j6m0BW6dnV8GtOjMlP5piq82JYEguiSYkOveW63bNfyBjobBixDgtbui-IEacWlxkMndcnqJ0Ql-XKMMb7hCJRgYZSJ04qo5tuMWFfSEIYYDsYBd08onmlRAbGQlFunKIyvRIOcmK9IqKT6vqDK5BT0auvNGaou7E4fjLe2E9RUEgVK53mYS7J5ws3GY_EHkdawSorGYANr0GiuVMDSChlcNPlWcBs5MY6Gx5W4BJySdIffySCPY4H1h-GMVk0DG14n4oplMP2ue9oPw83nmTLNLDc4vuWg9eDyRTaJ6P_MJHgPrO1pKhEEuUCSf_ngKDGRPFvOEjduyHWOMeUlhVW3-po8NgcZo=w450-h150-no?authuser=0"
    }
]

var infoPjs = [
    {
        comprado: true,
        nombre: "Yohiro", vidamax: 3000
        , ataque: 1200, defensa: 700, probCrit: 30
        , dmgCrit: 170, recuperacion: 50
        , url: "https://lh3.googleusercontent.com/2NIx7PqqMuUIF80LIXCuENNvXrR9T5h_fseWxTki35S4MHFbL2bESwBdKcCl6qkEJHw4Q-gibyGhBAbbu99ytUwb8ky_-RON4qV1FREet_Ca_8dzS10utCtQ3_AwSVWZ7B0E0o7xlNhOAwvC7yqc6YU4hXPQh79_djSLo23ELyXW6BUrviYI5_boayEiy9GbvLX8nbh9BwECpSGiKoPYUQTg2-YkNIBxujcICf0RlxIkrJqhgOt3VQp7sOuwVfktD4VxnZ-rLIVzJo9X-HOB4z3jHxU5n1AM5r5_0LYLSQEA1ftGRjdtDM3hTpXtP4q1ZgznC_4Ko9b6gbnm_owggiFCELwT6c1IEFoHVWE5Q2RgC45THP0dJWWqYBsI24j9uK4SUxtmY_Bf3asl654zI1CElMcEydxdOPwz3gjFOTnISXZvn6xcG3r9RiAwg2cuJAV2iC3LxoQ2aE0d4TeJpaodAqNnvspYFyYgwjV5lNbJKqyNR1BI2xtldrgdexa1dXBJzZCtMZcLydgnsreqRFqVxXRa_GPY-zx5KdEMHB5rlfIpbNdzejnjGoUxk9KFJpNiaRwu8x7tCBi_AG7aFuQjOezxlOtKhscbSiXdFu_c1u0wAgQtY77e9WVPrH6sYrnMX6FI2rbbOGEH8vydEwWGjYNBwRj_KyxEyypmmPIktrnI9beMLEef6ACBPqU=w50-h100-no?authuser=0"
    }
    ,
    {
        comprado: false,
        nombre: "Rain", vidamax: 1700
        , ataque: 1800, defensa: 1000, probCrit: 40
        , dmgCrit: 120, recuperacion: 200
        , url: "https://lh3.googleusercontent.com/rByffD1Yc82VjltG_o49spYycjq4v95PWUlhJ_558DSxd259v3kqLVOZOg95jqNUXx-SLC_Ig2WyhPn26JbaX6-4bVaDk9sc0BzMrsV__JQmU9MbvMUKGO_BuMsQ7TyDvj05QqljrOsLakph3FePUVXaBqDNC61zK0Me4dzs9J-tnuc6IFmtBAt5wqGEWURvdQne52SNVYiDRbWBA_zjOhI7YCBA9AfUVirlDR8MJa7txrkz0GLtlvsqbNL0iH8A9A1Q8tVp4J7LPIKIacotz-3_Vru4aaUZiVW2cGyGiiyPaTBLslzdCrvydYPRk060yWcpFFK3Lwg7kGZLxo6mwz9Vf6w7m2shggl8VDZb6ehMAeR-u_r1U3mnCgtvNL8U5FtYiOJkEp-Vj7Pa9trK90otMsE5iV4ZvOu-G-TjADDoAHHAruyQIfDn7Kh0_QkkdQ3dysPl0cfngFeNVV8oUdTpNJqvDw_mUHC06AqhGrXcXltcZLDzFXUDQy3ZcJiPci5eI2h4Fxg49xCWQUMCyFdxMBPZTHW9DyCcQvRSRszUu-SJKkbw1n5P3ajlKkbNRTJpUnOLOarh1iyPy3qppbwtg6Je5aNMspBLKEdG6fLMgzcbRY0ugrLgEqVcHuUO1KF-Qb7AK-2PRzZHfWroifgsFZpl-Jb9S6AThxwdx4x09iWt8ZH0iZFIERWCH44=w50-h100-no?authuser=0"
    }
    , {
        comprado: false,
        nombre: "Ninja", vidamax: 2500
        , ataque: 1500, defensa: 500, probCrit: 20
        , dmgCrit: 200, recuperacion: 300
        , url: "https://lh3.googleusercontent.com/mNrOQ3HaYykgJsLSzyAvJ1vQZtLmcdyVr1z1ZW4iP_a9l5bso6jojZZXNOlzj-_1uuvUqJysUJmsI9v7NPFOSK_8uHpDp-8NW1wrvEaisPqqg4LGpH2vIgNnSW3YIvB-_iuzIdxtSNb3ahMHTeMzv5D5N0PhbnvEI6ZoNBBPWaJeXqin8v02k3NHb8k23WGLNxJ0KC5ScBLoUjvDEYwPR13idgmX9r8H96qQNor1HGjoSAnM3j6GbKEMwDuwg1j-oMEmtqOSjenjQUaLk0Wl6jdt-SnqDcVgmWz2wNUqepwFm6VFo0aUEYUhXTMC99Z0cnZxbEfr3ftV2CJ7G8fjlFEPs8rHsS4WmO8g9DVlqOqILJwatFtPRTnE64K7D5Me5MT6Mhp37o8i1mh7sLwya3QI4Q_LPFxQ0JxqwhUPbHf5_DS866N1h2q-rQ7HPa7COglXDNanYJSuD8Okrqko13n_-FqaK1r_egxYzYqx5uvZP6aOyu-KB3FaPNBlACwkITnq0Gw8LjZl3PPTJsF3mvuspEO3nCNEF_H8gQPBYShdu8Knn08ope9r4dx3HLYsX7FOJgdwIpV1JJLQUUUKG-KEuL9uyp7R6BZlHJjbCl4l3BeuxGvpccPTfECVpkCbTfc3gmSViWzQPoie9EhU41dGIL1v_4n9QdzjRE5dN9it-qn4_szslEk5kjTL-F0=w50-h100-no?authuser=0"
    }
    , {
        comprado: false,
        nombre: "Sol", vidamax: 1500
        , ataque: 1700, defensa: 400, probCrit: 10
        , dmgCrit: 250, recuperacion: 100
        , url: "https://lh3.googleusercontent.com/QP0h71gLUmxyWVn708VUS2hemkcgVhSYo_pCFkZ97tZtWjmtr8v-WjKVGfF0hF83jSwswxwzMH--4nfYnpLE1gW_fEF3C4FcgIhChBFVR4Flosz-OaFftt3NVqUNZ2nvfGxNdiYdd24waysQhyF1atIw0z2cJ0nnsLEAf2tSmUfzCaaPlooLgHP_d2Vg0l00j1g8Wgc5W6QuKODbMMpejMzaKWOq7qbts53rdvG5PAAkNS0O7bVFGolR87hsoskCKnsfA3pHc0gPpdJFUyLffobtcWY6RVAduTn22xAJodkejGkxr2pIjWEJxuxRe1ssiWN-yXz78gmX3lvqSCTKV8ckUAOFPke__vUuBDLR50Rf04XJWUzGz661nW3epvMNBjzIUGvTPTMz7ttaVbze8MuDEkN2amn_lREp62Hvsm8q_ZdfD5IpMGdIofhx4JWH9mA5xC6OlggyPwz6uuBjxnLoCssiukNOoLVzBeGL7OsLFbnA17dsgx6RjgDoWCEiH6RTueWsiMwv13dMHHeIvG78yPPEBmEUVbNuFpRejKgJVvYPQh027iLqQiNdujQrL0XWxgfQFqa5tWK3cq4AtE2z5xI-YG3phpDoDIXfTOi0bNchFR3DrsxI5cCUYD-2jkapCBxCICUm4KePD5ntAKaiZMVK-F8T7O9pHWf7Qb2KTLr-cOjIx7x2eMsYcxs=w50-h100-no?authuser=0"
    }
];

var enemigos = [

    {
        nombre: "Practica", vidamax: 10000, vida: 10000
        , ataque: 0, defensa: 100, probCrit: 0
        , dmgCrit: 0, recuperacion: 5
        , url: "https://lh3.googleusercontent.com/d0u0cea5eiyOP9rLxeD2fC0qE7XhhqRozc5Gl18lAOs8y5nHBv0fH47bQwst6nsrGiCIHuaWaApSaRlRzaIc4eSFLoL1i32Qs3AOJe2Ai3Ic4lM0658WUWkiR3RtKY-WXkORsoCiF_yRkJsx_ZFUeNeN0_6CQKis6esawNRyKIzobezrvY1b507HSoCwatfaC8O0N-hvGH_2ZN3FBdnGOBx5sCXi_9eVClgYOVBTv77Eu6cIrxHZpUtmzOMK8vMrWy4BL07Ff86HBlLxHwxBkvHLRF4Gdc9e3FS1OOeAvHzNcCL-80SIlgophd2JcvC-WBVf5hYnOgsSZ60ZYht-zF053BNoHg6n7-T6DWUTDOBwjjk1crM_3yI3RgmAntNQQgpj_j6r0HfbSp_5t62lGC6atX-0GFzjmygqtWPRfFSBnkX9t9pNu-XhyiiVpUJibvv1PFpUddILwqkavGAsrW8e4KGFPQ96qdCl5t0_EjhA-zvv-LO_rvcJHuFIgh_CXpM7hJI7pem3IlkbsMHJ9Ytt6E7Y0gpw2b1JqHbuq81RlTig1CTV9lJ-RI22Zpry5o4wgttCpzMFsPmL7FRbJaGIROL_VjH_qKoDjy7pZ5yEthjohhoher_RruWvS4UnPtStT-UgfhXctc2ykUR0gtdwn2v17sPEH56XqNV4Y1ui75n23vZe4cxgWQpmzTQ=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre: "Fuego", vidamax: 30000, vida: 30000
        , ataque: 2000, defensa: 500, probCrit: 50
        , dmgCrit: 200, recuperacion: 10
        , url: "https://lh3.googleusercontent.com/XNbptuKM4jkVz-DBvilq8pcr7pQemOLtbcAaPY_zrLREgasHW623vEJkrExCXhnEsg8jVLIgw-BaWFNOKd_lgL8G3VS4YwxHsXVP9AnPsrXvc0IGfkYpKjHQPdE7s2oSSP_MV9F4mRmqmzEmIs2vR8PMf4dtKh8NdHry97bjTvFGyf8br0r30qOfHXqLuAaZ7mTy0ktahJsDeN5TBr59gK5sNKuj4JTFs5hOZapmqYNgYl2TRpITaVUJXK7p6-sloCWnuVKNecp-_t97cY7i1Dg2Fw_7deLvlXUEDAP3KrQBfZ3B5CBaGUPD3_KN7sl1rSrTgb25fSKDft7gDmTHGaxL0u41zho0W0xluYhGJ8wUvjMdzHsyB4qNC7OYbH3yhYG9h2kVURZPUnICMarHgIYgjTNiyEre4P1O3Wy8352kM-jOTl04DuQ4Wy08supZzwtg_LIrSQi0xPF6Wn7cTJxrLwQeU3Cu7cNQjLEf_Mte9UaoR6CzxbTzNxFqrdaGRiJ9uTCNDtK0yOzDGTInf2hTaRoPQxLxknFDlAwT9e7u2vB0XbmUMME-U88zUhKnznbf0cCOATbatqmjycwo0ni_CJEHJVvgtYl1z1p14b3vKYlWfGF20aFpmaLyDB8CJACD9P_caTuZClX1yh_e9hemszhdYh6ONm9KQsCYCrDu39iOyGc5gVjs8BFyQ5E=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre: "Pantano", vidamax: 50000, vida: 50000
        , ataque: 4000, defensa: 700, probCrit: 40
        , dmgCrit: 300, recuperacion: 40
        , url: "https://lh3.googleusercontent.com/PIMG-MQmi6pc8_dYScQktaqlzgjoCJi-SGmMG_Rrzug83We_vuGIzCR0a8o8EptDaQk-qqqQc6IwEtXeJLmInA3NDrTqnL3Kg0ptHjBsky9OxFH0PHfTrMCcjsOJS6YrGSCK7Eih6fChLlze7wHoDb3mzLd6MkXMzr2AjM-vmLCJzMNvgW9gOH7Sb0bLXzpL8sU9K25MmbcqBAgCP7QNL3ML9U023KHD7mdT1Yu29DNFjVVfAw89aCvICj8MucruA-0TyUZnEozRigNDXCtPKGu2B0JScUdQ1eS5tdwIBfTkOfeQ1FXvkTUcshSbcd2yv8obDpWPYOK5VJlsNKXx4E5Zv1CNDsOBUPypjIqGSvCquL_-eEe9ngSZHmGYjauQkaKwYTrnI8_uTQoumO39sw-3afsry24kfDH4VUu_l_UfoluYAvPRk__1SottoD5jmoaN8k2uoUu3RIGWIg28Q87FH_Kp9lQSDKW1oScWFBOa6Ud1MzqO78sjFQmcdApL1Fco5QxyRcTfH4GkdWNSPZIwxMV6DsH8iM2w5cub3a5x3nujXK6GE4CIyEHAKDBQws0cbymRYyEOOXPz9xmx2MTMNKTtvkTbturU75MTFz8goS2Gny7Ps4XApYozmHE8RBBtGxXK_BN50s_lmFFuy4RVueAfaKe0xB6WBksJjsRYqJSGkMrrQl9Y8ypBqpY=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre: "Agua", vidamax: 110000, vida: 110000
        , ataque: 7000, defensa: 400, probCrit: 10
        , dmgCrit: 700, recuperacion: 100
        , url: "https://lh3.googleusercontent.com/t45mlh1VIq3qWTKBkIIXtiLjklsh4Ovigw_VLAsCtNAavX-KHNsjVb3VTu3kJhSypvYpidzdB8-piDS7U1EJQHRMaw0IZsvqzmvcLMbX-ZqeYb0oD_lrrpuH9ygDwX7NU4WkqT59i8NAzNHN3-06KjJ0d_Ilk6GBPAFrU3TtFHwgHpFCKslLyIbBruU2is7e5-Goi4q19EQDMkc8J1KvhRmDWEBn1w8fqWq2Es4ihUjZdMfkKlEG_0reuDOI9POQm2iRYewVghhple8bM-H8fsPfMMPWRIuxzjftQ-uz9kPazuWao86HQW-XMCiQuMcZYJ3rQQ6nzF169SjgpGlkJVMzkhKR4FUg90DGa7RKhMYWzhL_itkjIBuGJkI3Tfv9gXaZ5Fv25J10-GMlFGx4cYcNUW3S_laqFHxEkT8IYmR7aDJnLxI7rKkMzjXRwouikfjMxk0aoFYKzUSfBiHY4CVQXNQg1Y_yafRT4o4ApFaJsXxElK9vjmB5hKZmMNsfRDoG2-dNE-N1LR-0TAYWT4YHsDjwwxJ8xZv3OZR8NfR7Yz5oWNp9f5gLzrbCcNvFMeDOAafOPyiqPZvVfNbdTLdT7j1dZp8eH9oViCAYXUBwLq1ezLxCr2l6i7bVTxL500CzGQLHP8DYS8qbUOQnhBLut3OpSV7wCqachGkvHKCjBigLlXq1PTxPOOXmQ7k=w50-h100-no?authuser=0"
    }
    ,
    {
        nombre: "Trueno", vidamax: 200000, vida: 200000
        , ataque: 12000, defensa: 1000, probCrit: 80
        , dmgCrit: 500, recuperacion: 50
        , url: "https://lh3.googleusercontent.com/gNX3yo-3ANKvhcFomG4ZqxKbmUp-Ls0Z7lOFAhEYqyKRGzbc3gWzcbJ9z1_2g1NUBtHkQ45AYSc3wRQRFlBV1y6E2AT3kqFanacYLCUkISd1QTfMl0BQ2AeGK1yixmVxRvcLGe9iuErlZG8VxUJ3IINNbpdor9UsSY_WyKof49DgpPKVx-YQdJQkG6fwnzxQDHC7qzINewlmqR8S9jbC2-X4_-iUTvHUu10Z_9cm99RHZpFr3zA9fA-kwHiO73mNTWnYD51FtHrptsJvGVar1PDPfq6iE8lWyRJpUG3pv2dYv-Qnwhayjq1wbfrFE6l-inB0dQyYfzfo-l1KAZwwcnLlZP_TI_pvA0RYyc2zF9nqbLyzX4KJC7uUdc9dsYsrGTdnUVMBZw_asVgz3WsygHeo1fvShNRVNQy9uQkWq-pGWnUmsoxGGuB_KMDi46rEcFqxlKb4rFnLVfL9I_o7K69WYwTaREwYG66NobgNm7pL9yOEh__iwpFW5yRDFdmJq06PuLrs00NStJCVlMpUxhDLk8WwZLOU4DlRdwS0SPx0Ojy1nKetTBfS8A8PyOI4WDQJNvU8UskiOknKvvrMMp-E31IBuDBEpaxiC3doeuZ0Ruqc-y5Efrwv19er-c6zQDS5DS6DWZyW6COGvRIjyRFuzok6q9qfbO0Kchh0-SiN8HnI9PgdokJCJcS3VEY=w50-h100-no?authuser=0"
    }
]

var venemigo1 = false;
var venemigo2 = false;
var venemigo3 = false;
var venemigo4 = false;
var venemigo5 = false;
var venemigo6 = false;
var venemigo7 = false;
var venemigo8 = false;
var venemigo9 = false;
var venemigo10 = false;
var venemigo11 = false;
var venemigo12 = false;
var venemigo13 = false;
var venemigo14 = false;
var venemigo15 = false;
var venemigo16 = false;

var pequipados = 0;

function actualizarTienda() {

    for (var e = 1; e < 7; e++) {

        document.getElementById("valorcosas" + e).textContent = "$" + preciocosas;

    }
    document.getElementById("tiendaH").textContent = ("Tienda $" + dinero);
    localStorage.setItem("dinero", dinero);

    for (var e = 1; e < 4; e++) {
        if (infoPjs[e].comprado) {
            document.getElementById("botonCompra" + e).hidden = true;
        }
    } for (var e = 1; e < 4; e++) {
        if (cual[e].comprado) {
            document.getElementById("botonCompraA" + e).hidden = true;
        }
    }

}


function actualizarVisualizacion() {
    // Actualizar la visualización de personajes comprados
    for (var e = 1; e < nPjs; e++) {
        var elementoPersonaje = document.getElementById("personaje" + (e));
        if (infoPjs[e - 1].comprado) {
            elementoPersonaje.style.backgroundColor = '#ffffff';
        } else {
            elementoPersonaje.style.backgroundColor = '#000000';
        }
    }

    // Actualizar la visualización de armas compradas
    for (var e = 1; e < nArmas; e++) {
        var elementoArma = document.getElementById("arma" + (e));
        if (cual[e - 1].comprado) {
            elementoArma.style.backgroundColor = '#ffffff';
        } else {
            elementoArma.style.backgroundColor = '#000000';
        }
    }
}

// Función para comprar personajes o armas
function comprar(o, n) {
    if (o === 1) { // Comprar personaje
        if (infoPjs[n - 1].comprado) {

        } else {
            if (dinero >= preciocosas) {
                dinero -= preciocosas;
                infoPjs[n - 1].comprado = true;
                localStorage.setItem("compradoP" + n, true);
                alert("Has comprado " + infoPjs[n - 1].nombre);
            } else {
                alert("No tienes suficiente dinero.");
            }
        }
    } else if (o === 2) { // Comprar arma
        if (cual[n - 1].comprado) {

        } else {
            if (dinero >= preciocosas) {
                dinero -= preciocosas;
                cual[n - 1].comprado = true;
                localStorage.setItem("comprado" + n, true);
                alert("Has comprado " + cual[n - 1].nombre);
            } else {
                alert("No tienes suficiente dinero.");
            }
        }
    }

    // Actualizar la visualización después de la compra
    actualizarVisualizacion();
    actualizarTienda();
}


function cosastienda() {
    for (var e = 1; e < nArmas; e++) {
        var comprada = localStorage.getItem("comprado" + (e));
        if (comprada !== null) {
            cual[e - 1].comprado = (comprada === 'true'); // Convertir string a booleano
        } else {
            localStorage.setItem("comprado" + (e), cual[e - 1].comprado);
        }
    }

    for (var e = 1; e < nPjs; e++) {
        var comprada = localStorage.getItem("compradoP" + (e));
        if (comprada !== null) {
            infoPjs[e - 1].comprado = (comprada === 'true'); // Convertir string a booleano
        } else {
            localStorage.setItem("compradoP" + (e), infoPjs[e - 1].comprado);
        }
    }
}


window.onload = function () {

    cosastienda();

    if (localStorage.getItem("nivelActual") != null) {
        nivelActual = parseInt(localStorage.getItem("nivelActual"));
    } else {
        localStorage.setItem("nivelActual", nivelActual);
    }

    if (localStorage.getItem("dinero") != null) {
        dinero = parseInt(localStorage.getItem("dinero"));
    } else {
        localStorage.setItem("dinero", dinero);
    }
    actualizarTienda();

    botones(1); botones(8);
    for (var e = 1; e < nArmas; e++) {
        var comprado = localStorage.getItem("compradoArma" + e);
        if (comprado !== null && JSON.parse(comprado) === true) {
            cual[e - 1].comprado = JSON.parse(comprado);
            comprar(2, e);
        }
    }

    for (var e = 1; e < nArmas; e++) {
        var comprado = localStorage.getItem("compradoPj" + e);
        if (comprado !== null && JSON.parse(comprado) === true) {
            infoPjs[e - 1].comprado = JSON.parse(comprado);
            comprar(1, e);
        }
    }

    nombre = localStorage.getItem("nombre");
    if (localStorage.getItem("nombre") == null) {
        nombre = prompt("Por favor, ingrese un nombre:")
        localStorage.setItem("nombre", nombre);
    }
    if (localStorage.getItem("armaequipada") != null) {
        narmaequipada = localStorage.getItem("armaequipada");
    }
    if (localStorage.getItem("pequipado") != null) {
        pequipado = localStorage.getItem("pequipado");
    }
    document.getElementById("pnombre").textContent = nombre + " nivel: " + nivelActual;

    for (var e = 1; e < nArmas; e++) {

        $("#arma" + e).append("<p>'" + cual[e - 1].nombre + "'</p>");
        $("#arma" + e).append("<img width='100%' src='" + cual[e - 1].url + "'>");


        document.getElementById("arma" + e).style.backgroundColor = "#ffffff";

    }
    for (var e = 1; e < nPjs; e++) {

        $("#personaje" + e).append("<img width='100%' src='" + infoPjs[e - 1].url + "'>");


        document.getElementById("personaje" + e).style.backgroundColor = "#ffffff";
    }

    for (var e = 1; e < nArmas - 1; e++) {

        $("#pjArma" + e).append("<img width='100%' src='" + cual[e].url + "'>");

    }

    for (var e = 1; e < nPjs - 1; e++) {

        $("#pjTienda" + e).append("<img width='100%' src='" + infoPjs[e].url + "'>");
        
    }
    for (var e = 1; e < 4; e++) {
        if (infoPjs[e].comprado) {
            document.getElementById("botonCompra" + e).hidden = true;
        }
    } for (var e = 1; e < 4; e++) {
        if (cual[e].comprado) {
            document.getElementById("botonCompraA" + e).hidden = true;
        }
    }


    for (var e = 1; e < nArmas; e++) {

        document.getElementById("texto1arma" + e).textContent = ("Ataque: " + cual[e - 1].ataque + "");
        document.getElementById("texto2arma" + e).textContent = ("Defensa: " + cual[e - 1].defensa + "");
        document.getElementById("texto3arma" + e).textContent = ("Vida: " + cual[e - 1].vida + "");

    }
    for (var e = 1; e < nPjs; e++) {
        document.getElementById("texto1personaje" + e).textContent = ("Ataque: " + infoPjs[e - 1].ataque + "");
        document.getElementById("texto2personaje" + e).textContent = ("Defensa: " + infoPjs[e - 1].defensa + "");
        document.getElementById("texto3personaje" + e).textContent = ("Vida :  " + infoPjs[e - 1].vidamax + "");


    }

    elegir(pequipado);

    equipar(narmaequipada);

    infoMapa();
}
function infoMapa() {

    if (nivelActual >= 1) { venemigo1 = true; }
    if (nivelActual >= 2) { venemigo2 = true; document.getElementById("mapa2").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 3) { venemigo3 = true; document.getElementById("mapa3").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 4) { venemigo4 = true; document.getElementById("mapa4").style.backgroundColor = "#ffffff"; }

    if (nivelActual >= 5) { venemigo5 = true; document.getElementById("mapa5").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 6) { venemigo6 = true; document.getElementById("mapa6").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 7) { venemigo7 = true; document.getElementById("mapa7").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 8) { venemigo8 = true; document.getElementById("mapa8").style.backgroundColor = "#ffffff"; }

    if (nivelActual >= 9) { venemigo9 = true; document.getElementById("mapa9").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 10) { venemigo10 = true; document.getElementById("mapa10").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 11) { venemigo11 = true; document.getElementById("mapa11").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 12) { venemigo12 = true; document.getElementById("mapa12").style.backgroundColor = "#ffffff"; }

    if (nivelActual >= 13) { venemigo13 = true; document.getElementById("mapa13").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 14) { venemigo14 = true; document.getElementById("mapa14").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 15) { venemigo15 = true; document.getElementById("mapa15").style.backgroundColor = "#ffffff"; }
    if (nivelActual >= 16) { venemigo16 = true; document.getElementById("mapa216").style.backgroundColor = "#ffffff"; }

}
function botones(n) {

    if (n == 1) {
        mostrar('inicio'); esconder('tienda'); esconder('inventario'); esconder('algo');
        document.getElementById("botoninicio").style.backgroundColor = colorRan();

        document.getElementById("botontienda").style.backgroundColor = "#ffffff";
        document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
        document.getElementById("botonalgo").style.backgroundColor = "#ffffff";
    } else if (n == 2) {
        mostrar('tienda'); esconder('inicio'); esconder('inventario'); esconder('algo');

        document.getElementById("botontienda").style.backgroundColor = colorRan();
        document.getElementById("botoninicio").style.backgroundColor = "#ffffff";
        document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
        document.getElementById("botonalgo").style.backgroundColor = "#ffffff";

    } else if (n == 3) {
        mostrar('inventario'); esconder('inicio'); esconder('tienda'); esconder('algo');

        document.getElementById("botoninventario").style.backgroundColor = colorRan();
        document.getElementById("botontienda").style.backgroundColor = "#ffffff";
        document.getElementById("botoninicio").style.backgroundColor = "#ffffff";
        document.getElementById("botonalgo").style.backgroundColor = "#ffffff";

    } else if (n == 4) {
        mostrar('algo'); esconder('inicio'); esconder('tienda'); esconder('inventario');

        document.getElementById("botonalgo").style.backgroundColor = colorRan();
        document.getElementById("botontienda").style.backgroundColor = "#ffffff";
        document.getElementById("botoninventario").style.backgroundColor = "#ffffff";
        document.getElementById("botoninicio").style.backgroundColor = "#ffffff";

    } else if (n == 5) {
        esconder('inicio'); mostrar('juego'); esconder('botoninicio'); esconder('botoninventario'); esconder('botontienda'); esconder('botonalgo');
    } else if (n == 6) { esconder("batalla"); mostrar('inicio'); esconder('juego'); mostrar('botoninicio'); mostrar('botoninventario'); mostrar('botontienda'); mostrar('botonalgo'); }
    else if (n == 7) { mostrar('armas'); esconder('personajes'); }
    else if (n == 8) { mostrar('personajes'); esconder('armas'); }
    else if (n == 9) {
        mostrar('juego'), esconder('batalla'); for (var e = 1; e < nenemigo; e++) {
            enemigos[e - 1].vida = enemigos[e - 1].vidamax;
        }
    }

}
function equipar(n) {
    narmaequipada = n;

    if (cual[n - 1].comprado == true) {

        localStorage.setItem("armaequipada", narmaequipada);

        $("#armaequipada").empty().append("<img width='100%' src='" + cual[narmaequipada - 1].url + "'>");
        $("#armaequipada").append('<p>' + cual[narmaequipada - 1].nombre + " Ataque: " + cual[narmaequipada - 1].ataque + " Defensa: " + cual[narmaequipada - 1].defensa + " Prob Crti: " + cual[narmaequipada - 1].probCrit + "</p>");
        $("#contenedorArma").empty().append("<img width='100%' src='" + cual[narmaequipada - 1].url + "'>");

        for (var e = 1; e < nArmas; e++) {
            if (cual[e - 1].comprado == true) {
                document.getElementById("arma" + e).style.backgroundColor = '#ffffff';
            } else {
                document.getElementById("arma" + e).style.backgroundColor = '#000000';

            }
        }

        document.getElementById("arma" + narmaequipada).style.backgroundColor = '#ffff00';

    }
    estadisticas();

}
function elegir(n) {
    pequipados = localStorage.getItem("pequipado");
    pequipado = n;

    if (infoPjs[n - 1].comprado == true) {

        localStorage.setItem("pequipado", pequipado);
        $("#personajeElegido").empty().append("<img width='100%' src='" + infoPjs[pequipado - 1].url + "'>");
        $("#contenedorPj").empty().append("<img width='100%' src='" + infoPjs[pequipado - 1].url + "'>");


        for (var e = 1; e < nArmas; e++) {
            document.getElementById("personaje" + e).style.backgroundColor = '#ffffff';

            if (infoPjs[e - 1].comprado == true) {
                document.getElementById("personaje" + e).style.backgroundColor = '#ffffff';
            } else {
                document.getElementById("personaje" + e).style.backgroundColor = '#000000';

            }

        }
        document.getElementById("personaje" + pequipado).style.backgroundColor = '#ffff00';

    }
    estadisticas();
}

function barraDeVida(vidaMax, vidaActual, barraId) {
    var barraDeVida = document.getElementById(barraId);
    var porcentajeVida = (vidaActual / vidaMax) * 100;
    barraDeVida.style.width = porcentajeVida + '%';
    barraDeVida.innerText = vidaActual + ' / ' + vidaMax;
}


function enemigo(n) {
    var confirmacion = false;
    switch (n) {
        case 1: if (venemigo1) {
            confirmacion = true; enemigoac = n;
        } case 2: if (venemigo2) {
            confirmacion = true; enemigoac = n;
        } case 3: if (venemigo3) {
            confirmacion = true; enemigoac = n;
        } case 4: if (venemigo4) {
            confirmacion = true; enemigoac = n;
        } case 5: if (venemigo5) {
            confirmacion = true; enemigoac = n;
        } case 6: if (venemigo6) {
            confirmacion = true; enemigoac = n;
        } case 7: if (venemigo7) {
            confirmacion = true; enemigoac = n;
        } case 8: if (venemigo8) {
            confirmacion = true; enemigoac = n;
        } case 9: if (venemigo9) {
            confirmacion = true; enemigoac = n;
        } case 10: if (venemigo10) {
            confirmacion = true; enemigoac = n;
        } case 11: if (venemigo11) {
            confirmacion = true; enemigoac = n;
        } case 12: if (venemigo12) {
            confirmacion = true; enemigoac = n;
        } case 13: if (venemigo13) {
            confirmacion = true; enemigoac = n;
        } case 14: if (venemigo14) {
            confirmacion = true; enemigoac = n;
        } case 15: if (venemigo15) {
            confirmacion = true; enemigoac = n;
        } case 16: if (venemigo16) {
            confirmacion = true; enemigoac = n;
        }
    }

    if (confirmacion) {
        cosa(n);
    }
    eimagen();
    reiniciarConsumirEnergia(width); consumirEnergiaB(widthB);
    iniciarRelleno(); iniciarRellenoB();
}
function cosa(n) {
    enemigoac = n;
    var estats = enemigos[n - 1];

    document.getElementById("pnombreE").textContent = estats.nombre;
    document.getElementById("pvidaE").textContent = estats.vidamax;
    document.getElementById("pataqueE").textContent = estats.ataque;
    document.getElementById("pdefensaE").textContent = estats.defensa;
    barraDeVida(estats.vidamax, estats.vida, "barraVidaE");
    mostrar("batalla"); personajeBatalla();
}

function personajeBatalla() {

    document.getElementById("pnombreP").textContent = personajeElegido.nombre;
    document.getElementById("pvidaP").textContent = personajeElegido.vidamax;
    document.getElementById("pataqueP").textContent = personajeElegido.ataque;
    document.getElementById("pdefensaP").textContent = personajeElegido.defensa;

    barraDeVida(personajeElegido.vidamax, personajeElegido.vida, "barraVidaP");


}

function estadisticas() {

    personajeElegido.nombre = infoPjs[pequipado - 1].nombre;
    personajeElegido.vidamax = parseInt(infoPjs[pequipado - 1].vidamax) + parseInt(cual[narmaequipada - 1].vida);
    personajeElegido.vida = parseInt(infoPjs[pequipado - 1].vidamax) + parseInt(cual[narmaequipada - 1].vida);
    personajeElegido.ataque = parseInt(infoPjs[pequipado - 1].ataque) + parseInt(cual[narmaequipada - 1].ataque);
    personajeElegido.defensa = parseInt(infoPjs[pequipado - 1].defensa) + parseInt(cual[narmaequipada - 1].defensa);
    personajeElegido.probCrit = (parseInt(infoPjs[pequipado - 1].probCrit) + parseInt(cual[narmaequipada - 1].probCrit));
    personajeElegido.url = infoPjs[pequipado - 1].url;
    personajeElegido.recuperacion = infoPjs[pequipado - 1].recuperacion;

    nombreArmaelegido.textContent = '' + cual[narmaequipada - 1].nombre;

    nombrePjelegido.textContent = '' + infoPjs[pequipado - 1].nombre;

    defensaPj.textContent = "Defensa: " + personajeElegido.defensa;

    ataquePj.textContent = "Ataque: " + personajeElegido.ataque;

    probCritPj.textContent = "Vida: " + personajeElegido.vidamax;

}

function eimagen() {
    $("#contieneImagenP").empty().append("<img width='100%' src='" + personajeElegido.url + "'>");

    $("#contieneImagenE").empty().append("<img width='100%' src='" + enemigos[enemigoac - 1].url + "'>");

}


var width = 0;
var maxWidth = 100;
var intervalo;

function iniciarRelleno() {
    clearInterval(intervalo);
    intervalo = setInterval(function () {
        if (width >= maxWidth) {
            clearInterval(intervalo);
        } else {
            width++;
            actualizarBarra();
        }
    }, 100); // Ajusta el tiempo (100 ms) para cambiar la velocidad de relleno
}
var dineroganado = 0;

function consumirEnergia(n) {
    clearInterval(intervalo);
    var consumo = n; // Cantidad de energía a consumir
    if (width >= consumo) {
        width = Math.max(0, width - consumo);
        document.getElementById('barra-energia').style.backgroundColor = colorRan();

        var estats = enemigos[enemigoac - 1];

        estats.vida -= consumo / 100 * personajeElegido.ataque;

        document.getElementById("pnombreE").textContent = estats.nombre;
        document.getElementById("pvidaE").textContent = estats.vida;
        document.getElementById("pataqueE").textContent = estats.ataque;
        document.getElementById("pdefensaE").textContent = estats.defensa;

        barraDeVida(estats.vidamax, estats.vida, "barraVidaE");
        if (estats.vida <= 0) {
            dineroganado = nivelActual * 100; dinero += nivelActual * 100;
            actualizarTienda();
            alert("Venciste a " + estats.nombre + " Dinero $" + dineroganado);
            console.log("n " + enemigoac)
            if (enemigoac >= nivelActual) {
                nivelActual++;
            }
            localStorage.setItem("nivelActual", nivelActual);
            estats.vida = estats.vidamax;
            infoMapa();
            botones(9);
            consumirEnergia(0);
        }
    }
    actualizarBarra();
    iniciarRelleno(); // Reinicia el relleno después de consumir
}

function actualizarBarra() {
    var barra = document.getElementById('barra-energia');
    barra.style.width = width + '%';

    if (width == 25) {

        barra.style.backgroundColor = colorRan();
    }

    if (width == 50) {

        barra.style.backgroundColor = colorRan();
    } else if (width == 75) {

        barra.style.backgroundColor = colorRan();
    } else if (width == 100) {

        barra.style.backgroundColor = colorRan();
    }
    barra.innerText = width + '/ 100';
}



var widthB = 0;
var maxWidthB = 100;
var intervaloB;

function iniciarRellenoB() {
    clearInterval(intervaloB);
    intervaloB = setInterval(function () {
        if (widthB >= maxWidthB) {
            clearInterval(intervaloB);
        } else {
            widthB++;
            actualizarBarraB();
        }
    }, 100); // Ajusta el tiempo (100 ms) para cambiar la velocidad de relleno
}

function reiniciarConsumirEnergia(n) {
    clearInterval(intervalo);
    var consumo = n; // Cantidad de energía a consumir
    if (width >= consumo) {
        width = Math.max(0, width - consumo);
    }
    actualizarBarra();
    iniciarRelleno(); // Reinicia el relleno después de consumir
}

function consumirEnergiaB(n) {
    clearInterval(intervaloB);
    var consumo = n; // Cantidad de energía a consumir
    if (widthB >= consumo) {
        widthB = Math.max(0, widthB - consumo);
        document.getElementById('barra-energiaB').style.backgroundColor = colorRan();
    }
    actualizarBarraB();
    iniciarRellenoB(); // Reinicia el relleno después de consumir
}

function actualizarBarraB() {
    var barra = document.getElementById('barra-energiaB');
    barra.style.width = widthB + '%';

    if (widthB == 25) {

        barra.style.backgroundColor = colorRan();
    }

    if (widthB == 50) {

        barra.style.backgroundColor = colorRan();
    } else if (widthB == 75) {

        barra.style.backgroundColor = colorRan();
    } else if (widthB == 100) {

        barra.style.backgroundColor = colorRan();
    }
    barra.innerText = widthB + '/ 100';
}

