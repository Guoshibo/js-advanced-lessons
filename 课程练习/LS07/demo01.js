//三种形式定义函数
//方法一
var str="return a<b?a:b";
var min=new Function("a","b",str);//一定要注意这种方法中Function要大写，因为它是函数对象的构造函数，用来实例化对象，它实例化出来的对象也是个函数
min(1,5);
//1
//方法二 函数声明形式
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//3
//方法三 函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);
//3
//非匿名函数便于调用栈追踪 
var foo = function max(a,b){
    console.trace();//调用栈追踪
    return console.log(a>b?a:b);
};
foo(2,3);
console.trace
 max
 (anonymous)//匿名的
//3

