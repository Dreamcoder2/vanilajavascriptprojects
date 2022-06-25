const imglarge = document.querySelector("#img-large");
const productimages = document.querySelectorAll(".img-small img");

productimages.forEach((image) => {
  image.addEventListener("click", (e) => {
    let src = e.target.getAttribute("src");
    imglarge.src = src;
  });
});
