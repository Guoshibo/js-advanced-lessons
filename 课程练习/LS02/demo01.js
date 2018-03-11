//类型检测 typeof 一般用于值的类型检测
console.log(typeof 123);
//number
console.log(typeof true);
//boolean
console.log(typeof "abc");
//string
console.log(typeof null);
//object
console.log(typeof undefined);
//undefined
console.log(typeof {name:"Mike",age:20});
//object
console.log(typeof function foo(){});
//function
console.log(typeof Array);
//function
console.log(typeof Function);
//function
console.log(typeof Date);
//function
console.log(typeof Number);
//function
console.log(typeof String);
//function
console.log(typeof Boolean);
//function
console.log(typeof Math);
//object
console.log(typeof JSON);
//object
//从Array开始到Boolean(除了function,typeof function是一种错误的表示），若他们的开头首字母由
//大写变成了小写，则其类型会变成undefined
//类型检测instanceof (左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true)
var a={name:"Mike",age:20};
console.log(a instanceof Object);//注意Object的首字母要大写
//true

var b=[12,34,{},""];
console.log(b instanceof Array);//注意Array的首字母要大写
//true
console.log(b instanceof Object);//注意Object的首字母要大写
//true
var Person = function(){
    //...
};//自己定义了一个person类型
var p1 = new Person();
console.log(p1 instanceof Person);
//true
console.log(p1 instanceof Object);
//true