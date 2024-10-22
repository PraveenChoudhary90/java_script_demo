function ran()
{

    let arrofobj = [
        "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_640.jpg",
        "https://cdn.pixabay.com/photo/2024/02/09/13/03/beach-8563083_640.jpg",
        "https://cdn.pixabay.com/photo/2023/02/01/10/37/sunset-7760143_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/18/19/04/mountains-6721870_640.jpg",
        "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
        "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_640.jpg",
        "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_640.jpg",
        "https://cdn.pixabay.com/photo/2022/07/30/03/13/eibsee-7352987_640.jpg",
        "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_640.jpg",
        "https://cdn.pixabay.com/photo/2023/10/29/13/21/waterfall-8350178_640.jpg",
        "https://cdn.pixabay.com/photo/2023/02/08/17/55/mountains-7777164_640.jpg",
        "https://cdn.pixabay.com/photo/2023/11/03/11/49/autumn-8362844_640.jpg",
        "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg"
    ]
    let ran = Math.random();
    let multiply = ran * (arrofobj.length);
    let selectdiv = Math.floor(multiply);
    let selectimg = document.querySelector("#img");
    selectimg.src =arrofobj[selectdiv];

}