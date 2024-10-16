let arrstr = ["hello","ty","praveen","xyz","you","abc","mango"];
arrstr.sort();
console.log(arrstr);
let arr = [123,34,65,78,2,4,6,77,89,12345,2343434];
arr.sort(function(a,b){return a-b});
console.log(arr);
let arr1 = [123,34,65,78,2,4,6,77,89,12345,2343434];
arr.sort(function(a,b){return b-a});
console.log(arr1);
let arr2 = [1,2,3,4,5,6,3,2,1,5,7];
let output = arr2.reduce(function(a,b){return a+b});
console.log(output);
console.log(arr2.length);
let answerstr = arr1.toString();
console.log(answerstr);
let answersjoin = arr1.join(" praveen ");
console.log(answersjoin);




