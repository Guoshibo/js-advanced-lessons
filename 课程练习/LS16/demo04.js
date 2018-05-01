//对象方法中的this（有函数嵌套的情况下）
//this不进行作用域传递、函数嵌套中的this存在缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//{x: 0, y: 0, moveTo: ƒ}
console.log(window.x,window.y);
//2 2
//moveTo方法中嵌套的moveToX函数作为一般函数看待
//此函数中的this此时指向的是全局对象window而不是point

// 解决方案一：软绑定
//使用变量（that或self）软绑定，使this指向正确
//moveTo方法中嵌套的函数中的that此时指向的是point对象。
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y);
//undefined undefined

//解决方案二：通过call和apply来解决
//使用call/apply间接调用，使this指向正确
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 0, moveTo: ƒ}
console.log(window.x,window.y);
//undefined 2

//解决方案三：通过bind来解决
//使用Function.prototype.bind，使this指向正确
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 2, moveTo: ƒ}



