const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let index = 0;

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextslide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}
function prevslide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextslide);
prev.addEventListener("click", prevslide);
display(index);
