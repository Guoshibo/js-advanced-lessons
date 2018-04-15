//闭包
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
//6
console.log(inc(2));
//8
inc = createInc(5);
console.log(inc(1));
//6

// 例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
//6
console.log(inc(2));
//8
var inc2 = createInc(5);
console.log(inc(1));
//9
console.log(inc2(1));
//6

var tmp = 100;//自由变量
function foo(x) {
    var tmp = 3;//如果把这行注释掉的话，就会访问到var tmp=100;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//
fee(10);//
fee(10);//

function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有几个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
//113
f3(10);
//114

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); 
//15 1
bar(10); 
//15 2
bar(10);
//15 3

function fn() {
    var max = 10;
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);
//15
//如果屏蔽了第79行，则结果为100