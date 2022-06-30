const checkbox = document.querySelector("#checkbox");
const slider = document.querySelector(".slider");
const basic = document.querySelector(".basic");
const professional = document.querySelector(".professional");
const master = document.querySelector(".master");

slider.addEventListener("click", () => {
  if (!checkbox.checked) {
    [basic.textcontent, professional.textContent, master.textContent] = [
      "2999",
      "3999",
      "4999",
    ];
  } else {
    [basic.textcontent, professional.textContent, master.textContent] = [
      "1999",
      "2999",
      "3999",
    ];
  }
});
