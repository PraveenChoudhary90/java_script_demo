function form()
{
    let obj = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        age:document.querySelector("#age").value,
        number:document.querySelector("#contact").value,

    }


    localStorage.setItem("data",JSON.stringify(obj));
}
    let a = JSON.parse(localStorage.getItem("data"));
    console.log(a);

let myname = document.querySelector("#myname");
let myemail = document.querySelector("#myemail");
let myage = document.querySelector("#myage");
let mycontact = document.querySelector("#mycontact");

myname.innerHTML = a.name,
myemail.innerHTML = a.email,
myage.innerHTML = a.age,
mycontact.innerHTML = a.contact;