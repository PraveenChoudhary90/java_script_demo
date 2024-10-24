async function run(){
    let data = await fetch ('http://localhost:4000/product');
    let respons = await data.json();
    console.log(data);
    console.log(respons);

    let selectedtable = document.querySelector("#tabledata");
    selectedtable.innerHTML =respons.map((items) => `
     <tr>
     <td>${items.id}</td>
     <td><img width = "200px" src = "${items.imageurl}"></td>
     <td>${items.pname}</td>
     <td>${items.bname}</td>
     <td>${items.pprice}</td>
     <td>Add to cart</td>
    </tr>

    `).join(" ");
}