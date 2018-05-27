console.log("logInfo");//正常输出
console.warn("warnInfo");//警告信息
console.error("errorInfo");//错误信息
console.assert(3>2,"有问题的话会输出这句话11111");//判断，没有问题的话则不会返回什么
console.assert(2==="2","有问题的话会输出这句话22222");
try {
    try {
        throw "oops";//异常一
    }
    catch (ex) {
        console.error("inner", ex);
        throw ex;//异常二
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}
//两个异常
try {
    try {
        throw "oops";//异常
    }
    catch (ex) {
        console.log("inner", ex);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}
//一个异常

try{
    //try_statements 可能出现错误部分
    console.log("try_statements");
    throw "Some Error";//可以抛出异常 throw new Error("ErrorMsg");
    // var a= new Array(-1);
    // throw new TypeError();// throw new ReferenceError();
}
catch(e){ //catch和finally至少有一个
    //catch_statements 捕获处理异常
    console.log("catch_statements",e);
}
finally{ //catch和finally至少有一个
    //finally_statements 最终处理
    console.log("finally_statements");
}
//try_statements
//catch_statements Some Error
//finally_statements