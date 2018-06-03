function student(sno,name)
{
    this.sno=sno;
    this.name=name;
}
student.prototype.study=function(){
    console.log('I CAN STUDY');
}


var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//i am a,and i get the message: hello
//i am b,and i get the message: hello

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
},5000);
//i am a,and i get the message: world
//i am c,and i get the message: world