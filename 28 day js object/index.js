let obj = [
{    
    "id":1,
    "img":"/pic2.jpeg",
    "name":"praveen",
    "course":"mern",
    "mobno":1234567890,
},
{
     "id":2,
     "img":"/pic2.jpeg",
    "name":"praveen choudhary",
    "course":"mern full stack",
    "mobno":9098354728,
},
{

     "id":3,
     "img":"/pic2.jpeg",
    "name":"praveen choudhary",
    "course":"mern full stack",
    "mobno":9098354728,
},
];
// console.log(obj[0].mobno);
// console.log(obj[1].course);
 let selecttable = document.querySelector("#output");
 selecttable.innerHTML = obj.map((e)=>`
    <tr>
    <td>${e.id}<td>
    <td><img width = "100px"; src="${e.img}"><td>
    <td>${e.name}<td>
    <td>${e.course}<td>
    <td>${e.mobno}<td>
    <tr>
 `).join('');

