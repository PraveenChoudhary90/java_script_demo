function save()
{
    let name  = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;
    let city = document.querySelector("#city").value;
    
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("age",age);
    localStorage.setItem("city",city);

}