function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());
//1
console.log(d.count());
//1
console.log(c.reset());
//0
//把n又变成了0
console.log(c.count());
//1
console.log(d.count());
//2
/*
四个闭包
n和c.c
n和c.r
n和d.c
n和d.r
*/
function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();
//1000
f();
//1001

// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在与f2被赋给了一个全局变量，全局变量没被释放
// 这导致f2始终在内存中，而f2和n形成了对应作用域（f1）的闭包
// f1中的n不会在调用结束后，被垃圾回收机制（garbage collection）回收
var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};//思考：nAdd是闭包么? n是哪个作用域下的变量
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); //999
nAdd();//如果没有这一行，则下行输出999
result();//1000

function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());
//default
john.setName("john");
console.log(john.getName());
//john

var jack = Person();
console.log(jack.getName());
//default
jack.setName("jack");
console.log(jack.getName());
//jack

var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
nAdd();
result2(); 
//11

