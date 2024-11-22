 async function  fet()
{
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();
    console.log(data);
    //read and creat data
    let result = data.map((e)=>`
      
    <tr>
    <th>${e.id}</th>
    <th>${e.name}</th>
    <th>${e.age}</th>
    <th>${e.address}</th>
    <td><button onclick ="deletedata('${e.id}');">Delete</button></td>
    <td><button onclick ="updatedata('${e.id}');">update</button></td>
    </tr>

    `).join(" ");
    document.querySelector("#showdata").innerHTML = result;


}
fet();

// delete data
function deletedata(id){
    fetch(`http://localhost:3000/students/${id}`,
        {
            method:'DELETE'
        })
        .then(res=>window.alert("delete data sucessful.....!!!!!"));
};

//add and indert data

function addingdata()
{

    let save = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        address:document.querySelector("#address").value
    }

    fetch("http://localhost:3000/students",{
        method:'POST',
        headers:
        { 'content-type':'application/json'},
        body:JSON.stringify(save),
    })
    .then(res=>window.alert("adding data sucessfully......!!!!!!"));
}

//update data

async function updatedata(id){
   let mydata = await  fetch(`http://localhost:3000/students/${id}`);
   let redata = await mydata.json();
   let sendata = `

    <input type="text" value="${redata.id}" id="id1" readonly><br>
    <input type="text" value="${redata.name}" id="name1"><br>
    <input type="text" value="${redata.age}" id="age1"><br>
    <input type="text" value="${redata.address}" id="address1"><br>
    <input  type="submit" onclick = "finalupdate('${redata.id}')">
   

   `
   document.querySelector("#updatetabel").innerHTML = sendata;
}

function finalupdate(id){
     let udata = {
        name:document.querySelector("#name1").value,
        age:document.querySelector("#age1").value,
        address:document.querySelector("#address1").value,
     }



    fetch(`http://localhost:3000/students/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(udata)
    })
    .then(res=>window.alert("update date sucessfully.....!!!!!!"))
}



