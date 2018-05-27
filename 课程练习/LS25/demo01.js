window.onload=function(){
    console.log("window.onload");
    var div1=document.getElementById("div1");
    div1.onclick=function(){
        console.log("window.onclick");
    };
    div1.ondrag=function(){
        console.log("div1.ondrag");
    };
}//在该例子中，onclick可以执行，而ondrag不能执行，若想执行ondrag，可以将onclick注释掉