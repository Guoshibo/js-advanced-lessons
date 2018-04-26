var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);
//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;
console.log(newObj.__proto__ === obj);
//true
console.log(newObj2.__proto__ === obj);
//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);
//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);
//null