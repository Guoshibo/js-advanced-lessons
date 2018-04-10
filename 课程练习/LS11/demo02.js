//避免文件之间的全局污染，使用IIFE函数立即执行表达式
//(function () {  // IIFE开始
    var x = 10;
    document.onclick = function () {
        // console.log("x = ",x);
        alert("x = "+x);
    };
//})();    IIFE结束

(function () {  // IIFE开始
    var x = 20;
 })();           // IIFE结束
 
 // function nameSpace() {
 //     var x = 20;
 // }
 // nameSpace();
 
 
 //由于ES5没有块作用域，即使写成如下形式依然有问题
 if(true){
     var x = 30;
 }

 function f(){
    var getNumFuncs=[];//定义一个数组
    for(var i=0;i<10;i++){
        getNumFuncs[i]=function(){//getNumFuncs这个数组的十个元素都是由function产生,为函数对象
        return i;
        };
    }
    return getNumFuncs;
}
    var tmp=f();
    tmp[3]();
//10
//添加立即执行表达式
function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++){
        (function(j){
        getNumFuncs[j]=function(){
        return j;
        };
    }(i));
}
    return getNumFuncs;
}
var tmp=f();
tmp[3]();
//3

//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出10
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
//9

//变量共享问题
for (var i = 0; i < 5; i++) //这五次循环会立马执行完毕
{
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//5
//Mon Apr 09 2018 15:46:16 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 15:46:17 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 15:46:18 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 15:46:19 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 15:46:20 GMT+0800 (中国标准时间) 5


//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
//立即执行表达式异步执行
//Mon Apr 09 2018 15:50:01 GMT+0800 (中国标准时间) 0
//Mon Apr 09 2018 15:50:02 GMT+0800 (中国标准时间) 1
//Mon Apr 09 2018 15:50:03 GMT+0800 (中国标准时间) 2
//Mon Apr 09 2018 15:50:04 GMT+0800 (中国标准时间) 3
//Mon Apr 09 2018 15:50:05 GMT+0800 (中国标准时间) 4

for (var i = 0; i < 5; i++) {
    !function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    }(i);
}
//true
//Mon Apr 09 2018 15:50:57 GMT+0800 (中国标准时间) 0
//Mon Apr 09 2018 15:50:58 GMT+0800 (中国标准时间) 1
//Mon Apr 09 2018 15:50:59 GMT+0800 (中国标准时间) 2
//Mon Apr 09 2018 15:51:00 GMT+0800 (中国标准时间) 3
//Mon Apr 09 2018 15:51:01 GMT+0800 (中国标准时间) 4