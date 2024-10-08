function tax(){
    let amount = parseInt(window.prompt("Enter the amount"));
    if(amount <= 300000){
        window.alert("You should not want to pay");
    }
    else if(amount > 300000 && amount < 750000){
        let tax = (amount/100)*10;
        window.alert("You have to pay " + tax + "on amount" );
    }
    else if(amount >= 750000 ){
        let tax = (amount / 100)* 20;
        window.alert("you have to pay " + tax + "on the amount");
    }
    else{
        window.alert("Inavid choice");
    }

}
tax();