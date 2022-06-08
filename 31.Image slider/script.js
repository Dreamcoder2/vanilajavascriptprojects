const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".after");
const prev = document.querySelector(".prev");
const slidelength = slides.length;
const autoscroll = false;
let slideinterval;

const nextslide = () => {
  console.log("clicking");
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevslide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

next.addEventListener("click", nextslide);
prev.addEventListener("click", prevslide);

if (autoscroll) {
  slideinterval = setInterval(nextslide, 3000);
}
