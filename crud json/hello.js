async function fet(){

    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);
    let final_data = data.map((e)=>`

    <tr>

    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.add}</td>
    <td>${e.course}</td>
    <td><button onclick ="mydata('${e.id}')">delete</button><td>
    
    </tr>
     `).join(" ");

  document.querySelector("#showdata").innerHTML = final_data;

}
fet();
function mydata(id)
{
fetch(`http://localhost:3000/students/${id}`,{
  method:'DELETE'
})
.then(re=>alert("delete sucessfully...!!!!!"));
}