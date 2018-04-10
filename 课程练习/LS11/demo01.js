function min(x,y){
    return x<y?x:y;
}
min(2,3);
2
//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function min(x,y){
return x<y?x:y;
}(2,3));
2
//立即执行表达式(方法一)
(function min(x,y){
    return x<y?x:y;
})(2,3);
2
//立即执行表达式（方法二）

//IIFE与运算符结合的用法（先执行函数，再计算）
!function(x,y){
    return x==y?true:false;
    }("5",5);
//false
true&&(function max(x,y){
    return x>y?x:y;
})(3,4);
//4
0&&(function max(x,y){
    return x>y?x:y;
})(3,4);
//0
var i = function(){
    return 10;
}();
//10