var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);


var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}
console.log(obj4[0]);
//undefined
//其他的也类似

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}
console.log(obj4[0]);
//0
console.log(obj4[1]);
//1
console.log(obj4[2]);
//2
console.log(obj4[3]);
//3
console.log(obj4[4]);
//4
console.log(obj4[5]);
//5
console.log(obj4[6]);
//6
console.log(obj4[7]);
//7
console.log(obj4[8]);
//8
console.log(obj4[9]);
//9