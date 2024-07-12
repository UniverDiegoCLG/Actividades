n=22
let descuento =2;
let total = 20;

if (n>=0 && n<=10){
    descuento = n *0.05;
    console.log(descuento);
    total= descuento*0.16;
    console.log(total);
}else if(n>=11 && n<=20) {
    descuento = n * 0.9;
    console.log(descuento);
    total= descuento * 0.13;
    console.log(total);
}else if (n>=23) {
    descuento = n *0.12;
    console.log(descuento);
    total= descuento*0.16;
    console.log(total);
}