var arr=new Array();
arr.__proto__===Array.prototype;
//true
arr.__proto__.__proto__===Object.prototype;
//true
var fun=new Function();
fun.__proto__===Function.prototype;
//true
fun.__proto__.__proto__===Object.prototype;
//true


function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);
//Mike
console.log(p1.age);
//21
p1.sayHi();
//Hi,i'm  Mike 21 years old!

//没有私有属性情况下，常将方法添加到构造函数的prototype属性上，实现方法共享
//而属性根据情况来确定是定义在构造函数中,还是定义在构造函数的prototype（即实例化对象的原型上）属性上
console.log(p1.__proto__ === Person.prototype);
//true

/*
构造函数内的方法:使用函数内的方法我们可以访问到函数内部的私有变量 ,如果我们通过构造函数 new出来的实例化对象
需要我们操作构造函数内部的私有变量的话,我们这个时候就要考虑使用函数内的方法.

prototype上的方法:当我们需要通过一个函数创建大量的对象 ,并且这些对象还都有许多的方法的时候;
这时我们就要考虑在函数的 prototype 上添加这些方法.
*/
/*
定义在构造函数内部的方法,会在它的每一个实例上都克隆这个方法;定义在构造函数的 prototype 属性上的方法会让它
的所有示例都共享这个方法,但是不会在每个实例的内部重新定义这个方法 .如果我们的应用需要创建很多新的对象,并
且这些对象还有许多的方法,为了节省内存,我们建议把这些方法都定义在构造函数的 prototype 属性上 当然,在某些
情况下,我们需要将某些方法定义在构造函数中,这种情况一般是因为我们需要访问构造函数内部的私有变量 
*/