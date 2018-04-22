var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x);
//1
console.log(obj.y);
//2
console.log(obj.z);
//3
console.log(obj.toString);//原型链上有toString属性
//ƒ toString() { [native code] }
for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//不能遍历到toString？
}
//x 1
//y 2
//z 3 

var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//y:2

var person={
    name:'jack'
};
Object.defineProperty(person,'name',{
    writable:false,
    configurable:false,
    enumerable:true,
    value:'Mike'});
console.log(person.name);
//Mike
person.name = "Lucy";
console.log(person.name);
//Mike
delete person.name;
console.log(person.name);
//Mike

var person={
    name:'jack'
};
Object.defineProperty(person,'name',{
    writable:true,
    configurable:false,
    enumerable:true,
    value:'Mike'});
console.log(person.name);
//Mike
person.name = "Lucy";
console.log(person.name);
//Lucy
delete person.name;
console.log(person.name);
//Lucy

var person={
    name:'jack'
};
Object.defineProperty(person,'name',{
    writable:true,
    configurable:true,
    enumerable:true,
    value:'Mike'});
console.log(person.name);
//Mike
person.name = "Lucy";
console.log(person.name);
//Lucy
delete person.name;
console.log(person.name);
