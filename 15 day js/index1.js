function data(){
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let psw= document.querySelector("#psw").value;
    let psw1 = document.querySelector("#psw1").value;
    console.log(name , email, number , psw , psw1);
   
    if(name === ""){
        document.querySelector("#name1").innerHTML = "Please enter your name";
        let name1 = document.querySelector("#name");
        name1.style.borderColor = "red";
        name1.style.outlineColor = "red";
        return false;
    }
    if(email === ""){
        document.querySelector("#email1").innerHTML = "Please Enter your valid email";
        let email1 = document.querySelector("#email");
        email1.style.borderColor = "red";
        email1.style.outlineColor = "red";
        return false;
    }
    
   else if(!(email.includes('@') && (email.includes('.com')))){
    document.querySelector('#email1').innerHTML = "please enter your valid email with @";
    let selectname = document.querySelector('#email');
    selectname.style.borderColor = "red";
    selectname.style.outlineColor = "red";
    return false;
    
   }
    if(number === ""){
        document.querySelector("#number1").innerHTML = "Please Enter your mobile number";
        let number1 = document.querySelector("#number");
        number1 .style.borderColor = "red";
        number1.style.outlineColor = "red";
        return false;
    }
    
   else if(number.length !== 10){
    document.querySelector('#number1').innerHTML = "enter mobile number shoud be in 10 digit";
    let name1 = document.querySelector('#number');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
   else if(isNaN(number)){
     document.querySelector('#number1').innerHTML = "enter mobile number shoud be in 10 digit only integer";
    let name1 = document.querySelector('#number');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;

   }
    if(psw === ""){
        document.querySelector("#psw2").innerHTML = "Please Enter the password";
        let psw2 = document.querySelector("#psw");
        psw2.style.borderColor = "red";
        psw2.style.outlineColor = "red";
        return false;
    }
    
   if(!
    (
     psw.match(/[1234567890]/)
     && 
     psw.match(/[qwertyuipasdfghjklzxcvbnmo]/) 
     && 
     psw.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
     && 
     psw.match(/[!@#$%^&*(){}|?><]/)
    )
) {
    document.querySelector('#psw3').innerHTML = "Please contain  ateast 1 lower case , upper case and storng pasword";
    let name1 = document.querySelector('#psw');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;

   }
   if(psw !== psw1){
    window.alert("Password and confirm password not match");
    document.querySelector("#psw1").value = "";
    document.querySelector("#psw").value = "";
    document.querySelector("#psw").focus();
    return false;


   }
    if(psw1 === ""){
        document.querySelector("#psw3").innerHTML = "Please Enter your confirm password";
        let psw3 = document.querySelector("#psw1");
        psw3.style.borderColor = "red";
        psw3.style.outlineColor = "red";
        return false;
    }
}

function a(arg){
    console.log(arg);
    let selectedinput = document.querySelector(`#${arg}`);
    let selectederrordiv = document.querySelector(`#${arg}`);
    selectederrordiv.innerHTML ="";
    console.log(selectedinput);
    selectedinput.style.borderColor = "black";
    selectedinput.style.outlineColor = "black";
}