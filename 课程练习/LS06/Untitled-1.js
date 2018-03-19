//逻辑运算符
//对于&&来说， 除了两侧都为真时为真，其他情况都为假
//对于 | | 来说，除了两侧都为假时为假，其他情况都为真
//0看作为false

//当逻辑运算符&&和||两侧的操作数不是布尔类型时

//首先将左操作数转换成布尔类型
//对转换后的左操作数进行逻辑判断（true or false）
//根据短路原则返回原始左操作数或原始右操作数

/* 
短路原则（忽略对右操作数的判断）
对于&&，转换后的左操作数若为true，则直接返回原始右操作数
若为false则,直接返回原始左操作数
对于| |，转换后的左操作数若为true，则直接返回原始左操作数
若为false则直  接返回原始右操作数,通过短路原则，可以用&&和| |来实现复杂的条件语句来代替if-else
*/

//利用短路原则代替if-else
var a=30;
console.log((a>90&&"优")||(a>75&&"良")||(a>60&&"及格")||(a<60&&"不及格"));
//不及格

//使用||给参数设置默认值
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
//6
console.log(sum(1,2));
//8
console.log(sum(1));
//10
console.log(sum(1,0,0));
//10 当b=0时，看作false

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
//6
console.log(sum(1,2));
//8
console.log(sum(1));
//10
console.log(sum(1,0,0));
//10