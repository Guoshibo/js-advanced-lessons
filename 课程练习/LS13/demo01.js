var obj={
    name:'jack',
    sex:'boy',
    grade:8
}
console.log(obj.grade);
//8
//不用Math.JOSN实例化对象
//构造函数是函数也是对象,比如说String、
console.log(new Function() instanceof Function);
//true  new Function()相当于实例化出一个对象，这个对象是函数对象
console.log(new(new Function()) instanceof Function);
//false new(new Function())相当于new object，所以返回的是false,他本质个对象

var i = new String("str");
// String Object
conosle.log(typeof i);
//object
console.log(i instanceof String);
//true

var h = new Number(1);   
// Number Object
conosle.log(typeof h);
//object
console.log(h instanceof Number);
//true

var g = new Boolean(true);          
// Boolean Object
conosle.log(typeof g);
//object
console.log(g instanceof Boolean);
//true

var j = new Object({name : "Tom"}); 
// Object Object
conosle.log(typeof j);
//object


var k = new Array([1, 2, 3, 4]);   
// Array Object
conosle.log(typeof k);
console.log(k instanceof Array);
//true

var l = new Date();                
// Date Object
conosle.log(typeof i);
//object
console.log(l instanceof Date);
//true

var m = new Error();
conosle.log(typeof m);
//object
console.log(m instanceof Error);
//true

var n = new Function();
console.log(typeof n);
//function

var o = new RegExp("\\d");
console.log(typeof o);
//object
console.log(o instanceof RegExp);
//true

//从h到o这8个变量，对他们进行  __  instanceof Object判断，结果均为true
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);
//结果均为function
console.log(typeof Math);
console.log(typeof JSON);
//结果均为object