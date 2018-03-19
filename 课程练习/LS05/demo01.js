var x="1";
console.log(x+=1);
//11 字符串类型
//+和+=都是转换成字符串类型
//++和/=还有—是转换成数字类型
var x="2";
console.log(x/=2);
//1  数字类型

console.log("1"+"2"); 
//12 字符串类型
console.log("1"+2); 
//12 字符串类型
console.log(1+{});
 //1[object Object]  字符串类型
console.log(true+true); 
//2  数字类型
console.log("5"-2); 
//3 数字类型
