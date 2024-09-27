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

    if(name ===""){
        document.querySelector('#errorname').innerHTML = "please enter your name";
        let name = document.querySelector('#name');
        name.style.borderColor = "red";
        name.style.outlineColor = "red";
        return false;
    }
      if(number ===""){
        document.querySelector('#errorname1').innerHTML = "please enter your mobile number";
        let number = document.querySelector('#number');
        number.style.borderColor = "red";
        number.style.outlineColor = "red";
        return false;
    }
     if(email ===""){
        document.querySelector('#errorname2').innerHTML = "please enter your email";
        let email = document.querySelector('#email');
        email.style.borderColor = "red";
        email.style.outlineColor = "red";
        return false;
    }
     if(pass ===""){
        document.querySelector('#errorname3').innerHTML = "please enter your password";
        let password = document.querySelector('#pass');
        password.style.borderColor = "red";
        password.style.outlineColor = "red";
        return false;
    }
     if(confirm ===""){
        document.querySelector('#errorname4').innerHTML = "please enter your confirm password";
        let confirm = document.querySelector('#confirm');
        confirm.style.borderColor = "red";
        confirm.style.outlineColor = "red";
        return false;
    }
     if(reset ===""){
        document.querySelector('#errorname5').innerHTML = " Can you reset your password";
        let reset = document.querySelector('#reset');
        reset.style.borderColor = "red";
        reset.style.outlineColor = "red";
        return false;
    }
}