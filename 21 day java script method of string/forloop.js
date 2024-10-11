let str = "this is our frist java script class";
let store = "";
for(let i = 0; i< str.length; i++){
    if(! (str[i] ==="t")){
        store = store + str[i];
     }
      else{
         store = store + "praveen";
     }
    
}
console.log(store);
console.log(str.replaceAll("o" , "hello"));
