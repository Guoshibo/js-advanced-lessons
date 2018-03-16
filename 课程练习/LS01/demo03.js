//逻辑与、或
console.log(2>1&&4<5);
//true
console.log(true&&(!2));
//false
console.log(false&&("2" == 2));
//false
console.log(false&&false);
//false
console.log(2>1||4<5);
//true
console.log(true||(!2));
//true
console.log(false||("2" == 2));
//true
console.log(false||false);
//false
console.log(1===1.0);
//true
console.log(Number("xyz"));
//NaN
console.log(3/0);
//Infinity
//前++，后++
var a = 10;
console.log(++a);
//11
var b = 20;
console.log(b++);
//20