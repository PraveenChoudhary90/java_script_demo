function run()
{
    let arr = [
        "https://cdn.pixabay.com/photo/2023/11/06/09/52/mountain-8369262_640.jpg",
        "https://cdn.pixabay.com/photo/2023/12/15/22/37/trees-8451481_640.jpg",
        "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_640.jpg",
        "https://cdn.pixabay.com/photo/2023/11/05/21/04/alps-8368328_640.jpg",
        "https://cdn.pixabay.com/photo/2023/02/08/17/55/mountains-7777164_640.jpg",
        "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg",
        "https://cdn.pixabay.com/photo/2024/05/31/12/16/bridge-8800485_640.jpg",
        "https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_640.jpg"
    ];
    let output = document.querySelector("#answer");
    output.innerHTML = arr.map((check) => `
    <img style = "width:400px; height:400px" src ="${check}" alt = "not found">
    `).join(" ");
}