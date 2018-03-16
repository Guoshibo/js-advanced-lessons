//基本语法回顾
var x;//声明变量
x = 20;//表达式作为语句时（赋值表达式语句）

if(true){
    var a = 2;
}
console.log(a);
//结果为2

if(false){
    var b = 3;
}
console.log(b);
//这时花括号里面的语句不会执行

for(var i=0;i<3;i++){
    console.log("i:",i);
}
//返回 i:0
  //  i:1
  //  i:2
  
  for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);
/* i:0
   i:1
   i:2
   3
*/