function f1(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3=f1();
console.log(f3);
console.log(f3);
//1  因为f2中return x++是后++，所以是先把x的值输出，之后在++，在本函数中var f3=f1();就进行了一次调用
//   所以输出1之后就把x释放了
//1
//不管写多少次console.log(f3)，得到的结果都是1

function f1(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2;
}
var f3=f1();
console.log(f3);
function f2(){
    return x++;
}
//所以f3代表的是函数对象f2
console.log(f3());
//1
console.log(f3());
//2
console.log(f3());
//3
//每进行一次console.log(f3()),输出的值就比上一个多一，是因为x一直都没有被释放，之前得到的值一直被保留

//同理
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();
//1
foo();
//1

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();
//1
a();
//2
b();
//1

