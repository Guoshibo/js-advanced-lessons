//构造函数
//当一个函数与new结合，该函数将作为构造函数来使用，用来创建JS对象
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);
//20
console.log(p1.age);
//Jack
p1.sayHi();
//Hi,i'm Jack

Person.__proto__===Function.prototype;
//true
Person.__proto__.__proto__===Object.prototype;
//true

var a={};
var b=new Object;
console.log(a.__proto__===Object.prototype);
//true
console.log(b.__proto__===Object.prototype);
//true
