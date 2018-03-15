var str="abc_def_ghi_jkl_mn";
str.split("_");
//["abc", "def", "ghi", "jkl", "mn"]
var str="abc_def_ghi_jkl_mn";
str.split("_",2);
//["abc", "def"]
var str = "abc_def_ghi_jkl_mn";
str.concat("_opq");
//"abc_def_ghi_jkl_mn_opq"
var str = "abc_def_ghi_jkl_mn";
str.substr(4,7);
//"def_ghi"
var str = "abc_def_ghi_jkl_mn";
str.substring(4,7);
//"def"
var str = "abc_def_ghi_jkl_mn";
str.slice(2);
//"c_def_ghi_jkl_mn"
var str = "abc_def_ghi_jkl_mn";
str.slice(2,5);
//"c_d"
var str = "abc_def_ghi_jkl_mn";
str.slice(-2);
//"mn"
var str = "abc_def_ghi_jkl_mn";
str.slice(2,-2);
//"c_def_ghi_jkl_"
var str = "abc_def_ghi_jkl_mn";
str.bold();
//"<b>abc_def_ghi_jkl_mn</b>"
var str = "abc_def_ghi_jkl_mn";
str.link();
//"<a href="undefined">abc_def_ghi_jkl_mn</a>"
var str = "abc_def_ghi_jkl_mn";
str.fontcolor("red");
//"<font color="red">abc_def_ghi_jkl_mn</font>"
var str = "abc_def_ghi_jkl_mn";
str.fontsize(50);
//"<font size="50">abc_def_ghi_jkl_mn</font>"