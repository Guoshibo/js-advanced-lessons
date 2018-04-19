var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);
//1
console.log(o._x);
//1
//如果改为_x:1.5;则两个返回的都是1.5
o.x = 2;
console.log(o.x,o._x);
//2 2

var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);
//1
o.x = 2;
console.log(o.x,o._x);
//1 1  因为是只读

var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
//请设置正常年龄
console.log(p1.age);
//23

var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
//2.8284271247461903
console.log(q.theta);
//0.7853981633974483
//atan2指的是角度，指向（x,y)的射线和x轴正方向之间的夹角，Π/4