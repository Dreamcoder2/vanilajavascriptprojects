const rangeslider = document.querySelector("input");
const valueEl = document.querySelector(".value");
valueEl.textContent = rangeslider.value;

rangeslider.oninput = function () {
  valueEl.textContent = rangeslider.value;
};
