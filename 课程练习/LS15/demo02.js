//原型链
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);
//1
console.log(obj.y);
//2
console.log(obj.z);
//3
console.log("z" in obj);
//true
console.log(obj.hasOwnProperty("z"));
//false

obj.z = 5;
console.log(obj.hasOwnProperty("z"));
//true
console.log(obj.z);
//5
console.log(proObj.z);
//3

obj.z = 8;
console.log(obj.z);
//8

delete obj.z;
console.log(obj.z);
//3

delete obj.z;
console.log(obj.z);
//3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);
//找不到了

//注意：hasOwnProperty是原型方法，通过实例化出的对象去调用
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法