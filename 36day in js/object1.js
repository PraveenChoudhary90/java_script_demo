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