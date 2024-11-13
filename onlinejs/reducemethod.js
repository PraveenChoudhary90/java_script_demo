let arr = [1,2,3,4,5,6];
let output = arr.reduce((result , current) => {
    return  result + current;

});
console .log(output);


// largest number from array
 let newarr= arr.reduce((result , current) => {return result>current?result:current});
 console.log(newarr);

 ///smallest number from the array

  let newarr1= arr.reduce((result , current) => {return result<current?result:current});
 console.log(newarr1);