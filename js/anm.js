/* div por id, color div,ancho,largo,top,left,hidden false = se ve , */
var colorEqA=colorRan(),colorEqB=colorRan();
var div=[
[document.getElementById("div0"),colorRan(),990,1200,0,0,false],
[document.getElementById("div1"),colorEqA,300,300,755,90,false,randomAr(10,1)],
[document.getElementById("div2"),colorEqB,300,300,135,600,false,randomAr(10,1)],
[document.getElementById("div3"),colorEqB,700,45,45,245,false],
[document.getElementById("div4"),colorEqA,700,45,1100,45,false],
[document.getElementById("div5"),colorEqB,420,300,135,90,true],
[document.getElementById("div6"),colorEqA,420,300,755,480,true],
[document.getElementById("botones"),colorRan(),990,420,1200,0,false]
];
function juntos(){
for(var f=div.length-1;f>=0;f--){
div[f][0].style.position="absolute";
div[f][0].style.backgroundColor=div[f][1];
div[f][0].style.width=div[f][2]+"px";
div[f][0].style.height=div[f][3]+"px";
div[f][0].style.top=div[f][4]+"px";
div[f][0].style.left=div[f][5]+"px";
div[f][0].hidden=div[f][6];
}
if(div[3][2]>1&&div[4][2]>1){
div[3][2]-=div[1][7];
div[3][5]+=div[1][7];
if(div[3][2]<900){
div[4][2]-=div[2][7];}
}
}
setInterval("juntos()",1000);

console.log(div);

function nose(nen){
if(nen=="1"){div[1][7]++;
    if(div[6][6]){
    div[6][6]=false;
    }else{
        div[6][6]=true;
    }
}else if(nen=="2"){if(div[2][7]>1){div[2][7]--;}
    if(div[5][6]){
    div[5][6]=false;if(div[2][7]>1){div[2][7]--;}
    }else{
        div[5][6]=true;
    }
}
}

// for(var x=1;x<=z;x++){
//     div[0][0].innerHTML+=("<div id='div"+x+"'></div>");
// div[x][0]=document.getElementById("div"+x);
// div[x][0].style.width="10px".height;
// div[x][0].style.height="10px";
// div[x][0].style.position="absolute";
// div[x][0].style.top=randomAr(410,1)+"px";
// div[x][0].style.left=randomAr(410,10)+"px";
// div[x][0].style.backgroundColor=colorRan();

// }

