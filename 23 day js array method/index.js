// method
let arr = [12,23,12,11,34,56,3,5,3,2,"praveen"];
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);
arr.push("hello");
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("hello");
console.log(arr);
delete arr[3];
console.log(arr);
// arr(staring index, value jo delete karna hai , value jo add karna hai)
arr.splice(0,1,10,20);
console.log(arr);
arr.splice(0,1);
console.log(arr);
arr.splice(arr.length-1,12,123,1345)
console.log(arr);
arr.splice(arr.length,0)
console.log(arr);
arr.splice(3,1);//index number or jisee delete karva uska index number
console.log(arr);
arr.splice(3,1,234);
console.log(arr);


