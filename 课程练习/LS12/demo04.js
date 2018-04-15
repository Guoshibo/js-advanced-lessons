function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();

//虽然有时没有直接用，但闭包无时无刻不存在
function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);

var db = (function() {
// 创建一个隐藏的object, 这个object持有一些数据
// 从外部是不能访问这个object的
    var data = {};
// 创建一个函数, 这个函数提供一些访问data的数据的方法
    return function(key, val) {
        if (val === undefined) { return data[key] } // get
        else { return data[key] = val } // set
    };
// 我们可以调用这个匿名方法
// 返回这个内部函数，它形成了一个闭包
})();

db('x'); // 返回 undefined
db('x', 1); // 设置data['x']为1
db('x'); // 返回 1
// 我们不能直接访问data这个object本身
// 但是我们可以设置它的成员


//////////////其他实例///////
(function () {
    var m = 0;
    function getM(){
        return m;
    }
    function setM(val){
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();
//100

//注意闭包与不经意的变量共享
function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;//若是return i;的话最终输出是几？
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());
//2