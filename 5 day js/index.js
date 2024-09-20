function tax(){
    let amount  = parseInt(window.prompt("Enter the amount"));
    if(amount <= 350000 ){
        window.alert("less then 3.5 lakh you dont want to pay to tax");
    }
    else if(amount >= 350000 && amount <= 800000){
        let tax = (amount/100)*10;
        window.alert("you have to pay " + tax + "on the amount");
    }
    else if(amount > 800000){
        let tax = (amount/100)*17;
        window.alert("you have to pay " + tax + "on the amount");
    }
    else{
        window.alert("inavlid aomunt");
    }

}
tax();