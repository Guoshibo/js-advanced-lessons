var a1=2;
var b1=new Number(2);
a1==b1;
//结果为 true

NaN==NaN;
//返回为 false

var a=2;
if(2==a){//这里写2==a,而不是写a==2，是因为即使写了a=2，也不会
    //报错，而2=a就会报错了，防止因为丢失=而导致难以查出错误
    console.log("输出");
}

console.log({X:1}=={X:1});
//返回为 false

var a={x:1,y:2};//x:1,y:2是给x赋值为1，y赋值为2
console.log(a.x);
//返回的是 1