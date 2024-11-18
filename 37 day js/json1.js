 async function hello()
{
   let res =  await fetch("https://jsonplaceholder.typicode.com/comments");
let p =  await res.json();
 console.log(p);


 let answer =  p.map((e)=>`
    <h1>${e.id}</h1>
    <h1>${e.email}</h1>
   
  `).join("");
  document.querySelector("#demo").innerHTML = answer;

}
hello();