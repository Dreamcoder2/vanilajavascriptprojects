const fab = document.querySelector("#fab");
const buttons = document.querySelector(".fab-btns");

fab.addEventListener("click", () => {
  buttons.classList.toggle("show");
});
