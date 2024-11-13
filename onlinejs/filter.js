let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let newarreven = arr.filter((val) => { return val%2===0});
let newarrodd = arr.filter((val) => { return val%2!==0});
console.log(newarreven);
console.log(newarrodd);