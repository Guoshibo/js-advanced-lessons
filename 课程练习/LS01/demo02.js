console.log(typeof NaN);
//number
console.log(typeof Infinity);
//number


//==、=== 回顾 值类型与引用类型回顾 不同类型变量 判等时的区别
//判等步骤
//1.看是==还是===
//2.如果是===则先看类型
// 类型不同肯定false
// 类型相同（如果是基本类型：判断值是否相等；  如果是引用类型：判断引用是否是同一个引用）
//3.如果是==则先看类型
// 先试着进行类型转换
// 转换后（如果是基本类型：判断值是否相等；   如果是引用类型：判断引用是否是同一个引用）
var a1 = 2;
var a2 = "2";
console.log(a1==a2);
//true
console.log(a1===a2);
//false(类型不同)

var b1 = {};
var b2 = {};
console.log(b1==b2);
console.log(b1===b2);
console.log(b1===b1);
//false
//false
//true

//进一步理解
var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2);
console.log(c1===c2);
//true
//false

//包装对象
var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

//怎么理解JS中都是对象这句话
//访问基本类型的变量属性时，会创建临时包装对象，访问的是该包装对象的属性
//另外改变此临时包装对象的属性，并不会影原变量（原始类型变量的不可变性）

//undefined与null 未确定的值、空引用
