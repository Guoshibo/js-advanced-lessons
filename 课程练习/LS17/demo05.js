//数组是对象的特殊形式
//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);
//如果换成var arr2 = new Array("5");，则arr2中有一个元素，为"5"
console.log(arr2);
//5个元素均为空，长度为5
for(var i=0;i<arr2.length;i++)
{arr2[i] = i;}
console.log(arr2);
//[0,1,2,3,4]
//如果换成var arr2 = new Array("5");，则arr2中的唯一一个元素变为了0；



//异步执行
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//当点击document的时候，i早就执行到了5，并不是点击一下，i才去加一，所以点击document之后，arr22中有6个元素
//前五个元素都没有值，第六个元素arr22[5]=5;
