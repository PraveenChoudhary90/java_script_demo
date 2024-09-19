// function
// to check which one is grater number
function number(){
    let num1 =parseInt( window.prompt("Enter the number 1"));
    let num2 = parseInt(window.prompt("Enter the number2"));
    let num3 = parseInt(window.prompt("Enter the number3"));
    if(num1>num2 && num1>num3){
        
    window.alert("Number one is greter");
    }
    else if(num2>num1 && num2>num3){
        
    window.alert("number two is grater");
    }
    else{
        
    window.alert("Number three is greater");
    }

}
number();