//间接调用中的this

//通过call/applay间接调用函数中的this（指代第一个参数）
//JS中函数也是对象（函数对象），也有属性和方法（length、call、apply等）
//JS中函数可以通过call和apply进行间接调用，动态的指定由谁来调用此函数
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};
objA.test();
//AA 1
objA.test.call(objB);
//BB 5

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"QL"
};
bird.fly(5,6);
//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);
//i'm:QL i can fly ___ 7 8

//call和apply是定义在function的原型上
