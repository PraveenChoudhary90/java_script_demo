async function fet_data()
{
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);
    let updatedata = data.map((e)=>`
    <tr>
    <th>${e.id}</th>
    <th>${e.name}</th>
    <th>${e.age}</th>
    <th>${e.address}</th>
    <td><button onclick = "update(${e.id});">update</button></td>
    </tr>

    `).join();
    document.querySelector("#showdata").innerHTML = updatedata;
}
fet_data();


async function update(id)
{
    let upmydata = await fetch("http://localhost:3000/students")
    let redata = await upmydata.json();
    let senddata = `
<input type="text" value="${redata.id}" readonly> <br>
<input type="text" value="${redata.name}" id="name1"> <br>
<input type="text" value="${redata.age}" id="age1"> <br>
<input type="text" value="${redata.address}" id="address1"> <br>
<input type="submit">
`
document.querySelector("#edittable").innerHTML = senddata;
}