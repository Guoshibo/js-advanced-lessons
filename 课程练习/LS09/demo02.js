var f2 = function () {
    var y = "局部";
    console.log(y);
};
f2();//局部
console.log(y);//报错，因为y是局部作用域，在外部是无法被访问的

var f2 = function () {
    y = "全局";//前面没有var,相当于定义在了window上
    console.log(y);
};
f2();//全局
console.log(y);//全局

//全局变量和局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";//如果没有这行，则两次输出都为outside
    //如果有这一行，输出结果为 inside f1     outside f1
    console.log(x);
};
f1();
console.log(x);

/*ES5中无块作用域
有全局作用域、函数作用域、ES5中可以使用函数立即执行表达式来模拟块作用域
所以在提升的时候，在函数内部会被限制在花括号里面，但对于if,else这种带有花括号的是会被冲破的
*/
/*例如
if（true）{
    var i;
}
等价于
var i；
if（true）{
    i=0;
}
*/
/*
function foo(){
    console.log("j:",j);  j:undefined
    var j=10;
    console.log("j:",j);  j:10
}
foo();
等价于
function foo(){
    var j;
    console.log("j:",j);  j:undefined
    j=10;
    console.log("j:",j);  j:10
}
foo();
*/