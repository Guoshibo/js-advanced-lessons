//一般函数中的this（非严格松散模式下）指代全局对象

function thisTest(){
    console.log(this === window);
}
thisTest();
//true

//通过this在函数内添加、删除、修改全局对象
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);
//20 '新添加属性

function thisTest(){
    var a=b=2;
}
thisTest();
console.log(b);
//2
console.log(a);
//会报错
//上面的代码等同于
function thisTest(){
    var a;//a前面加了var，则表示是局部变量
    b=2;//前面没有var，是全局变量
}
thisTest();
console.log(b);
//2

//一般函数中的this(严格模式)为undefined

function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();
//undefined

//可以用此特性来判断当前是否是严格模式
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();
//false表示此时不是严格模式

