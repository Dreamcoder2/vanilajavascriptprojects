const button = document.querySelector(".buttons");
const count = document.querySelector(".count");

let values = 0;
const colourchange = function () {
  if (values > 0) {
    count.style.color = "white";
  } else if (values < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "yellow";
  }
};
button.addEventListener("click", function (e) {
  if (e.target.classList.contains("subtract")) {
    values--;
    count.textContent = values;
    colourchange();
  }
  if (e.target.classList.contains("reset")) {
    console.log("addclicked");
    values = 0;
    count.textContent = 0;
    colourchange();
  }
  if (e.target.classList.contains("add")) {
    values++;
    count.textContent = values;
    colourchange();
  }
});
