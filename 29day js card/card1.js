let arrofobj = [
    {
        "id":1,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgbPH4vMbv5wiBdgpvJPiagPwC29tEp--PA&s",
        "bname":"iphone",
        "pname":"mobile",
        "pprice":20000
    },
      {
        "id":2,
        "imageurl":"https://www.shutterstock.com/image-illustration/anapa-russian-federation-september-17-260nw-1507094657.jpg",
        "bname":"iphone",
        "pname":"mobile",
        "pprice":20000
    },
      {
        "id":3,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseyb_F0cfI1KBKt5BGEAgok932ELTpORyWA&s",
        "bname":"iphone",
        "pname":"mobile",
        "pprice":20000
    },
      {
        "id":4,
        "imageurl":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
        "bname":"iphone",
        "pname":"mobile",
        "pprice":20000
    }
]
let selectimg = document.querySelector("#img");
selectimg.innerHTML = arrofobj.map((card)=> `
<div style = "margin:20px; box-shadow:0px 0px 10px 2px black" >
<img src ="${card.imageurl}" width="200px"  alt = "">
<div>${card.bname}</div>
<div>${card.pname}</div>
<div>${card.pprice}</div>
<div>Add to Cart</div>
<div>Buy Now</div>
</div>

`).join(" ");