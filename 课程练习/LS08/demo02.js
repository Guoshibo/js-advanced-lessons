//高阶函数
var obj={x:23};
var fun1=function(){
return function fun2(){
return this.x;
}
};
obj.fun3=fun1;
obj.fun4=fun1();
console.log(obj.fun3());
//f fun2(){return this.x;}
console.log(obj.fun3()());
//undefined
console.log(obj.fun4());
//23

function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
//13
add(2,-3,Math.abs);
//5
add(2,3,Math.sqrt)//2的开平方加3的开平方
//3.1462643699419726

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);
//1
foo(1,1,f3,f2);
//2
foo(1,1,f1,f2);
//4

var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2=function(){console.log(this.word_2)};
function_1(function_2);
//do something.
//do another thing.

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);
// [1, 4, 9, 16, 25, 36, 49, 64, 81]

//将数组所有元素改为数字类型
var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}
//number  number   number

//reduce 相当于 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
arr.reduce(function f(x, y) {
    return x + y;
}); // 25

//filter 数组过滤 ，返回为false的将被过滤掉
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; 
// [1, 5, 9, 15]

// sort 排序
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); 
// [1, 2, 10, 20]


//实例三 常用回调函数 设置超时和时间间隔的方法、异步请求、事件监听和处理
//超时回调实例
var timeOutId = setTimeout( function () {
    console.log("你已超时！");
},1000);
//你已超时

//间隔回调实例
var timeInterval = setInterval(function () {
    console.log("Hi");
},1000);
//持续的输出Hi
//事件监听回调实例
document.addEventListener("click", function(){
    console.log("click callback");
});



么