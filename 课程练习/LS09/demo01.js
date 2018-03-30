//js预解析---声明提升
//变量声明提升
console.log(a);
var a=1;
console.log(a);
//等价于
var a;
console.log(a);//undefined
a=1;
console.log(a);//1

//函数声明提升  当function前有运算符时，认定为表达式，不提升
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2")
}
//等价于
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

//同时有var和function时
//函数表达式
foo();
var foo=function(){
    console.log("foo");
}
//等价于
var foo;
foo();
foo=function(){
    console.log("foo");
}
//两个都会报错，foo is not a function
console.log(foo);//undefined
var foo=function(){
console.log("foo");
}
foo();//foo

//变量名=函数名
AA();
function AA(){
console.log("AA_1");
}
var AA=function AA(){
console.log("AA_2");
}
AA();
//等价于
function AA(){
    console.log("AA_1");
}
var AA;
AA();
AA=function AA(){
    console.log("AA_2");
}
AA();