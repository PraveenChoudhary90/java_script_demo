function data(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let age = document.querySelector('#age').value;
    let psw = document.querySelector('#psw').value;
    let psw1 = document.querySelector('#psw1').value;
    console.log(name , email , number , age , psw , psw1);

   if(name === ""){
    document.querySelector('#name1').innerHTML = "Please Enter your name";
    let name1 = document.querySelector('#name');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
   if(email === ""){
    document.querySelector('#email1').innerHTML = "Please Enter your email";
    let name1 = document.querySelector('#email');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
   if(number === ""){
    document.querySelector('#number1').innerHTML = "Please Enter your number";
    let name1 = document.querySelector('#number');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
   if(age === ""){
    document.querySelector('#age1').innerHTML = "Please Enter your age";
    let name1 = document.querySelector('#age');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
   if(psw === ""){
    document.querySelector('#psw2').innerHTML = "Please Enter your password";
    let name1 = document.querySelector('#psw');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
   if(psw1 === ""){
    document.querySelector('#psw3').innerHTML = "Please Enter your Re -Enter password";
    let name1 = document.querySelector('#psw1');
    name1.style.borderColor = "pink";
    name1.style.outlineColor = "pink";
    return false;
   }
}
function a(){
    selectinput = document.querySelector('#name');
    selectname1 = document.querySelector('#name1');
    selectname1.innerHTML = "";
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
}

function b(){
    selectinput = document.querySelector('#email');
    selectname1 = document.querySelector('#email1');
    selectname1.innerHTML = "";
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
}

function c(){
    selectinput = document.querySelector('#number');
    selectname1 = document.querySelector('#number1');
    selectname1.innerHTML = "";
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
}

function d(){
    selectinput = document.querySelector('#age');
    selectname1 = document.querySelector('#age1');
    selectname1.innerHTML = "";
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
}

function e(){
    selectinput = document.querySelector('#psw');
    selectname1 = document.querySelector('#psw2');
    selectname1.innerHTML = "";
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
}

function f(){
    selectinput = document.querySelector('#psw1');
    selectname1 = document.querySelector('#psw3');
    selectname1.innerHTML = "";
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
}