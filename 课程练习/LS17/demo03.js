//通过构造函数传创建的原型的共享问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;等同于下一行代码
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);