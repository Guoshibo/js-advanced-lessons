//创建对象 三种方法
//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;//给他提供了一个自身的属性
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);

var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
//{x:1,y:2}
console.log(obj2.hasOwnProperty("x"));
//true
for(var k in obj2)
{
    console.log(k,obj2[k]);
}
//y 2

//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}//也可以给这个构造函数起个别名，这个构造函数充当了类
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();
//可以通过构造函数实例化出多个对象来

//注意：
var objStr = new Object("xxx");
console.log(typeof objStr);
//object
console.log(objStr instanceof String);
//true

var objNum = new Object(23);
console.log(typeof objNum);
//object
console.log(objNum instanceof Number);
//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);
//object
console.log(objBoolean instanceof Boolean);
//true