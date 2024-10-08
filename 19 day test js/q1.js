function number(){
    let number1 = parseInt(window.prompt("Enter the number1"));
    let number2 = parseInt(window.prompt("Enter the number2"));
    let number3 = parseInt(window.prompt("Enter the number3"));
    console.log(number1);
    console.log(number2);
    console.log(number3);
    let sum = (number1+number2+number3);
    let average = sum /3;
    console.log(average);
}
number();