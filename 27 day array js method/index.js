
// let a = Math.PI;
// console.log(a);
// let b = Math.SQRT2;
// console.log(b);


// let c = 56.7;
// console.log(Math.round(c));// baad ke aage ki value deta hai56.7= 57
// console.log(Math.floor(c));//pahle ki valuse jo bhi number dete hai decimal hata deta hai 56.6 = 56
// console.log(Math.ceil(c));// celling ki value dete hai 57
// console.log(Math.trunc(c));//trunc decimal value delet kam deta 102.9 = 102
// console.log(Math.abs(c));// -3 = 3 absolut value deta hai
// console.log(Math.pow(5,2));// power genrate hoti hai
// console.log(Math.random());// alway give anthor value 0.90,0.34 etc;


let selectbtn = document.querySelector("#btn");
selectbtn.addEventListener("click",show);

function show(){
let str = "1234567890qwertyuiasadfghjkbncxvbvnbxzjhfdhvdfuyrEDYWRTFBVBHJGVFBEFJREVHRBGJRRGFNKECGRUCGU!@#$%^&*((){}}{)(*&^%$#@";

let store = '';

for(let i = 0; i < 6;i++)
{
let random = Math.random();
let ans = random * str.length;
let afterfloor = Math.floor(ans);
let cha = str.charAt(afterfloor);
store = store + cha;

}
console.log(store);
let selectdiv = document.querySelector("#output");
selectdiv.innerHTML = store;

}



