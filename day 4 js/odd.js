// fuctions
function oddnumber(){
    let odd = parseInt(window.prompt("Enter the number "));
    if(odd % 2 !=0){
        window.alert("this is odd number ");

    }
    else{
        window.alert("this is not a odd number");
    }

}
oddnumber();
// function one to another page
function one(){
    let num1 = parseInt(window.prompt("Enter the number"));
    window.alert(num1);
    console.log(num1);
    window.location.href = "login.html";
    window.open("login.html")
}
one();