var a//声明变量
var b=2//声明加赋值=定义

var a=[1],b=["2"];
console.log(a,b);
//[1] ["2"]
[a,b]=[b,a];
console.log(a,b);
//["2"] [1]
//交换a,b的值

[x,y="b"]=["a",undefined];
console.log(x,y);
//a  b
[x,y="b"]=["a",null];
console.log(x,y);
//a null
//最右边诚呈现黄色的部分，如果严格等于（三等）undefined,则返回它的默认值

//方法一
let a=[];
let b=[1,2,3,4,5];
[a[0],a[1],a[2]]=[b[0],b[2],b[4]];
console.log(a);
//[1,3,5]
//方法二
let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);
//[1,3,5]
