//由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，
//就能保证不会出现同名的属性。
//这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
//使用Symbol是用[]，而不是用点操作符
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注意中括号内不要加引号，后面介绍加引号和不加引号的区别
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

//上面代码通过方括号结构和Object.defineProperty，将对象的属性名指定为一个Symbol值。
//注意，Symbol值作为对象属性名时，不能用点运算符，使用中括号是注意使用引号和不用引号的区别
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//上面代码中，因为点运算符后面总是字符串，所以并不是将Hello这个属性值传给了值为Symbol值的属性名，而是传给了转换为字符串的"mySymbol"这个属性名

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);
//123 undefined
console.log(obj[myS2],obj["xx"]);
//456 456

//同理，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
// 如果不用[]的话相当于使用s对应的字符串定义属性
let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);
// 上面代码中，如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个Symbol值。

// 采用增强的对象写法，上面代码的obj对象可以写得更简洁一些
let obj = {
    [s](arg) {console.log("xx");}
};

// 回顾ES6对象属性的表达式定义方法和ES6对象的简洁表示法，对于属性和方法定义的简洁表示法
//还有一点需要注意，Symbol值作为属性名时，该属性还是公开属性，不是私有属性