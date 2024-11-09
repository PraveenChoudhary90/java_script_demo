
function del(arg)
{
    let res = window.confirm("Do you really want to delete information");
    if(res)
    {
        fetch(`http://localhost:4000/product/${arg}`,
            {
                method:"DELETE"
            });
        }
        else{
            window.alert("Invalid click");
        }
}


let uid = null;
async function updateform(id)
{
let index = await fetch(`http://localhost:4000/product/${id}`);
let res = await index.json();
uid  = id
let selectform = document.querySelector("#upform");
selectform.style.display = "block";
document.querySelector("#imgurl").value = res.imageurl;
document.querySelector("#pname").value = res.pname;
document.querySelector("#bname").value = res.bname;
document.querySelector("#pprice").value = res.pprice;
}

function finalupdate()
{
let imageurl = document.querySelector("#imgurl").value;
let pname = document.querySelector("#pname").value ;
let bname = document.querySelector("#bname").value ;
let pprice = document.querySelector("#pprice").value;

let obj = {
    "imageurl":imageurl,
    "pname":pname,
    "bname":bname,
    "pprice":pprice
}
console.log(obj)
fetch(`http://localhost:4000/product/${uid}`,{
    method:"PUT",
    body:JSON.stringify(obj)

})

}

async function run(){
    let index = await fetch('http://localhost:4000/product');
    let response = await index.json();
    console.log(index);
    console.log(response);
    
    let selecttable = document.querySelector("#show");
    selecttable.innerHTML = response.map((items)=>`
     
    <tr>
    <td>${items.id}</td>
    <td><img width="100px" src="${items.imageurl}"></td>
    <td>${items.pname}</td>
    <td>${items.bname}</td>
    <td>${items.pprice}</td>
    <td><button onclick="del(${items.id})">Delete</button></td>
     <td><button onclick="updateform(${items.id})">update</button></td>
    </tr>

    `).join(" ");
} 