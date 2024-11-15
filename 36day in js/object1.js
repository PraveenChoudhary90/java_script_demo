function save()
{

let obj = {
    name:document.querySelector("#name").value,
    age:document.querySelector("#age").value,
    contact:document.querySelector("#contact").value,
    email:document.querySelector("#email").value,
}


localStorage.setItem("data",JSON.stringify(obj));
}
 let m = JSON.parse(localStorage.getItem("data"));
console.log(m);




let myname = document.querySelector("#myname");
let myage = document.querySelector("#myage");
let mycontact = document.querySelector("#mycontact");
let myemail = document.querySelector("#myemail");


myname.innerHTML = m.name,
myage.innerHTML = m.age,
mycontact.innerHTML = m.contact,
myemail.innerHTML = m.email

