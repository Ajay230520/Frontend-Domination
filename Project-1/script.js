const images = [
  "https://th.bing.com/th/id/OIP.tNDJ9ZRU8hY5jw2g-1CUnQHaJh?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.Z28C16t8ILkEZCDw8JHgdwHaLG?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.CSPLnXUyBeSTKx1Y_eMZmgHaKT?rs=1&pid=ImgDetMain",
  "https://webneel.com/daily/sites/default/files/images/daily/05-2018/portrait-photography-by-dennis-drozhzhin.jpg",
];

const img = document.getElementById("mainImage");

let currentImag = 0;

function nextImage() {
  
//   img.style.textTransform =
  if (currentImag == images.length) {
    console.log("Last image");
    currentImag = 0;
  }

  img.src = images[currentImag];
  console.log(currentImag);
  currentImag += 1;
}
