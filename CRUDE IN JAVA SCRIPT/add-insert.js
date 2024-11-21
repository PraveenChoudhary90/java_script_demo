async function fet()
{
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);

    let adddata = data.map((t)=>`
     <tr>
     <th>${t.id}</th>
     <th>${t.name}</th>
     <th>${t.age}</th>
     <th>${t.address}</th>
     <td><button onclick ="insertdata('${t.id}');">addon</button></td>
     </tr>

    `).join("");

}
fet();
function insertdata()
{
    let add =
    {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        address:document.querySelector("#address").value,
    }
    
    fetch("http://localhost:3000/students",{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(add)

    })
    .then(ress=>window.alert("addon data is sucessfully insert"));

}