var div=[
[document.getElementById("div0"),colorRan(),840,420,0,0],
[document.getElementById("div1"),colorRan(),50,100,200,200],
[document.getElementById("div2"),colorRan(),50,100,200,600],
[document.getElementById("div3"),colorRan(),150,10,50,50],
[document.getElementById("div4"),colorRan(),150,10,50,300]
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

