let arrstr = ["hello","praveen","how", "are", "you","i","am","good","and you","also good"];
arrstr.sort();
console.log(arrstr);
// string ko drect sort accending order me kar sakte hai but numbers ko nhi;
let arrnumber = [12,32,11,54,76,88,22,66,23,21];
arrnumber.sort(function(a,b){return a-b});
console.log(arrnumber);
// acceding order
let arr = [90,12,34,54,2,34,1,3,5,7,99,345,3212,78765,787867,33,6465,3215];
arr.sort(function(a,b){return b-a});
console.log(arr);
// decending order
let arr1 = [90,12,34,54,2,34,1,3,5,7,99,345,3212,78765,787867,33,6465,3215];
let output = arr1.reduce(function(a,b){return a+b});
console.log(output);


let answerstring = arr1.toString();
console.log(answerstring);
// index hata deti hai

let answerjoin = arr1.join(" pk ");
console.log(answerjoin);
// kuch bhi join kar sakte hai

