//“==”和“===”
//对于引用类型的判等，一定要判断出是不是指向同一个
console.log(3===3);
//true
console.log(3==="3");
//false
console.log(3=="3");
//true
console.log(3==new String(3));
//true
console.log(3===new String(3));

var obj1 = new String("xyz");
var obj2 = new String("xyz");
//obj1和obj2都是object类型
console.log("xyz"===obj1);
//false
console.log(obj1 == obj2);
//false
console.log(obj1 === obj2);
//false
console.log(obj1 == new String("xyz"));
//false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);
//!=是==的取反 false
console.log(obj1 !== obj2);
//true
console.log(obj1 != obj2);
//true
console.log(obj1 != new String("xyz"));
//true