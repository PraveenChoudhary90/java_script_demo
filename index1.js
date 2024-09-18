// function
// to check which one is grater number
function number(){
    let num1 =parseInt( window.prompt("Enter the number 1"));
    let num2 = parseInt(window.prompt("Enter the number2"));
    let num3 = parseInt(window.prompt("Enter the number3"));
    window.alert(num1>num2 && num1>num3);
    window.alert(num2>num1 && num2>num3);
    window.alert(num3>num1 && num3 > num1);
    window.alert(num1);
    window.alert(num2);
    window.alert(num3);

}
number();