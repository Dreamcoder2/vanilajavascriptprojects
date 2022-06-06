const number = document.querySelector(".number");
const btn = document.querySelector(".ince");

const randgen = function () {
  const randomnumner = Math.floor(Math.random() * 9999);
  number.textContent = randomnumner;
};

btn.addEventListener("click", randgen);
