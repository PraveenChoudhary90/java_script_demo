function data(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    console.log(name , email ,number);

if(name === ""){
    document.querySelector("#name1").innerHTML = "Please enter your name" ;
    let name1 = document.querySelector("#name");
    name1.style.borderColor = "yellow";
    name1.style.outlineColor = "yellow";
    return false;
}
else if(email === ""){
    document.querySelector("#email1").innerHTML = "Enter your valid email";
    let email1 = document.querySelector("#email");
    email1.style.borderColor = "green";
    email1.style.outlineColor = "green";
    return false;
}
else if(!(email.includes( '@') && (email.includes ('.com')))){
    document.querySelector('#email1').innerHTML = "please enter your valid email with @";
    let selectname = document.querySelector('#email');
    selectname.style.borderColor = "green";
    selectname.style.outlineColor = "green";
    return false;
}
else if(number === ""){
    document.querySelector("#number1").innerHTML = "Enter please mobile number";
    let number1 = document.querySelector('#number');
    number1.style.borderColor = "pink";
    number1.style.outlineColor = "pink";
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

