const formitems = document.getElementsByClassName("from-item");
const button = document.getElementsByClassName("btn");
const step = document.getElementsByClassName("step");

let currentformitem = 0;
formitems[currentformitem].style.display = "block";

if (currentformitem == 0) {
  button[0].style.display = "none";
  step[0].style.background = "#2f9e44";
}

//next btn
button[1].addEventListener("click", () => {
  currentformitem++;
  const prevformitem = currentformitem - 1;
  if (currentformitem > 0 && currentformitem < 4) {
    button[0].style.display = "inline-block";
    formitems[currentformitem].style.display = "block";
    formitems[prevformitem].style.display = "none";
    step[currentformitem].style.background = "#2f9e44";

    if (currentformitem == 3) {
      button[1].textContent = "submit";
    }
  } else {
    if (currentformitem > 3) {
      alert("form submotted");
    }
  }
});

button[0].addEventListener("click", () => {
  if (currentformitem > 0) {
    currentformitem--;
    const nexformitem = currentformitem + 1;
    formitems[currentformitem].style.display = "block";
    formitems[nexformitem].style.display = "none";
    step[nexformitem].style.background = "#8ce99a";

    if (currentformitem == 0) {
      button[0].style.display = "none";
    }
    if (currentformitem < 3) {
      button[1].textContent = "next";
    }
  }
});
