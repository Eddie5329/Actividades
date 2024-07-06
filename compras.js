let compra = 19;
let desc = "";
let to1="";
let totfin ="";

if(compra  >=0 && compra <=10){
     desc=(compra*.05);
     to1=(compra - desc);
     totfin=(to1 * .16)+to1;
     console.log("el total de su compra junto al descuento es: "+totfin);
}else if(compra  >=11 && compra <=20){
    desc=(compra*.10);
    to1=(compra - desc);
    totfin=(to1 * .16 )+to1;
    console.log("el total de su compra junto al descuento es: "+totfin);
}else{
    desc=(compra*.15);
    to1=(compra - desc);
    totfin=(to1 *.16 )+to1;
    console.log("el total de su compra junto al descuento es: "+totfin);
}
