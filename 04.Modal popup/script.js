const oprnbtn = document.querySelector(".btn");
const modal = document.querySelector(".modal-content");
const close = document.querySelector(".close");

oprnbtn.addEventListener("click", openmodal);
close.addEventListener("click", closemodal);

function openmodal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
function closemodal(e) {
  e.preventDefault();
  modal.style.display = "none";
  modal.classList.add(".slide-up");
}
