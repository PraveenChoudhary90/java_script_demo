let number = window.prompt("Enter the number ");
let arr = [];
for(let i = 0; i<number;i++)
{
    arr[i-1]= i;
}
console.log(arr);
let sum = arr.reduce((res, currt)=>{
    return res+currt;
});
console.log("sum=" , sum);

let factorial = arr.reduce((res,currnt) => {

    return res*currnt;
});
console.log("factoriayl = ", factorial);