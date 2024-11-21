async function fet()
{
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);
    let result = data.map((e)=>`
    
      <tr>
        <th>${e.id}</th>
        <th>${e.name}</th>
        <th>${e.age}</th>
        <th>${e.address}</th>
        <td><button onclick ="deletedata('${e.id}');">delete</button></td>
    </tr>

    `).join(" ");
    document.querySelector("#showdata").innerHTML = result;
}
fet();
 function deletedata(id){

fetch(`http://localhost:3000/students/${id}`,{
    method:'DELETE'
})
.then(re=>alert("data is sucessfully deleted"));

};