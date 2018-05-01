//构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);
//输出为Point{x:2,y:3}没有移动

//方案一
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);
//输出为Point{x:3,y:4}，移动了(1,1)

//方案二
function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        function moveX(x){
            this.x+=x;
        }
        function moveY(y){
            this.y+=y;
        }
        moveX.call(this,x);//这里的this可以换成p
        moveY.call(this,y);//这里的this可以换成p
    }
};
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//Point {x: 3, y: 4, moveXY: ƒ}

//方案三
function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        function moveX(x){
            this.x+=x;
        }
        function moveY(y){
            this.y+=y;
        }
        moveX.bind(this,x)();//后面的（）指的是调用，这里的this可以替换成为p
        moveY.bind(this,y)();//后面的（）指的是调用,这里的this可以替换成为p
    }
};
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
