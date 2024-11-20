 async function fet_data()
{
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);
    let final_data = data.map((e)=>`
    <tr>
    <th>${e.id}</th>
    <th>${e.name}</th>
    <th>${e.age}</th>
    <th>${e.course}</th>
    <th>${e.city}</th>
     <td><button onclick="deletedata('${e.id}')">Delete</button></td>
    </tr>
    `).join(" ");
    document.querySelector("#showdata").innerHTML = final_data;

}
fet_data();
 function deletedata(id)
{
fetch(`http://localhost:3000/students/${id}`,{
    method:'DELETE'
})
.then(hello=>window.alert("delete Succesfully...!!!!!"));
}