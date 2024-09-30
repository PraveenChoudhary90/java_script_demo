function registraction()
{
     let selectedname = document.querySelector("#name").value;
    let selectednumber = document.querySelector("#number").value;
    let selectedemail = document.querySelector("#email").value;
    let selectedpassword = document.querySelector("#pass").value;
    let selectedconfirmPassword = document.querySelector("#confirm").value;
    let selectedresetPassword = document.querySelector('#reset').value;
    console.log(selectedname);
    console.log(selectednumber);
    console.log(selectedemail);
    console.log(selectedpassword);
    console.log(selectedconfirmPassword);
    console.log(selectedresetPassword);

    if(selectedname === ""){
        document.querySelector('#errorname').innerHTML = "please enter your name";
        let name = document.querySelector('#name');
        name.style.borderColor = "red";
        name.style.outlineColor = "red";
        return false;
    }
   else if(selectednumber === ""){
    document.querySelector('#errornumber').innerHTML = "please enter your number";
        let number = document.querySelector('#number');
        number.style.borderColor = "red";
        number.style.outlineColor = "red";
        return false;
   }
       
    else if(selectedemail ===""){
        document.querySelector('#erroremail').innerHTML = "please enter your email";
        let email = document.querySelector('#email');
        email.style.borderColor = "red";
        email.style.outlineColor = "red";
        return false;
    }
     else if(selectedpassword ===""){
        document.querySelector('#errorpassword').innerHTML = "please enter your password";
        let password = document.querySelector('#pass');
        password.style.borderColor = "red";
        password.style.outlineColor = "red";
        return false;
    }
     else if(selectedconfirmPassword ===""){
        document.querySelector('#errorconfirm').innerHTML = "please enter your confirm password";
        let confirm = document.querySelector('#confirm');
        confirm.style.borderColor = "red";
        confirm.style.outlineColor = "red";
        return false;
    }
     else if(selectedresetPassword ===""){
        document.querySelector('#errorreset').innerHTML = " Can you reset your password";
        let reset = document.querySelector('#reset');
        reset.style.borderColor = "red";
        reset.style.outlineColor = "red";
        return false;
    }
}

function a(){
    let selectedinput = document.querySelector("#name");
    let selectederrorname = document.querySelector("#errorname");
   selectederrorname.innerHTML = ""
   selectedinput.style.borderColor = "black";
   selectedinput.style.outlineColor = "black";

}
function b(){
    let selectedinput = document.querySelector("#number");
    let selectederrornumber1 = document.querySelector("#errornumber");
   selectederrornumber1.innerHTML = ""
   selectedinput.style.borderColor = "black";
   selectedinput.style.outlineColor = "black";

}
function c(){
    let selectedinput = document.querySelector("#email");
    let selectederroremail1 = document.querySelector("#erroremail");
   selectederroremail1.innerHTML = ""
   selectedinput.style.borderColor = "black";
   selectedinput.style.outlineColor = "black";

}
function d(){
    let selectedinput = document.querySelector("#pass");
    let selectederrorpass1 = document.querySelector("#errorpassword");
   selectederrorpass1.innerHTML = ""
   selectedinput.style.borderColor = "black";
   selectedinput.style.outlineColor = "black";

}
function e(){
    let selectedinput = document.querySelector("#confirm");
    let selectederrorconfirm1 = document.querySelector("#errorconfirm");
   selectederrorconfirm1.innerHTML = ""
   selectedinput.style.borderColor = "black";
   selectedinput.style.outlineColor = "black";

}
function f(){
    let selectedinput = document.querySelector("#reset");
    let selectederrorreset1 = document.querySelector("#errorreset");
   selectederrorreset1.innerHTML = ""
   selectedinput.style.borderColor = "black";
   selectedinput.style.outlineColor = "black";

}