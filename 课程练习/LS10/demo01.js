//全局作用域
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,//如果把100后面的逗号改为分号，则c就会相当于定义在了全局上
        c = 200;
    function bar() {
        //bar局部作用域
        var a = 500,//如果把500后面的逗号改为分号，则d就会相当于定义在了全局上
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500  20  200  600
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
        console.log(a,b,c,d);//报错,d没有被定义
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100;
        c = 200;
    function bar() {
        //bar局部作用域
        var a = 500;
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
console.log(a,b,c,d);
//500 20 200 600
//10 20 200 600