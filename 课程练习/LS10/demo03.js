{
    var a = 4;
}
console.log(a);
//4

//变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//一长串代码后，忘记了上边定义的userID
var a=2,b=3;
if(a<b){
    var userId = 234;//重复定义，变量污染
}

//通过IIFE引入一个新的作用域来限制变量的作用域
var userId=123;
document.onclick=function(){
    console.log('userId=',userId);
};
(function (){
    var a=2,b=3;
    if(a<b){
        var userId=234;
    }
}());