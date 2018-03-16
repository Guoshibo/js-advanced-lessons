//判断方法一
function isStrictMode(){
    return this===window?true:false;
}
isStrictMode();
//判断方法二
function isStrictMode(){
    if(this==undefined){
    return false;
}
    else{
        return true;
    }
}
isStrictMode();
