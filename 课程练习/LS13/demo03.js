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
console.log(obj3[0]);
//undefined
//其他的也类似
//这种加点的是相当于在obj3中加入了一个属性i，其值赋为了9
console.log(obj3);
//{i:9}

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

console.log(obj4);
//{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
//这个加[]相当于给obj4中加入了10个属性，每个的值分别为0、1、2、3、4、5、6、7、8、9
//综上所述，在使用for循环给对象中填入多个元素时，应该使用[]