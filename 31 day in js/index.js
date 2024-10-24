async function run()
{
    let data = await fetch('http://localhost:4000/product');
    let respons = await data.json();
    console.log(data);
    console.log(respons);


let selectedtable = document.querySelector("#table");
selectedtable.innerHTML = respons.map((item)=>`


<tr>
<td>${item.id}</td>
<td><img width="100px" src = "${item.imageurl}"></td>
<td>${item.pname}</td>
<td>${item.bname}</td>
<td>${item.pprice}</td>
</tr>


`).join(" ");
}