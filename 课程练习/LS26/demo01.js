var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
//arr1:[1, 3, 5, 7, 9]
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);
//newArray1: (5) [1, 9, 25, 49, 81]
var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
//arr2: (5) [1, 3, 5, 7, 9]
var newArray2 = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);
//newArray2: (3) [3, 5, 7]

var LTimeOperation = function(taskID){
    var id = taskID;
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}
//Start LTimeOperation #0
//Start LTimeOperation #1
//Start LTimeOperation #2
//Start LTimeOperation #3
//Start LTimeOperation #4

//task #3 cost 950 ms.
//this is f2, i am callback!

//task #1 cost 1658 ms.
//this is f2, i am callback!

//task #4 cost 2184 ms.
//this is f2, i am callback!

//task #2 cost 4196 ms.
//this is f2, i am callback!

//task #0 cost 4749 ms.
//this is f2, i am callback!
