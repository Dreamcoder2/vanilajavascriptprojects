const btn = document.querySelector(".count");
const text = document.querySelector(".input-text");

text.addEventListener("keyup", () => {
  btn.textContent = text.value.length;
});
