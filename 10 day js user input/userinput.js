function data(){
    let selectedname = document.querySelector("#name");
    let name = selectedname.value;
    let selectedage = document.querySelector("#age");
    let age = selectedage.value;
    let email = document.querySelector("#email").value;
    console.log(name);
    console.log(age);
    console.log(email);
    if(name === ""){
        window.alert(" Plese Enter your name");

    return false;
    }
}