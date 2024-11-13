function save()

{

    let name = document.querySelector("#name").value;
    console.log(name);
    let age = document.querySelector("#age").value;
    let email = document.querySelector("#email").value;
    let psw = document.querySelector("#psw").value;
    let psw1 = document.querySelector("#psw1").value;

    let user = {
        "name":name,
        "age":age,
        "email":email,
          "psw":psw,
          "psw1":psw1
    }

    let user1 = JSON.stringify(user);
    console.log(user1);

    localStorage.setItem("user",user1)


    // localStorage.setItem("name",name)
    // localStorage.setItem("age",age)
    // localStorage.setItem("email",email)
    // localStorage.setItem("psw",psw)
    // localStorage.setItem("psw1",psw1)

}