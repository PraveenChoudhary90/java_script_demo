
function check1 (){
    const Data = window.confirm("Do you really want to logout");
     
     if(Data){
        window.location.href="login.html"
     }
     else{
        window.alert("Invalid Click");
     }


}

check1();