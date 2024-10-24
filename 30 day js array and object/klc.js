let store = '';
function cal(arg){
    console.log(arg)
    store = store + arg;
    let selectted = document.querySelector("#show");
    selectted.innerHTML =store;
}
function calculator()
{
    let selectted = document.querySelector("#show");
    selectted.innerHTML = eval(store)
    store = eval(store)
    store.toString();
}