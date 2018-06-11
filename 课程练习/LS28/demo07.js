var jsonData={id:42,status:"OK",data:[867,5309]};
let {id,status,data:number}=jsonData;
console.log(id,status,number);
//42 "OK" [867,5309]
console.log(data);
//error

var jsonData={id:42,status:"OK",data:[867,5309]};
let {id,status,data}=jsonData;
console.log(data);
//[867.5309]

