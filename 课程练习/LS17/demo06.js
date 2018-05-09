//例子一
var arr1=[2,5,8];
arr1.forEach(function(a){
    console.log(a);
});
console.log(arr1);
//2
//5
//8
//[2,5,8]

//例子二
var arr1=[2,5,8];
arr1.forEach(function(a){
    console.log(a,this);
});
console.log(arr1);
//2  window
//5  window
//8  window
//[2,5,8]
//此时console.log(a,this);中的this指的是window

//例子三
var arr1=[2,5,8];
var arr2=[3,7,9];
arr1.forEach(function(a){
    console.log(a,this);
},arr2);
console.log(arr1);
//2 [3,7,9]
//5 [3,7,9]
//8 [3,7,9]
//[2,5,8]
//此时this指的是arr2

var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
//2 "不大于3"
//5 "大于3"
//8 "大于3"

//数组原型方法

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行,不会输出8
    return a%2===0;
});
console.log(returnValue);
//false

// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray);
//[1,9,25,49,81]

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray);
//[3,5,7]


// Array.prototype.reduce(element,initialValue?) //从左向右迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));
//14

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));
//14

//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));
//prev a ,cur: b ,i: 1
//prev ab ,cur: c ,i: 2
//prev abc ,cur: d ,i: 3
//abcd

//prev x ,cur: a ,i: 0
//prev xa ,cur: b ,i: 1
//prev xab ,cur: c ,i: 2
//prev xabc ,cur: d ,i: 3
//xabcd

//prev d ,cur: c ,i: 
//prev dc ,cur: b ,i: 1
//prev dcb ,cur: a ,i: 0
//dcba

//prev x ,cur: d ,i: 3
//prev xd ,cur: c ,i: 2
//prev xdc ,cur: b ,i: 1
//prev xdcb ,cur: a ,i: 0
//xdcba

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);
//[0,1,2,3,4,5]

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function(allNames, name){
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
},{});
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }