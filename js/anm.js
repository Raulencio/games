/* div por id, color div,ancho,largo,top,left */
var colorEqA=colorRan(),colorEqB=colorRan();
var div=[
[document.getElementById("div0"),colorRan(),990,1200,0,0],
[document.getElementById("botones"),colorRan(),990,420,1200,0],
[document.getElementById("div1"),colorEqA,300,300,755,90],
[document.getElementById("div2"),colorEqB,300,300,135,600],
[document.getElementById("div3"),colorEqB,700,45,45,245],
[document.getElementById("div4"),colorEqA,700,45,1100,45]
];

for(var f=div.length-1;f>=0;f--){
div[f][0].style.position="absolute";
div[f][0].style.backgroundColor=div[f][1];
div[f][0].style.width=div[f][2]+"px";
div[f][0].style.height=div[f][3]+"px";
div[f][0].style.top=div[f][4]+"px";
div[f][0].style.left=div[f][5]+"px";
}

console.log(div);



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
