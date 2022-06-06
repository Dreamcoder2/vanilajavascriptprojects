const number = document.querySelector(".number");
const btn = document.querySelector(".ince");

const generatecolor = function () {
  const randomcolor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${randomcolor}`;
  number.textContent = `#${randomcolor}`;
};
btn.addEventListener("click", generatecolor);
