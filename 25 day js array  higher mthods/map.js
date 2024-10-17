function run() {
  let arr = [
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2022/07/30/03/13/eibsee-7352987_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_640.jpg"
  ];
  let output = document.querySelector("#answer");
  output.innerHTML = arr.map((imgurl)=>`
       <img style="width:400px; height:400px" src="${imgurl}" alt="not found">
    `).join(" ");
}
