//call()和apply()实现间接调用
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm:"+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//i'm:polly i can fly ___ 5 6
//i'm:ABC i cam swim ___ 3 4
//i'm:ABC i can fly ___ 7 8

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();

//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//给对象添加方法
obj.sayHi();