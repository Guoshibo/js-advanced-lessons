//对象方法中的this（无函数嵌套的情况下）

//函数作为对象的一个属性时，称之为对象的方法
//对象方法中的this指代调用此方法的对象（无嵌套的情况下）
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}

//构造函数中的this指代通过new新创建的对象

//JS（ES5） 并没有类（class）的概念，而是使用基于原型（prototype）的继承方式
//JS中的构造函数充当了类的角色，如果不使用 new 调用，则和普通函数一样。
//如果作为构造函数正确调用时，构造函数中的this 绑定到新创建的对象上
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);
//Point{x:2,y:3}
Point(5,6);
console.log(window.x,window.y);
//5 6
