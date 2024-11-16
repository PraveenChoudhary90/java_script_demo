let data = window.prompt("Enter the heading");
let color = window.prompt("Enter the color");

let heading = document.querySelector("#hello");
heading.innerHTML =data;
heading.style.color = color;
heading.style.background = "red";


// == compares onlyes value and === compare value and data type
let num1 = 10;
let num2  = 10;
if(num1===num2)
{
    window.alert("both are equal");

}
else{
    window.alert("both are not equal");
}