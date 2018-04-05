var name = "Jack";
function echo() {
    console.log(name);
}
echo();
//Jack

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//Jack  与调用形式无关
var name = "Jack";
function echo() {
    var name="dff";
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//dff
//无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();
//Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();
//g

var scope = "g";
function foo(){
	var scope = "I";
    return function(){return scope;};
}
console.log(foo()());
//I