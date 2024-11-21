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
     <td><button onclick="myedit('${e.id}')">update</button></td>
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




function insertdata()
{
    let data = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        city:document.querySelector("#city").value,
        course:document.querySelector("#course").value
    }

    fetch("http://localhost:3000/students",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)

    })
    .then(res=>alert("Inserted...!!!!!!"))
}

//updata

async function myedit(id)
{
    let upmydata = await fetch("http://localhost:3000/students")
    let redata = await upmydata.json();
    let senddata = `
<input type="text" value="${redata.id}" readonly> <br>
<input type="text" value="${redata.name}" id="name1"> <br>
<input type="text" value="${redata.age}" id="age1"> <br>
<input type="text" value="${redata.city}" id="city1"> <br>
<input type="text" value="${redata.course}" id="course1"> <br>
<input type="submit">
`
document.querySelector("#edittable").innerHTML = senddata;

//  let updatedata = fetch(`http://localhost:3000/students/${id}`,{
//      method:'PUT',
//     body:JSON.stringify(updatedata)
// })
    
}