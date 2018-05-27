//^以谁作为起始
//$以谁作为结尾
//\b谁的前面有边界
console.log("moon2xyz".replace(/o/,"ab"));
//mabon2xyz   没有g即没有说明全局
console.log("moon2xyz".replace(/o/g,"ab"));
//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));
//moon2 aboxyz   有\b则修改的是前面有空的o,所以选择的是ooxyz的第一个o
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on