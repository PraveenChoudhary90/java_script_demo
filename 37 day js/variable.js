// let name = window.prompt("please enter your name");
// let age = window.prompt("Please enter your age");
// let course = window.prompt("Please enter your course");

let name = "praveen Choudhary";
let age = 22;
let course = "mern full stack devlopment";

window.alert(name,age,course);
console.log(name,age,course);

let myname = document.querySelector("#name");
let myage = document.querySelector("#age");
let mycourse = document.querySelector("#course");

myname.innerHTML = name;
myage.innerHTML = age;
mycourse.innerHTML =course;

// window.alert(name,age,course);
// window.alert(age);
// window.alert(course)

// console.log(name,age,course);
// console.log(age);
// console.log(course);