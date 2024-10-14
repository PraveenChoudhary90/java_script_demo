let array = [11,67,8,7,3,76,8,9,9,"hello"];
let arr2 = ["this is our java script class"];
let arr3 = [45,3,4,5,6,function(){console.log("function called array")}];
let arr4 = [null, undefined,4,64,6<7];
console.log(array);
console.log(array[9]);
console.log(array[9][4]);
console.log(arr2[0][5]);
arr3[5]();
console.log(arr4[4]);
console.log(array.length);
console.log(typeof(array));


for(i = 0; i<array.length; i++){
    console.log(i);
    console.log(array[i]);
};

for(let i in array){
    // index of array element
    console.log(i);
}
for(let i of array){
    // element of array
    console.log(i)
}
