function data(){
    let password = document.querySelector("#psw").value;
    console.log(password);
    if(password === ""){
        document.querySelector("#psw1").innerHTML = "Please Enter your correct password";
        let password1 = document.querySelector("#psw");
        password1.style.borderColor = "red";
        password1.style.outlineColor = "red";
        return false;
    }
    if(!
        (
            psw.match(/[1234567890]/)
            &&
            psw.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
            &&
            psw.match(/[qwertyuiopasdfghjklzxcvbnm]/)
            &&
            psw.match(/[!@#$%^&&*(()??]/)
        )
    )
    {
        document.querySelector("#psw1").innerHTML = "Please use al least upper case , lower case , specile symbol";
        let password1 = document.querySelector("#psw");
        password1.style.borderColor = "red";
        password1.style.outlineColor = "red";
        return false; 
    }
}