async function fet_data()
{
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);
    let result = data.map((e)=>`
     <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.address}</td>
    </tr>
    `).join("");
    document.querySelector("#showdata").innerHTML = result;
}
fet_data();