function ranimage() {
  let imgurls = [
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qpPt4s1JvOGauQNxN8mp1b8-L0bV0_b1oA&s",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
  ]
  let ran = Math.random();
  let multiply = ran * (imgurls.length);
  let flooredval = Math.floor(multiply);
  let selectimg = document.querySelector("#img");
  selectimg.src = imgurls[flooredval];
}
