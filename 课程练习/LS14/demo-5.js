//属性特性描述符
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//{value: 5, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj,"y");
//{value: 6, writable: false, enumerable: true, configurable: false}
Object.getOwnPropertyDescriptor(obj,"z");
//{value: 7, writable: false, enumerable: false, configurable: false}

//属性特性的继承特点
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    writable:true//如果不写这行输出的是12
});
o1.x = 34;
console.log(o1.x);
//34

var o2 = Object.create(o1);
o2.x = 56;//修改了o1的x属性
console.log(o2.x);
//56
//若o1的x的writable特性不写为true,则输出12

//访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);
//输出21

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);
//输出57

//全局变量的属性特性
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;
//{value: 23, writable: true, enumerable: true, configurable: false}


